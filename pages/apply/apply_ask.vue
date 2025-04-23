<template>
	<view class="containar">
		<view class="apply_cont">
			<view class="cont_title">{{ content.title }}</view>
			<view class="cont_text">
				<text class="text_li">{{ content.content }}</text>
			</view>
		</view>

		<view class="send">
			<!-- <view class="chat_type">
				<view class="type_text">引擎：</view>
				<view class="type_r">
					<view @click="version(8)" :class="[active == 8 ? 'active_tabs' : 'tabs']"
						style="position: relative">
						ChatGLM -->
			<!-- <text style="color: #F00; position:absolute; right: -20upx; top: -20upx; font-size: 20upx;">免费</text> -->
			<!-- <u-badge type="error" value="免费" shape="horn" absolute :offset="[-10,-10]"></u-badge> -->
			<!-- </view>
					<view @click="version(4)" :class="[active == 4 ? 'active_tabs' : 'tabs']">文心一言</view>
					<view @click="version(5)" :class="[active == 5 ? 'active_tabs' : 'tabs']">讯飞星火</view>
					<view @click="version(10)" :class="[active == 10 ? 'active_tabs' : 'tabs']">通义千问</view> -->
			<!-- <view @click="version(11)" :class="[active == 11 ? 'active_tabs' : 'tabs']" style="font-size: 24rpx">商汤日日新</view> -->

			<!-- 	</view>

			</view> -->

			<view class="chat_qs">
				<view v-for="(item, index) in questionList" :key="index">
					<view class="chat_text" v-if="item.info_type_name == 'Input'">
						<view class="text_cont" style="display: flex;justify-content: space-between;">
							<view>
								<text class="text_l" v-if="item.is_required == 1">*</text>
								<text class="text_r">{{ item.title }}</text>
							</view>
							<view @click="chatShow = true" style="display: flex;" v-if="index == 0">
								<view class="type_text">引擎：</view>
								<view class="l_chat">
									<text class="l_text" style="margin-right: 10upx;">{{ samChatType }}</text>
									<u-icon name="arrow-down" color="#DBDBDB" size="14"></u-icon>
								</view>
							</view>
						</view>
						<u--input :placeholder="item.placeholder" border="surround"
							v-model="item.modelValue"></u--input>
					</view>

					<view class="chat_text" v-if="item.info_type_name == 'CheckBox'">
						<view class="text_cont" style="display: flex;justify-content: space-between;">
							<view>
								<text class="text_l" v-if="item.is_required == 1">*</text>
								<text class="text_r">{{ item.title }}</text>
							</view>
							<view @click="chatShow = true" style="display: flex;" v-if="index == 0">
								<view class="type_text">引擎：</view>
								<view class="l_chat">
									<text class="l_text" style="margin-right: 10upx;">{{ samChatType }}</text>
									<u-icon name="arrow-down" color="#DBDBDB" size="14"></u-icon>
								</view>
							</view>
						</view>

						<u-checkbox-group v-model="item.modelValue" @change="checkboxChange" placement="row">
							<view style="display: flex; flex-wrap: wrap; width: 100%">
								<u-checkbox activeColor="#1F64FF" :label="opt.value" :name="opt.value"
									:checked="item.modelValue.includes(opt.value) ?  true : false "
									:customStyle="{marginBottom: '10px',marginRight: '10px',width: '30%'}"
									v-for="(opt, index2) in item.options" :key="index2">
								</u-checkbox>
							</view>
						</u-checkbox-group>
					</view>

					<view class="chat_text" v-if="item.info_type_name == 'Tag'">
						<view class="text_cont" style="width: 100%;display: flex;justify-content: space-between;">
							<view>
								<text class="text_l" v-if="item.is_required == 1">*</text>
								<text class="text_r">{{ item.title }}</text>
							</view>
							<view @click="chatShow = true" style="display: flex;" v-if="index == 0">
								<view class="type_text">引擎：</view>
								<view class="l_chat">
									<text class="l_text" style="margin-right: 10upx;">{{ samChatType }}</text>
									<u-icon name="arrow-down" color="#DBDBDB" size="14"></u-icon>
								</view>
							</view>
						</view>
					</view>


					<view class="chat_text" v-if="item.info_type_name == 'Select'">
						<view class="text_cont" style="width: 100%;display: flex;justify-content: space-between;">
							<view>
								<text class="text_l" v-if="item.is_required == 1">*</text>
								<text class="text_r">{{ item.title }}</text>
							</view>
							<view @click="chatShow = true" style="display: flex;" v-if="index == 0">
								<view class="type_text">引擎：</view>
								<view class="l_chat">
									<text class="l_text" style="margin-right: 10upx;">{{ samChatType }}</text>
									<u-icon name="arrow-down" color="#DBDBDB" size="14"></u-icon>
								</view>
							</view>
						</view>
						<view class="lists" @click="openDialog(index)">
							<view class="txt" v-if="item.modelValue != ''">{{ item.modelValue }}</view>
							<view class="txt" v-else>{{ item.placeholder }}</view>
							<image class="lists_img right_img" src='@/static/images/right.png' />
						</view>
					</view>

					<view class="chat_text" v-if="item.info_type_name == 'Textarea'">
						<view class="text_cont" style='display: flex;justify-content: space-between;'>
							<view>
								<text class="text_l" v-if="item.is_required == 1">*</text>
								<text class="text_r">{{ item.title }}</text>
							</view>
							<view @click="chatShow = true" style="display: flex;" v-if="index == 0">
								<view class="type_text">引擎：</view>
								<view class="l_chat">
									<text class="l_text" style="margin-right: 10upx;">{{ samChatType }}</text>
									<u-icon name="arrow-down" color="#DBDBDB" size="14"></u-icon>
								</view>
							</view>
						</view>
						<u-textarea v-model="item.modelValue" :placeholder="item.placeholder"
							maxlength="-1"></u-textarea>
					</view>
					<u-picker :show="item.modelShow" v-model="item.modelValue" :columns="item.optionArr" keyName="value"
						@cancel="closePick(index)" @confirm="pickSelect"
						v-if="item.info_type_name == 'Select'"></u-picker>
				</view>

			</view>


			<view class="chat_btn" @click="sendMessage">AI一下</view>
		</view>

		<view class="chat_cont" style="margin-bottom: 30upx;">
			<view class="asw_cont" v-if="isPosition">
				<view class="asw_title">
					<text class="title_text"></text>
					<text class="title_text">AI分析结果</text>
					<!-- <text class="title_right" @click="shareQs">分享到问答广场</text> -->
					<text class="title_right" v-if="isShare" @click="shareQs">分享到问答广场</text>
					<text class="title_text" v-if="!isShare"></text>
				</view>
				<view v-for="(item,index) in messageList[listName]" :key="index" style="width: 100%;">
					<view class="asw_text">
						<view v-if="item.type=='assistant'">
							<view class="loadingTalk" v-if="item.talk.indexOf('思考中')!=-1">
								<view class="flexs">
									<image :src="waitImg" mode="" class="loadingImages">
									</image>
									<text style="vertical-align: top; word-break:break-all;" v-text="item.talk"></text>
								</view>
								<u-col span="5" v-if="index===messageList[listName].length-1">
									<u-button type='primary'
										:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","font-size":"14px"}'
										size="mini" color="rgba(31, 100, 255, 0.1)" @click="stopStart">
										停止回答
									</u-button>
								</u-col>
							</view>

							<view class="tips" v-else-if="item.code==40022">
								<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
								<view style="display: flex; justify-content: space-around;">
									<u-button type="error" color="#FF9B17" v-if="listName == 'one'"
										:customStyle="{'border-radius':'8px','margin-top':'10px', 'flex':'1', 'margin-right':'10px'}"
										@click='goToVip'>升级会员</u-button>
									<u-button type="error" color="#1F64FF"
										:customStyle="{'border-radius':'8px','margin-top':'10px', 'flex':'1'}"
										@click='goToVip'>开通流量包</u-button>
								</view>
							</view>

							<view class="tips" v-else-if="item.code==40021">
								<text style="font-size:17px; word-break:break-all;">{{item.talk}}</text>
							</view>
							<veiw v-else>
								<view class="tips">
									<!-- <text style="font-size:17px;width: 100%; word-break:break-all;" v-if="!item.loading">{{item.talk}}</text> -->
									<ua-markdown :source="item.talk" :showLine="false" />
								</view>
								<view class='edit'>
									<u-row>
										<u-col span="6" align="center">
											字数:{{item.textNumber}}
										</u-col>
										<u-col span="6" align="center" v-if="item.loading">
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
										<u-col span="12" align="center">
											当前内容为AI生成，不做任何决策使用！由此引发的一切后果，需自行承担，请知悉,已通过阿里云内容安全审核
										</u-col>
									</u-row>


									<u-row class='edit' align="center">
										<u-col span="7.5" v-if="item.history"></u-col>
										<u-col span="1" align="center" v-if="!item.history">
											<view>
												<image v-if="item.loading" src="../../static/images/time.png" mode=""
													class="opaImg" style="vertical-align: top;"></image>
												<image v-else :src="waitImg" mode="" width="16px" height="16px"
													class="loadingImages">
												</image>
											</view>

										</u-col>
										<u-col span="6.5" align="center" v-if="!item.history">
											<view>
												<text v-if="item.loading"> 耗时：{{item.time}}秒</text>
												<text v-else> 思考中:{{item.time}}秒</text>
											</view>

										</u-col>

										<u-col span="1.5" @click="evaluate2(1,index)" v-if="listName == 'three'">
											<image
												:src="require(`../../static/images/Icon(${evaluateType2[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="2" @click="evaluate2(2,index)" v-if="listName == 'three'">
											<image
												:src="require(`../../static/images/like(${evaluateType2[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>

										<u-col span="1.5" @click="evaluate3(1,index)" v-if="listName == 'four'">
											<image
												:src="require(`../../static/images/Icon(${evaluateType3[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="2" @click="evaluate3(2,index)" v-if="listName == 'four'">
											<image
												:src="require(`../../static/images/like(${evaluateType3[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>

										<u-col span="1.5" @click="evaluate5(1,index)" v-if="listName == 'six'">
											<image
												:src="require(`../../static/images/Icon(${evaluateType5[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="2" @click="evaluate5(2,index)" v-if="listName == 'six'">
											<image
												:src="require(`../../static/images/like(${evaluateType5[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>

										<u-col span="1.5" @click="evaluate6(1,index)" v-if="listName == 'seven'">
											<image
												:src="require(`../../static/images/Icon(${evaluateType6[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="2" @click="evaluate6(2,index)" v-if="listName == 'seven'">
											<image
												:src="require(`../../static/images/like(${evaluateType6[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>

										<u-col span="1.5" @click="evaluate7(1,index)" v-if="listName == 'eight'">
											<image
												:src="require(`../../static/images/Icon(${evaluateType7[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="2" @click="evaluate7(2,index)" v-if="listName == 'eight'">
											<image
												:src="require(`../../static/images/like(${evaluateType7[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="1.5" @click="evaluate7(1,index)" v-if="listName == 'eleven'">
											<image
												:src="require(`../../static/images/Icon(${evaluateType7[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="2" @click="evaluate7(2,index)" v-if="listName == 'eleven'">
											<image
												:src="require(`../../static/images/like(${evaluateType7[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="1.5" @click="evaluate7(1,index)" v-if="listName == 'twelve'">
											<image
												:src="require(`../../static/images/Icon(${evaluateType7[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="2" @click="evaluate7(2,index)" v-if="listName == 'twelve'">
											<image
												:src="require(`../../static/images/like(${evaluateType7[index]}).png`) "
												mode="" class="opaImg">
											</image>
										</u-col>
										<u-col span="1" @click="copyFun(item.talk)">
											<image src="../../static/images/balckCopy.png" mode="" class="opaImg">
											</image>
										</u-col>
									</u-row>
								</view>
								<u-row gutter="20">
									<u-col span="6" v-if="index===messageList[listName].length-1 && item.loading">
										<u-button type='primary'
											:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","font-size":"14px"}'
											size="mini" color="rgba(31, 100, 255, 0.1)" @click="show=true">
											继续提问
										</u-button>
									</u-col>

									<u-col span="5"
										v-if="index===messageList[listName].length-1 && !item.history && !item.loading">
										<u-button type='primary'
											:customStyle='{"color":"#1F64FF","height":"28px","margin-top": "10px","font-size":"14px"}'
											size="mini" color="rgba(31, 100, 255, 0.1)" @click="stopChat">
											停止回答
										</u-button>
									</u-col>

								</u-row>

							</veiw>

						</view>

					</view>

				</view>

			</view>

			<u-modal :show="show" @cancel="show = false" confirmText="确定" confirmColor="#1F64FF;"
				:showCancelButton='true' @confirm="showFun">
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
		</view>

		<!-- 问题集 -->
		<view class="qs_cont">
			<view class="cont_top">
				<text class="top_mid">问答广场</text>
				<text class="top_right">其他人都在问什么?</text>
			</view>
			<view class="cont_right" @click="getSquareList">
				<text class="right_text">换一批</text>
				<image src="@/static/images/change.png" mode="" class="hot_img"></image>
			</view>
		</view>
		<view class="qs">

			<view class="loading" v-if='loading'>
				<text class="load_text">正在获取场景内容</text>
				<image :src="waitImg" mode="" class="load_img">
				</image>
			</view>

			<view class="hotWrods">
				<view v-if="squareList.length > 0">
					<view @click="eidtContent(item.session_code)" class="box" v-for='(item,index) in squareList'
						:key='index'>

						<view class="text">
							<view class="textInfo">
								{{item.session_data[0].content}}
							</view>
						</view>
						<view class="text_cont">
							<text class="text_li">{{ item.session_data[1].content }}</text>
						</view>
					</view>
				</view>

				<view class="on_order_list" v-if="squareList.length == 0">
					暂无相关推荐
				</view>
			</view>
		</view>

		<view class="code">
			<view class="code_img" v-if="content.contact_qr_code != ''">
				<image :src="content.contact_qr_code" show-menu-by-longpress="true"
					@click="checkImg(content.contact_qr_code)" class="img_cont"></image>
				<text class="img_tip">{{ content.contact_qr_code_desc }}</text>
			</view>
			<view class="code_img" v-if="content.interest_group_code != ''">
				<image :src="content.interest_group_code" show-menu-by-longpress="true"
					@click="checkImg(interest_group_code)" class="img_cont"></image>
				<text class="img_tip">{{ content.interest_group_code_desc }}</text>
			</view>
		</view>

		<!-- 添加标签 -->
		<u-modal :show="tagShow" @cancel="closeTag" confirmText="添加" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="confirmTag">
			<view class="key_cont" style="">
				<view class="title">添加标签</view>
				<u-input :customStyle='{"padding":"8px", "width":"100%"}' inputAlign="center" v-model="tagName"
					placeholder="请输入标签" type="text"></u-input>
			</view>
		</u-modal>
		<!-- 模型选择器 -->
		<u-picker :show="chatShow" :columns="samplerList" :closeOnClickOverlay="true" @close="chatShow = false"
			v-model="samChatType" keyName="label" @cancel="chatShow = false" @confirm="version"></u-picker>
	</view>
