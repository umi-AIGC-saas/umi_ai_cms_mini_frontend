<template>
	<view style="margin: 16rpx;">
		<u-search placeholder="搜索你想要的内容" v-model.trim="searchKeyword" shape="square" :showAction='false' bgColor='#fff'
			@change="searchTitle"></u-search>



		<view style="display: flex;justify-content: space-between;">
			<view class="tab">全部功能</view>
			<view style="color: #1F64FF;font-size: 26rpx;line-height: 500%;" @click="toHis">历史记录</view>
		</view>
		<view class="grid" v-if="filterList==''">

			<view class='grid_item' v-for="item,index in contentList" :key="index" @click="goToDraw(item.id)">
				<image class='img' :src="item.vis" mode="widthFix"></image>
				<view class="title">{{item.name}}</view>
			</view>
		</view>
		<view class="grid" v-else>

			<view class='grid_item' v-for="item,index in filterList" :key="index" @click="goToDraw(item.id)">
				<image class='img' :src="item.vis" mode="widthFix"></image>
				<view class="title">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				watchImg: global.baseImg + '/xcx/com/message_center/AI%E8%A7%86%E8%A7%89%E7%AE%A1.png',
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				// 视觉体验馆
				searchKeyword: '',

				contentList: [{
						name: '无忧秘书',
						vis: global.baseImg + '/xcx/com/message_center/能力log.png',
						id:66,
					},
					{
						name: '通义万相',
						vis: global.baseImg + '/xcx/com/message_center/%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE1.png',
						id:13,
					},
					{
						name: '百度绘画',
						vis: global.baseImg + '/xcx/com/message_center/%E6%96%87%E5%BF%83%E4%B8%80%E8%A8%80.png',
						id:3
					},
					{
						name: '火山引擎',
						vis: global.baseImg + '/xcx/com/message_center/%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE.png',
						id:14
					},

				],
				filterList: []
			}
		},

		methods: {
			goToDraw(num) {
				if(num==66){
					uni.switchTab({
						url: '/pages/painting/painting'
					})
				}else{
					uni.setStorageSync('active', num)
					uni.navigateTo({
						url: '/childPage/draw/draw'
					})
				}
			
			},
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			},
			searchTitle(e) {
				if (e) {
					const keyword = this.searchKeyword.toLowerCase();
					this.filterList = this.contentList.filter(item => item.name.toLowerCase().includes(keyword));

				} else {
					this.filterList = this.contentList
					this.$forceUpdate()
				}

			},
			toHis() {
				uni.navigateTo({
					url: '/pages/user/history/history'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr); // 创建两列，每列占满可用空间
		grid-template-rows: repeat(3, 1fr); // 创建三行，每行占满可用空间
		grid-gap: 10px; // 设置格子之间的间距


		.grid_item {
			width: 348upx;
			height: 120upx;
			border-radius: 8upx;
			background: #FFF;
			text-align: center;
			display: flex;
			align-items: center;


			.img {
				width: 82upx;
				height: 40upx;
				margin: 0 24upx;
			}

			.title {
				color: #1D2129;
				text-align: center;
				font-size: 26upx;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			}
		}
	}

	.idea {
		display: flex;
		position: fixed;
		top: 0%;
		right: 4%;
		text-align: center;
		align-items: center;

		image {

			width: 28rpx;
			height: 28rpx;
			margin-right: 6rpx;
		}
	}


	.tab {
		color: #1F64FF;
		text-align: center;
		font-size: 26upx;
		font-weight: 400;
		margin: 48upx 36upx 24upx 0;
	}
</style>