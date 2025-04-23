<template>
	<view>
		<view class="headBtn" style="padding: 30upx">
			<view class="tab">
				<view class="tab_item" v-for="(item, index) in samplerList" :key="index"
					:class="{ tab_active: active == index }" @click="samplerSubmit(item,index)">
					{{ item.label }}
				</view>
			</view>
			<view class="btn">
				<!-- <view class="btn_item" style="margin-right: 32upx;" @click="toggle_voice">
					<image :src="voiceImg"></image>
					<view class="title">切换声音</view>
				</view> -->
				<!-- <view class="btn_item" v-if="isSpeak > 3">
					<image :src="clearImg"></image>
					<view class="title" @click="newSpeak">开启新会话</view>
				</view> -->
			</view>
		</view>
		
		<!-- <view class="btn_content">{{count}}算力/1K token</view> -->
		<view class="robot" style="padding: 20upx">
			<image class="pics" v-if="isSpeak != 0" :src="log" mode="widthFix"></image>
			<!-- <view class="title" v-if="isSpeak == 0">Hi，你好，我是小秘</view> -->
			<view class="title" v-if="isSpeak == 1">我在听...</view>
			<text class="title" v-if="isSpeak == 2">好的，我正在思考，请给我一点时间</text>
			<view class="title" v-if="isSpeak == 3">回答中...</view>
			<view class="title" v-if="isSpeak == 4">我已回答完毕，希望可以解决您的问题，本次记录将自动保存至历史</view>
			<view class="title" v-if="isSpeak == 5">抱歉，没听清楚请重新复述一遍</view>
			<view class="title" v-if="isSpeak == 6">抱歉，网络异常，稍后重试</view>
		</view>
		<view style="padding: 30upx" v-if='isVip'>
			<view class="pic" v-if='isSpeak != 0'>

				<image :src="picImg" mode="aspectFit" v-if="isSpeak > 3" class="back_img"></image>
				<image :src="picImg1" mode="aspectFit" v-if="isSpeak > 0 && isSpeak < 4" class="back_img"></image>

				<!-- <text class="text_l"> {{ stResult }} </text> -->
				<!-- <text class="text_l"> 这是回答{{ messageList[listName][0].talk }} </text> -->
			</view>

			<view v-if="isSpeak==0">
				<view class="exa_head">
					<image :src="vectorImg"></image>
					<text style="font-size: 32rpx;">不知道问我什么？可以试试：</text>
				</view>
				<view class="exa_item">帮我给一个四岁小孩讲一个海洋生物的小故事</view>
				<view class="exa_item">直播带货的风口还有多久会过去呢</view>
				<view class="exa_item">跟女生第一次约会聊什么</view>
				<view class="exa_item">我有个目标：一个月瘦5斤，帮我制定下健身计划</view>
			</view>
		</view>

		<view style="padding: 30upx" v-if='!isVip'>
			<view class="pic">
				<view class="pic_text" style="padding: 20upx">{{ tipMess }}</view>
				<view class="vip_btn" @click="goToVip" v-if="isCount">购买算力包</view>
			</view>
		</view>
		<view class="hisIcon" @click="newSpeak" v-if="isSpeak > 3"
			style="position: fixed;left: 60upx;bottom: 86upx;align-items: center;text-align: center;">
			<image :src="clearImg" style="width: 48upx;height: 48upx;"></image>
			<view style="color: #3F3F3F;font-size: 22upx;">开启新聊天</view>
		</view>
		<view class="btn_item" v-else style="position: fixed;left: 60upx;bottom: 86upx;align-items: center;text-align: center;" @click="toggle_voice">
			<image :src="voiceImg"></image>
			<view class="title">切换声音</view>
		</view>
		<view class="btn_bottom">
			<!-- <view class="btn_title" v-if="isSpeak < 1 || isSpeak > 3">点击进行提问</view> -->
			<!-- <view class="btn_title" v-if="isSpeak == 1">点击停止提问</view> -->
			<view class="btn_title">{{count}}算力/1K token</view>
			<view style="margin: 24upx 0;">
				<image :src="startBtnImg" @click="readyGO()" v-if="isSpeak == 0"></image>
				<image :src="startBtnImg" @click="jxSpeak()" v-if="isSpeak==4 ||isSpeak==5||isSpeak==6"></image>
				<image :src="endBtnImg" @click="stopSpeak()" v-if="isSpeak == 1"></image>
				<image :src="endImg" mode="aspectFit" v-if="isSpeak > 1 && isSpeak < 4" class="back_img"></image>
			</view>
		</view>
		<view class="hisIcon" @click="toHistory"
			style="position: fixed;right: 60upx;bottom: 92upx;align-items: center;text-align: center;">
			<image :src="clockImg" style="width: 48upx;height: 48upx;"></image>
			<view style="color: #3F3F3F;font-size: 22upx;">历史记录</view>
		</view>
		<!-- 选择声音 -->
		<view>
			<u-popup :show="videoShow" mode="center" :round="10" :closeOnClickOverlay='true' closeIconPos
				@close="videoShow=false">
				<view class="timbre">
					<view class="timbre_title">请选择音色</view>
					<view class="timbre_item" v-for="(item, index) in speechInfo" :key="index"
						@click="groupChange(index)"
						:style="[{border:(timbreActive==index?'2rpx solid #1F64FF':'2rpx solid #DBDBDB'),backgroundColor:(timbreActive==index?'#F2F6FE':'none')}]">

						<view class="left">{{item.name_cn}}</view>
					</view>
					<view class="timb_btn">
						<!-- <view class="btn_left" @click="selectVideo">取消</view> -->
						<view class="btn_right" @click="selectVideo">确定</view>
					</view>
				</view>


			</u-popup>
		</view>
	</view>
