<template>
	<view id="chat">
		<view class="u-page" style="padding-top: 30upx">
			<u-list :height="scrollHeight" :scrollTop="scrollTop" style="padding: 0 18upx;">
				<view class="qwert" :style="{'padding-bottom':Height+'px'}">
					<u-list-item v-for="item,index in messageList[listName]" :key="index" class="listItem"
						:anchor="messageList[listName].length">
						<u-row align="top" gutter="5">
							<u-col span="1.5" textAlign="center" align="top" justify="top">
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? claudeImg :avatar" v-if="listName == 'nine'">
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
												<text style="vertical-align: top; word-break:break-all;" v-text="item.talk"></text>
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
										</view>
										
										<view class="tips" v-else-if="item.code==40021" style="margin-bottom: 70px;">
											<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
										</view>
										<veiw v-else>
											<view class="tips">
												<text style="font-size:17px;width: 100%; word-break:break-all;">{{item.talk}}</text>
												<u-row class='edit'>
													<u-col span="7.5" v-if="item.history"></u-col>
													<u-col span="1" align="center" v-if="!item.history">
														<view>
															<image v-if="item.loading" src="../../static/images/time.png" mode="" width="16px"
																height="16px" style="vertical-align: top;"></image>
															<image v-else :src="waitImg" mode="" width="16px" height="16px"
																class="loadingImages">
															</image>
														</view>
													
													</u-col>
													<u-col span="6.5" align="center" style="font-size: 14px;" v-if="!item.history">
														<view>
															<text v-if="item.loading"> 耗时：{{item.time}}秒</text>
															<text v-else> 思考中:{{item.time}}秒</text>
														</view>
													
													</u-col>
													<u-col span="3.5"></u-col>
													
													<u-col span="1" @click="copyFun(item.talk)">
														<image src="../../static/images/balckCopy.png" mode=""></image>
													</u-col>
												</u-row>
												<view class="btn_tab"  >
													<text class="tab_left">当前内容为AI生成，不做任何决策使用！由此引发的一切后果，需自行承担，请知悉,已通过阿里云内容安全审核</text>
												</view>

											</view>
											<view :style="[{marginBottom:(imgList.length > 0 ? '100rpx':'0')}]">
												<u-row gutter="20">
													
													<u-col span="5" v-if="index===messageList[listName].length-1 && !item.history && !item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"14px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)" @click="stopChat">
															停止回答
														</u-button>
													</u-col>
													
												</u-row>
											</view>
											
										</veiw>
									</view>
								</view>

								<view v-else>

									<!-- <text class="talk" style="background: #1F64FF;color:#fff">{{item.talk}}</text> -->
									<view class="talk" style="background: #1F64FF;color:#fff">

										<view style="font-size:17px; word-break:break-all;">
											{{item.talk}}
										</view>
										<view v-if="item.images.length > 0">
											<image :src="getImgUrl(item.images[0])" style="height: 500rpx; width: 500rpx" mode="aspectFit" @click="checkImg(item.images[0])"></image>
										</view>

										<image src="@/static/images/copy.png" mode="" @click="copyFun(item.talk)">
										</image>
									</view>

								</view>
							</u-col>
						</u-row>
						
					</u-list-item>
					
				</view>
				
			</u-list>
           
		</view>
		
		<view class="bottomInput" ref="textInput" :style="{bottom:Height+'px'}">
			<view class="btn_link">
				<view class="link_l">
					<view class="l_chat" style="margin-right: 15rpx;"
					 @click="addChat" v-if="messageList[listName].length > 2 && messageList[listName][messageList[listName].length - 1].loading">
						 <u-icon name="plus" color="#1F64FF" size="14"></u-icon>
						 <text class="l_text">开启新会话</text>
					 </view>
				</view>
				<view class="link_l">
					<view class="l_chat" @click="takePhoto">
						<u-icon name="camera" color="#1F64FF" size="20"></u-icon>
						<text class="l_text">AI识图</text>
					</view>
				</view>
			</view>
			
			<u-row align='bottom' gutter="5">
				<u-col span="9.5">
					<view class="chat_input">
						<u-textarea v-model="chatInputValue" placeholder="在此输入您想了解的内容" @confirm="sendMessage" autoHeight
							:showConfirmBar='false' :adjustPosition='false' @focus='inputFocus' @blur='inputBlur' maxlength='-1'
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
					<u-button type="primary" color="#1F64FF" @click="sendMessage">发送</u-button>
				</u-col>
			</u-row>

		</view>
	</view>
</template>

