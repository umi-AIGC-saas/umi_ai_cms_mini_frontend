<template>
	<view>
		<view class="top_cont">
			<view class="tab_li">
				<u-tabs :list="tablist" lineWidth='45' lineHeight='2' lineColor='#1f64ff'
					:activeStyle='{color: "#1F64FF","font-size":"30rpx"}' @change='tabsChange' :current='current'
					:inactiveStyle='{"font-size":"30rpx"}'></u-tabs>
			</view>
			<view class="search_cont">
				<view class="search">
					<image class="search_img" src="@/static/user/search.png"></image>
					<input v-model="searchValue" placeholder="请输入订单编号" type="text" class="search_input"
						@input="search" />
				</view>
				<view class="cont_tabs">
					<view class="tabs_l">
						<view @click="version(0)" :class="[active == 0 ? 'active_tabs' : 'tabs']">全部</view>
					</view>
					<view class="tabs_l">
						<view @click="version(1)" :class="[active == 1 ? 'active_tabs' : 'tabs']">待付款</view>
					</view>
					<view class="tabs_l">
						<view @click="version(2)" :class="[active == 2 ? 'active_tabs' : 'tabs']">已付款</view>
					</view>
					<view class="tabs_l">
						<view @click="version(4)" :class="[active == 4 ? 'active_tabs' : 'tabs']">已过期</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 历史对话内容 -->
		<view class="chat_cont">
			<scroll-view class="list_ul" scroll-y="true" v-if="orderList.length > 0">
				<view class="ul_style" v-for="(item, index) in orderList" :key="index">
					<view class="li_style">
						<view class="li_top">
							<text class="top_l">订单号：{{ item.order_id }}</text>
							<text class="top_r">{{ item.created_at.slice(0,10) }}</text>
						</view>
						<view class="li_btn">金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额：￥{{ item.total_amount }}</view>
						<view class="li_bom">
							<view class="bom_l">套&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;餐：{{ item.prod_name }}</view>
							<view class="bom_r">
								<text class="r_btn" v-if="item.status == 1">待付款</text>
								<text class="r_btn_stop" v-if="item.status == 2">已付款</text>
								<text class="r_btn_gq" v-if="item.status == 4">已过期</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

			<view class="on_order" v-else>
				<image class="order_img" :src="backImg"></image>
			</view>

			<view class="on_order_list" v-if="loadingType == 1">没有更多内容了!</view>
		</view>
	</view>
</template>

