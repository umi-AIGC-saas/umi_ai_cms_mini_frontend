<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
<template>
	<view>
		<!-- <view class="top_cont">
			<view class="search_cont">
				<view class="search">
					<image class="search_img" src="@/static/user/search.png"></image>
					<input v-model="searchValue" placeholder="请输入搜索内容" type="text" class="search_input" @input="search" />
				</view>
			</view>
		</view> -->

		<!-- 绘画历史 -->
		<view class="chat_cont">
			<scroll-view class="list_ul" scroll-y="true" v-if="chatList.length > 0"
				:style="[{marginTop:(active_top == 1? '20rpx':'20rpx')}]">
				<view class="ul_style" v-for="(item, index) in chatList" :key="index"
					@click="checkDetail(item.image_code, item.chat_type)">
					<view class="li_style">
						<view class="li_left">
							<image class="li_img"
								:src="getImgUrl(item.chat_type == 19 || item.chat_type == 25|| item.chat_type == 48 || item.chat_type == 53|| item.chat_type == 54|| item.chat_type == 55|| item.chat_type == 56 ? item.origin_image : item.result_image)">
							</image>
						</view>
						<view class="li_right">
							<view class="li_top">
								<text class="top_l">{{ item.title }}</text>
							</view>
							<view class="li_btn">提问时间：{{ item.create_time }}</view>
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
		chatList,
		drawList,
		getImgList
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				active_top: 0,
				active: 4,
				searchValue: '',
				loadingType: 0,
				page_no: 1,
				page_count: 10,
				chatList: [],
				pageTotal: 0,
				backImg: global.baseImg + '/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg'
			}
		},
		components: {

		},
		onLoad(option) {
			console.log(option)
			if (option.chat_type != undefined) {
				this.active = option.chat_type;
				this.page_no = 1;
				this.loadingType = 0;
				this.searchValue = '';
				this.getChatList()
			}

		},
		onShow() {
			this.getChatList();
		},
		methods: {

			search() {
				this.page_no = 1;
				this.loadingType = 0;
				// this.searchValue = '';
				this.getChatList()
			},

			// 获取对话列表
			getChatList() {
				let val = {
					chat_type: this.active,
					title: this.searchValue,
					page_size: this.page_count,
					page: this.page_no
				}
				getImgList(val).then(res => {
					if (res.code == 20000) {
						this.chatList = res.data.data;
						console.log(this.chatList);
						let total = res.data.total;
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
					this.$api.msg('获取信息失败');
				})


			},

			//页面触底事件
			onReachBottom() {
				if (this.loadingType == 1) return
				this.page_no++
				let val = {
					chat_type: this.active,
					title: this.searchValue,
					page_size: this.page_count,
					page: this.page_no
				}

				getImgList(val).then(res => {
					if (res.code == 20000) {

						let total = res.data.total;
						if (total == 0) return
						let List = res.data.data;
						let addList = this.chatList;
						List.forEach(item => {
							if (item.title.indexOf('(回答内容') != -1) {
								let val = item.title.indexOf('(回答内容')
								item.title = item.title.slice(0, val)
							}
							addList.push(item);
						});

						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						console.log(this.pageTotal, 158)
						if (this.pageTotal <= this.page_no) {
							this.loadingType = 1
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取信息失败');
				})

			},

			checkDetail(code, type) {
				uni.setStorageSync('vison_code', code)
				if (type == 28) {
					uni.navigateTo({
						url: '/childCont/chest/cartoon',
					})
				}
				if (type == 29) {
					uni.navigateTo({
						url: '/childCont/chest/universal',
					})
				}

				if (type == 30) {
					uni.navigateTo({
						url: '/childCont/chest/symbol',
					})
				}

				if (type == 31) {
					uni.navigateTo({
						url: '/childCont/chest/subtitles',
					})
				}
				if (type == 32) {
					uni.navigateTo({
						url: '/childCont/chest/retouch',
					})
				}
				if (type == 33) {
					uni.navigateTo({
						url: '/childCont/chest/tailor',
					})
				}
				if (type == 34) {
					uni.navigateTo({
						url: '/childCont/chest/video_pic_inching',
					})
				}
				if (type == 36) {
					uni.navigateTo({
						url: '/childCont/chest/denoise',
					})
				}
				if (type == 37) {
					uni.navigateTo({
						url: '/childCont/chest/enhance',
					})
				}
				if (type == 38) {
					uni.navigateTo({
						url: '/childCont/chest/cover',
					})
				}
				if (type == 39) {
					uni.navigateTo({
						url: '/childCont/chest/faceRepair',
					})
				}
				if (type == 40) {
					uni.navigateTo({
						url: '/childCont/chest/faceSketch',
					})
				}
				if (type == 41) {
					uni.navigateTo({
						url: '/childCont/chest/thinFace',
					})
				}
				if (type == 42) {
					uni.navigateTo({
						url: '/childCont/chest/beautyMakeup',
					})
				}
				if (type == 43) {
					uni.navigateTo({
						url: '/childCont/chest/faceFilter',
					})
				}
				if (type == 44) {
					uni.navigateTo({
						url: '/childCont/chest/faceBlur',
					})
				}
				if (type == 45) {
					uni.navigateTo({
						url: '/childCont/chest/picSubtitles',
					})
				}
				if (type == 48) {
					uni.navigateTo({
						url: '/childCont/chest/faceRecognize',
					})
				}
				if (type == 49) {
					uni.navigateTo({
						url: '/childCont/chest/picSymbol',
					})
				}
				if (type == 50) {
					uni.navigateTo({
						url: '/childCont/chest/productMatting',
					})
				}
				if (type == 51) {
					uni.navigateTo({
						url: '/childCont/chest/partition',
					})
				}
				if (type == 52) {
					uni.navigateTo({
						url: '/childCont/chest/star',
					})
				}
				if (type == 53) {
					uni.navigateTo({
						url: '/childCont/chest/carRecognition',
					})
				}
				if (type == 54) {
					uni.navigateTo({
						url: '/childCont/chest/picBodyRecognition',
					})
				}
				if (type == 55) {
					uni.navigateTo({
						url: '/childCont/chest/fillColor',
					})
				}
				if (type == 56) {
					uni.navigateTo({
						url: '/childCont/chest/picStyle',
					})
				}if (type == 57) {
					uni.navigateTo({
						url: '/childCont/chest/sharpness',
					})
				}
			},

			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		background: #f6f8fb;
	}

	.top_cont {
		width: 100%;
		height: 100upx;
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
		padding: 0 25upx;
		background: #fff;
	}

	.search {
		width: calc(100% - 64upx);
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
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.active_tabs_top {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		line-height: 50upx;
		color: #1F64FF;
		border-bottom: 5upx solid #1F64FF;
	}

	.tabs_top {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		line-height: 50upx;
		color: #999;
	}

	.list_ul {
		padding: 25upx 10upx;
		// margin-top: 238upx;
		margin-bottom: 30upx;
		width: calc(100% - 20upx);
	}

	.ul_style {
		display: flex;
		flex-direction: column;
		padding: 0 15upx
	}

	.li_style {
		display: flex;
		// flex-direction: column;
		align-items: center;
		background: #fff;
		/* border: 1px solid #C0C4CC; */
		box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.14);
		border-radius: 15upx;
		padding: 20upx;
		margin-bottom: 25upx;
		width: calc(100% - 40upx);
	}



	.li_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 18upx;
	}

	.top_l {
		ont-weight: 400;
		font-size: 28upx;
		line-height: 42upx;
		color: #333;
		width: 300upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.top_r {
		ont-weight: 400;
		font-size: 24upx;
		line-height: 30upx;
		color: #6E7480;
	}

	.li_btn {
		font-weight: 400;
		font-size: 24upx;
		line-height: 35upx;
		color: #6E7480;
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

	.chat_type {
		display: flex;
		align-items: center;
		// justify-content: space-around;
		width: 100%;
		padding: 15upx 0;
		flex-wrap: wrap;
		flex: 1;

		.tabs {
			width: 22%;
			background: #F8F8F9;
			border-radius: 6upx;
			padding: 16upx 0;
			margin: 10upx 1.5%;
			font-style: normal;
			font-weight: 500;
			font-size: 28upx;
			line-height: 150%;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.active_tabs {
			width: 22%;
			background: rgba(31, 100, 255, 0.15);
			;
			border-radius: 6upx;
			padding: 16upx 0;
			margin: 10upx 1.5%;
			font-style: normal;
			font-weight: 500;
			font-size: 28upx;
			line-height: 150%;
			color: #1F64FF;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.li_left {
		padding-right: 10upx;

		.li_img {
			width: 110upx;
			height: 110upx;
			border-radius: 50%;
		}
	}

	.li_right {
		flex: 1;
		// width: calc(100% - 160upx);
	}
</style>