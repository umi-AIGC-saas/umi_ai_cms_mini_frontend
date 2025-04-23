<template>
	<view id="pag_top" style="background-color: #F2F7FE;">
		<u-tabs :list="list" lineWidth='50' lineHeight='3' lineColor='#1f64ff'
			:activeStyle='{color: "#1F64FF","font-size":"30rpx"}' @change='tabsChange' :current='current'
			:inactiveStyle='{"font-size":"30rpx"}' :itemStyle='{"background":"#fff","height":"88rpx"}'></u-tabs>
		<scroll-view scroll-y="true" v-if="aiInforList.length>0">
			<view class="item_infor" @click='contentChange(item.message_id)' v-for="item in aiInforList"
				:key="item.message_id">
				<view class="left">
					<view class="content"> {{item.title}} </view>
					<!-- <ua-markdown :source="item.title" :showLine="false"/> -->
					<view class="bottom">
						<text class="time">{{item.create_time.slice(0,11)}}</text>
						<view class="right">
							<text class="page_view">阅读{{item.read_count}}</text>
							<text class="like">点赞{{item.like_count}}</text>
						</view>
					</view>
				</view>
				<view class="right" v-if="item.image">
					<image class="img" :src="item.image" mode="widthFix" />
				</view>
			</view>
			<view class="top_btn" v-if="isCreat" @click="toTop">
				<image class="icon_img" :src='topImg' />
			</view>
		</scroll-view>
		<view class="on_order" v-else>
			<image class="order_img" :src="backImg"></image>
		</view>
	</view>
</template>

<script>
	import {
		getapplication
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				aiInforList: [],
				allList: [],
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				topImg: global.baseImg + '/xcx/com/message_center/dingbu.png',
				backImg: global.baseImg + '/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg',
				isCreat: false,
				current: 0,
				list: [{
						name: '趣闻轶事'
					}, {
						name: '免费资源'
					},
					{
						name: '垂直应用'
					}, {
						name: '算力分享'
					},
					{
						name: '大模型'
					}, {
						name: 'AI绘画'
					},
					{
						name: '元宇宙'
					}, {
						name: 'AIGC'
					},
					{
						name: 'AGI'
					},
				]
			};
		},

		async onShow() {
			await this.getapplication()
			this.aiInforList = this.allList.filter(item => {
				return item.cate == "fun"
			})
			
			let name=uni.getStorageSync('newName')
			if (name == '趣闻轶事') {
				this.current = 0,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "fun"
					})
			} else if (name == '免费资源') {
				this.current = 1,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "free_resources"
					})
			} else if (name == '垂直应用') {
				this.current = 2,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "applications"
					})
			} else if (name == '算力分享') {
				this.current = 3,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "hashrates_share"
					})
			} else if (name == '大模型') {
				this.current = 4,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "llm"
					})
			} else if (name == 'AI绘画') {
				this.current = 5,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "drawing"
					})
			} else if (name == '元宇宙') {
				this.current = 6,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "meta_universe"
					})
			} else if (name == 'AIGC') {
				this.current = 7,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "AIGC"
					})
			} else if (name == 'AGI') {
				this.current = 8,
					this.aiInforList = this.allList.filter(item => {
						return item.cate == "AGI"
					})
			}
			uni.setStorageSync('newName','')
		},
		onPageScroll(e) {
			if (e.scrollTop > 650) {
				this.isCreat = true
			} else {
				this.isCreat = false
			}
		},
		methods: {
			// 获取ai资讯列表
			async getapplication() {

				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));

				let data = {
					user_id: userInfo.user_id,
					message_type: 2
				}
				const res = await getapplication(data)
				this.allList = res.data

			},
			tabsChange(e) {
				let name = e.name
				if (name == '趣闻轶事') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "fun"
						})
				} else if (name == '免费资源') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "free_resources"
						})
				} else if (name == '垂直应用') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "applications"
						})
				} else if (name == '算力分享') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "hashrates_share"
						})
				} else if (name == '大模型') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "llm"
						})
				} else if (name == 'AI绘画') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "drawing"
						})
				} else if (name == '元宇宙') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "meta_universe"
						})
				} else if (name == 'AIGC') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "AIGC"
						})
				} else if (name == 'AGI') {
					this.current = 0,
						this.aiInforList = this.allList.filter(item => {
							return item.cate == "AGI"
						})
				}
			},
			// 跳转到内容详情
			contentChange(id) {
				uni.navigateTo({
					url: '/childPage/news/information_content?message_id=' + id,
				})
			},
			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},
			//回到顶部
			toTop() {
				uni.createSelectorQuery().select("#pag_top").boundingClientRect(res => { //最外层盒子的节点：类或者id
					uni.pageScrollTo({
						duration: 100, //过渡时间
						scrollTop: 0, //到达距离顶部的top值
					})
				}).exec()
			},

			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style lang="less">
	.item_infor {
		width: 100%;
		// height: 160upx;
		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
		margin-top: 38upx;
		padding: 32upx;
		background-color: #fff;


		.left {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-grow: 1;
			margin-right: 60upx;

			.content {
				color: #333;
				font-size: 28upx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				/* 21px */
			}

			.bottom {
				margin-top: 50upx;
				color: #A6A6A6;
				font-size: 24upx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				display: flex;
				justify-content: space-between;

				/* 18px */
				.page_view {
					margin-right: 32upx;
				}
			}
		}

		.right {
			// width: 236upx;
			// height: 160upx;
			margin-right: 32upx;
			z-index: 999;

			.img {
				width: 236upx;
				height: 160upx;
			}
		}
	}

	.top_btn {
		position: fixed;
		bottom: 100upx;
		right: 20upx;
		z-index: 9999;

		.icon_img {
			width: 100upx;
			height: 100upx;
		}
	}

	.on_order {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
	}

	.order_img {
		width: 450upx;
		height: 450upx;

	}
</style>