<template>
	<!-- 创建数字分身 -->
	<view class="main">
		<view class="my" @click="toPage()">
			我的分身
		</view>
		<!-- 图片上传区域 -->
		<view class="main-upload">
			<view class="main-upload-box" :style="{border:image != ''?'0px':''}" @click="uploadImg(3)">
				<block v-if="image == ''">
					<u-icon name="plus" color="#666" size="32"></u-icon>
					<text>请上传照片</text>
				</block>
				<image v-else style="height: 450rpx;" mode="heightFix" :src="getImgUrl(image)"></image>
			</view>
			<view class="main-upload-btn" @click="uploadImg(3)">上传照片</view>
			<view class="main-upload-tips">上传的照片需要包含人脸</view>
		</view>
		<!-- 注意事项 -->
		<view class="tips">
			<view class="tips-top">
				<view class="line"></view>
				<text>注意事项</text>
				<view class="line"></view>
			</view>
			<view class="tips-content">
				<view class="tips-content-box" v-for="(item,index) in tipsData" :key="index">
					<image :src="item.img"></image>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>

		<view class="tips">
			<view class="tips-top">
				<view class="line" style="width: 32%"></view>
				<text>克隆自己的声音</text>
				<view class="line" style="width: 32%"></view>
			</view>

			<view class="tips_copy" @click="toClone">
				<view class="copy_l">
					<!-- <u-icon name="plus-circle" color="#999" size="28"></u-icon> -->
					<text class="copy_text">购买声音克隆服务，定制专属你的声音</text>
				</view>
				<view class="copy_r">￥299</view>
			</view>
		</view>

		<view class="audio">
			<view class="audio-title">
				<view>
					<view class="line-title"></view>
					<text>选择声音</text>
				</view>
				<view v-if="boyUrl != ''" @click="play(boyUrl)">试听</view>
			</view>
			<!-- 选择声音 -->
			<view class="audio-check">
				<view class="audio-check-box">
					<view @click="openSelect">
						<text>{{ boyValue }}</text>
						<u-icon name="arrow-down" color="#666" size="18"></u-icon>
					</view>
				</view>
			</view>
		</view>

		<!-- 声音选择器 -->
		<u-picker :show="boyShow" ref="uPicker" :columns="boyList" v-model="boyIndex" :defaultIndex="[0,0]"
			keyName="voice_name" @cancel="boyShow = false" @confirm="boySubmit" @change="changeHandler"></u-picker>



		<!-- 选择分享内容 -->
		<view class="audio">
			<view class="audio-title" style="margin-bottom: 20rpx;">
				<view>
					<view class="line-title"></view>
					<text>选择分享内容</text>
				</view>
				<view @click="shareSbumit">保存</view>
			</view>
			<!-- 选择分享内容 -->
			<view class="shareG">
				<u-radio-group style="display: block;" :wrap='true' width='70%' v-model="share_value"
					@change="shareGroupChange">
					<u-radio :label-size='25' v-for="(item, index) in share_list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
		</view>

		<!-- 表单内容 -->
		<view class="form">
			<view class="form-tips">温馨提示：完善下方信息，聊天会更加有趣哦</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分身名称</text>
				</view>
				<u--input placeholder="请输入数字分身名称" border="surround" maxlength="10" v-model="user_name"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分身类型</text>
				</view>
				<u--input placeholder="如销售,客服,律师等" border="surround" maxlength="30" v-model="user_type"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">联系电话</text>
				</view>
				<u--input placeholder="请输入联系方式" border="surround" maxlength="30" v-model="user_phone"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">微信</text>
				</view>
				<view class="qs_img">
					<view v-if="wxImg != ''" @click="uploadImg(1)">
						<image class="up_img" :src="getImgUrl(wxImg)" alt="" />
						<!-- <img class="del_img" :src="delImg" alt="" @click.stop="wxImg.splice(index,1)" /> -->
					</view>
					<image class="up_img" src="@/static/user/upload.png" mode="aspectFit" @click="uploadImg(1)"
						v-else />
				</view>
				<view class="img_text">上传微信二维码</view>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">微信群</text>
				</view>
				<view class="qs_img">
					<view v-if="qsImg != ''" @click="uploadImg(2)">
						<image class="up_img" :src="getImgUrl(qsImg)" alt="" />
						<!-- <img class="del_img" :src="delImg" alt="" @click="qsImg.splice(index,1)" /> -->
					</view>
					<image class="up_img" src="@/static/user/upload.png" mode="aspectFit" @click="uploadImg(2)"
						v-else />
				</view>
				<view class="img_text">上传微信群二维码</view>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">宣传地址</text>
				</view>
				<u--input placeholder="请输入你的宣传地址" border="surround" maxlength="30" v-model="user_address"></u--input>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分享描述语</text>
				</view>
				<u-textarea v-model="share_desc" placeholder="默认:快来探索数字化的我" maxlength="25" count></u-textarea>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">招呼语</text>
				</view>
				<u-textarea v-model="greeting" placeholder="默认:您好,我是您的数字分身有什么问题可以随时问我" maxlength="-1"></u-textarea>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">分身设定</text>
				</view>
				<u-textarea v-model="user_greet" placeholder="您好,我是您的数字分身有什么问题可以随时问我" maxlength="-1"></u-textarea>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">个性化标签</text>
				</view>
				<view class='surround'>
					<view class="u-page__tag-item" v-for="(tip, index1) in tagList" :key="index1">
						<u-tag :text="tip" size="mini" plain closable @close="delTag(index1)"></u-tag>
					</view>
					<view class="u-page__tag-item">
						<u-tag text="添加" size="mini" icon="plus" plain @click="addTag()"></u-tag>
					</view>
				</view>
			</view>
			<view class="chat_text">
				<view class="text_cont">
					<text class="text_r">知识库</text>
				</view>
				<view class="img_text">在这里上传您的文档或网址，数字分身将会学习您提供的知识并用于回复问题;</view>
				<!-- <u-textarea v-model="zs_value" placeholder="这里的内容,仅供数字分身使用,分身将有限使用这里的知识回答问题,您填写的越丰富,分身就越智能"
					maxlength="-1"></u-textarea> -->
				<view class="chat_cont">
					<view class="cont_li">
						<view class="top">
							<view style="display: flex;">
								<view class="txt" style="margin-right: 15rpx;">文档库</view>
							</view>
						</view>
						<view class="up_fiel" @click="uploadFile">
							<img class="up_pic" :src="up_pic" mode="aspectFit" />
							<view class="up_txt">点击上传</view>
						</view>
						<view class="img_text">文件资料上传可包含docx、pdf、xlsx、ppt、txt、md文件</view>
					</view>
					<view class="headline" v-if="docList.length>0">已上传文档</view>
					<view>
						<scroll-view class="list_ul" scroll-y="true" v-if="docList.length>0">
							<view class="ul_style" v-for="item,index in docList" :key="index">
								<view class="li_style">
									<view class="ul_right">
										<view class="li_top">
											<text class="top_l">{{item.file_title}}</text>
										</view>
										<view class="li_btn">
											<view class="btn_l">描述</view>
											<view class="btn_r">{{item.file_desc}}</view>
										</view>

										<view class="li_btn">
											<view class="btn_l">类型</view>
											<view class="btn_r">{{item.file_type_name}}</view>
										</view>
										<view class="li_btn">
											<view class="btn_l">使用次数</view>
											<view class="btn_r">{{item.times_used}}次</view>
										</view>
										<!-- <view class="li_btn">
													<view class="btn_l">上传时间</view>
													<view class="btn_r">2023-08-31 10:20:21</view>
												</view> -->
										<view class="li_edit">
											<view class="edit_l" @click="delFile(item)">删除</view>
											<view class="edit_r" @click="showChange(item)">编辑</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view class="chat_cont">
					<view class="cont_li">
						<view class="top">
							<view style="display: flex;">
								<view class="txt" style="margin-right: 15rpx;">网址库</view>
								<!-- <u-icon name="arrow-up" color="#000" size="28"></u-icon> -->
							</view>
						</view>
						<view class="txt" style="margin-right: 15rpx;font-size: 26rpx;">导入网址 </view>
						<view style="display:flex;height:60rpx;margin-top:14rpx;">
							<u--input placeholder="请输入您的网址" border="surround" maxlength="30"
								v-model="group_url"></u--input>
							<view class="edit_r" style="margin-left: 32rpx;" @click="addUrl(group_url)">添加</view>
						</view>
					</view>
					<view class="headline" v-if="urlList.length>0">已导入网址</view>

					<view>
						<scroll-view class="list_ul" scroll-y="true" v-if="urlList.length>0">
							<view class="ul_style" v-for="item,index in urlList" :key="index">
								<view class="li_style">
									<view class="ul_right">
										<view class="li_top">
											<text class="top_l">{{item.file_title}}</text>
										</view>
										<view class="li_btn">
											<view class="btn_l">网址</view>
											<view class="btn_r">{{item.url}}</view>
										</view>

										<view class="li_btn">
											<view class="btn_l">类型</view>
											<view class="btn_r">{{item.file_type_name}}</view>
										</view>
										<view class="li_btn">
											<view class="btn_l">使用次数</view>
											<view class="btn_r">{{item.times_used}}次</view>
										</view>
										<!-- <view class="li_btn">
									<view class="btn_l">上传时间</view>
									<view class="btn_r">2023-08-31 10:20:21</view>
								</view> -->
										<view class="li_edit">
											<view class="edit_l" @click="delFile(item)">删除</view>
											<view class="edit_r" @click="showChange(item)">编辑</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>

			</view>

		</view>
		<!-- 公司信息 -->
		<view class="company">
			<!-- 标题 -->
			<view class="company-title">
				<text>提示：如果是设定为工作分身，请完善以下信息</text>
				<!-- <text>保存</text> -->
			</view>
			<!-- 主内容 -->
			<view class="company-content">
				<view class="company-box">
					<view class="company_left">公司名称</view>
					<view class="company_right">
						<u--input placeholder="请输入分身的公司名称" border="surround" maxlength="30"
							v-model="company_name"></u--input>
					</view>
				</view>
				<view class="company-box">
					<view class="company_left">职位</view>
					<view class="company_right">
						<u--input placeholder="请输入分身的职位" border="surround" maxlength="30" v-model="job"></u--input>
					</view>
				</view>
				<view class="company-box">
					<view class="company_left">公司产品</view>
					<view class="company_right">
						<u--input placeholder="请输入分身要介绍的产品信息" border="surround" maxlength="30"
							v-model="product"></u--input>
					</view>
				</view>
				<view style="color:red; font-size: 26rpx;">若有多个产品请用英文逗号隔开</view>
			</view>
		</view>
		<!-- 确定按钮 -->
		<view class="submit" @click="submit()">保存全部</view>

		<!-- 添加标签 -->
		<u-modal :show="tagShow" @cancel="closeTag" confirmText="添加" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="confirmTag">
			<view class="key_cont" style="">
				<view class="title">添加标签</view>
				<u-input :customStyle='{"padding":"8px", "width":"100%"}' inputAlign="center" v-model="tagName"
					maxlength="10" aceholder="请输入标签" type="text"></u-input>
			</view>
		</u-modal>
		<u-popup :show="popShow" @close="popShow=false" mode="center">
			<view style="padding: 60rpx 40rpx;">
				<view style="display: flex;margin-bottom: 20rpx;">
					<view class="name">名称：</view><input type="text" placeholder="请输入名称"
						v-model="file_title" />
				</view>
		
				<view style="display: flex;margin-bottom: 20rpx;">
					<view class="name ">描述：</view><input type="text" placeholder="请输入描述" v-model="file_desc" />
				</view>
				<view class="li_edit" style="justify-content: center;" @click="popShow=false">
					<view class="edit_l">取消</view>
					<view class="edit_r" @click="popSubmit">确认</view>
				</view>
			</view>
		
		</u-popup>
	</view>
