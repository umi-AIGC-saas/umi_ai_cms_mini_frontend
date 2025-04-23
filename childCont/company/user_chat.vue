<template>
	<view id="chat">
		<scroll-view ref="box" :scroll-top="scrollTop" class="u-page" scroll-with-animation scroll-y="true" id="textadd" :style='{ height: msgListHeight}'>
			<view scroll-with-animation  v-for="item,index in messageList[listName]" :key="index" class="listItem" :anchor="index">

				<u-row align="top" gutter="5">
					<u-col span="1.5" textAlign="center" align="top" justify="top">
						<image style="height: 38px;width: 38px;  border-radius: 50%;"
							:src="item.type=='assistant'? glmImg :avatar" v-if="listName == 'six'">
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
										<text style="vertical-align: top; word-break:break-all;" v-text="item.talk"></text>
									</view>
									<u-col span="4"  v-if="index===messageList[listName].length-1"><u-button
											type='primary' :customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
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
													<image v-if="item.loading" src="@/static/images/time.png" mode="" width="16px"
														height="16px" style="vertical-align: top;"></image>
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
											<text class="tab_left">当前内容为AI生成，不做任何决策使用！由此引发的一切后果，需自行承担，请知悉,已通过阿里云内容安全审核</text>
										</view>
								
									</view>
									<u-row gutter="20" style="flex-wrap: wrap;width: 100%;">
									<!-- 	<u-col span="4" v-if="index===messageList[listName].length-1 && item.loading" ><u-button
												type='primary' :customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="show=true">继续提问</u-button></u-col> -->
												
										<u-col span="4" v-if="index===messageList[listName].length-1 && !item.history && !item.loading"><u-button
												type='primary' :customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","background-color": "#fff","color": "#1F64FF","border": "1px solid #1F64FF"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="endController">
												<image src="@/static/images/Remove_duotone.png" style="width: 40upx;height: 40upx;margin-right: 16upx;"/>
												停止回答
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
									<image :src="getImgUrl(item.images[0])" style="height: 500rpx; width: 500rpx" mode="aspectFit" @click="checkImg(item.images[0])"></image>
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

		
		<view class="bottomInput" :style="{bottom:bottomTop+'px'}">
			<view class="btn_link">
				<view class="link_l">
					<view class="l_chat" style="margin-right: 15rpx;"
					 @click="newChatSpeak" v-if="messageList[listName].length > 2 && messageList[listName][messageList[listName].length - 1].loading">
						 <u-icon name="plus" color="#1F64FF" size="14"></u-icon>
						 <text class="l_text">开启新会话</text>
					 </view>
					<view class="l_chat" @click="toHistory">
						<u-icon name="clock" color="#1F64FF" size="16"></u-icon>
						<text class="l_text">历史会话</text>
					</view>
				</view>
				<!-- <view class="link_l">
					<view class="l_chat" @click="takePhoto">
						<u-icon name="camera" color="#1F64FF" size="20"></u-icon>
						<text class="l_text">AI识图</text>
					</view>
				</view> -->
			</view>
			<u-row align='bottom' gutter="5">
				<u-col span="9.5">
					<view class="chat_input">
						<u-textarea v-model="chatInputValue" placeholder="在此输入您想了解的内容" @confirm="sendMessage" autoHeight
							:showConfirmBar='false' :adjustPosition='false' maxlength='-1'
							:disableDefaultPadding='true' @keyboardheightchange='keyboardheightchange' border='none' :focus="false">
						</u-textarea> 
						<view v-if="imgList.length > 0">
							<view class="input_right" v-for="(val, index) in imgList" :key="index" >
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
		<u-modal :show="show" @cancel="show = false" confirmText="确定" confirmColor="#1F64FF"
			:showCancelButton='true' @confirm="showFun">
			<view class="modal">
				<view class="edit">

					<view class="changes"></view> 继续提问
				</view>
				<view class="content">
					<u--textarea v-model="complete" placeholder="在此输入你想优化的内容" border="none" height='110px'></u--textarea>
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

	} from "@/apis/chat.js"
	import { getChat } from "@/apis/user.js"
	import { saveFootprint } from "@/apis/user.js"
	import * as TextEncoding from 'text-encoding-shim';
	import uaMarkdown from '@/components/ua2-markdown/ua-markdown.vue'

	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				scrollTop: 593,
				isfinish: true, // 会话中
				//ChatGLM
				stop_six: false,
				six_shi: 0,
				six_time: 0,
				requestTask_six: '',
				evaluateType5: [],
				
				selectDone: "",
				msgListHeight: 0,
				// barHeight: 50,
				userInfo: '',

				current: 0,
				key: 0,
				checkboxValue1: [],
				upDownText: false,
				show: false,
				transitionShow: false,
				complete: "",
				radioValue: true,
				maxlength: 901,
				
				chatInputValue: "",
				chatType: 'ChatGLM',
				loading: true,
				session_code: "",
				chat_group_code: "",
				supplement: {}, // 请求参数
				listName: 'six',
				avatar: "",
				askShow: true,
				billList: [],
				imgList: [],
				messageList: {
					'six': [],
				},
				content: '',
				message_covert: '',
				bottomTop: 0,
				
				glmImg: global.baseImg+'/xcx/9b91253a-59c2-4ab8-9e38-af7c6464823c.jpg',
				waitImg: global.baseImg+'/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',
			}
		},
		components: {
			uaMarkdown
		},
		onLoad(option) {
			// console.log(option,4562)
            this.content = JSON.parse(option.item);
			this.glmImg = global.baseImg+'/'+this.content.icon_url
			// 获取屏幕高度
			uni.getSystemInfo({
				success: res => {
					this.screenHeight = res.windowHeight
					// 100为底部输入栏高度，单位rpx，需要先转成px
					this.msgListHeight = this.screenHeight - uni.upx2px(100)
					
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
            	talk: `<span style="font-size: 17px">${this.content.welcome_msg}</span>`,
            	type: 'assistant'
            }	
            this.messageList.six[0] = chat_val

			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			let avatarUrl = global.baseImg+ '/'+ uni.getStorageSync("avatarUrl");
			this.avatar = avatarUrl;
		
		},
		
		onHide() {
		  
		},
		
		methods: {
			
			historySession(session_code) {
				let chat_tip = ''; // 对话类型
				this.listName = 'six';
				chat_tip = 8
				this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1)
				this.$forceUpdate()
				
				
				chat_session(session_code).then(res => {
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
						
						if(item.images == null) {
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
			
			//信息回调方法
			async creatChatFun(data, state) {
				if(this.listName == 'six') {
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
					            if(!this.stop_six) {
									xfChat(data).then(res => {
										if(res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));								
											if(res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)
												
											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[this.listName].length - 1] = {
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
										} else if(res.code > 49999) {
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
							// console.log(JSON.parse(item), 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null) {
								// console.log(JSON.parse(item).content,77777)
								// let chat_val = this.base64ToString(JSON.parse(item).content);
								let chat_val = JSON.parse(item).content;
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(/Generative Pre-trained Transformer/gi, "");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info += session4
							}
								
											
							if(JSON.parse(item).code) { 
								if(JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType].length - 1] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item).code : 40021,
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
								
								if(status == 'stop') {
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
								// console.log(info,5556)	
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
								// if(load_state) { //保存记录
								// 	let save_val = {
								// 		"type_name": "chatGLM",
								// 		"type_code": "chat",
								// 		"title": data.content,
								// 		"eid": this.session_code
								// 	}
									
								// 	// this.saveFootprint(save_val)
								// }
								// console.log(this.messageList[tabType],888)
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
				if(this.complete.trim() == '') {
					return this.$api.msg('补充内容不能为空')
				}
				
				this.show = false
				// this.supplement.msg_list.push({
				// 	role: 'user',
				// 	content: this.complete
				// })
				if(this.listName == 'three' || this.listName == 'five' || this.listName == 'six' || this.listName == 'seven') {
					this.supplement.msg_list = [
						{
							role: 'user',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 2].talk,
							images: this.messageList[this.listName][this.messageList[this.listName].length - 2].images,
							covert_content: this.messageList[this.listName][this.messageList[this.listName].length - 2].message_covert
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
					this.supplement.msg_list = [
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
				let val = { 
					'company_id': this.content.company_code,
					'clerk_id': this.content.clerk_code,
					'question_content': this.chatInputValue
				}
				getChat(val).then(res => {
					if(res.code == 20000) {
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
				
				// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1], 8871);
				if (send_talk.indexOf('思考中') != -1) {

					this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
					return
				}
				if(send_time == 0 && !history) {
					this.messageList[this.listName].pop()
				}
				if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容')


				let img_url = ''
				if(this.imgList.length > 0) {
					img_url = this.imgList
				} else {
					img_url = ''
				}
				this.messageList[this.listName].push({
					talk: this.chatInputValue,
					type: 'user',
					images: img_url,
					message_covert: this.message_covert 
				})

				let chat_cont = this.chatInputValue
				let data = {
					chat_type: 8,
					action_type: '3',
					session_code: this.session_code,
					chat_group_code: "",
					content: this.chatInputValue,
					company_code: this.content.company_code,
					clerk_code: this.content.clerk_code,
					msg_list: [{
						role: 'user', 
						covert_content: this.message_covert , 
						content: chat_cont
					}]
				}
				if(this.imgList.length > 0) {
					data.msg_list[0].images = this.imgList
				}
				data.msg_list = JSON.stringify(data.msg_list)
                this.creatChatFun(data, 'first')
				this.toBottom()

				this.selectDone = false
				this.chatInputValue = ''
				this.imgList = []

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
            
			toBottom() {
				
				// 定位到当前聊天地点
				let that = this
				this.$nextTick(() => {
					setTimeout(() => {
						let query = uni.createSelectorQuery()
						query.select('#textadd').boundingClientRect()
						// query.select('#msglistview').boundingClientRect()
						query.exec((res) => {
							
							that.scrollTop = res[0].height + this.Height - 30;
						})
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
				if (this.controller_six != null) {
					this.controller_six.abort()
				}
				this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				clearInterval(this.t_time_six)
				clearInterval(this.six_shi)
				this.$forceUpdate()
			},
			
			// 停止开始回答
			stopStart() {
				if (this.controller_six != null) {
					this.controller_six.abort()
				}
				clearInterval(this.t_time_six)
				clearInterval(this.six_shi)
				this.messageList.six.pop()
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
					url: '/pages/user/company/history_chat?item='+ JSON.stringify(this.content)
				})
			},
			
			getImgUrl(url){
			   return global.baseImg+'/'+url;
			},
			
			// 图片预览
			checkImg(url) {
				let img_url = global.baseImg+'/'+url
				uni.previewImage({
					urls:[img_url],
					current:0
				})
			},
			
			// AI识图
			takePhoto() {
				let that = this;
				uni.chooseImage({
				  count: 1,
				  // mediaType: ['image'],
				  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				  sourceType: ['album', 'camera'],
				  success(res) {
				    // console.log(res.tempFiles)
					// console.log(res,589)
					const tempFilePaths = res.tempFilePaths[0];
					that.imgList = []
					uni.showLoading({ title: '上传中' });
					uni.uploadFile({
						url: global.loginUrl + '/api/user/oss_upload', 
						filePath: tempFilePaths,
						name: 'image',
						formData: {
							"image": tempFilePaths,
							"oss_dir": 'static',
							"cate": 'create_character'
						},
						success: (uploadFileRes) => {
							let imgData = JSON.parse(uploadFileRes.data)
							console.log(imgData,333)
							if(imgData.code == 20000) {
								// let url = global.baseImg + '/'+ imgData.data.new_url
								let url = imgData.data.new_url
								that.imgList.push(url)
								uni.hideLoading()
							} else {
								that.$api.msg(imgData.msg)
								uni.hideLoading()
							}
						}
					});
				  }
				})
			},
			toIdea(){
				uni.navigateTo({
					url:'/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "@/static/css/chat.less";
	.u-page {
		margin-top: 28upx !important;
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
	
</style>
<style>
	page {
		background: #f6f8fb;
	}
</style>