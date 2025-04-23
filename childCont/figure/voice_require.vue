<template>
	<view>
		<view style="padding: 32upx;">
			<view style="padding: 32upx;background-color: #fff;">
				<view class="title">
					<view class="left"></view>
					<view class="right">录制流程及要求</view>
				</view>
				<view class="title2">01.录音准备</view>
				<view class="content">
					<view class="left"></view>
					<view class="right">根据不同使用需求，准备5000字左右的文本内容；</view>
				</view>
				<view class="content">
					<view class="left"></view>
					<view class="right">调整好与麦克风之间的距离。</view>
				</view>
				<view class="title2">02.开始录音</view>
				<view class="content">
					<view class="left"></view>
					<view class="right">无背景音和杂音情况下开始收音；</view>
				</view>
				<view class="content">
					<view class="left"></view>
					<view class="right">发音、吐字注意清晰句与句之间停顿好。</view>
				</view>
				<view class="title2">03.录音结束并提交</view>
				<view class="content">
					<view class="left"></view>
					<view class="right">录音结束后可在线上传文件或把源文件提供给工作人员。</view>
				</view>
				
				<view class="title2">04.克隆模型交付</view>
				<view class="content">
					<view class="left"></view>
					<view class="right">从接受数据开始基本在3-5个工作日交付。</view>
				</view>
				<view class="title">
					<view class="left"></view>
					<view class="right">录制流程及要求</view>
				</view>
				<view class="requireItem">
					<view class="top">音频时长</view>
					<view class="bottom">有效音频时长≥20分钟</view>
				</view>
				<view class="requireItem">
					<view class="top">录音环境</view>
					<view class="bottom">噪音建议≤40dB</view>
				</view>
				<view class="requireItem">
					<view class="top">录音设备</view>
					<view class="bottom">推荐使用降噪麦克风</view>
				</view>
				<view class="requireItem">
					<view class="top">录音人</view>
					<view class="bottom">应与麦保持距离，防制喷麦和录入呼吸声</view>
				</view>
				<view class="requireItem">
					<view class="top">录音和录音参数</view>
					<view class="bottom">推荐无损音质格式保存音频，如wav、mp3</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.title{
	display: flex;
	align-items: center;
	margin: 32upx 0;
	.left{
		width: 6upx;
		height: 32upx;
		background-color: #1F64FF;
		margin-right: 20upx;
		}
		.right{
			color: #393E45;
			font-size: 32upx;
			font-weight: 600;
			line-height: 150%;
		}
}
.title2{
	color: #1F64FF;
	font-size: 28upx;
	font-weight: 600;
	line-height: 150%;
}
.content{
	display: flex;
	margin: 26upx 0;
	.left
	{
		width: 10upx;
		height: 10upx;
		border-radius: 50%;
		background-color: #333;
		margin: 18upx 20upx 0 0;
	}
	.right{
		color: #393E45;
		font-size: 24upx;
		font-weight: 400;
		line-height: 150%;
	}
}
.requireItem{
	padding: 32upx;
	border:3upx solid #f0f0f0;
	display: flex;
	 flex-direction: column;
	 justify-content: space-between;
	 border-radius: 20upx;
	 margin-bottom: 20upx;
	 .top{
		 margin-bottom: 24upx;
		 color: #262626;
		 font-size: 28upx;
		 font-weight: 600;
		 line-height: 150%; 
	 }
	 .bottom{
		 color: #262626;
		 font-size: 12px;
		 font-weight: 400;
		 line-height: 150%; 
	 }
}
</style>
