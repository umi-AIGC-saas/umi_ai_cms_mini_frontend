<template>
	<view id="phone">
		<view class="hello">您好,</view>
		<view class="title">欢迎来到无忧秘书智脑</view>
		<view class="loginInput">
			<u-input placeholder="请输入手机号码" border="bottom" v-model="phone" color='#000'>
				<u--text text="手机号" slot="prefix" margin="0 3px 0 0" type="info"></u--text>
			</u-input>
			<u-input placeholder="请输入验证码" border="bottom" v-model="code" color='#000'
				:customStyle="{'padding-right':'0px'}">
				<u--text text="验证码" color='#333333' slot="prefix" margin="0 3px 0 0" type="info"
					style="flex:1"></u--text>
				<template slot="suffix">
					<u-toast ref="uToast"></u-toast>
					<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"
						changeText='X秒'></u-code>
					<u-button @tap="getCode">{{tips}}</u-button>
				</template>
			</u-input>
		</view>
		<!-- <u-button color="#1F64FF" :customStyle="{'height':'48px'}" @click="goToLogin">登录</u-button> -->
		<!-- <button open-type='chooseAvatar' @chooseavatar="onChooseavatar">获取头像和昵称</button> -->
		<view class="login_btn" @click="goToLogin">登录</view>

		<view class="agree">
			<view style="display: flex; align-items: center; justify-content: center;">
				<checkbox-group @change="radioChange">
					<label>
						<checkbox value="1" color="#FFCC33" style="transform:scale(0.7);" />
					</label>
				</checkbox-group>

				<text class="agree_text">我已阅读并同意</text>
				<text class="agree_text_right" @click="checkAgree">《用户协议》</text>
				<text class="agree_text">和</text>
				<text class="agree_text_right" @click="checkSecret">《隐私政策》</text>
			</view>

		</view>
		<t-captcha id="captcha" app-id="193870748" @verify="handlerVerify" @ready="handlerReady" @close="handlerClose"
			@error="handlerError" />
	</view>
</template>

<script>
	import {
		send_code,
		mobile_login,
		create_temp_user
	} from '@/apis/chat.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				phone: "",
				code: "",
				tips: '',
				// refCode: null,
				seconds: 60,
				selectCheck: 0,
				user_code: "",
				isClick: true,
			}
		},
		mounted() {
			create_temp_user().then(res => {
				this.user_code = res.data.user_code
				console.log(res.data.user_code);
			})
		},
		methods: {
			// 验证码验证结果回调
			handlerVerify(ev) {
				console.log(ev,'ev');
				// 如果使用了 mpvue，ev.detail 需要换成 ev.mp.detail
				if (ev.detail.ret === 0) {
					// 验证成功
					console.log('ticket:', ev.detail.ticket)
					let ticket=ev.detail.ticket
					if (this.$refs.uCode.canGetCode) {
						uni.showLoading({
							title: '正在获取验证码'
						})
						send_code({
							mobile: this.phone,
							action:'xcx',
							Ticket:ticket,
						}).then(res => {
							uni.hideLoading();
							// 这里此提示会被this.start()方法中的提示覆盖
							uni.$u.toast('验证码已发送');
							// 通知验证码组件内部开始倒计时
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
				console.log(ev,'ev2222');
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

			goToLogin() {
				if (this.phone == "") {
					return uni.showModal({
						title: '请输入手机号码',
						showCancel: false,
						success() {
							console.log('dianji');
						}
					})
				}
				if (this.code == "") {
					return uni.showModal({
						title: '请输入验证码',
						showCancel: false,
						success() {
							console.log('dianji');
						}
					})
				}
				if (this.selectCheck == 0) {
					return uni.showModal({
						title: '请先阅读并同意用户协议和隐私政策',
						showCancel: false,
						success() {
							console.log('dianji');
						}
					})
				}
				if (this.isClick == false) {
					return false
				}
				this.isClick = false;
				let query = uni.getStorageSync('loginCode');
				console.log(query, 411)
				let val = {
					mobile: this.phone,
					code: this.code,
					user_code: this.user_code
				}
				if (query) {
					if (query.role == 'user') {
						val.parent_user_code = query.parent_user_code
					}
				}
				mobile_login(val).then(res => {
					if (res.code == 20000) {

						uni.setStorageSync("userInfo", JSON.stringify(res.data));
						// uni.switchTab({
						// 	url: "/pages/index/index"
						// })
						uni.navigateBack({ // 返回上2页
							delta: 2
						})
						this.isClick = true;
						uni.setStorageSync('loginCode', '')
					} else {
						this.isClick = true;
						this.$api.msg(res.msg)
					}

				}).catch(err => {
					that.isClick = true;
					that.$api.msg('登录失败')
				})
			},
			radioChange(evt) {
				this.selectCheck = evt.detail.value[0]
			},
			onChooseavatar(e) {
				console.log(e, 'bindchooseavatar');
			},
			//获取手机号码
			getPhoneNumber(e) {
				console.log(e.detail.code, 'console.log(e.detail.code)')
			},
			checkAgree() {
				uni.navigateTo({
					url: '/pages/agree/agree?agree_type=4',
				})
			},
			checkSecret() {
				uni.navigateTo({
					url: '/pages/agree/agree?agree_type=1',
				})
			},
			//按钮文字提示
			codeChange(text) {
				this.tips = text;
			},
			//获取验证码
			getCode() {
				let text = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
				// if (this.phone == "") {
				// 	return uni.showModal({
				// 		title: '请输入手机号码',
				// 		showCancel: false,
				// 		success() {
				// 			console.log('dianji');
				// 		}
				// 	})
				// }

				console.log(text.test(this.phone));
				// if (!text.test(this.phone)) {
				// 	return uni.showModal({
				// 		title: '请输入正确的手机号码',
				// 		showCancel: false,
				// 		success() {
				// 			console.log('dianji');
				// 		}
				// 	})
				// }
				const arr = getCurrentPages();
				arr[arr.length - 1].selectComponent('#captcha').show();

			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			start() {
				uni.$u.toast('倒计时开始，时效60秒');
			},
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}
		}
	}
</script>



<style>
	page {
		background: #fff;
	}
</style>

<style scoped lang="scss">
	#phone {
		padding: 32px;

		.hello {
			font-style: normal;
			font-weight: 500;
			font-size: 32px;
			line-height: 45px;
		}

		.title {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			margin-bottom: 35px;
		}

		.loginInput {
			margin-bottom: 61px;

			/deep/.u-input {

				// width: 312px;
				height: 48px;
				// border-radius: 10px;

				padding-right: 1px;
				margin-bottom: 12px;

			}

			/deep/.u-text__value--info {
				color: #333;
			}

			/deep/.u-button {
				width: 120px;
				height: 46px;
				// border-radius: 10px;
				// border: 1px solid #1F64FF;
				border: none;
				color: #1F64FF;
				font-style: normal;
				font-weight: 500;
				font-size: 17px;
			}
		}

		.agree {
			// text-align: center;

			position: absolute;
			bottom: 100upx;
			left: 0;
			right: 0;

			.agree_text {
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 26upx;
				color: #222;
			}

			.agree_text_right {
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 26upx;
				color: #1F64FF;
			}
		}
	}

	.login_btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #1F64FF;
		border-radius: 12upx;
		line-height: 90upx;
		font-style: normal;
		font-weight: 500;
		font-size: 34upx;
		color: #fff;
	}

	.login_btn:active {
		opacity: 0.5;
	}
</style>