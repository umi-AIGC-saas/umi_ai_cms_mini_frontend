<template>
	<view>
		<view style="padding: 32upx 32upx 180upx 32upx;">
			<view class="main" v-for="(item,index) in messageList" :key="index">
				<view class="item up" v-if="item.type=='assistant'">
					<view class="top">
						<image class="pic" :src="log" mode="widthFix"></image>
						<view class="title">无忧秘书智脑</view>
					</view>
					<!-- <view class="bottom">{{ item.talk }}</view> -->
					<ua-markdown :source="item.talk" :showLine="false" />
					<view class="bot_btn" v-if="item.audio_url != ''">
						<view class="btn_left" style="margin-right: 30upx;" @click="play(item.audio_url)">播放</view>
					    <view class="btn_left" @click="savePhoto(item.audio_url)">分享</view>
					</view>
				</view>
				<view class="item " v-else>
					<view class="top">
						<image class="pic" :src="userImg" mode="widthFix"></image>
						<view class="title">{{ userName }}</view>
					</view>
					<view class="bottom">{{ item.talk }}</view>
				</view>
			</view>
		</view>
		
		<view class="pic_btn">
			<view class="btn" @click="toStart()">我要对话</view>
		</view>
		
		<u-popup :show="playShow" mode="center" :round="10" @close="playShow = false" :zIndex="10099" :closeOnClickOverlay="false">
			<view class="pop_voice">
				<image class="pop_img" :src="picImg"></image>
				
				<view class="pop_stop" @click="stop">停止播放</view>
			</view>
			
		</u-popup>
	</view>
</template>

<script>
	import {
		chat_session
	} from "@/apis/chat.js"
	import uaMarkdown from '../../components/ua2-markdown/ua-markdown.vue'
	export default {
		data() {
			return {
				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				userImg: global.baseImg + '/xcx/com/message_center/Ellipse%202309.png',
				session_code: '',
				userName: '',
				messageList: [],
				innerAudioContext: null,
				playShow: false
			};
		},
		onLoad(option) {
			if(option.session_code) {
				this.session_code = option.session_code
			}
			
			let avatarUrl = global.baseImg+ '/'+ uni.getStorageSync("avatarUrl");
			this.userImg = avatarUrl;
			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			this.userName = userInfo.nick_name;
			
			//语音播放初始化
			this.init()
		},
		onShow() {
			this.historySession()
		},
		components: {
			uaMarkdown
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
			
			historySession() {

				let code = this.session_code
				this.messageList = []
				chat_session(code).then(res => {
				   res.data.map((item, tip) => {
						this.messageList.push({
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
							audio_url: item.audio_url
						})
						
						this.$forceUpdate()
					})
				})
				// console.log(this.messageList, 5589)
			},
			
			play(url) {
				this.playShow = true;
				this.innerAudioContext.src = url;
				this.innerAudioContext.play();
			},
			
			//原生停止
			stop() {
				this.innerAudioContext.stop();
				this.playShow = false
				// this.isPlay = false
				// console.log('停止播放')
			},
			
			savePhoto(url) {
				// uni.showLoading({
				// 	title: '下载中'
				// });
				console.log(url, '我是下载URL');
				let that = this;
				uni.downloadFile({
					url: url, //下载地址接口，注意：这里的图片的下载链接可直接在浏览器打开下载的
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
			toStart() {
				uni.navigateTo({
					url: '/childPage/voice/voice_page'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.main {
		border-radius: 8upx;
		background: #FFF;
		padding: 0 32upx;

		.item {
			padding: 15upx 20upx;
			width: calc(100% - 40upx);
			.top {
				display: flex;

				.pic {
					width: 64upx;
					hieght: 64upx;
					border-radius: 50%;
					margin-right: 24upx;
				}

				.title {
					color: #000;
					font-size: 28upx;
					font-weight: 500;
					line-height: 235%;
					/* 21px */
				}
			}

			.bottom {
				color: #505050;
				font-size: 24upx;
				line-height: 150%;
				/* 18px */
				margin-top: 24upx;
			}
		}

		.up {
			border-top: none;
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
		.pic_top {
			width: 100%;
			text-align: center;
			font-size: 28upx;
			line-height: 40upx;
			margin-bottom: 20upx;
		}
		.btn{
			border-radius: 12rpx;
			background: #1F64FF;
			width: 70%;
			padding: 20rpx 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			font-size: 34upx;
			line-height: 34upx;
		}
	}
	
	.bot_btn {
		width: 100%;
		padding: 20upx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.btn_left {
			font-size: 30upx;
			color: #1F64FF;
			font-weight: 530;
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