</template>
<script>
	import {
		creatChat,
		chat_likes,
		chat_session,
		xfChat,
		getSquare,
		shareChat,
		squareDetail,
		getConfig
	} from "@/apis/chat.js"
	import {
		saveFootprint
	} from "@/apis/user.js"
	import * as TextEncoding from 'text-encoding-shim';
	import uaMarkdown from '../../components/ua2-markdown/ua-markdown.vue'
	export default {
		data() {
			return {
				prompt:'人格设定:你是优秘智能公司开发的umibot',
				
				samplerList: [
					[{
							label: '文心一言',
							chat_type: 4
						},
						{
							label: '讯飞星火',
							chat_type: 5
						},
						{
							label: 'ChatGLM',
							chat_type: 8
						},
						{
							label: '通义千问',
							chat_type: 10
						},
						{
							label: '360智脑',
							chat_type: 12
						},
						{
							label: '火山云雀',
							chat_type: 1000
						},
						{
							label: '腾讯混元',
							chat_type: 1001
						},
					]
				],
				chatShow: false,
				samChatType: '文心一言',

				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				content: '',
				active: 8,
				chatInputValue: '',
				switchValue: true,
				inputValue: '',
				checkBox: [],
				tagValue: true,
				tagShow: false,
				tagList: ['标签一', '标签二'],
				tagName: '',
				pickShow: false,
				pickValue: '',

				placeValue: '我是ChatGLM千亿对话模型',
				isPosition: false,

				chatType: 'ChatGLM',
				session_code: "",
				chat_group_code: "",
				supplement: {
					msg_list: []
				},

				listName: 'three',
				//火山云雀
				stop_twelve: false,
				twelve_shi: 0,
				twelve_time: 0,
				requestTask_twelve: '',
				evaluateType2: [],
				//腾讯混元
				stop_eleven: false,
				eleven_shi: 0,
				eleven_time: 0,
				requestTask_eleven: '',
				evaluateType2: [],

				//文心一言
				stop_three: false,
				three_shi: 0,
				three_time: 0,
				requestTask_three: '',
				evaluateType2: [],

				//讯飞星火
				stop_four: false,
				four_shi: 0,
				four_time: 0,
				requestTask_four: '',
				evaluateType3: [],

				//ChatGLM
				stop_six: false,
				six_shi: 0,
				six_time: 0,
				requestTask_six: '',
				evaluateType5: [],

				//通义千问
				stop_seven: false,
				seven_shi: 0,
				seven_time: 0,
				requestTask_seven: '',
				evaluateType6: [],

				//商汤
				stop_eight: false,
				eight_shi: 0,
				eight_time: 0,
				requestTask_eight: '',
				evaluateType7: [],

				messageList: {
					'three': [],
					'four': [],
					'six': [],
					'seven': [],
					'eight': [],
					'eleven':[],
					'twelve':[]
				},

				sessionList: {
					'three': [],
					'four': [],
					'six': [],
					'seven': [],
					'eight': [],
					'eleven':[],
					'twelve':[]
				},

				question_data: [],
				qsData: '',

				keyHeight: 0,
				show: false,
				complete: '',
				loading: false,
				questionList: [],
				squareList: [],
				tagIndex: 0,
				selectIndex: 0,
				checkList: [],
				isShare: true,
				waitImg: global.baseImg + '/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',

			};
		},
		components: {
			uaMarkdown
		},
		onLoad(option) {
			console.log(JSON.parse(option.item), 147)
			this.content = JSON.parse(option.item);
			if (this.content.title.indexOf('AI') == -1) {
				this.content.title = 'AI ' + this.content.title
			}
			console.log(this.content, 336)
		},

		onShow() {
			this.getConfig()
			this.getSquareList()
		},
		methods: {
			// 获取自定义问题集
			getConfig() {
				// const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				let val = {
					'question_id': this.content.question_id
					// 'question_id': '429041824077766'
				}

				getConfig(val).then(res => {
					if (res.code == 20000) {
						console.log(res, 74, val)
						this.questionList = res.data;
						if (this.questionList.length > 0) {
							this.questionList.forEach((val) => {
								val.modelValue = '';
								val.modelState = false;
								val.modelShow = false;
								val.optionArr = []
								val.optionArr.push(val.options)

								if (val.info_type_id == '438260526168070') {
									val.tagList = val.options
								} else {
									val.tagList = []
								}

							})
						} else {
							// let askVal = {
							// 	'info_type_id': "438600126748678",
							// 	'info_type_name': "Textarea",
							// 	'is_required': "1",
							// 	'modelShow': false,
							// 	'modelState': false,
							// 	'modelValue': "",
							// 	'optionArr': [
							// 		'option_id': '438689288239174',
							// 		'value': "你的提问"
							// 	],
							// 	'options': [
							// 		'option_id': '438689288239174',
							// 		'value': "你的提问"
							// 	],
							// 	'tagList': [],
							// 	'title': "你的提问",
							// 	'weight': "1"
							// }
							// this.questionList.push(askVal)
						}

						this.$forceUpdate()
						console.log(this.questionList, 663)
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					console.log('err', err);
					this.$api.msg('获取失败！')
				})
			},

			// 获取问题广场问题
			getSquareList() {
				let vals = {
					'question_id': this.content.question_id,
					'module_id': this.content.module_id
				}
				this.loading = true;
				getSquare(vals).then(res => {
					if (res.code == 20000) {
						this.squareList = res.data;
						if (this.squareList == null) {
							this.squareList = []
						}
						this.loading = false;
						console.log(this.squareList, 878)
					} else {
						this.loading = true;
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.loading = true;
					this.$api.msg('获取失败');
				})

			},
			//切换对话
			version(e) {
				console.log(e,'e');
				this.chatShow = false;
				let num = e.value[0].chat_type
				console.log(num);
				if (num == 4) {
					this.samChatType = '文心一言';
					this.placeValue = '我是百度全新一代知识增强大语言模型，文心一言大模型'
					this.listName = 'three'
				} else if (num == 5) {
					this.samChatType = '讯飞星火';
					this.placeValue = '我是讯飞星火大模型以中文为核心的，新一代认知智能大模型'
					this.listName = 'four'
				} else if (num == 8) {
					this.samChatType = 'ChatGLM';
					this.placeValue = '我是ChatGLM千亿对话模型。'
					this.listName = 'six'
				} else if (num == 10) {
					this.samChatType = '通义千问';
					this.placeValue = '我是通义千问，一个专门响应人类指令的大模型'
					this.listName = 'seven'
				} else if (num == 1001) {
					this.samChatType = '腾讯混元';
					this.placeValue = '我是腾讯混元大模型'
					this.listName = 'eleven'
				} else if (num == 1000) {
					this.samChatType = '火山云雀';
					this.placeValue = '我是火山云雀大模型'
					this.listName = 'twelve'
				} else if (num == 12) {
					this.samChatType = '360智脑';
					this.placeValue = '我是360智脑大模型'
					this.listName = 'eight'
				}
			},

			checkImg(url) {
				uni.previewImage({
					urls: [url],
					current: 0
				})
			},

			sendMessage(message) {
				if (this.messageList[this.listName].length > 0) {
					let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
					let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
					let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;
					let history = this.messageList[this.listName][this.messageList[this.listName].length - 1].history;

					// console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1], 8871);
					if (send_talk.indexOf('思考中') != -1) {

						this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
						return
					}

					if (send_loading == false && send_time > 0) {

						this.$api.msg('当前问题还没回答完毕，请稍后再提问！')
						return
					}
					// if(send_time == 0 && !history) {
					// 	this.messageList[this.listName].pop()
					// }
				}

				// if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容')

				this.chatInputValue = this.content.content;
				let flag = true;
				this.question_data = [];
				this.isShare = true;
				this.questionList.forEach((val, index) => {
					if (flag) {
						// console.log(val,148)
						if (val.info_type_name == 'Input') {
							if (val.is_required == 1 && val.modelValue == '') {
								let text = '请输入' + val.title;
								this.$api.msg(text)
								flag = false
							} else {
								let content = val.title + ':' + val.modelValue + ';'
								this.chatInputValue += content
								this.question_data.push({
									'info_type_name': 'Input',
									'title': val.title,
									'content': val.modelValue,
									'is_required': val.is_required
								})
								flag = true
							}
						}

						if (val.info_type_name == 'Textarea') {
							if (val.is_required == 1 && val.modelValue == '') {
								let text = '请输入' + val.title;
								this.$api.msg(text)
								flag = false
							} else {
								let content = val.title + ':' + val.modelValue + ';'
								this.chatInputValue += content
								this.question_data.push({
									'info_type_name': 'Textarea',
									'title': val.title,
									'content': val.modelValue,
									'is_required': val.is_required
								})
								flag = true
							}
						}

						if (val.info_type_name == 'CheckBox') {
							if (val.is_required == 1 && val.modelValue == '') {
								let text = '请选择' + val.title;
								this.$api.msg(text)
								flag = false
							} else if (val.is_required == 1 && val.modelValue.length == 0) {
								let text = '请选择' + val.title;
								this.$api.msg(text)
								flag = false
							} else if (val.modelValue.length > 0) {
								let str = val.modelValue.toLocaleString(',');
								let content = val.title + ':' + str + ';'
								this.chatInputValue += content
								this.question_data.push({
									'info_type_name': 'CheckBox',
									'title': val.title,
									'content': val.modelValue,
									'is_required': val.is_required,
									'options': val.options
								})
								flag = true
							}
						}

						if (val.info_type_name == 'Select') {
							if (val.is_required == 1 && val.modelValue == '') {
								let text = '请选择' + val.title;
								this.$api.msg(text)
								flag = false
							} else {
								let content = val.title + ':' + val.modelValue + ';'
								this.chatInputValue += content
								this.question_data.push({
									'info_type_name': 'Select',
									'title': val.title,
									'content': val.modelValue,
									'is_required': val.is_required,
									'options': val.options,
									'modelShow': false,

								})
								flag = true
							}
						}

						if (val.info_type_name == 'Tag') {
							if (val.is_required == 1 && val.tagList.length == 0) {
								let text = '请添加' + val.title;
								this.$api.msg(text)
								flag = false
							} else if (val.tagList.length > 0) {
								let content = val.title + ':' + val.tagList.toLocaleString(',') + ';'
								this.chatInputValue += content
								this.question_data.push({
									'info_type_name': 'Tag',
									'title': val.title,
									'content': val.tagList,
									'is_required': val.is_required
								})
								flag = true
							}
						}
					}

				})

				// console.log(this.question_data,256)

				if (flag) {
					// console.log(this.chatInputValue,666)
					this.messageList[this.listName] = [];
					this.sessionList[this.listName] = [];
					this.session_code = '';
					this.chat_group_code = '';

					// if(message.length)
					// switch (this.chatType) {
					// 	case 'AI35':
					// 		if (this.chatInputValue.length > 900) return this.$api.msg('文字不得超过900字')
					// 		break;
					// 	case 'AI40':
					// 		if (this.chatInputValue.length > 2000) return this.$api.msg('文字不得超过2000字')
					// 		break;

					// }

					this.isPosition = true


					//判断是否是第一条提问

					// console.log(this.selectDone, 'this.messageList[this.listName].length');
					this.stop_three = false; // 重置手动停止按钮
					this.stop_four = false; // 重置手动停止按钮
					this.stop_six = false; // 重置手动停止按钮
					this.stop_seven = false; // 重置手动停止按钮
					this.stop_eight = false; // 重置手动停止按钮
					this.stop_twelve = false; // 重置手动停止按钮
					this.stop_eleven = false; // 重置手动停止按钮

					this.sessionList[this.listName].push({
						talk: this.chatInputValue,
						type: 'user'
					})

					let chat_tip = '';
					if (this.samChatType == '文心一言') {
						chat_tip = 4
					} else if (this.samChatType == '讯飞星火') {
						chat_tip = 5
					} else if (this.samChatType == 'ChatGLM') {
						chat_tip = 8
					} else if (this.samChatType == '通义千问') {
						chat_tip = 10
					} else if (this.samChatType == '火山云雀') {
						chat_tip = 1000
					}else if (this.samChatType == '腾讯混元') {
						chat_tip = 1001
					}else if (this.samChatType == '360智脑') {
						chat_tip = 12
					}
					let data = {
						chat_type: chat_tip,
						action_type: '3',
						session_code: "",
						chat_group_code: "",
						content: this.chatInputValue,
						stream_str: 1,
						is_decode: 1,
						msg_list: [{
							role: 'user',
							content: this.chatInputValue,
							covert_content:this.prompt
						}]
					}
					data.msg_list = JSON.stringify(data.msg_list)


					this.creatChatFun(data, 'first')

					this.selectDone = ''
					this.chatInputValue = ''

				}


			},

			//信息回调方法
			creatChatFun(data, state) {
				console.log(this.listName,data);
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
					data.model = 'eb-instant';
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
							this.messageList.three[this.messageList.three.length - 1].loading = true
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

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
												this.messageList[this.listName].pop()
												setTimeout(() => {
													uni.navigateTo({
														url: '/pages/login/login',
													})
												}, 1500)

											} else {
												this.userRole = userInfo.role
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)
console.log('文心',info);
							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName].push({
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									})
									this.$forceUpdate()
									this.toBottom()
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
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
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
									loading: load_state
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "文心一言",
										"type_code": "assistant",
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
					data.model='v1.1'
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.four_time)

								// 非手动停止才执行
								if (!this.stop_four) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName].push({
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									})
									this.$forceUpdate()
									this.toBottom()
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
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
									loading: load_state
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "讯飞星火",
										"type_code": "assistant",
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
					data.model = 'chatglm_pro';
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.six_time)

								// 非手动停止才执行
								if (!this.stop_six) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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

					this.requestTask_six.onChunkReceived(response => {
						const arrayBuffer = response.data;
						const uint8Array = new Uint8Array(arrayBuffer);
						const str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);

						let status = ''
						let session_code = ''
						let chat_group_code = ''
						let all_tokens = 0
						let arr = str.match(/\{(.+?)\}/g)

						arr.map((item => {
							// console.log(item, 'item');
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName].push({
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									})
									this.$forceUpdate()
									this.toBottom()
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
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
									loading: load_state
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "chatGLM",
										"type_code": "assistant",
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
					data.model = 'qwen-turbo';
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
							this.messageList.seven[this.messageList.seven.length - 1].loading = true
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.seven_time)

								// 非手动停止才执行
								if (!this.stop_seven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null) {
								let chat_val = this.base64ToString(JSON.parse(item).content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(/Generative Pre-trained Transformer/gi,
									"");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info = session4
							}


							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType].length -
										1
									] = {
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
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
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "通义千问",
										"type_code": "assistant",
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
							this.messageList.eight[this.messageList.eight.length - 1].loading = true
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.eight_time)

								// 非手动停止才执行
								if (!this.stop_eight) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content !=
								null) {
								let chat_val = this.base64ToString(JSON.parse(item).content);
								let session = chat_val.replace(/chatgpt/gi, "无忧秘书智脑");
								let session1 = session.replace(/gpt/gi, "无忧秘书智脑");
								let session2 = session1.replace(/Generative Pre-trained Transformer/gi,
									"");
								let session3 = session2.replace(/open/gi, "无忧秘书智脑");
								let session4 = session3.replace(/openAI/gi, "无忧秘书智脑");
								// info += this.base64ToString(JSON.parse(item).content)
								info += session4
							}


							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName][this.messageList[tabType].length -
										1
									] = {
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
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
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "商汤日日新",
										"type_code": "assistant",
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
					data.model='skylark-chat'
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.twelve_time)

								// 非手动停止才执行
								if (!this.stop_twelve) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)
