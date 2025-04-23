<template>
	<view id="chat">
		<view class="u-page">
			<u-list :height="scrollHeight" :scrollTop="scrollTop" style="padding: 0 18upx;">
				<view style="padding: 20upx;">
					<view class="headCard">
						<view class="head_chat" :style="backImg">
							<view class="head">
								<image :src="log" class="head_img"></image>
								<view class="head_content">我是您的专属无忧秘书-小秘</view>
							</view>
							<view class="head_tip" style="display: flex;">基于先进的AI语言大模型，为您提供全方位的支持与服务 <view
									class="head_price">(免费)</view>
							</view>
							<!-- <view class="head_price">(1k token消耗1.5w算力)</view> -->
							<view
								style="display: flex;margin-top: 8rpx;align-items: center;justify-content: space-between;">
								<view style="display: flex;margin-left: 32rpx;align-items: center;" @click="goShare">
									<!-- <image :src="share" style="width: 28rpx;height: 28rpx;"></image> -->
									<view style="color: #1F64FF;font-size: 24rpx;font-weight: 600;">
										分享赚算力</view>
								</view>
							</view>
						</view>
					</view>
					<view class="notice" v-if="noticeList.length > 0">
						<u-notice-bar :text="noticeList" duration='3000' color="#1E211F" bgColor="#EBF1FF"
							mode="closable" direction="column" @click="toNotice"></u-notice-bar>
					</view>

					<view class="head_ques" v-if="quesShow">
						<view class="title">
							<view class="title_l">
								您可以这样问
							</view>
							<view class="title_r" @click="getQuestionRecommend">
								<image src="@/static/images/change.png"></image>
								<text class="r_txt">换一换</text>
							</view>
						</view>
						<view class="ques_item" v-for="(item,index) in billList" :key="index"
							@click="toAsk(item.content)" v-if="index < 4">
							{{item.content }}
						</view>
					</view>

					<view class="head_grid" v-if="isShow">
						<view class="title">
							<view class="title_l">
								体验更多能力
							</view>
							<view class="title_r" @click="getAbility">
								<image src="@/static/images/change.png"></image>
								<text class="r_txt">换一换</text>
							</view>
						</view>
						<view class="grid_item" v-for="item,index in abilityList" :key="index"
							@click="toAbility(item.num)">
							<text class="item_li">{{ item.content }}</text>
							<u-icon name="arrow-right" color="#424242" size="12"></u-icon>
						</view>
					</view>

					<view class="headCard"
						style="margin-top: 20upx; margin-bottom: 50upx; padding: 20upx; width: calc(100% - 40upx);"
						v-if="isQs">
						<view class="head_title">
							<view class="title_l">不知道聊什么？试试这样问我吧</view>
							<view class="title_r" @click="getQuestionRecommend">
								<image src="@/static/images/change.png" mode="" class="r_img" />
								<text class="r_text">换一批</text>
							</view>
						</view>

						<view class="grid_items" v-for="(item, index) in billList" :key="index"
							@click="toAsk(item.content)" v-if="index > 1">
							<text class="item_li">{{ item.content }}</text>
							<u-icon name="arrow-right" color="#424242" size="12"></u-icon>
						</view>
					</view>
				</view>

				<view class="qwert" :style="{'padding-bottom':Height+'px'}">
					<u-list-item v-for="item,index in messageList" :key="index" class="listItem"
						:anchor="messageList.length">
						<u-row align="top" gutter="5">
							<u-col span="1.5" textAlign="center" align="top" justify="top">
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? log :avatar">
								</image>
							</u-col>
							<u-col span='10' align="center">
								<view v-if="item.type=='assistant'">
									<!-- {{item.code}} -->
									<view class="tips" v-html='item.talk' v-if='index===0'></view>
									<!-- <view v-if="loading" class="talk">
									思考中
								</view> -->

									<view v-else>
										<!-- {{item.code}} -->
										<view class="loadingTalk" v-if="item.talk.indexOf('思考中')!=-1">
											<view class="flexs">
												<image :src="waitImg" mode="" class="loadingImages">
												</image>
												<text style="vertical-align: top; word-break:break-all;"
													v-text="item.talk"></text>
											</view>
											<u-col span="4" v-if="index===messageList.length-1">
												<u-button type='primary'
													:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "70px","font-size":"14px"}'
													size="mini" color="rgba(31, 100, 255, 0.1)" @click="stopStart">
													停止回答
												</u-button>
											</u-col>
										</view>

										<view class="tips" v-else-if="item.code==40022" style="margin-bottom: 50px;">
											<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
											<view style="display: flex; justify-content: space-around;">
												<u-button type="error" color="#FF9B17" v-if="listName == 'one'"
													:customStyle="{'border-radius':'8px','margin-top':'10px', 'flex':'1', 'margin-right':'10px'}"
													@click='goToVip'>升级会员</u-button>
												<u-button type="error" color="#1F64FF"
													:customStyle="{'border-radius':'8px','margin-top':'10px', 'flex':'1'}"
													@click='goToVip'>购买算力包</u-button>
											</view>
											<!-- 弹框 -->
											<view>
												<u-popup :show="pupShow" mode="center" :closeOnClickOverlay='false'
													:customStyle="{ width: '600rpx' }">
													<view style="padding: 40upx;">
														<view
															style='text-align: center;font-weight: 600;margin-bottom: 40upx;'>
															算力不足提醒</view>
														<view style='font-weight: 500;color: #747576;'>您好，尊敬的用户！</view>
														<view style='color: #7E7E7E;'>
															您目前所剩余的算力不足以使用该功能，请您进行前往购买或分享新人获得算力</view>
														<view
															style="display: flex;justify-content: space-between;color: #1678FF;margin-top: 65upx; ">
															<view style="display: flex;">
																<view @click='goToVip' style="margin-right: 10upx;">购买算力
																</view>
																<view @click="goShare">分享好友</view>
															</view>
															<view @click="pupShow=false">取消</view>
														</view>
													</view>
												</u-popup>
											</view>
										</view>

										<view class="tips" v-else-if="item.code==40021" style="margin-bottom: 70px;">
											<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
										</view>
										<veiw v-else>
											<view class="tips">

												<ua-markdown :source="item.talk" :showLine="false" />

												<!-- {{item.history}} -->
												<u-row class='edit'>
													<u-col span="6" align="center" style="font-size: 14px;">
														字数:{{item.textNumber}}
													</u-col>
													<u-col span="6" align="center" style="font-size: 14px;"
														v-if="item.loading">
														消耗:{{item.integral }}w算力
													</u-col>

												</u-row>
												<u-row class='edit' v-if="item.loading">
													<u-col span="6" align="center" style="font-size: 14px;">
														上行:{{item.prompt_tokens}} token
													</u-col>
													<u-col span="6" align="center" style="font-size: 14px;">
														下行:{{item.completion_tokens}} token
													</u-col>
												</u-row>
												<!-- <u-row class='edit' v-if="item.loading && listName == 'six'">
													<u-col span="6" align="center" style="font-size: 14px;">
														消耗:{{item.all_tokens}} token
													</u-col>

												</u-row> -->
												<u-row class='edit'>
													<u-col span="7.5" v-if="item.history"></u-col>
													<u-col span="1" align="center" v-if="!item.history">
														<view>
															<image v-if="item.loading"
																src="../../static/images/time.png" mode="" width="16px"
																height="16px" style="vertical-align: top;"></image>
															<image v-else :src="waitImg" mode="" width="16px"
																height="16px" class="loadingImages">
															</image>
														</view>

													</u-col>
													<u-col span="6.5" align="center" style="font-size: 14px;"
														v-if="!item.history">
														<view>
															<text v-if="item.loading"> 耗时：{{item.time}}秒</text>
															<text v-else> 思考中:{{item.time}}秒</text>
														</view>
													</u-col>
													<!-- <u-col span="3.5" v-if="item.history"></u-col> -->
													<u-col span="1.5">

														<view @click="likeType(1,index)"
															v-if="item.is_like == 0 || item.is_like == 2"><u-icon
																name="thumb-up" color="#999" size="24"></u-icon></view>
														<view @click="likeType(0,index)" v-if="item.is_like == 1">
															<u-icon name="thumb-up-fill" color="#1f64ff"
																size="24"></u-icon>
														</view>
													</u-col>
													<u-col span="2">
														<view @click="likeType(2,index)"
															v-if="item.is_like == 0 || item.is_like == 1"><u-icon
																name="thumb-down" color="#999" size="24"></u-icon>
														</view>
														<view @click="likeType(0,index)" v-if="item.is_like == 2">
															<u-icon name="thumb-down-fill" color="#1f64ff"
																size="24"></u-icon>
														</view>
													</u-col>

													<u-col span="1" @click="copyFun(item.talk)">
														<image src="../../static/images/balckCopy.png" mode=""></image>
													</u-col>
												</u-row>
												<view class="btn_tab">
													<text
														class="tab_left">当前内容为AI生成，不做任何决策使用！由此引发的一切后果，需自行承担，请知悉,已通过阿里云内容安全审核</text>
												</view>

											</view>
											<view :style="[{marginBottom:(imgList.length > 0 ? '100rpx':'0')}]">
												<u-row gutter="20">
													<u-col span="3" textAlign="left" v-if="item.status=='length'">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size": "14px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="continueFun">继续
														</u-button>
													</u-col>

													<!-- {{item.history}} -->
													<u-col span="4" v-if="index===messageList.length-1 && item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="show=true">
															继续提问
														</u-button>
													</u-col>

													<u-col span="4"
														v-if="index===messageList.length-1 && !item.history && !item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="stopChat">
															停止回答
														</u-button>
													</u-col>

													<!-- <u-col span="2.5"
														v-if="index===messageList.length-1 && !item.history && item.loading && chat_li == 1">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="againQs(messageList[messageList.length - 2].talk, 4)">
															重试
														</u-button>
													</u-col>
													
													<u-col span="2.5"
														v-if="index===messageList.length-1 && !item.history && item.loading && chat_li == 2">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="againQs(messageList[messageList.length - 2].talk, 5)">
															重试
														</u-button>
													</u-col>
													
													<u-col span="2.5"
														v-if="index===messageList.length-1 && !item.history && item.loading && chat_li == 3">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="againQs(messageList[messageList.length - 2].talk, 8)">
															重试
														</u-button>
													</u-col> -->

													<u-col span="4" v-if="index===messageList.length-1 && item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","width":"100px", "margin-bottom": "50px","font-size":"14px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)" @click="toIdea">
															投诉及建议
														</u-button>
													</u-col>

												</u-row>
											</view>

										</veiw>
									</view>
								</view>

								<view v-else>

									<!-- <text class="talk" style="background: #1F64FF;color:#fff">{{item.talk}}</text> -->
									<view class="talk" style="background: #1F64FF;color:#fff"
										@longpress="copyFun(item.talk)">

										<view style="font-size:16px; word-break:break-all;">
											{{item.talk}}
										</view>
										<view v-if="item.images.length > 0">
											<image :src="getImgUrl(item.images[0])"
												style="height: 500rpx; width: 500rpx" mode="aspectFit"
												@click="checkImg(item.images[0])"></image>
										</view>
										<!-- 
										<image src="@/static/images/copy.png" mode="" @click="copyFun(item.talk)">
										</image> -->
									</view>

								</view>
							</u-col>
						</u-row>

					</u-list-item>

				</view>

			</u-list>


		</view>

		<view class="bottomInput" ref="textInput" :style="{bottom:Height+'px'}">
			<view class="btn_link">
				<view class="link_l">
					<view class="l_chat" style="margin-right: 15rpx;background: #1f64ff;
    color: #fff;" @click="addChat" v-if="messageList.length > 1 && messageList[messageList.length - 1].loading">
						<u-icon name="plus" color="#fff" size="14"></u-icon>
						<text class="l_text">新会话</text>
					</view>
					<view class="l_chat" @click="toHistory">
						<u-icon name="clock" color="#1F64FF" size="16"></u-icon>
						<text class="l_text">历史会话</text>
					</view>
				</view>
				<view class="link_l">
					<view class="l_chat" @click="takePhoto">
						<u-icon name="camera" color="#1F64FF" size="20"></u-icon>
						<text class="l_text">看图说话</text>
					</view>
				</view>
			</view>


			<u-row align='bottom' gutter="5">
				<u-col span="9.5">
					<view class="chat_input">
						<u-textarea v-model="chatInputValue" placeholder="在此输入您想了解的内容" @confirm="sendMessage" autoHeight
							:showConfirmBar='false' :adjustPosition='false' @focus='inputFocus' @blur='inputBlur'
							maxlength='-1' :disableDefaultPadding='true' @keyboardheightchange='keyboardheightchange'
							border='none' :focus="false">
						</u-textarea>
						<view v-if="imgList.length > 0">
							<view class="input_right" v-for="(val, index) in imgList" :key="index">
								<image :src="getImgUrl(val)" class="inputImg"></image>
								<text class="input_text"></text>
								<u-icon name="close" size="18" @click="imgList.splice(index,1)"></u-icon>
							</view>
						</view>


					</view>

				</u-col>
				<u-col span="2.5" align="bottom">
					<u-button type="primary" color="#1F64FF" @click="sendMessage">发送</u-button>
				</u-col>
			</u-row>

		</view>
		<u-modal :show="show" @cancel="show = false" confirmText="确定" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="showFun">
			<view class="modal">
				<view class="edit">

					<view class="changes"></view> 继续提问
				</view>
				<view class="content">
					<u--textarea v-model="complete" placeholder="请输入继续对话的内容" border="none" height='110px'></u--textarea>
					<!-- {{content.prompts_name}} -->
				</view>

			</view>

		</u-modal>
		<u-popup :show="transitionShow" mode="bottom" :round="10" :closeOnClickOverlay="false"
			@close="transitionShow=false">
			<view class="pop_cont">
				<view class="cont_top">
					<view class="top_l">是否关联上下文</view>
					<!-- <image class="close_img" src="@/static/user/close.png" @click="transitionShow=false" /> -->
				</view>
				<view class="cont_mid" @click="radioChange(false)">
					<view class="mid_l">是</view>
					<!-- <image class="mid_img" src="@/static/user/done.png" v-if="selectDone == '有'" /> -->
				</view>
				<view class="cont_mid" @click="radioChange(true)">
					<view class="mid_l">否</view>
					<!-- <image class="mid_img" src="@/static/user/done.png" v-if="selectDone == '没有'" /> -->
				</view>

				<!-- <view class="cont_btn">
					<view class="btn_sub" @click="radioChange(selectDone=='没有'?true:false)">确定</view>
				</view> -->
			</view>
		</u-popup>

	</view>
