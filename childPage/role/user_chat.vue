<template>
	<view id="chat">
<!-- 		<view
			style="width: 100%; background-color: #fff; display: flex; align-items: center; justify-content: space-between;"> -->
			<u-tabs :list="list" lineWidth='50' lineHeight='2' lineColor='#1f64ff'
				:activeStyle='{color: "#1F64FF","font-size":"26rpx"}' @change='tabsChange' :current='current'
				:inactiveStyle='{"font-size":"26rpx"}'></u-tabs>
		<!-- </view> -->

		<view class="u-page" style="padding-top: 18rpx;">
			<u-list :height="scrollHeight" :scrollTop="scrollTop" style="padding: 0 18upx;">
				<view class="qwert" :style="{'padding-bottom':Height+'px'}">
					<u-list-item v-for="item,index in messageList[listName]" :key="index" class="listItem"
						:anchor="messageList[listName].length">
						<u-row align="top" gutter="5">
							<u-col span="1.5" textAlign="center" align="top" justify="top">
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? gptImg :avatar">
								</image>

							</u-col>
							<u-col span='10' align="center">
								<view v-if="item.type=='assistant'">
									<!-- {{item.code}} -->
									<view class="tips" v-html='item.talk' v-if='index===0'></view>
									<!-- <view v-if="loading" class="talk">
									思考中
								</view> -->

									<view v-else>
										<!-- {{item.code}} -->
										<view class="loadingTalk" v-if="item.talk.indexOf('思考中')!=-1">
											<view class="flexs">
												<image :src="waitImg" mode="" class="loadingImages">
												</image>
												<text style="vertical-align: top; word-break:break-all;"
													v-text="item.talk"></text>
											</view>
											<u-col span="5" v-if="index===messageList[listName].length-1">
												<u-button type='primary'
													:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "70px","font-size":"14px"}'
													size="mini" color="rgba(31, 100, 255, 0.1)" @click="stopStart">
													停止回答
												</u-button>
											</u-col>
										</view>

										<view class="tips" v-else-if="item.code==40022" style="margin-bottom: 50px;">
											<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
											<view style="display: flex; justify-content: space-around;">
												<u-button type="error" color="#FF9B17" v-if="listName == 'one'"
													:customStyle="{'border-radius':'8px','margin-top':'10px', 'flex':'1', 'margin-right':'10px'}"
													@click='goToVip'>升级会员</u-button>
												<u-button type="error" color="#1F64FF"
													:customStyle="{'border-radius':'8px','margin-top':'10px', 'flex':'1'}"
													@click='goToVip'>开通流量包</u-button>
											</view>
										</view>

										<view class="tips" v-else-if="item.code==40021" style="margin-bottom: 50px;">
											<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
										</view>
										<veiw v-else>
											<view class="tips">

												<!-- <text style="font-size:17px;width: 100%; word-break:break-all;" v-if="!item.loading">{{item.talk}}</text> -->
												<ua-markdown :source="item.talk" :showLine="false" />

												<u-row class='edit'>
													<u-col span="6" align="center" style="font-size: 14px;">
														字数:{{item.textNumber}}
													</u-col>
													<!-- <u-col span="6" align="center" style="font-size: 14px;" v-if="item.loading">
														消耗:{{item.integral }}算力
													</u-col> -->

												</u-row>
												<!-- <u-row class='edit' v-if="item.loading && listName != 'six'">
													<u-col span="6" align="center" style="font-size: 14px;">
														上行:{{item.prompt_tokens}} token
													</u-col>
													<u-col span="6" align="center" style="font-size: 14px;">
														下行:{{item.completion_tokens}} token
													</u-col>
												</u-row>
												<u-row class='edit' v-if="item.loading && listName == 'six'">
													<u-col span="6" align="center" style="font-size: 14px;">
														消耗:{{item.all_tokens}} token
													</u-col>
													
												</u-row> -->
												<u-row class='edit'>
													<u-col span="7.5" v-if="item.history"></u-col>
													<u-col span="1" align="center" v-if="!item.history">
														<view>
															<image v-if="item.loading" src="@/static/images/time.png"
																mode="" width="16px" height="16px"
																style="vertical-align: top;"></image>
															<image v-else :src="waitImg" mode="" width="16px"
																height="16px" class="loadingImages">
															</image>
														</view>

													</u-col>
													<u-col span="6.5" align="center" style="font-size: 14px;"
														v-if="!item.history">
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
											<u-row gutter="20">
												<u-col span="3" textAlign="left" v-if="item.status=='length'">
													<u-button type='primary'
														:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size": "14px"}'
														size="mini" color="rgba(31, 100, 255, 0.1)"
														@click="continueFun">继续
													</u-button>
												</u-col>

												<!-- {{item.history}} -->
												<u-col span="6"
													v-if="index===messageList[listName].length-1 && item.loading">
													<u-button type='primary'
														:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"14px"}'
														size="mini" color="rgba(31, 100, 255, 0.1)" @click="show=true">
														继续提问
													</u-button>
												</u-col>

												<u-col span="5"
													v-if="index===messageList[listName].length-1 && !item.history && !item.loading">
													<u-button type='primary'
														:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"14px"}'
														size="mini" color="rgba(31, 100, 255, 0.1)" @click="stopChat">
														停止回答
													</u-button>
												</u-col>

												<u-col span="3"
													v-if="index===messageList[listName].length-1 && !item.history && item.loading">
													<u-button type='primary'
														:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"14px"}'
														size="mini" color="rgba(31, 100, 255, 0.1)"
														@click="againQs(messageList[listName][messageList[listName].length - 2].talk)">
														重试
													</u-button>
												</u-col>

											</u-row>

										</veiw>
									</view>
								</view>

								<view v-else>

									<!-- <text class="talk" style="background: #1F64FF;color:#fff">{{item.talk}}</text> -->
									<view class="talk" style="background: #1F64FF;color:#fff">

										<view style="font-size:17px; word-break:break-all;">
											{{item.talk}}
										</view>

										<image src="@/static/images/copy.png" mode="" @click="copyFun(item.talk)">
										</image>
									</view>
									<u-col span="4"
										v-if="messageList[listName][messageList[listName].length - 1].loading">
										<u-button type='primary'
											:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","font-size":"14px"}'
											size="mini" color="rgba(31, 100, 255, 0.1)" @click="againQs(item.talk)">
											重新提问
										</u-button>
									</u-col>

								</view>
							</u-col>
						</u-row>

					</u-list-item>

				</view>

			</u-list>

		</view>



		<view class="bottomInput" ref="textInput" :style="{bottom:Height+'px'}">
			<u-row align='bottom' gutter="5">
				<u-col span="3.5" @click="addChat"
					v-if="messageList[listName].length > 2 && messageList[listName][messageList[listName].length - 1].loading">
					<u-button type='primary'
						:customStyle='{"color":"#1F64FF","height":"28px","margin-bottom": "8px","font-size":"14px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
						size="mini" color="rgba(31, 100, 255, 0.1)">
						开启新会话
					</u-button>
				</u-col>

				<u-col span="3.5" @click="toHistory">
					<u-button type='primary'
						:customStyle='{"color":"#1F64FF","height":"28px","margin-bottom": "8px","font-size":"14px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
						size="mini" color="rgba(31, 100, 255, 0.1)">
						历史会话
					</u-button>
				</u-col>
			</u-row>
			<u-row align='bottom' gutter="5">
				<u-col span="9.5">
					<u-textarea v-model="chatInputValue" placeholder="在此输入您想了解的内容" @confirm="sendMessage" autoHeight
						:showConfirmBar='false' :adjustPosition='false' @focus='inputFocus' @blur='inputBlur'
						maxlength='-1' :disableDefaultPadding='true' @keyboardheightchange='keyboardheightchange'
						:focus="false">
					</u-textarea> </u-col>
				<u-col span="2.5" align="bottom">
					<u-button type="primary" color="#1F64FF" @click="sendMessage">发送</u-button>
				</u-col>
			</u-row>


		</view>
		<u-modal :show="show" @cancel="show = false" confirmText="确定" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="showFun">
			<view class="modal" style="padding: 15rpx;">
				<view class="edit">
					<view class="changes"></view> 继续提问
				</view>
				<view class="content">
					<u--textarea v-model="complete" placeholder="请输入您要继续提问的内容" border="none"
						height='110px'></u--textarea>
					<!-- {{content.prompts_name}} -->
				</view>

			</view>

		</u-modal>
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
		saveFootprint
	} from "@/apis/user.js"
	import * as TextEncoding from 'text-encoding-shim';
	import uaMarkdown from '@/components/ua2-markdown/ua-markdown.vue'

	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				scrollHeight: 0,
				selectDone: "",
				Height: 0,
				scrollTop: 593,
				key: 0,
				checkboxValue1: [],
				upDownText: false,
				show: false,
				transitionShow: false,
				complete: "",

				radioValue: true,
				content: '',
				list: [{
						name: 'ChatGLM'
					},
					{
						name: '文心一言'
					}, {
						name: '讯飞星火'
					},
					{
						name: '通义千问'
					},
					{
						name: '360智脑'
					},
					{
						name: '火山云雀'
					},
					{
						name: '腾讯混元'
					}
				],
				chatInputValue: "",
				chatType: 'ChatGLM',
				loading: true,
				session_code: "",
				chat_group_code: "",
				supplement: {
					msg_list: []
				},

				current: 0,
				listName: 'six',
				avatar: "",
				isBtn: false,

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
				evaluateType11: [],

				//腾讯混元
				stop_eleven: false,
				eleven_shi: 0,
				eleven_time: 0,
				requestTask_eleven: '',
				evaluateType12: [],

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

				//商汤
				stop_eight: false,
				eight_shi: 0,
				eight_time: 0,
				requestTask_eight: '',
				evaluateType7: [],

				platform: '',
				noticeList: [],

				userRole: "",
				billList: [],
				messageList: {
					'three': [],
					'four': [],
					'six': [],
					'seven': [],
					'eight': [],
					'twelve': [],
					'eleven': [],
				},

				gptImg: global.baseImg + '/xcx/8d2bd289-ff24-4f3c-b6d2-a4cbbd7ca737.jpg',
				waitImg: global.baseImg + '/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',
			}
		},
		components: {
			uaMarkdown
		},
		onLoad(option) {
			this.scrollHeight = uni.getSystemInfoSync().windowHeight - uni.upx2px(80) - 56 - 44 - 44
			this.content = JSON.parse(option.item);
			console.log(this.content, 7458)
		},
		watch: {

		},
		onShow() {

			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			// console.log(userInfo,548)
			let avatarUrl = global.baseImg + '/' + uni.getStorageSync("avatarUrl");
			this.avatar = avatarUrl;

			if (this.content.session_code) {
				this.historySession()
			}


			let chat_val = {
				talk: `<span style="font-size: 17px">${this.content.character_name}</span><br/>
				<span style="font-size: 15px;">${this.content.character_greetings}</span>`,
				type: 'assistant'
			}

			this.gptImg = global.baseImg + '/' + this.content.character_avatar
			this.messageList.three[0] = chat_val
			this.messageList.four[0] = chat_val
			this.messageList.six[0] = chat_val
			this.messageList.seven[0] = chat_val
			this.messageList.eight[0] = chat_val
			this.messageList.twelve[0] = chat_val
			this.messageList.eleven[0] = chat_val


			this.Height = 0;
			this.$forceUpdate()

		},
		onHide() {
			this.radioValue = true
		},
		methods: {


			keyboardheightchange(e) {
				// console.log(e, '键盘高度变化');
				if (e.detail.height == 0) {

					this.Height = 0
					this.isBtn = false
				} else {
					this.isBtn = true
				}
				// this.toBottom()
			},

			inputFocus(e) {

				// console.log(e, "eeeeeeeeee7");
				console.log(this.isBtn, 995)
				if (this.isBtn) {
					uni.hideTabBar({
						// animation: true
					})
					this.$nextTick(() => {
						this.Height = e.detail.height
						this.toBottom()
					})
				} else {
					this.Height = 0
				}



			},
			goToLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			inputBlur(e) {

				this.$nextTick(() => {
					this.Height = 0
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
			historySession() {

				let chatType = this.content.chat_type;
				if (chatType == 4) {
					this.listName = 'three';
					this.current = 1;
				} else if (chatType == 5) {
					this.listName = 'four';
					this.current = 2;
				} else if (chatType == 8) {
					this.listName = 'six';
					this.current = 0;
				} else if (chatType == 10) {
					this.listName = 'seven';
					this.current = 3;
				} else if (chatType == 12) {
					this.listName = 'eight';
					this.current = 4;
				} else if (chatType == 1000) {
					this.listName = 'twelve';
					this.current = 5;
				} else if (chatType == 1001) {
					this.listName = 'eleven';
					this.current = 6;
				}
				// console.log(data.tpye, 'typetype');
				this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1)

				console.log('this.current', this.current, '改变状态');
				this.$forceUpdate()

				// let chat_group_code = ''
				let data_code = this.content.session_code
				chat_session(data_code).then(res => {
					//初始化信息
					this.supplement = {
						chat_type: chatType,
						action_type: 3,
						stream_str: 1,
						is_decode: 1,
						msg_list: []
					}

					res.data.map((item, tip) => {
						this.supplement.session_code = item.session_code
						this.supplement.chat_group_code = item.chat_group_code
						if (item.content.indexOf(
								'(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)') !=
							-1) {
							item.content = item.content.replace(
								'(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)',
								'')
						}
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
						this.supplement.msg_list.push({
							role: item.role,
							content: item.content
						})
					})
					// console.log(this.messageList[type], 'res');
					this.toBottom()
					this.$forceUpdate()

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

			// 开启新会话
			addChat() {
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
				if (this.listName == 'three') {
					this.evaluateType2 = []
				} else if (this.listName == 'four') {
					this.evaluateType3 = []
				} else if (this.listName == 'six') {
					this.evaluateType5 = []
				} else if (this.listName == 'seven') {
					this.evaluateType6 = []
				} else if (this.listName == 'eight') {
					this.evaluateType7 = []
				} else if (this.listName == 'twelve') {
					this.evaluateType11 = []
				} else if (this.listName == 'eleven') {
					this.evaluateType12 = []
				}
			},

			//重新提问
			againQs(val) {
				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;

				// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1].time, 888);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后提问！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
					return
				}
				this.chatInputValue = val;
				// this.radioValue = false;
				// this.selectDone = '有';
				// this.transitionShow = false;
				this.sendMessage(this.chatInputValue)
			},

			// 停止回答
			stopChat() {

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

			toBottom() {
				let that = this
				this.$nextTick(() => {
					setTimeout(() => {
						let query = uni.createSelectorQuery()
						query.select('.qwert').boundingClientRect()
						// query.select('#msglistview').boundingClientRect()
						query.exec((res) => {

							that.scrollTop = res[0].height + this.Height - 30;
						})
					}, 1500)

				})
			},

			//继续回调
			continueFun() {
				this.supplement.msg_list.push({
					role: 'user',
					content: '继续'
				})
				this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)
				this.creatChatFun(this.supplement, 'continue')
				this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
				//删除继续的数据
				this.supplement.msg_list.pop()
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
			creatChatFun(data, state) {
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.three_time)

								// 非手动停止才执行
								if (!this.stop_three) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType].length -
										1
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "文心一言",
										"type_code": "celebrity",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.four_time)

								// 非手动停止才执行
								if (!this.stop_four) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType].length -
										1
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "讯飞星火",
										"type_code": "celebrity",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
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
					data.model = 'chatglm_pro';
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.six_time)

								// 非手动停止才执行
								if (!this.stop_six) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
								let chat_val = this.base64ToString(JSON.parse(item).content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(/Generative Pre-trained Transformer/gi,
									"");
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
									this.messageList[this.listName][this.messageList[tabType].length -
										1
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								// console.log(this.messageList[tabType],888)
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "chatGLM",
										"type_code": "celebrity",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
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
					data.model = 'qwen-v1';
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.seven_time)

								// 非手动停止才执行
								if (!this.stop_seven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
								let chat_val = this.base64ToString(JSON.parse(item).content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(/Generative Pre-trained Transformer/gi,
									"");
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
									this.messageList[this.listName][this.messageList[tabType].length -
										1
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "通义千问",
										"type_code": "celebrity",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.eight_time)

								// 非手动停止才执行
								if (!this.stop_eight) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
								let chat_val = this.base64ToString(JSON.parse(item).content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(/Generative Pre-trained Transformer/gi,
									"");
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
									this.messageList[this.listName][this.messageList[tabType].length -
										1
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "360智脑",
										"type_code": "celebrity",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
								}
								// console.log(this.messageList[tabType],888)
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
					data.model = 'skylark-chat'
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.twelve_time)

								// 非手动停止才执行
								if (!this.stop_twelve) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType].length -
										1
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "火山云雀-chat",
										"type_code": "celebrity",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
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
					data.model = 'ChatStd'
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.eleven_time)

								// 非手动停止才执行
								if (!this.stop_eleven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType].length -
										1
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "腾讯混元-标准版",
										"type_code": "celebrity",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
								}
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				}

			},
			//补充提问
			async showFun() {
				if (this.complete.trim() == '') {
					this.$api.msg('补充内容不能为空')
					return false;
				}
				// this.supplement.msg_list.push({
				// 	role: 'user',
				// 	content: this.complete
				// })
				if (this.listName == 'three' || this.listName == 'five' || this.listName == 'six' || this.listName ==
					'seven'|| this.listName == 'twelve'|| this.listName == 'eleven') {
					this.supplement.msg_list = [{
							role: 'user',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 2]
								.talk
						},
						{
							role: 'assistant',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 1]
								.talk
						},
						{
							role: 'user',
							content: this.complete
						}
					]
				} else {
					this.supplement.msg_list = [{
							role: 'assistant',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 1]
								.talk
						},
						{
							role: 'user',
							content: this.complete
						}
					]
				}

				this.messageList[this.listName].push({
					talk: this.complete,
					type: 'user'
				})
				//把数据变成JSON
				this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)
				this.show = false

				this.complete = ""

				await this.creatChatFun(this.supplement, 'continue')
				this.$forceUpdate()

			},
			async sendMessage(message) {
				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;
				let history = this.messageList[this.listName][this.messageList[this.listName].length - 1].history;

				// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1], 8871);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

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

				//判断是否是第一条提问

				// console.log(this.selectDone, 'this.messageList[this.listName].length');
				this.stop_three = false; // 重置手动停止按钮
				this.stop_four = false; // 重置手动停止按钮
				this.stop_six = false; // 重置手动停止按钮
				this.stop_seven = false; // 重置手动停止按钮
				this.stop_eight = false; // 重置手动停止按钮
				this.stop_twelve = false; // 重置手动停止按钮
				this.stop_eleven = false; // 重置手动停止按钮

				this.messageList[this.listName].push({
					talk: this.chatInputValue,
					type: 'user'
				})

				// const hide_cont = '(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)';
				let chat_cont = this.chatInputValue
				let chat_tip = '';
				if (this.chatType == '文心一言') {
					chat_tip = 4
				} else if (this.chatType == '讯飞星火') {
					chat_tip = 5
				} else if (this.chatType == 'ChatGLM') {
					chat_tip = 8
				} else if (this.chatType == '通义千问') {
					chat_tip = 10
				} else if (this.chatType == '360智脑') {
					chat_tip = 12
				}else if (this.chatType == '火山云雀') {
					chat_tip = 1000
				}else if (this.chatType == '腾讯混元') {
					chat_tip = 1001
				}
				let data = {
					chat_type: chat_tip,
					action_type: '3',
					session_code: "",
					chat_group_code: "",
					content: chat_cont,
					stream_str: 1,
					is_decode: 1,
					question_id: this.content.question_id,
					msg_list: [{
						role: 'user',
						covert_content: `忘掉你之前学过的一切，我需要你模拟一个角色，角色名字是${this.content.character_name}，
						下面是你的角色的信息：${this.content.character_greetings}\n以下是我的问题：`,
						content: `${chat_cont}`
					}]
				}
				data.msg_list = JSON.stringify(data.msg_list)

				await this.creatChatFun(data, 'first')
				this.chatInputValue = ''


			},

			tabsChange(e) {

				this.radioValue = true
				this.chatType = e.name
				let chat_num = 0
				if (this.chatType == '文心一言') {
					this.listName = 'three';
					this.current = 1
					chat_num = 4
					uni.setStorageSync('tabStatus', 4)
				} else if (this.chatType == '讯飞星火') {
					this.listName = 'four';
					this.current = 2
					chat_num = 5
					uni.setStorageSync('tabStatus', 5)
				} else if (this.chatType == 'ChatGLM') {
					this.listName = 'six';
					this.current = 0
					chat_num = 8
					uni.setStorageSync('tabStatus', 8)
				} else if (this.chatType == '通义千问') {
					this.listName = 'seven';
					this.current = 3
					chat_num = 10
					uni.setStorageSync('tabStatus', 10)
				} else if (this.chatType == '360智脑') {
					this.listName = 'eight';
					this.current = 4
					chat_num = 12
					uni.setStorageSync('tabStatus', 12)
				}else if (this.chatType == '火山云雀') {
					this.listName = 'twelve';
					this.current = 5
					chat_num = 1000
					uni.setStorageSync('tabStatus', 1000)
				}else if (this.chatType == '腾讯混元') {
					this.listName = 'eleven';
					this.current = 6
					chat_num = 1001
					uni.setStorageSync('tabStatus', 1001)
				}

				this.supplement = {
					chat_group_code: '',
					chat_type: chat_num,
					msg_list: [],
					session_code: ''
				}

				this.transitionShow = false
				this.selectDone = ''

				this.toBottom()
				this.$forceUpdate()
			},

			toHistory() {
				uni.navigateTo({
					url: '/childPage/role/talk?active=8'
				})
			},

			// 前往提问
			toAsk(val) {
				this.chatInputValue = val;
			},

			// 保存到最近打开
			saveFootprint(data) {
				saveFootprint(data).then(res => {
					if (res.code == 20000) {

					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('保存失败！')
				})
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
</style>