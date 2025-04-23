<template>
	<view>
		<view class="container">
			<view class="cont">
				<view class="cont_top">
					<text class="order_sn">模特名称：</text>
					<text class="order_sn">{{ info.live_name }}</text>
				</view>
				
				<view class="cont_top">
					<text class="order_price">商品价格：</text>
					<text class="order_price">￥1900</text>
				</view>
				
				<!-- <view class="cont_top">
					<text class="order_price">定制时间：</text>
					<text class="order_sn">{{ info.created_at }}</text>
				</view> -->
			</view>
		</view>
		
		<view class="bottom" v-if="info.make_status == 1">
			<view class="bottom_left">
				<text class="left_text">￥</text>
				<text class="right_text">{{ pay_price }}</text>
			</view>
			<view class="bottom_cont">
				<view class="bottom_buy" @click="wxPay">立即定制</view>
				<view class="bottom_desc">
					<text>定制即默认接受</text>
					<text style="color: #1F64FF;" @click="checkAgree">《定制数字人协议》</text>
				</view>
			</view>
		</view>
	</view>	
</template>


<script>
	import { wxpay, webpay, getProductList, getResult } from '@/apis/chat.js'
	import { getFigureDetail } from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				info: '',
				isClick: true,
				live_code: '',
				pay_price: 0,
				productInfo: [],
			}
		},
		components: {
			
		},
		onLoad(option) {
			if(option.live_code) {
				this.live_code = option.live_code
			}
			
			
		},
		onShow() {
			this.getList();
			this.getProduct()
		},
		onUnload() {
            
		},
		methods: {
			getList() {
			  let val = {
				  'live_code': this.live_code,
			  }
			  getFigureDetail(val).then(res => {
				  if (res.code == 20000) {
					   this.info = res.data;
				  } else {
					  this.$api.msg(res.msg);
				  }
			  }).catch(err => {
				  this.$api.msg('获取失败');
			  })
			},
			
			// 获取商品列表
			getProduct() {
				let val = {
					'prod_cate_id': [7]
				}
				getProductList(val).then(res => {
					if (res.code == 20000) {
						this.productInfo = res.data[7][0];
						// console.log(this.productInfo,5562)
						this.pay_price = this.productInfo.prod_price;
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			// 发起微信支付
			wxPay() {
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				const openid = uni.getStorageSync('openid')
				let val = {
					"user_id": userInfo.user_id,
					"prod_id": this.productInfo.prod_id,
					"prod_cate_id": this.productInfo.prod_cate_id,
					"prod_name": this.productInfo.prod_name,
					"total_amount": this.productInfo.prod_price,
					"price": this.productInfo.prod_price,
					"model_name": this.info.live_name,
					"live_code": this.info.live_code,
					"open_id": openid,
					"quantity": 1
				};
				
				if (this.isClick == false) {
					return false
				}
				this.isClick = false;
				let that = this;
				wxpay(val).then(res => {
					// console.log(res, 548)
					if (res.code == 20000) {
						// console.log(res, 336);
						let data = res.data[0].req_data;
						let order_id = res.data[0].order_id;
						
						wx.requestPayment({
							"timeStamp": data.time_stamp,
							"nonceStr": data.nonce_str,
							"package": data.package,
							"signType": data.sign_type,
							"paySign": data.pay_sign,
							"success": (res) => {
								that.isClick = true;
								that.getPayResult(order_id)
							},
							"fail": (res) => {
								that.isClick = true;
								that.$api.msg('支付已关闭');
							}
						})
						
						this.price_zdy = 1;
					} else {
						// console.log(res.msg, 663);
						that.$api.msg(res.msg)
						that.isClick = true;
					}
				}).catch(err => {
					that.isClick = true;
					that.$api.msg('获取支付信息失败！')
				})
			},
			
			// 查询支付结果
			getPayResult(order_id) {
				let val = {
					'order_id': order_id
				}
				getResult(val).then(res => {
					if (res.code == 20000) {
						this.$api.msg('支付成功');
						this.isClick = true;
						console.log(res, 777);
						// let info = JSON.stringify(res.data[0])
						uni.redirectTo({
							url: '/childCont/figure/pay_video',
						})
					} else {
						this.isClick = true;
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.isClick = true;
					this.$api.msg('获取支付结果失败！')
				})
			},
			
			// paySuccess() {
			// 	uni.navigateTo({
			// 		url: '/childCont/figure/pay_success',
			// 	})
			// }
			toIdea(){
				uni.navigateTo({
					url:'/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		background: #f6f8fb;
	}
	.container {
		padding: 20upx 24upx;
	}
	.cont {
		padding: 12upx 36upx;
		background: #FFFFFF;
		border-radius: 16px;
	}
	.cont_top {
		padding: 20upx 0;
	}
	.order_sn {
		font-style: normal;
		font-weight: 400;
		font-size: 28upx;
		line-height: 40upx;
		color: #333;
	}
	.order_price {
		font-style: normal;
		font-weight: 400;
		font-size: 28upx;
		line-height: 40upx;
		color: #6E7480;
	}
	
	.bottom {
		width: 100%;
		background: #ffffff; 
		position: fixed;
		bottom: 0;
		display: flex;
		border-top: 1upx solid #E7E7E7;
		padding-top: 20upx;
		.bottom_left {
			width: 35%;
			padding: 20upx;
			.left_text {
				color: #EB504B;
				font-size: 28upx;
				font-style: normal;
				font-weight: 600;
				line-height: 52upx; 
			}
			
			.right_text {
				color: #EB504B;
				font-size: 52upx;
				font-style: normal;
				font-weight: 700;
			}
		}
	}
	
	.bottom_cont {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-bottom: 25upx;
		width: 65%;
		.bottom_buy {
			width: 90%;
			height: 80upx;
			background: #1F64FF;
			border-radius: 6px;
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 20px;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: auto;
		}
		
		.bottom_desc {
			// width: 624upx;
			height: 34upx;
			font-style: normal;
			font-weight: 400;
			font-size: 24upx;
			line-height: 34upx;
			margin: 20upx auto 0;
			text-align: center;
		}
	}
	
</style>