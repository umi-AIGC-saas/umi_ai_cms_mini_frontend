<!-- 留言板页面 -->
<template>
	<view class="main">
		<view class="content">
			<view class="content-box" v-for="(item,index) in messageList" :key="index">
				<view class="box-left">
					<view class="box_text">
						<text>联系电话：</text>
						<text>{{ item.user_mobile }}</text>
					</view>
					<view class="box_text">
						<text>留言时间：</text>
						<text>{{ item.created_at }}</text>
					</view>
					<view class="box_cont">{{ item.content }}</view>
					<view class="bottom">
						<view @click="delChat(item.message_id)">删除</view>
						<view @click="checkDetail(item.content)">查看详情</view>
					</view>
				</view>
				
			</view>
		</view>
		<u-popup :show="messageShow" mode="center" :round="8" length="auto">
				<view class="message-box">
					<view class="message-close" @click="messageShow = false">
						<u-icon name="close" size="21"></u-icon>
					</view>
					<view class="message-title">留言内容</view>
					<view class="message-content" v-text="messageText"></view>
				</view>
		</u-popup>
		
	</view>
</template>

<script>
	import { getMessage, delMessage } from '@/apis/home.js'
	export default {
		data() {
			return {
				check: "0",
				messageShow:false,	//留言框
				messageText:'',
				messageList: [],
				loadingType: 0,
				page_no: 1,
				page_count: 10,
				pageTotal: 0
			}
		},
		
		onLoad(option) {
			console.log(option.model_id, 335)
			if(option.model_id) {
				this.model_id = option.model_id
			}
		},
		onShow() {
			this.getMessageList();
		},
		
		methods: {
			// 获取对话列表
			getMessageList() {
			  let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			  let val = {
				  'user_id': userInfo.user_id,
				  'model_id': this.model_id,
				  'page_index': this.page_no,
				  'page_count': this.page_count
			  }
			  getMessage(val).then(res => {
				  if (res.code == 20000) {
					   this.messageList = res.data;
					 
					  let total = res.total;
					  if(total%this.page_count == 0) {
						   this.pageTotal = total/this.page_count
					  } else {
						   this.pageTotal = parseInt(total/this.page_count) + 1
					  }
					  if(this.pageTotal == 1) {
						  this.loadingType = 1;
					  }
				  } else {
					  this.$api.msg(res.msg);
				  }
			  }).catch(err => {
				  this.$api.msg('获取留言失败');
			  })
			},
			
			//页面触底事件
			onReachBottom() {
				if (this.loadingType == 1) return
				this.page_no++
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
				  'user_id': userInfo.user_id,
				  'model_id': this.model_id,
				  'page_index': this.page_no,
				  'page_count': this.page_count
				}
				getMessage(val).then(res => {
				  if (res.code == 20000) {
			
					  let total = res.total;
					  if (total == 0) return
					  let List = res.data;
					  let addList = this.messageList;
					  List.forEach(item => {
					  	addList.push(item);
					  });
					  
					  if(total%this.page_count == 0) {
						   this.pageTotal = total/this.page_count
					  } else {
						   this.pageTotal = parseInt(total/this.page_count) + 1
					  }
					  console.log(this.pageTotal,158)
					  if (this.pageTotal <= this.page_no) {
					  	this.loadingType = 1
					  }
				  } else {
					  this.$api.msg(res.msg);
				  }
				}).catch(err => {
					  this.$api.msg('获取留言失败');
				})
			},
			
			checkDetail(cont) {
				this.messageShow = true
				this.messageText = cont
			},
			
			delChat(id) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除该留言吗？',
					success(res) {
					  if (res.confirm) {
						  that.delCont(id)
					  }
					}
				});
			},
			
			// 删除信息
			delCont(id) {
				let data = { message_id: id }
				delMessage(data).then(res => {
					if(res.code == 20000) {
						this.$api.msg('删除成功')
						this.getMessageList()
					} else {
						this.$api.msg(res.msg)
					}
					
				})
				
			},
		}
	}
</script>

<style scoped lang="less">
	.message-box{
		width: 400rpx;
		padding: 30rpx;
		box-sizing: border-box;
		position: relative;
		.message-close{
			position: absolute;
			right: 30rpx;
			top: 30rpx;
		}
		.message-title{
			margin-bottom: 20rpx;
			text-align: center;
			font-size: 36rpx;
			font-weight: bold;
		}
		.message-box{
			width: 100%;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.message-content{
			width: 100%;
		}
	}
	.check-border-on {
		border: 1px solid rgb(22, 132, 252);
	}
	
	.check-border-no {
		border: 1px solid rgba(0, 0, 0, 0);
	}
	.main{
		width: 100vw;
		height: 100vh;
		padding: 40rpx;
		box-sizing: border-box;
		position: relative;
		.content{
			width: 100%;
			// max-height: calc(100% - 60rpx - 40rpx);
			overflow-y: auto;
			.content-box{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20upx;
				.box-left{
					width: 100%;
					padding: 20rpx;
					box-sizing: border-box;
					border-radius: 15rpx;
					background: #fff;
					.box_text{
						width: 100%;
						display: flex;
						align-items: center;
						margin-bottom: 30rpx;
					}
					.box_cont{
						 overflow: hidden;
						 text-overflow: ellipsis;
						 display: -webkit-box;
						 -webkit-line-clamp: 3;
						 -webkit-box-orient: vertical;
						 margin-bottom: 30rpx;
					}
				}
			}
		}
		.bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;
		
			>view {
				width: 40%;
				height: 70rpx;
				text-align: center;
				padding: 15rpx;
				box-sizing: border-box;
				border-radius: 12rpx;
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