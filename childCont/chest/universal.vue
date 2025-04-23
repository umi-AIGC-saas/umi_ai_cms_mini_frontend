<template>
	<view style="background-color: #FEFEFE;height: 100vh;padding-bottom: 190rpx;">
		<view class="bigBox" v-if="src != '' ">
			<video class="bigImg" object-fit='contain' :src="src"></video>
			<!-- <image class="upImg" @click="previewImage" :src="icon_img" mode="aspectFit"></image> -->
			<image class="downImg" @click="savePhoto(src)" :src="icon_img1" mode=""></image>
		</view>
		<view class="noImg" v-else>
			<image class='defaultImg' :src="backImg" mode="aspectFit"></image>
			<view class="img_text">暂无融合图</view>
		</view>

		<view class="material">
			<view class="tips">
				<text class="tip_m">Tips:输入图像视频素材生成新视频</text>
			</view>
			<!-- <view class="tip_select">请选择包含人脸的融合图和模板图</view> -->

			<view class="select">
				<!-- <view class="top">
					<text class="text1">融合图选择</text>
				</view> -->
				<view class="bottom">
					<view class="item" v-for="(item,index) in picList" :key='index'
						@click="mergeChange_backdrop(index)">
						<img :src="getImgUrl(item.src)"
							:style="[{border:(active_backdrop == index ? '1rpx solid #1F64FF':'')}]" alt="" />
						<view class="activeColor" :style="[{color:( active_backdrop == index ? '#1F64FF':'#333')}]">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>

			<view class="select">
				<!-- <view class="top">
					<text class="text1">模板图选择</text>
				</view> -->
				<view class="bottom">
					<view class="item" v-for="(item,index) in list" :key='index' @click="mergeChange(index)">
						<img :src="getImgUrl(item.src)" :style="[{border:(active == index ? '1rpx solid #1F64FF':'')}]"
							alt="" />
						<view class="activeColor" :style="[{color:( active == index ? '#1F64FF':'#333')}]">{{item.name}}
						</view>
					</view>
				</view>
			</view>
			<view class="select" style="padding-bottom: 118px;">
				<!-- <view class="top">
					<text class="text1">模板图选择</text>
				</view> -->
				<view class="bottom">
					<view class="item" v-for="(item,index) in voiceList" :key='index' @click="voiceChange(index)">
						<img :src="getImgUrl(item.src)"
							:style="[{border:(active_voice == index ? '1rpx solid #1F64FF':'')}]" alt="" />
						<view class="activeColor" :style="[{color:( active_voice == index ? '#1F64FF':'#333')}]">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>

			<view class="footer">
				<view class="text">本次生成将消耗120w算力/分钟<u-icon name="question-circle-fill" @click="quesChange"></u-icon>
				</view>
				<view class="record" @click="historyText">历史记录</view>
				<button @click="toSlove" style="background-color: #1F64FF;color: #fff;" class="btn" size="default"
					type="default">一键生成</button>
			</view>


		</view>
	</view>
</template>

