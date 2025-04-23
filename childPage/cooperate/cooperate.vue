<template>
	<view class="cooperate">
		<u-list :height="scrollHeight" :scrollTop="scrollTop">
			<view class="info">
				<u-row gutter="10">
					<u-col span="2" align="center" textAlign="center">
						<image :src="tipImg" mode=""></image>
					</u-col>
					<u-col span="10">
						<view class="infoTitle">
							城市运营商
						</view>
						<view class="content">
							诚招各城市有能力的合作伙伴，一起拓展市场
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="info">
				<u-row gutter="10">
					<u-col span="2" align="center" textAlign="center">
						<image :src="tipImg1" mode=""></image>
					</u-col>
					<u-col span="10">
						<view class="infoTitle">
							源码定制开发
						</view>
						<view class="content">
							定制开发 Al智能软件：PC、H5、公众号、小程序
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="info">
				<u-row gutter="10">
					<u-col span="2" align="center" textAlign="center">
						<image :src="tipImg2" mode=""></image>
					</u-col>
					<u-col span="10">
						<view class="infoTitle">
							API接口
						</view>
						<view class="content">ChatGLM、文心一言、讯飞星火、Stable Diffusion、
							Midjourney、百度绘画、360智脑、通义千问、通义万相、火山引擎绘画</view>
					</u-col>
				</u-row>
			</view>

			<view class="information">
				<u-row>
					<u-col span="3">
						<view class="title">
							<text class="title_l">*</text>
							<text class="title_r">合作类型</text>
						</view>
					</u-col>
					<u-col span="9" @click="inputClick">
						<u-input :customStyle='{"background":"#F6F8FB","padding":"20upx","height": "30px"}'
							v-model="type" border="none" placeholder="请选择合作类型" type="text" disabled>
							<template slot="suffix">
								<image class="lists_img right_img" src='@/static/images/right.png' />
							</template>
						</u-input>
					</u-col>
				</u-row>
			</view>

			<view class="information">
				<u-row>
					<u-col span="3">
						<view class="title">
							<text class="title_l">*</text>
							<text class="title_r">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</text>
						</view>
					</u-col>
					<u-col span="9">
						<u-input :customStyle='{"background":"#F6F8FB","padding":"20upx","height": "30px"}'
							v-model="userName" border="none" placeholder="请输入您的姓名" type="text"></u-input>
					</u-col>
				</u-row>
			</view>

			<view class="information">
				<u-row>
					<u-col span="3">
						<view class="title">
							<text class="title_l">*</text>
							<text class="title_r">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</text>
						</view>
					</u-col>
					<u-col span="9">
						<u--input :customStyle='{"background":"#F6F8FB","padding":"20upx","height": "30px"}'
							v-model="phone" border="none" placeholder="请输入您的电话" type="text"></u--input>
					</u-col>
				</u-row>
			</view>
			<view class="information">
				<u-row align="top">
					<u-col span="3">
						<view class="title">

							<text class="title_r">合作意向</text>
						</view>
					</u-col>
					<u-col span="9">
						<u-textarea :customStyle='{"background":"#F6F8FB","padding":"20upx"}' v-model="remark"
							border="none" placeholder="请输入您的合作意向" type="text" @focus='keyboardheightchange'
							:showConfirmBar='false'></u-textarea>
					</u-col>
				</u-row>
			</view>

			<u-button @click="submit()" color="#1F64FF" class="btn_cont">提交</u-button>
		</u-list>

		<u-popup :show="show" :round="10" :customStyle='{"hieght":"700rpx"}'>
			<scroll-view scroll-y="true">
				<view class="popupBox">
					<view class="box" v-for='item,index in list' :key="index" @click="boxClick(item)">
						{{item.name}}
					</view>

					<view class="box" @click="show = false">
						取消
					</view>
				</view>
			</scroll-view>

		</u-popup>
	</view>
</template>