console.log('info,腾讯',info);
							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName].push({
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									})
									this.$forceUpdate()
									this.toBottom()
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
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
									loading: load_state
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "火山云雀",
										"type_code": "assistant",
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
					data.model='ChatStd'
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

							if (complete.statusCode != 200 && JSON.stringify(complete.statusCode) != 'null') {

								// let code
								clearInterval(this.eleven_time)

								// 非手动停止才执行
								if (!this.stop_eleven) {
									xfChat(data).then(res => {
										if (res.code < 49999) {
											let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
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
												this.messageList[this.listName][this.messageList[this
													.listName].length - 1] = {
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
							if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null)
								info += this.base64ToString(JSON.parse(item).content)

							if (JSON.parse(item).code) {
								if (JSON.parse(item).code < 49999) {
									let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
									// console.log(userInfo.role == 'guess' ,'panduan');								
									this.userRole = userInfo.role
									this.messageList[this.listName].push({
										talk: JSON.parse(item).msg,
										type: 'assistant',
										time: 0,
										code: JSON.parse(item).code == 40022 ? JSON.parse(item)
											.code : 40021,
										status: "stop",
										textNumber: 0,
										history: false,
										loading: true
									})
									this.$forceUpdate()
									this.toBottom()
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
										chat_type: 1001,
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
										this.supplement.msg_list = JSON.parse(this.supplement.msg_list)
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
								this.messageList[tabType][this.messageList[tabType].length - 1] = {
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
									loading: load_state
								}

								if (load_state) { //保存记录
									let save_val = {
										"type_name": "腾讯混元",
										"type_code": "assistant",
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

			copyFun(val) {
				uni.setClipboardData({
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
				let send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
				let send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
				let send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;

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
				this.radioValue = false;
				this.selectDone = '有';
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
				}else if (this.listName == 'eleven') {
					this.stop_eleven = true
					this.requestTask_eleven.abort();
					clearInterval(this.eleven_shi)
					clearInterval(this.eleven_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				}else if (this.listName == 'twelve') {
					this.stop_twelve = true
					this.requestTask_twelve.abort();
					clearInterval(this.twelve_shi)
					clearInterval(this.twelve_time)
					this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true
				}

			},

			//评价回调文心一言
			evaluate2(type, index) {

				if (this.evaluateType2[index] == type) {
					this.evaluateType2[index] = undefined
					type = 0
				} else {
					this.evaluateType2[index] = type
				}


				// console.log('dian', this.evaluateType2)
				let data = {
					is_likes: type,
					session_code: this.session_code,
					chat_group_code: this.chat_group_code
				}
				chat_likes(data).then(res => {
					// uni.showToast({ //提示
					// 	title: '评价成功'
					// })
				})
				this.$forceUpdate()
			},

			//评价回调讯飞星火
			evaluate3(type, index) {

				if (this.evaluateType3[index] == type) {
					this.evaluateType3[index] = undefined
					type = 0
				} else {
					this.evaluateType3[index] = type
				}


				// console.log('dian', this.evaluateType3)
				let data = {
					is_likes: type,
					session_code: this.session_code,
					chat_group_code: this.chat_group_code
				}
				chat_likes(data).then(res => {
					// uni.showToast({ //提示
					// 	title: '评价成功'
					// })
				})
				this.$forceUpdate()
			},

			//评价回调chatglm
			evaluate5(type, index) {

				if (this.evaluateType5[index] == type) {
					this.evaluateType5[index] = undefined
					type = 0
				} else {
					this.evaluateType5[index] = type
				}

				// console.log('dian', this.evaluateType5)
				let data = {
					is_likes: type,
					session_code: this.session_code,
					chat_group_code: this.chat_group_code
				}
				chat_likes(data).then(res => {
					// uni.showToast({ //提示
					// 	title: '评价成功'
					// })
				})
				this.$forceUpdate()
			},

			//评价回调通义千问
			evaluate6(type, index) {

				if (this.evaluateType6[index] == type) {
					this.evaluateType6[index] = undefined
					type = 0
				} else {
					this.evaluateType6[index] = type
				}


				// console.log('dian', this.evaluateType5)
				let data = {
					is_likes: type,
					session_code: this.session_code,
					chat_group_code: this.chat_group_code
				}
				chat_likes(data).then(res => {
					// uni.showToast({ //提示
					// 	title: '评价成功'
					// })
				})
				this.$forceUpdate()
			},

			//评价回调商汤日日新
			evaluate7(type, index) {

				if (this.evaluateType7[index] == type) {
					this.evaluateType7[index] = undefined
					type = 0
				} else {
					this.evaluateType7[index] = type
				}


				// console.log('dian', this.evaluateType5)
				let data = {
					is_likes: type,
					session_code: this.session_code,
					chat_group_code: this.chat_group_code
				}
				chat_likes(data).then(res => {
					// uni.showToast({ //提示
					// 	title: '评价成功'
					// })
				})
				this.$forceUpdate()
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
				}else if (this.listName == 'eight') {
					this.stop_eight = true
					this.requestTask_eight.abort();
					clearInterval(this.eight_shi)
					clearInterval(this.eight_time)
					this.messageList.eight.pop()
				}else if (this.listName == 'twelve') {
					this.stop_twelve = true
					this.requestTask_twelve.abort();
					clearInterval(this.twelve_shi)
					clearInterval(this.twelve_time)
					this.messageList.twelve.pop()
				}else if (this.listName == 'eleven') {
					this.stop_eleven = true
					this.requestTask_eleven.abort();
					clearInterval(this.eleven_shi)
					clearInterval(this.eleven_time)
					this.messageList.eleven.pop()
				}
				this.isPosition = false
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
				if (this.listName == 'three' || this.listName == 'five' || this.listName == 'six' || this.listName ==
					'seven'|| this.listName =='eight'|| this.listName =='twelve'|| this.listName =='eleven') {
					this.supplement.msg_list = [{
							role: 'user',
							content: this.sessionList[this.listName][this.sessionList[this.listName].length - 1]
								.talk
						},
						{
							role: 'assistant',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 1]
								.talk
						},
						{
							role: 'user',
							content: this.complete
						}
					]
				} else {
					this.supplement.msg_list = [{
							role: 'assistant',
							content: this.messageList[this.listName][this.messageList[this.listName].length - 1]
								.talk
						},
						{
							role: 'user',
							content: this.complete
						}
					]
				}

				this.sessionList[this.listName] = []
				this.sessionList[this.listName].push({
					talk: this.complete,
					type: 'user'
				})
				this.messageList[this.listName] = [];
				//把数据变成JSON
				this.supplement.msg_list = JSON.stringify(this.supplement.msg_list)
				this.show = false


				this.complete = ""

				await this.creatChatFun(this.supplement, 'continue')
				this.$forceUpdate()

			},

			toBottom() {
				// console.log('出发了')
				let that = this;
				this.$nextTick(() => {
					setTimeout(() => {
						uni.createSelectorQuery().select(".chat_cont").boundingClientRect(function(
							res) { //定位到你要的class的位置
							// console.log(res,330);
							// console.log(res.height,410)
							uni.pageScrollTo({
								scrollTop: res.height,
								duration: 0
							});
						}).exec()
					}, 1500)
				})
			},

			keyboardheightchange(e) {
				// console.log(e, '键盘高度变化33');
				if (e.detail.height == 0) {
					this.keyHeight = 0
					this.toBottom();

				} else {
					this.keyHeight = e.detail.height
				}
			},

			pickSelect(e) {
				// console.log('confirm', e)
				let val = e.value[0].option_value;
				this.questionList[this.selectIndex].modelValue = val;
				this.questionList[this.selectIndex].modelShow = false;
				this.$forceUpdate()
				// console.log(this.questionList,689)
			},

			closePick(index) {
				this.questionList[index].modelShow = false;
				this.$forceUpdate()
			},

			openDialog(index) {
				this.questionList[index].modelShow = true;
				this.selectIndex = index;
				this.$forceUpdate()
			},

			//添加标签
			addTag(index) {
				this.tagIndex = index;
				this.tagShow = true
			},

			checkboxChange(e) {
				// console.log('change', e);
				// console.log(this.questionList,663)
			},

			closeTag() {
				this.tagName = ''
				this.tagShow = false
			},

			confirmTag() {
				if (this.tagName == '') {
					this.$api.msg('请输入标签名称')
				}
				this.questionList[this.tagIndex].tagList.push(this.tagName)
				this.tagShow = false;
				this.tagName = '';
				this.$forceUpdate()
			},

			//删除标签
			delTag(index) {
				this.questionList[index].tagList.splice(index, 1)
				this.$forceUpdate()
			},

			// 分享到问答广场
			shareQs() {
				let session_data = [];
				// console.log(this.listName,885)
				// console.log(this.sessionList,886)
				// console.log(this.messageList,887)
				let chat_cont = this.sessionList[this.listName][this.sessionList[this.listName].length - 1].talk;
				let content = chat_cont.replace(this.content.content, '');
				let user_data = [{
					'role': 'user',
					'content': content
				}]
				let assistant_data = [{
					'role': 'assistant',
					'content': this.messageList[this.listName][this.messageList[this.listName].length - 1].talk
				}]
				session_data = session_data.concat(user_data);
				session_data = session_data.concat(assistant_data);
				// console.log(session_data,895)
				let vals = {
					'question_id': this.content.question_id,
					'module_id': this.content.module_id,
					'session_code': this.session_code,
					'chat_group_code': this.chat_group_code,
					'question_data': this.question_data,
					'session_data': session_data
				}

				shareChat(vals).then(res => {
					if (res.code == 20000) {
						this.$api.msg('分享成功');
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})

			},

			// 获取详情
			eidtContent(session_code) {
				let vals = {
					'session_code': session_code,
				}
				squareDetail(vals).then(res => {
					if (res.code == 20000) {
						// this.$api.msg('分享成功');
						// this.qsData = res.data;
						res.data.question_data.forEach((val) => {
							if (val.info_type_name == 'Tag') {
								val.tagList = val.content
							} else {
								val.modelValue = val.content
							}

							if (val.info_type_name == 'Select') {
								val.optionArr = []
								val.optionArr.push(val.options)
							}

						})

						res.data.session_data.forEach((val) => {
							val.talk = val.content
							val.type = val.role
							val.loading = false
							val.history = true
							val.textNumber = val.content.replace(/[\r\n]/g, "").length
						})
						this.questionList = res.data.question_data;
						// console.log(this.questionList,8956)
						this.messageList[this.listName] = res.data.session_data.slice(1);
						this.isShare = false;
						// console.log(this.messageList[this.listName],8957)
						this.isPosition = true
						this.$forceUpdate()
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
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
			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			},

		}
	}
</script>
<style lang="scss" scoped>
	.containar {
		padding: 30upx 0;
	}

	.apply_cont {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 30upx;

		.cont_title {
			color: #333;
			font-size: 30upx;
			font-style: normal;
			font-weight: 500;
			line-height: 60upx;
		}

		.cont_text {
			background: #fff;
			border-radius: 10upx;
			padding: 20upx;
			width: 100%;
			height: 154upx;

			.text_li {
				color: #666;
				font-size: 26upx;
				font-style: normal;
				font-weight: 400;
				line-height: 38upx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3; // 控制多行的行数
				-webkit-box-orient: vertical;
			}
		}
	}

	.send {
		padding: 25upx 30upx;
		// background: #fff;
		display: flex;
		align-items: center;
		flex-direction: column;

		// margin-bottom: 20upx;
		.type_text {
			color: #333;
			font-size: 26upx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			margin-top: 10upx;
		}

		.chat_type {
			display: flex;
			align-items: flex-start;
			// justify-content: space-around;
			width: 100%;

			.type_r {
				display: flex;
				align-items: center;
				// justify-content: space-around;
				flex-wrap: wrap;
				flex: 1;
			}

			.tabs {
				width: 22%;
				background: #E4E7ED;
				border-radius: 6upx;
				padding: 16upx 0;
				font-style: normal;
				font-weight: 500;
				font-size: 28upx;
				line-height: 150%;
				color: #333;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 10upx 1.5%;
			}

			.active_tabs {
				width: 22%;
				background: rgba(31, 100, 255, 0.15);
				;
				border-radius: 6upx;
				padding: 16upx 0;
				font-style: normal;
				font-weight: 500;
				font-size: 28upx;
				line-height: 150%;
				color: #1F64FF;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 10upx 1.5%;
			}
		}

		.chat_qs {
			background: #fff;
			padding: 20upx;
			border-radius: 8upx;
			margin-bottom: 20upx;
			width: 100%;
		}

		.chat_text {
			width: 100%;
			padding: 20upx 0;

			/deep/.u-textarea {
				padding: 18upx;
				min-height: 100upx;
				max-height: 150upx;
				overflow-y: auto;
			}
		}

		.chat_texts {
			padding: 20upx 0;
			display: flex;
			flex-direction: column;
		}

		.text_cont {
			display: flex;
			align-items: center;
			margin-bottom: 10upx;

			.text_l {
				color: #FF0101;
				font-size: 22upx;
				font-style: normal;
				font-weight: 400;
				line-height: 26upx;
				margin-right: 5upx;
			}

			.text_r {
				color: #333;
				text-align: center;
				font-size: 24upx;
				font-style: normal;
				font-weight: 400;
				line-height: 26upx;
			}
		}

		.chat_btn {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #1F64FF;
			border-radius: 12upx;
			line-height: 90upx;
			font-style: normal;
			font-weight: 500;
			font-size: 34upx;
			color: #fff;
		}

		.chat_btn:active {
			opacity: 0.5;
		}
	}

	.code {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 50upx 0;
		padding: 0 30upx;

		.code_img {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.img_cont {
				width: 220upx;
				height: 220upx;
			}

			.img_tip {
				color: #000;
				text-align: center;
				font-size: 28upx;
				font-style: normal;
				font-weight: 500;
				line-height: 50upx;
			}
		}
	}

	.asw_cont {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 40upx;
		padding: 0 30upx;

		.asw_title {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			.title_text {
				color: #333;
				font-size: 30upx;
				font-weight: 500;
				line-height: 150%;
				flex: 1;
				text-align: center;
			}

			.title_right {
				flex: 1;
				color: #1F64FF;
				font-size: 26upx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				text-align: right;
			}

		}

		.asw_text {
			padding: 15upx;
			background: #fff;
			border-radius: 10upx;
			min-height: 100upx;
			width: 100%;
			margin-top: 30upx;
		}
	}

	.loadingTalk {

		.flexs {
			display: flex;
			align-items: center;
			background: #fff;
			padding: 10px;
			color: #AAB2C8;
			font-size: 12px;
			font-weight: 400;
			display: inline-block;
			border-radius: 5px;
		}
	}

	.tips {
		word-break: break-all;
		color: #333;

	}

	.edit {
		word-break: break-all;
		color: #AAB2C8;

		/deep/.u-row {
			font-weight: 400;
			font-size: 14px;
			color: #AAB2C8;
			margin-bottom: 0;
			margin-top: 10px;
		}

	}

	.loadingImages {
		width: 16px;
		height: 16px;
		opacity: 0.5;
		margin-right: 5px;
	}

	.opaImg {
		width: 20px;
		height: 20px;
	}

	.isPosition {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 99;
		background-color: #fff;
	}

	.modal {
		padding: 0 10px;

		.edit {
			font-weight: 500;
			font-size: 18px;
			line-height: 26px;

			color: #303133;
			position: relative;

			.changes {

				position: absolute;
				height: 5px;
				width: 70px;
				bottom: 3px;
				background: linear-gradient(to right, rgba(31, 100, 255, 1), rgba(31, 100, 255, 0.5), rgba(255, 255, 255, 0.5));
				border-radius: 5px;
			}

		}

		.content {
			width: 272px;
			height: 153px;
			background: #F5F6FA;
			border-radius: 8px;
			padding: 20px;
			font-weight: 400;
			// font-size: 13px;
			margin-top: 18px;

			/deep/.u-textarea {
				padding: 0;
				background-color: #F5F6FA;
			}
		}
	}

	.qs_cont {
		padding: 20upx;
		// background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.cont_top {
			display: flex;
			align-items: flex-end;

			.top_mid {
				font-style: normal;
				font-weight: 600;
				font-size: 30upx;
				line-height: 150%;
				color: #333;
			}

			.top_right {
				font-style: normal;
				font-weight: 400;
				font-size: 24upx;
				line-height: 150%;
				color: #999;
				padding-left: 10upx;
			}
		}

		.cont_right {
			display: flex;
			align-items: center;

			.right_text {
				color: #1F64FF;
				font-size: 24upx;
				font-weight: 400;
				line-height: 150%;
			}

			.hot_img {
				width: 36upx;
				height: 36upx;
				margin: 0 15upx;
			}
		}
	}

	.qs {
		padding: 0 20upx;
		// margin-top: 20upx;

		.hotWrods {
			background: #fff;
			border-radius: 8px;
			box-shadow: 0px 2.23993px 7.83975px rgba(51, 51, 51, 0.1);
			margin-bottom: 10px;
			padding: 25upx 22upx;
			height: auto;

			.box {
				// height: 80px;
				background: #FFFFFF;
				border-bottom: 1upx solid #E6E9ED;

				.text {
					display: flex;
					align-items: center;
					justify-content: space-between;

				}

				.text_cont {
					padding: 10upx;
					height: 100upx;
					overflow: hidden;

					.text_li {
						font-size: 26upx;
						color: #888;
						line-height: 40upx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2; // 控制多行的行数
						-webkit-box-orient: vertical;
					}
				}

				.textInfo {
					max-width: 80%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					display: inline-block;
					color: #333;
					font-size: 15px;
					font-weight: 550;
					padding-left: 10px;
				}

				.tips {

					display: flex;
					background: #F2FAFF;
					border-radius: 0px 8px;
					width: 108px;
					height: 33px;
					font-size: 13px;
					color: #1F64FF;
					line-height: 26px;
					text-align: center;
					justify-content: center;
					align-items: center;

					.content {
						margin-left: 5px;
					}
				}
			}
		}

		.loading {
			display: flex;
			justify-content: center;
			background: #fff;
			padding: 20upx 0;
		}

		.load_text {
			font-style: normal;
			font-weight: 400;
			font-size: 30upx;
			line-height: 150%;
			color: #AAB2C8;
		}

		.load_img {
			width: 40upx;
			height: 40upx;
			opacity: 0.5;
		}
	}

	.u-page__tag-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 0 10upx 0 0;
	}

	.lists {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 20upx;
		background: #fff;
		border-radius: 8upx;
		border: 1upx solid #dadbde;
		margin-bottom: 25upx;

		.txt {
			font-size: 26upx;
			margin-left: 20upx;
			flex: 1;
		}

		.right_img {
			width: 24upx;
			height: 24upx;
			margin-right: 25upx;
		}
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
	}

	.title {
		font-weight: 500;
		font-size: 32upx;
		line-height: 48upx;
		color: #333;
		margin-bottom: 32upx;
	}

	.on_order_list {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		height: 70upx;
		line-height: 70upx;
		color: #C0C4CC;
		margin-bottom: 40upx;
	}

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
</style>