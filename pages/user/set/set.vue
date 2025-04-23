<template>
	<view style="padding-top:30upx;">
		<view class="info">
			<view class="cont" style='border-bottom: 1upx solid #e6e6e8;' @click="toEdit">
				<text class="cont_l">昵称</text>
				<text class="cont_r">{{ userInfo.nick_name}}</text>
			</view>
			<view class="cont">
				<text class="cont_l">手机号</text>
				<text class="cont_r">{{ userInfo.mobile}}</text>
			</view>
			<view class="cont">
				<text class="cont_l">实名认证</text>
				<text class="cont_r" style="color: red;" v-if="userInfo.is_real_name==1" @click="toH5Link">未认证</text>
				<text class="cont_r" v-else>已认证</text>
			</view>
		</view>

		<view class="info" style="margin-top: 20upx;">
			<view class="cont" style='border-bottom: 1upx solid #e6e6e8;' @click="checkSecret">
				<text class="cont_l">隐私政策</text>
				<image class="right_img" src='@/static/images/right.png' />
			</view>
			<view class="cont" style='border-bottom: 1upx solid #e6e6e8;' @click="checkAgree">
				<text class="cont_l">用户协议</text>
				<image class="right_img" src='@/static/images/right.png' />
			</view>
			<view class="cont" @click="checkMz" style='border-bottom: 1upx solid #e6e6e8;'>
				<text class="cont_l">免责声明</text>
				<image class="right_img" src='@/static/images/right.png' />
			</view>
		<!-- 	<view class="cont" >
				<text class="cont_l">版本</text>
				<text class="cont_r">V2.0 2023/05/30</text>
			</view> -->
		</view>

		<view class="btn" @click="logout" v-if="userInfo.role == 'user'">
			<view class="btn_cont">退出登录</view>
		</view>
	</view>

</template>

<script>
	import {
		cardChange,
		getQrCode,
		getCompanyList,
		OperatorStatistics,
		realNameAuthentication,
		getRealNameAuthentication
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg:global.baseImg+'/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				userInfo: ''
			}
		},
		components: {

		},
		onLoad() {

		},
		onShow() {
			this.userInfo = JSON.parse(uni.getStorageSync('memberInfo'));
			console.log(this.userInfo, 4589)
		},
		methods: {
			logout() {
				uni.setStorageSync("userInfo", null);
				// uni.setStorageSync('openid', '');
				uni.redirectTo({
					url: '/pages/login/login',
				})
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

			checkMz() {
				uni.navigateTo({
					url: '/pages/agree/agree?agree_type=3',
				})
			},
			
			toEdit() {
				
				if (this.userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/pages/user/info/info',
					})
				}
			},
			toIdea(){
				uni.navigateTo({
					url:'/childPage/answer/answer'
				})
			},
			toH5Link() {
				console.log('dianjil');
				let val = {
					"path": "", //#  跳转路径，为空跳首页
					"query": "", //# 想要携带的query参数
					"env_version": "" //# 跳转的版本默认release线上
				}
			
				getRealNameAuthentication(val).then(res => {
					if (res.code == 20000) {
						let href = res.data.openlink
						let data = {
							"success_url": href,
							"failed_url": href,
						}
						realNameAuthentication(data).then(res => {
							if (res.code == 20000) {
								uni.setStorageSync('namelink', res.data.url)
								uni.navigateTo({
									url: '/childPage/news/h5Link',
								})
							}
						}).catch(err => {
							this.$api.msg('跳转失败')
						})
			
					}
				}).catch(err => {
					this.$api.msg('跳转失败')
				})
			
			
			
			
			}
			
		}
	}
</script>

<style scoped lang="less">
	page {
		background: #f6f8fb;
	}

	.info {
		width: calc(100% - 50upx);
		padding: 0 25upx;
		background: #fff;
	}

	.cont {
		width: 100%;
		height: 110upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cont_l {
		font-weight: 400;
		font-size: 32upx;
		line-height: 48upx;
		color: #333;
	}

	.cont_r {
		font-weight: 400;
		font-size: 28upx;
		line-height: 48upx;
		color: #333;
	}

	.right_img {
		width: 24upx;
		height: 24upx;
		margin-right: 25upx;
	}

	.btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		margin-top: 25upx;
	}

	.btn_cont {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32upx;
		line-height: 50upx;
		color: #1F64FF;
		padding: 25upx 0;
	}
</style>