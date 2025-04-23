<template>
	<view class="container">
		<view class="logo">
			<img class="logo_img" :src="loginImg" alt="">

			<text class="logo_text">无忧秘书智脑为你提供有帮助的建议和见解</text>

			<view class="logo_btn" @click="toLogin">

				<!-- <text class="btn_text" ></text> -->
				<u-button @getphonenumber="getphonenumber" :open-type="getPhoneNumber" color='#1F64FF' shape="circle"
					:customStyle="{'height':'48px'}">
					<!-- <img class="btn_img" src="/static/images/wx.png" alt=""> -->
					快速登录</u-button>
			</view>
		<!-- 	<view class="phoneLogin" @click="phoneLogin">
				手机验证码登录
			</view> -->

			<view class="agree">
				<view style="display: flex; align-items: center; justify-content: center;">
					<checkbox-group @change="radioChange">
						<label>
							<checkbox value="1" style="transform:scale(0.8)" />
						</label>
					</checkbox-group>

					<text class="agree_text">我已阅读并同意</text>
					<text class="agree_text_right" @click="checkAgree">《用户协议》</text>
					<text class="agree_text">和</text>
					<text class="agree_text_right" @click="checkSecret">《隐私协议》</text>
				</view>

			</view>

		</view>

	</view>
</template>
<script>
	import {
		wxLogin,
		wx_xcx_mobile
	} from '../../apis/chat.js'
	import {
		batchTutor,
		creatMe
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				selectCheck: 0,
				getPhoneNumber: '',
				loginImg: global.baseImg + '/xcx/com/message_center/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%96%B0logo2.png',
			}
		},
		
		onShow() {

			if (uni.getStorageSync('userInfo') == null || uni.getStorageSync('userInfo') == '') {
				console.log(999);
				this.guessLogin()
			}

		},
		methods: {
			phoneLogin() {
				// console.log('手机登录');
				uni.navigateTo({
					url: '/pages/login/phoneLogin'
				})
			},
			getphonenumber(e) {
				console.log(e.detail, '获取手机号码');
				let that = this;
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))

					wx_xcx_mobile({
						code: e.detail.code,
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv
					}).then(res => {
						// console.log(res.data.phone_info.purePhoneNumber,'purePhoneNumber');
						let query = uni.getStorageSync('loginCode');
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								// let code = loginRes.code;
								// that.wxLogin(code);
								let val = {
									'code': loginRes.code,
									'user_code': userInfo.user_code,
									'mobile': res.data.phone_info.purePhoneNumber
								}
								if (query) {
									if (query.role == 'user') {
										val.parent_user_code = query.parent_user_code
									}
								}
								uni.showLoading({
									title: '登录中...'
								});
								wxLogin(val).then(res => {
									if (res.code == 20000) {
										uni.setStorageSync("userInfo", JSON.stringify(res
											.data));
										uni.setStorageSync('memberInfo', JSON.stringify(res.data));
										uni.setStorageSync('loginCode', '')
										if (res.data.is_tutor == 1) { //是否已经绑定导师 1是0否
											uni.navigateBack({ // 返回上一页
												delta: 1
											})
											uni.hideLoading()
										} else {
											that.creatMe(res.data.user_id, res.data.nick_name,
												res.data.avatar_url)
										}
										// uni.getUserInfo({
										// 	provider: "weixin",
										// 	success: res => {
										// 		const userWeiXinAccInfo = res.userInfo;
										// 		console.log(res);
										// 	},
										// 	fail: err => {
										// 		console.log("获取用户信息失败");
										// 	}
										// })

									} else {
										uni.hideLoading()
										that.$api.msg(res.msg)
									}
								}).catch(err => {
									uni.hideLoading()
									that.$api.msg('登录失败')
								})
							}
						});
					})
				}
			},
			toLogin() {

				if (this.selectCheck == 1) {
					let that = this;

				} else {
					this.$api.msg('请先阅读后并同意用户协议和隐私政策')
				}

			},

			creatMe(user_id, name, imgUrl) {
				let data = {
					'user_id': user_id,
					'photo': imgUrl,
					'name': name,
					'greeting': '我是您的孪生数字人，遇事不决的时候，您可以问我，我会给您回答，供您参考，现在开始问我吧！'
				}

				creatMe(data).then(res => {
					if (res.code == 20000) {
						this.batchTutor(user_id, res.data.me_id)
					} else {
						this.$api.msg(res.msg);
						uni.hideLoading()
					}
				}).catch(err => {
					this.$api.msg('创建失败');
					uni.hideLoading()
				})
			},

			//批量绑定导师
			batchTutor(user_id, me_id) {
				batchTutor({
					user_id,
					me_id
				}).then(res => {
					if (res.code == 20000) {
						uni.hideLoading()
						uni.navigateBack({ // 返回上一页
							delta: 1
						})
					} else {
						uni.hideLoading()
						this.$api.msg(res.msg);
					}
				})
			},

			radioChange(evt) {
				this.selectCheck = evt.detail.value[0]
				// console.log(evt);
				this.selectCheck == 1 ? this.getPhoneNumber = 'getPhoneNumber' : this.getPhoneNumber = '1'
			},

			// 游客登录
			guessLogin() {
				let headers = {
					'content-type': 'application/x-www-form-urlencoded',
					'source': 'xcx'
				}

				let val = {
					time: new Date().getTime()
				};
				uni.request({
					url: global.loginUrl + '/api/user/create_temp_user',
					data: val,
					header: headers,
					method: 'POST',
					success: (res) => {
						if (res.data.code == 20000) {
							uni.setStorageSync("userInfo", JSON.stringify(res.data.data));
							uni.setStorageSync("avatarUrl", res.data.data.avatar_url);
						} else {
							console.log('登录失败')
						}
					}
				});
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


			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}
		}
	}
</script>
<style lang='scss' scoped>
	.container {
		background: #fff;
		width: 100%;
		height: 100vh;
		/* padding: 100upx 60upx; */
		padding-top: 100upx;
	}

	.phoneLogin {
		margin-top: 20px;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		/* identical to box height, or 143% */

		text-align: center;

		color: #333333;
	}

	.logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo_img {
		width: 140upx;
		height: 140upx;
	}

	.logo_text {
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 150%;
		color: #333;
		padding: 40upx 0 100upx 0;
	}

	.logo_btn {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #51B13E;
		border-radius: 48upx;
		width: calc(100% - 80upx);

		.btn_img {
			width: 58upx;
			height: 58upx;
			margin-right: 13px;
		}

		.btn_text {
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 500;
			font-size: 32upx;
			line-height: 96upx;
			padding-left: 20upx;
			color: #fff;
		}
	}

	.agree {
		/* // text-align: center; */

		/* position: absolute;
		bottom:100upx;
		left: 0;
		right: 0; */
		padding-top: 30upx;

		.agree_text {
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
</style>