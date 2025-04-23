<template>
	<view class="containar">
		<view class="ad_back">
			<image class="banner_img" :src='backImg' />
			<view class="ad_btn" @click="showInfo = true">
				<text class="ad_text">立即体验</text>
				<u-icon name="arrow-right" color=" #1F64FF" size="16" bold="true"></u-icon>
			</view>
		</view>
		
		<view class="ad_cont">
			<view class="cont_title">
				<view class="title_l"></view>
				<view class="title_r">形象克隆</view>
			</view>
			<view class="cont_li">上传一张照片或一段视频，使数字人生成效果更好</view>
			
			<view class="cont_video">
				<view class="video_l"> <video :src="spImg" objectFit='cover' class="sp_img"></video></view>
				<view class="video_r">
					<view class="r_title">定制流程</view>
					<view class="r_cont">
						<text class="cont_l">1</text>
						<text class="cont_r">上传一张照片或一段视频</text>
					</view>
					<view class="r_cont">
						<text class="cont_l">2</text>
						<text class="cont_r">通过照片驱动训练为您生成专属数字人</text>
					</view>
				</view>
				
			</view>
			
			<view class="bottom">
			    <view class="bottom_cont">
				    <view class="bottom_buy" @click="saveFile">立即上传资料</view>
			    </view>
			</view>
		</view>
		
		<view class="ad_cont">
			<view class="cont_title">
				<view class="title_l"></view>
				<view class="title_r">声音克隆</view>
			</view>
			<view class="cont_li">上传多段1-3分钟左右的音频，使克隆效果更好</view>
			
			<view class="voice_back">
				<image class="voice_img" :src='voiceImg' />
				<view class="voice_btn">
					<view class="btn_play" style="border-right: 2upx solid #A7C2FF;">
						<image class="play_img" :src='startImg' v-if="!isPlay" @click="play()"/>
						<image class="play_img" :src='endImg' v-if="isPlay" @click="pause()"/>
						<view class="play_text">原生</view>
					</view>
					<view class="btn_play">
						<image class="play_img" :src='startImg' v-if="!isCopyPlay" @click="copyPlay()"/>
						<image class="play_img" :src='endImg' v-if="isCopyPlay" @click="copyPause()"/>
						<view class="play_text">克隆声音</view>
					</view>
				</view>
			</view>
			
			<view class="bottom">
			    <view class="bottom_cont">
				    <view class="bottom_buy" @click="saveVoice">立即上传资料</view>
			    </view>
			</view>
		</view>
		
		<view class="cont_history">
			<view class="history_title">上传记录</view>
			<scroll-view class="list_ul" scroll-y="true" v-if="recordList.length > 0">
				<view class="ul_li" v-for="(item, index) in recordList" :key="index">
					<view class="ul_style">
						<view class="li_title">{{ item.file_name }}</view>
						<view class="li_time">{{ item.create_time }}</view>
						<view class="li_btn">
							<view class="btn_l">
								
							</view>
							<view class="btn_r" @click.stop="delChat(item.file_code)">
								<u-icon name="trash" color="#8e99a8" size="20"></u-icon>
							</view>
						</view>
							
					</view>
				</view>
				
			</scroll-view>
			
			<view class="on_order_list" v-else>
				暂无相关记录
			</view>
			
			<view class="on_order_list" v-if="loadingType == 1">没有更多内容了!</view>
		</view>
		
		<!-- 立即体验 -->
		<u-modal :show="showInfo" @cancel="closeInfo" confirmText="提交" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="changeInfo">
			<view class="key_cont" style="">
				<view class="title">输入信息</view>
				<view class="cont_ul">
					<text class="ul_text">姓&nbsp;&nbsp;名</text>
					<u-input :customStyle='{"padding":"8px", "width":"100%"}' inputAlign="center" v-model="userName"
						placeholder="请输入用户名" type="text" ></u-input>
				</view>
				<view class="cont_ul">
					<text class="ul_text">手机号</text>
					<u-input :customStyle='{"padding":"8px", "width":"100%"}' inputAlign="center" v-model="phone"
						placeholder="请输入手机号" type="text" ></u-input>
				</view>
				
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		getDigital,delDigital,createExperience,createDigital
	} from '@/apis/user.js'

	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				backImg: global.baseImg+'/xcx/82e232fa-bd85-4c6d-ba56-3f5e51021f57.jpg',
				voiceImg: global.baseImg+'/xcx/bc6fc5f6-890a-4056-9923-1ed57e989c69.jpg',
				startImg: global.baseImg+'/xcx/e47bc10b-bb4c-43a1-8d5a-1bda0b917003.jpg',
				endImg: global.baseImg+'/xcx/90a9be00-0c42-440e-9ea9-267e52d7808b.jpg',
				spImg: global.baseImg+'/static/picture/28e20070-2755-427e-ad25-ba4e3d122198.mp4',
				
				isPlay: false,// 原生音频
				isCopyPlay: false, //克隆音频
				innerAudioContext: null,
				copyAudioContext: null,
				//立即体验
				showInfo: false,
				userName: '',
				phone: '',
				isClick: true,
				
				// 历史记录
				page_no: 1,
				page_count: 10,
				recordList: [],
				pageTotal: 0,
				loadingType: 0,
			}
		},
		components: {

		},
		onLoad(option) {
			this.init()
		},
		onShow() {
			this.page_no = 1;
			this.loadingType = 0;
			this.getRecord()
		},
		methods: {
			init(){
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.onPlay(() => {
				  // console.log('开始播放');
				});
				this.innerAudioContext.onEnded(() => {
					// console.log('原生停止了')
					this.isPlay = false
					
				})
				
				this.copyAudioContext = uni.createInnerAudioContext();
				this.copyAudioContext.obeyMuteSwitch = false;
				
				this.copyAudioContext.onEnded(() => {
					this.isCopyPlay = false
					// console.log('克隆停止了')
				})
			},
			// 获取历史列表
			getRecord() {
				let val = {
					page_size: this.page_count,
					page: this.page_no
				}
				getDigital(val).then(res => {
					if (res.code == 20000) {
						this.recordList = res.data.data;
											
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
					this.$api.msg('获取录音列表失败');
				})
				
			},
			
			//页面触底事件
			onReachBottom() {
				if (this.loadingType == 1) return
				this.page_no++
				let val = {
					page_size: this.page_count,
					page: this.page_no
				}
				getDigital(val).then(res => {
					if (res.code == 20000) {
			
						let total = res.data.total;
						if (total == 0) return
						let List = res.data.data;
						let addList = this.recordList;
						List.forEach(item => {
							addList.push(item);
						});
			
						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						// console.log(this.pageTotal, 158)
						if (this.pageTotal <= this.page_no) {
							this.loadingType = 1
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取录音列表失败');
				})
			},
			
			showRecordTime(send_time) {
				let recordTime = Math.floor(send_time);
				let h = Math.floor(recordTime/3600);
				if(h<10) h = "0"+h;
				
				let m = Math.floor((recordTime%3600)/60);
				if(m<10) m = "0"+m;
				
				let s = recordTime%60;
				if(s<10) s= "0"+s
				
				return h+':'+m+':'+s
			},
			
			delChat(id) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除该记录吗？',
					success(res) {
					  if (res.confirm) {
						  that.delCont(id)
					  }
					}
				});
			},
			
			// 删除信息
			delCont(id) {
				delDigital(id).then(res => {
					if(res.code == 20000) {
						this.$api.msg('删除成功')
						this.page_no = 1;
						this.loadingType = 0;
						this.getRecord()
					} else {
						this.$api.msg(res.msg)
					}
					
				})
				
			},
			
			// 关闭体验弹窗
			closeInfo() {
				this.showInfo = false
			},
			
			changeInfo() {
				if (this.userName == "") {
					this.$api.msg('用户名不能为空！');
					return
				}
			
				if (this.phone == "") {
					this.$api.msg('手机号不能为空！');
					return
				}
			
				var TEL_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
				if (!TEL_REGEXP.test(this.phone)) {
					this.$api.msg('手机号格式不正确！');
					return
				}
			
				if (this.isClick == false) {
					return false;
				}
				this.isClick = false;
			
				let val = {
					'name': this.userName,
					'mobile': this.phone,
				}
			
				createExperience(val).then(res => {
					if (res.code == 20000) {
						// console.log(JSON.stringify(res.data),789);
						uni.showToast({
							title: '提交成功',
							icon: 'success',
							duration: 1500
						})
						this.userName = '';
						this.phone = '';
						this.isClick = true;
						this.showInfo = false
					} else {
						this.isClick = true;
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.isClick = true;
					this.$api.msg('信息提交失败');
				})
			},
			
			// 上传资料
			saveFile() {
				let that = this;
				uni.chooseMedia({
				  count: 1,
				  mediaType: ['video','image'],
				  sourceType: ['album'],
				  maxDuration: 30,
				  camera: 'back',
				  success(res) {
				    console.log(res.tempFiles, 6666)
					const size = res.tempFiles[0].size;
					const type = res.tempFiles[0].fileType;
					let imageName = ''
					if(type == 'file') {
						this.file_type = 2
						imageName = '文件'
					} else if(type == 'video') {
						this.file_type = 3
						imageName = '视频'
					} else {
						this.file_type = 1
						imageName = '图片'
					}
					if(size > 536870912 && this.file_type == 2) { // 音频文件最大只能上传512M
						that.$api.msg('该文件已超过512M，不能上传')
						return
					}
					
					if(type > 2147483648 && this.file_type == 3 ) { // 视频文件最大只能上传2G
						that.$api.msg('该视频已超过2Gb，不能上传')
						return
					}
					const tempFilePaths = res.tempFiles[0].tempFilePath;
					uni.uploadFile({
						url: global.loginUrl + '/api/user/oss_upload', 
						filePath: tempFilePaths,
						name: 'image',
						formData: {
							"image": tempFilePaths,
							"image_name": imageName,
							"oss_dir": 'static',
							"cate": 'create_character'
						},
						success: (uploadFileRes) => {
							let imgData = JSON.parse(uploadFileRes.data)
							console.log(imgData,333)
							if(imgData.code == 20000) {
								// let url = global.baseImg + '/'+ imgData.data.new_url
								let url = imgData.data.new_url
								let name = imgData.data.name
								that.createFile(url,name,this.file_type, 1) // 创建识别任务
							} else {
								that.$api.msg(imgData.msg)
							}
						},
						fail: (res) => {
							that.$api.msg('上传失败')
						}
					});
				  }
				})
			},
			
			// 上传资料
			saveVoice() {
				let that = this;
				wx.chooseMessageFile({
				  count: 1,
				  type: 'all',
				  extension:['.mp3','.mp4','.wav','.m4a','.wma','.aac','.ogg','.amr','.flac'],//此处限制文件类型
				  success (res) {
					// tempFilePath可以作为img标签的src属性显示图片
					const size = res.tempFiles[0].size;
					const type = res.tempFiles[0].type;
					if(type == 'file') {
						this.file_type = 2
					} else if(type == 'video') {
						this.file_type = 3
					} else {
						this.file_type = 1
					}
					if(size > 524288 && type == 'file') { // 音频文件最大只能上传512M
						that.$api.msg('该文件已超过512M，不能上传')
						return
					}
					
					if(type > 2097152 && type == 'video') { // 视频文件最大只能上传2G
						that.$api.msg('该视频已超过2Gb，不能上传')
						return
					}
					const tempFilePaths = res.tempFiles[0].path
					const image_name = res.tempFiles[0].name
					// console.log(image_name,774)
					// console.log(this.file_type,'进来了')
					uni.uploadFile({
						url: global.loginUrl + '/api/user/oss_upload', 
						filePath: tempFilePaths,
						name: 'image',
						formData: {
							"image": tempFilePaths,
							"image_name": image_name,
							"oss_dir": 'static',
							"cate": 'create_character'
						},
						success: (uploadFileRes) => {
							let imgData = JSON.parse(uploadFileRes.data)
							console.log(imgData,1258)
							if(imgData.code == 20000) {
								let url = imgData.data.new_url
								let name = imgData.data.name
								that.createFile(url,name, this.file_type,2) // 创建识别任务
							} else {
								that.$api.msg(imgData.msg)
							}
						},
						fail: (res) => {
							that.$api.msg('上传失败')
						}
					});
				  }
				})
			},
			
			// 上传资料
			createFile(url,name, type, tip) {
				let val = { 
					'file_link': url,
					'f_type': tip,
					'file_name': name,
					'file_type': type
				}
				let that = this
				createDigital(val).then(res => {
					if (res.code == 20000) {
						this.$api.msg('上传成功')
						this.getRecord()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			
			//原生播放
			play() {
				this.copyStop()
				let path = global.baseImg+'/'+ 'static/picture/e8a2f932-d17a-4e0b-9297-e14f52a16576.mp3'
				this.innerAudioContext.src = path;
				this.innerAudioContext.play();
				this.isPlay = true
				// console.log('开始播放')
			},
			
			//原生暂停
			pause() {
				this.innerAudioContext.pause();
				this.isPlay = false
				// console.log('暂停播放')
			},
			
			//原生停止
			stop() {
				this.innerAudioContext.stop();
				this.isPlay = false
				// console.log('停止播放')
			},
			
			//克隆播放
			copyPlay() {
				this.stop()
				let path = global.baseImg+'/'+ 'static/picture/db634aa5-a006-40b1-aae6-3880db20dceb.mp3'
				this.copyAudioContext.src = path;
				this.copyAudioContext.play();
				this.isCopyPlay = true
				// console.log('克隆开始播放')
			},
			
			//克隆暂停
			copyPause() {
				this.copyAudioContext.pause();
				this.isCopyPlay = false
				// console.log('克隆暂停播放')
			},
			
			//克隆停止
			copyStop() {
				this.copyAudioContext.stop();
				this.isPlay = false
				// console.log('克隆停止播放')
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
	.containar { padding: 25upx; }
	.ad_back {
		width: 100%;
		height: 280upx;
		position: relative;
		margin-bottom: 20upx;
		.banner_img {
			width: 100%;
			height: 280upx;
		}
		.ad_btn {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #fff;
			border-radius: 8upx;
			width: 190upx;
			height: 64upx;
			position: absolute;
			top: 180upx;
			left: 36upx;
			.ad_text {
				color: #1F64FF;
				font-size: 26upx;
				font-style: normal;
				font-weight: 500;
				line-height: 150%;
				margin-left: 20upx;
			}
		}
		
	}
	.ad_btn:active {
		opacity: 0.5;
	}
	
	.ad_cont {
		padding: 20upx 0;
		.cont_title {
			display: flex;
			align-items: center;
			.title_l {
				width: 6upx;
				height: 32upx;
				flex-shrink: 0;
				border-radius: 8upx;
				background: #1F64FF;
			}
			.title_r {
				color: #000;
				font-size: 32upx;
				font-style: normal;
				font-weight: 500;
				line-height: 50upx;
				padding-left: 20upx;
			}
		}
		.cont_li {
			color: #666;
			font-size: 28upx;
			font-style: normal;
			font-weight: 400;
			line-height: 50upx;
		}
	}
	
	.cont_video {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 20upx 0;
		.video_l {
			width: 50%;
			.sp_img {
				width: 320upx;
				height: 380upx;
				border-radius: 15upx;
			}
		}
		.video_r {
			display: flex;
			flex-direction: column;
			width: 50%;
			.r_title {
				color: #333;
				font-size: 30upx;
				font-style: normal;
				font-weight: 500;
				line-height: 60upx; 
			}
			.r_cont {
				display: flex;
				align-items: flex-start;
				padding: 16upx 0;
				.cont_l {
					width: 50upx;
					height: 50upx;
					flex-shrink: 0;
					border-radius: 50%;
					background: linear-gradient(18deg, #C7D9FF 0%, #F9FBFF 100%);
					display: flex;
					align-items: center;
					justify-content: center;
					color: #1F64FF;
					font-size: 28upx;
					font-style: normal;
					font-weight: 400;
					line-height: 150%;
				}
				.cont_r {
					color: #505968;
					font-size: 28upx;
					font-style: normal;
					font-weight: 400;
					line-height: 150%; 
					padding-left: 40upx;
				}
			}
		}
	}
	
	.bottom {
		width: 100%;
		.bottom_cont {
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding-bottom: 25upx;
		}
		
		.bottom_buy {
			width: 100%;
			height: 80upx;
			background: #1F64FF;
			border-radius: 6px;
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 20px;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 20upx auto 0;
		}
	}
	
	.bottom_cont:active {
		opacity: 0.5;
	}
	
	.voice_back {
		width: 100%;
		height: 320upx;
		position: relative;
		padding: 20upx 0;
		.voice_img {
			width: 100%;
			height: 320upx;
		}
		.voice_btn {
			display: flex;
			align-items: center;
			width: 100%;
			position: absolute;
			bottom: 50upx;
			.btn_play {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50%;
				.play_img {
					width: 64upx;
					height: 64upx;
				}
				.play_text {
					color: #000;
					font-size: 28upx;
					font-style: normal;
					font-weight: 400;
					padding-left: 30upx;
				}
			}
		}
	}
	
	// 历史记录
	.cont_history {
		// padding: 20upx;
		.history_title {
			color: #000;
			font-size: 32upx;
			font-style: normal;
			font-weight: 500;
			line-height: 60upx;
		}
	}
	.ul_li {
		margin-bottom: 10upx;
	}
	.ul_style {
		width: calc(100% - 30upx);
	    background: #fff;
		border-radius: 10upx;
		padding: 15upx;
		.li_title {
			color: #000;
			font-size: 28upx;
			font-weight: 500;
			line-height: 40upx;
		}
		
		.li_time {
			color: #8E99A8;
			font-size: 24upx;
			font-weight: 500;
			line-height: 40upx;
			padding: 10upx 0;
		}
		.li_btn {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.btn_l {
				display: flex;
				.btn_text {
					color: #8E99A8;
					font-size: 24upx;
					font-style: normal;
					font-weight: 400;
					line-height: 40upx;
					padding-left: 8upx;
				}
			}
			
		}
	}
	
	.on_order {
		display: flex;
		align-items: center;
		justify-content: center;
		// height: 100vh;
		// width: 100vw;
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
		// width: 100vw;
		color: #C0C4CC;
		margin-bottom: 110upx;
	}
	
	.key_cont {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 20upx;
		/* padding: 0upx 0 0 0; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.title {
			font-weight: 500;
			font-size: 32upx;
			line-height: 48upx;
			color: #333;
			margin-bottom: 32upx;
		}
		.cont_ul {
			display: flex;
			align-items: center;
			padding: 20upx 0;
			.ul_text {
				font-weight: 400;
				font-size: 28upx;
				line-height: 48upx;
				color: #333;
				padding-right: 15upx;
			}
		}
	}
	
</style>