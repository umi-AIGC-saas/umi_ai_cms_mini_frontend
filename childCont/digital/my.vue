<!-- 我的分身页面 -->
<template>
	<view class="main">
		<!-- 主内容 -->
		<view class="content">
			<view class="created" @click="toCreated()">
				<u-icon name="plus" color="#666" size="32"></u-icon>
				<text>创建数字分身</text>
			</view>
			<view class="content-box" @click="selectCheck(item, index)" v-for="(item,index) in digitalList" :key="index">
				<view class="" style="text-align: center; width: 100%;">
					<image :class="check == index ? 'check-border-on':'check-border-no'"
						:src="getImgUrl(item.face_image)" v-if="item.status == 1">
					</image>
					<view class="check_no" v-if="item.status == 0">制作中</view>
					<view style="margin-top: 20rpx;">
						<view>{{ item.model_name }}</view>
						<radio :checked="check == index ? true:false"></radio>
					</view>
				</view>
				<view v-if="item.status == 1">
					<u-icon name="close" color="#666" size="16" @click="delPhoto(item.model_id)"></u-icon>
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="bottom" v-if="status == 1 && digitalList.length > 0">
			<view @click="editUser(info)">编辑分身</view>
			<view @click="toChat(info)">立即对话</view>
		</view>
	</view>
</template>

<script>
	import {
		getModelList, delModel
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				check: 0,
				digitalList: [],
				status: 0,
				info: ''
			}
		},
		onShow() {
			this.getModelList()
		},
		methods: {
			// 获取列表
			getModelList() {
			    let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			    let val = {
			    	'user_id': userInfo.user_id,
				}
				getModelList(val).then(res => {
					if (res.code == 20000) {
						if(res.data.length > 0) {
							this.digitalList = res.data
							this.status = res.data[0].status
							this.info = res.data[0]
						} else {
							this.digitalList = []
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			
			selectCheck(item, index) {
				this.status = item.status
				this.info = item
				this.check = index
			},
			toCreated() {
				//跳转创建分身页面
				uni.navigateTo({
					url: '/childCont/digital/configuration_image'
				})
			},
			
			editUser(item) {
				uni.navigateTo({
					url: '/childCont/digital/edit_digital?info='+ JSON.stringify(item),
				})
			},
			
			toChat(item) {
				uni.navigateTo({
					url: '/childCont/digital/chat?chatInfo='+ JSON.stringify(item),
				})
			},
			
			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},
			
			delPhoto(model_id) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除该分身吗？',
					success(res) {
					  if (res.confirm) {
						  that.delCont(model_id)
					  }
					}
				});
			},
			
			// 删除信息
			delCont(model_id) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = { 
					'user_id': userInfo.user_id,
					'model_id': model_id
				}
				// console.log(val,6666)
				delModel(val).then(res => {
					if(res.code == 20000) {
						this.$api.msg('删除成功')
						this.getModelList()
					} else {
						this.$api.msg(res.msg)
					}
				})
				
			}
		}
	}
</script>

<style scoped lang="less">
	.main {
		width: 100vw;
		height: 100vh;
		padding: 40rpx;
		box-sizing: border-box;
		position: relative;

		.check-border-on {
			border: 1px solid rgb(22, 132, 252);
		}

		.check-border-no {
			border: 1px solid rgba(0, 0, 0, 0);
		}

		.content {
			width: 100%;
			max-height: calc(100% - 60rpx - 40rpx);
			margin-bottom: 15rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			overflow-y: auto;

			.created {
				width: 48%;
				height: 324rpx;
				border: 1px solid #ccc;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				text-align: center;

			}

			.content-box {
				width: 48%;
				height: 466rpx;
				display: flex;
				justify-content: left;

				position: relative;

				image {
					width: calc(304rpx - 52rpx);
					height: 324rpx;
				}

				>view:last-child {
					position: absolute;
					width: 32rpx;
					top: 0rpx;
					right: 0rpx;
				}
				
			   .check_no {
				   height: 324rpx;
				   display: flex;
				   align-items: center;
				   justify-content: center;
				   border: 1px solid #ccc;
				   color:#666;
				   font-size: 28upx;
			   }
			}
		}

		.bottom {
			width: calc(100% - 80rpx);
			height: 60rpx;
			position: absolute;
			bottom: 40rpx;
			left: 50%;
			transform: translate(-50%, 0%);
			display: flex;
			justify-content: space-between;

			>view {
				width: 40%;
				padding: 15rpx;
				box-sizing: border-box;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			>view:first-child {
				color: #1F64FF;
				border: 1px solid #1F64FF;
			}

			>view:last-child {
				background-color: #1F64FF;
				color: #FFF;
			}
		}
	}
</style>