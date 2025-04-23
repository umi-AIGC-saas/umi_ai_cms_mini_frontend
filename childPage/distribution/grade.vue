<template>
	<view>
		<view class="head">
			<image class="head_img" :src="zsBack" mode="" v-if="memberInfo.d_level == 1"></image>
			<image class="head_img" :src="jpBack" mode="" v-if="memberInfo.d_level == 2"></image>
			<view class="head_cont">
				<image class="cont_img" :src="avatarUrl" mode=""></image>
				<view class="head_desc">
					<view class="nickname">
						<text class="nickname_l"
							:style="[{color:(memberInfo.d_level == 2 ? '':'#0A42BE')}]">{{ userInfo.nick_name }}</text>
						<image class="tip_img" :src="zsTip" mode="" v-if="memberInfo.d_level == 1"></image>
						<image class="tip_img" :src="jpTip" mode="" v-if="memberInfo.d_level == 2"></image>
					</view>
					<view class="desc" v-if="memberInfo.d_level == 1" style="color: #0A42BE">升级金牌分销享受更多权益</view>
					<view class="desc" v-if="memberInfo.d_level == 2">
						会员有效期:{{ memberInfo.expire_time.slice(0,10) }}</view>
				</view>
			</view>
		</view>

		<view class="container">
			<view class="container_item" v-for="(item, index) in productList" :key="index"
				@click="selctProduct(index,item)" :style="[{border:(active == index ? '1px solid #1F64FF':'none')}]">
				<view class="cont_time">{{ item.prod_desc.valid }}</view>
				<!-- <view style="height: 40upx;" v-if="index > 0"></view> -->
				<view class="cont_desc">{{ item.prod_name }}</view>
				<view class="cont_price">
					<text class="price_left">￥</text>
					<text class="price_right">{{ item.prod_price }}</text>
				</view>
				<!-- <view class="cont_original">原价: <text
						style="text-decoration: line-through;">{{ item.prod_origin_price }}元</text></view> -->
			</view>
		</view>

		<view class="cont_tip">
			<view class="tip_title">
				<text class="tip_l"></text>
				<text class="tip_r">升级分销&升级须知</text>
			</view>

			<view class="tip_text">分销服务为虚拟商品，支付成功后不支持退款。</view>
			<view class="tip_text">充值99元您将升级成为金牌分销，佣金由15%提升到30%，享有更高佣金福利。</view>
			<view class="tip_text">想享有更高佣金，<text class="tip_link" @click="cooperate">点我</text>申请升级为服务商。</view>
		</view>

		<view class="bottom">
			<view class="bottom_cont">
				<view class="bottom_buy" @click="pay">立即购买</view>
				<view class="bottom_desc">
					<text>购买即默认接受</text>
					<text style="color: #1F64FF;" @click="checkAgree">《分销服务协议》</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getProductList,
		wxpay,
		getResult,
		getUserInfo
	} from '@/apis/chat.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				productList: [],
				memberInfo: '',
				productInfo: '',
				active: 0,
				isClick: true,
				avatarUrl: '',
				userInfo: JSON.parse(uni.getStorageSync('userInfo')),
				zsTip: global.baseImg + '/xcx/com/message_center/lan.png',
				jpTip: global.baseImg + '/xcx/com/message_center/jin.png',
				zsBack: global.baseImg + '/xcx/00931564-3ccb-481b-9d93-20d9f7a0101a.jpg',
				jpBack: global.baseImg + '/xcx/82f2189a-50cb-4830-b592-f17f3088d028.jpg',
			}
		},
		onShow() {
			this.memberInfo = JSON.parse(uni.getStorageSync('distributionInfo'));
			this.avatarUrl = global.baseImg + '/' + uni.getStorageSync("avatarUrl");

			// console.log( , 662)
			this.getProduct();
		},
		methods: {
			// 获取商品列表
			getProduct() {
				// const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				let val = {
					'prod_cate_id': [4]
				}

				getProductList(val).then(res => {
					if (res.code == 20000) {
						if (res.data[4].length > 0) {
							this.productList = res.data[4];
							this.productInfo = res.data[4][0];
							// this.otherList = res.data[5];
							// this.otherList.forEach((ele)=>{
							// 	ele.count = 1
							// })
							// console.log(this.otherList,662)
						}
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			//选择商品
			selctProduct(index, item) {
				this.active = index;
				this.productInfo = item
			},
			// 发起微信支付
			pay() {
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				console.log(userInfo, 777)
				const openid = uni.getStorageSync('openid')
				let val = {
					"user_id": userInfo.user_id,
					"prod_id": this.productInfo.prod_id,
					"prod_cate_id": this.productInfo.prod_cate_id,
					"prod_name": this.productInfo.prod_name,
					"total_amount": this.productInfo.prod_price,
					"price": this.productInfo.prod_price,
					// "total_amount": 0.01,
					// "price": 0.01,
					"open_id": openid,
					"quantity": 1
				}
				if (this.isClick == false) {
					return false
				}
				this.isClick = false;
				let that = this;
				wxpay(val).then(res => {
					console.log(res, 548)
					if (res.code == 20000) {
						console.log(res, 336);
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
					} else {
						console.log(res.msg, 663);
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

			checkAgree() {
				uni.navigateTo({
					url: '/pages/agree/agree?agree_type=5',
				})
			},

			// 商务合作
			cooperate() {
				const userInfo = JSON.parse(uni.getStorageSync('memberInfo'))
				if (userInfo.d_level == 1) {
					uni.navigateTo({
						url: '/childPage/facilitator/signin',
					})
				}
				if (userInfo.d_level == 3) {
					uni.navigateTo({
						url: '/childPage/facilitator/service',
					})
				}
				
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
	.head {
		width: calc(100% - 64upx);
		height: 240upx;
		padding: 20upx 32upx;
		position: relative;
	}

	.head_img {
		width: 100%;
		height: 240upx;
	}

	.head_cont {
		width: 100%;
		display: flex;
		position: absolute;
		top: 88upx;
		margin-left: 40upx;
	}

	.cont_img {
		width: 104upx;
		height: 104upx;
		border-radius: 50%;
	}

	.nickname {
		margin-left: 20upx;
		margin-top: 10upx;
		display: flex;
		align-items: center;

		.nickname_l {
			font-style: normal;
			font-weight: 500;
			font-size: 36upx;
			line-height: 120%;
			color: #7C432E;
			max-width: 180upx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.tip_img {
			width: 120upx;
			height: 34upx;
			margin-left: 20upx;
		}
	}

	.desc {
		margin-left: 20upx;
		margin-top: 12upx;
		font-style: normal;
		font-weight: 400;
		font-size: 24upx;
		line-height: 120%;
		text-transform: uppercase;
		color: #7C432E;
	}

	.container {
		width: 100%;
		padding: 40upx 32upx;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 100upx;
	}

	.container_item {
		width: 30%;
		/* height: 240upx; */
		/* margin-left: 32upx; */
		background: #FFFFFF;
		border-radius: 8px;
		margin: 10upx 1.6%;
	}

	.cont_time {
		width: 140upx;
		height: 40upx;
		background: linear-gradient(180deg, #EE7863 0%, #EB504B 100%);
		border-radius: 8px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 500;
		font-size: 10px;
		line-height: 14px;
		color: #FFFFFF;
	}

	.cont_desc {
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 500;
		font-size: 32upx;
		line-height: 150%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #222;
		margin-top: 20upx;
	}

	.cont_price {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding: 30upx 0;
	}

	.price_left {
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 600;
		font-size: 28upx;
		line-height: 38upx;
		color: #EB504B;
	}

	.price_right {
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 600;
		font-size: 48upx;
		line-height: 48upx;
		color: #EB504B;
	}

	.cont_original {
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 24upx;
		line-height: 150%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999;
		margin-bottom: 20upx;

	}

	.bottom {
		width: 100%;
		background: #ffffff;
		position: fixed;
		bottom: 0;
	}

	.bottom_cont {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 25upx 0;
	}

	.bottom_buy {
		width: 90%;
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
		margin: 20upx auto 0;
	}

	.bottom_desc {
		width: 624upx;
		height: 34upx;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 24upx;
		line-height: 34upx;
		margin: 20upx auto 0;
		text-align: center;
	}

	.cont_tip {
		display: flex;
		flex-direction: column;
		padding: 0 32upx 230upx 32upx;

		.tip_title {
			display: flex;
			align-items: center;
			margin-bottom: 18upx;

			.tip_l {
				width: 6upx;
				height: 28upx;
				background: #1F64FF;
			}

			.tip_r {
				font-style: normal;
				font-weight: 400;
				font-size: 28upx;
				line-height: 42upx;
				color: #333;
				padding-left: 20upx;
			}
		}

		.tip_text {
			font-weight: 400;
			font-size: 26upx;
			line-height: 40upx;
			color: #888;
			padding: 0 0 15upx 15upx;

			.tip_link {
				color: #1F64FF;
				padding: 0 10upx;
			}
		}
	}
</style>