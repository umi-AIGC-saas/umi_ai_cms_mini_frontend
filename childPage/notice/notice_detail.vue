<template>
	<view style="padding-top:30upx;">
		<view class="cont">
			<rich-text :nodes="messageInfo.content"></rich-text>
		</view>

	</view>
</template>

<script>
	import {
		getMessageDetail
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				// userInfo: '',
				message_id: 0,
				messageInfo: ''
			}
		},
		components: {

		},
		onLoad(option) {
			this.message_id = option.message_id
			console.log(this.message_id, 56)
		},
		onShow() {
			// this.userInfo = JSON.parse(uni.getStorageSync('memberInfo'));
			// console.log(this.userInfo, 4589)
			this.getMessageDetail()
		},
		methods: {
			// 获取公告详情
			getMessageDetail() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'message_id': this.message_id
				}
				getMessageDetail(val).then(res => {
					if (res.code == 20000) {
						this.messageInfo = res.data[0];
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取订单信息失败');
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

<style scoped lang="less">
	page {
		background: #f6f8fb;
	}

	.cont {
		background: #fff;
		padding: 30upx;
		min-height: calc(100vh - 30upx);
	}
</style>