<script>
	import {
        xfChat
	} from "@/apis/chat.js"
	import * as TextEncoding from 'text-encoding-shim';


	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				src: '',
				scrollHeight: 0,
				selectDone: false,
				Height: 0,
				scrollTop: 593,
				key: 0,
				checkboxValue1: [],
				upDownText: false,
				show: false,
				transitionShow: false,
				complete: "",

				radioValue: true,
				
				chatInputValue: "",
				chatType: '识万物',
				loading: true,
				session_code: "",
				chat_group_code: "",
				supplement: {
					msg_list: []
				},
				
				current: 0,
				listName: 'nine',
				avatar: "",
				isBtn: false,
				
				//识万物
				stop_nine: false,
				nine_shi: 0,
				nine_time: 0,
				requestTask_nine: '',
				evaluateType: [],
				
				platform: '',
				noticeList: [],

				userRole: "",
				askShow: true,
				billList: [],
				imgList: [],
				messageList: {
					'nine': [{
						talk: `<span style="font-size: 17px">我可以识别图片中的各种物体、场景或人物方便用户从图片中提取需要信息</span>`,
						type: 'assistant'
					}]
				},
				
				claudeImg: global.baseImg+'/xcx/ca67317a-cbc1-4890-a3ce-c1b472785b0a.jpg',
				waitImg: global.baseImg+'/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',
			}
		},
		components: {
		},
		onLoad() {
			// console.log(uni.getSystemInfoSync().windowHeight - uni.upx2px(80) - 56 - 44 - 44,
			// 	'uni.getSystemInfoSync().windowHeight');

			this.scrollHeight = uni.getSystemInfoSync().windowHeight - uni.upx2px(80) - 56
		},
		watch: {
			
		},
		onShow() {
			let nine_code = this.messageList.nine[this.messageList.nine.length - 1].code;

			if(nine_code == 40022) {  // 去除登录或升级vip提示
				this.messageList.nine.pop()
			}

			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));

			let avatarUrl = global.baseImg+ '/'+ uni.getStorageSync("avatarUrl");
			this.avatar = avatarUrl;
			
			// 获取相机信息
			if(uni.getStorageSync('cameraInfo') != '') {
				let sendInfo = uni.getStorageSync('cameraInfo')
				this.chatInputValue = sendInfo.chatValue
				this.imgList = sendInfo.imgList
				uni.setStorageSync('cameraInfo', '')
			}
			
			this.chatType = '识万物'
			this.listName = 'nine'
			this.current = 0
			this.chatInputValue = '请描述一下这张图片的内容'
			if(this.messageList[this.listName].length == 1) {
				uni.setStorageSync('imgUrl', '')
				uni.setStorageSync('discern_code','')
			}
			
            this.Height = 0;
			this.$forceUpdate()


		},
		onHide() {
			
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

                if(this.isBtn) {
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
                uni.setStorageSync('talkInfo', '')

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
			
			
			// 停止回答
			stopChat() {
				this.stop_nine = true
				this.requestTask_nine.abort();
				clearInterval(this.nine_shi)
				clearInterval(this.nine_time)
				this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				this.$forceUpdate()
			},
			
			// 停止开始回答
			stopStart() {
				this.stop_nine = true
				this.requestTask_nine.abort();
				clearInterval(this.nine_shi)
				clearInterval(this.nine_time)
				this.messageList.nine.pop()
				this.$forceUpdate()
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
				this.imgList = []
				uni.setStorageSync('imgUrl', '')
				uni.setStorageSync('discern_code','')
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
				if(this.listName == 'nine') {
					let nine_num = 0;
					this.messageList.nine.push({
						talk: `思考中,耗时${nine_num}秒`,
						type: 'assistant'
					})
					
					this.nine_shi = setInterval(() => {
						nine_num++
					}, 1000)
					this.nine_time = setInterval(() => {
						this.messageList.nine[this.messageList.nine.length - 1] = {
							talk: `思考中,耗时${nine_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)
					
					
					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					this.requestTask_nine = uni.request({
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
							this.messageList.nine[this.messageList.nine.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.nine_shi)
							
							this.$forceUpdate()
						},
					
						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
					       clearInterval(this.nine_shi)
					        // console.log(complete,777)
					
							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {
					
								// let code
								clearInterval(this.nine_time)
					            
								// 非手动停止才执行
					            if(!this.stop_nine) {
									xfChat(data).then(res => {
										if(res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
											// console.log(userInfo.role == 'guess' ,'panduan');
																				
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
					let prompt_tokens =0
					let tabType = this.listName
					
					this.requestTask_nine.onChunkReceived(response => {
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
								info = this.base64ToString(JSON.parse(item).content)
											
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
									clearInterval(this.nine_time)
									clearInterval(this.nine_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
								}
							} else {
								
								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								uni.setStorageSync('discern_code', this.session_code)
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								let load_state = false
								
								if(status == true) {
									load_state = true
								} else {
									load_state = false
								}
											
								clearInterval(this.nine_time)
								
													
								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
									talk: info,
									type: 'assistant',
									time: nine_num,
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
				if(send_time == 0 && !history) {
					this.messageList[this.listName].pop()
				}
				if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容')


				this.stop_nine = false; // 重置手动停止按钮

                let img_url = uni.getStorageSync('imgUrl')
				if(this.imgList.length == 0 && img_url == '') {
					return this.$api.msg('请上传需要识别的图片')
				}
				
				if(img_url == '' || img_url == null) {
					this.messageList[this.listName].push({
						talk: this.chatInputValue,
						type: 'user',
						images: this.imgList
					})
					uni.setStorageSync('imgUrl', this.imgList[0])
				} else {
					this.messageList[this.listName].push({
						talk: this.chatInputValue,
						type: 'user',
						images: []
					})
				}
				
               
				let chat_cont = this.chatInputValue
		
				let data = {
					chat_type: '-2',
					action_type: '3',
					session_code: uni.getStorageSync('discern_code'),
					chat_group_code: "",
					content: chat_cont,
					stream_str: 1,
					is_decode: 1,
					image_url: uni.getStorageSync('imgUrl'),
					msg_list: []
				}
				
				this.messageList[this.listName].map((item, tip) => {
					if(tip > 0) {
						let val = { role: item.type, content: item.talk }
						data.msg_list.push(val)
					}
				})
				data.msg_list = JSON.stringify(data.msg_list)
				
                await this.creatChatFun(data, 'first')
				
				this.chatInputValue = ''
				this.imgList = []


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
			// 上传图片
			takePhoto() {
				uni.navigateTo({
					url: '/childPage/chat/camera?chatValue='+ this.chatInputValue + '&source=3'
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
		// padding: 10upx;
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