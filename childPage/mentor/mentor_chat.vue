<template>
	<view id="chat">
		<scroll-view ref="box" class="u-page" scroll-with-animation scroll-y="true" id="textadd"
			:style='{ height: msgListHeight}'>

			<view scroll-with-animation v-for="item,index in messageList[listName]" :key="index" class="listItem"
				:anchor="index">
				<u-row align="top" gutter="5">
					<u-col span="1.5" textAlign="center" align="top" justify="top">
						<image style="height: 38px;width: 38px;  border-radius: 50%;"
							:src="item.type=='assistant'? glmImg :avatar">
						</image>
					</u-col>
					<u-col soan='9'>
						<view v-if="item.type=='assistant'">
							<!-- {{item.code}} -->
							<view class="tips" v-html='item.talk' v-if='index===0'></view>

							<view v-else>
								<span class="loadingTalk" v-if="item.talk.indexOf('思考中')!=-1">
									<view class="flexs">
										<image :src="waitImg" mode="" class="loadingImages"></image>
										<text style="vertical-align: top; word-break:break-all;"
											v-text="item.talk"></text>
									</view>
									<u-col span="4" v-if="index===messageList[listName].length-1"><u-button
											type='primary'
											:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
											size="mini" color="rgba(31, 100, 255, 0.1)" @click="stopStart">
											停止回答
										</u-button>
									</u-col>
								</span>

								<view class="tips" v-else-if="item.code==40022">
									<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
									<view style="display: flex; justify-content: space-around;">
										<u-button type="error" color="#FF9B17" v-if="listName == 'one'"
											:customStyle="{'border-radius':'8px','margin-top':'10px', 'width':'48%'}"
											@click='goToVip'>升级会员</u-button>
										<u-button type="error" color="#1F64FF"
											:customStyle="{'border-radius':'8px','margin-top':'10px', 'width':'48%'}"
											@click='goToVip'>开通流量包</u-button>
									</view>
								</view>

								<view class="tips" v-else-if="item.code==40021">
									<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
								</view>

								<view v-else>
									<view class="tips">

										<!-- <text style="font-size:32upx; word-break:break-all;" v-if="!item.loading">{{item.talk}}</text> -->
										<!-- <ua-markdown :source="item.talk" :showLine="false" v-if="item.loading" /> -->
										<ua-markdown :source="item.talk" :showLine="false" />
										<!-- 时间 和 字数 -->
										<u-row class='edit'>
											<u-col span="6" style="font-size: 14px;">
												字数:{{item.textNumber}}
											</u-col>
											<u-col span="6" style="font-size: 14px;" v-if="item.loading">
												消耗:{{item.integral }}w算力
											</u-col>

										</u-row>
										<u-row class='edit' v-if="item.loading && listName != 'six'">
											<u-col span="6" align="left" style="font-size: 14px;">
												上行:{{item.prompt_tokens}} token
											</u-col>
											<u-col span="6" align="left" style="font-size: 14px;">
												下行:{{item.completion_tokens}} token
											</u-col>
										</u-row>
										<u-row class='edit' v-if="item.loading && listName == 'six'">
											<u-col span="6" align="left" style="font-size: 14px;">
												消耗:{{item.all_tokens}} token
											</u-col>
										</u-row>
										<u-row class='edit'>
											<u-col span="7.5" v-if="item.history"></u-col>
											<u-col span="1" v-if="!item.history">
												<view>
													<image v-if="item.loading" src="@/static/images/time.png" mode=""
														width="16px" height="16px" style="vertical-align: top;"></image>
													<image v-else :src="waitImg" mode="" width="16px" height="16px"
														class="loadingImages">
													</image>
												</view>

											</u-col>
											<u-col span="6.5" style="font-size: 14px;" v-if="!item.history">
												<view>
													<text v-if="item.loading"> 耗时：{{item.time}}秒</text>
													<text v-else> 思考中:{{item.time}}秒</text>
												</view>

											</u-col>
											<u-col span="3.5"></u-col>
											<u-col span="1" @click="copyFun(item.talk)">
												<image src="@/static/images/balckCopy.png" mode=""></image>
											</u-col>
										</u-row>
										<view class="btn_tab">
											<text
												class="tab_left">当前内容为AI生成，不做任何决策使用！由此引发的一切后果，需自行承担，请知悉,已通过阿里云内容安全审核</text>
										</view>

									</view>
									<u-row gutter="20" style="flex-wrap: wrap;width: 100%; margin-bottom: 50px;">
										<!-- 	<u-col span="4" v-if="index===messageList[listName].length-1 && item.loading" ><u-button
												type='primary' :customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="show=true">继续提问</u-button></u-col> -->

										<u-col span="4"
											v-if="index===messageList[listName].length-1 && !item.history && !item.loading"><u-button
												type='primary'
												:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="endController">
												停止回答
											</u-button>
										</u-col>

										<!-- <u-col span="4" v-if="index===messageList[listName].length-1">
											<view style="margin-bottom: 100px;"></view>
										</u-col> -->
										<u-col span="3.5"
											v-if="index===messageList[listName].length-1 && !item.history && item.loading">
											<u-button type='primary'
												:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"14px"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="toIdea">
												投诉及建议
											</u-button>
										</u-col>
										<!-- <u-col span="4" v-if="index===messageList[listName].length-1 && !item.history && item.loading">
											<u-button
												type='primary' :customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="againQs(messageList[listName][messageList[listName].length - 2].talk)">
												<image src="@/static/images/ArrowsCounterClockwise.png" style="width: 40upx;height: 40upx;margin-right: 16upx" mode=""></image>
												重试
											</u-button>
										</u-col> -->

									</u-row>
								</view>
							</view>
						</view>

						<view v-else>

							<!-- <text class="talk" style="background: #1F64FF;color:#fff">{{item.talk}}</text> -->
							<view class="talk" style="background: #1F64FF;color:#fff">

								<view style="word-break:break-all;">
									{{item.talk}}
								</view>

								<view v-if="item.images.length > 0">
									<image :src="getImgUrl(item.images[0])" style="height: 500rpx; width: 500rpx"
										mode="aspectFit" @click="checkImg(item.images[0])"></image>
								</view>


								<image src="@/static/images/copy.png" mode="" @click="copyFun(item.talk)"></image>
							</view>
							<!-- <view @click="againQs(item.talk)" class="reset-question" v-if="messageList[listName][messageList[listName].length - 1].loading && !item.history">
								<image src="@/static/images/ChatCircleDots.png" mode="" style="margin-right: 16upx;width: 40upx;height: 40upx;margin: 8upx;"></image>
								<view>
									重新提问
								</view>
							</view> -->

						</view>
					</u-col>
				</u-row>
			</view>

		</scroll-view>


		<view class="bottomInput bottom_p" :style="{bottom:bottomTop+'px'}">

			<view class="btn_link">
				<view class="link_l">
					<view class="l_chat" style="margin-right: 15rpx;" @click="newChatSpeak"
						v-if="messageList[listName].length > 2 && messageList[listName][messageList[listName].length - 1].loading">
						<u-icon name="plus" color="#1F64FF" size="14"></u-icon>
						<text class="l_text">开启新会话</text>
					</view>
					<view class="l_chat" @click="toHistory">
						<u-icon name="clock" color="#1F64FF" size="16"></u-icon>
						<text class="l_text">历史会话</text>
					</view>
				</view>
				<view class="link_l">
					<view class="l_chat" @click="chatShow = true">
						<text class="l_text" style="margin-right: 10upx;">{{ chatType }}</text>
						<u-icon name="arrow-down" color="#DBDBDB" size="14"></u-icon>
					</view>
				</view>
			</view>
			<u-row align='bottom' gutter="5">
				<u-col span="9.5">
					<view class="chat_input">
						<u-textarea v-model="chatInputValue" placeholder="在此输入您想了解的内容" @confirm="sendInfo" autoHeight
							:showConfirmBar='false' :adjustPosition='false' maxlength='-1' :disableDefaultPadding='true'
							@keyboardheightchange='keyboardheightchange' border='none' :focus="false">
						</u-textarea>
						<view v-if="imgList.length > 0">
							<view class="input_right" v-for="(val, index) in imgList" :key="index">
								<image :src="getImgUrl(val)" class="inputImg"></image>
								<text class="input_text"></text>
								<u-icon name="close" size="18" @click="imgList.splice(index,1)"></u-icon>
							</view>
						</view>


					</view>

				</u-col>
				<u-col span="2.5" align="bottom">
					<u-button type="primary" color="#1F64FF" @click="sendInfo">发送</u-button>
				</u-col>
			</u-row>

		</view>
		<u-modal :show="show" @cancel="show = false" confirmText="确定" confirmColor="#1F64FF" :showCancelButton='true'
			@confirm="showFun">
			<view class="modal">
				<view class="edit">

					<view class="changes"></view> 继续提问
				</view>
				<view class="content">
					<u--textarea v-model="complete" placeholder="在此输入你想优化的内容" border="none"
						height='110px'></u--textarea>
					<!-- {{content.prompts_name}} -->
				</view>
			</view>
		</u-modal>

		<!-- 模型选择 -->
		<u-picker :show="chatShow" :columns="samplerList" :closeOnClickOverlay="true" @close="chatShow = false"
			v-model="chatType" keyName="label" @cancel="chatShow = false" @confirm="samplerSubmit"></u-picker>
		<!-- <view class="idea" @click="toIdea">
		<image :src="ideaImg" mode=""></image>
		<view style="color: #0E39DE;font-size: 24upx;font-weight: 600;">投诉及建议</view>
	</view> -->
	</view>
