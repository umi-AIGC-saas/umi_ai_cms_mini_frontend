<template>
	<view style="background-color: #FEFEFE;height: 100vh;">
		<view class="bigBox">
			<video class="bigImg" object-fit='contain' :src="src"></video>
			<!-- <image class="upImg" @click="previewImage" :src="icon_img" mode="aspectFit"></image> -->
			<image class="downImg" @click="savePhoto(src)" :src="icon_img1" mode=""></image>
		</view>
		<view class="tips">
			<text class="tip_m">Tips:去除视频中出现的标志，可进行再创作</text>
		</view>
		<view class="bottom">
			<view class="item" v-for="(item,index) in list" :key='index' @click="mergeChange(index)">
				<img :src="item.src" :style="[{border:(active == index ? '1rpx solid #1F64FF':'3rpx solid #F3F3F3')}]"
					alt="" />
				<view :style="[{color:( active == index ? '#1F64FF':'#333')}]">{{item.name}}</view>
			</view>
		</view>

		<view class="footer">
			<view class="text">本次生成将消耗240w算力/分钟</view>
			<view class="record" @click="historyText">历史记录</view>
			<button @click="toSlove" style="background-color: #1F64FF;color: #fff;" class="btn" size="default"
				type="default">上传视频</button>
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
				active: 0,
				blur: 0,
				src: global.baseImg + '/' +
					'xcx/com/message_center/%E7%99%BE%E5%AE%9D%E7%AE%B1%E8%A7%86%E9%A2%91%E6%A0%87%E5%BF%97%E6%93%A6%E9%99%A4.mp4', //大图
				origin_image: 'xcx/com/message_center/%E7%99%BE%E5%AE%9D%E7%AE%B1%E8%A7%86%E9%A2%91%E6%A0%87%E5%BF%97%E6%93%A6%E9%99%A4.mp4',
				icon_img: global.baseImg + '/xcx/com/message_center/Frame%20427320251.png',
				icon_img1: global.baseImg + '/xcx/com/message_center/Frame%20427319637.png',
				default: global.baseImg + '/xcx/com/message_center/%E7%BE%8E%E5%A5%B31.png',
				list: [{
						src: global.baseImg + '/xcx/com/message_center/默认.png',
						name: '默认'
					},
					{
						src: global.baseImg + '/xcx/com/message_center/标志.png',
						name: '去除标志'
					}
				],
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
					uni.hideLoading()
				} else {
					data = {
						"chat_type": '30',
						"action_type": 6,
						"file_extension": "mp4",
						"prompt": '视频去标志',
						"origin_image": this.origin_image,
					}
				}
				// console.log(data);
				if (index !== 0) {
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
								this.$api.msg('请到历史记录查询')
							}
						}, 2000)
					} else {
						console.log(id.msg);
						uni.hideLoading()
					}
				}
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
					url: '/childCont/chest/history_chest?chat_type=30'
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
						console.log(res.tempFiles, 11111)
						// console.log(res,589)
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
						} else {
							that.$api.msg('只允许上传 .mp4、.avi、.mkv、.flv、.mov、.mpg、.ts、.mxf 格式的视频')
							return
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

		.item {
			margin-right: 32upx;
			text-align: center;

			img {
				width: 134upx;
				height: 134upx;

				border-radius: 4px;
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

	.tips {
		padding: 10rpx 39rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-bottom: 20rpx;
		margin-top: 60rpx;
	}

	.tip_m {
		flex: 1;
		color: #999;
		font-size: 24upx;
	}
</style>