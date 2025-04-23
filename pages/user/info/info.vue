<template>
	<view class="containar">
		<view class="avatarUrl">
			<button type="balanced" open-type="chooseAvatar" @chooseavatar="onChooseavatar">
				<image :src="avatar_url" class="refreshIcon"></image>
			</button>
		</view>
		<view class="userName">
			<text class="user_title">昵称：</text>
			<input type="nickname" class="weui-input" :value="userName" @blur="bindblur" placeholder="请输入昵称"
				@input="bindinput" />
		</view>

		<view class="btn">
			<view class="btn-sub" @click="onSubmit">保存</view>
		</view>
	</view>
</template>
<script>
	import {
		editInfo
	} from '@/apis/chat.js'
	export default {
		data() {
			return {
				ideaImg:global.baseImg+'/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				// avatarUrl: '',
				userName: '',
				avatar_url: '',
				up_url: ''
			};
		},
		onLoad(option) {
			
		},
			
		onShow() {
			let avatar = uni.getStorageSync("avatarUrl");
			let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
			this.avatar_url = global.baseImg+'/'+ avatar;
			this.userName = memberInfo.nick_name;
			this.up_url = avatar;
		},
		methods: {
				
			bindblur(e) {
				this.userName = e.detail.value; // 获取微信昵称
			},
			bindinput(e) {
				this.userName = e.detail.value; // 获取微信昵称
			},
			onChooseavatar(e) {
				let {
					avatarUrl
				} = e.detail;
				// this.avatar_url= avatarUrl
				this.uploadImg(avatarUrl)
			},
			
			// 上传图片
			uploadImg(val) {
				let that = this;
				uni.uploadFile({
					url: global.loginUrl + '/api/user/oss_upload', 
					filePath: val,
					name: 'image',
					formData: {
						"image": val,
						"oss_dir": 'static',
						"cate": 'create_character'
					},
					success: (uploadFileRes) => {
						let imgData = JSON.parse(uploadFileRes.data)
						if(imgData.code == 20000) {
							let url = imgData.data.new_url
							this.avatar_url = global.baseImg+'/'+url
							this.up_url = url
						} else {
							that.$api.msg(imgData.msg)
						}
					}
				});
			},
			
			onSubmit() {
				let val = { "avatar_url": this.up_url, "user_name": this.userName }
				editInfo(val).then(res => {
					if (res.code == 20000) {
					   this.$api.msg('保存成功');
					   setTimeout(() => {
					   	uni.switchTab({
					   		url: '/pages/user/user'
					   	})
					   }, 1500)
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					// this.$api.msg('获取信息失败');
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
<style lang="scss" scoped>
	.containar {
		.avatarUrl {
			padding: 80rpx 0 40rpx;
			background: #fff;

			button {
				background: #fff;
				line-height: 80rpx;
				height: auto;
				border: none !important;
				width: auto;
				// padding: 20rpx 30rpx;
				margin: 0;
				display: flex;
				border: none;
				justify-content: center;
				align-items: center;

				&::after {
					border: none;
				}

				.refreshIcon {
					width: 160rpx;
					height: 160rpx;
					border-radius: 50%;
					background-color: #ccc;
				}

				.jt {
					width: 14rpx;
					height: 28rpx;
				}
			}
		}

		.userName {
			background: #fff;
			padding: 20rpx 30rpx;
			display: flex;
			align-items: center;
			border-top: 1rpx solid #f5f5f5;
			border-bottom: 1rpx solid #f5f5f5;
            .user_title {
				color: #333;
				font_size: 28rpx;
			}
			.weui-input {
                padding-left: 30rpx;
				font-size: 28rpx;
			}
		}

		.btn {
			width: 100%;
			.btn-sub {
				width: 80%;
				margin: 80rpx auto 0;
				height: 90rpx;
				background: #1F64FF;
				border-radius: 45rpx;
				line-height: 90rpx;
				text-align: center;
				font-size: 36rpx;
				color: #fff;
			}
		}
	}
</style>