</template>

<script>
	import {
		getSpeechVoice
	} from '@/apis/user.js'
	import {
		editModel,
		getBeings,
		putBeings,
		delBeings
	} from '@/apis/home.js'

	export default {
		data() {
			return {
				file_title:'',
				file_desc:'',
				group_url: '',
				file_list: [],
				code_type: 1,
				urlList: [],
				up_pic: global.baseImg + '/xcx/com/message_center/upload.png',
				docList: [],
				share_list: [{
						name: '数字分身二维码',
						disabled: false,
					},
					{
						name: '微信二维码',
						disabled: false,
					},
					{
						name: '微信群二维码',
						disabled: false,
					}
				],
				share_value: '数字分身二维码',

				// 注意事项数据
				tipsData: [{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320021.png',
						text: '光线充足',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320022.png',
						text: '周围安静',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320025.png',
						text: '面部无遮挡',
					},
					{
						img: 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/Frame 427320023.png',
						text: '声音清晰',
					},
				],

				tagList: [],
				tagShow: false,
				tagName: '',

				//男生选择器
				boyValue: '选择男声',
				boyIndex: '',
				boyEngine: '',
				boyUrl: '',
				boyCode: '',
				boyShow: false,
				boyList: [
					[{
						'voice_name': '男声'
					}, {
						'voice_name': '女声'
					}]
				],
				boyListData: [],
				image: "",

				user_name: '',
				user_type: '',
				user_phone: '',
				wxImg: '',
				qsImg: '',
				user_address: '',
				share_desc: '',
				greeting: '',
				user_greet: '',
				zs_value: '',
				company_name: '',
				job: '',
				product: '',

				innerAudioContext: null,
				playShow: false,
				picImg: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',

				info: '',
				editData:{},
				popShow:false,
				add_urls:[],
				add_docs:[]


			}
		},
		onLoad(option) {
			if (option.info) {
				this.info = JSON.parse(option.info)
				console.log(this.info, 8879)
				this.user_name = this.info.model_name;
				this.image = this.info.face_image
				this.boyValue = this.info.audio_name
				this.boyIndex = this.info.audio_id
				this.boyEngine = this.info.engine_code
				this.boyUrl = this.info.audio_url
				this.boyCode = this.info.audio_code
				this.user_type = this.info.model_type
				this.user_phone = this.info.user_mobile
				this.wxImg = this.info.wechat_code
				this.qsImg = this.info.group_code
				this.user_address = this.info.model_website
				this.share_desc = this.info.share_desc
				this.greeting = this.info.model_greetings
				this.user_greet = this.info.model_function
				this.zs_value = this.info.model_kb
				this.company_name = this.info.model_company_name
				this.job = this.info.model_position
				this.tagList = this.info.tags
				this.product = this.info.model_company_prod
				// if(this.info.model_company_prod.length > 0) {
				// 	this.product = this.info.model_company_prod.join(',')
				// } else { 
				// 	this.product = ''
				// }
			}

			//语音播放初始化
			this.init()
			this.getBeings()
		},
		onShow() {
			this.getmanVoice()
		},
		options: {
			styleIsolation: 'shared'
		},
		methods: {
			popSubmit(){
				this.popShow=false
				this.editData.file_desc=this.file_desc
				this.editData.file_title=this.file_title
				this.editFile()
			},
			getBeings() {
				getBeings({
					model_id: this.info.model_id
				}).then(res => {
					if (res.code == 20000) {
						this.docList = res.data.filter(item => item.file_type == 1)
						this.urlList = res.data.filter(item => item.file_type == 2)
						console.log(res, 1703);
					} else {
						this.$api.msg(res.msg)
					}
				}).catch('获取文件数据失败')
			},
			showChange(item){
				console.log(item)
				this.popShow = true
				this.file_desc=item.file_desc
				this.file_title=item.file_title
				this.editData = {
					"url": item.url,
					"file_title": item.file_title,
					"file_desc":item.file_desc,
					"times_used": item.times_used,
					"file_type": item.file_type,
					"file_type_name": item.file_type_name,
					'file_code':item.file_code
				}
				
			},
			editFile() {
				if (this.editData.file_code) {
					putBeings(this.editData).then(res => {
						if (res.code == 20000) {
							this.$api.msg('修改成功')
							this.getBeings()
							this.$forceUpdate()
						} else {
							this.$api.msg(res.msg)
						}
					}).catch(err => this.$api.msg('修改失败'))
				} else {
					if (this.editData.file_type == 1) {
						const index = this.docList.findIndex(v => v.url == this.editData.url)
						if (index > -1) {
							this.docList[index]=this.editData
						}
					} else {
						const index = this.urlList.findIndex(v => v.url == this.editData.url)
						if (index > -1) {
							this.urlList[index]=this.editData
						}
					}
				}
			},
			delFile(item) {
				console.log(item,920);
				const that = this
				uni.showModal({
					content: '确认删除吗？',
					success(res) {
						if (res.confirm) {
							if (item.file_code) {
								delBeings(item.file_code).then(res => {
									if (res.code == 20000) {
										that.$api.msg('删除成功')
										that.getBeings()
										that.$forceUpdate()
									} else {
										that.$api.msg(res.msg)
									}
								}).catch(err => that.$api.msg('删除失败'))
							} else {
								if (item.file_type == 1) {
									const index = that.docList.findIndex(v => v.url == item.url)
									if (index > -1) {
										that.docList.splice(index, 1);
									}
								} else {
									const index = that.urlList.findIndex(v => v.url == item.url)
									if (index > -1) {
										that.urlList.splice(index, 1);
									}
								}
							}
						}
					}
				})

			},
			// 导入网址
			addUrl(url) {
			  this.add_urls.push({
					"url": url,
					"file_title": url,
					"file_desc": "",
					"file_type": 2,
					"file_type_name": "url",
					'times_used':'0',
					'file_code':''
				})
				
				uni.setStorageSync('add_urls',this.add_urls)
				this.urlList.push(this.add_urls)
				this.group_url = ''
			},
			// 上传文档
			uploadFile() {
				let that = this;
				wx.chooseMessageFile({
					count: 9,
					type: 'file',
					extension: ['docx', 'pdf', 'xlsx', 'ppt', 'txt', 'md'],
					success(res) {
						// tempFilePath可以作为img标签的src属性显示图片
						// console.log(res,7458)
						const tempFilePaths = res.tempFiles[0].path
						const image_name = res.tempFiles[0].name
						// console.log(image_name,774)
						uni.showLoading({
							title: '上传中'
						});
						uni.uploadFile({
							url: global.loginUrl + '/api/user/oss_upload',
							filePath: tempFilePaths,
							name: 'image',
							formData: {
								"image": tempFilePaths,
								"image_name": image_name,
								"oss_dir": 'static',
								"cate": 'create_character',

							},
							success: (uploadFileRes) => {
								let imgData = JSON.parse(uploadFileRes.data)
								console.log(imgData, 1258)

								if (imgData.code == 20000) {
									let name = imgData.data.name
									let url = imgData.data.new_url
									let type = url.substring(url.lastIndexOf('.') + 1)
									let arr = {
										file_title: name,
										url: url,
										file_type: 1,
										file_desc: '',
										times_used: '0',
										file_type_name: type,
										file_code:''
									}
									that.add_docs.push(arr)
									uni.setStorageSync('add_docs',that.add_docs)
									that.docList.push(arr)
									uni.hideLoading()
								} else {
									that.$api.msg(imgData.msg)
									uni.hideLoading()
								}
							}
						});
					}
				})
			},

			shareGroupChange(e) {
				console.log(e, 927);
				if (e == '数字分身二维码') {
					this.code_type = 1
				} else if (e == '微信二维码') {
					this.code_type = 2
				} else {
					this.code_type = 3
				}
			},

			init() {
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});

				this.innerAudioContext.onEnded(() => {

					console.log('播放停止了')
					this.innerAudioContext.stop()
					this.playShow = false
				})
			},
			play(url) {
				this.playShow = true;
				this.innerAudioContext.src = global.baseImg + '/' + url;
				this.innerAudioContext.play();
			},

			//原生停止
			stop() {
				this.innerAudioContext.stop();
				this.playShow = false
				// this.isPlay = false
				// console.log('停止播放')
			},

			// 获取男生音色
			getmanVoice(code) {
				let val = {
					'engine_code': '1000010005',
					'voice_type': 1,
					'gender': 1
				}
				this.boyList = [
					[{
						'voice_name': '男声'
					}, {
						'voice_name': '女声'
					}]
				]
				this.boyListData = []
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						this.boyList.push(res.data)
						this.boyListData.push(res.data)
						this.getwomanVoice()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},

			// 获取女生音色
			getwomanVoice(code) {
				let val = {
					'engine_code': '1000010005',
					'voice_type': 1,
					'gender': 2
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						this.boyListData.push(res.data)
						this.getmyVoice()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},

			// 获取我的音色
			getmyVoice(code) {
				let val = {
					'engine_code': '1000010006',
					'voice_type': 2,
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						if (res.data) {
							this.boyList[0].unshift({
								'voice_name': '我的声音'
							})
							this.boyListData.unshift(res.data)
							this.boyList.pop()
							this.boyList.push(res.data)
							// this.boyValue = '选择我的声音'
						}
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},

			// 跳转我的页面
			toPage() {
				uni.navigateTo({
					url: '/childCont/digital/my'
				})
			},

			openSelect() {
				this.boyShow = true
			},
			submit() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let product_arr = []
				if (this.product != '') {
					product_arr = this.product.split(',')
				} else {
					this.product = []
				}
				this.file_list = [...this.docList, ...this.urlList]
				let val = {
					'user_id': userInfo.user_id,
					'token': userInfo.token,
					'model_id': this.info.model_id,
					'face_image': this.image,
					'audio_id': this.boyIndex,
					'audio_name': this.boyValue,
					'audio_url': this.boyUrl,
					'audio_code': this.boyCode,
					'engine_code': this.boyEngine,
					'base_model_id': this.info.base_model_id,
					'base_model_url': this.info.base_model_url,
					'base_model_url_speak': this.info.base_model_url_speak,
					'similarity': this.info.similarity,
					'model_name': this.user_name,
					'user_mobile': this.user_phone,
					'wechat_code': this.wxImg,
					'group_code': this.qsImg,
					'share_desc': this.share_desc,
					'model_greetings': this.greeting,
					'model_kb': this.zs_value,
					'model_type': this.user_type,
					'model_function': this.user_greet,
					'model_company_name': this.company_name,
					'model_position': this.job,
					'model_company_prod': product_arr,
					'tags': this.tagList,
					'model_website': this.user_address,
					'code_type': this.code_type,
					'file_list': this.file_list
				}
				uni.showLoading({
					title: '上传中，请稍后',
					mask: true
				});
				editModel(val).then(res => {
					if (res.code == 20000) {
						//成功跳转中转页面
						uni.hideLoading()
						uni.navigateTo({
							url: '/childCont/digital/status_digital?edit=2'
						})
					} else {
						uni.hideLoading()
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					uni.hideLoading()
					this.$api.msg('修改失败！')
				})

			},
			// 上传图片
			uploadImg(tip) {
				let that = this;
				uni.chooseMedia({
					count: 1,
					mediaType: ['image'],
					sourceType: ['album', 'camera'],
					maxDuration: 30,
					camera: 'back',
					success(res) {
						uni.showLoading({
							title: '上传中'
						});
						console.log(res.tempFiles)
						const tempFilePaths = res.tempFiles[0].tempFilePath;
						const fileExtension = tempFilePaths.substring(tempFilePaths.lastIndexOf('.') + 1)
						uni.uploadFile({
							url: global.loginUrl + '/api/user/oss_upload',
							filePath: tempFilePaths,
							name: 'image',
							formData: {
								"image": tempFilePaths,
								"oss_dir": 'static',
								"cate": 'problem_picture'
							},
							success: (uploadFileRes) => {
								let imgData = JSON.parse(uploadFileRes.data)
								if (imgData.code == 20000) {
									let url = imgData.data.new_url
									if (tip == 1) {
										that.wxImg = url
									} else if (tip == 2) {
										that.qsImg = url
									} else {
										that.image = url;
									}
								}
								uni.hideLoading()
							},
						});
					}
				})
			},

			myConfirm(e) {
				this.myShow = false
			},
			closeTag() {
				this.tagName = ''
				this.tagShow = false
			},
			//删除标签
			delTag(index) {
				this.tagList.splice(index, 1)
				this.$forceUpdate()
			},
			addTag(index) {
				this.tagIndex = index;
				this.tagShow = true
			},
			confirmTag() {
				if (this.tagName.trim() == '') {
					this.$api.msg('请输入标签名称')
					return
				}

				let data = this.tagName

				this.tagList.push(data)
				this.tagShow = false;
				this.tagName = '';
				console.log(this.tagList, 666)
			},

			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},

			//男生选择
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.boyListData[index])
				}
			},

			boySubmit(e) {
				console.log(e, 8854)
				this.boyIndex = e.value[1].voice_code;
				this.boyEngine = e.value[1].engine_code;
				this.boyUrl = e.value[1].speech_url;
				this.boyValue = e.value[1].voice_name;
				this.boyCode = e.value[1].voice;
				this.boyShow = false;
				console.log(this.boyUrl, 3325)
			},

			toClone() {
				let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
				if (memberInfo.is_real_name == 1) {
					this.toH5Link()
					return
				}
				uni.navigateTo({
					url: '/childCont/clone/voice_clone'
				})
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
									let href = encodeURIComponent(res.data.openlink)
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
										}
									}).catch(err => {
										this.$api.msg('跳转失败')
									})

								}
							}).catch(err => {
								this.$api.msg('跳转失败')
							})
						}
					}
				})


			},
		}
	}