<script>
	import {
		orderList
	} from '@/apis/user.js'
	import {
		getVoiceCount,
		getVoiceList
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				active: 0,
				searchValue: '',
				loadingType: 0,
				page_no: 1,
				page_count: 10,
				orderList: [],
				pageTotal: 0,
				backImg: global.baseImg + '/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg',

				tablist: [{
						name: '我的声音',
						index: 1
					}, {
						name: '声音克隆',
						index: 2
					},
					{
						name: '合成配音',
						tip: 3
					},
					{
						name: '订单记录',
						tip: 4
					}
				],
				current: 3,
				voiceCount: 0,
				voiceNum: 0,
				listNum: 0,
			}
		},
		components: {

		},
		onLoad() {
           this.current = 3
		},
		onShow() {
			this.getOrderList();
			this.getVoiceCount()
			this.getHumanList()
		},
		methods: {
			
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
						this.listNum=res.data.data
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			
			tabsChange(e) {
				this.current = e.index
				if (this.current == 0) {
					uni.navigateTo({
						url: '/childCont/clone/my_voice'
					})
				} else if (this.current == 1) {
					
					if (this.voiceNum.length-this.listNum.length>0) {
						uni.navigateTo({
							url: '/childCont/clone/voice_clone',
						})
					} else {
						uni.navigateTo({
							url: '/childCont/clone/pay_clone'
						})
					}
				} else if (this.current == 2) {
					uni.navigateTo({
						url: '/childCont/clone/copy_voice'
					})
				} else if (this.current == 3) {
					uni.navigateTo({
						url: '/childCont/clone/voice_order'
					})
				}
			},
			
			// 获取训练声音次数
			getVoiceCount() {
				
				getVoiceCount().then(res => {
					if (res.code == 20000) {
						this.voiceCount = res.data.count_number
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			// 选择版本
			version(val) {
				if (val == 0) {
					this.active = 0
				} else if (val == 1) {
					this.active = 1
				} else if (val == 2) {
					this.active = 2
				} else if (val == 4) {
					this.active = 4
				}
				this.page_no = 1;
				this.loadingType = 0;
				this.searchValue = '';
				this.getOrderList()
			},

			search() {
				this.page_no = 1;
				this.loadingType = 0;
				// this.searchValue = '';
				this.getOrderList()
			},

			// 获取对话列表
			getOrderList() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'prod_cate_id': '9',
					'status': this.active,
					'order_id': this.searchValue,
					'page_index': this.page_no,
					'page_count': this.page_count
				}
				orderList(val).then(res => {
					if (res.code == 20000) {
						this.orderList = res.data;
						this.voiceNum = res.data.filter(item => item.status === '2');
						let total = res.total;
						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						if (this.pageTotal == 1) {
							this.loadingType = 1;
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取订单信息失败');
				})
			},

			//页面触底事件
			onReachBottom() {
				if (this.loadingType == 1) return
				this.page_no++
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'prod_cate_id': '9',
					'status': this.active,
					'order_id': this.searchValue,
					'page_index': this.page_no,
					'page_count': this.page_count
				}
				orderList(val).then(res => {
					if (res.code == 20000) {

						let total = res.total;
						if (total == 0) return
						let List = res.data;
						let addList = this.orderList;
						List.forEach(item => {
							addList.push(item);
						});

						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						// console.log(this.pageTotal,158)
						if (this.pageTotal <= this.page_no) {
							this.loadingType = 1
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取订单信息失败');
				})
			},

			//查看详情
			// toDetail(order_id) {
			// 	uni.navigateTo({
			// 		url: '/childCont/figure/figure_order_detail?order_id=' + order_id,
			// 	})
			// },

		}
	}
</script>

<style scoped lang="less">
	page {
		background: #f6f8fb;
	}

	.tab_li {
		background: #fff;
		// padding: 10upx 20upx;
	}

	.top_cont {
		width: 100%;
		height: 250upx;
		background: #fff;
		position: fixed;
		top: 0;
		z-index: 10;
	}

	.search_cont {
		width: calc(100% - 50upx);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 25upx 25upx 0 25upx;
	}

	.search {
		width: 90%;
		height: 72upx;
		background: #F6F6F6;
		border-radius: 100upx;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 32upx;
		margin-bottom: 20upx;
	}

	.search_input {
		flex: 1;
	}

	.search_img {
		width: 36upx;
		height: 36upx;
	}

	.cont_tabs {
		width: 100%;
		display: flex;

	}

	.tabs_l {
		width: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.active_tabs {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		line-height: 50upx;
		color: #1F64FF;
		border-bottom: 5upx solid #1F64FF;
	}

	.tabs {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		line-height: 50upx;
		color: #999;
	}

	.list_ul {
		padding: 25upx 10upx;
		margin-top: 260upx;
		margin-bottom: 30upx;
		width: calc(100% - 20upx);
	}

	.ul_style {
		display: flex;
		flex-direction: column;
		padding: 0 15upx;
		width: calc(100% - 30upx);
	}

	.li_style {
		display: flex;
		flex-direction: column;
		background: #fff;
		/* border: 1px solid #C0C4CC; */
		box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.14);
		border-radius: 15upx;
		padding: 30upx;
		margin-bottom: 25upx;
	}

	.li_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 18upx;
	}

	.top_l {
		font-weight: 400;
		font-size: 28upx;
		line-height: 42upx;
		color: #333;
		width: 70%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.top_r {
		ont-weight: 400;
		font-size: 24upx;
		line-height: 30upx;
		color: #6E7480;
		;
	}

	.li_btn {
		font-weight: 400;
		font-size: 24upx;
		line-height: 35upx;
		color: #6E7480;
		margin-bottom: 12upx;
	}

	.li_bom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.bom_l {
		font-weight: 400;
		font-size: 24upx;
		line-height: 35upx;
		color: #6E7480;
	}

	.r_btn {
		background: rgba(82, 196, 26, 0.2);
		border-radius: 8upx;
		font-weight: 400;
		font-size: 20upx;
		line-height: 28upx;
		color: #52C41A;
		padding: 8upx 18upx;
	}

	.r_btn_stop {
		background: rgba(31, 100, 255, 0.2);
		border-radius: 8upx;
		font-weight: 400;
		font-size: 20upx;
		line-height: 28upx;
		color: #1F64FF;
		padding: 8upx 18upx;
	}

	.r_btn_gq {
		background: rgba(245, 172, 62, 0.2);
		border-radius: 8upx;
		font-weight: 400;
		font-size: 20upx;
		line-height: 28upx;
		color: #F5AC3E;
		padding: 8upx 18upx;
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

	.on_order_list {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		height: 100upx;
		line-height: 100upx;
		width: 100vw;
		color: #C0C4CC;
	}
</style>