<script>
	import {
		business
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				list: [{
						name: "城市运营商",
						id: '1'
					},
					{
						name: "源码定制开发",
						id: '2'
					},
					{
						name: "API 接口",
						id: '3'
					},
					{
						name: "服务商",
						id: '20'
					},
					{
						name: 'AI数字人虚拟直播系统',
						id: '10'
					}, {
						name: '无人直播伴侣',
						id: '11'
					}, {
						name: '短视频矩阵SEO',
						id: '12'
					}, {
						name: 'AI 能力定制',
						id: '13'
					}, {
						name: '企业/行业数字员工',
						id: '14'
					}, {
						name: '企业/行业AI能力定制开发',
						id: '15'
					}, {
						name: '基于 AIGC 的能力定制',
						id: '16'
					}
				],
				scrollTop: 0,
				scrollHeight: 0,
				userName: '',
				type: "",
				typeId: "",
				phone: '',
				remark: '',
				isClick: true,
				show: false,
				tipImg: global.baseImg + '/xcx/fe335c4b-832e-4ed8-92ad-de0001176c82.jpg',
				tipImg1: global.baseImg + '/xcx/a734d928-48a6-41de-ae8e-41cbc8f355b7.jpg',
				tipImg2: global.baseImg + '/xcx/c1635dc1-ff1f-4bdf-aeb4-64da573f86a5.jpg',
			}
		},
		components: {

		},
		onLoad() {
			console.log(uni.getSystemInfoSync().windowHeight - uni.upx2px(80),
				'uni.getSystemInfoSync().windowHeight');

			// this.scrollHeight = uni.getSystemInfoSync().windowHeight - uni.upx2px(80)
		},
		// onShow() {
		// 	uni.onKeyboardHeightChange((res) => {
		// 		console.log('软键盘高度：' + res.height)
		// 		if (res.height != 0) {
		// 			this.scrollHeight = this.scrollHeight - res.height 
		// 			this.scrollTop = this.scrollHeight
		// 			console.log(this.scrollTop, 'this.scrollTop ', this.scrollHeight);
		// 		} else {
		// 			this.scrollHeight = uni.getSystemInfoSync().windowHeight - uni.upx2px(80)
		// 			console.log(this.scrollHeight,'this.scrollHeight');
		// 		}
		// 	})
		// },
		methods: {
			inputClick() {
				console.log(123);
				this.show = true
			},
			keyboardheightchange(e) {
				console.log(e, '高度');

			},
			boxClick(item) {
				console.log(item, 'item');
				this.type = item.name
				this.typeId = item.id
				this.show = false
			},
			submit() {
				if (this.userName == "") {
					this.$api.msg('姓名不能为空！');
					return
				}

				if (this.phone == "") {
					this.$api.msg('手机号不能为空！');
					return
				}

				var TEL_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
				if (!TEL_REGEXP.test(this.phone)) {
					this.$api.msg('手机号格式不正确！');
					return
				}

				if (this.isClick == false) {
					return false;
				}
				this.isClick = false;
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				let val = {
					"user_id": userInfo.user_id,
					'name': this.userName,
					'phone': this.phone,
					'details': this.remark,
					"type": this.typeId,
				}

				business(val).then(res => {
					if (res.code == 20000) {
						// console.log(JSON.stringify(res.data),789);
						uni.showToast({
							title: '提交成功',
							icon: 'success',
							duration: 1500
						})
						this.userName = '';
						this.phone = '';
						this.remark = '';
						this.isClick = true;
						this.type = ''
					} else {
						this.isClick = true;
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.isClick = true;
					this.$api.msg('信息提交失败');
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
<style>
	page {
		background: #fff;

	}
</style>
<style scoped lang="less">
	.cooperate {
		padding: 16px;
	}

	.popupBox {
		height: 900rpx;
		font-size: 17px;

		.box {
			height: 56px;
			text-align: center;
			line-height: 56px;
			border-bottom: 1px solid #e3e5e7;

			&:nth-last-child(2) {
				border-bottom: 5px solid #e3e5e7;
			}

			&:last-child {
				border: none;
			}
		}
	}

	.info {
		// height: 84px;
		width: calc(100% - 60upx);
		background: #F6F8FB;
		font-size: 28upx;
		border-radius: 8upx;
		padding: 20upx;
		margin-bottom: 20upx;

		.infoTitle {
			font-weight: 500;
			color: #303030;
		}

		.content {
			color: #51565D;
			font-size: 28upx;
		}

		image {
			width: 60upx;
			height: 60upx;
		}
	}

	.information {
		/deep/.u-row {
			margin-bottom: 30upx;
		}
	}

	.title {
		display: flex;
		align-items: center;
		font-weight: 500;
		font-size: 34upx;
		line-height: 40upx;
		// padding: 20upx 41upx;
		color: #333333;
	}

	.title_l {
		color: #EB504B;
	}

	.title_r {
		color: #333;
		font-size: 28upx;
		// margin-left: 5upx;
	}

	.cont {
		background: #fff;
		height: 90upx;
		padding: 0 32upx;
		display: flex;
		align-items: cener;

	}

	.conts {
		background: #fff;
		height: 200upx;
		padding: 20upx 32upx;
		/* display: flex; */
		/* align-items: cener; */

	}

	.btn {
		position: fixed;
		bottom: 100upx;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.btn_cont {
		width: 80%;
		height: 80upx;
		background: #1F64FF;
		border-radius: 40upx;
		color: #fff;
		font-weight: 500;
		font-size: 26upx;
		line-height: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right_img {
		width: 24upx;
		height: 24upx;
		// margin-right: 25upx;
	}
</style>