</template>

<script>
	import {
		creatChat,
		chat_likes,
		chat_session,
		xfChat,
		getUserInfo
	} from "@/apis/chat.js"
	import {
		getQuestionRecommend,
		saveFootprint,
		getMessage,
		getRealNameAuthentication,
		realNameAuthentication,
		putRealName,
		orderList
	} from "@/apis/user.js"
	import {
		getVoiceList
	} from '@/apis/home.js'
	import Title from "@/pages/title/index.vue"
	import * as TextEncoding from 'text-encoding-shim';
	import uaMarkdown from '../../components/ua2-markdown/ua-markdown.vue'

	export default {
		data() {
			return {
				prompt: '你是优秘智能公司开发的大语言模型， 名字叫 UMI bot，言辞简洁，每次回答控制在30 个字以内，现在开始：',

				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				backImg: 'background-image: url("' + global.baseImg + '/xcx/com/message_center/Rectangle.png")',
				isQs: false,
				isShow: true,

				pupShow: true,
				src: '',
				scrollHeight: 0,
				selectDone: false,
				Height: 0,
				scrollTop: 593,
				key: 0,
				upDownText: false,
				show: false,
				transitionShow: false,
				complete: "",

				radioValue: true,
				chatInputValue: "",
				chat_type: -5, //4文心一言5讯飞星火8chatGlm
				chat_li: 1, //用来展示哪个重试按钮
				loading: true,
				session_code: "",
				chat_group_code: "",
				supplement: {
					msg_list: []
				},
				isBtn: false,

				//文心一言
				stop_three: false,
				three_shi: 0,
				three_time: 0,
				requestTask_three: '',

				userRole: "",
				billList: [],
				imgList: [],
				messageList: [],
				noticeList: [], // 消息公告

				stImg: global.baseImg + '/xcx/244751fa-1bbb-4a95-bafb-76b4c8f4f88a.jpg',
				aiImg: global.baseImg + '/xcx/6ddf8a53-52d1-40ec-9430-ec92a2f429f0.jpg',
				waitImg: global.baseImg + '/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',
				share: global.baseImg + '/xcx/com/message_center/chatShare.png',

				avatar: "",

				page_no: 1,
				page_count: 10,
				pageTotal: 0,

				quesShow: true,
				abilityList: [],
				voiceNum: 0,
				listNum: 0,
			}
		},
		components: {
			Title,
			uaMarkdown
		},

		onLoad(query) {

			// console.log(uni.getSystemInfoSync().windowHeight - uni.upx2px(80) - 56 - 44 - 44,
			// 	'uni.getSystemInfoSync().windowHeight');

			this.scrollHeight = uni.getSystemInfoSync().windowHeight - uni.upx2px(80)
		},
		watch: {

		},
		onShow() {
			this.getOrderList();
			this.getHumanList()
			this.putRealName()
			if (uni.getStorageSync('chatInfo') == 1) {
				this.addChat()
				uni.setStorageSync('chatInfo', '')
			}
			if (this.messageList.length > 0) {
				let three_code = this.messageList[this.messageList.length - 1].code;

				if (three_code == 40022) { // 去除登录或升级vip提示
					this.messageList.pop()
				}
			}

			this.getQuestionRecommend() // 获取问题集
			this.getAbility()
			setTimeout(() => {
				this.getNoticeList()
			}, 800)

			let avatarUrl = global.baseImg + '/' + uni.getStorageSync("avatarUrl");
			this.avatar = avatarUrl;

			// 获取相机信息
			if (uni.getStorageSync('cameraInfo') != '') {
				let sendInfo = uni.getStorageSync('cameraInfo')
				this.chatInputValue = sendInfo.chatValue
				this.imgList = sendInfo.imgList
				// console.log(sendInfo,415866666)
				uni.setStorageSync('cameraInfo', '')
			}


			if (uni.getStorageSync('page_code') != '') {
				this.historySession(uni.getStorageSync('page_code'))
			}

		},
		onHide() {
			this.radioValue = true
		},
		methods: {

			// 获取公告列表
			getNoticeList() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
					'is_arousel': '1',
					'page_index': this.page_no,
					'page_count': this.page_count
				}
				this.isRead = false;
				getMessage(val).then(res => {
					if (res.code == 20000) {
						res.data.forEach((ele, index) => {
							if (index < 5) {
								this.noticeList.push(ele.title)

							}
							uni.setStorageSync('noticeInfo', this.noticeList)
							if (ele.is_read == 0) {
								this.isRead = true
							}
						})

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取公告失败');
				})
			},


			// 获取问题集
			getQuestionRecommend() {
				this.billList = []
				getQuestionRecommend().then(res => {
					if (res.code == 20000) {
						this.billList = this.billList.concat(res.data[0]);
						this.billList = this.billList.concat(res.data[1]);
						console.log(this.billList, 778)
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},
			// 随机能力
			getAbility() {
				const list = [{
					content: '优选能力',
					num: 1
				}, {
					content: '对话模型',
					num: 2
				}, {
					content: '绘画模型',
					num: 3
				}, {
					content: 'AI工具集',
					num: 4
				}, {
					content: 'AI超级能力',
					num: 5
				}, {
					content: 'AI实验室',
					num: 6
				}, {
					content: 'AI数字孪生',
					num: 7
				}, {
					content: 'AI资讯',
					num: 8
				}, {
					content: 'AI知识库',
					num: 9
				}, {
					content: '声音克隆',
					num: 10
				}, {
					content: 'AI数字分身',
					num: 11
				}];

				// 随机打乱数组中元素的顺序
				list.sort(() => Math.random() - 0.5);

				// 选取前6个元素，形成一个新的数组
				this.abilityList = list.slice(0, 8);

			},
			toAbility(num) {
				if (num == 1) {
					uni.navigateTo({
						url: '/childCont/more_function/more_ability'
					})
				} else if (num == 2) {
					uni.navigateTo({
						url: '/childCont/more_function/more_chat'
					})
				} else if (num == 3) {
					uni.navigateTo({
						url: '/childCont/more_function/more_draw'
					})
				} else if (num == 4) {
					uni.navigateTo({
						url: '/childCont/more_function/assemble'
					})
				} else if (num == 5) {
					uni.navigateTo({
						url: '/childCont/more_function/more_tool'
					})
				} else if (num == 6) {
					uni.navigateTo({
						url: '/childCont/more_function/more_experiment'
					})
				} else if (num == 7) {
					uni.setStorageSync('applyName', 'AI数字孪生')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				} else if (num == 8) {
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				} else if (num == 9) {
					uni.navigateTo({
						url: '/childCont/repository/repository'
					})
				} else if (num == 10) {
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
				} else if (num == 11) {
					let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
					if (memberInfo.is_real_name == 1) {
						this.toH5Link()
						return
					}
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			},
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

			// 获取用户列表
			getInfo() {
				getUserInfo().then(res => {
					if (res.code == 20000) {
						this.userInfo = res.data;
						this.avatarUrl = global.baseImg + '/' + res.data.avatar_url
						this.level = res.data.d_level
						uni.setStorageSync('memberInfo', JSON.stringify(res.data));
						uni.setStorageSync("avatarUrl", res.data.avatar_url);
						uni.setStorageSync("level_expire_time", res.data.level_expire_time);
						if (this.userInfo.role != 'guess') {
							this.serveInfo()
						}
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					// this.$api.msg('获取信息失败！')
				})
			},
			// 获取验证结果
			putRealName() {
				let val = {
					verify_token: uni.getStorageSync('namelink')
				}
				putRealName(val).then(
					res => {
						if (res.code == 20000) {
							if (res.data.success) {
								this.$api.msg('实名认证成功')
								this.getInfo()
								uni.setStorageSync('namelink', '')
							}
						}
					}
				).catch(err => {})
			},
			toH5Link() {

				uni.showModal({
					title: '提示',
					content: '使用该功能需实名认证，点击确定进行实名',
					success(res) {
						if (res.confirm) {
							// uni.navigateTo({
							// 	url: '/childPage/news/h5Link',
							// })
							let val = {
								"path": "/pages/chat/chat_history", //#  跳转路径，为空跳首页
								"query": "", //# 想要携带的query参数
								"env_version": "" //# 跳转的版本默认release线上
							}

							getRealNameAuthentication(val).then(res => {
								if (res.code == 20000) {
									let href = res.data.openlink
									uni.setStorageSync('href', href)
									let data = {
										// "success_url": href,
										// "failed_url": href,
										// "is_xcx": 1
									}
									realNameAuthentication(data).then(res => {
										if (res.code == 20000) {
											// console.log(45610);
											uni.setStorageSync('namelink', res.data.verify_token)
											uni.navigateTo({
												url: '/childPage/news/h5Link',
											})
										} else {
											this.$api.msg(res.msg)
										}
									}).catch(err => {
										this.$api.msg('跳转失败')
									})

								} else {
									this.$api.msg(res.msg)
								}
							}).catch(err => {
								this.$api.msg('跳转失败')
							})
						}
					}
				})


			},


			keyboardheightchange(e) {
				// console.log(e, '键盘高度变化');
				if (e.detail.height == 0) {

					// console.log(e);
					uni.showTabBar({
						// animation: true
					})
					this.Height = 0
					this.isBtn = false
				} else {
					this.isBtn = true
				}
				// this.toBottom()
			},

			inputFocus(e) {

				// console.log(e, "eeeeeeeeee7");
				// console.log(this.isBtn,995)
				if (this.isBtn) {
					uni.hideTabBar({
						// animation: true
					})
					this.$nextTick(() => {
						this.Height = e.detail.height
						this.toBottom()
					})
				} else {
					this.Height = 0
				}



			},
			goToLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			inputBlur(e) {
				uni.showTabBar({
					// animation: true
				})
				this.$nextTick(() => {
					this.Height = 0
				})
				uni.setStorageSync('talkInfo', '')

			},
			goToVip() {
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/pages/user/vip/vip',
					})
				}

			},
			historySession(session) {

				// console.log(session);
				if (this.messageList.length > 0) {
					let send_talk = this.messageList[this.messageList.length - 1].talk;
					let send_loading = this.messageList[this.messageList.length - 1].loading;
					let send_time = this.messageList[this.messageList.length - 1].time;

					// console.log(this.messageList[this.messageList.length - 1].time, 888);
					if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

						this.$api.msg('当前问题还没回答完毕，请稍后再查看！')
						return
					}

					if (send_loading == false && send_time > 0) {

						this.$api.msg('当前问题还没回答完毕，请稍后再查看！')
						return
					}
				}

				this.messageList = [];
				chat_session(session).then(res => {
					console.log(res, '初始化信息');
					//初始化信息
					this.supplement = {
						chat_type: this.chat_type,
						// action_type: 3,
						// session_code: this.session_code,
						// chat_group_code: this.chat_group_code,
						// stream_str: 1,
						// is_decode: 1,
						msg_list: []
					}

					res.data.map((item, tip) => {
						this.supplement.session_code = item.session_code
						this.supplement.chat_group_code = item.chat_group_code
						// if(item.content.indexOf('(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)') != -1) {
						// 	item.content = item.content.replace('(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)', '')
						// }
						if (item.images == null) {
							item.images = []
						}
						this.messageList.push({
							talk: item.content,
							type: item.role,
							integral: item.integral,
							completion_tokens: item.completion_tokens,
							prompt_tokens: item.prompt_tokens,
							time: 0,
							code: 200,
							// status,
							loading: true,
							all_tokens: item.total_tokens,
							textNumber: item.content.replace(/[\r\n]/g, "").length,
							history: true,
							session_code: item.session_code,
							chat_group_code: item.chat_group_code,
							images: item.images,
							model: item.model,
							is_like: item.is_likes
						})
						this.supplement.msg_list.push({
							role: item.role,
							content: item.content
						})

						this.isShow = false
						this.quesShow = false
						this.isQs = false

					})
					// console.log(this.messageList[this.listName], 'res');

					this.toBottom()
					this.$forceUpdate()
					uni.setStorageSync('page_code', '')

				})

			},

			copyFun(val) {
				wx.setClipboardData({
					data: val, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				})
			},

			//重新提问
			againQs(val, type) {
				if (type == 4) {
					this.chat_li = 2
				} else if (type == 5) {
					this.chat_li = 3
				} else {
					this.chat_li = 1
				}
				let send_talk = this.messageList[this.messageList.length - 1].talk;
				let send_loading = this.messageList[this.messageList.length - 1].loading;
				let send_time = this.messageList[this.messageList.length - 1].time;

				// console.log(this.messageList[this.messageList.length - 1].time, 888);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后提问！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
					return
				}
				this.chatInputValue = val;
				this.chat_type = type
				this.selectDone = true
				// this.selectDone = '有';
				// this.transitionShow = false;
				this.sendMessage(this.chatInputValue)
			},

			// 停止回答
			stopChat() {

				this.stop_three = true
				this.requestTask_three.abort();
				clearInterval(this.three_shi)
				clearInterval(this.three_time)
				this.messageList[this.messageList.length - 1].loading = true
				this.$forceUpdate()
			},

			// 停止开始回答
			stopStart() {
				this.stop_three = true
				this.requestTask_three.abort();
				clearInterval(this.three_shi)
				clearInterval(this.three_time)
				this.messageList.splice(this.messageList.length - 2, 2)
				this.$forceUpdate()
			},

			// 开启新会话 
			addChat() {
				let send_talk = this.messageList[this.messageList.length - 1].talk;
				let send_loading = this.messageList[this.messageList.length - 1].loading;
				let send_time = this.messageList[this.messageList.length - 1].time;

				// console.log(this.messageList[this.messageList.length - 1].time, 888);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再操作！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再操作！')
					return
				}
				this.isQs = false; // 显示热搜提问
				this.isShow = true
				this.quesShow = true
				this.messageList = [];
				this.session_code = '';
				this.chat_group_code = ''
				this.imgList = []
			},

			radioChange(e) {

				if (e) {
					this.upDownText = false
					this.selectDone = true
					this.messageList.splice(0, this.messageList.length - 1)
					this.sendMessage(this.chatInputValue)
				} else {
					let arr = []
					this.messageList.map((item, index) => {
						arr.push({
							role: item.type,
							content: item.talk,
							images: item.images,
							covert_content: this.prompt
						})

					})
					this.supplement.msg_list = arr
					this.supplement.chat_group_code = ''
					this.upDownText = true
					this.selectDone = true
					this.sendMessage(this.chatInputValue)
				}
				this.transitionShow = false
			},
			toBottom() {
				let that = this
				this.$nextTick(() => {
					setTimeout(() => {
						let query = uni.createSelectorQuery()
						query.select('.qwert').boundingClientRect()
						// query.select('#msglistview').boundingClientRect()
						query.exec((res) => {

							that.scrollTop = res[0].height + this.Height - 30;
						})
					}, 1500)

				})
			},

			//继续回调
			continueFun() {
				this.supplement.msg_list.push({
					role: 'user',
					content: '继续'
				})
				this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)
				this.creatChatFun(this.supplement, 'continue')
				this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
				//删除继续的数据
				this.supplement.msg_list.pop()
			},
			base64ToString(encodedString) {
				// console.log(encodedString, 'encodedString');
				// Convert the Base64 string to a Uint8Array
				var decodedData = Uint8Array.from(this.atob(encodedString), c => c.charCodeAt(0));

				// Create a TextDecoder instance with the appropriate character encoding
				var decoder = new TextEncoding.TextDecoder('utf8');

				// Decode the Uint8Array to a string
				var decodedString = decoder.decode(decodedData);

				// console.log(decodedString, 'decodedStringdecodedString');
				// console.log(decodedString, 'decodedStringdecodedString');
				return decodedString;
			},

			//解码
			atob(string) {
				string = String(string).replace(/[\t\n\f\r ]+/g, "");
				// console.log('解码string',string);
				var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
				if (!b64re.test(string))
					throw new TypeError(
						"Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
				string += "==".slice(2 - (string.length & 3));
				var bitmap, result = "",
					r1, r2, i = 0;
				for (; i < string.length;) {
					bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12 |
						(r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));
					result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
						r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
						String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
				}
				return result;

			},

			//信息回调方法
			creatChatFun(data, state) {

				let three_num = 0;
				this.messageList.push({
					talk: `思考中,耗时${three_num}秒`,
					type: 'assistant'
				})
				// console.log(this.messageList,'信息回调方法');
				this.three_shi = setInterval(() => {
					three_num++
				}, 1000)
				this.three_time = setInterval(() => {
					this.messageList[this.messageList.length - 1] = {
						talk: `思考中,耗时${three_num}秒`,
						type: 'assistant'
					}
					this.$forceUpdate()
				}, 1000)


				this.toBottom()
				// ==========================================
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				// // console.log(userInfo,'userInfo');
				// data.model = this.chat_pro;
				data.scenario_type = 'chat'
				if (this.chat_type == 4) {
					data.model = 'completions'
				} else if (this.chat_type == 5) {
					data.model = 'v2.1'
				} else {
					data.model = '360GPT_S2_V9';
				}
				this.requestTask_three = uni.request({
					// url: global.baseUrl + '/api/chat/new_chat_session',
					url: global.baseUrl + '/api/chat/async_chat_completion',
					data,
					header: {
						'source': global.source,
						'Authorization': userInfo.token,
						'role': userInfo.role,
					},
					method: 'POST',
					// responseType: 'ArrayBuffer',
					enableChunked: true,
					success: response => {
						// 开启enableChunked后，成功的回调一般用不到，因为响应数据不在这里返回
						// console.log(response, 'ssss6')
						this.messageList[this.messageList.length - 1].loading = true
						// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
						clearInterval(this.three_shi)

						this.$forceUpdate()
					},

					fail(err) {
						console.log(err, 'err');
					},
					complete: (complete) => {
						clearInterval(this.three_shi)
						// console.log(complete,777)

						if (complete.statusCode != 200 && JSON.stringify(complete
								.statusCode) != 'null') {

							// let code
							clearInterval(this.three_time)

							// 非手动停止才执行
							if (!this.stop_three) {
								xfChat(data).then(res => {
									if (res.code < 49999) {
										let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
										// console.log(userInfo.role == 'guess' ,'panduan');

										if (res.code == 40013) {
											this.$api.msg('登录信息已过期，请重新登录')
											this.messageList.pop()
											setTimeout(() => {
												uni.navigateTo({
													url: '/pages/login/login',
												})
											}, 1500)

										} else {
											this.userRole = userInfo.role
											this.messageList[this.messageList.length - 1] = {
												talk: res.msg,
												type: 'assistant',
												time: 0,
												code: res.code == 40022 ? res.code : 40021,
												status: "stop",
												textNumber: 0,
												history: false,
												loading: true
											}
										}
										this.$forceUpdate()
										this.toBottom()
									} else if (res.code > 49999) {
										this.messageList.pop()
										this.$api.msg('网络异常，请稍后重试')
										// this.$api.msg(res.msg)
									} else {
										this.messageList.pop()
										this.$api.msg(res.msg)
									}

								}).catch(err => {
									console.log(err, 'err');
								})

								this.toBottom()
								this.$forceUpdate()
							}

						}
					}
				})
				let strArr = []
				let info = ''
				let integral = 0
				let completion_tokens = 0
				let prompt_tokens = 0
				let tabType = this.listName

				this.requestTask_three.onChunkReceived(response => {
					const arrayBuffer = response.data;
					const uint8Array = new Uint8Array(arrayBuffer);
					const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);
					let status = ''
					let session_code = ''
					let chat_group_code = ''
					let arr = str.match(/\{(.+?)\}/g)

					arr.map((item => {
						console.log(JSON.parse(item).content, 'item');
						if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)

							info += this.base64ToString(JSON.parse(item).content)

						// console.log('片段',info);
						if (JSON.parse(item).code) {
							if (JSON.parse(item).code < 49999) {
								let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
								// console.log(userInfo.role == 'guess' ,'panduan');								
								this.userRole = userInfo.role
								this.messageList[this.messageList.length - 1] = {
									talk: JSON.parse(item).msg,
									type: 'assistant',
									time: 0,
									code: JSON.parse(item).code == 40022 ? JSON.parse(item)
										.code : 40021,
									status: "stop",
									textNumber: 0,
									history: false,
									loading: true
								}
								this.$forceUpdate()
								this.toBottom()
								clearInterval(this.three_time)
								clearInterval(this.three_shi)
								return
							} else {
								this.$api.msg('网络异常，请稍后重试')
							}
						} else {

							this.session_code = JSON.parse(item).session_code
							this.chat_group_code = JSON.parse(item).chat_group_code
							status = JSON.parse(item).finish_reason
							integral = JSON.parse(item).integral
							completion_tokens = JSON.parse(item).completion_tokens
							prompt_tokens = JSON.parse(item).prompt_tokens
							let load_state = false

							if (this.chat_type == 4) {
								if (status == true) {
									load_state = true
								} else {
									load_state = false
								}
							} else if (this.chat_type == 5) {
								if (status == 2) {
									load_state = true
								} else {
									load_state = false
								}
							} else {
								if (status == 'stop') {
									load_state = true
								} else {
									load_state = false
								}
							}

							if (state == 'first') {
								this.supplement = {
									chat_type: this.chat_type,
									action_type: 3,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
									stream_str: 1,
									is_decode: 1,
									msg_list: [{
											role: 'user',
											content: data.content,
											covert_content: this.prompt
										},
										{
											role: 'assistant',
											content: info,
										}
									]
								}
							}

							//继续提问和补充
							if (state == 'continue') {
								//把数据变成Array
								try {
									// console.log('进来了', info);	
									this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
								} catch (e) {
									console.log('我不是JSON');
								}

								this.supplement.msg_list.push({
									role: 'assistant',
									content: info,
								})
							}
							clearInterval(this.three_time)


							//重置最后一条信息
							this.messageList[this.messageList.length - 1] = {
								talk: info,
								type: 'assistant',
								time: three_num,
								code: 200,
								history: false,
								status,
								integral,
								completion_tokens,
								prompt_tokens,
								textNumber: info.replace(/[\r\n]/g, "").length,
								loading: load_state,
								session_code: this.session_code,
								chat_group_code: this.chat_group_code,
								is_like: 0
							}

							if (load_state) { //保存记录
								let save_val = {
									"type_name": "对话",
									"type_code": "chat",
									"title": data.content,
									"eid": this.session_code
								}

								this.saveFootprint(save_val)
							}
						}
						this.toBottom()
						this.$forceUpdate()

					}))

				})

			},
			//补充提问
			async showFun() {
				if (this.complete.trim() == '') {
					this.$api.msg('补充内容不能为空')
					return false;
				}
				// this.supplement.msg_list.push({
				// 	role: 'user',
				// 	content: this.complete
				// })
				if (this.chat_type == 4 || this.chat_type == 5 || this.chat_type == 8) {
					this.supplement.msg_list = [{
							role: 'user',
							content: this.messageList[this.messageList.length - 2].talk,
							images: this.messageList[this.messageList.length - 2].images
						},
						{
							role: 'assistant',
							content: this.messageList[this.messageList.length - 1].talk,
							images: []
						},
						{
							role: 'user',
							content: this.complete,
							images: []
						}
					]
				} else {
					this.supplement.msg_list = [{
							role: 'assistant',
							content: this.messageList[this.messageList.length - 1].talk,
							images: []
						},
						{
							role: 'user',
							content: this.complete,
							images: []
						}
					]
				}

				this.messageList.push({
					talk: this.complete,
					type: 'user',
					images: []
				})
				//把数据变成JSON
				this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)
				this.show = false


				this.complete = ""
				// console.log(this.supplement,5218)
				await this.creatChatFun(this.supplement, 'continue')
				this.$forceUpdate()

			},
			async sendMessage(message) {
				if (this.messageList.length > 0) {
					let send_talk = this.messageList[this.messageList.length - 1].talk;
					let send_loading = this.messageList[this.messageList.length - 1].loading;
					let send_time = this.messageList[this.messageList.length - 1].time;
					let history = this.messageList[this.messageList.length - 1].history;

					// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1], 8871);
					if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

						this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
						return
					}

					if (send_loading == false && send_time > 0) {

						this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
						return
					}
					if (send_time == 0 && !history) {
						this.messageList.pop()
					}
				}

				if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容')


				this.isShow = false; // 隐藏热搜提问
				this.quesShow = false
				this.isQs = false;


				//判断是否是第一条提问

				// console.log(this.selectDone, 'this.messageList[this.listName].length');
				this.stop_three = false; // 重置手动停止按钮

				if (this.messageList.length > 1 && !this.selectDone) {
					console.log('关联上下文')
					this.transitionShow = true //询问是否关联上下文
					return
				}

				uni.setStorageSync('talkInfo', '')


				let img_url = ''
				if (this.imgList.length > 0) {
					img_url = this.imgList
				} else {
					img_url = ''
				}
				this.messageList.push({
					talk: this.chatInputValue,
					type: 'user',
					images: img_url
				})

				// const hide_cont = '(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)';
				let chat_cont = this.chatInputValue
				let data = {
					chat_type: this.chat_type,
					action_type: '3',
					session_code: this.session_code,
					chat_group_code: "",
					content: chat_cont,
					stream_str: 1,
					is_decode: 1,
					msg_list: [{
						role: 'user',
						// covert_content: `回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字\n以下是我的问题：`, 
						convert_content: '',
						content: chat_cont,
						covert_content: this.prompt
					}]
				}

				if (this.imgList.length > 0) {
					data.msg_list[0].images = this.imgList
				}
				data.msg_list = JSON.stringify(data.msg_list)
				// console.log(data.msg_list,4725)

				if (this.upDownText) {
					this.supplement.msg_list.push({
						role: 'user',
						content: this.chatInputValue,
						images: this.imgList,
						covert_content: this.prompt
					})
					this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)
					this.radioValue = true
					this.upDownText = false
					await this.creatChatFun(this.supplement, 'continue')
				} else {
					await this.creatChatFun(data, 'first')
				}

				this.selectDone = false
				this.chatInputValue = ''
				this.imgList = []


			},

			toHistory() {
				uni.navigateTo({
					url: '/pages/chat/chat_history'
				})
			},

			// 前往提问
			toAsk(val) {
				this.chatInputValue = val;
				// this.askShow = false;
			},

			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},

			// 图片预览
			checkImg(url) {
				let img_url = global.baseImg + '/' + url
				uni.previewImage({
					urls: [img_url],
					current: 0
				})
			},
			// 上传图片
			takePhoto() {

				uni.setStorageSync('tabStatus', this.chat_type)
				uni.navigateTo({
					url: '/childPage/chat/camera?chatValue=' + this.chatInputValue + '&source=4'
				})
			},

			// 保存到最近打开
			saveFootprint(data) {
				saveFootprint(data).then(res => {
					if (res.code == 20000) {

					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('保存失败！')
				})
			},

			// 点赞点踩
			likeType(val, index) {

				let data = {
					is_likes: val,
					session_code: this.session_code,
					chat_group_code: this.chat_group_code
				}
				this.messageList[index].is_like = val
				this.$forceUpdate()

				chat_likes(data).then(res => {
					// uni.showToast({ //提示
					// 	title: '评价成功'
					// })
				})

			},
			//算力不足弹框
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			},
			goShare() {
				uni.navigateTo({
					url: '/childPage/distribution/share'
				})

			},

			//登录
			toLogin() {
				this.$api.msg('请登录后继续体验')
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				}, 800)

			},

			toBottom() {
				let that = this
				this.$nextTick(() => {
					setTimeout(() => {
						let query = uni.createSelectorQuery()
						query.select('.qwert').boundingClientRect()
						// query.select('#msglistview').boundingClientRect()
						query.exec((res) => {

							that.scrollTop = res[0].height + this.Height - 30;
						})
					}, 1500)

				})
			},

			toMore() {
				uni.switchTab({
					url: '/pages/chat/chat',
				})
			},
			toNotice() {
				uni.navigateTo({
					url: "/childPage/notice/notice"
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	@import "@/static/css/chat.less";

	.qwert {
		padding: 20upx 20upx 0 20upx;
	}

	.tips {
		width: calc(100% - 40upx) !important;
	}

	.headCard {
		width: 100%;
		border-radius: 10upx;
		// padding: 20upx;
		background: #fff;

		.head_chat {
			width: calc(100% - 40upx);
			height: 160upx;
			padding: 20upx;
			border-radius: 10upx;

			.head {
				display: flex;
				align-items: center;

				.head_img {
					width: 80upx;
					height: 80upx;
				}

				.head_content {
					color: #1F64FF;
					font-size: 36upx;
					font-style: normal;
					font-weight: 500;
					line-height: 80upx;
					padding-left: 10upx;
				}
			}

			.head_tip {
				color: #242F49;
				font-size: 24upx;
				font-style: normal;
				font-weight: 400;
				line-height: 40upx;
			}

			.head_price {
				// color: #7EA6FC;
				color: #f00;
				font-size: 24upx;
				font-style: normal;
				font-weight: 400;
				line-height: 40upx;
			}
		}


		.head_title {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title_l {
				color: #000;
				font-size: 30upx;
				font-weight: 500;
				line-height: 50upx;
			}

			.title_r {
				display: flex;

				.r_img {
					width: 40upx;
					height: 40upx;
				}

				.r_text {
					color: #1F64FF;
					font-size: 26upx;
					font-style: normal;
					font-weight: 400;
					line-height: 50upx;
				}
			}

		}

		.grid_items {
			width: calc(100% - 40upx);
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 10upx;
			background: #F7F7F9;
			padding: 10upx 20upx;
			margin: 20upx 0;

			.item_li {
				color: #26244B;
				font-size: 28upx;
				font-style: normal;
				font-weight: 400;
				line-height: 40upx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; // 控制多行的行数
				-webkit-box-orient: vertical;
			}
		}
	}

	.head_grid {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 20upx 20upx 10upx 20upx;
		background-color: #fff;
		margin-bottom: 80rpx;
		margin-top: 24rpx;

		.grid_item {
			width: 35%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 10rpx;
			background: #F7F7F9;
			padding: 28rpx 32rpx;
			margin: 10rpx 0;

			.item_li {
				color: #26244B;
				font-size: 28upx;
				font-style: normal;
				font-weight: 400;
				line-height: 40upx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; // 控制多行的行数
				-webkit-box-orient: vertical;
				padding-right: 10upx;
			}

			.item_li_l {
				color: #26244B;
				font-size: 28upx;
				font-style: normal;
				font-weight: 400;
				line-height: 40upx;
				flex: 1;
				text-align: center;
			}
		}
	}

	.btn_link {
		display: flex;
		align-items: center;
		width: 100%;

		.link_l {
			display: flex;
			margin-right: 20rpx;

			.l_chat {
				border-radius: 6upx;
				border: 1upx solid #1F64FF;
				padding: 0rpx 10rpx;
				height: 45rpx;
				color: #1F64FF;
				font-size: 24upx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				margin-bottom: 10upx;
				display: flex;
				align-items: center;

				.l_text {
					padding-left: 8upx;
				}
			}
		}
	}

	.chat_input {
		border-radius: 6upx;
		border: 1upx solid #E5E6EB;

		// padding: 10upx;
		.input_right {
			display: flex;
			align-items: center;
			border-radius: 6upx;
			border: 1upx solid #E5E5E5;
			padding-right: 20upx;
			width: 148rpx;
			margin: 0 0 10upx 10upx;

			.inputImg {
				width: 90upx;
				height: 90upx;
				border-radius: 6upx 0 0 6upx;
			}

			.input_text {
				height: 90upx;
				width: 20upx;
				border-left: 1upx solid #E5E5E5;
			}
		}
	}

	.cont_tabs {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f6f8fb;
	}

	.tabs_l {
		// width: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20upx;
		position: relative;
	}

	.active_tabs {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		line-height: 50upx;
		color: #fff;
		background: #1F64FF;
		border-radius: 8upx;
		padding: 0 15upx;
	}

	.tabs {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		line-height: 50upx;
		color: #999;
		border-radius: 8upx;
		background: #FFF;
		padding: 0 15upx;
	}

	.cont_active {
		width: 100%;
		text-align: center;
		color: #4E5969;
		font-size: 24upx;
		font-style: normal;
		font-weight: 400;
		line-height: 50upx;
		// background: #fff;
	}

	.notice {
		border-radius: 10upx;
		margin: 24rpx 0;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32rpx;
		width: 100%;

		.title_l {
			color: #000;
			font-size: 32rpx;
			font-weight: 500;
		}

		.title_r {
			display: flex;
			align-items: center;

			image {
				width: 40rpx;
				height: 40rpx;
			}

			.r_txt {
				color: #1F64FF;
				font-size: 26rpx;
			}
		}
	}

	.head_ques {
		background-color: #fff;
		padding: 32rpx;

		.ques_item {
			width: 90%;
			padding: 7rpx 32rpx;
			border-radius: 16rpx;
			background: #F7F7F9;
			color: #26244B;
			font-size: 28rpx;
			margin-top: 24rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>