<template>
	<!-- 数字人对话页面 -->
	<view class='main'>
		<!-- <image src="https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/IMG_6933 1.png"></image> -->
		<!-- <video :src="speak1" autoplay loop :controls="false" :show-fullscreen-btn="false" objectFit='cover'
		style="width: 100%; height: 100vh"></video> -->
		<image :src="getImgUrl(infoSpeak.out_video_cover)" class="video_w" :style="{'z-index': img_index}" mode="aspectFill"></image>
		<video :src="getImgUrl(infoSpeak.out_video)" id="noVideo" loop :controls="false" :show-fullscreen-btn="false" objectFit='cover' http-cache
		class="video_w" :style="{'z-index': no_index}" @click="playSpeak" @play="toSpeakN"></video>
		<video :src="getImgUrl(infoSpeak.out_video_speak)" loop id="myVideo" :controls="false" :show-fullscreen-btn="false" objectFit='cover' http-cache
		class="video_w" :style="{'z-index': y_index}" @click="speakOne" @play="toSpeakY"></video>
		<!-- 顶部选项 -->
		<view class='top-nav'>
			<view v-if="infoSpeak.user_mobile" @click="toPhone(infoSpeak.user_mobile)">
				<image :src='phoneImg'></image>
				<text>电话</text>
			</view>
			<view v-if="infoSpeak.wechat_code" @click="checkInfo(1)">
				<image :src='wxImg'></image>
				<text>微信</text>
			</view>
			<view v-if="infoSpeak.group_code" @click="checkInfo(2)">
				<image :src='wxgImg'></image>
				<text>微信群</text>
			</view>
			<view v-if="infoSpeak.model_website" @click="checkInfo(3)">
				<image :src='webImg'></image>
				<text>网址</text>
			</view>
			<view @click="message()" v-if="temp_id">
				<u-icon name="chat" size="21" color="#FFF"></u-icon>
				<text>留言</text>
			</view>
		</view>
		<!-- 右边菜单 -->
		<view class='right-nav'>
			<!-- <view v-for='(item,index) in digital_right_nav' @click="toDigital(index)" :key='item.text'>
				<image :src='item.img'></image>
				<text>{{item.text}}</text>
			</view> -->
			<view @click="toDigital(0)" >
				<image :src='tabImg5'></image>
				<text>创建形象</text>
			</view>
			<view @click="toDigital(1)">
				<image :src='tabImg1'></image>
				<text>编辑分身</text>
			</view>
			
			<view @click="toDigital(2)" v-if="!temp_id">
				<image :src='tabImg3'></image>
				<text>分享</text>
			</view>
			<view @click="toDigital(3)" v-if="!temp_id">
				<image :src='tabImg4'></image>
				<text>记录</text>
			</view>
		</view>
		<view class='bottom'>
			<view class='bottom-tags' v-if="infoSpeak.tags">
				<view class='bottom-tags-title'>
					<image src="https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/标签 1.png"></image>
					<text>标签</text>
				</view>
				<view class='tag' v-for='(item,index) in infoSpeak.tags':key='index' v-if="item != ''">{{ item }}</view>
				<!-- <view class='tag'>温柔</view> -->
			</view>
			<view class="bottom-tips">{{ speakValue }}</view>
			<view class="bottom-bottom">
				<view class="bottomInput" ref="textInput" :style="{bottom:Height+'px'}">
						<u-row align='bottom' gutter="5" v-if="chatChange == 'audio'">
							<u-col span="1">
								<view style="height: 100%;display: flex;justify-content: center;align-items: center;">
									<u-icon name="chat" size="32" color="#666" @click="chatChange = 'keyboard'"></u-icon>
								</view>
							</u-col>
							<u-col span="11">
								<view class="chat_audio" @longpress="longpressBtn(4)" @touchend="touchendBtn()">
									<text>按住说话</text>
								</view>
							</u-col>
						</u-row>
						<u-row align='bottom' gutter="5" v-else>
							<u-col span="1">
								<view style="height: 100%;display: flex;justify-content: center;align-items: center;">
									<u-icon name="mic" size="32" color="#666" @click="changeSpeak"></u-icon>
								</view>
							</u-col>
							<u-col span="8.5">
								<view class="chat_input">
									<u-textarea v-model="chatInputValue" placeholder="在此输入您想了解的内容" @confirm="sendMessage" autoHeight
										:showConfirmBar='false' :adjustPosition='false' @focus='inputFocus' @blur='inputBlur'
										maxlength='-1' :disableDefaultPadding='true' @keyboardheightchange='keyboardheightchange'
										border='none' :focus="false">
									</u-textarea>
								</view>
							</u-col>
							<u-col span="2.5" align="bottom">
								<u-button type="primary" color="#1F64FF" @click="sendMessage">发送</u-button>
							</u-col>
						</u-row>
					</view>
			</view>
		</view>
		<u-popup :show="messageShow" mode="center" :round="8" length="auto">
				<view class="message-box">
					<view class="message-close" @click="messageShow = false">
						<u-icon name="close" size="21"></u-icon>
					</view>
					<view class="message-title">留言</view>
					<view class="message-content">
						<u-textarea v-model="messageValue" placeholder="请输入你想留言的内容"
							maxlength="-1"></u-textarea>
						<view class="phone_title">联系方式</view>
						<u--input placeholder="请输入手机号码" border="surround" maxlength="30" v-model="messagePhone"></u--input>
						<view class="message-submit" @click="messageSubmit">提交</view>
					</view>
				</view>
		</u-popup>
		
		<!-- 顶部栏提示内容-->
		<u-popup :show="tipShow" mode="center" :round="8" length="auto">
			<view class="message-box">
				<view class="message-close" @click="tipShow = false" v-if="top_tip != 4">
					<u-icon name="close" size="21"></u-icon>
				</view>
				<!-- <view class="message-title">留言</view> -->
				<view class="message-content" v-if="top_tip == 1">
					<image :src="getImgUrl(infoSpeak.wechat_code)" mode="aspectFit" style="width: 100%"></image>
				</view>
				
				<view class="message-content" v-if="top_tip == 2">
					<image :src="getImgUrl(infoSpeak.group_code)" mode="aspectFit" style="width: 100%"></image>
				</view>
				
				<view class="message-content" v-if="top_tip == 4">
					<image :src="picImg1" mode="aspectFit" style="width: 100%"></image>
					<!-- <view>{{ stResult }}</view> -->
				</view>
				
				<view class="message-content" v-if="top_tip == 3">
					<view style="margin-top: 40rpx; text-align: center;">{{ infoSpeak.model_website }}</view>
					<view class="message-submit" @click="copyWebsite(infoSpeak.model_website)">复制</view>
				</view>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	const SpeechTranscription = require("../../utils/st")
	const sleep = require("../../utils/util").sleep
	
	import {
		getToken
	} from '@/apis/user.js'
	import {
		getModelList, getInteract, creatMessage
	} from '@/apis/home.js'
	import {
		xfChat
	} from "@/apis/chat.js"
	import * as TextEncoding from 'text-encoding-shim';
	export default{
		data() {
			return {
				picImg1: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',
				phoneImg: global.baseImg + "/xcx/com/message_center/Frame 427321012.png",
				wxImg: global.baseImg + "/xcx/com/message_center/Frame 427319549.png",
				wxgImg: global.baseImg + "/xcx/com/message_center/users-group.png",
				webImg: global.baseImg + "/xcx/com/message_center/web_site.png",
				tabImg1: global.baseImg + "/xcx/com/message_center/minus-square.png",
				tabImg2: global.baseImg + "/xcx/com/message_center/消息 1.png",
				tabImg3: global.baseImg + "/xcx/com/message_center/分享 4.png",
				tabImg4: global.baseImg + "/xcx/com/message_center/记录 (1).png",
				tabImg5: global.baseImg + "/xcx/com/message_center/creat.png",

				chatChange:"keyboard",		//对话状态  语音/文字输入
				isBtn: false,
				Height: 0,
				speak1: global.baseImg + '/xcx/com/message_center/speak1.mp4',
				speak2: global.baseImg + '/xcx/com/message_center/speak2.mp4',
				speak3: global.baseImg + '/xcx/com/message_center/speak3.mp4',
				messageShow:false,	//留言框
				messageValue:"",	//留言文本
				messagePhone:"",	//留言电话
				
				chatInputValue: "",
				chat_type: -4, //4文心一言5讯飞星火8chatGlm
				loading: true,
				session_code: "",
				chat_group_code: "",
				supplement: {
					msg_list: []
				},
				prompt: '',
				
				isone: true,
				videoContext: '',
				videoContext_no: '',
				
				infoSpeak:'',
				token: '',
				voice_url: '',
				innerAudioContext: null,
				speakValue: '',
				
				stop_three: false,
				three_shi: 0,
				three_time: 0,
				requestTask_three: '',
				load_state: false,
				messageValue: '',
				chatValue: [],
				voiceValue: [],
				current: 0, // 当前播放的音频索引
				textIndex: 0,
				text_val: '',
				
				noSpekLoad: true,
				ySpeakLoad: true,
				interact: '',
				is_click: false,
				click_count: 0,
				
				temp_id: '',
				tipShow: false,
				top_tip: 1,
				
				img_index: 9,
				no_index: 8,
				y_index: 7,
				
				isPlay: true,//用于判断是否问题返回的语音播放
				
				stResult: '', //录音转文字最终结果
				stStart: false, //是否开启录音
				rec_token: '',
				webSocketTask: '',
				webSendTask: ''
			}
		},
		
		onLoad: async function(option) {
			if(option.chatInfo) {
				this.infoSpeak = JSON.parse(option.chatInfo)
				this.speakValue = this.infoSpeak.model_greetings
				this.interact = this.infoSpeak.model_greetings
				if(!this.speakValue) {
					this.speakValue = '你好我是数字分身，有什么问题可以向我提问'
					this.interact = '你好我是数字分身，有什么问题可以向我提问'
				}
			}
			
			if(option.temp_id) {
				this.temp_id = option.temp_id
			}
			
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
				// console.log('开始获取')
				await this.getToken()
			} catch (e) {
				console.log("error on get token:", JSON.stringify(e))
				return
			}

			let st = new SpeechTranscription({
				url: 'wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1',
				appkey: '', //填写后台提供的key
				token: this.rec_token
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
						// this.message = result.payload.result;
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
						// this.message = ''
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
					// console.log(this.stResult, 9958)
				}
			})
			
			st.on("closed", () => {
				if (this.stStart) {
					// console.log('出现close')
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
		
		onShow(){
			this.videoContext_no = uni.createVideoContext('noVideo')
			this.videoContext = uni.createVideoContext('myVideo')
			
			if(this.infoSpeak == '') {
				// console.log(this.infoSpeak,663)
				this.getModelList()
			} else {
				// this.getRcordToken()
				setTimeout(() => {
					this.videoContext_no.play()
				}, 1000)
			}
			
		},
		onHide(){
			// uni.closeSocket()
			this.voiceValue = []
			this.stop()
		},
		onUnload() {
			// uni.closeSocket()
			this.voiceValue = []
		    this.stop()
		},
		methods:{
			init() {
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
			
				this.innerAudioContext.onEnded(() => {
					console.log('播放停止了')
					// this.innerAudioContext.stop()
					  this.current++;
					  // console.log(this.voiceValue,5581)
					  if (this.current < this.voiceValue.length) {
						  if(this.chatValue[this.current]) {
							  this.speakValue = this.chatValue[this.current]
							  this.innerAudioContext.src = this.voiceValue[this.current];
							  this.innerAudioContext.play();
						  } else {
							  // console.log('视频关闭66')
							  this.speakValue = this.infoSpeak.model_greetings
							  if(!this.speakValue) {
							  	this.speakValue = '你好我是数字分身，有什么问题可以向我提问'
							  	this.interact = '你好我是数字分身，有什么问题可以向我提问'
							  }
							  this.videoContext.stop() 
							  this.videoContext_no.play() //静默视频播放
							  this.noSpekLoad = true
							  this.isPlay = true
						  }
						
					  }
					//关闭视频
					if(this.current >= this.voiceValue.length) {
						// console.log('视频关闭')
						this.speakValue = this.infoSpeak.model_greetings
						if(!this.speakValue) {
							this.speakValue = '你好我是数字分身，有什么问题可以向我提问'
							this.interact = '你好我是数字分身，有什么问题可以向我提问'
						}
						this.videoContext.stop() 
						this.videoContext_no.play() //静默视频播放
						this.noSpekLoad = true
						this.isPlay = true
					}
					
			
				})
				
				this.innerAudioContext.onStop((res) => {
				  console.log('出错了111');
				});
			},
			
			changeSpeak() {
				
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
						this.chatChange = 'audio'
					}
				})
			},
			
			longpressBtn(val) {
				this.readyGO()
				this.top_tip = val
				this.tipShow = true
			},
			
			touchendBtn() {
				// console.log('执行了')
				this.endRecord()
				setTimeout(() => {
					this.tipShow = false
					this.stopSpeak()
				}, 2000);
				
				
			},
			
			async readyGO() {
				//开始录音
				this.startRecord()
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
				this.chatInputValue = this.stResult
				this.sendMessage()
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
			async getToken() {
				console.log('获取录音token')
				await getToken().then(res => {
					if (res.code == 20000) {
						this.rec_token = res.data.token
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取token失败');
				})
			},
			
			getInteract() {
			    let val = {
			    	'model_id': this.infoSpeak.model_id,
			    	'question': '',
			    	'is_click': 1
			    }
				getInteract(val).then(res => {
					if (res.code == 20000) {
						this.click_count++
						if(this.click_count == 1 && this.infoSpeak.share_desc) {
							this.interact = this.infoSpeak.share_desc
							this.speakValue = this.infoSpeak.share_desc
						} else if(this.click_count == 2 && this.infoSpeak.model_function) {
							this.interact = this.infoSpeak.model_function
							this.speakValue = this.infoSpeak.model_function
							this.click_count = 0
						} else if(this.click_count == 0 && this.infoSpeak.model_greetings) {
							this.interact = this.infoSpeak.model_greetings
							this.speakValue = this.infoSpeak.model_function
						} else {
							this.speakValue = '你好我是数字分身，有什么问题可以向我提问'
							this.interact = '你好我是数字分身，有什么问题可以向我提问'
						}
						if(this.interact) {
							this.innerAudioContext.stop();
							this.voiceValue = []
							this.current = 0
							this.getRcordToken()
						} else {
							this.innerAudioContext.play();
							this.videoContext.play()
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			
			play(url) {
				this.innerAudioContext.src = url;
				this.innerAudioContext.play();
			},
			
			//原生停止
			stop() {
				this.innerAudioContext.stop();
				//关闭视频
				this.videoContext.stop() //静默视频停止
				this.videoContext_no.play() //静默视频停止
				this.noSpekLoad = true
			},
			// 获取token
			async getRcordToken() {
				await getToken().then(res => {
					if (res.code == 20000) {
						this.token = res.data.token
						this.speakSocket()
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取token失败');
				})
			},
			speakSocket(){
			    //创建webSocket
				let that = this
				// console.log(this.token,3333)
			    that.webSocketTask = uni.connectSocket({
			        url: 'wss://ai.umi6.com:28083/ws/ali/text_to_speech?token='+ this.token +'&long_tts=1&enable_ptts=1',
					// url: 'ws://192.168.31.165:8080/ws/ali/text_to_speech?token='+ this.token +'&long_tts=1&enable_ptts=1',
			        header: {
			            'content-type': 'application/json'
			        },
			        success(res) {
			            console.log('成功', res);
			        },
			    })
			    // 监听WebSocket连接打开事件
			    that.webSocketTask.onOpen((res) => {
			        console.log("监听WebSocket连接打开事件", res)
					// console.log(that.infoSpeak, 5548)
					if(that.interact != '') {
						that.text_val = that.interact
					} else {
						that.text_val = '你好我是数字分身，有什么问题可以向我提问'
					}
					that.webSocketTask.send({
						data: JSON.stringify({
							"text": that.text_val,
							"voice": that.infoSpeak.audio_code,
							"action_type": "send",
						})
					});
					that.webSocketTask.send({
						data: JSON.stringify({
							"action_type": "stop",
						})
					});
			    });
			    // 监听WebSocket错误
			    uni.onSocketError((res) => {
			        console.info("监听WebSocket错误" + res)
			    });
				
				// 接收websocket消息及处理
				that.webSocketTask.onMessage((res) => {
					console.log(res, 777)
					let type = typeof(res.data);
					if(type == 'string') {
						let info = JSON.parse(res.data);
						if(info) {
							let url = info.data;
							this.voice_url = global.baseImg + '/' + url
							console.log(this.voice_url,5589)
							that.webSocketTask.close()
							that.webSocketTask.onClose(function (res) {
							  console.log('WebSocket 已关闭！');
							});
							//互动执行
							if(this.is_click) {
								this.videoContext.play()
								this.play(this.voice_url)
								this.is_click = false
							}
						}
						
					}
				})
				
			},
			
			// 获取列表
			getModelList() {
			    let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let that = this
			    let val = ''
			    if(this.temp_id != '') {
			    	val = {
			    		'user_id': userInfo.user_id,
			    		'model_id': this.temp_id,
			    		'is_visitor': 1,
			    		'get_default': 0
			    	}
			    } else {
			    	val = {
			    		'user_id': userInfo.user_id,
			    		'is_visitor': 0,
			    		'get_default': 1
			    	}
			    }
				getModelList(val).then(res => {
					if (res.code == 20000) {
						if(res.data.length > 0) {
							this.infoSpeak = res.data[0]
								
							if(this.infoSpeak.model_greetings == '') {
								this.speakValue = '你好我是数字分身，有什么问题可以向我提问'
							} else {
								this.speakValue = this.infoSpeak.model_greetings
							}
							setTimeout(() => {
								that.videoContext_no.play()
							}, 1000)
							// console.log(this.infoSpeak,8547)
							// this.getRcordToken()
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			
			playSpeak() {
				this.getInteract()
				this.videoContext_no.stop()
				// this.videoContext.play() //第一段视频开始播放
				this.ySpeakLoad = true
				this.is_click = true
				// console.log('播放第一段视频111')
			},
			
			toSpeakN() {
				if(this.noSpekLoad) {
					// console.log('播放第一段视频2222')
					this.noSpekLoad = false
					this.img_index = 8;
					this.no_index = 9;
					this.y_index = 7;
				}
			},
			
			speakOne() {
				if(this.isPlay) {
					this.getInteract()
					this.innerAudioContext.pause(); //点击关闭音频
					this.videoContext.pause() // 点击暂停音频
					this.is_click = true
				}
			},
			
			toSpeakY() {
				// console.log(this.ySpeakLoad,'播放中')
				
				if(this.ySpeakLoad) {
					// console.log('播放第2段视频')
					this.ySpeakLoad = false
					this.img_index = 8;
					this.no_index = 7;
					this.y_index = 9;
					this.play(this.voice_url)
					
				}
			},
			
			// 跳转数字分身页面
			toDigital(index) {
				if (index == 0) {
					// 我的分身
					uni.navigateTo({
						url: '/childCont/digital/my'
					})
				} else if (index == 1) {
					//编辑数字人形象
					uni.navigateTo({
						url: '/childCont/digital/edit_digital?info='+ JSON.stringify(this.infoSpeak)
					})
				} else if (index == 2) {
					// 数字人分享
					uni.navigateTo({
						url: '/childCont/digital/share_digital?model_img='+ this.infoSpeak.out_video_cover +'&model_id='+ this.infoSpeak.model_id+'&greet='+this.infoSpeak.share_desc
					})
				} else {
					// 数字人记录
					uni.navigateTo({
						url: '/childCont/digital/history_digital?model_id='+ this.infoSpeak.model_id
					})
				}
			
			},
			keyboardheightchange(e) {
				// console.log(e, '键盘高度变化');
				if (e.detail.height == 0) {
			
					// console.log(e);
					// uni.showTabBar({
					// 	// animation: true
					// })
					this.Height = 0
					this.isBtn = false
				} else {
					this.isBtn = true
					this.Height = e.detail.height
				}

			},
			inputBlur(e) {
				this.$nextTick(() => {
					this.Height = 0
				})
				uni.setStorageSync('talkInfo', '')
			
			},
			inputFocus(e) {
				// console.log(e, 5879)
				if (this.isBtn) {
					
					this.$nextTick(() => {
						this.Height = e.detail.height

					})
				} else {
					this.Height = 0
				}
			},
			//点击留言
			message(){
				this.messageShow = true;
				// console.log(this.messageShow)
			},
			
			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},
			
			//发送消息
			sendMessage() {
				if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容')
				this.getsendToken()
			
				// const hide_cont = '(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)';
				let chat_cont = this.chatInputValue
				
				let cont = {
					'model_id': this.infoSpeak.model_id,
					'question': chat_cont,
					'is_click': 0
				}
				uni.showLoading({
					title: '思考中'
				});
				getInteract(cont).then(res => {
					if (res.code == 20000) {
						this.prompt = res.data.context
						let data = {
							chat_type: this.chat_type,
							// action_type: '3',
							session_code: this.session_code,
							chat_group_code: "",
							content: chat_cont,
							stream_str: 1,
							is_decode: 1,
							msg_list: [{
								role: 'user',
								content: chat_cont,
								covert_content: this.prompt,
								agent_id: this.infoSpeak.model_id
							}]
						}
						data.msg_list = JSON.stringify(data.msg_list)
						this.creatChatFun(data, 'first')
					} else {
						this.$api.msg(res.msg);
						uni.hideLoading()
					}
				}).catch(err => {
					this.$api.msg('获取失败');
					uni.hideLoading()
				})
				
				this.chatInputValue = ''
				this.load_state = false
				this.messageValue = ''
				this.chatValue = []
				this.voiceValue = []
				this.current = 0 // 当前播放的音频索引
				this.textIndex = 0
			
			},
			// 获取token
			getsendToken() {
				getToken().then(res => {
					if (res.code == 20000) {
						this.token = res.data.token
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取token失败');
				})
			},
			
			//对话发送
			sendSocket(){
			    //创建webSocket
				let that = this
				// console.log(this.token,3333)
			   that.webSendTask = uni.connectSocket({
			        url: 'wss://ai.umi6.com:28083/ws/ali/text_to_speech?token='+ this.token +'&long_tts=1&enable_ptts=1',
					// url: 'ws://192.168.31.165:8080/ws/ali/text_to_speech?token='+ this.token +'&long_tts=1&enable_ptts=1',
			        header: {
			            'content-type': 'application/json'
			        },
			        success(res) {
			            console.log('成功', res);
			        },
			    })
			    // 监听WebSocket连接打开事件
			   that.webSendTask.onOpen((res) => {
			        console.log("监听WebSocket连接打开事件", res)

			    });
			    // 监听WebSocket错误
			    uni.onSocketError((res) => {
			        console.info("监听WebSocket错误" + res)
			    });
				
				// 接收websocket消息及处理
				that.webSendTask.onMessage((res) => {
					console.log(res, 7778)
					let type = typeof(res.data);
					if(type == 'string') {
						let info = JSON.parse(res.data);
						if(info) {
							let url = info.data;
							 let speak_url = global.baseImg + '/' + url
							console.log(speak_url,5589)
							this.voiceValue.push(speak_url)
							if(this.voiceValue.length == 1) {
								this.speakValue = this.chatValue[0]
								this.innerAudioContext.src = this.voiceValue[0];
								this.innerAudioContext.play();
								this.videoContext_no.stop() //静默视频停止
								this.img_index = 8;
								this.no_index = 7;
								this.y_index = 9;
								this.ySpeakLoad = false;
								this.videoContext.play() //第一段视频开始播放
								// console.log('开始播放666')
							}
							let that = this
							that.webSendTask.close()
							that.webSendTask.onClose(function (res) {
							  // console.log('WebSocket 已关闭！22');
							 
							  that.textIndex++
							  // console.log(that.textIndex, 1114)
							  // console.log(that.chatValue.length, 2224)
							  // setTimeout(() => {
							  	if(that.textIndex < that.chatValue.length) {
								  that.sendSocket()
								  setTimeout(() => {
									that.webSendTask.send({
										data: JSON.stringify({
											"text": that.chatValue[that.textIndex],
											"voice": that.infoSpeak.audio_code,
											"action_type": "send"
										})
									});
									that.webSendTask.send({
										data: JSON.stringify({
											"action_type": "stop",
										})
									});
								  }, 1000)
							  	    
							  	}
							  // }, 800)
							  
							});
							
							
							
						}
						
					}
				})
				
			},
			
			base64ToString(encodedString) {
				// console.log(encodedString, 'encodedString');
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
				// console.log('解码string',string);
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
			
                
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				// // console.log(userInfo,'userInfo');
				// data.model = this.chat_pro;
				data.scenario_type = 'chat'
				// data.model = '360GPT_S2_V9';
				data.model = 'chatglm_turbo'
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
						
			
						this.$forceUpdate()
					},
			
					fail(err) {
						console.log(err, 'err');
					},
					complete: (complete) => {

			
						if (complete.statusCode != 200 && JSON.stringify(complete
								.statusCode) != 'null') {
		
			
							// 非手动停止才执行
							if (!this.stop_three) {
								xfChat(data).then(res => {
									if (res.code < 49999) {
										let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			
										if (res.code == 40013) {
											this.$api.msg('登录信息已过期，请重新登录')
											setTimeout(() => {
												uni.navigateTo({
													url: '/pages/login/login',
												})
											}, 1500)
			                                uni.hideLoading();
										} else {
											uni.hideLoading();
										}
										this.$forceUpdate()
									} else if (res.code > 49999) {
										this.$api.msg('网络异常，请稍后重试')
                                        uni.hideLoading();
									} else {
										this.$api.msg(res.msg)
										uni.hideLoading();
									}
			
								}).catch(err => {
									uni.hideLoading();
									console.log(err, 'err');
								})
			
								this.$forceUpdate()
							}
			
						}
					}
				})
				let strArr = []
				let info = ''
				// let integral = 0
				// let completion_tokens = 0
				// let prompt_tokens = 0
			
				this.requestTask_three.onChunkReceived(response => {
					const arrayBuffer = response.data;
					const uint8Array = new Uint8Array(arrayBuffer);
					const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);
					let status = ''
					let session_code = ''
					let chat_group_code = ''
					let arr = str.match(/\{(.+?)\}/g)
					arr.map((item => {
						// console.log(JSON.parse(item), 'item');
						if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
			
							info += this.base64ToString(JSON.parse(item).content)
							
							if (JSON.parse(item).finish_reason == 'stop') {
								console.log('结束了')
								this.load_state = true
							} else {
								this.load_state = false
							}
							
							let send_val = info.replace(this.messageValue, "")
							let new_val = ''
							const lastDotIndex = send_val.lastIndexOf("。");
							if((send_val.length > 40 && lastDotIndex != -1) || this.load_state == true ) {
								
								if(this.load_state) {
									new_val = send_val
								} else {
									new_val = send_val.substring(0, lastDotIndex+1);
								}
								this.chatValue.push(new_val)
								if(this.chatValue.length == 1) {
									this.sendSocket()
									this.isPlay = false //问题回答开始不再支持点击互动
									setTimeout(() => {
										uni.hideLoading();
										console.log(this.infoSpeak.audio_code,99999)
										this.webSendTask.send({
											data: JSON.stringify({
												"text": new_val,
												"voice": this.infoSpeak.audio_code,
												"action_type": "send"
											})
										});
										this.webSendTask.send({
											data: JSON.stringify({
												"action_type": "stop",
											})
										});
									}, 1000)
								}
								
								console.log(new_val,3333)
								
								this.messageValue = this.messageValue + new_val
								// console.log(this.messageValue,4444)
							}
			
					}))

					
					// console.log(new_val,3333)
			
				})
			
			},
			
			messageSubmit() {
				if(this.messageValue == '') {
					return this.$api.msg('请输入留言内容')
				}
				if(this.messagePhone == '') {
					return this.$api.msg('请输入联系方式')
				}
				let info = JSON.parse(uni.getStorageSync('userInfo'))
				let val = {
					'model_id': this.infoSpeak.model_id,
					'user_id': info.user_id,
					'content': this.messageValue,
					'user_mobile': this.messagePhone
				}
				creatMessage(val).then(res => {
					if (res.code == 20000) {
						this.$api.msg('留言成功');
						this.messageShow = false
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('留言失败');
				})
			},
			
			toPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone
				});
			},
			
			checkInfo(tip) {
				this.tipShow = true
				this.top_tip = tip
			},
			
			copyWebsite(val) {
				wx.setClipboardData({
					data: val, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				})
			}
			
		}
	}
</script>

<style scoped lang="less">
	/deep/ .u-row{
		align-items: center ; 
	}
	.message-box{
		width: 400rpx;
		padding: 30rpx;
		box-sizing: border-box;
		position: relative;
		.message-close{
			position: absolute;
			right: 30rpx;
			top: 30rpx;
		}
		.message-title{
			margin-bottom: 20rpx;
			text-align: center;
		}
		.message-box{
			width: 100%;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.message-content{
			width: 100%;
			.phone_title{
				margin: 20rpx 0rpx;
			}
			.message-submit{
				width: 70%;
				padding: 12rpx 0rpx;
				margin-top: 35rpx;
				background: #1F64FF;
				color: #FFF;
				border-radius: 12rpx;
				text-align: center;
				position: relative;
				left: 50%;
				transform: translate(-50%);
			}
		}
	}
	.chat_audio{
		width: 100%;
		height: 76rpx;
		max-height: calc(180rpx - 32rpx);
		background-color: #1F64FF;
		// border: 1upx solid #999;
		color: #fff;
		border-radius: 6upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.chat_audio:active {
		opacity: 0.5;
	}
	.chat_input {
		border-radius: 6upx;
		border: 1upx solid #E5E6EB;
		max-height: calc(180rpx - 32rpx);
		overflow-y: auto;
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
	.main{
		width: 100vw;
		height: 100vh;
		position: relative;
		>image{
			width: 100%;
			height: calc(100% - 120rpx);
		}
		.top-nav{
			// padding: 20rpx 30rpx;
			align-items: center;
			border-radius: 4px;
			// background: rgba(0, 0, 0, 0.60);
			display: inline-block;
			position:absolute;
			left: 20rpx;
			top: 20rpx;
			z-index: 10;
			display: flex;
			>view{
				padding: 20rpx;
				background: rgba(0, 0, 0, 0.60);
			}
			>view{
				display: flex;
				flex-direction: column;
				justify-content: center;
				image{
					width: 32rpx;
					height: 32rpx;
					position: relative;
					left: 50%;
					transform: translate(-50%);
				}
				text{
					color: #FFF;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px; /* 166.667% */
				}
			}
		}
		.right-nav {
			position: absolute;
			right: 18rpx;
			top: 50%;
			z-index: 10;
			transform: translate(0%, -50%);
		
			>view {
				margin-bottom: 16.5rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
		
				image {
					position: relative;
					left: 50%;
					transform: translate(-50%);
					width: 54rpx;
					height: 54rpx;
				}
		
				text {
					color: #FFF;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px;
					/* 166.667% */
					text-align: center;
				}
			}
		}
		
		.bottom{
			width: 100%;
			position: absolute;
			bottom: 0px;
			left: 50%;
			z-index: 10;
			transform: translate(-50%);
			.bottom-tags{
				width: calc(100% - 40rpx);
				position: relative;
				left: 50%;
				transform: translate(-50%);
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				>view{
					margin-right: 16rpx;
				}
				.bottom-tags-title{
					display:flex;
					align-items: center;
					border-radius: 4px;
					background: rgba(95, 95, 95, 0.40);
					padding: 6rpx 16rpx;
					box-sizing: border-box;
					image{
						margin-right: 15rpx;
						width: 32rpx;
						height: 32rpx;
					}
					text{
						color: #FFF;
						font-size: 12px;
						font-style: normal;
						font-weight: 400;
						line-height: 20px; /* 166.667% */
					}
				}
				.tag{
					border-radius: 4px;
					border: 1px solid #FFF;
					color: #FFF;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px; /* 166.667% */
					padding: 4rpx 14rpx;
					box-sizing: border-box;
				}
			}
				
			.bottom-tips{
				width: calc(100% - 40rpx);
				position: relative;
				left: 50%;
				transform: translate(-50%);
				border-radius: 4px;
				background: rgba(0, 0, 0, 0.60);
				color: #FFF;
				font-size: 12px;
				font-style: normal;
				font-weight: 400;
				line-height: 20px; /* 166.667% */
				padding: 24rpx 20rpx;
				box-sizing: border-box;
				margin: 18rpx 0rpx;
				margin-top: 16rpx;
			}
				
			.bottom-bottom{
				width: 100%;
				height: 120rpx;
				padding: 25rpx 0rpx;
				box-sizing: border-box;
				background: #fff;
				overflow-y: auto;
				.bottom-chat{
					width: calc(100% - 4rpx);
					display: flex;
					justify-content: space-between;
					border-radius: 8px;
					background: #FFF;
					padding: 16rpx;
					box-sizing: border-box;
					>view:first-child{
						width: 76%;
					}
					>view:last-child{
						width: 20%;
						line-height: 56rpx;
						text-align: center;
						border-radius: 4px;
						background: #1F64FF;
						color: #FFF;
						font-size: 14px;
						font-style: normal;
						font-weight: 500;
						line-height: 20px; /* 142.857% */
					}
				}
			}
		}
	}
	
    .bottomInput {
    	position: fixed;
    	width:calc(100% - 16px);
    	background: #FFFFFF;
    	padding: 8px;
    	box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.1);
    }
	
	.video_w {
		width: 100%;
		height: 100vh;
		position: absolute;
	}
</style>