</script>

<style scoped lang="less">
	.qs_img {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		// margin: 20upx;
		flex-wrap: wrap;

		// border-top: 1upx solid #E8E9EB;
		.up_img {
			width: 120rpx;
			height: 120rpx;
			padding: 10rpx;
		}

		.del_img {
			position: absolute;
			top: 0;
			right: 0;
			width: 36upx;
			height: 36upx;
		}
	}

	.img_text {
		color: #9A9A9A;
		font-size: 24upx;
		font-style: normal;
		font-weight: 400;
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

		.text_cont {
			display: flex;
			align-items: center;
			margin-bottom: 10upx;
			width: 100%;

			.text_l {
				color: #FF0101;
				font-size: 22upx;
				font-style: normal;
				font-weight: 400;
				line-height: 26upx;
				margin-right: 5upx;
			}
		}

		.text_conts {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 10upx;
			width: 100%;


		}

		.text_r {
			color: #000;
			text-align: center;
			font-size: 28upx;
			font-style: normal;
			font-weight: 530;
			line-height: 26upx;
			margin-bottom: 10rpx;
		}

		.right_img {
			width: 24upx;
			height: 24upx;
			margin-right: 25upx;
		}

		.lists {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 20upx;
			background: #fff;
			border-radius: 8upx;
			border: 0.5px solid #dadbde;
			// margin-bottom: 25upx;

			.txt {
				font-size: 26upx;
				margin-left: 20upx;
				flex: 1;
			}

		}
	}

	.main {
		width: 100%;
		padding: 0px 64rpx;
		padding-top: 40rpx;
		box-sizing: border-box;
		position: relative;

		.my {
			width: 70rpx;
			height: 70rpx;
			text-align: center;
			border-radius: 50%;
			background: rgb(239, 239, 239);
			color: rgb(154, 154, 154);
			font-size: 26rpx;
			padding: 10rpx;
			position: absolute;
			top: 10rpx;
			left: 20rpx;
		}

		.line-title {
			width: 3px;
			height: 18px;
			background: #1F64FF;
			margin-right: 18rpx;
		}

		.main-upload {
			width: 450rpx;
			border-radius: 8px;
			background: #F6F8FB;
			position: relative;
			left: 50%;
			transform: translate(-50%);

			.main-upload-box {
				width: 450rpx;
				height: 450rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border: 1px dashed #D1D3D6;

				image {
					width: 48rpx;
					height: 48rpx;
				}

				text {
					color: #666;
					font-size: 14px;
					font-style: normal;
					font-weight: 400;
					line-height: 150%;
					margin-top: 18rpx;
					/* 21px */
				}
			}

			.main-upload-btn {
				width: 100%;
				padding: 10rpx;
				box-sizing: border-box;
				text-align: center;
				border-radius: 8rpx;
				border: 1px solid rgb(31, 100, 255);
				margin-top: 30rpx;
				margin-bottom: 16rpx;
				color: rgb(31, 100, 255);
			}

			.main-upload-tips {
				width: 100%;
				color: #999;
				font-size: 26rpx;
			}
		}

		.tips {
			margin-top: 40rpx;
			width: 100%;

			.tips-top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.line {
					width: 37%;
					height: 1px;
					background: linear-gradient(270deg, #D9D9D9 108.88%, rgba(217, 217, 217, 0.00) 0%);
				}

				text {
					color: #2D2D2D;
					font-size: 13px;
					font-style: normal;
					font-weight: 500;
					line-height: 150%;
					/* 19.5px */
				}
			}

			.tips_copy {
				width: calc(100% - 20upx);
				border-radius: 8upx;
				border: 1upx solid #999;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20upx 10upx;
				margin-top: 20upx;

				.copy_l {
					display: flex;
					align-items: center;

					.copy_text {
						font-size: 26upx;
						color: #333;
						// padding-left: 10upx;
					}
				}

				.copy_r {
					font-size: 28upx;
					color: #f56c6c;
				}
			}

			.tips-content {
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 30rpx;

				.tips-content-box {
					display: flex;
					flex-direction: column;
					margin-top: 24rpx;

					image {
						width: 62rpx;
						height: 62rpx;
						margin-bottom: 24rpx;
						position: relative;
						left: 50%;
						transform: translate(-50%);
					}

					text {
						color: #000;
						font-size: 12px;
						font-style: normal;
						font-weight: 400;
						line-height: 150%;
						/* 18px */
					}
				}
			}
		}

		.audio {
			width: 100%;
			margin-top: 60rpx;

			.audio-title {
				display: flex;
				justify-content: space-between;
				align-items: center;

				>view:first-child {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				>view:last-child {
					color: #1F64FF;
				}
			}

			.audio-check {
				width: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.audio-check-box {
					width: 100%;

					>view {
						padding: 10rpx 20rpx;
						border-radius: 16rpx;
						border: 1px solid #999;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 35rpx;
						margin-bottom: 20rpx;
					}
				}

				>view:nth-child(even) {
					display: flex;
					justify-content: flex-end;
				}

			}
		}

		.tag {
			width: 100%;
			padding: 20upx 0;
			margin-top: 30rpx;

			.text_cont {
				display: flex;
				align-items: center;
				margin-bottom: 10upx;
				width: 100%;

				.text_l {
					color: #FF0101;
					font-size: 22upx;
					font-style: normal;
					font-weight: 400;
					line-height: 26upx;
					margin-right: 5upx;
				}
			}

			.text_r {
				color: #333;
				text-align: center;
				font-size: 24upx;
				font-style: normal;
				font-weight: 530;
				line-height: 26upx;
			}
		}

		.surround {
			border-radius: 16rx;
			border: 2rpx solid #D7D9DF;
			padding: 24rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: baseline;
		}

		.u-page__tag-item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 0 10upx 0 0;
		}

		.form {
			width: 100%;

			.form-tips {
				color: #999;
				margin-bottom: 16rpx;
			}
		}

		.company {
			width: 100%;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 8rpx;
			background: rgb(239, 239, 239);

			.company-title {
				display: flex;
				justify-content: space-between;
				align-items: center;

				text:first-child {
					font-size: 22rpx;
				}

				text:last-child {
					padding: 5rpx 10rpx;
					border: 1px solid #1F64FF;
					color: #1F64FF;
					border-radius: 8rpx;
				}
			}

			.company-content {
				width: 100%;
				margin-top: 30rpx;

				.company-box {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 20rpx;

					.company_left {
						width: 25%;
						text-align: right;
					}

					.company_right {
						width: 70%;
					}
				}

				.company-box:last-child {
					margin: 0px;
				}
			}
		}

		.submit {
			margin: 60rpx 0rpx;
			width: 90%;
			padding: 15rpx 0rpx;
			box-sizing: border-box;
			position: relative;
			left: 50%;
			transform: translate(-50%);
			background: #1F64FF;
			color: #FFF;
			text-align: center;
			border-radius: 12rpx;
		}
	}

	.pop_voice {
		padding: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.pop_img {
			width: 300upx;
			height: 300upx;
		}

		.pop_stop {
			color: #fff;
			font-size: 30upx;
			font-weight: 400;
			line-height: 150%;
			width: 70%;
			background: #1F64FF;
			padding: 15upx 0upx;
			border-radius: 8upx;
			margin-top: 30upx;
			text-align: center;
		}
	}

	.chat_cont {
		padding-bottom: 30upx;

		.cont_li {
			padding: 25upx;
			background: #fff;
			border-radius: 15upx;
		}
	}

	.top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 24rpx;

		.tag {
			color: #1F64FF;
			font-size: 26rpx;
			font-weight: 400;
		}
	}

	.txt {
		color: #202123;
		font-size: 28rpx;
		font-weight: 500;
	}

	.up_fiel {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 10rpx 32rpx;
		gap: 16rpx;
		border-radius: 4rpx;
		background: #1F64FF;
		width: 37%;
		margin-bottom: 16rpx;

		// border-top: 1upx solid #E8E9EB;
		.up_txt {
			color: #FFF;
			font-size: 28rpx;
			font-weight: 400;
		}
	}

	.img_text {
		color: #9A9A9A;
		font-size: 24upx;
		font-style: normal;
		font-weight: 400;
	}

	.headline {
		color: #000;
		font-size: 32rpx;
		font-weight: 500;
		margin: 40rpx 0 24rpx 0;
	}

	.list_ul {
		// padding: 15upx 10upx;
		margin-bottom: 30upx;
		width: calc(100%);
	}

	.ul_style {
		display: flex;
		flex-direction: column;
		// padding: 15upx 20upx;
	}

	.li_style {
		display: flex;
		align-items: center;
		box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.14);
		border-radius: 10upx;
		padding: 25upx;
		width: calc(100% - 50upx);
		background: #fff;
		margin-top: 24rpx;

		.ul_right {
			width: 100%;
		}

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
		width: 80%;
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
		height: 100upx;
		line-height: 100upx;
		width: 100vw;
		color: #C0C4CC;
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
			background: #1F64FF;
			color: #fff;
			text-align: center;
			font-size: 28upx;
			font-style: normal;
			font-weight: 600;
		}
	}

	.up_pic {
		width: 28rpx;
		height: 28rpx;
	}

	.shareG /deep/.u-radio-group {
		display: block;
	}

	.shareG /deep/.u-radio {
		font-size: 25rpx;
		margin-bottom: 7rpx;
	}
</style>