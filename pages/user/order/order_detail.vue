<template>
	<view class="container">
		<view class="cont">
			<view class="cont_top">
				<text class="order_sn">订&nbsp;单&nbsp;号：</text>
				<text class="order_sn">{{ orderInfo.order_id }}</text>
			</view>
			
			<view class="cont_top">
				<text class="order_price">商品总额：</text>
				<text class="order_price">￥{{ orderInfo.total_amount  }}</text>
			</view>
			
			<view class="cont_top">
				<text class="order_price">商品单价：</text>
				<text class="order_price">￥{{ orderInfo.prod_price  }}</text>
			</view>
			
			<view class="cont_top">
				<text class="order_price">商品数量：</text>
				<text class="order_price">{{ orderInfo.quantity  }}</text>
			</view>
			
			<view class="cont_top">
				<text class="order_price">套&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;餐：</text>
				<text class="order_price">{{ orderInfo.prod_name }}</text>
				<text class="order_price" v-if="orderInfo.prod_cate_id == 5">(流量包)</text>
				<!-- <text class="order_price" v-if="orderInfo.prod_cate_id == 6">(通用包)</text> -->
			</view>
			
			<view class="cont_top">
				<text class="order_price">购买日期：</text>
				<text class="order_sn">{{ orderInfo.created_at }}</text>
			</view>
			
			<view class="cont_top" v-if="orderInfo.expire_at != ''">
				<text class="order_price">有&nbsp;效&nbsp;期：</text>
				<text class="order_price">{{ orderInfo.expire_at }}</text>
			</view>
		</view>
		
		<view class="bottom" v-if="orderInfo.status == 1">
			<view class="bottom_cont">
				<view class="bottom_buy" @click="pay">待付款</view>
			</view>
		</view>
	</view>	
</template>


<script>
	import {
		wxpay,
		getResult,
		againPay
	} from '@/apis/chat.js'
	import { orderList } from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg:global.baseImg+'/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				orderInfo: '',
				order_id: '',
				isClick: true
			}
		},
		components: {
			
		},
		onLoad(option) {
			this.order_id = option.order_id
			console.log(this.order_id,56)
		},
		onShow() {
	        // this.userInfo = JSON.parse(uni.getStorageSync('memberInfo'));
			// console.log(this.userInfo,4589)
			this.getOrderList();
		},
		methods: {
			getOrderList() {
			  let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			  let val = {
				  'user_id': userInfo.user_id,
				  'order_id': this.order_id,
			  }
			  orderList(val).then(res => {
				  if (res.code == 20000) {
					   this.orderInfo = res.data[0];
				  } else {
					  this.$api.msg(res.msg);
				  }
			  }).catch(err => {
				  this.$api.msg('获取订单信息失败');
			  })
			},
			
			pay() {
				// console.log(this.userInfo,4856)
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				if(this.orderInfo.source != 'xcx') {
					uni.showModal({
						title: '提示',
						content: '当前不支持此订单支付，请前往订单来源处进行支付',
						confirmText: "知道了",
						showCancel: false,
					});
					return
				}
				let val = {
					"order_id": this.orderInfo.order_id,
					"user_id": userInfo.user_id
				}
				if (this.isClick == false) {
					return false
				}
				this.isClick = false;
				let that = this;
				againPay(val).then(res => {
					if (res.code == 20000) {
						let data = JSON.parse(res.data[0].pay_data);
						let order_id = res.data[0].order_id;
						that.isClick = true;
						
						wx.requestPayment({
							"timeStamp": data.time_stamp,
							"nonceStr": data.nonce_str,
							"package": data.package,
							"signType": data.sign_type,
							"paySign": data.pay_sign,
							"success": (res) => {
								that.getPayResult(order_id)
							},
							"fail": (res) => {
								that.isClick = true;
								that.$api.msg('支付已关闭');
							}
						})
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
						let info = JSON.stringify(res.data[0])
						uni.redirectTo({
							url: '/pages/user/vip/pay_success?info=' + info,
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
			toIdea(){
				uni.navigateTo({
					url:'/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style scoped lang="less">
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
		width: calc(100% - 48upx);
		position: fixed;
		bottom: 100upx;
	}
	
	.bottom_cont {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	
	.bottom_buy {
		width: 100%;
		height: 80upx;
		background: #1F64FF;
		border-radius: 6px;
		font-family: 'PingFang SC';
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
	
</style>