<template>
	<view style="background-color: #FEFEFE;height: 100vh;">
		<view class="bigBox">
			<video class="bigImg" object-fit='contain' :src="src"></video>
			<!-- <image class="upImg" @click="previewImage" :src="icon_img" mode="aspectFit"></image> -->
			<image class="downImg" @click="savePhoto(src)" :src="icon_img1" mode=""></image>
		</view>

		<view class="bottom">
			<view @click="mergeChange(0)" :class="active==0?'active_item':'item'">
				<img :src="defaultSrc" alt="" />
				<view class="btn_content">默认</view>
			</view>
			<view @click="mergeChange(1)" :class="active==1?'activeClearItem':'clearItem'">
				<img :src="clearSrc" alt="" />
				<view class="btn_content">增强视频人像</view>
			</view>
		</view>

		<view class="footer">
			<!-- <view class="text">本次生成将消耗120w算力/分钟</view> -->
			<view class="record" @click="historyText">历史记录</view>
			<button @click="toSlove" style="background-color: #1F64FF;color: #fff;" class="btn" size="default"
				type="default">上传视频</button>
		</view>
	</view>

</template>

<script>
	import {
		createImg,
		getImgDetail
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				active: 0,
				blur: 0,
				src: global.baseImg + '/xcx/com/message_center/百宝箱视频降噪.mp4', //大图
				origin_image: '/xcx/com/message_center/%E4%BA%BA%E7%89%A912.png',
				icon_img: global.baseImg + '/xcx/com/message_center/Frame%20427320251.png',
				icon_img1: global.baseImg + '/xcx/com/message_center/Frame%20427319637.png',
				default: global.baseImg + '/xcx/com/message_center/%E7%BE%8E%E5%A5%B31.png',
				defaultSrc: global.baseImg + '/xcx/com/message_center/默认.png',
				clearSrc: global.baseImg + '/xcx/com/message_center/百宝箱示例.png',

			};
		},
		onShow() {
			if (uni.getStorageSync('vison_code') != '') {
				this.historySession(uni.getStorageSync('vison_code'))
			}
		},
		methods: {
			historySession(code) {
				getImgDetail(code).then(res => {
					if (res.code == 20000) {
						let arr = res.data;
						arr.forEach((item, index) => {
							if (index == arr.length - 2) {
								if (item.style == 'hkcartoon') {
									this.active = 2
								}
								if (item.style == 'jpcartoon') {
									this.active = 1
								}
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
			async mergeChange(index) {
				this.active = index
				uni.showLoading({
					title: '生成中...'
				})
				let data
				if (index === 0) {
					this.src = global.baseImg + '/' + this.origin_image
				} else {
					data = {
						"chat_type": '27',
						"action_type": 3,
						"prompt": '图像增强',
						"size": '1080p',
						"origin_image": this.origin_image,
						"model": "enhance_photo_v2",
					}
				}
				// console.log(data);
				if (index !== 0) {
					const res = await createImg(data)
					if (res.code == 20000) {
						this.src = global.baseImg + '/' + res.data.results[0].result_image
					} else if (res.code == 40022) {
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
						this.active = 0;
						this.$api.msg(res.msg)
					}
				}

				uni.hideLoading()
			},

			savePhoto(url) {
				uni.showLoading({
					title: '下载中'
				});
				// console.log(url, '我是下载URL');
				let that = this;
				uni.downloadFile({
					url: url, //下载地址接口，注意：这里的图片的下载链接可直接在浏览器打开下载的
					success: (data) => {
						if (data.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: data.tempFilePath,
								success: () => {
									//提示保存成功
									// console.log('成功了')
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

									// console.log("下载失败", res);
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
						// console.log(err, 'err')
						uni.showToast({
							icon: 'none',
							mask: true,
							title: '失败请重新下载',
						});
					},
				});
			},
			previewImage() {
				uni.previewImage({
					urls: [this.src],
					current: this.src,
					loop: true
				});
			},
			historyText() {
				uni.navigateTo({
					url: '/childPage/vision/history_text?chat_type=27'
				})
			},
			toSlove() {
				let that = this;
				uni.chooseMedia({
					count: 1,
					mediaType: ['video'],
					sourceType: ['album', 'camera'],
					maxDuration: 30,
					camera: 'back',
					success(res) {
						// console.log(res.tempFiles)
						// console.log(res,589)
						const tempFilePaths = res.tempFiles[0].tempFilePath;
						const size = res.tempFiles[0].size;
						if (size > 31457280) { // 图片文件最大只能上传30M
							that.$api.msg('该文件已超过30M，不能上传')
							return
						}
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
									that.origin_image = imgData.data.new_url
									that.active = 0;
									// console.log(imgData,333)
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
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
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
			top: -4rpx;
			right: 4rpx;
		}

		.upImg {
			width: 55upx;
			height: 55upx;
			position: absolute;
			bottom: 95upx;
			right: 20upx;
		}

	}

	.slider {
		width: 80%;
		margin-top: 40upx;
		margin-left: 80upx;
	}

	.bottom {
		display: flex;
		color: '#86909C';
		font-size: 24upx;
		margin-left: 40upx;
		margin-top: 50upx;

		.item {
			margin-right: 32upx;
			text-align: center;

			img {
				width: 134upx;
				height: 134upx;
				border-radius: 8rpx;
				border: 1rpx solid #F3F3F3;
			}

			.btn_content {
				color: #888F9B;
				font-size: 24rpx;
			}
		}

		.active_item {
			margin-right: 32upx;
			text-align: center;

			img {
				width: 134upx;
				height: 134upx;
				border-radius: 8rpx;
				border: 1rpx solid #1F64FF;
			}

			.btn_content {
				color: #1F64FF;
				font-size: 24rpx;
			}
		}

		.clearItem {
			margin-right: 32upx;
			text-align: center;

			img {
				width: 310upx;
				height: 134upx;
				border-radius: 8rpx;
				border: 1rpx solid #F3F3F3;
			}

			.btn_content {
				color: #888F9B;
				font-size: 24rpx;
			}
		}

		.activeClearItem {
			margin-right: 32upx;
			text-align: center;

			img {
				width: 310upx;
				height: 134upx;
				border-radius: 8rpx;
				border: 1rpx solid #1F64FF;
			}

			.btn_content {
				color: #1F64FF;
				font-size: 24rpx;
			}
		}
	}

	.activeColor {
		color: '#1F64FF';
		z-index: 999;
	}

	.footer {
		position: fixed;
		bottom: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;

		.text {
			font-size: 30upx;
			color: #333;
			line-height: 50upx;
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