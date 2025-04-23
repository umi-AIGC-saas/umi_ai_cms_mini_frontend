<template>
	<!-- 创建数字分身 -->
	<view class="main">
		<view class="my" @click="toPage()">
			我的分身
		</view>
		<!-- 图片上传区域 -->
		<view class="main-upload">
			<view class="main-upload-box" :style="{border:image != ''?'0px':''}" @click="uploadImg()">
				<block v-if="image == ''">
					<u-icon name="plus" color="#666" size="32"></u-icon>
					<text>请上传照片</text>
				</block>
				<image v-else style="height: 450rpx;" mode="heightFix" :src="getImgUrl(image)"></image>
			</view>
			<view class="main-upload-btn" @click="uploadImg()">{{!image?'上传照片':'更换图片'}}</view>
			<view class="main-upload-tips">上传的照片需要包含人脸</view>
		</view>
		<!-- 注意事项 -->
		<view class="tips">
			<view class="tips-top">
				<view class="line"></view>
				<text>注意事项</text>
				<view class="line"></view>
			</view>
			<view class="tips-content">
				<view class="tips-content-box" v-for="(item,index) in tipsData" :key="index">
					<image :src="item.img"></image>
					<text>{{item.text}}</text>
				</view>
			</view>
			
		</view>
		<view class="tips">
			<view class="tips-top">
				<view class="line" style="width: 32%"></view>
				<text>克隆自己的声音</text>
				<view class="line" style="width: 32%"></view>
			</view>
			
			<view class="tips_copy" @click="toClone">
				<view class="copy_l">
					<!-- <u-icon name="plus-circle" color="#999" size="28"></u-icon> -->
					<text class="copy_text">购买声音克隆服务，定制专属你的声音</text>
				</view>
				<view class="copy_r">￥299</view>
			</view>
		</view>
		<!-- 选择声音 -->
		<view class="audio">
			<view class="audio-title">
				<view>
					<view class="line-title"></view>
					<text>选择声音</text>
				</view>
				<view v-if="boyUrl != ''" @click="play(boyUrl)">试听</view>
			</view>
			<!-- 选择声音 -->
			<view class="audio-check">
				<view class="audio-check-box">
					<view @click="openSelect">
						<text>{{ boyValue }}</text>
						<u-icon name="arrow-down" color="#666" size="18"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<!-- 确定按钮 -->
		<view class="submit" @click="submit()">确定</view>
		<!-- 声音选择器 -->
		<u-picker :show="boyShow" ref="uPicker" :columns="boyList" v-model="boyIndex" :defaultIndex="[0,0]" keyName="voice_name" @cancel="boyShow = false" @confirm="boySubmit" @change="changeHandler"></u-picker>
		
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
		getSpeechVoice,
		realNameAuthentication,
		getRealNameAuthentication
	} from '@/apis/user.js'
	import {
		creatModel
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				// 注意事项数据
				tipsData: [{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320021.png',
						text: '光线充足',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320022.png',
						text: '周围安静',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320025.png',
						text: '面部无遮挡',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320023.png',
						text: '声音清晰',
					},
				],
				//男生选择器
				boyValue: '选择男声',
				boyIndex: '',
				boyEngine: '',
				boyCode: '',
				boyUrl: '',
				boyShow: false,
				boyList: [
					[{'voice_name': '男声'}, {'voice_name': '女声'}]
				],
				boyListData: [],
				
				image:"",	//上传的图片
				
				innerAudioContext: null,
				playShow: false,
				picImg: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',
				
				info: '',
				step: 0
			}
		},
		onLoad(option) {
			console.log(option, 8856)
			if(option) {
				this.info = JSON.parse(option.info)
				this.step = option.code
			}
		   //语音播放初始化
		   this.init()
		},
		onShow() {
		    this.getmyVoice()
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
			
			play(url) {
				this.playShow = true;
				this.innerAudioContext.src = global.baseImg + '/'+url;
				this.innerAudioContext.play();
			},
			
			//原生停止
			stop() {
				this.innerAudioContext.stop();
				this.playShow = false
				// this.isPlay = false
				// console.log('停止播放')
			},
			// 获取我的音色
			getmyVoice(code) {
				let val = {
					'engine_code': '1000010006',
					'voice_type': 2,
				}
				this.boyList = [
					[{'voice_name': '男声'}, {'voice_name': '女声'}]
				]
				this.boyListData = []
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						if(res.data) {
							this.boyList[0].unshift({'voice_name': '我的声音'})
							this.boyListData.push(res.data)

							this.boyList.push(res.data)
							this.boyIndex = res.data[0].voice_code;
							this.boyEngine = res.data[0].engine_code;
							this.boyUrl = res.data[0].speech_url;
							this.boyValue = res.data[0].voice_name;
							this.boyCode = res.data[0].voice;

						}
						this.getmanVoice()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			// 获取男生音色
			getmanVoice(code) {
				let val = {
					'engine_code': '1000010005',
					'voice_type': 1,
					'gender': 1
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						if(this.boyListData.length == 0) {
							this.boyList.push(res.data)
							this.boyIndex = res.data[0].voice_code;
							this.boyEngine = res.data[0].engine_code;
							this.boyUrl = res.data[0].speech_url;
							this.boyValue = res.data[0].voice_name;
							this.boyCode = res.data[0].voice;
						}
						this.boyListData.push(res.data)
						this.getwomanVoice()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			// 获取女生音色
			getwomanVoice(code) {
				let val = {
					'engine_code': '1000010005',
					'voice_type': 1,
					'gender': 2
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						this.boyListData.push(res.data)
						// console.log(this.boyList,8847)
						// console.log(this.boyListData,8848)
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			
			// 跳转我的页面
			toPage(){
				uni.navigateTo({
					url: '/childCont/digital/my'
				})
			},
			
			openSelect() {
				this.boyShow = true
			},
			submit(){
				if(this.image == '') {
					return this.$api.msg('请上传图片')
				}
				
				if(this.boyUrl == '') {
					return this.$api.msg('请选择声音')
				}
				uni.showLoading({
					title: '创建中，请稍后'
				});
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'token': userInfo.token,
					'face_image': this.image,
					'audio_id': this.boyIndex,
					'audio_name': this.boyValue,
					'audio_url': this.boyUrl,
					'audio_code': this.boyCode,
					'engine_code': this.boyEngine,
					'base_model_id': this.info.base_model_id,
					'base_model_url': this.info.base_model_url,
					'base_model_url_speak': this.info.base_model_url_speak,
					'similarity': this.step/100,
					// 'model_greetings': '您好，我是你的数字分身，你可以向我提问'
				}
				creatModel(val).then(res => {
					if (res.code == 20000) {
						//成功跳转中转页面
						uni.navigateTo({
							url: '/childCont/digital/status_digital?edit=1'
						})
						uni.hideLoading()
					} else {
						uni.hideLoading()
						this.$api.msg(res.msg)
						
					}
				}).catch(err => {
					uni.hideLoading()
					this.$api.msg('获取失败！')
				})
				
			},
			// 上传图片
			uploadImg() {
				let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
				if (memberInfo.is_real_name == 1) {
					this.toH5Link()
					return
				}
				let that = this;
				uni.chooseMedia({
					count: 1,
					mediaType: ['image'],
					sourceType: ['album', 'camera'],
					maxDuration: 30,
					camera: 'back',
					success(res) {
						uni.showLoading({
							title: '上传中'
						});
						console.log(res.tempFiles)
						const tempFilePaths = res.tempFiles[0].tempFilePath;
						const fileExtension = tempFilePaths.substring(tempFilePaths.lastIndexOf('.') + 1)
						uni.uploadFile({
							url: global.loginUrl + '/api/user/oss_upload',
							filePath: tempFilePaths,
							name: 'image',
							formData: {
								"image": tempFilePaths,
								"oss_dir": 'static',
								"cate": 'problem_picture'
							},
							success: (uploadFileRes) => {
								let imgData = JSON.parse(uploadFileRes.data)
								if (imgData.code == 20000) {
									let url = imgData.data.new_url
									that.image = url
									console.log(that.image,'图片')
								}
								uni.hideLoading()
							},
						});
					}
				})
			},
			
			toH5Link() {
			
				uni.showModal({
					title: '提示',
					content: '使用该功能需实名认证，点击确定进行实名',
					success(res) {
						if (res.confirm) {
							// uni.navigateTo({
							// 	url: '/childPage/news/h5Link',
							// })
							let val = {
								"path": "/pages/chat/chat_history", //#  跳转路径，为空跳首页
								"query": "", //# 想要携带的query参数
								"env_version": "" //# 跳转的版本默认release线上
							}
			
							getRealNameAuthentication(val).then(res => {
								if (res.code == 20000) {
									let href = encodeURIComponent(res.data.openlink)
									uni.setStorageSync('href', href)
									let data = {
										// "success_url": href,
										// "failed_url": href,
										// "is_xcx": 1
									}
									const that=this
									realNameAuthentication(data).then(res => {
										if (res.code == 20000) {
											// console.log(45610);
											uni.setStorageSync('namelink', res.data.verify_token)
											uni.navigateTo({
												url: '/childPage/news/h5Link',
											})
										} else {
											that.$api.msg(res.msg)
										}
									}).catch(err => {
										this.$api.msg('跳转失败')
									})
			
								} else {
									this.$api.msg(res.msg)
								}
							}).catch(err => {
								this.$api.msg('跳转失败')
							})
						}
					}
				})
			
			},
			
			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},
			
			//男生选择
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.boyListData[index])
				}
			},
			
			boySubmit(e) {
				console.log(e,8854)
				this.boyIndex = e.value[1].voice_code;
				this.boyEngine = e.value[1].engine_code;
				this.boyUrl = e.value[1].speech_url;
				this.boyValue = e.value[1].voice_name;
				this.boyCode = e.value[1].voice;
				this.boyShow = false;
				console.log(this.boyUrl, 3325)
			},
			
			toClone() {
				let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
				if (memberInfo.is_real_name == 1) {
					this.toH5Link()
					return
				}
				uni.navigateTo({
					url: '/childCont/clone/voice_clone'
				})
			},
			
			toH5Link() {
			
				uni.showModal({
					title: '提示',
					content: '使用该功能需实名认证，点击确定进行实名',
					success(res) {
						if (res.confirm) {
							// uni.navigateTo({
							// 	url: '/childPage/news/h5Link',
							// })
							let val = {
								"path": "/pages/chat/chat_history", //#  跳转路径，为空跳首页
								"query": "", //# 想要携带的query参数
								"env_version": "" //# 跳转的版本默认release线上
							}
			
							getRealNameAuthentication(val).then(res => {
								if (res.code == 20000) {
									let href = encodeURIComponent(res.data.openlink)
									uni.setStorageSync('href', href)
									let data = {
										// "success_url": href,
										// "failed_url": href,
										// "is_xcx": 1
									}
									realNameAuthentication(data).then(res => {
										if (res.code == 20000) {
											// console.log(45610);
											uni.setStorageSync('namelink', res.data.verify_token)
											uni.navigateTo({
												url: '/childPage/news/h5Link',
											})
										}
									}).catch(err => {
										this.$api.msg('跳转失败')
									})
			
								}
							}).catch(err => {
								this.$api.msg('跳转失败')
							})
						}
					}
				})
			
			
			},
			
			
		}
	}
