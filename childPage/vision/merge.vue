<template>
	<view style="background-color: #FEFEFE;height: 100vh;padding-bottom: 230rpx;">
		<view class="bigBox" v-if="src != '' ">
			<image class="bigImg" mode="aspectFit" :src="src"></image>
			<image class="upImg" @click="previewImage" :src="icon_img" mode="aspectFit"></image>
			<image class="downImg" @click="savePhoto(src)" :src="icon_img1" mode=""></image>
		</view>
		<view class="noImg" v-else>
			<image class='defaultImg' :src="backImg" mode="aspectFit"></image>
			<view class="img_text">暂无融合图</view>
		</view>

		<view class="material">
			<view class="tips" v-if="tipShow">
				<image class="tip_l" :src="tipImg" mode="aspectFit"></image>
				<text class="tip_m">选择素材图＞选择模板图＞一键生成融合图</text>
				<image class="tip_r" src="../../static/user/close.png" mode="" @click="tipShow=false"></image>
			</view>
			<!-- <view class="tip_select">请选择包含人脸的融合图和模板图</view> -->

			<view class="select">
				<view class="top">
					<text class="text1">素材图选择</text>
					<view class="text1" style="font-size: 26rpx;color: #999;">图片需要包含人脸</view>
				</view>
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

			<view class="select" style="margin-bottom: 150upx;">
				<view class="top">
					<text class="text1">模板图选择</text>
				</view>
				<view class="bottom">
					<view class="item" v-for="(item,index) in list" :key='index' @click="mergeChange(index)">
						<img :src="getImgUrl(item.src)" :style="[{border:(active == index ? '1rpx solid #1F64FF':'')}]"
							alt="" />
						<view class="activeColor" :style="[{color:( active == index ? '#1F64FF':'#333')}]">{{item.name}}
						</view>
					</view>
				</view>
			</view>

			<view class="footer">
				<view class="text">本次生成将消耗15w算力</view>
				<view class="record" @click="historyText">历史记录</view>
				<button @click="toSlove" style="background-color: #1F64FF;color: #fff;" class="btn" size="default"
					type="default">一键生成</button>
			</view>


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
				tipShow: true,
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				show: true,
				src: '',
				tipImg: global.baseImg + '/xcx/com/message_center/alert-circle.png',
				backImg: global.baseImg + '/xcx/com/message_center/%E7%BC%BA%E7%9C%81%E9%A1%B5.png',
				icon_img: global.baseImg + '/xcx/com/message_center/Frame%20427320251.png',
				icon_img1: global.baseImg + '/xcx/com/message_center/Frame%20427319637.png',

				picList: [{
						src: 'cxc/com/message_center/Frame%20427320254.png',
						name: '素材图'
					},
					{
						src: 'xcx/com/message_center/Rectangle%203462534889.png',
						name: '图例1'
					},
					{
						src: 'xcx/com/message_center/Rectangle%203462535211.png',
						name: '图例2'
					},
					{
						src: 'xcx/com/message_center/Rectangle%203462535311.png',
						name: '图例3'
					},
				],
				list: [{
						src: 'cxc/com/message_center/Frame%20427320254.png',
						name: '模版图'
					},
					{
						src: 'xcx/com/message_center/Rectangle%20346253495252.png',
						name: '示例1'
					},
					{
						src: 'xcx/com/message_center/Rectangle%203462535255.png',
						name: '示例2'
					},
					{
						src: 'xcx/com/message_center/Rectangle%2034625353.png',
						name: '示例3'
					},
				],
				active: 1,
				origin_image: 'xcx/com/message_center/Rectangle%20346253495252.png',
				refer_image: 'cxc/com/message_center/Frame%20427320254.png',
				active_backdrop: 1
			}
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
								this.active = 0
								this.active_backdrop = 0
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
							// console.log(res.tempFiles)
							console.log(res, 589)
							const tempFilePaths = res.tempFiles[0].tempFilePath;
							const size = res.tempFiles[0].size;
							if (size > 5242880) { // 图片文件最大只能上传5M
								that.$api.msg('该文件已超过5M，不能上传')
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
									console.log(imgData, 22222)
									if (imgData.code == 20000) {
										that.list[0].src = imgData.data.new_url
										that.src = global.baseImg + '/' + imgData.data.new_url
										that.origin_image = imgData.data.new_url
										console.log(imgData, 333)
										uni.hideLoading()
									} else {
										that.$api.msg(imgData.msg)
										uni.hideLoading()
									}
								}
							});
						}
					})
				} else {
					this.origin_image = this.list[index].src
					this.src = global.baseImg + '/' + this.list[index].src
				}

			},

			mergeChange_backdrop(index) {
				this.active_backdrop = index
				if (index === 0) {
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
							if (size > 5242880) { // 图片文件最大只能上传5M
								that.$api.msg('该文件已超过5M，不能上传')
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
									console.log(imgData, 22222)
									if (imgData.code == 20000) {
										that.picList[0].src = imgData.data.new_url
										that.refer_image = imgData.data.new_url
										console.log(imgData, 333)
										uni.hideLoading()
									} else {
										that.$api.msg(imgData.msg)
										uni.hideLoading()
									}

								}
							});
						}
					})
				} else {
					this.refer_image = this.picList[index].src
				}

			},

			historyText() {
				uni.navigateTo({
					url: '/childPage/vision/history_text?chat_type=21'
				})
			},

			async toSlove() {
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
					"chat_type": '21',
					"action_type": 3,
					"prompt": '人像融合',
					"origin_image": this.origin_image,
					"refer_image": this.refer_image,
					"model": "face_swap",
					"change_degree": 1
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

		.bigImg {
			width: 100%;
		}

		.downImg {
			width: 55upx;
			height: 55upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
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
		.tips {
			padding: 10upx 30upx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #E8F3FF;
			width: 92%;

			.tip_l {
				width: 42upx;
				height: 42upx;
			}

			.tip_m {
				flex: 1;
				color: #1D2129;
				font-size: 24upx;
				padding-left: 20upx;
			}

			.tip_r {
				width: 22rpx;
				height: 22rpx;
			}
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
				display: flex;
				align-items: center;

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
		bottom: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		background: #fff;

		.text {
			font-size: 26upx;
			color: #999;
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