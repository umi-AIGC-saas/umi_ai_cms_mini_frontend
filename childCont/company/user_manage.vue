<template>
	<view>
		<view class="chat_cont">
			<view class="text_conts">
				<view class="text_u">
					<text class="text_r">成员管理</text>
				</view>
				
				<view class="text_u" @click="addUser">
					<image class="add_img" :src='addImg'/>
					<text class="add_li">邀请成员</text>
				</view>
			</view>
			
			<view class="select_type">
				<view :class="m_status == '' ? 'type_l_active' : 'type_l'"  @click="selectType('')">全部</view>
				<view :class="m_status == 1 ? 'type_l_active' : 'type_l'"  style="margin-left: 20upx" @click="selectType(1)">待审批</view>
			</view>
			
			<scroll-view class="list_ul" scroll-y="true" v-if="memberList.length > 0">
				<view class="ul_style" v-for="(item, index) in memberList" :key="index">
					<view class="li_style">
						<view class="ul_right">
							<view class="li_btn">
								<view class="btn_l">用户</view>
								<view class="btn_r">{{ item.nick_name }}</view>
							</view>
							<view class="li_btn">
								<view class="btn_l">手机号</view>
								<view class="btn_r">{{ item.mobile }}</view>
							</view>
							<view class="li_btn">
								<view class="btn_l">加入时间</view>
								<view class="btn_r">{{ item.create_time }}</view>
							</view>
							
							<view class="li_edit">
								<view class="edit_l" @click="delList(item.member_code)">删除</view>
								<view class="edit_r" @click="editMember(item.member_code)" v-if="item.m_status == 1">同意</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

			<view class="on_order_list" v-else>暂无相关成员</view>

			<view class="on_order_list" v-if="loadingType == 1">没有更多内容了!</view>
		</view>
	</view>
</template>

