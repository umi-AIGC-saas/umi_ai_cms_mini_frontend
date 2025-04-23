<template>
	<view style="padding: 32upx;">

		<view class="main">
			<view class="main_title" style="display: flex; justify-content: space-between;">
				<view class="top">
					<view class="left"></view>
					<view class="middle">填写内容</view>
					<image :src="helpImg" mode="" class="top_img" @click="cptShow=true"></image>
				</view>
				<view class="right" @click="toHis">历史记录</view>
			</view>

			<textarea v-model="content" cols="25" rows="4" :placeholder="placeholder" maxlength='-1' style="height: 200rpx; width: calc(100% - 44rpx); margin: auto; margin-bottom: 20rpx;"></textarea>

			<view class="progress" v-if="speech_voice != ''">
				<view class="pro">
					<gw-audiott :autoplay="false" :src="getImgUrl(speech_voice)"/>
				</view>
				<view class="img_r" @click.stop="saveShare(speech_voice)">
					<u-icon name="share-square" color="#2979ff" size="28"></u-icon>
					<view style="color: #2979ff;font-size: 24rpx;">分享</view>
				</view>
			</view>
			<view style="color: #B7B9C0;font-size: 24upx;margin-bottom: 48rpx">
				注意：请不要生成对个人及组织造成侵害的内容，此功能仅供个人学习、娱乐及研究使用
			</view>
			<view class="main_title">
				<view class="top">
					<view class="left"></view>
					<view class="middle">选择引擎</view>
				</view>
				<view style="color: #B7B9C0;font-size: 24upx;">
					(基础版速度更快，进阶版音质更好)
				</view>
			</view>

			<u-scroll-list :indicator='false'>
				<view class="item" v-for="(item, index) in engineList.slice(0,5)" :key="index" @click="engineChange(index, item.engine_code)"
					:style="[{background:(active==index?'rgba(31, 100, 255, 0.15)':''),color:(active==index?'#1F64FF':'')}]">
					<view>{{item.engine_name}}</view>
				</view>
			</u-scroll-list>

			<view class="main_title" style="margin-top: 48rpx;">
				<view class="top">
					<view class="left"></view>
					<view class="middle">当前播音员</view>
				</view>
			</view>
			<view class="user">
				<view class="info">
					<image style="width: 96rpx;height: 96rpx; border-radius: 50%;" :src="getImgUrl(userImg)"></image>
					<view style="margin-left: 24upx;">
						<view style="color: #000;font-size: 28rpx;font-weight: 500;">{{ voice_name }}</view>
						<!-- <view style="color: #ADB0B6;font-size: 28rpx;margin-top: 28rpx;">{{ voice_lang }}</view> -->
					</view>
					<view class="userBtn" style="margin: 0 52upx 0 108upx;" @click="play(voice_url)">
						<image :src="playImg" mode=""></image>
						<view class='userContent'>试听</view>
					</view>
					<view class="userBtn" @click="toChange">
						<image :src="changeImg" mode=""></image>
						<view class='userContent'>更换播音员</view>
					</view>
				</view>
				<view style="display: flex;" v-if="active > 1" class="line">
					<text style="color: #000;font-size: 28upx;white-space: nowrap;line-height: 250%;">语调</text>
					<u-slider v-model="intonation" :min="into_min" :max="into_max" showValue blockSize="13"></u-slider>
				</view>
				<view style="display: flex;" class="line">
					<text style="color: #000;font-size: 28upx;white-space: nowrap;line-height: 250%;">语速</text>
					<u-slider :value="speed" :min="speed_min" :max="speed_max" showValue blockSize="13"></u-slider>
				</view>
			</view>

		</view>

		<view class="bottom" style="margin-bottom: 20upx;">
			<view style="color: #1F64FF;font-size: 24rpx;font-weight: 500;line-height: 200%;">{{hashrate}}w算力/1K token
			</view>
			<button @click="todialogue" style="background-color: #1F64FF;color: #fff;width: 100%;height: 90upx;line-height: 90upx;" type="default">合成语音</button>
		</view>
		
		<u-popup :show="voiceShow" mode="bottom" :round="10" @close="closeVoice">
			<view class="pop_cont">
				<view class="pop_title">选择播音员</view>
				<view class="userList">
					<view class="user_item" v-for="item,index in userList" :key="index"
						:style="[{border:(userActive==index?'3rpx solid #1F64FF;':'')}]" @click="userClick(index)">
						<image :src="getImgUrl(item.voice_logo)"></image>
						<view class="user_name">{{item.voice_name}}</view>
						<view v-if="userActive==index" class="user_b" @click.stop="play(item.speech_url)">点击试听</view>
					</view>
				</view>
			</view>
			<view class="bottom" style="width: calc(100% - 80rpx); margin-bottom: 20upx;">
				<button @click="selectVoice" style="background-color: #1F64FF;color: #fff;width: 80%;height: 90upx;line-height: 90upx;" type="default">确认</button>
			</view>
		</u-popup>
		
		<u-popup :show="playShow" mode="center" :round="10" @close="playShow = false" :zIndex="10099" :closeOnClickOverlay="false">
			<view class="pop_voice">
				<image class="pop_img" :src="picImg"></image>
				
				<view class="pop_stop" @click="stop">停止播放</view>
			</view>
			
		</u-popup>
		
		<u-modal :show="cptShow" :title="cptTitle" :content='cptContent' :closeOnClickOverlay="true" width="500upx"
			confirmText='我知道了' confirmColor='#1F64FF' confirmButtonShape='square' @confirm='cptShow=false'
			@cancel="cptShow=false" @close="cptShow=false"></u-modal>
	</view>
