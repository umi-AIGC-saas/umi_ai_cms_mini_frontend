<template>
	<view style="background-color: #FEFEFE;height: 100vh;padding-bottom: 190rpx;">
		<view class="bigBox" v-if="src != '' ">
			<image class="bigImg" mode='aspectFit' :src="src"></image>
			<image class="smallImg" mode='aspectFit' :src="small_src"></image>
			<image class="upImg" @click="previewImage" :src="icon_img" mode="aspectFit"></image>
			<image class="downImg" @click="savePhoto(src)" :src="icon_img1" mode=""></image>
		</view>
		<view class="noImg" v-else>
			<image class='defaultImg' :src="backImg" mode="aspectFit"></image>
			<view class="img_text">暂无融合图</view>
		</view>

		<view class="material">
			<view class="tips">
				<text class="tip_m">Tips:输入内容图和风格图，进行融合</text>
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

			<view class="footer">
				<view class="text">本次生成将消耗6w算力/次
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
		createImg,
		getImgDetail
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',

				show: true,
				src: global.baseImg + '/' + 'xcx/com/message_center/bbxspscPic.png',
				small_src: global.baseImg + '/' + 'xcx/com/message_center/retouchstyle1.png',
				origin_image: 'xcx/com/message_center/bbxspscPic.png',
				refer_image: 'xcx/com/message_center/retouchstyle1.png',
				tipImg: global.baseImg + '/xcx/com/message_center/alert-circle.png',
				backImg: global.baseImg + '/xcx/com/message_center/%E7%BC%BA%E7%9C%81%E9%A1%B5.png',
				icon_img: global.baseImg + '/xcx/com/message_center/Frame%20427320251.png',
				icon_img1: global.baseImg + '/xcx/com/message_center/Frame%20427319637.png',

				picList: [{
						src: 'cxc/com/message_center/Frame%20427320254.png',
						name: '内容图'
					},
					{
						src: 'xcx/com/message_center/bbxspscPic.png',
						name: '示例1'
					},
					{
						src: 'xcx/com/message_center/bbxspscPic2.png',
						name: '示例2'
					},
					{
						src: 'xcx/com/message_center/bbxspscPic3.png',
						name: '示例3'
					},
				],
				list: [{
						src: 'cxc/com/message_center/Frame%20427320254.png',
						name: '风格图'
					},
					{
						src: 'xcx/com/message_center/retouchstyle1.png',
						name: '图例1'
					},
					{
						src: 'xcx/com/message_center/Rectangle%203462535233.png',
						name: '图例2'
					},
					{
						src: 'xcx/com/message_center/Rectangle%2034625353333.png',
						name: '图例3'
					},
				],

				active: 1,
				video_name: '',
				img_name: '',


				active_backdrop: 1,
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
							console.log(res, 589)
							const tempFilePaths = res.tempFiles[0].tempFilePath;
							const size = res.tempFiles[0].size;
							const fileExtension = tempFilePaths.substring(tempFilePaths.lastIndexOf('.') + 1)
							console.log(size, res.tempFiles, 1037);
							if (size > 3145728) { // 图片文件最大只能上传5M
								that.$api.msg('请上传小于3MB的图片')
								return
							}
							that.$nextTick(() => {
								uni.getImageInfo({
									src: tempFilePaths,
									success: (res) => {
										let width = res.width;
										let height = res.height;
										console.log("图片分辨率大小：", width, height);
										if (width < 32 || width > 3000 || height < 32 ||
											height >
											3000)
											that.$api.msg('请上传大于32*32像素，小于3000*3000像素的图片')
										return
									}
								})
							})
							if (fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension == 'png') {
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
											this.src = imgData.data.new_url
											this.origin_image = this.src.substring(54)
											uni.hideLoading()
										} else {
											that.$api.msg(imgData.msg)
											uni.hideLoading()
										}
									}
								});
							} else {
								this.$api.msg('只允许上传 .jpg、.jpeg、.png、格式的图片')
							}
						}
					})
				} else {
					this.src = global.baseImg + '/' + this.picList[index].src
					this.origin_image = this.picList[index].src
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
							const fileExtension = tempFilePaths.substring(tempFilePaths.lastIndexOf('.') + 1)
								.toLowerCase()
							if (size > 3145728) { // 图片文件最大只能上传5M
								that.$api.msg('请上传小于3MB的图片')
								return
							}
							that.$nextTick(() => {
								uni.getImageInfo({
									src: tempFilePaths,
									success: (res) => {
										let width = res.width;
										let height = res.height;
										console.log("图片分辨率大小：", width, height);
										if (width < 32 || width > 3000 || height < 32 ||
											height >
											3000)
											that.$api.msg('请上传大于32*32像素，小于3000*3000像素的图片')
										return
									}
								})
							})
							if (fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension == 'png') {
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
											this.small_src = imgData.data.new_url
											this.refer_image = this.small_src.substring(54)
											uni.hideLoading()
										} else {
											that.$api.msg(imgData.msg)
											uni.hideLoading()
										}
									}
								});
							} else {
								this.$api.msg('只允许上传 .jpg、.jpeg、.png、格式的图片')
							}

						}
					})
				} else {
					this.small_src = global.baseImg + '/' + this.list[index].src
					this.refer_image = this.list[index].src
				}

			},


			historyText() {
				uni.navigateTo({
					url: '/childCont/chest/history_chest?chat_type=32'
				})
			},

			async toSlove() {
				uni.showLoading({
					title: '生成中...'
				})

				let data = {
					"chat_type": '32',
					"action_type": 3,
					"prompt": '照片修图',
					"size": "1024*1024",
					"origin_image": this.origin_image,
					"refer_image": this.refer_image,
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
					this.active = 0;
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
		position: relative;

		.bigImg {
			height: 512rpx;
			width: 100%;

		}

		.smallImg {
			position: absolute;
			top: 32rpx;
			right: 0;
			width: 312rpx;
			height: 212rpx;
		}

		.downImg {
			width: 55upx;
			height: 55upx;
			position: absolute;
			bottom: 145rpx;
			right: 15rpx;
		}

		.upImg {
			width: 55upx;
			height: 55upx;
			position: absolute;
			bottom: 65upx;
			right: 15upx;
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