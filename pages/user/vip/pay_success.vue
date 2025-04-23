<template>
	<view>
		<view class="container">
			<view class="cont">
				<view class="cont_img">
					<img class="success_img" :src="payImg" style="width: 116upx; height: 92upx;" />
				</view>

				<view class="cont_title">支付成功,感谢您的购买</view>

				<view class="cont_text">
					<text class="text_left">订单ID</text>
					<text class="text_right">{{ info.order_id }}</text>
				</view>

				<view class="cont_text">
					<text class="text_left">付款ID</text>
					<text class="text_right">{{ info.pay_id }}</text>
				</view>

				<view class="cont_text">
					<text class="text_left">订单金额</text>
					<text class="text_right" style="color: #EA5050;">{{ info.amount }}元</text>
				</view>

				<view class="cont_text">
					<text class="text_left">支付方式</text>
					<text class="text_right">微信</text>
				</view>

				<view class="cont_text">
					<text class="text_left">支付时间</text>
					<text class="text_right">{{ info.created_at }}</text>
				</view>
			</view>
		</view>

		<!-- 绑定手机 -->
		<u-modal :show="show" :closeOnClickOverlay="false" confirmText="确认绑定" confirmColor="#1F64FF"
			confirmButtonShape="font-weight: 600" @confirm="showFun" negativeTop='110'>

			<view class="modal">
				<view class="modal_title">绑定手机号</view>
				<view class="modal_input">
					<u--input placeholder="请输入手机号" border="none" v-model="phone" @change="change"></u--input>
				</view>
				<view class="modal_input">


					<!-- #ifndef APP-NVUE -->
					<u-input placeholder="请输入验证码" border="none" v-model="code">
					<!-- #endif -->
						<!-- #ifdef APP-NVUE -->
						<u--input placeholder="请输入验证码" border="none" v-model="code">
						<!-- #endif -->
							<template slot="suffix">
								<u-code ref="uCode" @change="codeChange" seconds="60" changeText="X秒"></u-code>
								<u-button @tap="getCode" :text="tips"></u-button>
							</template>
					<!-- #ifndef APP-NVUE -->
					</u-input>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					</u--input>
					<!-- #endif -->
				</view>


			</view>

		</u-modal>
		<t-captcha id="captcha" app-id="193870748" @verify="handlerVerify" @ready="handlerReady" @close="handlerClose"
			@error="handlerError" />
	</view>
</template>

<script>
	import {
		send_code,
		mobile_login
	} from '@/apis/chat.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				info: '',
				show: false,
				tips: '',
				phone: '',
				code: '',
				user_code: "",
				payImg: global.baseImg + '/xcx/0c7b563d-160e-430d-ae19-6ac26a899419.jpg',
			}
		},
		onLoad(option) {
			this.info = JSON.parse(option.info)
		},
		onShow() {
			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			this.user_code = userInfo.user_code
			// if (userInfo.role == 'guess') {
			// 	this.show = true
			// }
		},
		methods: {
			showFun() {
				let text = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
				if (this.phone == "") {
					return this.$api.msg('手机号不能为空')
				}

				// console.log(text.test(this.phone));
				if (!text.test(this.phone)) {
					return this.$api.msg('请输入正确的手机号')
				}

				mobile_login({
					mobile: this.phone,
					code: this.code,
					user_code: this.user_code
				}).then(res => {
					if (res.code == 20000) {
						uni.setStorageSync("userInfo", JSON.stringify(res.data));
						this.show = false;
						this.$api.msg('绑定成功')
					} else {
						return this.$api.msg(res.msg)
					}

					// uni.switchTab({
					// 	url: "/pages/index/index"
					// })
				})
			},
			change() {

			},
			codeChange(text) {
				this.tips = text;
			},
			// 验证码验证结果回调
			handlerVerify(ev) {
				// 如果使用了 mpvue，ev.detail 需要换成 ev.mp.detail
				if (ev.detail.ret === 0) {
					// 验证成功
					console.log('ticket:', ev.detail.ticket)
					let ticket=ev.detail.ticket
					if (this.$refs.uCode.canGetCode) {
						send_code({
							mobile: this.phone,
							action:'xcx',
							Ticket:ticket,
						}).then(res => {
							uni.$u.toast('验证码已发送');
							this.$refs.uCode.start();
						})
					
					} else {
						uni.$u.toast('倒计时结束后再发送');
					}
				} else {
					// 验证失败
					// 请不要在验证失败中调用refresh，验证码内部会进行相应处理
				}
			},
			// 验证码准备就绪
			handlerReady() {
				console.log('验证码准备就绪')
			},
			// 验证码弹框准备关闭
			handlerClose(ev) {
				// 如果使用了 mpvue，ev.detail 需要换成 ev.mp.detail,ret为0是验证完成后自动关闭验证码弹窗，ret为2是用户主动点击了关闭按钮关闭验证码弹窗
				if (ev && ev.detail.ret && ev.detail.ret === 2) {
					console.log('点击了关闭按钮，验证码弹框准备关闭');
				} else {
					
					console.log('验证完成，验证码弹框准备关闭');
				}
			},
			// 验证码出错
			handlerError(ev) {
				console.log(ev.detail.errMsg)
			},
			getCode() {
				let text = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
				if (this.phone == "") {
					return this.$api.msg('手机号不能为空')
				}

				// console.log(text.test(this.phone));
				if (!text.test(this.phone)) {
					return this.$api.msg('请输入正确的手机号')
				}
				const arr = getCurrentPages();
				arr[arr.length - 1].selectComponent('#captcha').show();

			},
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.container {
		padding: 20upx 28upx;
	}

	.cont {
		background: #fff;
		width: 100%;
		padding: 40upx;
		display: flex;
		flex-direction: column;
		border-radius: 16upx;
	}

	.cont_img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.success_img {
		width: 116upx !important;
		heigth: 92upx !important;
	}

	.cont_title {
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 500;
		font-size: 40upx;
		line-height: 80upx;
		color: #000;
		display: flex;
		justify-content: center;
	}

	.cont_text {
		display: flex;
		padding: 14upx 0 14upx 50upx;
	}

	.text_left {
		font-style: normal;
		font-weight: 400;
		font-size: 28upx;
		line-height: 46upx;
		color: #A0AEC0;
	}

	.text_right {
		font-style: normal;
		font-weight: 400;
		font-size: 28upx;
		line-height: 46upx;
		color: #222;
		padding-left: 20upx;
	}

	.modal_title {
		font-style: normal;
		font-weight: 550;
		font-size: 36upx;
		line-height: 46upx;
		color: #222;
		text-align: center;
		padding: 20upx 0;
	}

	.modal_input {
		padding: 10px;

		border: 1px solid #D5D7DE;
		border-radius: 4px;
		margin-bottom: 10px;

		/deep/.u-button {
			width: 100px;
			height: 24px;
			// border-radius: 10px;
			border: 1px solid #1F64FF;
			border: none;
			color: #1F64FF;
			font-style: normal;
			font-weight: 500;
			font-size: 17px;
		}
	}
</style>