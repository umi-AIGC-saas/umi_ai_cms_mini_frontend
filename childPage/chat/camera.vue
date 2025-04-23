<template>
	<view style="height: 100vh; background: #000;">
		<camera device-position="back" flash="auto"  style="width: 100%; height: 80%;"></camera>
		<view class="photo">
			<view class="photo_file" @click="uploadFile">
				<image :src="wxImg" class="fileImg"></image>
				<text class="photo_text">微信导入</text>
			</view>
			<view class="photo_mid" @click="takePhoto">
				<image :src="photoImg" class="midImg"></image>
			</view>
			<view class="photo_file" @click="albumPhoto">
				<image :src="fileImg" class="fileImg"></image>
				<text class="photo_text">相册导入</text>
			</view>
		</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				ideaImg:global.baseImg+'/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				wxImg: global.baseImg+'/xcx/afbae4f5-b6b0-4174-872f-30637bfb3c73.jpg',
				photoImg: global.baseImg+'/xcx/7808c484-4c8d-4b17-94d7-c284748b6189.jpg',
				fileImg: global.baseImg+'/xcx/bed3b318-839a-4840-8ae2-77af77bdddcc.jpg',
				chatValue: '',
				imgList: [],
				isClick: true,
				source: 1
			}
		},
		components: {
			
		},
		onLoad(option) {
			if(option) {
				console.log(option,789)
				this.chatValue = option.chatValue
				this.source = option.source
			}
		},
		onShow() {
          
		},
		mounted() {
			if(this.source == 1 || this.source == 4|| this.source == 3) {
				uni.setNavigationBarTitle({
			      title: 'AI识图'
			    })
			} else if(this.source == 2 || this.source == 5) {
				uni.setNavigationBarTitle({
			      title: '图生图'
			    })
			} else {
				uni.setNavigationBarTitle({
			      title: '识万物'
			    })
			}
		    
		},
		methods: {
			// 拍照上传
			takePhoto() {
				let that = this;
				if(that.isClick == false) {
					return false
				}
				that.isClick = false
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						let tempFilePaths = res.tempImagePath
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
								if(imgData.code == 20000) {
									// let url = global.baseImg + '/'+ imgData.data.new_url
									let url = imgData.data.new_url
									that.imgList.push(url)
									
									let val = { 'chatValue': that.chatValue, 'imgList': that.imgList }
									uni.setStorageSync('cameraInfo', val)
									// console.log(that.source, 22222)
									if(that.source == 1) {
										uni.switchTab({
											url: '/pages/chat/chat'
										})
									} else if(that.source == 2) {
										uni.navigateTo({
											url: '/childPage/laboratory/labDraw'
										})
									} else if(that.source == 5) {
										uni.switchTab({
											url: '/pages/painting/painting'
										})
									} else {
										uni.navigateTo({
											url: '/childPage/discern/discern'
										})
									}
									that.isClick = true
								} else {
									that.isClick = true
									that.$api.msg(imgData.msg)
								}
							},
							fail: (res) => {
								that.isClick = true
								that.$api.msg('上传失败')
							}
						});
					}
				});
			},
			
			// 相册上传
			albumPhoto() {
				let that = this;
				if(that.isClick == false) {
					return false
				}
				that.isClick = false
				uni.chooseMedia({
				  count: 1,
				  mediaType: ['image'],
				  sourceType: ['album'],
				  camera: 'back',
				  success(res) {
					const tempFilePaths = res.tempFiles[0].tempFilePath;
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
							console.log(uploadFileRes,111111111111111111111111);
							let imgData = JSON.parse(uploadFileRes.data)
							if(imgData.code == 20000) {
								// let url = global.baseImg + '/'+ imgData.data.new_url
								let url = imgData.data.new_url
								that.imgList.push(url)
								let val = { 'chatValue': that.chatValue, 'imgList': that.imgList }
								// console.log(val,555556)
								uni.setStorageSync('cameraInfo', val)
								if(that.source == 1) {
									uni.switchTab({
										url: '/pages/chat/chat'
									})
								} else if(that.source == 2) {
									uni.navigateTo({
										url: '/childPage/laboratory/labDraw'
									})
								} else if(that.source == 5) {
									uni.switchTab({
										url: '/pages/painting/painting'
									})
								} else {
									uni.navigateTo({
										url: '/childPage/discern/discern'
									})
								}
								that.isClick = true
							} else {
								that.isClick = true
								that.$api.msg(imgData.msg)
							}
						},
						fail: (res) => {
							that.isClick = true
							that.$api.msg('上传失败')
						}
					});
				  }
				})
			},
			
			// 微信上传
			uploadFile(tip) {
				let that = this;
				if(that.isClick == false) {
					return false
				}
				that.isClick = false
				wx.chooseMessageFile({
				  count: 1,
				  type: 'image',
				  success (res) {
				    const tempFilePaths = res.tempFiles[0].path
					// console.log(image_name,774)
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
							if(imgData.code == 20000) {
								let url = imgData.data.new_url
								that.imgList.push(url)
								let val = { 'chatValue': that.chatValue, 'imgList': that.imgList }
								// console.log(val,555557)
								uni.setStorageSync('cameraInfo', val)
								if(that.source == 1) {
									uni.navigateTo({
										url: '/childPage/chat/chat'
									})
								} else if(that.source == 2) {
									uni.navigateTo({
										url: '/childPage/draw/draw'
									})
								} else if(that.source == 3) {
									uni.switchTab({
										url: '/pages/chat/chat'
									})
								} else if(that.source == 5) {
									uni.switchTab({
										url: '/pages/painting/painting'
									})
								}  else {
									uni.navigateTo({
										url: '/childPage/discern/discern'
									})
								}
								that.isClick = true
							} else {
								that.isClick = true
								that.$api.msg(imgData.msg)
							}
						},
						fail: (res) => {
							that.isClick = true
							that.$api.msg('上传失败')
						}
					});
				  }
				})
			},
			toIdea(){
				uni.navigateTo({
					url:'/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style>
	
	
</style>

<style lang="less" scoped>
	page {
		// background: #000;
	}
	.photo {
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
		.photo_file {
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.fileImg {
				width: 40upx;
				height:40upx;
			}
			.photo_text {
				color: #FFF;
				font-size: 22upx;
				font-style: normal;
				font-weight: 500;
				padding-top: 15upx;
			}
		}
		
		.photo_mid {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.midImg {
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
			}
			.midImg:active {
				opacity: 0.5;
			}
		}
		
		
		
	}
	
</style>