<template>
	<view id='pag_top'>
		<scroll-view scroll-y="true">
			<view class="main">
				<view class="title">{{contentList.title}}</view>
				<view class="center">
					<view class="left">
						<image class="avatar" :src="log" mode="widthFix"></image>
						<text>无忧秘书智脑</text>
					</view>

					<text class="follow" @click="open">关注公众号</text>
				</view>
				<!-- <rich-text class="content" :nodes="contentList.content"></rich-text> -->
				<ua-markdown :source="contentList.content" :showLine="false" />
				<view class="qrcode" v-if="qrList.length>0">
					<view class="qrcode_i" v-for="item,index in qrList" :key="index">
						<image class="qr_pic" :src="item.pic_url"></image>
						<view class="name">{{item.pic_desc}}</view>
					</view>
				</view>
				<view class="bottom">
					<text class="time">{{ contentList.create_time ? contentList.create_time.slice(0,10) : '' }}</text>
					<text class="page_view">阅读{{contentList.read_count}}</text>
					<text class="like">点赞{{contentList.like_count}}</text>
				</view>

			</view>
			<view class="footer">
				<view class="title">
					相关推荐
				</view>
				<view style="padding-right: 32upx;">
					<view class="item" v-for="(item, index) in aiInforList.slice(0,3)"
						@click='contentChange(item.message_id)' :key="item.message_id">
						<view class="item_infor" v-if="index < 3">
							<view class="left">
								<view class="content">
									{{item.title}}
								</view>
								<view class="bottom">
									<text class="time">{{ item.create_time ? item.create_time.slice(0,10) : '' }}</text>
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
					</view>

				</view>
			</view>

			<u-popup :show="infoShow" mode="center" :round="10" closeIconPos="top-right" :closeOnClickOverlay='true'
				@close="infoShow=false">

				<view style="text-align: center; padding: 20upx;">
					<view style="width: 100%; padding: 10upx 0; display: flex; justify-content: flex-end;"><u-icon
							name="close" color="#999" size="20" @click="infoShow=false"></u-icon></view>
					<image style="width:400upx; height: 400upx; " show-menu-by-longpress :src="codeImg" alt="" />

				</view>
			</u-popup>
			<view class="top_btn" v-if="isCreat" @click="toTop">
				<image class="icon_img" :src='topImg' />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uaMarkdown from '@/components/ua2-markdown/ua-markdown.vue'
	import {
		getapplicationContent,
		getapplication
	} from '@/apis/home.js'
	import {
		payPictures
	} from '@/apis/chat.js'
	export default {
		components: {
			uaMarkdown
		},
		data() {
			return {
				contentList: [],
				aiInforList: [],
				infoShow: false,
				codeImg: global.baseImg +
					'/xcx/com/message_center/lQLPJxJzw4TEw-zNAZDNAZCwwxdv9c2FwUAFP15iKvUTAA_400_400.png',
				message_id: '',
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				topImg: global.baseImg + '/xcx/com/message_center/dingbu.png',
				isCreat: false,
				qrList: []

			};
		},
		onLoad(option) {
			this.message_id = option.message_id
			this.getContent(option.message_id)
			this.getapplication()
		},
		onShow() {
			this.getQrcode()
		},
		onPageScroll(e) {
			if (e.scrollTop > 650) {
				this.isCreat = true
			} else {
				this.isCreat = false
			}
		},
		onShareAppMessage() {
			return {
				title: this.contentList.title,
				path: '/childPage/news/information_content?message_id=' + this.message_id
			}
		},
		methods: {
			// 二维码
			getQrcode() {
				payPictures().then(res => {
					console.log(res, 1751);
					if (res.code == 20000) {
						let data = res.data
						for (var i = 0; i < data.length; i++) {
							if (data[i].type == 8) {
								this.qrList.push(data[i]) 
							}
						}
					}

				}).catch(err => {
					console.log(err);
				})
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
			open() {
				uni.navigateTo({
					url: '/childPage/news/link'
				})
				// this.infoShow = true
			},
			async getContent(id) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let data = {
					user_id: userInfo.user_id,
					message_type: 2,
					message_id: id
				}
				const res = await getapplicationContent(data)

				this.contentList = res.data[0]
				// console.log(this.contentList);
			},
			// 获取ai资讯列表
			async getapplication() {

				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));

				let data = {
					user_id: userInfo.user_id,
					message_type: 2
				}
				const res = await getapplication(data)
				this.aiInforList = res.data
				// console.log(this.aiInforList);

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
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}

		}
	}
</script>

<style lang="less">
	.main {
		background-color: #fff;
		margin-top: 32upx;
		padding: 32upx;

		.title {
			font-size: 42upx;
			font-style: normal;
			font-weight: 500;
			line-height: 150%;
			/* 24px */
		}

		.center {
			display: flex;
			justify-content: space-between;
			text-align: center;
			padding-top: 26rpx;
			align-items: center;
			margin-bottom: 20rpx;

			.left {
				text-align: center;
				color: #333;
				display: flex;
				font-size: 38rpx;
				font-style: normal;
				font-weight: 400;
				align-items: center;

				/* 21px */
				.avatar {
					width: 90upx;
				}
			}

			.follow {
				color: #1F64FF;
				font-size: 26rpx;
				font-style: normal;
				font-weight: 400;
				width: 160rpx;
				height: 48rpx;
				border-radius: 8rpx;
				border: 2rpx solid #1F64FF;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.content {
			color: #000;

			font-size: 26upx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			/* 19.5px */
		}

		.bottom {
			color: #A6A6A6;
			font-size: 24upx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			margin: 48upx 0 16upx 0;
			display: flex;
			justify-content: space-between;
			text-align: center;

			/* 18px */
			.page_view {
				margin: 0 32upx 0 102upx;
			}
		}
	}

	.footer {
		width: 100%;
		background-color: #fff;
		margin-top: 24upx;
		padding: 32upx;

		.item {
			margin-right: 32upx;
		}
	}

	.item_infor {
		width: 100%;
		// height: 160upx;
		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
		margin-top: 38upx;


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

			.img {
				width: 236upx;
				height: 160upx;

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
	.qrcode{
		display: flex;
		justify-content: space-between;
		padding: 40rpx 0;
		.qrcode_i{
			text-align: center;
			.qr_pic{
				width: 200rpx;
				height: 200rpx;
				margin-bottom: 20rpx;
			}
			.name{
				color: #2c3e50;
				font-size: 28rpx
			}
		}
	}
</style>