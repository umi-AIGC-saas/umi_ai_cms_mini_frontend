<template>
	<view>
		<view class="container">
			<view class="suc_img">
				<image class="li_img" :src="successImg" mode="aspectFit"></image>
				<text class="li_status" v-if="edit == 1">创建成功</text>
				<text class="li_status" v-if="edit == 2">修改成功</text>
				<!-- <text class="li_text">丰富数字分身信息，聊天会更加有趣</text> -->
				<text class="li_text">分身制作中，可前往记录查看</text> 
				<!-- <view class="li_btn">
					<view class="btn_l" @click="toIndex()">立即对话</view>
				</view>
				<view class="li_btn" style="margin-top: 35rpx;">
					<view class="btn_l" style="background-color: rgb(31, 100, 255);color: #FFF;;" @click="toEdit()">丰富数字分身</view>
				</view> -->
				<view class="li_btn" style="margin-top: 35rpx;">
					<view class="btn_l" style="background-color: rgb(31, 100, 255);color: #FFF;;" @click="toHistory()">返回首页</view>
				</view>
			</view>
		</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				successImg: global.baseImg + '/xcx/com/message_center/done.png',
				edit: 1
			}
		},
		onLoad(option) {
            if(option.edit) {
				this.edit = option.edit
			}
		},
		onShow() {
			
		},
		methods: {
			toIndex() {
				uni.navigateTo({
					url: '/childCont/digital/chat',
				})
			},
			toEdit() {
				uni.navigateTo({
					url: '/childCont/digital/edit_digital',
				})
			},
			
			toHistory() {
				uni.switchTab({
					url: '/pages/index/index',
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 100%;
		height: 100vh;
	}
	.suc_img {
		margin-top: 60rpx;
		width: 100%;
		padding: 20upx 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		.li_img {
			width:180upx;
			height: 180upx;
			position: relative;
			left: 50%;
			transform: translate(-50%);
		}
		.li_status {
			color: #000;
			font-size: 38upx;
			font-style: normal;
			font-weight: 500;
			line-height: 52upx;
		}
		.li_text {
			color: #575859;
			font-size: 28upx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			padding: 20upx;
			text-align: center;
		}
		.li_btn {
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 100%;
			margin-top: 10upx;
			.btn_l {
				width: 40%;
				border-radius: 10upx;
				border: 3upx solid #1F64FF;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #1F64FF;
				font-size: 30upx;
				font-style: normal;
				font-weight: 500;
				line-height: 48upx;
				padding: 15upx 0;
			}
			
			.btn_r {
				width: 40%;
				border-radius: 10upx;
				border: 3upx solid #1F64FF;
				background: #1F64FF;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				font-size: 30upx;
				font-style: normal;
				font-weight: 500;
				line-height: 48upx;
				padding: 15upx 0;
			}
		}
	}
	
</style>