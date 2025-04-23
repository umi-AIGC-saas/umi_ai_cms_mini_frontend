<template>
	<view id="chat">
		<Title :title='"对话"' />
		<!-- <view
			style="width: 100%; background-color: #fff; display: flex; align-items: center; justify-content: space-between;"> -->
			
			<!-- <view class="right_text" @click="toHistory">历史对话</view> -->
		<!-- </view> -->
		<u-tabs :list="list" lineWidth='50' lineHeight='2' lineColor='#1f64ff'
			:activeStyle='{color: "#1F64FF","font-size":"30rpx"}' @change='tabsChange' :current='current'
			:inactiveStyle='{"font-size":"30rpx"}'></u-tabs>

		<view class="u-page">
			<!-- {{radioValue}} -->
			<!-- {{messageList}}{{listName}} -->
			<!-- <view class="notice" style="margin-bottom: 20rpx;" v-if="noticeList.length > 0">
				<u-notice-bar
						:text="noticeList"
						mode="link"
						direction="column"
						url="/pages/notice/notice"
				></u-notice-bar>
			</view> -->

			<u-list :height="scrollHeight" :scrollTop="scrollTop" style="padding: 0 18upx;">
				<view class="cont_tabs">
					<view class="tabs_l" v-if="listName == 'three'">
						<view @click="version(1)" :class="[chat_active == 1 ? 'active_tabs' : 'tabs']">文心一言_Turbo</view>
					</view>
					<view class="tabs_l" v-if="listName == 'three'">
						<view @click="version(2)" :class="[chat_active == 2 ? 'active_tabs' : 'tabs']">文心一言</view>
					</view>
					<view class="tabs_l" v-if="listName == 'three'">
						<view @click="version(3)" :class="[chat_active == 3 ? 'active_tabs' : 'tabs']">
							文心一言-4
							<!-- <u-badge type="error" value="推荐" shape="horn" absolute :offset="[0,-10]"></u-badge> -->
						</view>
					</view>

					<view class="tabs_l" v-if="listName == 'four'">
						<view @click="version(4)" :class="[chat_active == 4 ? 'active_tabs' : 'tabs']">v1.1</view>
					</view>
					<view class="tabs_l" v-if="listName == 'four'">
						<view @click="version(5)" :class="[chat_active == 5 ? 'active_tabs' : 'tabs']">v2.1</view>
					</view>
					<view class="tabs_l" v-if="listName == 'four'">
						<view @click="version(6)" :class="[chat_active == 6 ? 'active_tabs' : 'tabs']">v3.1</view>
					</view>

					<view class="tabs_l" v-if="listName == 'seven'">
						<view @click="version(7)" :class="[chat_active == 7 ? 'active_tabs' : 'tabs']">qwen-turbo</view>
					</view>
					<view class="tabs_l" v-if="listName == 'seven'">
						<view @click="version(8)" :class="[chat_active == 8 ? 'active_tabs' : 'tabs']">qwen-plus</view>
					</view>

					<!-- 火山云雀 -->
					<view class="tabs_l" v-if="listName == 'twelve'">
						<view @click="version(20)" :class="[chat_active == 20 ? 'active_tabs' : 'tabs']">chat</view>
					</view>
					<view class="tabs_l" v-if="listName == 'twelve'">
						<view @click="version(21)" :class="[chat_active == 21 ? 'active_tabs' : 'tabs']">4k</view>
					</view>
					<view class="tabs_l" v-if="listName == 'twelve'">
						<view @click="version(22)" :class="[chat_active == 22 ? 'active_tabs' : 'tabs']">lite</view>
					</view>
					<view class="tabs_l" v-if="listName == 'twelve'">
						<view @click="version(23)" :class="[chat_active == 23 ? 'active_tabs' : 'tabs']">plus</view>
					</view>
					<view class="tabs_l" v-if="listName == 'twelve'">
						<view @click="version(24)" :class="[chat_active == 24 ? 'active_tabs' : 'tabs']">pro</view>
					</view>
					<!-- 腾讯混元 -->
					<view class="tabs_l" v-if="listName == 'eleven'">
						<view @click="version(25)" :class="[chat_active == 25 ? 'active_tabs' : 'tabs']">标准版</view>
					</view>
					<view class="tabs_l" v-if="listName == 'eleven'">
						<view @click="version(26)" :class="[chat_active == 26 ? 'active_tabs' : 'tabs']">高级版</view>
					</view>

				</view>
				<!-- <view class="cont_active">{{ active_text }}</view> -->
				<view class="qwert" :style="{'padding-bottom':Height+'px'}">
					<u-list-item v-for="item,index in messageList[listName]" :key="index" class="listItem"
						:anchor="messageList[listName].length">
						<u-row align="top" gutter="5">
							<u-col span="1.5" textAlign="center" align="top" justify="top">
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? wxImg :avatar" v-if="listName == 'three'">
								</image>
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? xfImg :avatar" v-if="listName == 'four'">
								</image>

								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? claudeImg : avatar" v-if="listName == 'five'">
								</image>
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? glmImg :avatar" v-if="listName == 'six'">
								</image>
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? qwImg : avatar" v-if="listName == 'seven'">
								</image>
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? stImg :avatar" v-if="listName == 'eight'">
								</image>
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? hsImg :avatar" v-if="listName == 'twelve'">
								</image>
								<image style="height: 38px;width: 38px; border-radius: 50%;"
									:src="item.type=='assistant'? txImg :avatar" v-if="listName == 'eleven'">
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
											<u-col span="5" v-if="index===messageList[listName].length-1">
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
												<u-row class='edit' v-if="item.loading && listName != 'six'">
													<u-col span="6" align="center" style="font-size: 14px;">
														上行:{{item.prompt_tokens}} token
													</u-col>
													<u-col span="6" align="center" style="font-size: 14px;">
														下行:{{item.completion_tokens}} token
													</u-col>
												</u-row>
												<u-row class='edit' v-if="item.loading && listName == 'six'">
													<u-col span="6" align="center" style="font-size: 14px;">
														消耗:{{item.all_tokens}} token
													</u-col>

												</u-row>
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

														<view @click="likeType(1,index,listName)"
															v-if="item.is_like == 0 || item.is_like == 2"><u-icon
																name="thumb-up" color="#999" size="24"></u-icon></view>
														<view @click="likeType(0,index,listName)"
															v-if="item.is_like == 1"><u-icon name="thumb-up-fill"
																color="#1f64ff" size="24"></u-icon></view>
													</u-col>
													<u-col span="2">
														<view @click="likeType(2,index,listName)"
															v-if="item.is_like == 0 || item.is_like == 1"><u-icon
																name="thumb-down" color="#999" size="24"></u-icon>
														</view>
														<view @click="likeType(0,index,listName)"
															v-if="item.is_like == 2"><u-icon name="thumb-down-fill"
																color="#1f64ff" size="24"></u-icon></view>
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
													<u-col span="4"
														v-if="index===messageList[listName].length-1 && item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="show=true">
															继续提问
														</u-button>
													</u-col>

													<u-col span="4"
														v-if="index===messageList[listName].length-1 && !item.history && !item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="stopChat">
															停止回答
														</u-button>
													</u-col>

													<u-col span="2.5"
														v-if="index===messageList[listName].length-1 && !item.history && item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"13px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)"
															@click="againQs(messageList[listName][messageList[listName].length - 2].talk)">
															重试
														</u-button>
													</u-col>

													<u-col span="4"
														v-if="index===messageList[listName].length-1 && !item.history && item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px", "margin-bottom": "50px","font-size":"14px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)" @click="toIdea">
															投诉及建议
														</u-button>
													</u-col>

													<!-- <u-col span="5" v-if="index===messageList[listName].length-1 && item.loading">
														<u-button type='primary'
															:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","font-size":"14px"}'
															size="mini" color="rgba(31, 100, 255, 0.1)" @click="addChat">
															开启新会话
														</u-button>
													</u-col> -->
												</u-row>
											</view>

										</veiw>
									</view>
								</view>

								<view v-else>

									<!-- <text class="talk" style="background: #1F64FF;color:#fff">{{item.talk}}</text> -->
									<view class="talk" style="background: #1F64FF;color:#fff">

										<view style="font-size:17px; word-break:break-all;">
											{{item.talk}}
										</view>
										<view v-if="item.images.length > 0">
											<image :src="getImgUrl(item.images[0])"
												style="height: 500rpx; width: 500rpx" mode="aspectFit"
												@click="checkImg(item.images[0])"></image>
										</view>

										<image src="@/static/images/copy.png" mode="" @click="copyFun(item.talk)">
										</image>
									</view>

									<view v-if="index != messageList[listName].length">
										<u-col span="4"
											v-if="messageList[listName][messageList[listName].length - 1].loading">
											<u-button type='primary'
												:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","font-size":"14px"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="againQs(item.talk)">
												重新提问
											</u-button>
										</u-col>
									</view>

									<view v-if="index == messageList[listName].length - 1">
										<u-col span="4">
											<u-button type='primary'
												:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","margin-bottom": "70px","font-size":"14px"}'
												size="mini" color="rgba(31, 100, 255, 0.1)" @click="againQs(item.talk)">
												重新提问
											</u-button>
										</u-col>
									</view>

								</view>
							</u-col>
						</u-row>

					</u-list-item>

				</view>

				<view class="apply" v-if="askShow">
					<view class="apply_title" @click="getQuestionRecommend">
						<text class="title_l">您可以这样问</text>
						<image src="@/static/images/change.png" mode="" class="title_m" />
						<text class="title_r">换一批</text>
					</view>
					<view class="apply_cont">
						<view class="cont_li" v-for="(item, index) in billList" :key="index"
							@click="toAsk(item.content)">
							<text class="li_text">{{ item.content }}</text>
						</view>
					</view>
				</view>

			</u-list>

		</view>

		<view class="bottomInput" ref="textInput" :style="{bottom:Height+'px'}">
			<view class="btn_link">
				<view class="link_l">
					<view class="l_chat" style="margin-right: 15rpx;" @click="addChat"
						v-if="messageList[listName].length > 2 && messageList[listName][messageList[listName].length - 1].loading">
						<u-icon name="plus" color="#1F64FF" size="14"></u-icon>
						<text class="l_text">开启新会话</text>
					</view>
					<view class="l_chat" @click="toHistory">
						<u-icon name="clock" color="#1F64FF" size="16"></u-icon>
						<text class="l_text">历史会话</text>
					</view>
				</view>
				<view class="link_l">
					<view class="l_chat" @click="takePhoto">
						<u-icon name="camera" color="#1F64FF" size="20"></u-icon>
						<text class="l_text">识图</text>
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
					<u--textarea v-model="complete" placeholder="请输入您要继续提问的内容" border="none"
						height='110px'></u--textarea>
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
		xfChat
	} from "@/apis/chat.js"
	import {
		getQuestionRecommend,
		saveFootprint
	} from "@/apis/user.js"
	import Title from "@/childPage/components/title.vue"
	import * as TextEncoding from 'text-encoding-shim';
	import uaMarkdown from '../../components/ua2-markdown/ua-markdown.vue'

	export default {
		data() {
			return {
				prompt:'人格设定:你是优秘智能公司开发的umibot',
				
				pupShow: true,
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				src: '',
				scrollHeight: 0,
				selectDone: false,
				Height: 0,
				scrollTop: 593,
				key: 0,
				checkboxValue1: [],
				upDownText: false,
				show: false,
				transitionShow: false,
				complete: "",

				radioValue: true,
				list: [{
						name: '文心一言'
					}, {
						name: '讯飞星火'
					},
					{
						name: '通义千问'
					},
					{
						name: '火山云雀'
					},
					{
						name: '腾讯混元'
					},
					{
						name: 'ChatGLM',
					},
					{
						name: '360智脑'
					},
				],
				chatInputValue: "",
				chatType: '文心一言',
				loading: true,
				session_code: "",
				chat_group_code: "",
				supplement: {
					msg_list: []
				},

				current: 0,
				listName: 'three',
				avatar: "",
				isBtn: false,

				//文心一言
				stop_three: false,
				three_shi: 0,
				three_time: 0,
				requestTask_three: '',
				wx_one: [{
					talk: `<span style="font-size: 17px">我是百度新一代大型语言模型，文心一言-Turbo版本，在文心家族里，我的速度更快，价格相对优惠哦</span><br /><span style="font-size:14px;color:#9B9B9F;">2.4w算力/1k token</span>`,
					type: 'assistant'
				}],
				wx_two: [{
					talk: `<span style="font-size: 17px">我是百度新一代大型语言模型，文心一言，在文心家族里，我推理能力更强，价格适中哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.6w算力/1k token</span>`,
					type: 'assistant'
				}],
				wx_three: [{
					talk: `<span style="font-size: 17px">我是百度新一代大型语言模型，文心家族4.0版本，是文心家族最强的语言模型，我能力较强，但是价格也比较贵哦</span><br /><span style="font-size:14px;color:#9B9B9F;">36w算力/1k token</span>`,
					type: 'assistant'
				}],

				//讯飞星火
				stop_four: false,
				four_shi: 0,
				four_time: 0,
				requestTask_four: '',
				xf_one: [{
					talk: `<span style="font-size: 17px">我是讯飞科大推出的新一代认知智能大模型，讯飞星火-1.1版本，V1.1版本能力一般，价格也相对较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">5.4w算力/1k token</span>`,
					type: 'assistant'
				}],
				xf_two: [{
					talk: `<span style="font-size: 17px">我是讯飞科大推出的新一代认知智能大模型，讯飞星火-2.1版本，V2.1版本能力较强，价格也相对适中哦</span><br /><span style="font-size:14px;color:#9B9B9F;">10.8w算力/1k token</span>`,
					type: 'assistant'
				}],
				xf_three: [{
					talk: `<span style="font-size: 17px">我是讯飞科大推出的新一代认知智能大模型，讯飞星火-3.1版本，V3.1版本能力更强，价格也相对更贵哦</span><br /><span style="font-size:14px;color:#9B9B9F;">10.8w算力/1k token</span>`,
					type: 'assistant'
				}],

				//火山云雀
				stop_twelve: false,
				twelve_shi: 0,
				twelve_time: 0,
				requestTask_twelve: '',
				hs_one: [{
					talk: `<span style="font-size: 17px">我是字节旗下火山引擎推出的的大型语言模型，我是skylark2-pro-4k版，在火山云雀家族里，我推理能力较强，价格较高哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.3w算力/1k token</span>`,
					type: 'assistant'
				}],
				hs_two: [{
					talk: `<span style="font-size: 17px">我是字节旗下火山引擎推出的的大型语言模型，我是skylark2-pro-4k版，在火山云雀家族里，我的能力更强，价格也较高哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.3w算力/1k token</span>`,
					type: 'assistant'
				}],
				hs_three: [{
					talk: `<span style="font-size: 17px">我是字节旗下火山引擎推出的的大型语言模型，我是skylark2-pro-4k版，在火山云雀家族里，我能力一般，价格更低哦</span><br /><span style="font-size:14px;color:#9B9B9F;">1.2w算力/1k token</span>`,
					type: 'assistant'
				}],
				hs_four: [{
					talk: `<span style="font-size: 17px">我是字节旗下火山引擎推出的的大型语言模型，我是skylark2-pro-4k版，在火山云雀家族里，我的能力不错，价格适中哦</span><br /><span style="font-size:14px;color:#9B9B9F;">2.4w算力/1k token</span>`,
					type: 'assistant'
				}],
				hs_five: [{
					talk: `<span style="font-size: 17px">我是字节旗下火山引擎推出的的大型语言模型，我是skylark-pro版，在火山云雀家族里，我的速度更快，价格较高哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.3w算力/1k token</span>`,
					type: 'assistant'
				}],

				//腾讯混元
				stop_eleven: false,
				eleven_shi: 0,
				eleven_time: 0,
				requestTask_eleven: '',
				tx_one: [{
					talk: `<span style="font-size: 17px">我是腾讯最新研发的大语言模型，我是腾讯混元-标准版，在混元家族里，我能力一般，价格也相对便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3w算力/1k token</span>`,
					type: 'assistant'
				}],
				tx_two: [{
					talk: `<span style="font-size: 17px">我是腾讯最新研发的大语言模型，我是腾讯混元-高级版，在混元家族里，我能力更强，价格也相对更贵哦</span><br /><span style="font-size:14px;color:#9B9B9F;">30w算力/1k token</span>`,
					type: 'assistant'
				}],


				//ChatGLM
				stop_six: false,
				six_shi: 0,
				six_time: 0,
				requestTask_six: '',

				//通义千问
				stop_seven: false,
				seven_shi: 0,
				seven_time: 0,
				requestTask_seven: '',
				qw_one: [{
					talk: `<span style="font-size: 17px">我是阿里巴巴集团推出的大型语言模型，是通义大模型家族的一员，通义千问Turbo版本,Turbo版本速度更快，价格也比较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">2.4w算力/1k token</span>`,
					type: 'assistant'
				}],
				qw_two: [{
					talk: `<span style="font-size: 17px">我是阿里巴巴集团推出的大型语言模型，是通义大模型家族的一员，通义千问Plus版本,Plus版本能力更强，价格也比较贵哦</span><br /><span style="font-size:14px;color:#9B9B9F;">6w算力/1k token</span>`,
					type: 'assistant'
				}],

				//360
				stop_eight: false,
				eight_shi: 0,
				eight_time: 0,
				requestTask_eight: '',

				platform: '',
				noticeList: [],
				chat_active: 1,
				active_text: '能力较强，3.6w算力/1000token',
				chat_pro: 'completions_pro',

				userRole: "",
				askShow: true,
				billList: [],
				imgList: [],
				messageList: {
					'three': [{
						talk: `<span style="font-size: 17px">我是百度新一代大型语言模型，文心一言-Turbo版本，在文心家族里，我的速度更快，价格相对优惠哦</span><br /><span style="font-size:14px;color:#9B9B9F;">2.4w算力/1k token</span>`,
						type: 'assistant'
					}],
					'four': [{
						talk: `<span style="font-size: 17px">我是讯飞科大推出的新一代认知智能大模型，讯飞星火-1.1版本，V1.1版本能力一般，价格也相对较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">5.4w算力/1k token</span>`,
						type: 'assistant'
					}],
					'six': [{
						talk: `<span style="font-size: 17px">我是智普.AI推出的千亿参数对话语言模型，chatGLM-Turbo版本，Turbo版本速度更快，价格也比较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">1.5w算力/1k token</span>`,
						type: 'assistant'
					}],
					'seven': [{
						talk: `<span style="font-size: 17px">我是阿里巴巴集团推出的大型语言模型，是通义大模型家族的一员，通义千问Turbo版本,Turbo版本速度更快，价格也比较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">2.4w算力/1k token</span>`,
						type: 'assistant'
					}],
					'eight': [{
						talk: `<span style="font-size: 17px">我是360集团推出的认知型通用大模型，360智脑V9版本，V9版本速度较快，价格适中哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.6w算力/1k token</span>`,
						type: 'assistant'
					}],
					'twelve': [{
						talk: `<span style="font-size: 17px">我是字节旗下火山引擎推出的的大型语言模型，我是skylark2-pro-4k版，在火山云雀家族里，我推理能力较强，价格较高哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.3w算力/1k token</span>`,
						type: 'assistant'
					}],
					'eleven': [{
						talk: `<span style="font-size: 17px">我是腾讯最新研发的大语言模型，我是腾讯混元-标准版，在混元家族里，我能力一般，价格也相对便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3w算力/1k token</span>`,
						type: 'assistant'
					}]
				},

				wxImg: global.baseImg + '/xcx/45cbd4e5-474e-4782-a31e-1efd2a48d664.jpg',
				xfImg: global.baseImg + '/xcx/19e4def0-7866-4c1b-82f6-a78a5d591b17.jpg',
				claudeImg: global.baseImg + '/xcx/22a0d319-6aa3-425a-94bb-5c57884db842.jpg',
				glmImg: global.baseImg + '/xcx/9b91253a-59c2-4ab8-9e38-af7c6464823c.jpg',
				gptImg: global.baseImg + '/xcx/8d2bd289-ff24-4f3c-b6d2-a4cbbd7ca737.jpg',
				qwImg: global.baseImg + '/xcx/32ef66a5-1c72-4b83-9713-436f970db434.jpg',
				stImg: global.baseImg + '/xcx/244751fa-1bbb-4a95-bafb-76b4c8f4f88a.jpg',
				aiImg: global.baseImg + '/xcx/6ddf8a53-52d1-40ec-9430-ec92a2f429f0.jpg',
				waitImg: global.baseImg + '/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',
				hsImg: global.baseImg + '/xcx/com/message_center/火山引擎.png',
				txImg: global.baseImg + '/xcx/com/message_center/腾讯混元.png',
			}
		},
		components: {
			Title,
			uaMarkdown
		},
		onLoad() {
			// console.log(uni.getSystemInfoSync().windowHeight - uni.upx2px(80) - 56 - 44 - 44,
				// 'uni.getSystemInfoSync().windowHeight');

			this.scrollHeight = uni.getSystemInfoSync().windowHeight - uni.upx2px(80) - 56 - 44 - 44
		},
		watch: {

		},
		onShow() {
			let three_code = this.messageList.three[this.messageList.three.length - 1].code;
			let four_code = this.messageList.four[this.messageList.four.length - 1].code;
			let six_code = this.messageList.six[this.messageList.six.length - 1].code;
			let seven_code = this.messageList.seven[this.messageList.seven.length - 1].code;
			let eight_code = this.messageList.eight[this.messageList.eight.length - 1].code;
			let twelve_code = this.messageList.twelve[this.messageList.twelve.length - 1].code;
			let eleven_code = this.messageList.eleven[this.messageList.eleven.length - 1].code;


			if (three_code == 40022) { // 去除登录或升级vip提示
				this.messageList.three.pop()
			}

			if (four_code == 40022) { // 去除登录或升级vip提示
			}

			if (six_code == 40022) { // 去除登录或升级vip提示
				this.messageList.six.pop()
			}

			if (seven_code == 40022) { // 去除登录或升级vip提示
			}

			if (eight_code == 40022) { // 去除登录或升级vip提示
				this.messageList.eight.pop()
			}
			if (twelve_code == 40022) { // 去除登录或升级vip提示
				this.messageList.twelve.pop()
			}
			if (eleven_code == 40022) { // 去除登录或升级vip提示
				this.messageList.eleven.pop()
			}

			// uni.getSystemInfo({
			//   success: (res) => {
			// 	// windows | mac为pc端
			// 	// android | ios为手机端
			// 	console.log('getSystemInfo,', res.platform);

			//   }
			// });

			this.getQuestionRecommend() // 获取问题集

			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			// console.log(userInfo,548)
			let avatarUrl = global.baseImg + '/' + uni.getStorageSync("avatarUrl");
			this.avatar = avatarUrl;

			// 获取公告
			if (uni.getStorageSync('noticeInfo') != '') {
				this.noticeList = uni.getStorageSync('noticeInfo')
			}

			this.chatInputValue = uni.getStorageSync('talkInfo')
			// uni.getStorageSync('tabStatus') == '' ? (this.chatType = 'AI35') : (this.chatType = uni.getStorageSync(
			// 	'tabStatus'))

			// 获取相机信息
			if (uni.getStorageSync('cameraInfo') != '') {
				let sendInfo = uni.getStorageSync('cameraInfo')
				this.chatInputValue = sendInfo.chatValue
				this.imgList = sendInfo.imgList
				// console.log(sendInfo,415866666)
				uni.setStorageSync('cameraInfo', '')
			}

			if (uni.getStorageSync('tabStatus') == 4) {
				this.chatType = '文心一言'
				this.listName = 'three'
				this.current = 0
				this.chat_active = 1
				this.chat_pro = 'eb-instant';
				this.active_text = '2.4w算力/1000token'
			} else if (uni.getStorageSync('tabStatus') == 5) {
				this.chatType = '讯飞星火'
				this.listName = 'four'
				this.current = 1
				this.chat_active = 4
				this.chat_pro = 'v1.1';
				this.active_text = '5.4w算力/1000token'
			} else if (uni.getStorageSync('tabStatus') == 8) {
				this.chatType = 'ChatGLM'
				this.listName = 'six'
				this.current = 5
				this.active_text = '1.5w算力/1000token'
			} else if (uni.getStorageSync('tabStatus') == 10) {
				this.chatType = '通义千问'
				this.listName = 'seven'
				this.current = 2
				this.chat_active = 7
				this.chat_pro = 'qwen-turbo';
				this.active_text = '2.4w算力/1000token'
			} else if (uni.getStorageSync('tabStatus') == 12) {
				this.chatType = '360智脑'
				this.listName = 'eight'
				this.current = 6
				this.active_text = '3.6w算力/1000token'
			} else if (uni.getStorageSync('tabStatus') == 1000) {
				this.chatType = '火山云雀'
				this.listName = 'twelve'
				this.current = 3
				this.chat_active = 20
				this.chat_pro = 'skylark-chat';
				this.active_text = '3.3w算力/1000token'
			} else if (uni.getStorageSync('tabStatus') == 1001) {
				this.chatType = '腾讯混元'
				this.listName = 'eleven'
				this.current = 4
				this.chat_active = 25
				this.chat_pro = 'ChatStd';
				this.active_text = '3w算力/1000token'
			} else {
				this.chatType = '文心一言'
				this.listName = 'three'
				this.current = 0
				this.chat_active = 1
				this.chat_pro = 'eb-instant';
				this.active_text = '2.4w算力/1000token'
			}
			// console.log(this.chatType, 'this.chatTypesdadada');

			// console.log('加载', uni.getStorageSync('history_code'));
			if (uni.getStorageSync('history_code') != '') {
				this.historySession(uni.getStorageSync('history_code'))
			}

			if (this.chatInputValue.trim() != '' && this.imgList.length == 0) { // 应用助理直接回答
				this.session_code = '';
				this.chat_group_code = '';
				let chat_tip = 0;
				if (this.listName == 'three') {
					chat_tip = 4
				} else if (this.listName == 'four') {
					chat_tip = 5
				} else if (this.listName == 'six') {
					chat_tip = 8
				} else if (this.listName == 'seven') {
					chat_tip = 10
				} else if (this.listName == 'eight') {
					chat_tip = 11
				} else if (this.listName == 'twelve') {
					chat_tip = 1000
				} else if (this.listName == 'eleven') {
					chat_tip = 1001
				}
				// console.log(chat_tip,7854)
				this.supplement = {
					chat_group_code: '',
					chat_type: chat_tip,
					msg_list: [],
					session_code: ''
				}
				this.transitionShow = false
				if (this.listName == 'three') {
					this.messageList[this.listName] = [{
						talk: `<span style="font-size: 17px">
								我是百度新一代大型语言模型，文心一言-Turbo版本，在文心家族里，我的速度更快，价格相对优惠哦</span><br /><span style="font-size:14px;color:#9B9B9F;">2.4w算力/1k token</span>`,
						type: 'assistant'
					}]
				} else if (this.listName == 'four') {
					this.messageList[this.listName] = [{
						talk: `<span style="font-size: 17px">
								我是讯飞科大推出的新一代认知智能大模型，讯飞星火-1.1版本，V1.1版本能力一般，价格也相对较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">5.4w算力/1k token</span>`,
						type: 'assistant'
					}]
				} else if (this.listName == 'six') {
					this.messageList[this.listName] = [{
						talk: `<span style="font-size: 17px">
								我是智普.AI推出的千亿参数对话语言模型，chatGLM-Turbo版本，,Turbo版本速度更快，价格也比较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">1.5w算力/1k token</span>`,
						type: 'assistant'
					}]
				} else if (this.listName == 'seven') {
					this.messageList[this.listName] = [{
						talk: `<span style="font-size: 17px">
								我是阿里巴巴集团推出的大型语言模型，是通义大模型家族的一员，通义千问Turbo版本,Turbo版本速度更快，价格也比较便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">2.4w算力/1k token</span>`,
						type: 'assistant'
					}]
				} else if (this.listName == 'eight') {
					this.messageList[this.listName] = [{
						talk: `<span style="font-size: 17px">
								我是360集团推出的认知型通用大模型，360智脑V9版本，V9版本速度较快，价格适中哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.6w算力/1k token</span>`,
						type: 'assistant'
					}]
				} else if (this.listName == 'twelve') {
					this.messageList[this.listName] = [{
						talk: `<span style="font-size: 17px">
								我是字节旗下火山引擎推出的的大型语言模型，我是skylark2-pro-4k版，在火山云雀家族里，我推理能力较强，价格较高哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3.3w算力/1k token</span>`,
						type: 'assistant'
					}]
				} else if (this.listName == 'eleven') {
					this.messageList[this.listName] = [{
						talk: `<span style="font-size: 17px">
								我是腾讯最新研发的大语言模型，我是腾讯混元-标准版，在混元家族里，我能力一般，价格也相对便宜哦</span><br /><span style="font-size:14px;color:#9B9B9F;">3w算力/1k token</span>`,
						type: 'assistant'
					}]
				}

				this.sendMessage(this.chatInputValue)
			}

			if (this.messageList[this.listName].length > 1) {
				this.askShow = false
			} else {
				this.askShow = true
			}
			this.Height = 0;
			this.$forceUpdate()
			// let userInfo = JSON.parse(uni.getStorageSync('userInfo'));

		},
		onHide() {
			this.radioValue = true
			// this.Height = 0;
			//          console.log(this.Height,885);
			// uni.hideTabBar({
			// 	// animation: true
			// })
		},
		methods: {

			// 获取问题集
			getQuestionRecommend() {
				this.billList = []
				getQuestionRecommend().then(res => {
					if (res.code == 20000) {
						this.billList = this.billList.concat(res.data[0]);
						this.billList = this.billList.concat(res.data[1]);
						// console.log(this.billList,778)
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
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
				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;

				// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1].time, 888);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再查看！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再查看！')
					return
				}
				let data = JSON.parse(session)
				let chat_tip = ''; // 对话类型
				// console.log(data.tpye, 995)
				if (data.type == 4) {
					this.listName = 'three';
					this.current = 0;
					chat_tip = 4;
					this.evaluateType2 = []
				} else if (data.type == 5) {
					this.listName = 'four';
					this.current = 1;
					chat_tip = 5;
					this.evaluateType3 = []
				} else if (data.type == 8) {
					this.listName = 'six';
					this.current = 5;
					chat_tip = 8;
					this.evaluateType5 = []
				} else if (data.type == 10) {
					this.listName = 'seven';
					this.current = 2;
					chat_tip = 10;
					this.evaluateType6 = []
				} else if (data.type == 12) {
					this.listName = 'eight';
					this.current = 6;
					chat_tip = 12;
					this.evaluateType7 = []
				} else if (data.type == 1000) {
					this.listName = 'twelve';
					this.current = 3;
					chat_tip = 1000;
					this.evaluateType20 = []
				} else if (data.type == 1001) {
					this.listName = 'eleven';
					this.current = 4;
					chat_tip = 1001;
					this.evaluateType25 = []
				}
				// console.log(data.tpye, 'typetype');
				this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1)

				console.log('this.current', this.current, '改变状态');
				this.$forceUpdate()

				// let chat_group_code = ''
				// let session_code = ''
				chat_session(data.code).then(res => {
					//初始化信息
					this.supplement = {
						chat_type: chat_tip,
						action_type: 3,
						// session_code: this.session_code,
						// chat_group_code: this.chat_group_code,
						stream_str: 1,
						is_decode: 1,
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
						this.messageList[this.listName].push({
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

						this.askShow = false;

					})
					// console.log(this.messageList[this.listName], 'res');

					if (data.type == 4) {
						if (this.messageList[this.listName][1].model == 'completions_pro') {
							this.chat_active = 3
							this.wx_one = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'completions') {
							this.chat_active = 2
							this.wx_two = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'eb-instant') {
							this.chat_active = 1
							this.wx_three = this.messageList[this.listName]
						} else {
							this.chat_active = 2
							this.wx_two = this.messageList[this.listName]
						}
					} else if (data.type == 5) {
						if (this.messageList[this.listName][1].model == 'v3.1') {
							this.chat_active = 6
							this.xf_one = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'v2.1') {
							this.chat_active = 5
							this.xf_two = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'v1.1') {
							this.chat_active = 4
							this.xf_three = this.messageList[this.listName]
						} else {
							this.chat_active = 4
							this.xf_three = this.messageList[this.listName]
						}
					} else if (data.type == 10) {
						if (this.messageList[this.listName][1].model == 'qwen-plus') {
							this.chat_active = 8
							this.qw_one = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'qwen-turbo') {
							this.chat_active = 7
							this.qw_two = this.messageList[this.listName]
						} else {
							this.chat_active = 8
							this.qw_one = this.messageList[this.listName]
						}
					} else if (data.type == 1000) {
						if (this.messageList[this.listName][1].model == 'chat') {
							this.chat_active = 20
							this.hs_one = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == '4k') {
							this.chat_active = 21
							this.hs_two = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'lite') {
							this.chat_active = 22
							this.hs_three = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'plus') {
							this.chat_active = 23
							this.hs_four = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'pro') {
							this.chat_active = 24
							this.hs_five = this.messageList[this.listName]
						} else {
							this.chat_active = 20
							this.hs_four = this.messageList[this.listName]
						}
					} else if (data.type == 1001) {
						if (this.messageList[this.listName][1].model == 'ChatStd') {
							this.chat_active = 25
							this.tx_one = this.messageList[this.listName]
						} else if (this.messageList[this.listName][1].model == 'ChatPro') {
							this.chat_active = 26
							this.tx_two = this.messageList[this.listName]
						} else {
							this.chat_active = 25
							this.tx_one = this.messageList[this.listName]
						}
					}
					this.toBottom()
					this.$forceUpdate()
					uni.setStorageSync('history_code', '')

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
			againQs(val) {
				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1]
					.talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1]
					.loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1]
					.time;

				// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1].time, 888);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后提问！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
					return
				}
				this.chatInputValue = val;
				this.selectDone = true
				// this.selectDone = '有';
				// this.transitionShow = false;
				this.sendMessage(this.chatInputValue)
			},

			// 停止回答
			stopChat() {

				if (this.listName == 'three') {
					this.stop_three = true
					this.requestTask_three.abort();
					clearInterval(this.three_shi)
					clearInterval(this.three_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'four') {
					this.stop_four = true
					this.requestTask_four.abort();
					clearInterval(this.four_shi)
					clearInterval(this.four_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'six') {
					this.stop_six = true
					this.requestTask_six.abort();
					clearInterval(this.six_shi)
					clearInterval(this.six_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'seven') {
					this.stop_seven = true
					this.requestTask_seven.abort();
					clearInterval(this.seven_shi)
					clearInterval(this.seven_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'eight') {
					this.stop_eight = true
					this.requestTask_eight.abort();
					clearInterval(this.eight_shi)
					clearInterval(this.eight_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'twelve') {
					this.stop_twelve = true
					this.requestTask_twelve.abort();
					clearInterval(this.twelve_shi)
					clearInterval(this.twelve_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				} else if (this.listName == 'eleven') {
					this.stop_eleven = true
					this.requestTask_eleven.abort();
					clearInterval(this.eleven_shi)
					clearInterval(this.eleven_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				}
				this.$forceUpdate()
			},

			// 停止开始回答
			stopStart() {
				if (this.listName == 'three') {
					this.stop_three = true
					this.requestTask_three.abort();
					clearInterval(this.three_shi)
					clearInterval(this.three_time)
					this.messageList.three.pop()
				} else if (this.listName == 'four') {
					this.stop_four = true
					this.requestTask_four.abort();
					clearInterval(this.four_shi)
					clearInterval(this.four_time)
					this.messageList.four.pop()
				} else if (this.listName == 'six') {
					this.stop_six = true
					this.requestTask_six.abort();
					clearInterval(this.six_shi)
					clearInterval(this.six_time)
					this.messageList.six.pop()
				} else if (this.listName == 'seven') {
					this.stop_seven = true
					this.requestTask_seven.abort();
					clearInterval(this.seven_shi)
					clearInterval(this.seven_time)
					this.messageList.seven.pop()
				} else if (this.listName == 'eight') {
					this.stop_eight = true
					this.requestTask_eight.abort();
					clearInterval(this.eight_shi)
					clearInterval(this.eight_time)
					this.messageList.eight.pop()
				} else if (this.listName == 'twelve') {
					this.stop_twelve = true
					this.requestTask_twelve.abort();
					clearInterval(this.twelve_shi)
					clearInterval(this.twelve_time)
					this.messageList.twelve.pop()
				} else if (this.listName == 'eleven') {
					this.stop_eleven = true
					this.requestTask_eleven.abort();
					clearInterval(this.eleven_shi)
					clearInterval(this.eleven_time)
					this.messageList.eleven.pop()
				}
				this.$forceUpdate()
			},

			// 开启新会话 
			addChat() {
				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1]
					.talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1]
					.loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1]
					.time;

				// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1].time, 888);
				if (send_talk.indexOf('思考中') != -1 && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再操作！')
					return
				}

				if (send_loading == false && send_time > 0) {

					this.$api.msg('当前问题还没回答完毕，请稍后再操作！')
					return
				}
				this.askShow = true; // 显示热搜提问
				this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1);
				this.session_code = '';
				this.chat_group_code = ''
				this.imgList = []
			},

			radioChange(e) {

				if (e) {
					this.upDownText = false
					this.selectDone = true
					this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1)
					this.sendMessage(this.chatInputValue)
				} else {
					let arr = []
					this.messageList[this.listName].map((item, index) => {
						if (index > 0) {
							arr.push({
								role: item.type,
								content: item.talk,
								images: item.images,
								covert_content:this.prompt
							})
						}

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
				// console.log(encodedString,'encodedString');
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
				var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
				if (!b64re.test(string))
					throw new TypeError(
						"Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
					);
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
				if (this.listName == 'three') {
					let three_num = 0;
					this.messageList.three.push({
						talk: `思考中,耗时${three_num}秒`,
						type: 'assistant'
					})

					this.three_shi = setInterval(() => {
						three_num++
					}, 1000)
					this.three_time = setInterval(() => {
						this.messageList.three[this.messageList.three.length - 1] = {
							talk: `思考中,耗时${three_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = this.chat_pro;
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
							this.messageList.three[this.messageList.three.length - 1].loading =
								true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.three_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.three_shi)
							// console.log(JSON.stringify(complete.statusCode),777)

							if (complete.statusCode != 200 && JSON.stringify(complete
									.statusCode) != 'null') {

								// let code
								clearInterval(this.three_time)

								// 非手动停止才执行
								if (!this.stop_three) {
									xfChat(data).then(res => {
										// console.log(res,5548)
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											// console.log(userInfo.role == 'guess' ,'panduan');

											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this
													.messageList[this
														.listName].length - 1
												] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res
														.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

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
							console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item)
								.content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync(
										'userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[
											tabType].length -
										1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON
											.parse(item)
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

								if (status == true) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 4,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
												covert_content:this.prompt
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
										this.supplement.msg_list = JSON.parse(this
											.supplement.msg_list)
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
								this.messageList[tabType][this.messageList[tabType]
									.length - 1
								] = {
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
								// console.log(this.messageList[tabType],33333)
								if (this.chat_active == 1) { //三个modle存值
									this.wx_one = this.messageList[tabType]
								} else if (this.chat_active == 2) {
									this.wx_two = this.messageList[tabType]
								} else if (this.chat_active == 3) {
									this.wx_three = this.messageList[tabType]
								}
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "文心一言",
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
				} else if (this.listName == 'four') {
					let four_num = 0;
					this.messageList.four.push({
						talk: `思考中,耗时${four_num}秒`,
						type: 'assistant'
					})

					this.four_shi = setInterval(() => {
						four_num++
					}, 1000)
					this.four_time = setInterval(() => {
						this.messageList.four[this.messageList.four.length - 1] = {
							talk: `思考中,耗时${four_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = this.chat_pro;
					this.requestTask_four = uni.request({
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
							this.messageList.four[this.messageList.four.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.four_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.four_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete
									.statusCode) != 'null') {

								// let code
								clearInterval(this.four_time)

								// 非手动停止才执行
								if (!this.stop_four) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this
													.messageList[this
														.listName].length - 1
												] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res
														.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

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

					this.requestTask_four.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item)
								.content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync(
										'userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[
											tabType].length -
										1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON
											.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.four_time)
									clearInterval(this.four_shi)
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

								if (status == 2) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 5,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
												covert_content:this.prompt
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
										this.supplement.msg_list = JSON.parse(this
											.supplement.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.four_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType]
									.length - 1
								] = {
									talk: info,
									type: 'assistant',
									time: four_num,
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

								if (this.chat_active == 4) { //三个modle存值
									this.xf_one = this.messageList[tabType]
								} else if (this.chat_active == 5) {
									this.xf_two = this.messageList[tabType]
								} else if (this.chat_active == 6) {
									this.xf_three = this.messageList[tabType]
								}
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "讯飞星火",
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
				} else if (this.listName == 'six') {
					let six_num = 0;
					this.messageList.six.push({
						talk: `思考中,耗时${six_num}秒`,
						type: 'assistant'
					})

					this.six_shi = setInterval(() => {
						six_num++
					}, 1000)
					this.six_time = setInterval(() => {
						this.messageList.six[this.messageList.six.length - 1] = {
							talk: `思考中,耗时${six_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)

					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = 'chatglm_turbo';
					this.requestTask_six = uni.request({
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
							this.messageList.six[this.messageList.six.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.six_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.six_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete
									.statusCode) != 'null') {

								// let code
								clearInterval(this.six_time)

								// 非手动停止才执行
								if (!this.stop_six) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this
													.messageList[this
														.listName].length - 1
												] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res
														.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

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
					let all_tokens = 0
					let tabType = this.listName

					this.requestTask_six.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item)
								.content !=
								null) {
								let chat_val = this.base64ToString(JSON.parse(item)
									.content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(
									/Generative Pre-trained Transformer/gi,
									"");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info += session4
							}


							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync(
										'userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[
											tabType].length -
										1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON
											.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.six_time)
									clearInterval(this.six_shi)
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
								all_tokens = JSON.parse(item).total_tokens
								let load_state = false

								if (status == 'stop') {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 8,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
												covert_content:this.prompt
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
										this.supplement.msg_list = JSON.parse(this
											.supplement.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.six_time)

								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType]
									.length - 1
								] = {
									talk: info,
									type: 'assistant',
									time: six_num,
									code: 200,
									history: false,
									status,
									integral,
									completion_tokens,
									prompt_tokens,
									all_tokens,
									textNumber: info.replace(/[\r\n]/g, "").length,
									loading: load_state,
									session_code: this.session_code,
									chat_group_code: this.chat_group_code,
									is_like: 0
								}
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "chatGLM",
										"type_code": "chat",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
								}
								// console.log(this.messageList[tabType],888)
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'seven') {
					let seven_num = 0;
					this.messageList.seven.push({
						talk: `思考中,耗时${seven_num}秒`,
						type: 'assistant'
					})

					this.seven_shi = setInterval(() => {
						seven_num++
					}, 1000)
					this.seven_time = setInterval(() => {
						this.messageList.seven[this.messageList.seven.length - 1] = {
							talk: `思考中,耗时${seven_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = this.chat_pro;
					this.requestTask_seven = uni.request({
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
							this.messageList.seven[this.messageList.seven.length - 1].loading =
								true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.seven_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.seven_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete
									.statusCode) != 'null') {

								// let code
								clearInterval(this.seven_time)

								// 非手动停止才执行
								if (!this.stop_seven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this
													.messageList[this
														.listName].length - 1
												] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res
														.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

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

					this.requestTask_seven.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item)
								.content !=
								null) {
								let chat_val = this.base64ToString(JSON.parse(item)
									.content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(
									/Generative Pre-trained Transformer/gi,
									"");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info = session4
							}

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync(
										'userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[
											tabType].length -
										1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON
											.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.seven_time)
									clearInterval(this.seven_shi)
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

								if (status == 'stop') {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 10,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
												covert_content:this.prompt
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
										this.supplement.msg_list = JSON.parse(this
											.supplement.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.seven_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType]
									.length - 1
								] = {
									talk: info,
									type: 'assistant',
									time: seven_num,
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

								if (this.chat_active == 7) { //两个modle存值
									this.qw_one = this.messageList[tabType]
								} else if (this.chat_active == 8) {
									this.qw_two = this.messageList[tabType]
								}
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "通义千问",
										"type_code": "chat",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
								}
								// console.log(this.messageList[tabType],888)
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'eight') {
					let eight_num = 0;
					this.messageList.eight.push({
						talk: `思考中,耗时${eight_num}秒`,
						type: 'assistant'
					})

					this.eight_shi = setInterval(() => {
						eight_num++
					}, 1000)
					this.eight_time = setInterval(() => {
						this.messageList.eight[this.messageList.eight.length - 1] = {
							talk: `思考中,耗时${eight_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = '360GPT_S2_V9';
					this.requestTask_eight = uni.request({
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
							this.messageList.eight[this.messageList.eight.length - 1].loading =
								true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.eight_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.eight_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete
									.statusCode) != 'null') {

								// let code
								clearInterval(this.eight_time)

								// 非手动停止才执行
								if (!this.stop_eight) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this
													.messageList[this
														.listName].length - 1
												] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res
														.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

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

					this.requestTask_eight.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item)
								.content !=
								null) {
								let chat_val = this.base64ToString(JSON.parse(item)
									.content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(
									/Generative Pre-trained Transformer/gi,
									"");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info += session4
							}


							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync(
										'userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[
											tabType].length -
										1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON
											.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.eight_time)
									clearInterval(this.eight_shi)
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

								if (status == 'stop') {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 12,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
												covert_content:this.prompt
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
										this.supplement.msg_list = JSON.parse(this
											.supplement.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.eight_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType]
									.length - 1
								] = {
									talk: info,
									type: 'assistant',
									time: eight_num,
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
										"type_name": "360智脑",
										"type_code": "chat",
										"title": data.content,
										"eid": this.session_code
									}

									this.saveFootprint(save_val)
								}
								// console.log(this.messageList[tabType],888)
							}
							this.toBottom()
							this.$forceUpdate()

						}))

					})
				} else if (this.listName == 'twelve') {
					let twelve_num = 0;
					this.messageList.twelve.push({
						talk: `思考中,耗时${twelve_num}秒`,
						type: 'assistant'
					})

					this.twelve_shi = setInterval(() => {
						twelve_num++
					}, 1000)
					this.twelve_time = setInterval(() => {
						this.messageList.twelve[this.messageList.twelve.length - 1] = {
							talk: `思考中,耗时${twelve_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = this.chat_pro;
					this.requestTask_twelve = uni.request({
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
							this.messageList.twelve[this.messageList.twelve.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.twelve_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.twelve_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete
									.statusCode) != 'null') {

								// let code
								clearInterval(this.twelve_time)

								// 非手动停止才执行
								if (!this.stop_twelve) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this
													.messageList[this
														.listName].length - 1
												] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res
														.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

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

					this.requestTask_twelve.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item)
								.content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync(
										'userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[
											tabType].length -
										1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON
											.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.twelve_time)
									clearInterval(this.twelve_shi)
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

								if (status == 2) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type: 1000,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
												covert_content:this.prompt
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
										this.supplement.msg_list = JSON.parse(this
											.supplement.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.twelve_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType]
									.length - 1
								] = {
									talk: info,
									type: 'assistant',
									time: twelve_num,
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

								if (this.chat_active == 20) { //三个modle存值
									this.hs_one = this.messageList[tabType]
								} else if (this.chat_active == 21) {
									this.hs_two = this.messageList[tabType]
								} else if (this.chat_active == 22) {
									this.hs_three = this.messageList[tabType]
								}else if (this.chat_active == 23) {
									this.hs_four = this.messageList[tabType]
								}else if (this.chat_active == 24) {
									this.hs_five = this.messageList[tabType]
								}
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "火山云雀",
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
				} else if (this.listName == 'eleven') {
					let eleven_num = 0;
					this.messageList.eleven.push({
						talk: `思考中,耗时${eleven_num}秒`,
						type: 'assistant'
					})

					this.eleven_shi = setInterval(() => {
						eleven_num++
					}, 1000)
					this.eleven_time = setInterval(() => {
						this.messageList.eleven[this.messageList.eleven.length - 1] = {
							talk: `思考中,耗时${eleven_num}秒`,
							type: 'assistant'
						}
						this.$forceUpdate()
					}, 1000)


					this.toBottom()
					// ==========================================
					const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
					// // console.log(userInfo,'userInfo');
					data.model = this.chat_pro;
					this.requestTask_eleven = uni.request({
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
							this.messageList.eleven[this.messageList.eleven.length - 1].loading = true
							// console.log('数据长度：', this.messageList[tabType][this.messageList[tabType].length - 1].loading);
							clearInterval(this.eleven_shi)

							this.$forceUpdate()
						},

						fail(err) {
							console.log(err, 'err');
						},
						complete: (complete) => {
							clearInterval(this.eleven_shi)
							// console.log(complete,777)

							if (complete.statusCode != 200 && JSON.stringify(complete
									.statusCode) != 'null') {

								// let code
								clearInterval(this.eleven_time)

								// 非手动停止才执行
								if (!this.stop_eleven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync(
												'userInfo'));
											if (res.code == 40013) {
												this.$api.msg('登录信息已过期，请重新登录')
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this
													.messageList[this
														.listName].length - 1
												] = {
													talk: res.msg,
													type: 'assistant',
													time: 0,
													code: res.code == 40022 ? res
														.code : 40021,
													status: "stop",
													textNumber: 0,
													history: false,
													loading: true
												}
											}
											this.$forceUpdate()
											this.toBottom()
										} else if (res.code > 49999) {
											this.messageList[this.listName].pop()
											this.$api.msg('网络异常，请稍后重试')
											// this.$api.msg(res.msg)
										} else {
											this.messageList[this.listName].pop()
											this.$api.msg(res.msg)
										}

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

					this.requestTask_eleven.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item)
								.content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync(
										'userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[
											tabType].length -
										1
									] = {
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON
											.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									}
									this.$forceUpdate()
									this.toBottom()
									clearInterval(this.eleven_time)
									clearInterval(this.eleven_shi)
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

								if (status == 2) {
									load_state = true
								} else {
									load_state = false
								}
								if (state == 'first') {
									this.supplement = {
										chat_type:1001,
										action_type: 3,
										session_code: this.session_code,
										chat_group_code: this.chat_group_code,
										stream_str: 1,
										is_decode: 1,
										msg_list: [{
												role: 'user',
												content: data.content,
												covert_content:this.prompt
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
										this.supplement.msg_list = JSON.parse(this
											.supplement.msg_list)
									} catch (e) {
										console.log('我不是JSON');
									}

									this.supplement.msg_list.push({
										role: 'assistant',
										content: info,
									})
								}
								clearInterval(this.eleven_time)


								//重置最后一条信息
								this.messageList[tabType][this.messageList[tabType]
									.length - 1
								] = {
									talk: info,
									type: 'assistant',
									time: eleven_num,
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

								if (this.chat_active == 25) { //三个modle存值
									this.tx_one = this.messageList[tabType]
								} else if (this.chat_active == 26) {
									this.tx_two = this.messageList[tabType]
								} 
								if (load_state) { //保存记录
									let save_val = {
										"type_name": "腾讯混元",
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
				}

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
				if (this.listName == 'three' || this.listName == 'five' || this.listName == 'six' || this
					.listName =='seven' || this.listName == 'twelve'|| this.listName == 'eleven') {
					this.supplement.msg_list = [{
							role: 'user',
							content: this.messageList[this.listName][this.messageList[this.listName]
									.length - 2
								]
								.talk,
							images: this.messageList[this.listName][this.messageList[this.listName]
									.length - 2
								]
								.images
						},
						{
							role: 'assistant',
							content: this.messageList[this.listName][this.messageList[this.listName]
									.length - 1
								]
								.talk,
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
							content: this.messageList[this.listName][this.messageList[this.listName]
									.length - 1
								]
								.talk,
							images: []
						},
						{
							role: 'user',
							content: this.complete,
							images: []
						}
					]
				}

				this.messageList[this.listName].push({
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
				let send_talk = this.messageList[this.listName][this.messageList[this.listName]
					.length - 1
				].talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName]
					.length - 1
				].loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName]
					.length - 1
				].time;
				let history = this.messageList[this.listName][this.messageList[this.listName].length -
					1
				].history;

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
					this.messageList[this.listName].pop()
				}
				if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容')


				this.askShow = false; // 隐藏热搜提问


				//判断是否是第一条提问

				// console.log(this.selectDone, 'this.messageList[this.listName].length');
				this.stop_three = false; // 重置手动停止按钮
				this.stop_four = false; // 重置手动停止按钮
				this.stop_six = false; // 重置手动停止按钮
				this.stop_seven = false; // 重置手动停止按钮
				this.stop_eight = false; // 重置手动停止按钮
				this.stop_twelve = false; // 重置手动停止按钮
				this.stop_eleven = false; // 重置手动停止按钮


				if (this.messageList[this.listName].length > 2 && !this.selectDone) {
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
				this.messageList[this.listName].push({
					talk: this.chatInputValue,
					type: 'user',
					images: img_url
				})

				// const hide_cont = '(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)';
				let chat_cont = this.chatInputValue
				let chat_tip = '';
				if (this.chatType == '文心一言') {
					chat_tip = 4
				} else if (this.chatType == '讯飞星火') {
					chat_tip = 5
				} else if (this.chatType == 'ChatGLM') {
					chat_tip = 8
				} else if (this.chatType == '通义千问') {
					chat_tip = 10
				} else if (this.chatType == '360智脑') {
					chat_tip = 12
				} else if (this.chatType == '火山云雀') {
					chat_tip = 1000
				} else if (this.chatType == '腾讯混元') {
					chat_tip = 1001
				}
				let data = {
					chat_type: chat_tip,
					action_type: '3',
					session_code: this.session_code,
					chat_group_code: "",
					content: chat_cont,
					stream_str: 1,
					is_decode: 1,
					msg_list: [{
						role: 'user',
						// covert_content: `回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字\n以下是我的问题：`, 
						convert_content:this.prompt,
						content: chat_cont,
					}]
				}
				if (this.imgList.length > 0) {
					data.msg_list[0].images = this.imgList
				}
				data.msg_list = JSON.stringify(data.msg_list)
				// console.log(data.msg_list,4725)

				uni.setStorageSync('hideItme', '');

				if (this.upDownText) {
					this.supplement.msg_list.push({
						role: 'user',
						content: this.chatInputValue,
						images: this.imgList,
						convert_content:this.prompt,
					})
					this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)
					this.radioValue = true
					this.upDownText = false
					await this.creatChatFun(this.supplement, 'continue')
				} else {
					// if(this.selectDone == '有') {
					// 	// console.log(this.session_code,10256)
					// 	this.radioValue = true;
					// 	data.session_code = this.session_code;
					// 	data.chat_group_code = ''
					// 	await this.creatChatFun(data, 'continue')
					// } else {
					// 	await this.creatChatFun(data, 'first')
					// }
					await this.creatChatFun(data, 'first')

				}

				// if (this.selectDone == '有') {

				// 	this.radioValue = true
				// 	this.$forceUpdate()
				// }
				this.selectDone = false
				this.chatInputValue = ''
				this.imgList = []


			},

			tabsChange(e) {
				// if (this.messageList[this.listName][this.messageList[this.listName].length - 1].talk.indexOf('思考中') != -
				// 	1) {
				// 	// e.name == 'AI35' ? this.current = 1 : this.current = 0
				// 	this.$api.msg(
				// 		'当前问题还没回答完毕，请等待！')
				// 	return
				// }

				console.log(e.name, 'gaib');
				this.radioValue = true
				this.chatType = e.name
				let chat_num = 0
				if (this.chatType == '文心一言') {
					this.listName = 'three';
					this.current = 0
					chat_num = 4
					uni.setStorageSync('tabStatus', 4)
					this.chat_active = 1
					this.chat_pro = 'eb-instant';
					this.active_text = '2.4w算力/1000token'
					this.messageList[this.listName] = this.wx_one
				} else if (this.chatType == '讯飞星火') {
					this.listName = 'four';
					this.current = 1
					chat_num = 5
					uni.setStorageSync('tabStatus', 5)
					this.chat_active = 4
					this.chat_pro = 'v1.1';
					this.active_text = '5.4w算力/1000token'
					this.messageList[this.listName] = this.xf_one
				} else if (this.chatType == 'ChatGLM') {
					this.listName = 'six';
					this.current = 5
					chat_num = 8
					uni.setStorageSync('tabStatus', 8)
					this.active_text = '1.5w算力/1000token'
				} else if (this.chatType == '通义千问') {
					this.listName = 'seven';
					this.current = 2
					chat_num = 10
					uni.setStorageSync('tabStatus', 10)
					this.chat_active = 7
					this.chat_pro = 'qwen-turbo';
					this.active_text = '2.4w算力/1000token'
					this.messageList[this.listName] = this.qw_one
				} else if (this.chatType == '360智脑') {
					this.listName = 'eight';
					this.current = 6
					chat_num = 12
					uni.setStorageSync('tabStatus', 12)
					this.active_text = '3.6w算力/1000token'
				} else if (this.chatType == '火山云雀') {
					this.listName = 'twelve';
					this.current = 3
					chat_num = 1000
					uni.setStorageSync('tabStatus', 1000)
					this.chat_active = 20
					this.chat_pro = 'skylark-chat';
					this.active_text = '3.3w算力/1000token'
					this.messageList[this.listName] = this.hs_one
				} else if (this.chatType == '腾讯混元') {
					this.listName = 'eleven';
					this.current = 4
					chat_num = 1001
					uni.setStorageSync('tabStatus', 1001)
					this.chat_active = 25
					this.chat_pro = 'ChatStd';
					this.active_text = '3w算力/1000token'
					this.messageList[this.listName] = this.tx_one
				}

				this.supplement = {
					chat_group_code: '',
					chat_type: chat_num,
					msg_list: [],
					session_code: ''
				}
				// this.listName = e.name == 'AI35' ? 'one' : 'two'
				// e.name == 'AI35' ? this.current = 0 : this.current = 1
				// this.talkOneInfo(this.chatType)
				// console.log(this.messageList['one'], 'this.messageList[this.listName]', this.messageList['two']);
				this.transitionShow = false
				this.selectDone = ''

				// console.log(e.name,'名称');
				if (this.messageList[this.listName].length > 1) {
					this.askShow = false
					this.session_code = this.messageList[this.listName][this.messageList[this.listName]
							.length - 1
						]
						.session_code
					this.chat_group_code = this.messageList[this.listName][this.messageList[this
							.listName].length - 1]
						.chat_group_code
				} else {
					this.askShow = true
				}
				this.toBottom()
				this.$forceUpdate()
			},

			toHistory() {
				uni.navigateTo({
					url: '/pages/user/history/history?active=0'
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
				let chat_tip = 0;
				if (this.listName == 'three') {
					chat_tip = 4
				} else if (this.listName == 'four') {
					chat_tip = 5
				} else if (this.listName == 'six') {
					chat_tip = 8
				} else if (this.listName == 'seven') {
					chat_tip = 10
				} else if (this.listName == 'eight') {
					chat_tip = 11
				} else if (this.listName == 'twelve') {
					chat_tip = 1000
				} else if (this.listName == 'eleven') {
					chat_tip = 1001
				}
				uni.setStorageSync('tabStatus', chat_tip)
				uni.navigateTo({
					url: '/childPage/chat/camera?chatValue=' + this.chatInputValue +
						'&source=1'
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

			version(index) {
				this.chat_active = index
				if (index == 1) {
					this.chat_pro = 'eb-instant';
					this.active_text = '2.4w算力/1000token'
					this.messageList[this.listName] = this.wx_one
				} else if (index == 2) {
					this.chat_pro = 'completions';
					this.active_text = '3.6w算力/1000token'
					this.messageList[this.listName] = this.wx_two
				} else if (index == 3) {
					this.chat_pro = 'completions_pro';
					this.active_text = '能力较强，36w算力/1000token'
					this.messageList[this.listName] = this.wx_three
				} else if (index == 4) {
					this.chat_pro = 'v1.1';
					this.active_text = '5.4w算力/1000token'
					this.messageList[this.listName] = this.xf_one
				} else if (index == 5) {
					this.chat_pro = 'v2.1';
					this.active_text = '10.8w算力/1000token'
					this.messageList[this.listName] = this.xf_two
				} else if (index == 6) {
					this.chat_pro = 'v3.1';
					this.active_text = '10.8w算力/1000token'
					this.messageList[this.listName] = this.xf_three
				} else if (index == 7) {
					this.chat_pro = 'qwen-turbo';
					this.active_text = '2.4w算力/1000token'
					this.messageList[this.listName] = this.qw_one
				} else if (index == 8) {
					this.chat_pro = 'qwen-plus';
					this.active_text = '6w算力/1000token'
					this.messageList[this.listName] = this.qw_two
				} else if (index == 20) {
					this.chat_pro = 'skylark-chat';
					this.active_text = '3.3w算力/1000token'
					this.messageList[this.listName] = this.hs_one
				} else if (index == 21) {
					this.chat_pro = 'skylark2-pro-4k';
					this.active_text = '3.3w算力/1000token'
					this.messageList[this.listName] = this.hs_two
				} else if (index == 22) {
					this.chat_pro = 'skylark-lite';
					this.active_text = '1.2w算力/1000token'
					this.messageList[this.listName] = this.hs_three
				} else if (index == 23) {
					this.chat_pro = 'skylark-plus';
					this.active_text = '2.4w算力/1000token'
					this.messageList[this.listName] = this.hs_four
				} else if (index == 24) {
					this.chat_pro = 'skylark-pro';
					this.active_text = '3.3w算力/1000token'
					this.messageList[this.listName] = this.hs_five
				} else if (index == 25) {
					this.chat_pro = 'ChatStd';
					this.active_text = '3w算力/1000token'
					this.messageList[this.listName] = this.tx_one
				} else if (index == 26) {
					this.chat_pro = 'ChatPro';
					this.active_text = '30w算力/1000token'
					this.messageList[this.listName] = this.tx_two
				}

				if (this.messageList[this.listName].length > 1) {
					this.askShow = false
					this.session_code = this.messageList[this.listName][this.messageList[this.listName]
							.length - 1
						]
						.session_code
					this.chat_group_code = this.messageList[this.listName][this.messageList[this
							.listName].length - 1]
						.chat_group_code
				} else {
					this.askShow = true
				}
			},

			// 点赞点踩
			likeType(val, index, tip) {

				let data = {
					is_likes: val,
					session_code: this.session_code,
					chat_group_code: this.chat_group_code
				}
				this.messageList[tip][index].is_like = val
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
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "@/static/css/chat.less";

	.btn_link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		.link_l {
			display: flex;

			.l_chat {
				border-radius: 6upx;
				border: 1upx solid #1F64FF;
				padding: 5upx 10upx;
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
</style>