<script>
	import {
		asyncImg,
		getTextImg,
		getImgDetail
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				show: true,
				src: global.baseImg + '/' + 'xcx/com/message_center/bbxtysp.mp4',
				tipImg: global.baseImg + '/xcx/com/message_center/alert-circle.png',
				backImg: global.baseImg + '/xcx/com/message_center/%E7%BC%BA%E7%9C%81%E9%A1%B5.png',
				icon_img: global.baseImg + '/xcx/com/message_center/Frame%20427320251.png',
				icon_img1: global.baseImg + '/xcx/com/message_center/Frame%20427319637.png',

				picList: [{
						src: 'cxc/com/message_center/Frame%20427320254.png',
						name: '素材视频'
					},
					{
						src: '/xcx/com/message_center/生成1.png',
						url: 'xcx/com/message_center/bbxtysp.mp4',
						name: '示例1'
					},
					{
						src: '/xcx/com/message_center/生成2.png',
						url: 'xcx/com/message_center/bbxtysp2.mp4',
						name: '示例2'
					},
					{
						src: '/xcx/com/message_center/生成3.png',
						url: 'xcx/com/message_center/bbxtysp3.mp4',
						name: '示例3'
					},
				],
				list: [{
						src: 'cxc/com/message_center/Frame%20427320254.png',
						name: '背景图'
					},
					{
						src: 'xcx/com/message_center/bbxspscPic.png',
						name: '图例1'
					},
					{
						src: 'xcx/com/message_center/bbxspscPic2.png',
						name: '图例2'
					},
					{
						src: 'xcx/com/message_center/bbxspscPic3.png',
						name: '图例3'
					},
				],
				voiceList: [{
						src: 'cxc/com/message_center/Frame%20427320254.png',
						name: '音频',
						url: ''
					},
					{
						src: 'xcx/com/message_center/Rectangle%20346253495252.png',
						name: '示例1',
						url: 'xcx/com/message_center/y2332.mp3'
					},
					{
						src: 'xcx/com/message_center/Rectangle%203462535255.png',
						name: '示例2',
						url: 'xcx/com/message_center/y2332.mp3'
					},
					{
						src: 'xcx/com/message_center/Rectangle%2034625353.png',
						name: '示例3',
						url: 'xcx/com/message_center/y2332.mp3'
					},
				],
				active: 1,
				video_url: '',
				video_name: '',
				img_url: '',
				img_name: '',
				audio_url: '',
				audio_name: '',

				active_backdrop: 1,
				active_voice: 1
			}
		},
		onLoad() {
			this.video_url = this.src.substring(54)
			this.video_name = this.src.substring(77)
			this.img_url = this.list[1].src
			this.img_name = this.list[1].src.substring(23)
			this.audio_url = this.voiceList[1].url
			this.audio_name = this.voiceList[1].url.substring(23)
		},
		onShow() {
			if (uni.getStorageSync('vison_code') != '') {
				this.historySession(uni.getStorageSync('vison_code'))
			}

		},
		methods: {
			historySession(code) {
				getImgDetail(code).then(res => {
					console.log(res, 666666666666666666666);
					if (res.code == 20000) {
						let arr = res.data;
						arr.forEach((item, index) => {
							if (index == arr.length - 2) {
								this.active = 0
								this.active_backdrop = 0
								this.active_voice = 0
								this.list[0].src = item.origin_image
								this.origin_image = item.origin_image
								this.picList[0].src = item.refer_image
								this.refer_image = item.refer_image
							}
							if (index == arr.length - 1) {
								this.src = global.baseImg + '/' + item.result_image
							}

						})
						uni.setStorageSync('vison_code', '')
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取历史记录失败！')
				})

			},
			mergeChange_backdrop(index) {
				this.active_backdrop = index
				if (index === 0) {
					let that = this;
					uni.chooseMedia({
						count: 1,
						mediaType: ['video'],
						sourceType: ['album', 'camera'],
						maxDuration: 30,
						camera: 'back',
						success(res) {
							console.log(res.tempFiles)
							const tempFilePaths = res.tempFiles[0].tempFilePath;
							const fileExtension = tempFilePaths.substring(tempFilePaths.lastIndexOf('.') + 1)
								.toLowerCase();
							const size = res.tempFiles[0].size;
							if (size > 1073741824) { // 图片文件最大只能上传1GB
								that.$api.msg('该文件已超过1GB，不能上传')
								return
							}
							if (fileExtension === 'mp4' || fileExtension === 'avi' || fileExtension === 'mkv' ||
								fileExtension === 'flv' || fileExtension === 'mov' || fileExtension === 'mpg' ||
								fileExtension === 'ts' || fileExtension === 'mxf') {
								uni.showLoading({
									title: '上传中'
								});
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
										// console.log(imgData,22222)
										if (imgData.code == 20000) {
											that.src = global.baseImg + '/' + imgData.data.new_url
											that.picList[0].src = imgData.data.new_url
											that.video_url = imgData.data.new_url
											that.video_name = that.video_url.substring(24)
											console.log(that.video_url, that.video_name);
											that.active_backdrop = 0;
											// console.log(imgData,333)
											uni.hideLoading()
										} else {
											that.$api.msg(imgData.msg)
											uni.hideLoading()
										}

									}
								});
							} else {
								that.$api.msg('只允许上传 .mp4、.avi、.mkv、.flv、.mov、.mpg、.ts、.mxf 格式的视频')
								return
							}
						}
					})
				} else {
					this.video_url = this.picList[index].url
					this.video_name = this.picList[index].url.substring(53)
					this.src = global.baseImg + '/' + this.picList[index].url
					console.log(this.video_url, this.video_name);
				}
			},

			mergeChange(index) {
				this.active = index
				if (index === 0) {
					let that = this;
					uni.chooseMedia({
						count: 1,
						mediaType: ['image'],
						sourceType: ['album', 'camera'],
						maxDuration: 30,
						camera: 'back',
						success(res) {
							console.log(res, 589)
							const tempFilePaths = res.tempFiles[0].tempFilePath;
							const size = res.tempFiles[0].size;
							console.log(size, res.tempFiles, 1037);
							if (size < 30720 || size > 104857600) { // 图片文件最大只能上传5M
								that.$api.msg('请上传大于30 KB，小于100 MB的图片')
								return
							}
							if (fileExtension == 'jpg' || fileExtension == 'png') {
								uni.showLoading({
									title: '上传中'
								});
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
										console.log(imgData, 22222)
										if (imgData.code == 20000) {
											that.list[0].src = imgData.data.new_url
											that.img_url = imgData.data.new_url
											that.img_name = that.img_url.substring(24)
											uni.hideLoading()
										} else {
											that.$api.msg(imgData.msg)
											uni.hideLoading()
										}
									}
								});
							} else {
								that.$api.msg('只允许上传 .jpg、.png、格式的图片')
							}
						}
					})
				} else {
					this.img_url = this.list[index].src
					this.img_name = this.list[index].src.substring(53)
				}

			},

			voiceChange(index) {
				this.active_voice = index
				if (index === 0) {
					let that = this;

					uni.chooseMessageFile({
						count: 1,
						type: 'audio',
						success: function(res) {
							const audioFile = res.tempFiles[0];
							const uploadUrl = audioFile.path;
							const fileExtension = uploadUrl.substring(uploadUrl.lastIndexOf('.') + 1)
								.toLowerCase();
							const size = res.tempFiles[0].size;
							if (size > 1073741824) { // 图片文件最大只能上传1GB
								that.$api.msg('该文件已超过1GB，不能上传')
								return
							}
							if (fileExtension === 'mp3' || fileExtension === 'wav') {
								uni.showLoading({
									title: '上传中'
								});
								uni.uploadFile({
									url: global.loginUrl + '/api/user/oss_upload',
									filePath: uploadUrl,
									name: 'image',
									fileType: 'audio',
									formData: {
										"image": uploadUrl,
										"oss_dir": 'static',
										"cate": 'create_character'
									},
									success: (uploadFileRes) => {
										console.log(uploadFileRes, 111111111111);
										let imgData = JSON.parse(uploadFileRes.data)
										console.log(imgData, 22222)
										if (imgData.code == 20000) {
											that.audio_url = imgData.data.new_url
											that.audio_name = that.audio_url.substring(24)
											console.log(that.audio_url, that.audio_name);
											that.active_voice = 0;
											// console.log(imgData,333)
											uni.hideLoading()
										} else {
											that.$api.msg(imgData.msg)
											uni.hideLoading()
										}

									},
									fail: () => {
										this.$api.msg('上传失败，请重新上传')
									}
								});
							} else {
								this.$api.msg('只允许上传 .mp3、.wav格式的音频')
							}
						},
						fail: function(err) {
							// 选择音频文件失败的处理逻辑
							console.error('选择音频文件失败', err);
						}
					});
				} else {
					this.audio_url = this.voiceList[index].url
					this.audio_name = this.voiceList[index].url.substring(53)
					console.log(this.audio_url, this.audio_name);
				}

			},

			historyText() {
				uni.navigateTo({
					url: '/childCont/chest/history_chest?chat_type=29'
				})
			},

			async toSlove() {
				uni.showLoading({
					title: '生成中...'
				})
				if (this.origin_image == '') {
					return this.$api.msg('请上传人物照片')
				}

				if (this.refer_image == '') {
					return this.$api.msg('请上传背景照片')
				}
				let data = {
					"chat_type": '29',
					"action_type": 6,
					"file_extension": "mp4",
					"prompt": '通用视频生成',
					"style": 'normal',
					"size": "750*750",
					"scene": 'costume',
					"transition_style": 'basic',
					"file_list": [{
							"file_url": this.video_url,
							"file_type": "video",
							"file_name": this.video_name
						},
						{
							"file_url": this.img_url,
							"file_type": "image",
							"file_name": this.img_name
						},
						{
							"file_url": this.audio_url,
							"file_type": "audio",
							"file_name": this.audio_name
						}
					]
				}
				try {
					const id = await asyncImg(data)
					if (id.code == 20000) {
						let request_count = 0
						let stopTime = setInterval(async () => {
							if (request_count < 51) {
								const res = await getTextImg(id.data)
								if (res.code === 20000) {
									request_count += 1
									if (res.data != null) {
										if (res.data[0].status != 1) {
											this.src = global.baseImg + '/' + res.data[0].result_image
											clearInterval(stopTime)
											uni.hideLoading()
										} else {
											clearInterval(stopTime)
											that.$api.msg('生成图片失败，稍后重试')
											uni.hideLoading()
										}
									}
								} else if (res.code == 40022) {
									clearInterval(stopTime)
									uni.hideLoading()
									uni.showModal({
										content: res.msg,
										confirmText: '购买算力',
										success: function(res) {
											if (res.confirm) {
												uni.navigateTo({
													url: '/pages/user/vip/vip'
												})
											} else if (res.cancel) {
												console.log('用户点击取消');
											}
										}
									})
								} else {
									clearInterval(stopTime)
									this.active = 0;
									this.$api.msg(res.msg)
									uni.hideLoading()
								}
							} else {
								uni.hideLoading()
								this.$api.msg('请前往历史记录查看')
							}
						}, 2000)
					}else{
						console.log(id.msg);
						uni.hideLoading()
					}

				} catch (e) {
					this.$api.msg('生成失败')
				}
			},

			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},

			previewImage() {
				uni.previewImage({
					urls: [this.src],
					current: this.src,
					loop: true
				});
			},

			savePhoto(url) {
				uni.showLoading({
					title: '下载中'
				});
				console.log(url, '我是下载URL');
				let that = this;
				uni.downloadFile({
					url: url, //下载地址接口，注意：这里的图片的下载链接可直接在浏览器打开下载的
					success: (data) => {
						if (data.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: data.tempFilePath,
								success: () => {
									//提示保存成功
									console.log('成功了')
									uni.hideLoading();
									setTimeout(function() {
										uni.showToast({
											title: '保存成功',
											duration: 2000
										})
									}, 500);
								},
								fail: (res) => {
									//失败关闭提示信息！！！
									uni.hideLoading();
									setTimeout(function() {
										uni.showToast({
											icon: 'none',
											title: '下载失败',
											duration: 2000
										})
									}, 500);

									console.log("下载失败", res);
								},
								complete: function(res) {
									//隐藏提示
									uni.hideLoading();
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
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			},
			quesChange() {
				uni.showModal({
					content: '视频素材总时长不超过3分钟，超过部分会被自动截断丢弃（按输入视频顺序保留前3分钟)',
					success() {}
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #fff;
	}

	.bigBox {
		position: relative;
		text-align: center;
		width: 100%;
		height: 512rpx;
		background: #000;
		padding: 32rpx 0;

		.bigImg {
			height: 512rpx;
			width: 100%;
		}

		.downImg {
			width: 55upx;
			height: 55upx;
			position: absolute;
			bottom: -65rpx;
			right: 15rpx;
		}

		.upImg {
			width: 55upx;
			height: 55upx;
			position: absolute;
			bottom: 95upx;
			right: 20upx;
		}

	}

	.noImg {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 70upx 0;

		.defaultImg {
			width: 200upx;
			height: 200upx;
		}

		.img_text {
			color: #9E9E9E;
			font-size: 28upx;
			padding: 20upx 0;
		}
	}

	.material {
		margin-top: 65rpx;

		.tips {
			padding: 10rpx 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			margin-bottom: 20rpx;
		}
		
		.tip_m {
			flex: 1;
			color: #1D2129;
			font-size: 24upx;
		}

		.tip_select {
			color: #86909C;
			font-size: 24upx;
			padding: 20upx 0;
		}

		.select {
			margin-top: 40upx;
			padding-left: 32upx;

			.top {
				margin-bottom: 20upx;

				.text1 {
					color: #1D2129;
					text-align: center;
					font-size: 30upx;
					font-weight: 500;
					margin-right: 32upx;
				}
			}

			.bottom {
				display: flex;
				color: #86909C;
				font-size: 24upx;

				.item {
					margin-right: 50upx;
					text-align: center;

					img {
						width: 120upx;
						height: 120upx;
						border-radius: 4px;
					}
				}
			}
		}
	}

	.activeColor {
		font-size: 24upx;
	}

	.footer {
		position: fixed;
		bottom: 0upx;
		padding-bottom: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		background: #fff;

		.text {
			font-size: 30upx;
			color: #333;
			line-height: 50upx;
			display: flex;
		}

		.record {
			font-size: 26upx;
			color: #0E39DE;
			width: 80%;
			text-align: right;
			line-height: 50upx;
		}

		.btn {
			width: 80%;
			height: 75upx;
			line-height: 75upx;
		}
	}
	
</style>