<script>
	import {
		getMember,verifyMember,delMember
	} from '@/apis/user.js'
	export default {
		props: {
			companyCode: String
		},
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				loadingType: 0,
				page_no: 1,
				page_count: 10,
                m_status: '',
				memberList: [],
				pageTotal: 0,
				addImg: global.baseImg+'/xcx/01fece57-06c7-4eff-ab60-671230d86f80.jpg'
			}
		},
		components: {
		},
		onLoad(option) {
            console.log(option)
		},
		onShow() {
			// this.getChatList();
		},
		created() {
			this.getMember()
		},
		methods: {

			// 获取对话列表
			getMember() {
				let val = {
					company_code: this.companyCode,
					m_status: this.m_status,
					page_size: this.page_count,
					page: this.page_no
				}
				getMember(val).then(res => {
					if (res.code == 20000) {
						
						this.memberList = res.data.data;

						let total = res.data.total;
						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						if (this.pageTotal == 1) {
							this.loadingType = 1;
						} else {
							this.loadingType = 0;
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取对话信息失败');
				})
			},

			//页面触底事件
			onReachBottom() {
				if (this.loadingType == 1) return
				this.page_no++
				let val = {
					company_code: this.companyCode,
					m_status: this.m_status,
					page_size: this.page_count,
					page: this.page_no
				}
				getMember(val).then(res => {
					if (res.code == 20000) {

						let total = res.data.total;
						if (total == 0) return
						let List = res.data.data;
						let addList = this.getMember;
						List.forEach(item => {
							
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
					this.$api.msg('获取员工信息失败');
				})
			},

			checkDetail() {
				uni.navigateTo({
					url: '/childCont/company/know_list',
				})
			},
			
			delList(code) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除该成员吗？',
					success(res) {
					  if (res.confirm) {
						  that.delCont(code)
					  }
					}
				});
			},
			
			// 删除信息
			delCont(code) {
				let val = { 'member_code': code }
				delMember(val).then(res => {
					if(res.code == 20000) {
						this.$api.msg('删除成功')
						this.getMember()
					} else {
						this.$api.msg(res.msg)
					}
					
				})
			},
			
			// 同意成员加入
			editMember(code) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定同意该成员加入吗？',
					confirmText: "同意",
					success(res) {
					  if (res.confirm) {
						  that.eidtCont(code)
					  }
					}
				});
			},
			
			// 同意确认
			eidtCont(code) {
				let val = { 'member_code': code }
				verifyMember(val).then(res => {
					if(res.code == 20000) {
						this.$api.msg('已同意加入')
						this.getMember()
					} else {
						this.$api.msg(res.msg)
					}
					
				})
				
			},
			
			//邀请成员
			addUser() {
				let that = this;
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				let user_code = userInfo.user_code;
				let link = 'http://localhost:8083/#/childCont/company/company_list?user_code='+ user_code+ '&company_code='+ this.companyCode
				uni.showModal({
					title: '邀请链接',
					content: link,
					confirmText: "复制链接",
					success(res) {
					  if (res.confirm) {
						  uni.setClipboardData({
						  	data: link, //要被复制的内容
						  	success: () => { //复制成功的回调函数
						  		uni.showToast({ //提示
						  			title: '复制成功'
						  		})
						  	}
						  })
					  }
					}
				});
			},
			
			selectType(val) {
				this.m_status = val;
				this.page_no = 1;
				this.getMember()
			},
			toIdea(){
				uni.navigateTo({
					url:'/childPage/answer/answer'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		background: #f6f8fb;
	}

	.cont_title {
		color: #000;
		font-size: 30upx;
		font-style: normal;
		font-weight: 500;
        text-align: center;
		padding: 20upx 0;
	}
	.list_ul {
		padding: 15upx 10upx;
		margin-bottom: 30upx;
		width: calc(100% - 20upx);
	}

	.ul_style {
		display: flex;
		flex-direction: column;
		padding: 15upx 20upx;
	}

	.li_style {
		display: flex;
		align-items: center;
		box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.14);
		border-radius: 10upx;
		padding: 25upx;
		width: calc(100% - 50upx);
		background: #fff;
		.ul_right { flex: 1; }
		.ul_img {
			padding: 10upx;
			.avatar_img {
				width: 80upx;
				height: 80upx;
				border-radius: 8upx;
			}
		}
	}

	.li_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 18upx;
	}

	.top_l {
		font-weight: 500;
		font-size: 30upx;
		line-height: 42upx;
		color: #000;
		width: 80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.top_r {
		font-weight: 400;
		font-size: 24upx;
		line-height: 30upx;
		color: #6E7480;
	}

	.li_btn {
		font-weight: 400;
		font-size: 28upx;
		line-height: 35upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.btn_l {
			color: #A4A4A4;
			font-size: 28upx;
			font-weight: 400;
			line-height: 150%;
			padding: 5upx 0upx;
			line-height: 48upx;
		}
		.btn_r {
			color: #000;
			font-size: 28upx;
			font-weight: 400;
			line-height: 150%;
			padding: 5upx 0upx;
			line-height: 48upx;
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
	
	.text_conts {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: calc(100% - 60upx);
		padding: 20upx 30upx 0 30upx;
		.text_u {
			display: flex;
			align-items: center;
			.u_li{
				color: #9A9A9A;
				text-align: center;
				font-size: 22upx;
				font-style: normal;
				font-weight: 400;
				margin-right: 10upx;
			}
			.add_img {
				width: 38upx;
				height: 38upx;
			}
			.add_li {
				color: #1F64FF;
				font-size: 28upx;
				font-style: normal;
				font-weight: 500;
				line-height: 150%;
				padding-left: 10upx;
			}
			.qs_img {
				width: 40upx;
				height: 40upx;
				margin-left: 20upx;
			}
			.text_r {
				color: #000;
				font-size: 32upx;
				font-weight: 500;
				line-height: 50upx;
				margin-right: 10upx;
			}
		}
	}
	.li_edit {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 10upx;
		.edit_l {
			padding: 10upx 30upx;
			border-radius: 8upx;
			border: 1upx solid #1F64FF;
			color: #1F64FF;
			text-align: center;
			font-size: 28upx;
			font-style: normal;
			font-weight: 600; 
			margin-right: 20upx;
		}
		.edit_r {
			padding: 10upx 30upx;
			border-radius: 8upx;
			background:  #1F64FF;
			color: #fff;
			text-align: center;
			font-size: 28upx;
			font-style: normal;
			font-weight: 600; 
		}
	}
	
	.select_type {
		display: flex;
		padding: 20upx 30upx 0 30upx;
		.type_l {
			border-radius: 8upx;
			background: #fff;
			padding: 10upx 20upx;
			color: #6B6B6B;
			font-size: 24upx;
			font-weight: 400;
		}
		
		.type_l_active {
			border-radius: 8upx;
			background: #1F64FF;
			padding: 10upx 20upx;
			color: #fff;
			font-size: 24upx;
			font-weight: 400;
		}
	}
	
</style>