</script>

<style scoped lang="less">
	.main {
		width: 100%;
		padding: 20upx 64rpx 60upx 64upx;
		padding-top: 40rpx;
		box-sizing: border-box;
		position: relative;
		.my{
			width: 70rpx;
			height: 70rpx;
			text-align: center;
			border-radius: 50%;
			background: rgb(239, 239, 239);
			color: rgb(154, 154, 154);
			font-size: 26rpx;
			padding: 10rpx;
			position: absolute;
			top: 10rpx;
			left: 20rpx;
		}
		.line-title {
			width: 3px;
			height: 18px;
			background: #1F64FF;
			margin-right: 18rpx;
		}

		.main-upload {
			width: 450rpx;
			border-radius: 8px;
			background: #F6F8FB;
			position: relative;
			left: 50%;
			transform: translate(-50%);

			.main-upload-box {
				width: 450rpx;
				height: 450rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border: 1px dashed #D1D3D6;

				image {
					width: 48rpx;
					height: 48rpx;
				}

				text {
					color: #666;
					font-size: 14px;
					font-style: normal;
					font-weight: 400;
					line-height: 150%;
					margin-top: 18rpx;
					/* 21px */
				}
			}

			.main-upload-btn {
				width: 100%;
				padding: 10rpx;
				box-sizing: border-box;
				text-align: center;
				border-radius: 8rpx;
				border: 1px solid rgb(31, 100, 255);
				margin-top: 30rpx;
				margin-bottom: 16rpx;
				color: rgb(31, 100, 255);
			}

			.main-upload-tips {
				width: 100%;
				color: #999;
				font-size: 26rpx;
			}
		}

		.tips {
			margin-top: 40rpx;
			width: 100%;

			.tips-top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.line {
					width: 37%;
					height: 1px;
					background: linear-gradient(270deg, #D9D9D9 108.88%, rgba(217, 217, 217, 0.00) 0%);
				}

				text {
					color: #2D2D2D;
					font-size: 13px;
					font-style: normal;
					font-weight: 500;
					line-height: 150%;
					/* 19.5px */
				}
			}
			
			.tips_copy {
				width: calc(100% - 20upx);
				border-radius: 8upx;
				border: 1upx solid #999;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20upx 10upx;
				margin-top: 20upx;
				.copy_l{
					display: flex;
					align-items: center;
					.copy_text {
						font-size: 26upx;
						color: #333;
						// padding-left: 10upx;
					}
				}
				.copy_r {
					font-size: 28upx;
					color: #f56c6c;
				}
			}

			.tips-content {
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 30rpx;

				.tips-content-box {
					display: flex;
					flex-direction: column;
					margin-top: 24rpx;

					image {
						width: 62rpx;
						height: 62rpx;
						margin-bottom: 24rpx;
						position: relative;
						left: 50%;
						transform: translate(-50%);
					}

					text {
						color: #000;
						font-size: 12px;
						font-style: normal;
						font-weight: 400;
						line-height: 150%;
						/* 18px */
					}
				}
			}
		}

		.audio {
			width: 100%;
			margin-top: 60rpx;

			.audio-title {
				display: flex;
				justify-content: space-between;
				align-items: center;

				>view:first-child {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				>view:last-child {
					color: #1F64FF;
				}
			}

			.audio-check {
				width: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.audio-check-box {
					width: 100%;

					>view {
						// width: 170rpx;
						padding: 10rpx 20rpx;
						border-radius: 16rpx;
						border: 1px solid #999;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 35rpx;
					}
				}

				>view:nth-child(even) {
					display: flex;
					justify-content: flex-end;
				}

			}
		}

		.tag {
			width: 100%;
			padding: 20upx 0;
			margin-top: 30rpx;

			.text_cont {
				display: flex;
				align-items: center;
				margin-bottom: 10upx;
				width: 100%;

				.text_l {
					color: #FF0101;
					font-size: 22upx;
					font-style: normal;
					font-weight: 400;
					line-height: 26upx;
					margin-right: 5upx;
				}
			}

			.text_r {
				color: #333;
				text-align: center;
				font-size: 24upx;
				font-style: normal;
				font-weight: 530;
				line-height: 26upx;
			}
		}

		.surround {
			border-radius: 16rx;
			border: 2rpx solid #D7D9DF;
			padding: 24rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: baseline;
		}

		.u-page__tag-item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 0 10upx 0 0;
		}

		.submit {
			margin: 60rpx 0rpx;
			width: 90%;
			padding: 25rpx 0rpx;
			box-sizing: border-box;
			position: relative;
			left: 50%;
			transform: translate(-50%);
			background: #1F64FF;
			color: #FFF;
			text-align: center;
			border-radius: 12rpx;
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