</template>

<script>
	import {
		creatChat,
		chat_likes,
		chat_session,
		xfChat
	} from "@/apis/chat.js"
	import {
		getContext,
		getMe,
		getTutor,
		getTextContext
	} from "@/apis/user.js"
	import * as TextEncoding from 'text-encoding-shim';
	import uaMarkdown from '@/components/ua2-markdown/ua-markdown.vue'

	export default {
		data() {
			return {
				scrollTop: '573',
				isfinish: true, // 会话中
				//文心一言
				stop_three: false,
				three_shi: 0,
				three_time: 0,
				requestTask_three: '',
				evaluateType2: [],

				//讯飞星火
				stop_four: false,
				four_shi: 0,
				four_time: 0,
				requestTask_four: '',
				evaluateType3: [],

				//火山云雀
				stop_twelve: false,
				twelve_shi: 0,
				twelve_time: 0,
				requestTask_twelve: '',
				evaluateType10: [],

				//腾讯混元
				stop_eleven: false,
				eleven_shi: 0,
				eleven_time: 0,
				requestTask_eleven: '',
				evaluateType11: [],

				//ChatGLM
				stop_six: false,
				six_shi: 0,
				six_time: 0,
				requestTask_six: '',
				evaluateType5: [],

				//通义千问
				stop_seven: false,
				seven_shi: 0,
				seven_time: 0,
				requestTask_seven: '',
				evaluateType6: [],

				//360智脑
				stop_eight: false,
				eight_shi: 0,
				eight_time: 0,
				requestTask_eight: '',
				evaluateType7: [],


				selectDone: "",
				msgListHeight: 0,
				// barHeight: 50,
				userInfo: '',

				current: 0,
				key: 0,
				upDownText: false,
				show: false,
				transitionShow: false,
				complete: "",

				chatInputValue: "",
				chatType: '文心一言',
				chat_type: 4,
				loading: true,
				session_code: "",
				chat_group_code: "",
				supplement: {}, // 请求参数
				listName: 'three',
				imgList: [],
				messageList: {
					'three': [],
					'four': [],
					'six': [],
					'seven': [],
					'eight': [],
					'twelve': [],
					'eleven': [],
				},
				content: '',
				message_covert: '',
				me_id: '',
				tutor_id: '',
				avatar: '',
				bottomTop: 0,

				glmImg: global.baseImg + '/xcx/9b91253a-59c2-4ab8-9e38-af7c6464823c.jpg',
				waitImg: global.baseImg + '/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',
				chatShow: false,
				tipContent: '',
				samplerList: [
					[{
							label: '文心一言',
							chat_type: 4
						},
						{
							label: '讯飞星火',
							chat_type: 5
						},
						{
							label: '火山云雀',
							chat_type: 1000
						},
						{
							label: '腾讯混元',
							chat_type: 1001
						},
						{
							label: 'ChatGLM',
							chat_type: 8
						},
						{
							label: '通义千问',
							chat_type: 10
						},
						{
							label: '360智脑',
							chat_type: 12
						},
						
					]

				],
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
			}
		},
		components: {
			uaMarkdown
		},
		onLoad(option) {
			console.log(option, 4562)
			if (option.me_id) {
				this.tipContent = option.greet
				this.content = option.greet + `<br /><span style="font-size:14px;color:#9B9B9F;">3.6w算力/1k token</span>`;
				this.glmImg = global.baseImg + '/' + option.imgUrl;
				this.tutor_id = option.tutor_id;
				this.me_id = option.me_id;
			} else {
				if (option.clerk_id != '') {
					let clerkArr = option.clerk_id.split(',')
					if (clerkArr.length > 1) {
						this.me_id = clerkArr[0]
						this.tutor_id = clerkArr[1]
						this.getTutor()
					} else {
						this.me_id = clerkArr[0]
						this.tutor_id = ''
						this.getMe()
					}
				}
				// console.log(this.me_id,8569)
			}

			// 获取屏幕高度
			uni.getSystemInfo({
				success: res => {
					this.screenHeight = res.windowHeight
					// 100为底部输入栏高度，单位rpx，需要先转成px
					this.msgListHeight = this.screenHeight - uni.upx2px(120)
				}
			})

		},

		onShow() {

			// console.log('加载1121', uni.getStorageSync('history_code'));
			if (uni.getStorageSync('chat_code') != '') {
				console.log('获取到了')
				this.historySession(uni.getStorageSync('chat_code'))
			}

			let chat_val = {
				talk: `<span style="font-size: 17px">${this.content}</span>`,
				type: 'assistant'
			}
			this.messageList[this.listName][0] = chat_val

			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			// console.log(uni.getStorageSync("avatarUrl"), 2222)
			let avatarUrl = global.baseImg + '/' + uni.getStorageSync("avatarUrl");
			this.avatar = avatarUrl;
			this.toBottom()
		},

		onHide() {

		},

		methods: {

			//获取我的信息
			getMe() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'me_id': this.me_id
				}

				getMe(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							this.content = res.data[0].greeting;
							this.glmImg = global.baseImg + '/' + res.data[0].photo;
							let chat_val = {
								talk: `<span style="font-size: 17px">${this.content}</span>`,
								type: 'assistant'
							}
							this.messageList[this.listName][0] = chat_val
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},

			//获取导师信息
			getTutor() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'me_id': this.me_id,
					'tutor_id': this.tutor_id
				}

				getTutor(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							this.content = res.data[0].greeting;
							this.glmImg = global.baseImg + '/' + res.data[0].avatar;
							let chat_val = {
								talk: `<span style="font-size: 17px">${this.content}</span>`,
								type: 'assistant'
							}
							this.messageList[this.listName][0] = chat_val
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},

			historySession(session_code) {
				let chat_tip = ''; // 对话类型
				let data = JSON.parse(session_code)
				// console.log(data.tpye, 995)
				if (data.type == 4) {
					this.listName = 'three';
					chat_tip = 4
					this.chatType = '文心一言'
					this.chat_type = 4
				} else if (data.type == 5) {
					this.listName = 'four';
					chat_tip = 5
					this.chatType = '讯飞星火'
					this.chat_type = 5
				} else if (data.type == 8) {
					this.listName = 'six';
					chat_tip = 8
					this.chatType = 'ChatGLM'
					this.chat_type = 8
				} else if (data.type == 10) {
					this.listName = 'seven';
					chat_tip = 10
					this.chatType = '通义千问'
					this.chat_type = 10
				} else if (data.type == 12) {
					this.listName = 'eight';
					chat_tip = 12
					this.chatType = '360智脑'
					this.chat_type = 12
				} else if (data.type == 1000) {
					this.listName = 'twelve';
					chat_tip = 1000
					this.chatType = '火山云雀'
					this.chat_type = 1000
				} else if (data.type == 1001) {
					this.listName = 'eleven';
					chat_tip = 1001
					this.chatType = '腾讯混元'
					this.chat_type = 1001
				}
				this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1)
				this.$forceUpdate()


				chat_session(data.code).then(res => {
					//初始化信息
					this.supplement = {
						chat_type: chat_tip,
						// action_type: 3,
						// session_code: this.session_code,
						// chat_group_code: this.chat_group_code,
						// stream_str: 1,
						// is_decode: 1,
						msg_list: []
					}

					res.data.map((item, tip) => {
						this.supplement.session_code = item.session_code
						this.supplement.chat_group_code = item.chat_group_code

						if (item.images == null) {
							item.images = []
						}
						this.messageList[this.listName].push({
							talk: item.content,
							type: item.role,
							integral: item.integral,
							completion_tokens: item.completion_tokens,
							prompt_tokens: item.prompt_tokens,
							time: 0,
							code: 200,
							// status,
							loading: true,
							all_tokens: item.total_tokens,
							textNumber: item.content.replace(/[\r\n]/g, "").length,
							history: true,
							session_code: item.session_code,
							chat_group_code: item.chat_group_code,
							images: item.images
						})
						this.session_code = item.session_code;
						this.supplement.msg_list.push({
							role: item.role,
							content: item.content
						})

						this.toBottom()
						this.$forceUpdate()
					})
					uni.setStorageSync('chat_code', '')
				})
			},

			copyFun(val) {
				uni.setClipboardData({
					data: val, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				})

			},

			radioChange(e) {
				if (e) {

					this.upDownText = false
					this.selectDone = true
					this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1)
					this.sendMessage(this.chatInputValue)
				} else {
					let arr = []
					this.messageList[this.listName].map((item, index) => {
						if (index > 0) {
							arr.push({
								role: item.type,
								content: item.talk,
								images: item.images
							})
						}

					})
					this.supplement.msg_list = arr
					this.supplement.chat_group_code = ''
					this.upDownText = true
					this.selectDone = true
					this.sendMessage(this.chatInputValue)
				}
				this.transitionShow = false
			},

			base64ToString(encodedString) {
				// console.log(encodedString,'encodedString');
				// Convert the Base64 string to a Uint8Array
				var decodedData = Uint8Array.from(this.atob(encodedString), c => c.charCodeAt(0));

				// Create a TextDecoder instance with the appropriate character encoding
				var decoder = new TextEncoding.TextDecoder('utf8');

				// Decode the Uint8Array to a string
				var decodedString = decoder.decode(decodedData);

				// console.log(decodedString, 'decodedStringdecodedString');
				// console.log(decodedString, 'decodedStringdecodedString');
				return decodedString;
			},

			//解码
			atob(string) {
				string = String(string).replace(/[\t\n\f\r ]+/g, "");
				var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
				if (!b64re.test(string))
					throw new TypeError(
						"Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
				string += "==".slice(2 - (string.length & 3));
				var bitmap, result = "",
					r1, r2, i = 0;
				for (; i < string.length;) {
					bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12 |
						(r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));
					result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
						r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
						String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
				}
				return result;

			},


			//信息回调方法
			async creatChatFun(data, state) {
				if (this.listName == 'three') {
					let three_num = 0;
					this.messageList.three.push({
						talk: `思考中,耗时${three_num}秒`,
						type: 'assistant'
					})

					this.three_shi = setInterval(() => {
						three_num++
					}, 1000)
					this.three_time = setInterval(() => {
						this.messageList.three[this.messageList.three.length - 1] = {
							talk: `思考中,耗时${three_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = 'eb-instant';
					this.requestTask_three = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_completion',
						data,
						header: {
							'source': global.source,
							'Authorization': userInfo.token,
							'role': userInfo.role,
						},
						method: 'POST',
						// responseType: 'ArrayBuffer',
						enableChunked: true,
						success: response => {
							// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
							// console.log(response, 'ssss6')
							this.messageList.three[this.messageList.three.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.three_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.three_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								clearInterval(this.three_time)

								// 非手动停止才执行
								if (!this.stop_three) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											// console.log(userInfo.role == 'guess' ,'panduan');

											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[
													this.listName].length - 1] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

									this.toBottom()
									this.$forceUpdate()
								}

							}
						}
					})
					let strArr = []
					let info = ''
					let integral = 0
					let completion_tokens = 0
					let prompt_tokens = 0
					let tabType = this.listName

					this.requestTask_three.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null)
								// info += this.base64ToString(JSON.parse(item).content)
								info += JSON.parse(item).content

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType]
										.length - 1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.three_time)
									clearInterval(this.three_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								let load_state = false

								if (status == true) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 4,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
											},
											{
												role: 'assistant',
												content: info,
											}
										]
									}
								}

								//继续提问和补充
								if (state == 'continue') {
									//把数据变成Array
									try {
										// console.log('进来了', info);	
										this.supplement.msg_list = JSON.parse(this.supplement
											.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.three_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: three_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
								}

							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'four') {
					let four_num = 0;
					this.messageList.four.push({
						talk: `思考中,耗时${four_num}秒`,
						type: 'assistant'
					})

					this.four_shi = setInterval(() => {
						four_num++
					}, 1000)
					this.four_time = setInterval(() => {
						this.messageList.four[this.messageList.four.length - 1] = {
							talk: `思考中,耗时${four_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = 'v1.1';
					this.requestTask_four = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_completion',
						data,
						header: {
							'source': global.source,
							'Authorization': userInfo.token,
							'role': userInfo.role,
						},
						method: 'POST',
						// responseType: 'ArrayBuffer',
						enableChunked: true,
						success: response => {
							// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
							// console.log(response, 'ssss6')
							this.messageList.four[this.messageList.four.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.four_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.four_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								clearInterval(this.four_time)

								// 非手动停止才执行
								if (!this.stop_four) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[
													this.listName].length - 1] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

									this.toBottom()
									this.$forceUpdate()
								}

							}
						}
					})
					let strArr = []
					let info = ''
					let integral = 0
					let completion_tokens = 0
					let prompt_tokens = 0
					let tabType = this.listName

					this.requestTask_four.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null)
								// info += this.base64ToString(JSON.parse(item).content)
								info += JSON.parse(item).content
							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType]
										.length - 1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.four_time)
									clearInterval(this.four_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								let load_state = false

								if (status == 2) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 5,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
											},
											{
												role: 'assistant',
												content: info,
											}
										]
									}
								}

								//继续提问和补充
								if (state == 'continue') {
									//把数据变成Array
									try {
										// console.log('进来了', info);	
										this.supplement.msg_list = JSON.parse(this.supplement
											.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.four_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: four_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
								}
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'six') {
					let six_num = 0;
					this.messageList.six.push({
						talk: `思考中,耗时${six_num}秒`,
						type: 'assistant'
					})

					this.six_shi = setInterval(() => {
						six_num++
					}, 1000)
					this.six_time = setInterval(() => {
						this.messageList.six[this.messageList.six.length - 1] = {
							talk: `思考中,耗时${six_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)

					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = 'chatglm_turbo';
					this.requestTask_six = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_completion',
						data,
						header: {
							'source': global.source,
							'Authorization': userInfo.token,
							'role': userInfo.role,
						},
						method: 'POST',
						// responseType: 'ArrayBuffer',
						enableChunked: true,
						success: response => {
							// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
							// console.log(response, 'ssss6')
							this.messageList.six[this.messageList.six.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.six_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.six_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								clearInterval(this.six_time)

								// 非手动停止才执行
								if (!this.stop_six) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[
													this.listName].length - 1] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

									this.toBottom()
									this.$forceUpdate()
								}

							}
						}
					})
					let strArr = []
					let info = ''
					let integral = 0
					let completion_tokens = 0
					let prompt_tokens = 0
					let all_tokens = 0
					let tabType = this.listName

					this.requestTask_six.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null) {
								// let chat_val = this.base64ToString(JSON.parse(item).content);
								let chat_val = JSON.parse(item).content;
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(
									/Generative Pre-trained Transformer/gi, "");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info += session4
							}


							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType]
										.length - 1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.six_time)
									clearInterval(this.six_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								all_tokens = JSON.parse(item).total_tokens
								let load_state = false

								if (status == 'stop') {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 8,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
											},
											{
												role: 'assistant',
												content: info,
											}
										]
									}
								}

								//继续提问和补充
								if (state == 'continue') {
									//把数据变成Array
									try {
										// console.log('进来了', info);	
										this.supplement.msg_list = JSON.parse(this.supplement
											.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.six_time)

								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: six_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									all_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,

								}
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'seven') {
					let seven_num = 0;
					this.messageList.seven.push({
						talk: `思考中,耗时${seven_num}秒`,
						type: 'assistant'
					})

					this.seven_shi = setInterval(() => {
						seven_num++
					}, 1000)
					this.seven_time = setInterval(() => {
						this.messageList.seven[this.messageList.seven.length - 1] = {
							talk: `思考中,耗时${seven_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = 'qwen-plus';
					this.requestTask_seven = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_completion',
						data,
						header: {
							'source': global.source,
							'Authorization': userInfo.token,
							'role': userInfo.role,
						},
						method: 'POST',
						// responseType: 'ArrayBuffer',
						enableChunked: true,
						success: response => {
							// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
							// console.log(response, 'ssss6')
							this.messageList.seven[this.messageList.seven.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.seven_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.seven_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								clearInterval(this.seven_time)

								// 非手动停止才执行
								if (!this.stop_seven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[
													this.listName].length - 1] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

									this.toBottom()
									this.$forceUpdate()
								}

							}
						}
					})
					let strArr = []
					let info = ''
					let integral = 0
					let completion_tokens = 0
					let prompt_tokens = 0
					let tabType = this.listName

					this.requestTask_seven.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null) {
								// let chat_val = this.base64ToString(JSON.parse(item).content);
								let chat_val = JSON.parse(item).content;
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(
									/Generative Pre-trained Transformer/gi, "");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info = session4
							}


							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType]
										.length - 1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.seven_time)
									clearInterval(this.seven_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								let load_state = false

								if (status == 'stop') {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 10,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
											},
											{
												role: 'assistant',
												content: info,
											}
										]
									}
								}

								//继续提问和补充
								if (state == 'continue') {
									//把数据变成Array
									try {
										// console.log('进来了', info);	
										this.supplement.msg_list = JSON.parse(this.supplement
											.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.seven_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: seven_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
								}

								// console.log(this.messageList[tabType],888)
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'eight') {
					let eight_num = 0;
					this.messageList.eight.push({
						talk: `思考中,耗时${eight_num}秒`,
						type: 'assistant'
					})

					this.eight_shi = setInterval(() => {
						eight_num++
					}, 1000)
					this.eight_time = setInterval(() => {
						this.messageList.eight[this.messageList.eight.length - 1] = {
							talk: `思考中,耗时${eight_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)

					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = '360GPT_S2_V9';
					this.requestTask_eight = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_completion',
						data,
						header: {
							'source': global.source,
							'Authorization': userInfo.token,
							'role': userInfo.role,
						},
						method: 'POST',
						// responseType: 'ArrayBuffer',
						enableChunked: true,
						success: response => {
							// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
							// console.log(response, 'ssss6')
							this.messageList.eight[this.messageList.eight.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.eight_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.eight_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								clearInterval(this.eight_time)

								// 非手动停止才执行
								if (!this.stop_eight) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[
													this.listName].length - 1] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

									this.toBottom()
									this.$forceUpdate()
								}

							}
						}
					})
					let strArr = []
					let info = ''
					let integral = 0
					let completion_tokens = 0
					let prompt_tokens = 0
					let all_tokens = 0
					let tabType = this.listName

					this.requestTask_eight.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null) {
								// let chat_val = this.base64ToString(JSON.parse(item).content);
								let chat_val = JSON.parse(item).content;
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(
									/Generative Pre-trained Transformer/gi, "");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info += session4
							}


							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType]
										.length - 1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.eight_time)
									clearInterval(this.eight_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								all_tokens = JSON.parse(item).total_tokens
								let load_state = false

								if (status == 'stop') {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 12,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
											},
											{
												role: 'assistant',
												content: info,
											}
										]
									}
								}

								//继续提问和补充
								if (state == 'continue') {
									//把数据变成Array
									try {
										// console.log('进来了', info);	
										this.supplement.msg_list = JSON.parse(this.supplement
											.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.eight_time)

								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: eight_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									all_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,

								}
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'twelve') {
					let twelve_num = 0;
					this.messageList.twelve.push({
						talk: `思考中,耗时${twelve_num}秒`,
						type: 'assistant'
					})

					this.twelve_shi = setInterval(() => {
						twelve_num++
					}, 1000)
					this.twelve_time = setInterval(() => {
						this.messageList.twelve[this.messageList.twelve.length - 1] = {
							talk: `思考中,耗时${twelve_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = 'skylark-chat';
					this.requestTask_twelve = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_completion',
						data,
						header: {
							'source': global.source,
							'Authorization': userInfo.token,
							'role': userInfo.role,
						},
						method: 'POST',
						// responseType: 'ArrayBuffer',
						enableChunked: true,
						success: response => {
							// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
							// console.log(response, 'ssss6')
							this.messageList.twelve[this.messageList.twelve.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.twelve_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.twelve_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								clearInterval(this.twelve_time)

								// 非手动停止才执行
								if (!this.stop_twelve) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											// console.log(userInfo.role == 'guess' ,'panduan');

											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[
													this.listName].length - 1] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

									this.toBottom()
									this.$forceUpdate()
								}

							}
						}
					})
					let strArr = []
					let info = ''
					let integral = 0
					let completion_tokens = 0
					let prompt_tokens = 0
					let tabType = this.listName

					this.requestTask_twelve.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)
						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null)
								// info += this.base64ToString(JSON.parse(item).content)
								info += JSON.parse(item).content
							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType]
										.length - 1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.twelve_time)
									clearInterval(this.twelve_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								let load_state = false

								if (status == true) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 1000,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
											},
											{
												role: 'assistant',
												content: info,
											}
										]
									}
								}

								//继续提问和补充
								if (state == 'continue') {
									//把数据变成Array
									try {
										// console.log('进来了', info);	
										this.supplement.msg_list = JSON.parse(this.supplement
											.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.twelve_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: twelve_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
								}

							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'eleven') {
					let eleven_num = 0;
					this.messageList.eleven.push({
						talk: `思考中,耗时${eleven_num}秒`,
						type: 'assistant'
					})

					this.eleven_shi = setInterval(() => {
						eleven_num++
					}, 1000)
					this.eleven_time = setInterval(() => {
						this.messageList.eleven[this.messageList.eleven.length - 1] = {
							talk: `思考中,耗时${eleven_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = 'ChatStd';
					this.requestTask_eleven = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_completion',
						data,
						header: {
							'source': global.source,
							'Authorization': userInfo.token,
							'role': userInfo.role,
						},
						method: 'POST',
						// responseType: 'ArrayBuffer',
						enableChunked: true,
						success: response => {
							// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
							// console.log(response, 'ssss6')
							this.messageList.eleven[this.messageList.eleven.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.eleven_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.eleven_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								clearInterval(this.eleven_time)

								// 非手动停止才执行
								if (!this.stop_eleven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											// console.log(userInfo.role == 'guess' ,'panduan');

											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[
													this.listName].length - 1] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

									this.toBottom()
									this.$forceUpdate()
								}

							}
						}
					})
					let strArr = []
					let info = ''
					let integral = 0
					let completion_tokens = 0
					let prompt_tokens = 0
					let tabType = this.listName

					this.requestTask_eleven.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null)
								// info += this.base64ToString(JSON.parse(item).content)
								info += JSON.parse(item).content
								console.log('infotx',info);

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType]
										.length - 1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.eleven_time)
									clearInterval(this.eleven_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								let load_state = false

								if (status == true) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 1001,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
											},
											{
												role: 'assistant',
												content: info,
											}
										]
									}
								}

								//继续提问和补充
								if (state == 'continue') {
									//把数据变成Array
									try {
										// console.log('进来了', info);	
										this.supplement.msg_list = JSON.parse(this.supplement
											.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.eleven_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: eleven_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
								}

							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				}
			},
			//补充提问
			showFun() {
				// if(typeof(this.supplement.msg_list)=='string') {
				// 	this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
				// }
				// console.log(this.supplement.msg_list,333)
				// console.log(typeof(this.supplement.msg_list),334)
				if (this.complete.trim() == '') {
					return this.$api.msg('补充内容不能为空')
				}

				this.show = false
				// this.supplement.msg_list.push({
				// 	role: 'user',
				// 	content: this.complete
				// })
				if (this.listName == 'three' || this.listName == 'five' || this.listName == 'eight' || this.listName ==
					'seven' || this.listName == 'twelve' || this.listName == 'eleven') {
					this.supplement.msg_list = [{
							role: 'user',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 2].talk,
							images: this.messageList[this.listName][this.messageList[this.listName].length - 2].images,
							covert_content: this.messageList[this.listName][this.messageList[this.listName].length - 2]
								.message_covert
						},
						{
							role: 'assistant',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 1].talk,
							images: []
						},
						{
							role: 'user',
							content: this.complete,
							images: []
						}
					]
				} else {
					this.supplement.msg_list = [{
							role: 'assistant',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 1].talk,
							images: []
						},
						{
							role: 'user',
							content: this.complete,
							images: []
						}
					]
				}
				this.messageList[this.listName].push({
					talk: this.complete,
					type: 'user',
					images: []
				})
				//把数据变成JSON
				this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)

				this.complete = ""

				this.creatChatFun(this.supplement, 'continue')


			},

			sendInfo() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'me_id': this.me_id,
					'tutor_id': this.tutor_id,
					'question_content': this.chatInputValue
				}
				getTextContext(val).then(res => {
					if (res.code == 20000) {
						this.message_covert = res.data.prompt
						this.sendMessage()
					} else {
						this.$api.msg(res.msg)
					}

				})
			},
			sendMessage() {

				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;
				let history = this.messageList[this.listName][this.messageList[this.listName].length - 1].history;

				if (send_talk.indexOf('思考中') != -1) {

					this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
					return
				}
				if (send_time == 0 && !history) {
					this.messageList[this.listName].pop()
				}
				if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容')


				// this.askShow = false; // 隐藏热搜提问

				// if (this.messageList[this.listName].length > 2 && !this.selectDone) {
				// 	console.log('关联上下文')
				// 	this.transitionShow = true //询问是否关联上下文
				// 	return
				// }

				// uni.setStorageSync('talkInfo', '')


				let img_url = ''
				if (this.imgList.length > 0) {
					img_url = this.imgList
				} else {
					img_url = ''
				}
				let arr = []
				this.messageList[this.listName].map((item, index) => {
					if (index > 0) {
						arr.push({
							role: item.type,
							content: item.talk,
						})
					}

				})

				this.messageList[this.listName].push({
					talk: this.chatInputValue,
					type: 'user',
					images: img_url,
					message_covert: this.message_covert
				})

				let chat_id = this.me_id;
				let agent_id = this.me_id;
				if(this.tutor_id != '') {
					chat_id = this.me_id + ','+ this.tutor_id
					agent_id = this.tutor_id
				}
				let chat_cont = this.chatInputValue

				let data = {
					chat_type: this.chat_type,
					action_type: '3',
					scenario_type: 'mentor',
					question_id: chat_id,
					session_code: this.session_code,
					chat_group_code: "",
					content: this.chatInputValue,
					// company_code: this.content.company_code,
					// clerk_code: this.content.clerk_code,
					msg_list: arr
				}
				data.msg_list.push({
					role: 'user',
					covert_content: this.message_covert,
					content: chat_cont,
					agent_id: agent_id
				})
				// if(this.imgList.length > 0) {
				// 	data.msg_list[0].images = this.imgList
				// }
				data.msg_list = JSON.stringify(data.msg_list)
				this.creatChatFun(data, 'first')
				this.toBottom()

				this.selectDone = false
				this.chatInputValue = ''
				this.message_covert = ''
				this.imgList = []

			},


			toBottom() {

				let that = this
				this.$nextTick(() => {
					setTimeout(() => {

						uni.createSelectorQuery().select("#textadd").boundingClientRect(function(
							res) { //定位到你要的class的位置
							// console.log(res,330);
							// console.log(res.height,410)
							uni.pageScrollTo({
								scrollTop: res.height,
								duration: 0
							});
						}).exec()
					}, 1500)

				})
			},

			goToVip() {
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/pages/user/vip/vip',
					})
				}

			},

			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login',
				})
			},

			// 停止会话
			endController() {
				if (this.listName == 'three') {
					this.stop_three = true
					this.requestTask_three.abort();
					clearInterval(this.three_shi)
					clearInterval(this.three_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'four') {
					this.stop_four = true
					this.requestTask_four.abort();
					clearInterval(this.four_shi)
					clearInterval(this.four_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'six') {
					this.stop_six = true
					this.requestTask_six.abort();
					clearInterval(this.six_shi)
					clearInterval(this.six_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'seven') {
					this.stop_seven = true
					this.requestTask_seven.abort();
					clearInterval(this.seven_shi)
					clearInterval(this.seven_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'eight') {
					this.stop_eight = true
					this.requestTask_eight.abort();
					clearInterval(this.eight_shi)
					clearInterval(this.eight_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'twelve') {
					this.stop_twelve = true
					this.requestTask_twelve.abort();
					clearInterval(this.twelve_shi)
					clearInterval(this.twelve_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'eleven') {
					this.stop_eleven = true
					this.requestTask_eleven.abort();
					clearInterval(this.eleven_shi)
					clearInterval(this.eleven_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				}
				this.$forceUpdate()
			},

			// 停止开始回答
			stopStart() {
				if (this.listName == 'three') {
					this.stop_three = true
					this.requestTask_three.abort();
					clearInterval(this.three_shi)
					clearInterval(this.three_time)
					this.messageList.three.pop()
				} else if (this.listName == 'four') {
					this.stop_four = true
					this.requestTask_four.abort();
					clearInterval(this.four_shi)
					clearInterval(this.four_time)
					this.messageList.four.pop()
				} else if (this.listName == 'six') {
					this.stop_six = true
					this.requestTask_six.abort();
					clearInterval(this.six_shi)
					clearInterval(this.six_time)
					this.messageList.six.pop()
				} else if (this.listName == 'seven') {
					this.stop_seven = true
					this.requestTask_seven.abort();
					clearInterval(this.seven_shi)
					clearInterval(this.seven_time)
					this.messageList.seven.pop()
				} else if (this.listName == 'eight') {
					this.stop_eight = true
					this.requestTask_eight.abort();
					clearInterval(this.eight_shi)
					clearInterval(this.eight_time)
					this.messageList.eight.pop()
				} else if (this.listName == 'twelve') {
					this.stop_twelve = true
					this.requestTask_twelve.abort();
					clearInterval(this.twelve_shi)
					clearInterval(this.twelve_time)
					this.messageList.twelve.pop()
				} else if (this.listName == 'eleven') {
					this.stop_eleven = true
					this.requestTask_eleven.abort();
					clearInterval(this.eleven_shi)
					clearInterval(this.eleven_time)
					this.messageList.eleven.pop()
				}
				this.$forceUpdate()
			},

			newChatSpeak() {
				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;

				// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1].time, 888);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再操作！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再操作！')
					return
				}
				this.askShow = true; // 显示热搜提问
				this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1);
				this.session_code = '';
				this.chat_group_code = ''
				this.imgList = []

			},

			toHistory() {
				uni.navigateTo({
					url: '/childPage/mentor/history_mentor'
				})
			},

			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},

			//模型选择器
			samplerSubmit(e) {

				this.chatShow = false;
				this.chatType = e.value[0].label;
				this.chat_type = e.value[0].chat_type;
				if (this.chat_type == 4) {
					this.listName = 'three';
					this.content = this.tipContent +
						`<br /><span style="font-size:14px;color:#9B9B9F;">3.6w算力/1k token</span>`;
				} else if (this.chat_type == 5) {
					this.listName = 'four';
					this.content = this.tipContent +
						`<br /><span style="font-size:14px;color:#9B9B9F;">10.8w算力/1k token</span>`;
				} else if (this.chat_type == 8) {
					this.listName = 'six';
					this.content = this.tipContent +
						`<br /><span style="font-size:14px;color:#9B9B9F;">1.5w算力/1k token</span>`;
				} else if (this.chat_type == 10) {
					this.content = this.tipContent +
						`<br /><span style="font-size:14px;color:#9B9B9F;">6w算力/1k token</span>`;
					this.listName = 'seven';
				} else if (this.chat_type == 12) {
					this.content = this.tipContent +
						`<br /><span style="font-size:14px;color:#9B9B9F;">3.6w算力/1k token</span>`;
					this.listName = 'eight';
				} else if (this.chat_type == 1000) {
					this.content = this.tipContent +
						`<br /><span style="font-size:14px;color:#9B9B9F;">3.3w算力/1k token</span>`;
					this.listName = 'twelve';
				} else if (this.chat_type == 1001) {
					this.content = this.tipContent +
						`<br /><span style="font-size:14px;color:#9B9B9F;">3w算力/1k token</span>`;
					this.listName = 'eleven';
				}
				let chat_val = {
					talk: `<span style="font-size: 17px">${this.content}</span>`,
					type: 'assistant'
				}
				this.messageList[this.listName][0] = chat_val
			},

			keyboardheightchange(e) {
				// console.log(e, '键盘高度变化');
				this.bottomTop = e.detail.height
				this.$forceUpdate()
				this.toBottom()
			},
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}

		}
	}
</script>

<style lang="less" scoped>
	@import "@/static/css/chat.less";

	.u-page {
		margin-top: 28upx !important;
		margin-bottom: 220upx;
	}

	.btn_link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		.link_l {
			display: flex;

			.l_chat {
				border-radius: 6upx;
				border: 1upx solid #1F64FF;
				padding: 5upx 10upx;
				color: #1F64FF;
				font-size: 24upx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				margin-bottom: 10upx;
				display: flex;
				align-items: center;

				.l_text {
					padding-left: 8upx;
				}
			}
		}
	}

	.chat_input {
		border-radius: 6upx;
		border: 1upx solid #E5E6EB;

		/* padding: 10upx; */
		.input_right {
			display: flex;
			align-items: center;
			border-radius: 6upx;
			border: 1upx solid #E5E5E5;
			padding-right: 20upx;
			width: 148rpx;
			margin: 0 0 10upx 10upx;

			.inputImg {
				width: 90upx;
				height: 90upx;
				border-radius: 6upx 0 0 6upx;
			}

			.input_text {
				height: 90upx;
				width: 20upx;
				border-left: 1upx solid #E5E5E5;
			}
		}
	}

	.bottom_p {
		padding: 16upx !important;
	}

	.idea {
		display: flex;
		position: fixed;
		top: 2%;
		right: 4%;
		text-align: center;
		align-items: center;

		image {

			width: 28rpx;
			height: 28rpx;
			margin-right: 6rpx;
		}
	}
</style>
<style>
	page {
		background: #f6f8fb;
	}
</style>