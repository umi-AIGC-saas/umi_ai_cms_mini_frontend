<template>
	<view style="margin: 16rpx;">

		<u-search placeholder="搜索你想要的内容" v-model.trim="searchKeyword" shape="square" :showAction='false' bgColor='#fff'
			@change="searchTitle"></u-search>

		<view style="display: flex;justify-content: space-between;">
			<view class="tab">全部功能</view>
		</view>
		<view class="grid" v-if="filterList==''">

			<view class='grid_item' v-for="item,index in contentList" :key="index" @click="toPages(item)">
				<image class='img' :src="item.vis" mode="widthFix"></image>
				<view class="title">{{item.name}}</view>
			</view>
		</view>
		<view class="grid" v-else>

			<view class='grid_item' v-for="item,index in filterList" :key="index" @click="toPages(item)">
				<image class='img' :src="item.vis" mode="widthFix"></image>
				<view class="title">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getRealNameAuthentication,
		realNameAuthentication,
		putRealName,
		orderList
	} from '@/apis/user.js'
	import {
		getVoiceList
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				voiceNum: 0,
				listNum: 0,
				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				watchImg: global.baseImg + '/xcx/com/message_center/AI%E8%A7%86%E8%A7%89%E7%AE%A1.png',
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				// 视觉体验馆
				searchKeyword: '',

				contentList: [{
						name: '多模型对话',
						id: 1,
						vis: global.baseImg + '/xcx/com/message_center/model.png',
					},
					{
						name: '语音对讲',
						id: 2,
						vis: global.baseImg + '/xcx/com/message_center/语言对讲首页log.png',
					},
					{
						name: '语音合成',
						id: 3,
						vis: global.baseImg + '/xcx/com/message_center/语言对讲.png',
					},
					{
						name: '数字人',
						id: 4,
						vis: global.baseImg + '/xcx/com/message_center/功能数字人定制.png',
					},
					{
						name: 'AI识图',
						id: 5,
						vis: global.baseImg + '/xcx/com/message_center/功能视觉智能馆.png',
					},
					{
						name: '文档对话',
						id: 6,
						vis: global.baseImg + '/xcx/com/message_center/功能文档对话.png',
					},
					{
						name: '看图说话',
						id: 7,
						vis: global.baseImg + '/xcx/com/message_center/功能人像抠图.png',
					}, {
						name: '人像融合',
						id: 8,
						vis: global.baseImg + '/xcx/com/message_center/功能人像融合.png',
					}, {
						name: '声音克隆',
						id: 9,
						vis: global.baseImg + '/xcx/com/message_center/clone.png',
					}, {
						name: 'AI知识库',
						id: 10,
						vis: global.baseImg + '/xcx/com/message_center/AI知识库icon.png',
					}

				],
				filterList: []
			}
		},
		onShow() {
			this.getrealName()
			this.getOrderList();
			this.getHumanList()
		},

		methods: {
			// 获取声音克隆对话列表
			getOrderList() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'prod_cate_id': '9',
					'status': 0,
					'order_id': '',
					'page_index': 1,
					'page_count': 10
				}
				orderList(val).then(res => {
					if (res.code == 20000) {
						this.voiceNum = res.data.filter(item => item.status === '2');
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取订单信息失败');
				})
			},
			// 获取声音列表
			getHumanList() {
				let val = {
					page_size: 10,
					page: 1,
					voice_name: '',
					voice_status: ''
				}
				getVoiceList(val).then(res => {
					if (res.code == 20000) {
						this.listNum = res.data.data
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			
			getrealName() {
				let val = {
					verify_token: uni.getStorageSync('verify_token')
				}
				putRealName(val).then(res => {}).catch()
				uni.setStorageSync('verify_token', '')
			},
			toPages(item) {
				let id = item.id
				if (id == 1) {
					uni.navigateTo({
						url: '/childPage/multi_model/multi_model_next'
					})
				} else if (id == 2) {
					uni.navigateTo({
						url: '/childPage/voice/voice_page',
					})
				} else if (id == 3) {
					uni.navigateTo({
						url: '/childPage/speech/speech_merge',
					})
				} else if (id == 4) {
					uni.navigateTo({
						url: '/childCont/figure/figure',
					})
				} else if (id == 5) {
					uni.navigateTo({
						url: '/childPage/chat/camera?chatValue=' + '' + '&source=1'
					})
				} else if (id == 6) {
					uni.navigateTo({
						url: '/childPage/document/document_chat',
					})
				} else if (id == 7) {
					uni.navigateTo({
						url: '/childPage/discern/discern'
					})
				} else if (id == 8) {
					uni.navigateTo({
						url: '/childPage/vision/merge'
					})
				} else if (id == 9) {
					let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
					if (memberInfo.is_real_name == 1) {
						this.toH5Link()
						return
					}
					if (this.voiceNum.length - this.listNum.length > 0) {
						uni.navigateTo({
							url: '/childCont/clone/my_voice'
						})
					} else {
						uni.navigateTo({
							url: '/childCont/clone/pay_clone'
						})
					}
				} else if (id == 10) {
					uni.navigateTo({
						url: '/childCont/repository/repository'
					})
				}
			},
			toH5Link() {
				uni.showModal({
					title: '提示',
					content: '使用该功能需实名认证，点击确定进行实名',
					success(res) {
						if (res.confirm) {
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
				})


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
					url: '/childPage/vision/history_text?chat_type=21'
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
				width: 78upx;
				height: 40upx;
				margin: 0 11upx;
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