</template>

<script>
	const SpeechTranscription = require("../../utils/st")
	const sleep = require("../../utils/util").sleep

	import {
		getToken,
		textSpeech,
		updateSession
	} from '@/apis/user.js'
	import {
		xfChat,
		creatChat
	} from "@/apis/chat.js"
	import * as TextEncoding from 'text-encoding-shim';
	import {
		getSpeech
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				counter: 0,
				clockImg: global.baseImg + '/xcx/com/message_center/clock.png',
				message: '未开始识别语音', //录音转文字初步结果
				stResult: '', //录音转文字最终结果
				stStart: false, //是否开启录音
				token: '',
				isSpeak: 0,
				innerAudioContext: null,
				speech_type: '',
				picImg: global.baseImg + '/xcx/com/message_center/%E9%9D%99%E6%80%81%E5%9B%BE.png',
				picImg1: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',
				endImg: global.baseImg + '/xcx/com/message_center/luyin.png',
				logoImg: global.baseImg + '/xcx/com/message_center/logo9.png',
				listName: 'three',
				messageList: {
					'two': [],
					'three': []
				},
				session_code: '',
				chat_type: 4,
				message_covert: '',
				tipMess: '',
				isVip: true,
				message: '',

				//文心一言
				stop_three: false,
				three_shi: 0,
				three_time: 0,
				requestTask_three: '',

				//40
				stop_two: false,
				two_shi: 0,
				two_time: 0,
				requestTask_two: '',
				is_advanced: 0,
				isCount: false,
				count: '4.2w',
				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				voiceImg: global.baseImg + '/%E5%B0%8F%E7%A8%8B%E5%BA%8F/com/message_center/user.png',
				clearImg: global.baseImg + '/xcx/com/message_center/clean.png',
				vectorImg: global.baseImg + '/xcx/com/message_center/Vector%20190.png',
				startBtnImg: global.baseImg + '/xcx/com/message_center/%E5%BD%95%E9%9F%B3.png',
				endBtnImg: global.baseImg + '/xcx/com/message_center/%E7%BB%93%E6%9D%9F.png',
				chatType: '普通版',
				chatShow: false,
				samplerList: [{
						label: '普通版',
						chat_type: 4
					},
					{
						label: '高级版',
						chat_type: 1
					},
				],

				speechInfo: '',
				radiovalue: 0,
				speech_type: 'alloy',
				active: 0,
				videoShow: false,
				timbreActive: 0,
				isVideo: false, //是否是语音对讲返回结果播放
				msg_code: ''
			}
		},

		components: {

		},

		onLoad: async function(option) {
			// console.log(option, 6666)
			// this.speech_type = option.speech_type
			// this.chat_type = option.chat_type
			//语音播放初始化
			this.init()

			//录音初始化
			wx.getRecorderManager().onFrameRecorded((res) => {
				// console.log(res,66665)
				// console.log(this.st,5869)
				// console.log(this.stStart,63214)
				if (res.isLastFrame) {
					console.log("record done")
				}
				if (this.st && this.stStart) {
					// console.log("send " + res.frameBuffer.byteLength)
					this.st.sendAudio(res.frameBuffer)
				}
			})
			wx.getRecorderManager().onStart(() => {
				console.log("start recording...")
			})
			wx.getRecorderManager().onStop((res) => {
				console.log(res, "stop recording...")
				// this.uploadVoice(res.tempFilePath);
				// console.log(this.stResult, 747474)
				// this.sendMessage()

				// if (res.tempFilePath) {
				// 	wx.removeSavedFile({
				// 		filePath:res.tempFilePath
				// 	})
				// }
			})
			wx.getRecorderManager().onError((res) => {
				console.log("recording failed:" + res)
			})

			try {
				await this.getRcordToken()
			} catch (e) {
				console.log("error on get token:", JSON.stringify(e))
				return
			}
			// console.log(this.token,8854)
			let st = new SpeechTranscription({
				url: 'wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1',
				appkey: '', //填写后台提供的key
				token: this.token
				// token: '9468efe7f4c84778a398d70f0d910c27'
			})

			st.on("started", (msg) => {
					console.log("Client recv started")
					// this.stResult = msg
				}),

				st.on("changed", (msg) => {
					console.log("Client recv changed:", msg)
					let result = JSON.parse(msg)
					// console.log(result,4158)
					if (result.header.name == 'TranscriptionResultChanged') {
						this.message = result.payload.result;
					}

				}),

				st.on("completed", (msg) => {
					console.log("Client recv completed:", msg)
					// this.testValue = JSON.stringify(msg)
				}),

				st.on("begin", (msg) => {
					console.log("Client recv sentenceBegin:", msg)
					let result = JSON.parse(msg)
					// console.log(result,4158)
					if (result.header.name == 'SentenceBegin') {
						this.message = ''
						// this.$forceUpdate()
					}
					// this.stResult = msg
				})

			st.on("end", (msg) => {
				console.log("Client recv sentenceEnd:", msg)
				let result = JSON.parse(msg)
				// console.log(result,4158)
				if (result.header.name == 'SentenceEnd') {
					this.message = ''
					this.stResult = this.stResult + result.payload.result;
					this.$forceUpdate()
					console.log(this.stResult, 9958)
				}
			})

			st.on("closed", () => {
				if (this.stStart) {
					console.log('出现close')
					// clearInterval(this.timer_li);
					this.continueRecord() // 如果没有主动停止则继续录音
				} else {
					this.endRecord()
					if (this.st) {
						this.st.shutdown()
					} else {
						console.log("st is null")
					}
					// this.$api.msg('录音失败，请退出重试')
				}
			})

			st.on("failed", (msg) => {
				console.log("Client recv failed:", msg)
				// this.stResult = '写一首诗歌'
				let result = JSON.parse(msg)
				// this.sendMessage()
				if (result.header.status == '40000004' && this.stStart) {
					console.log('出现错误了')
					this.continueRecord() // 如果没有主动停止则继续录音
				} else {
					this.endRecord()
					if (this.st) {
						this.st.shutdown()
					} else {
						console.log("st is null")
					}
					// this.$api.msg('录音失败，请退出重试')
				}

			})

			this.st = st

		},
		onShow() {
			this.getSpeech()
			wx.setKeepScreenOn({ // 屏幕保持不息屏
				keepScreenOn: true
			})
			if (this.chat_type == 4) {
				this.listName = 'three'
				this.is_advanced = 0
				this.count = '4.2w'
			} else {
				this.listName = 'two'
				this.is_advanced = 1
				this.count = '127.8w'
			}
		},
		onHide() {
			if (this.stResult != '') {
				this.endRecord()
				if (this.st) {
					this.st.shutdown()
				} else {
					console.log("st is null")
				}
			}
			this.stop()
		},

		onUnload: function() {
			if (this.stResult != '') {
				this.endRecord()
				if (this.st) {
					this.st.shutdown()
				} else {
					console.log("st is null")
				}
			}
			this.stop()
		},
		methods: {

			init() {
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});

				this.innerAudioContext.onEnded(() => {

					console.log('播放停止了')
					this.innerAudioContext.stop()
					if (this.isVideo) {
						this.isSpeak = 4
					}
				})
			},

			async readyGO() {
				//获取录音权限
				uni.authorize({
					scope: 'scope.record',
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '请在小程序设置中启用麦克风权限'
						})
					},
					success: () => {
						console.log('开启成功')
						this.startRecord()
					}
				})
			},

			startRecord: async function() {

				if (!this.st) {
					console.log("st is null")
					return
				}

				if (this.stStart) {
					console.log("st is started!")
					return
				}
				let st = this.st
				this.isSpeak = 1
				this.isVip = true;
				try {
					await st.start(st.defaultStartParams())
					this.stStart = true
					this.stResult = ''

					console.log('录音开始')
				} catch (e) {
					console.log("start failed:" + e)
					return
				}
				wx.getRecorderManager().start({
					duration: 600000,
					numberOfChannels: 1,
					sampleRate: 16000,
					format: "PCM",
					frameSize: 4
				})
			},

			// 时间到后继续录音
			continueRecord: async function() {

				let st = this.st
				let that = this;
				try {
					await st.start(st.defaultStartParams())
					console.log('录音继续')
				} catch (e) {
					console.log("start failed:" + e)
					return
				}
				wx.getRecorderManager().start({
					duration: 600000,
					numberOfChannels: 1,
					sampleRate: 16000,
					format: "PCM",
					frameSize: 4
				})
			},

			stopSpeak() {
				this.isSpeak = 2
				this.endRecord()
				setTimeout(() => {
					this.sendMessage()
				}, 2000);
			},

			// 结束录音
			endRecord: async function() {

				wx.getRecorderManager().stop()
				this.stStart = false
				await sleep(500)
				if (this.stStart && this.st) {
					try {
						console.log("prepare close st")
						await this.st.close()

					} catch (e) {
						console.log("close st failed:" + e)
					}
				}
			},

			// 获取token
			async getRcordToken() {
				console.log('获取了token')
				await getToken().then(res => {
					if (res.code == 20000) {
						this.token = res.data.token
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取token失败');
				})
			},

			sendMessage() {

				let arr = []
				if (this.messageList[this.listName].length > 0) {
					this.messageList[this.listName].forEach((item, index) => {
						arr.push({
							role: item.type,
							content: item.talk,
						})
					})
				}
				// console.log(this.stResult, 22222)
				if (this.stResult == '') return this.isSpeak = 5
				this.messageList[this.listName].push({
					talk: this.stResult,
					type: 'user',
					message_covert: this.message_covert
				})

				let chat_cont = this.stResult

				let data = {
					chat_type: this.chat_type,
					action_type: '3',
					scenario_type: 'speak',
					session_code: this.session_code,
					chat_group_code: "",
					content: this.stResult,
					msg_list: arr
				}
				data.msg_list.push({
					role: 'user',
					covert_content: this.message_covert,
					content: chat_cont
				})
				// if(this.imgList.length > 0) {
				// 	data.msg_list[0].images = this.imgList
				// }
				data.msg_list = JSON.stringify(data.msg_list)
				// console.log(data,33333)

				this.creatChatFun(data, 'first')

			},

			//信息回调方法
			async creatChatFun(data, state) {
				if (this.listName == 'three') {
					let three_num = 0;
					// this.messageList.three.push({
					// 	talk: `思考中,耗时${three_num}秒`,
					// 	type: 'assistant'
					// })

					// this.three_shi = setInterval(() => {
					// 	three_num++
					// }, 1000)
					// this.three_time = setInterval(() => {
					// 	// this.messageList.three[this.messageList.three.length - 1] = {
					// 	// 	talk: `思考中,耗时${three_num}秒`,
					// 	// 	type: 'assistant'
					// 	// }
					// 	this.$forceUpdate()
					// }, 1000)

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
							// clearInterval(this.three_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							// clearInterval(this.three_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								// clearInterval(this.three_time)

								// 非手动停止才执行
								if (!this.stop_three) {
									xfChat(data).then(res => {
										// console.log(res, 4444444)
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
												this.tipMess = res.msg
												this.isVip = false
												this.stStart = false
												this.isSpeak = 0
												if (res.code == 40022) {
													isCount = true
												}
												// this.messageList[this.listName][this.messageList[this.listName].length - 1] = {
												// 	talk: res.msg,
												// 	type: 'assistant',
												// 	time: 0,
												// 	code: res.code == 40022 ? res.code : 40021,
												// 	status: "stop",
												// 	textNumber: 0,
												// 	history: false,
												// 	loading: true
												// }
											}
											this.$forceUpdate()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											this.isSpeak = 6
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

									})

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
									this.tipMess = JSON.parse(item).msg
									this.isVip = false
									this.stStart = false
									this.isSpeak = 0
									if (res.code == 40022) {
										isCount = true
									}
									// this.messageList[this.listName][this.messageList[tabType].length - 1] = {
									// 	talk: JSON.parse(item).msg,
									// 	type: 'assistant',
									// 	time: 0,
									// 	code: JSON.parse(item).code == 40022 ? JSON.parse(item).code : 40021,
									// 	status: "stop",
									// 	textNumber: 0,
									// 	history: false,
									// 	loading: true
									// }
									this.$forceUpdate()
									// clearInterval(this.three_time)
									// clearInterval(this.three_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
									this.isSpeak = 6
								}
							} else {
								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								this.msg_code = JSON.parse(item).msg_code
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
								// if (state == 'first') {
								// 	this.supplement = {
								// 		chat_type: 4,
								// 		action_type: 3,
								// 		session_code: this.session_code,
								// 		// chat_group_code: this.chat_group_code,
								// 		stream_str: 1,
								// 		is_decode: 1,
								// 		msg_list: [{
								// 				role: 'user',
								// 				content: data.content,
								// 			},
								// 			{
								// 				role: 'assistant',
								// 				content: info,
								// 			}
								// 		]
								// 	}
								// }

								//继续提问和补充
								// if (state == 'continue') {
								// 	//把数据变成Array
								// 	try {
								// 		// console.log('进来了', info);	
								// 		this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
								// 	} catch (e) {
								// 		console.log('我不是JSON');
								// 	}

								// 	this.supplement.msg_list.push({
								// 		role: 'assistant',
								// 		content: info,
								// 	})
								// }
								// clearInterval(this.three_time)


								//重置最后一条信息
								let newArr = {
									talk: info,
									type: 'assistant',
									// time: three_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code
									// chat_group_code: this.chat_group_code,
								}


								if (load_state == true) {
									// console.log(info,6666)
									this.textSpeech(info)
									this.messageList[tabType].push(newArr)
								}

							}

							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'two') {
					let two_num = 0;
					// this.messageList.two.push({
					// 	talk: `思考中,耗时${two_num}秒`,
					// 	type: 'assistant'
					// })

					// this.two_shi = setInterval(() => {
					// 	two_num++
					// }, 1000)
					// this.two_time = setInterval(() => {
					// 	this.messageList.two[this.messageList.two.length - 1] = {
					// 		talk: `思考中,耗时${two_num}秒`,
					// 		type: 'assistant'
					// 	}
					// 	this.$forceUpdate()
					// }, 1000)

					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					this.requestTask_two = uni.request({
						// url: global.baseUrl + '/api/chat/new_chat_session',
						url: global.baseUrl + '/api/chat/async_chat_session',
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
							this.messageList[tabType][this.messageList[tabType].length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							// clearInterval(this.two_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							// clearInterval(this.two_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) !=
								'null') {

								// let code
								// clearInterval(this.two_time)

								// 非手动停止才执行
								if (!this.stop_two) {
									creatChat(data).then(res => {
										// console.log(res.code, 'resdadasdsa');
										// code = res.code
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
												this.tipMess = res.msg
												this.isVip = false
												this.stStart = false
												this.isSpeak = 0
												if (res.code == 40022) {
													isCount = true
												}
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
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											this.isSpeak = 6
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
											this.isSpeak = 6
										}

									})

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

					this.requestTask_two.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null)
								// info += this.base64ToString(JSON.parse(item).content)
								info += JSON.parse(item).content
							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.tipMess = res.msg
									this.isVip = false
									this.stStart = false
									this.isSpeak = 0
									if (res.code == 40022) {
										isCount = true
									}
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
									// clearInterval(this.two_time)
									// clearInterval(this.two_shi)
									return
								} else {
									this.$api.msg('网络异常，请稍后重试')
									this.isSpeak = 6
								}
							} else {

								this.session_code = JSON.parse(item).session_code
								this.chat_group_code = JSON.parse(item).chat_group_code
								this.msg_code = JSON.parse(item).msg_code
								status = JSON.parse(item).finish_reason
								integral = JSON.parse(item).integral
								completion_tokens = JSON.parse(item).completion_tokens
								prompt_tokens = JSON.parse(item).prompt_tokens
								let load_state = false

								if (status != null && status != '') {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 1,
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
								// clearInterval(this.two_time)


								//重置最后一条信息
								let newInfo = {
									talk: info,
									type: 'assistant',
									// time: two_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code
								}
								if (load_state == true) {
									// console.log(info,8521)
									this.textSpeech(info)
									this.messageList[tabType].push(newInfo)
								}
							}

							this.$forceUpdate()

						}))

					})
				}
			},

			textSpeech(info) {
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				let tip = this.messageList[this.listName].length % 2 + 1;
				let val = {
					'llm_answer': info,
					'user_id': userInfo.user_id,
					'character': this.speech_type,
					'session_code': this.session_code,
					'is_advanced': this.is_advanced,
					'speech_order': tip
				}
				textSpeech(val).then(res => {
					if (res.code == 20000) {
						this.play(res.data.llm_speech_url)
						this.saveSpeech(res.data.llm_speech_url)
					} else {
						this.$api.msg(res.msg);
						this.isSpeak = 6
					}
				}).catch(err => {
					this.$api.msg('转换失败');
					this.isSpeak = 6
				})
			},

			// 保存声音
			saveSpeech(url) {
				let val = {
					"msg_code": this.msg_code, // 子表对话唯一编号
					"audio_url": url, // 音频url
				}
				updateSession(val).then(res => {
					if (res.code == 20000) {

					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('保存失败！')
				})
			},

			play(url) {
				// console.log(url,5537)

				this.stop()
				this.isSpeak = 3
				this.innerAudioContext.src = url;
				this.innerAudioContext.play();
				this.isVideo = true
				// this.$forceUpdate()
			},

			jxSpeak() {
				this.stop()
				this.isSpeak = 0
				this.isVip = true
				this.isCount = false
				this.stStart = false
				this.stResult = ''
				this.msg_code = ''
				this.readyGO()
			},

			newSpeak() {
				this.stop()
				this.stStart = false
				this.isSpeak = 0
				this.isVip = true
				this.isCount = false
				this.messageList[this.listName] = [];
				this.session_code = '';
				this.stResult = ''
				this.msg_code = ''
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

			toHistory() {
				this.stop()
				uni.navigateTo({
					url: '/childPage/voice/speak_history?chat_type=' + this.chat_type,
				})
			},
			//模型选择器
			samplerSubmit(item, index) {
				console.log(item);
				this.chatShow = false;
				this.chat_type = item.chat_type;
				this.chatType = item.label;
				if (this.chat_type == 4) {
					this.count = '4.2w'
					this.listName = 'three'
				} else {
					this.count = '127.8w'
					this.listName = 'two'
				}
				this.active = index
				this.newSpeak()
				this.$forceUpdate()

			},
			// 获取音色
			getSpeech() {
				getSpeech().then(res => {
					if (res.code == 20000) {
						// console.log(res.data, 320)
						this.speechInfo = res.data;

					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},

			toggle_voice() {
				this.videoShow = true
			},

			groupChange(index) {
				this.stop()
				console.log(index, 222)
				let url = this.speechInfo[index].sound_url;
				this.speech_type = this.speechInfo[index].name_eng
				let path = global.baseImg + '/' + url
				this.innerAudioContext.src = path;
				this.innerAudioContext.play();
				// this.isPlay = true
				this.timbreActive = index
				this.isVideo = false
			},

			//原生停止
			stop() {
				this.innerAudioContext.stop();
				// this.isPlay = false
				// console.log('停止播放')
			},

			selectVideo() {
				this.videoShow = false
				this.stop()
			}
		}
	}
</script>

<style>


</style>

<style lang="less" scoped>
	page {
		background: #fff;
	}

	.pic {
		border-radius: 8upx;
		background: #FFF;
		width: 100%;
		height: 30vh;
		margin-bottom: 32upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.back_img {
			width: 260upx;
			height: 260upx;
		}

		.pic_text {
			color: #000;
			font-size: 28upx;
			// line-height: 50upx;
			// text-align: center;
		}

		.pic_img {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 20upx;

			.logo_img {
				width: 48upx;
				height: 48upx;
				margin-right: 20upx;
			}

		}

		.vip_btn {
			width: 30%;
			font-size: 32upx;
			background: #1F64FF;
			color: #fff;
			padding: 20upx 0;
			margin-top: 30upx;
			text-align: center;
			border-radius: 10upx;
		}
	}

	.pic_btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 15upx 0;
		position: fixed;
		bottom: 0;
		background: #fff;

		.btn {
			border-radius: 16upx;
			background: #1F64FF;
			width: calc(100% - 50upx);
			padding: 20rpx 0rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color: #fff;
			font-size: 32upx;
			line-height: 50upx;
			margin-top: 20upx;
		}

		.btn_new {
			border-radius: 16rpx;
			background: #fff;
			border: 1upx solid #1F64FF;
			width: calc(100% - 50upx);
			padding: 20rpx 0rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #1f64ff;
			font-size: 32upx;
			line-height: 50upx;
			margin-top: 25upx;
		}
	}

	.tip_history {
		font-size: 30upx;
		padding: 20upx 25upx;
		color: #1F64FF;
		width: calc(100% - 50upx);
		text-align: right;
	}

	// .link_l {
	// 	display: flex;
	// 	align-items: center;
	// 	padding: 0 20upx;
	// 	width: calc(100% - 40upx);
	// 	.tip_history {
	// 		font-size: 30upx;
	// 		padding: 20upx;
	// 		color: #1F64FF;
	// 	}
	// 	.l_chat_l {
	// 		width: 20%;
	// 	}
	// 	.btn_top {
	// 		flex: 1;
	// 	}
	// }
	.headBtn {
		display: flex;
		justify-content: center;
		align-items: center;

		.tab {
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			border-radius: 16upx;
			width: 376upx;
			height: 80upx;

			.tab_item {
				width: 50%;
				height: 100%;
				text-align: center;
				line-height: 250%;
			}

			.tab_active {
				border-radius: 12upx;
				background: #1F64FF;
				color: #fff;
			}
		}


	}

	.btn {
		display: flex;
		justify-content: space-between;
	}

	.btn_item {
		align-items: center;
		text-align: center;
		width: 20%;

		image {
			width: 33upx;
			height: 36upx;
		}

		.title {
			color: #3F3F3F;
			font-size: 22upx;
			font-weight: 400;
			line-height: 150%;
		}
	}

	.robot {
		display: flex;
		align-items: center;
		// margin: 74upx 0 0 0;

		.pics {
			width: 64upx;
			height: 64upx;
			border-radius: 50%;
			margin-right: 16upx;
		}

		.title {
			color: #242F49;
			font-size: 34upx;
			font-weight: 500;
			line-height: 150%;
		}
	}

	.btn_bottom {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, -4%);
		text-align: center;

		.btn_title {
			color: #8791A8;
			font-size: 24upx;
			font-weight: 400;
			line-height: 150%;
		}

		image {
			width: 160upx;
			height: 160upx;
		}


	}

	.btn_content {
		color: #333;
		font-size: 26upx;
		font-weight: 500;
		line-height: 30upx;
		width: 100%;
		text-align: center;
		margin-top: 20upx;
	}

	.timbre {
		padding: 26upx;
		border-radius: 8upx;

		.timbre_title {
			color: #000;
			font-size: 28upx;
			font-weight: 500;
			line-height: 150%;
		}

		.timbre_item {
			width: 399rpx;
			height: 59rpx;
			margin-top: 8px;
			border-radius: 16rpx;
			text-align: center;
			line-height: 200%;

			.left {
				color: #252449;
				font-size: 25upx;
				font-weight: 400;
			}
		}

		.timb_btn {
			width: 100%;
			padding-top: 50upx;
			display: flex;
			align-items: center;
			justify-content: center;

			.btn_right {
				width: 80%;
				font-size: 30upx;
				padding: 20upx 0;
				background: #1F64FF;
				color: #fff;
				text-align: center;
				border-radius: 8upx;
			}
		}
	}

	.exa_head {
		display: flex;
		margin-bottom: 38upx;
		align-items: center;

		image {
			width: 26upx;
			height: 19upx;
		}

		text {
			color: #3F3F3F;
			font-size: 14px;
			font-weight: 400;
			line-height: 150%;
		}
	}

	.exa_item {
		color: #7D7D7E;
		font-size: 24upx;
		font-weight: 400;
		line-height: 150%;
		display: flex;
		padding: 20upx 28upx;
		gap: 20upx;
		border-radius: 16upx 16upx 16upx 0;
		background: #FDFDFE;
		margin-bottom: 10upx;
	}
</style>