<template>
	<!-- 历史记录 -->
	<view class='main'>
		<!-- 个人信息 -->
		<view class="my">
			<image :src="avatar" mode=""></image>
			<text>{{ userInfo.nick_name }}</text>
		</view>
		<!-- 数字分身数据详情/统计 -->
		<view class="detail">
			<view>
				<view>{{ totals.total_visits }}</view>
				<view>访问次数</view>
			</view>
			<view>
				<view>{{ totals.total_interactions }}</view>
				<view>互动次数</view>
			</view>
			<view>
				<view>{{ totals.total_comments }}</view>
				<view>留言次数</view>
			</view>
		</view>
		<!-- 折线图表1 -->
		<view class="chart">
			<view class="chart-title">
				<view>分享记录</view>
				<view>近5日</view>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="column" :opts="opts1" :chartData="chartData1" />
			</view>
		</view>
		<!-- 饼图表2 -->
		<view class="chart">
			<view class="chart-title">
				<view>互动分析</view>
				<view>所有</view>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="pie" :opts="opts2" :chartData="chartData2" />
			</view>
		</view>
		<view class="bottom" @click="toPage">进入留言板</view>
	</view>
</template>

<script>
	import {
		getStats
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				model_id: '',
				chartData1: {},
				chartData2: {},
				opts1: {
					type: "line",
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					legend: {},
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2
					},
					extra: {
						line: {
							type: "straight",
							width: 2,
							activeType: "hollow"
						}
					}
				},
				opts2: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 10, 0, 15],
					legend: {
						show: true
					},
				},
				avatar: '',
				userInfo: '',
				totals: '',
				
			}
		},
		onLoad(option) {
			console.log(option.model_id, 558)
			if (option.model_id) {
				this.model_id = option.model_id
			}
		},
		onShow() {
			this.getServerData();
			this.avatar = global.baseImg + '/'+ uni.getStorageSync("avatarUrl");
			this.userInfo = JSON.parse(uni.getStorageSync("userInfo"));
		},
		methods: {
			// 获取数据，构建图表
			getServerData() {
				let val = {
					'model_id': this.model_id,
					'start_date': '',
					'end_date': ''
				}
				getStats(val).then(res => {
					if (res.code == 20000) {
						this.totals = res.data.totals
						this.chartData1 = res.data.visit_chart
						this.chartData2 = res.data.pie_chart
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
				// setTimeout(() => {
				// 	//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				// 	let res = {
				// 		categories: ["2018", "2019", "2020", "2021", "2022", "2023"], //x轴数据点
				// 		series: [{
				// 			name: "",
				// 			data: [35, 8, 25, 37, 4, 20]
				// 		}, ]
				// 	};
				// 	let bing = {
				// 		series: [{
				// 				name: '2018',
				// 				data: 35
				// 			},
				// 			{
				// 				name: '2019',
				// 				data: 8
				// 			},
				// 			{
				// 				name: '2020',
				// 				data: 25
				// 			},
				// 			{
				// 				name: '2021',
				// 				data: 37
				// 			},
				// 			{
				// 				name: '2022',
				// 				data: 4
				// 			},
				// 			{
				// 				name: '2023',
				// 				data: 20
				// 			},
				// 		]
				// 	}
				// 	this.chartData1 = JSON.parse(JSON.stringify(res));
				// 	this.chartData2 = JSON.parse(JSON.stringify(bing));
					

				// }, 500);
			},
			// 跳转留言板页面
			toPage() {
				uni.navigateTo({
					url: '/childCont/digital/message_digital?model_id=' + this.model_id
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.main {
		width: 100vw;
		height: 100vh;
		padding: 10px 40rpx;
		box-sizing: border-box;
		position: relative;

		.my {
			width: 100%;
			display: flex;
			align-items: center;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-right: 30rpx;
			}
		}

		.detail {
			width: 100%;
			padding: 0px 30rpx;
			margin-top: 30rpx;
			border-radius: 8rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;

			>view {
				display: flex;
				justify-content: center;
				flex-direction: column;
				text-align: center;

				view:last-child {
					margin-top: 15rpx;
				}
			}
		}

		.chart {
			width: 100%;
			margin: 30rpx 0px;

			.chart-title {
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;
			}

			.charts-box {
				width: 100%;
				height: 320rpx;
			}
		}

		.bottom {
			width: 60%;
			padding: 14rpx 0rpx;
			position: absolute;
			bottom: 40rpx;
			left: 50%;
			transform: translate(-50%, 0%);
			background: rgb(31, 100, 255);
			color: #FFF;
			border-radius: 16rpx;
			text-align: center;
		}
	}
</style>