</template>

<script>
	import {
		getSpeechEngine,
		getSpeechVoice,
		goTextSpeech,
		getSpeechResult,
		getSpeechDetail 
	} from '@/apis/user.js'
	import gwAudiott from '../components/gw-audiott/gw-audiott.vue'
	export default {
		data() {
			return {
				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				hisImg: global.baseImg + '/xcx/com/message_center/clock.png',
				
				playImg: global.baseImg + '/xcx/com/message_center/play.png',
				changeImg: global.baseImg + '/xcx/com/message_center/change.png',
				img_l: global.baseImg + '/xcx/com/message_center/speechplay.png',
				img_r: global.baseImg + '/xcx/com/message_center/download.png',
				content: '',
				placeholder: '请输入你想转化的文本',
				active: 4,
				engineList: [],
				value: 5,
				provalue: 20,
				totalTime: 30,
				hashrate: '31.5',
				userActive: 0,
				voiceShow: false,
                userList: [],
				
				innerAudioContext: null,
				userImg: global.baseImg + '/xcx/com/message_center/皮特.png',
				voice_name: '',
				voice_lang: '',
				voice_url: '',
				
				intonation: 0,
				into_min: 0,
				into_max: 0,
				speed: 1,
				speed_min: 0.25,
				speed_max: 4,
				
				speech_time: 0,
				speech_voice: '',
				h_code: '',
				engine_code: '',
				voice_code: '',
				playShow: false,
				picImg: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',
				helpImg: global.baseImg + '/xcx/com/message_center/help-circle.png',
				cptShow: false,
				cptTitle: '提示',
				cptContent: '根据你所要想的语音效果语言属性来输入所对应的语言，例如输入英文，转成英语效果语音',
			};
		},
		components: {
			gwAudiott
		},
		
		onLoad(option) {
			if(option.h_code) {
				this.h_code = option.h_code
				this.getSpeechDetail(this.h_code)
			}
			//语音播放初始化
			this.init()
		},
		async onShow() {
			if(this.h_code == '') {
				this.active = 4
				await this.getSpeechEngine()
				this.engineChange(0,1000010001)
			}
			
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
					this.playShow = false
				})
			},

			toHis() {
				uni.navigateTo({
					url: '/childPage/speech/speech_history'
				})
			},
			
			// 获取详情
			getSpeechDetail(code) {
				getSpeechDetail(code).then(res => {
					console.log('res',res);
					if (res.code == 20000) {
						this.content = res.data.content
						this.engine_code = res.data.engine_code
						this.voice_code = res.data.voice_code
						this.userImg = res.data.voice_logo
						this.voice_name = res.data.voice_name
						this.voice_lang = res.data.language
						this.voice_url = res.data.speech_url
						this.speed = res.data.speech_rate
						this.intonation = res.data.pitch_rate
						this.speech_voice = res.data.speech_url
						this.getSpeechEngine()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			// 获取引擎
			getSpeechEngine() {
				getSpeechEngine().then(res => {
					if (res.code == 20000) {
						this.engineList = res.data
						// console.log(this.engine_code, 333)
						if(this.engineList.length > 0) {
							this.engineList.forEach((item, index) => {
								if(item.engine_code == this.engine_code) {
									this.active = index
									if (this.active == 0) {
										this.hashrate = 31.5
										this.intonation = 0
										this.into_min = 0
										this.into_max = 0
										this.speed = 1
										this.speed_min = 0.25
										this.speed_max = 4
									} else if (this.active == 1) {
										this.hashrate = 63
										this.intonation = 0
										this.into_min = 0
										this.into_max = 0
										this.speed = 1
										this.speed_min = 0.25
										this.speed_max = 4
									} else if (this.active == 2) {
										this.hashrate = 30
										this.intonation = 5
										this.into_min = 0
										this.into_max = 15
										this.speed = 5
										this.speed_min = 0
										this.speed_max = 15
									} else if (this.active == 3) {
										this.hashrate = 45
										this.intonation = 50
										this.into_min = 0
										this.into_max = 100
										this.speed = 0
										this.speed_min = 100
										this.speed_max = 100
									} else if (this.active == 4) {
										this.hashrate = 33
										this.intonation = 0
										this.into_min =-500
										this.into_max = 500
										this.speed = 0
										this.speed_min = -500
										this.speed_max = 500
									}
								}
							})
						}
						// if(this.h_code == '') {
						// 	this.getSpeechVoice(res.data[0].engine_code)
						// } else {
						// 	this.getSpeechVoice(this.engine_code)
						// }
						
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			// 获取音色
			getSpeechVoice(code) {
				let val = {
					'engine_code': code
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						this.userList = res.data
						this.userImg = res.data[0].voice_logo
						this.voice_name = res.data[0].voice_name
						this.voice_lang = res.data[0].language
						this.voice_url = res.data[0].speech_url
						if(this.userList.length > 0 && this.h_code != '') {
							this.userList.forEach((item, index) => {
								if(item.voice_code == this.voice_code) {
									this.userActive = index
								}
							})
						}
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			play(url) {
				// this.stop()
				this.playShow = true
				let path = global.baseImg + '/' + url
				this.innerAudioContext.src = path;
				this.innerAudioContext.play();
			},
			
			//原生停止
			stop() {
				this.innerAudioContext.stop();
				this.playShow = false
				// this.isPlay = false
				// console.log('停止播放')
			},
			
			getImgUrl(url){
			   return global.baseImg+'/'+url;
			},
			
			toChange() {
				this.voiceShow = true
				// uni.navigateTo({
				// 	url: '/childPage/speech/speech_change'
				// })
			},
			engineChange(index, code) {
				console.log(index, code);
				if(index==3){
					this.$api.msg('开发中')
					return
				}
				this.active=index
				if (index == 0) {
					this.hashrate = 31.5
					this.intonation = 0
					this.into_min = 0
					this.into_max = 0
					this.speed = 1
					this.speed_min = 0.25
					this.speed_max = 4
				} else if (index == 1) {
					this.hashrate = 63
					this.intonation = 0
					this.into_min = 0
					this.into_max = 0
					this.speed = 1
					this.speed_min = 0.25
					this.speed_max = 4
				} else if (index == 2) {
					this.hashrate = 30
					this.intonation = 5
					this.into_min = 0
					this.into_max = 15
					this.speed = 5
					this.speed_min = 0
					this.speed_max = 15
				} else if (index == 3) {
					this.hashrate = 45
					this.intonation = 50
					this.into_min = 0
					this.into_max = 100
					this.speed = 0
					this.speed_min = 100
					this.speed_max = 100
				} else if (index == 4) {
					this.hashrate = 33
					this.intonation = 0
					this.into_min =-500
					this.into_max = 500
					this.speed = 0
					this.speed_min = -500
					this.speed_max = 500
				}
				this.getSpeechVoice(code)
			},
			
			userClick(index) {
				this.userActive = index
			},
			
			closeVoice() {
				this.voiceShow = false
				this.stop()
			},
			selectVoice() {
				this.userImg = this.userList[this.userActive].voice_logo
				this.voice_name = this.userList[this.userActive].voice_name
				this.voice_lang = this.userList[this.userActive].language
				this.voice_url = this.userList[this.userActive].speech_url
				this.voiceShow = false
			},
			
			todialogue() {
				if(this.content == '') {
					return this.$api.msg('请填写需要转换的文本')
				}
				if(this.content.trim().length > 4096 && this.active < 2) {
					return this.$api.msg('普通版和高级版最多可输入4096个字符')
				}
				let that = this;
				console.log(this.engineList[this.active], 5589)
				let val = {
					'engine_code': this.engineList[this.active].engine_code,
					'voice_code':  this.userList[this.userActive].voice_code,
					'content': this.content,
					'speech_rate': this.speed,
					'pitch_rate': this.intonation
				}
				uni.showLoading({
					title: '合成中'
				});
				goTextSpeech(val).then(res => {
					if (res.code == 20000) {
						let datas = {
							"h_code": res.data.h_code,
						};
						let request_count = 0;
						that.speech_time = setInterval(() => {
							if (request_count < 51) { // 最多轮询50次
							    getSpeechResult(datas).then(val => {
							    	if (val.code == 20000) {
										request_count += 1;
							    		if(val.data.h_status == 2) {
											that.speech_voice = val.data.speech_url;
											uni.hideLoading()
							    			that.$api.msg('合成成功')
							    			
											// console.log(that.speech_voice, 996)
							    			that.$forceUpdate()
							    			
							    			clearInterval(that.speech_time);
							    		} else if(val.data.h_status == 3) {
							    			that.$api.msg('合成失败')
							    			uni.hideLoading()
							    			clearInterval(that.speech_time);
							    		}
							    	  			
							    	} else {
							    		that.$api.msg(res.msg)
							    		uni.hideLoading()
							    		clearInterval(that.speech_time);
							    	}
							    })
							} else {
								uni.hideLoading()
								clearInterval(that.speech_time);
								that.$api.msg('等待时间过长，请稍后前往历史记录查看')
							}
							
						
						}, 2000)
					} else {
						that.$api.msg(res.msg)
						clearInterval(that.speech_time);
					}
				}).catch(err => {
					that.$api.msg('获取失败！')
				})
			},
			
			saveShare(url) {
				// uni.showLoading({
				// 	title: '下载中'
				// });
				console.log(url, '我是下载URL');
				let that = this;
				uni.downloadFile({
					url: global.baseImg + '/'+url, //下载地址接口，注意：这里的图片的下载链接可直接在浏览器打开下载的
					success: (data) => {
						if (data.statusCode === 200) {
							wx.shareFileMessage({
								filePath: data.tempFilePath,
								showMenu:true, //关键点
								success: (res) => {
									//提示保存成功
									console.log('成功了')
									
									// uni.hideLoading();
									setTimeout(function() {
										uni.showToast({
											title: '分享成功',
											duration: 2000
										})
									}, 500);
								},
								fail: (res) => {
									//失败关闭提示信息！！！
									// uni.hideLoading();
									setTimeout(function() {
										uni.showToast({
											icon: 'none',
											title: '分享失败',
											duration: 2000
										})
									}, 500);
			
									console.log("分享失败", res);
								},
								complete: function(res) {
									//隐藏提示
									// uni.hideLoading();
									// uni.showToast({
									// 	icon: 'none',
									// 	title: '下载失败',
									// 	duration: 2000
									// })
								}
							})
						}
					},
					fail: (err) => {
						console.log(err, 'err')
						uni.showToast({
							icon: 'none',
							mask: true,
							title: '失败请重新下载',
						});
					},
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	.robot {
		display: flex;

		.title {
			color: #242F49;
			font-size: 40upx;
			font-weight: 500;
			line-height: 150%;
		}


	}

	textarea {
		padding: 24rpx 10rpx;
		border: 2rpx solid #D7D9DF;
		border-radius: 8px;
		margin-bottom: 20rpx;
	}


	.main {
		padding: 32upx;
		background-color: #fff;
		height: 105vh;
		margin-bottom: 117rpx;

		.main_title {
			margin-bottom: 34upx;


			.top {
				display: flex;
				align-items: center;

				.left {
					width: 3px;
					height: 18px;
					background: #1F64FF;
				}

				.middle {
					color: #393E45;
					font-size: 32upx;
					font-weight: 600;
					margin: 0 20upx 0 16upx;
				}

				image {
					width: 32upx;
					height: 32upx;
				}
			}

			.right {
				color: #1F64FF;
				font-size: 26upx;
			}
		}

	}

	.item {
		color: #333;
		text-align: center;
		font-size: 28rpx;
		font-weight: 500;
		border-radius: 8rpx;
		background: #F6F6F6;
		margin-right: 20rpx;
		padding: 11rpx 17rpx;
		white-space: nowrap;
		width: 22%;
	}

	.user {
		.info {
			display: flex;
			align-items: center;
			padding: 36upx 40upx;

			.userBtn {
				text-align: center;

				image {
					width: 48upx;
					height: 48upx;
				}

				.userContent {
					color: #000;
					font-size: 28upx;
				}
			}
		}


	}

	.bottom {
		position: fixed;
		width: 81%;
		bottom: 0;
		background-color: #FFF;
		padding: 10upx 40upx;
		text-align: center;
	}

	.progress {
		display: flex;
		align-items: flex-end;

		.pro {
			flex: 1;
		}

		.img_r {
			padding-bottom: 30upx;
		}
	}
	
	.pop_cont {
		padding: 25upx;
		height: 55vh;
		overflow: scroll;
		padding-bottom: 90upx;
		.pop_title {
			font-size: 32upx;
			color: #333;
			line-height: 60upx;
			text-align: center;
		}
		.userList {
			display: flex;
			// padding: 0 32rpx;
			flex-wrap: wrap;
			gap: 5rpx;
		
			.user_item {
				width: 164rpx;
				height: 204rpx;
				border-radius: 8rpx;
				border: 2rpx solid #ECEFF2;
				background: #FFF;
				text-align: center;
				margin-bottom: 20rpx;
		
				image {
					width: 96rpx;
					height: 96rpx;
					margin-top: 20rpx;
				}
		
				.user_name {
					color: #333;
					font-size: 24rpx;
					font-weight: 500;
				}
		
				.user_b {
					color: #1F64FF;
					font-size: 22rpx;
				}
			}
		}
	}
	
	.pop_voice {
		padding: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.pop_img {
			width: 300upx;
			height: 300upx;
		}
		.pop_stop {
			color: #fff;
			font-size: 30upx;
			font-weight: 400;
			line-height: 150%;
			width: 70%;
			background: #1F64FF;
			padding: 15upx 0upx;
			border-radius: 8upx;
			margin-top: 30upx;
			text-align: center;
		}
	}
	
</style>
<style lang="less">
	.line {
		.u-slider {
			width: 80% !important;
		}
	}
</style>