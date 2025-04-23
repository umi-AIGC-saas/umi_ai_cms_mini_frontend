<template>
	<view>
		<!-- 海报 -->
		<view >
			<view style="width: 100%; height: 100vh; position: relative;">
				<view >
					<image :show-menu-by-longpress='true' style="width: 100%;" mode="widthFix" :src='pageData.post_img' />
				</view>
				
				<view class="poster_text">长按图片保存，分享给朋友</view>
				
			</view>

			<!-- //画布 -->
			<view v-if="isShow">
				<canvas canvas-id="shareCanvas" class="canvas"  bindlongpress="saveImg" catchtouchmove="true"
					:style="{height: canvasHeight+'px',width:canvasWidth+'px'}">
				</canvas>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		getShare
	} from '@/apis/home.js'

	export default {
		data() {
			return {
				codeImg: '',
				info_img: '',
				userInfo: '',
				pageData: {
					post_img: '',
					codePng: null
				},
				ctx: null,
				windowObj: {},
				canvasHeight: 0,
				canvasWidth: 0,
				isShow: true,
				backImg: '',
				model_id: '',
				greeting: '我是本业务的数字分身，有什么相关问题直接问我吧'
			}
		},
		components: {

		},
		onLoad(option) {
			// console.log(option,774)
			this.info_img = global.baseImg + '/hotel/com/message_center/card_code.png'
			
			this.backImg = global.baseImg +'/'+ option.model_img
			this.model_id = option.model_id
			if(option.greet) {
				this.greeting = option.greet
			}
			

		},
		onShow() {
			// this.exportPost()
			this.getQrCode()
		},
		onReady() {
			//初始化画布
			this.ctx = wx.createCanvasContext('shareCanvas')
		},
		methods: {
			
			//获取二维码
			getQrCode() {
				let userInfo = JSON.parse(uni.getStorageSync("userInfo"));
				let val = { 
					'user_id': userInfo.user_id,
					'model_id': this.model_id,
					'page': 'pages/index/index'
				}
				getShare(val).then(res => {
					// console.log(res,5256)
					if (res.code == 20000) {
						this.codeImg = res.data.share_code
						this.exportPost()
					} else {
						this.$api.msg(res.message)
					}
				})
			},

			//获取图片的基本信息，即将网络图片转成本地图片，
			getImageInfo(src) {
				return new Promise((resolve, reject) => {
					uni.getImageInfo({
						src,
						success: (res) => resolve(res),
						fail: (res) => reject(res)
					})
				});
			},
			exportPost() {
				this.isShow = true
				let that = this
				uni.showLoading({
					title: '海报生成中',
				})

				//获取系统的基本信息，为后期的画布和底图适配宽高
				uni.getSystemInfo({
					success: function(res) {
                        console.log(res,4512)
						that.windowObj = res
						// that.windowObj.ratio = that.windowObj.windowWidth/750 //因为小程序是用rpx单位，为了是后期合成的图片更好是适应各个手机屏幕的尺寸，这里先计算出一个比率，后面除以这个比率就可以对各个手机尺寸进行适配了
						that.canvasWidth = that.windowObj.windowWidth //设置画布的宽高
						that.canvasHeight = that.windowObj.windowHeight
						//image是画布的底图，后期可以换成自己需要的
						let image = that.backImg;
						let code_img = that.codeImg;
						Promise.all([that.getImageInfo(image), that.getImageInfo(code_img)]).then(res => {
                            // console.log(res,887)
							
							let code_width = that.canvasWidth - 120;
							let code_height = 20;
							let info_width = 25
							let info_height = that.canvasHeight - 110
							code_height = that.canvasHeight - 155;
							that.ctx.drawImage(res[0].path, 0, 0, that.canvasWidth, that.canvasHeight);//背景图
							
							
							that.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
							that.ctx.fillRect(0, that.canvasHeight - 200, that.canvasWidth, 300);
							
							let one_chat = ''
							let two_chat = ''
							if(that.greeting.length > 13) {
								one_chat = that.greeting.slice(0,12)
								two_chat = that.greeting.slice(12)
							} else {
								one_chat = that.greeting
							}
							that.ctx.fillStyle = '#ffffff'
							that.ctx.setFontSize(16)
							that.ctx.fillText(one_chat, 25, that.canvasHeight - 100)
							if(that.greeting.length > 13) {
								that.ctx.fillStyle = '#ffffff'
								that.ctx.setFontSize(16)
								that.ctx.fillText(two_chat, 25, that.canvasHeight - 80)
							}
							
							that.ctx.drawImage(res[1].path, code_width, code_height, 100, 100);//二维码
                            that.ctx.fillStyle = '#ffffff'
							that.ctx.setFontSize(12)
							that.ctx.fillText('长按识别二维码', code_width, that.canvasHeight - 35)
							

							that.ctx.draw(true, setTimeout(() => {
								uni.canvasToTempFilePath({ //将canvas生成图片
									x: 0,
									y: 0,
									width: that.windowObj.windowWidth,
									height: that.windowObj.windowHeight,
									destWidth: that.windowObj.windowWidth *
										2, //这里乘以2是为了保证合成图片的清晰度
									destHeight: that.windowObj.windowHeight * 2,
									canvasId: 'shareCanvas',
									fileType: 'jpg', //设置导出图片的后缀名
									success: function(res) {
										uni.hideLoading()
										console.log(res,6325)
										that.pageData.post_img = res
											.tempFilePath;
										// console.log(that.pageData.post_img,
										// 	415)

										that.isShow = false;
										that.$forceUpdate()
									},
									fail: (err) => {
										console.log(err)
									}
								})
							}, 500))

						})
					}
				})
			},

			// 保存图片
			// savePhoto() {
			// 	//保存图片到本地
			// 	uni.showLoading({
			// 		title: '正在保存...'
			// 	})
			// 	uni.saveImageToPhotosAlbum({
			// 		filePath: this.pageData.post_img,
			// 		success: function() {
			// 			uni.hideLoading();
			// 			setTimeout(function() {
			// 				uni.showToast({
			// 					title: '保存成功',
			// 					duration: 2000
			// 				})
			// 			}, 500);
			// 		},
			// 	})
			// },
			
		}
	}
</script>

<style lang="less" scoped>
	.container {
		// width: 100%;
		height: 100vh;
		background-size: 100% 100%;
		z-index: 98;
	}
	
	.poster_text {
		position: absolute;
		left: 25px;
		bottom: 30px;
		color: #fff;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		z-index: 99;
	}
</style>