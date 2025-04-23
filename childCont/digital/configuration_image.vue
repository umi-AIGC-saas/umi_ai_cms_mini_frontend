<template>
	<!-- 配置形象 -->
	<view>
		<view class="main">
			<view class="title">
				<view :class="titleCheck == 0?'check-on':''" @click="manSelect(0)">男生区</view>
				<view :class="titleCheck == 1?'check-on':''" @click="manSelect(1)">女生区</view>
			</view>
			<view class='configuration' v-if="titleCheck == 0">
				<view class="configuration-box" @click='check = index' v-for="(item,index) in manList" :key="index" v-if="manList.length > 0 && item.is_show == 1">
					<image mode="aspectFit" :class="check == index ? 'check-border-on':'check-border-no'" :src="getImgUrl(item.base_model_image)">
					</image>
					<text>{{item.base_model_name}}</text>
					<radio :checked="check == index ? true:false"></radio>
				</view>
				<view class="on_order_list"  v-if="manList.length == 0">没有相关模型!</view>
			</view>
			
			<view class='configuration' v-if="titleCheck == 1">
				<view class="configuration-box" @click='check = index' v-for="(item,index) in womanList" :key="index" v-if="womanList.length > 0 && item.is_show == 1">
					<image mode="aspectFit" :class="check == index?'check-border-on':'check-border-no'" :src="getImgUrl(item.base_model_image)">
					</image>
					<text>{{item.base_model_name}}</text>
					<radio :checked="check == index?true:false"></radio>
				</view>
				<view class="on_order_list"  v-if="womanList.length == 0">没有相关模型!</view>
			</view>
			
		</view>
		<view class="btn">
			<view class='roll'>
				<view class="roll-title">
					<view>相似度</view>
					<view>数值越大则数字分身越接近自己，越小越接近模特</view>
				</view>
				<view>
					<view style="width: 90%;">
						<u-slider v-model="value" :use-slot="true"></u-slider>
					</view>
					<text>{{value}}%</text>
				</view>
			</view>
			<view class="bottom" @click="toCreated()">确定</view>
		</view>
	</view>
	
</template>

<script>
	import {
		getBaseModel
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				value: "100",
				manList: [],
				womanList: [],
				titleCheck: '0', //选择标题
				check: '', //选择形象
			}
		},
		onShow() {
		   this.getBaseModel()	
		},
		methods: {
			getBaseModel() {
				
				getBaseModel().then(res => {
					if (res.code == 20000) {
						this.manList = res.data[1]
                        this.womanList = res.data[2]
						this.check = 0
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			toCreated() {
				if(this.titleCheck == 0) {
					uni.navigateTo({
						url: '/childCont/digital/created_digital?info='+ JSON.stringify(this.manList[this.check]) +'&code=' + this.value 
					})
				} else {
					uni.navigateTo({
						url: '/childCont/digital/created_digital?info='+ JSON.stringify(this.womanList[this.check]) +'&code=' + this.value ,
					})
				}
				
			},
			manSelect(val) {
				this.titleCheck = val
				this.check = 0
			},
			
			getImgUrl(url) {
				// console.log(url);
				return global.baseImg + '/' + url;
			},
		}
	}
</script>

<style scoped lang="less">
	.badge-button {
		padding: 4rpx 6rpx;
		color: #fff;
		border-radius: 10rpx;
		font-size: 22rpx;
		line-height: 1;
	}
	.main {
		width: 100vw;
		height: calc(100vh - 130rpx);
		overflow-y: auto;
		padding: 0px 40rpx;
		box-sizing: border-box;
		margin: auto;
		// margin-bottom: 130upx;
		// position: relative;

		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 30rpx 0rpx;

			>view {
				padding: 10rpx 15rpx;
				border-radius: 8rpx;
			}

			>view:first-child {
				margin-right: 80rpx;
			}

			.check-on {
				background: rgb(239, 239, 239);
			}
		}

		.configuration {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding-bottom: 130upx;

			.configuration-box {
				width: 50%;
				margin-bottom: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;

				image {
					width: 95%;
					// height: 300rpx;
					position: relative;
					left: 50%;
					transform: translate(-50%);
				}

				text {
					margin: 20rpx 0rpx;
				}
			}
		}

		.check-border-on {
			border: 1px solid rgb(22, 132, 252);
		}

		.check-border-no {
			border: 1px solid rgba(0, 0, 0, 0);
		}
		
	}
	
	.roll{
		// width: 100%;
		// padding: 15upx 0;
		margin-left: -32rpx;
		height: 120upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20rpx;
		.roll-title{
			display: flex;
			align-items: flex-end;
			margin-left: 32rpx;
			>view:first-child{
				margin-right: 10rpx;
			}>view:last-child{
				font-size: 20rpx;
				color: #999;
			}
		}
		>view:last-child{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.bottom {
		width: 90%;
		border-radius: 16rpx;
		background-color: rgb(31, 100, 255);
		color: #FFF;
		padding: 25rpx 0rpx;
		text-align: center;
	}
	
	.on_order_list {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		height: 200upx;
		line-height: 200upx;
		width: 100vw;
		color: #C0C4CC;
	}
	
	.btn {
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-bottom: 20rpx;
		background: #fff;
	}
</style>