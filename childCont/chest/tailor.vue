<template>
	<view style="background-color: #FEFEFE;height: 100vh;">
		<view class="main">
			<view class="upload" v-if="src==''" @click="toSlove">
				<view class="box">
					<image src="../../static/user/upload.png" class="pic_img"></image>
					<view class="pic_text">上传图片</view>
				</view>
			</view>
			<view class='pic' v-else @click="toSlove">
				<image class="avatar" :src="src" mode="aspectFit"></image>
				<image class="upImg" @click="previewImage" :src="icon_img" mode="aspectFit"></image>
				<image class="downImg" @click="savePhoto(src)" :src="icon_img1" mode=""></image>
			</view>
			<!-- <view class="tips" v-if="src==''"><u-icon name="info-circle-fill" color="#1f64ff" size="22"></u-icon>
				<view style="margin-left: 16rpx;">上传小于3MB，分辨率小于2000x2000像素的图片生成更快哦</view>
			</view> -->
			<view class="tips_cont">
				<text class="tip_m">Tips:判断主体位置最佳裁剪图片或自定义裁剪  上传小于3MB，分辨率小于2000x2000像素的图片生成更快哦</text>
			</view>
			<view class="setting">
				<view class="set_head">参数设置</view>
				<view class="set_item" style="margin: 36rpx 0;">
					<view class="set_cont">裁剪宽度</view>
					<input class='int' type="number" v-model="wnum" />
				</view>
				<view class="set_item">
					<view class="set_cont">裁剪高度</view>
					<input class='int' type="number" v-model="hnum" />
				</view>
			</view>
		</view>

		<view class="footer">
			<view class="text">本次生成将消耗6w算力/次</view>
			<view class="record" @click="historyText">历史记录</view>
			<button @click="mergeChange" style="background-color: #1F64FF;color: #fff;" class="btn" size="default"
				type="default">一键生成</button>
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
				active: 0,
				blur: 0,
				src: '', //大图
				icon_img: global.baseImg + '/xcx/com/message_center/Frame%20427320251.png',
				icon_img1: global.baseImg + '/xcx/com/message_center/Frame%20427319637.png',
				default: global.baseImg + '/xcx/com/message_center/%E7%BE%8E%E5%A5%B31.png',
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				wnum: 100,
				hnum: 200,
				origin_image: 'xcx/com/message_center/bbxbigpic.png'


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
			async mergeChange() {
				if (this.src == '') {
					this.$api.msg('请上传图片')
					return
				}
				uni.showLoading({
					title: '生成中...'
				})
				console.log(this.origin_image, this.refer_image);
				if (this.origin_image == '') {
					return this.$api.msg('请上传人物照片')
				}

				if (this.refer_image == '') {
					return this.$api.msg('请上传背景照片')
				}
				let data = {
					"chat_type": '33',
					"action_type": 5,
					"prompt": '照片裁剪',
					"origin_image": this.origin_image,
					"size": this.hnum + '*' + this.wnum
				}

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
					// this.active = 0;
					this.$api.msg(res.msg)
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
					url: '/childCont/chest/history_chest?chat_type=33'
				})
			},
			toSlove() {

				let that = this;
				uni.chooseMedia({
					count: 1,
					mediaType: ['image'],
					sourceType: ['album', 'camera'],
					maxDuration: 30,
					camera: 'back',
					success(res) {
						// console.log(res.tempFiles)
						console.log(res, 589)
						const tempFilePaths = res.tempFiles[0].tempFilePath;
						const size = res.tempFiles[0].size;
						const fileExtension = tempFilePaths.substring(tempFilePaths.lastIndexOf('.') + 1)
							.toLowerCase()
						if (size > 3670016) { // 图片文件最大只能上传5M
							that.$api.msg('该文件已超过3.5M，不能上传')
							return
						}
						that.$nextTick(() => {
							uni.getImageInfo({
								src: tempFilePaths,
								success: (res) => {
									let width = res.width;
									let height = res.height;
									console.log("图片分辨率大小：", width, height);
									if (width > 2000 || height > 2000)
										that.$api.msg('请上传小于2000*2000像素的图片')
									return
								}
							})
						})
						if (fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension == 'png' ||
							fileExtension == 'bmp' || fileExtension == 'webp') {
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
										that.src = global.baseImg + '/' + imgData.data.new_url
										that.origin_image = imgData.data.new_url
										uni.hideLoading()
									} else {
										that.$api.msg(imgData.msg, {
											duration: 5000
										})
										uni.hideLoading()
									}
								}
							});
						} else {
							this.$api.msg('只允许上传 .jpg、.jpeg、.png、.bmp、.webp格式的图片')
						}

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

<style lang="less">
	.main {
		.upload {
			width: 100%;
			height: 520rpx;
			border-radius: 16rpx 16rpx 0px 0px;
			background: #EBEBEB;
			position: relative;

			.box {
				position: absolute;
				text-align: center;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%)
			}

			.pic_img {
				width: 160rpx;
				height: 160rpx;
			}

			.pic_text {
				color: #666;
				font-size: 28rpx;
				line-height: 150%;
				/* 21px */
			}


		}

		.pic {
			width: 100%;
			height: 520rpx;
			position: relative;
			padding: 36rpx 0;
			background-color: #000;

			.avatar {
				width: 100%;
				height: 100%;
			}
		}

		.tips {
			display: flex;
			width: 100%;
			height: 68rpx;
			color: #1D2129;
			text-align: center;
			align-items: center;
			font-size: 24rpx;
			background: #E8F3FF;
			padding-left: 18rpx;

		}

		.setting {
			padding: 32rpx;

			.set_head {
				color: #000;
				font-size: 32rpx;
				font-weight: 500;
				line-height: 150%;
				/* 24px */
			}

			.set_item {
				.set_cont {
					color: #000;
					font-size: 28rpx;
					font-weight: 400;
					line-height: 150%;
					/* 21px */
				}

				.int {
					width: 80%;
					height: 76rpx;
					border-radius: 16rpx;
					border: 2rpx solid #D7D9DF;
					color: #B7B9C0;
					font-family: PingFang SC;
					font-size: 28rpx;
					font-weight: 400;
					line-height: 150%;
					/* 21px */
					padding: 0 28rpx;
				}
			}
		}
	}

	.downImg {
		width: 55upx;
		height: 55upx;
		position: absolute;
		bottom: 40upx;
		right: 20upx;
	}

	.upImg {
		width: 55upx;
		height: 55upx;
		position: absolute;
		bottom: 120upx;
		right: 20upx;
	}

	.slider {
		width: 80%;
		margin-top: 40upx;
		margin-left: 80upx;
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
	.tips_cont {
		width: 100%;
		padding: 10upx 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	
		.tip_m {
			flex: 1;
			color: #1D2129;
			font-size: 24upx;
		}
	}
</style>