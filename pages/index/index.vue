<template>
	<view :class="[selectShow ? 'home' : '']" id="pag_top" style="background:#F6F8FB;">

		<view class="head_index">
			<view class="head_cont">
				<Title :title='nav_title' />
			</view>
		</view>
		<view class="container-fill">
			<view class="scroll-fullpage" @touchstart="scrollTouchstart" @touchmove="scrollTouchmove"
				@touchend="scrollTouchend" :style="{transform:`translateY(-${scrollindex*100}%)`}">
				<!-- 数字分身页 -->
				<view :style='{height:windowHeight+"px",marginTop: keyHeight +"px"}' class="digital a1">

					<!-- 默认模型展示 -->
					<view v-if="isSpeak == 1">
						<image :src="nospeak" class="video_w" :style="{'z-index': img_index}" mode="aspectFill"></image>
						<video :src="nospeak1" id="noVideo" loop :controls="true" :show-fullscreen-btn="false"
							:show-center-play-btn="false" objectFit='cover' http-cache class="video_w"
							:style="{'z-index': no_index}" @click="playVideo" @play="toPlayN"></video>
						<video :src="speak1" id="myVideo" :controls="false" :show-fullscreen-btn="false"
							:show-center-play-btn="false" objectFit='cover' http-cache class="video_w"
							:style="{'z-index': y_index}" @click="playOne" @ended="oneEnd" @play="toPlayY"></video>
					</view>

					<!-- 自己模型展示 -->
					<view v-if="isSpeak == 2">
						<image :src="getImgUrl(infoSpeak.out_video_cover)" class="video_w"
							:style="{'z-index': img_index}" mode="aspectFill"></image>
						<video :src="getImgUrl(infoSpeak.out_video)" id="noVideo" loop :controls="false"
							:show-fullscreen-btn="false" objectFit='cover' http-cache :show-center-play-btn="false"
							class="video_w" :style="{'z-index': no_index}" @click="playSpeak" @play="toSpeakN"></video>
						<video :src="getImgUrl(infoSpeak.out_video_speak)" loop id="myVideo" :controls="false"
							:show-fullscreen-btn="false" objectFit='cover' http-cache :show-center-play-btn="false"
							class="video_w" :style="{'z-index': y_index}" @click="speakOne" @play="toSpeakY"></video>
					</view>

					<!-- 顶部选项 -->
					<view class='top-nav' v-if="isSpeak == 2">

						<view v-if="infoSpeak.user_mobile" @click="toPhone(infoSpeak.user_mobile)">
							<image :src='phoneImg'></image>
							<text>电话</text>
						</view>
						<view v-if="infoSpeak.wechat_code" @click="checkInfo(1)">
							<image :src='wxImg'></image>
							<text>微信</text>
						</view>
						<view v-if="infoSpeak.group_code" @click="checkInfo(2)">
							<image :src='wxgImg'></image>
							<text>微信群</text>
						</view>
						<view v-if="infoSpeak.model_website" @click="checkInfo(3)">
							<image :src='webImg'></image>
							<text>网址</text>
						</view>
						<view @click="message()" v-if="temp_id">
							<u-icon name="chat" size="21" color="#FFF"></u-icon>
							<text>留言</text>
						</view>
					</view>
					<!-- 右边菜单 -->
					<view class='right-nav'>
						<!-- <view v-for='(item,index) in digital_right_nav' @click="toDigital(index)" :key='item.text'>
						<image :src='item.img'></image>
						<text>{{item.text}}</text>
					</view> -->
						<view @click="toDigital(0)">
							<image :src='tabImg5'></image>
							<text>创建形象</text>
						</view>
						<view @click="toDigital(1)">
							<image :src='tabImg1'></image>
							<text>我的分身</text>
						</view>
						<view @click="toDigital(2)" v-if="infoSpeak != ''">
							<image :src='tabImg2'></image>
							<text>去对话</text>
						</view>
						<view @click="toDigital(3)" v-if="infoSpeak != '' && !temp_id">
							<image :src='tabImg3'></image>
							<text>分享</text>
						</view>
						<view @click="toDigital(4)" v-if="infoSpeak != '' && !temp_id">
							<image :src='tabImg4'></image>
							<text>记录</text>
						</view>

					</view>
					<!-- 底部滑动提示 -->
					<view class='bottom-tips'>
						<text>了解更多AI能力</text>
						<image src="https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/xcx/com/message_center/更多.png"
							mode=""></image>
					</view>
				</view>
				<!-- 留言 -->
				<u-popup :show="messageShow" mode="center" :round="8" length="auto">
					<view class="message-box">
						<view class="message-close" @click="messageShow = false">
							<u-icon name="close" size="21"></u-icon>
						</view>
						<view class="message-title">留言</view>
						<view class="message-content">
							<u-textarea v-model="messageValue" placeholder="请输入你想留言的内容" maxlength="-1"></u-textarea>
							<view class="phone_title">联系方式</view>
							<u--input placeholder="请输入手机号码" border="surround" maxlength="30"
								v-model="messagePhone"></u--input>
							<view class="message-submit" @click="messageSubmit">提交</view>
						</view>
					</view>
				</u-popup>

				<!-- 顶部栏提示内容-->
				<u-popup :show="tipShow" mode="center" :round="8" length="auto">
					<view class="message-box">
						<view class="message-close" @click="tipShow = false">
							<u-icon name="close" size="21"></u-icon>
						</view>
						<!-- <view class="message-title">留言</view> -->
						<view class="message-content" v-if="top_tip == 1">
							<image :src="getImgUrl(infoSpeak.wechat_code)" mode="aspectFit" style="width: 100%"></image>
						</view>

						<view class="message-content" v-if="top_tip == 2">
							<image :src="getImgUrl(infoSpeak.group_code)" mode="aspectFit" style="width: 100%"></image>
						</view>
						<view class="message-content" v-if="top_tip == 3">
							<view style="margin-top: 40rpx; text-align: center;">{{ infoSpeak.model_website }}</view>
							<view class="message-submit" @click="copyWebsite(infoSpeak.model_website)">复制</view>
						</view>
					</view>
				</u-popup>
				<!-- 主页面 -->
				<view class="b2" id="mainPage">
					<scroll-view scroll-y="true" style='height: 100%;' @scroll="scrollchange">
						<view class="back_top" :style="{marginTop: keyHeight +'px'}">
							<view class="back_cont" :style="backImg">
							</view>
							<view class="web">电脑端访问ai.umi6.com 效率更高</view>
							<!-- 登录显示 -->
							<view class="manage_info" v-if="isLogin">
								<view class="head_card">
									<image :src="log" mode="aspectFit" class="head_log"></image>
									<view class="head_r">
										<view class="head_rup">
											<view class="rup_title">
												<text>AI</text>
												<text style="color: #333;font-size: 32rpx;">能力</text>
											</view>
											<view class="head_rb">一站式链接优质AIGC大模型</view>
										</view>
										<view class="rup_text" @click="toCoop"
											:style='{backgroundImage:`url(${headCardBgc})`,backgroundSize: "cover"}'>
											<view>商务合作</view>
											<view style="margin-top:6rpx;">
												<u-icon name="arrow-right" color="#666666" size="12"></u-icon>
											</view>
										</view>
									</view>
								</view>
							</view>

						</view>

						<view class="notice" v-if="messageList.length > 0">
							<u-notice-bar :text="messageList" color="#1E211F" bgColor="#EBF1FF" mode="closable"
								direction="column" @click="toNotice"></u-notice-bar>
						</view>
						<scroll-view scroll-y="true">
							<view style="padding: 20rpx;">
								<view class="chief">
									<view class="chief_item" @click="toChat(1)"
										:style="{backgroundImage:`url(${chiefImg1})`,backgroundSize:'cover'}">
										<view style='margin-left: 24rpx;'>
											<view class="chief_title">问一问</view>
											<view class="chief_text">我将为你解答</view>
										</view>
									</view>
									<view class="chief_item" @click="toPainting"
										:style="{backgroundImage:`url(${chiefImg2})`,backgroundSize:'cover'}">
										<view style='margin-left: 24rpx;'>
											<view class="chief_title">画一画</view>
											<view class="chief_text">关键词生图</view>
										</view>
									</view>
									<view class="chief_item" @click='moreChange'
										:style="{backgroundImage:`url(${chiefImg3})`,backgroundSize:'cover'}">
										<view style='margin-left: 24rpx;'>
											<view class="chief_title">AI资讯</view>
											<view class="chief_text">精选AI资讯</view>
										</view>
									</view>
								</view>
							</view>
							<!-- 全局搜索 -->
							<view class="prod" style="position: relative;">
								<u-search placeholder="请输入要查找的功能" v-model.trim="searchKeyword" shape="square"
									:showAction='false' bgColor='#fff' @change="searchTitle"></u-search>
								<view class="search_pop" v-if="searchKeyword!=''">
									<scroll-view scroll-y="true" show-scrollbar="true">
										<view style="height:360rpx ;">
											<view class="search_item" @click="toFeature(item)"
												v-for="item,index in filterList" :key="index"
												v-if="filterList.length!=0">
												{{item}}
											</view>
										</view>
									</scroll-view>
									<view class="search_item" v-if="filterList.length==0">暂无数据</view>
								</view>
							</view>

							<view class="cont_chat">
								<view class="cont_ul">
									<view style="padding: 0 32rpx;">
										<view class="information_header">
											<view class="left">
												优选能力
											</view>
											<view class="right">
												<text @click='toMoreAbility()'>更多</text>
												<u-icon size="20upx" name="arrow-right"></u-icon>
											</view>
										</view>
									</view>
									<view class="user_icon">
										<view class="icon_list" @click="toModel">
											<image class="icon_img" :src='drawImg7' />
											<text class="icon_title">多模型对话</text>
										</view>
										<view class="icon_list" @click="toIntercom()">
											<image class="icon_img" :src='drawImg6' />
											<text class="icon_title">语音对讲</text>
										</view>
										<!-- <view class="icon_list" @click="toSpeech">
										<image class="icon_img" :src='drawImg8' />
										<text class="icon_title">语音合成</text>
									</view> -->
										<view class="icon_list" @click="toClone">
											<image class="icon_img" :src='drawImg18' />
											<text class="icon_title">声音克隆</text>
										</view>

										<view class="icon_list" @click="toFigure">
											<image class="icon_img" :src='drawImg1' />
											<text class="icon_title">数字人</text>
										</view>
										<!-- <view class="icon_list" @click="toCamera">
										<image class="icon_img" :src='drawImg2' />
										<text class="icon_title">AI识图</text>
									</view> -->

										<view class="icon_list" @click="toRepository">
											<image class="icon_img" :src='drawImg17' />
											<text class="icon_title">AI智能体</text>
										</view>
										<view class="icon_list" @click="toDocument">
											<image class="icon_img" :src='drawImg3' />
											<text class="icon_title">文档对话</text>
										</view>
										<view class="icon_list" @click="toDiscern">
											<image class="icon_img" :src='drawImg4' />
											<text class="icon_title">看图说话</text>
										</view>
										<view class="icon_list" @click="toMerge">
											<image class="icon_img" :src='drawImg5' />
											<text class="icon_title">人像融合</text>
										</view>

									</view>

									<!-- <view class="banner" @click="myDistribution">
												<image class="banner_img" :src='bannerImg' />
											</view> -->
								</view>
							</view>



							<!-- 产品入口 -->
							<view class="prod">
								<!-- ai对话 -->
								<view class="prod_chat">
									<view class="information_header">
										<view class="left">
											对话中心
										</view>
										<view class="right">
											<text @click='toMoreChat()'>更多</text>
											<u-icon size="20upx" name="arrow-right"></u-icon>
										</view>
									</view>
									<view class="chat_cont">
										<!-- 无忧秘书 -->
										<view class="cont_li" @click="toChat">
											<view class="li_left">
												<image class="li_img" :src='wyImg' />
											</view>
											<view class="li_right">
												<text class="right_t">无忧秘书</text>
												<text class="right_b">先进AI，无限创意</text>
											</view>
										</view>
										<!-- 文心一言 -->
										<view class="cont_li" @click="goToChat(4)">
											<view class="li_left">
												<image class="li_img" :src='wenxinImg' />
											</view>
											<view class="li_right">
												<text class="right_t">文心一言</text>
												<text class="right_b">百度新一代语言大模型</text>
											</view>
										</view>
										<!-- 讯飞星火-->
										<view class="cont_li" @click="goToChat(5)">
											<view class="li_left">
												<image class="li_img" :src='xunfeiImg' />
											</view>
											<view class="li_right">
												<text class="right_t">讯飞星火</text>
												<text class="right_b">科大讯飞推出的新一代认知智能大模型</text>
											</view>
										</view>
										<!-- 通义千问-->
										<view class="cont_li" @click="goToChat(10)">
											<view class="li_left">
												<image class="li_img" :src='qianwenImg' />
											</view>
											<view class="li_right">
												<text class="right_t">通义千问</text>
												<text class="right_b">阿里巴巴集团推出的大语言模型</text>
											</view>
										</view>
										<!-- 火山云雀-->
										<view class="cont_li" @click="goToChat(1000)">
											<view class="li_left">
												<image class="li_img" :src='huoshanImg' />
											</view>
											<view class="li_right">
												<text class="right_t">火山云雀</text>
												<text class="right_b">字节旗下火山引擎推出的大型语言模型</text>
											</view>
										</view>
										<!-- 腾讯混元-->
										<view class="cont_li" @click="goToChat(1001)">
											<view class="li_left">
												<image class="li_img" :src='tenxunImg' />
											</view>
											<view class="li_right">
												<text class="right_t">腾讯混元</text>
												<text class="right_b">腾讯最新研发的大语言模型</text>
											</view>
										</view>

									</view>
								</view>

								<!-- ai绘画 -->
								<view class="prod_chat">
									<view class="information_header">
										<view class="left">
											绘画中心
										</view>
										<view class="right">
											<text @click='toMoreDraw'>更多</text>
											<u-icon size="20upx" name="arrow-right"></u-icon>
										</view>
									</view>
									<view class="chat_cont">
										<!-- 无忧秘书 -->
										<view class="cont_li" @click="toPainting">
											<view class="li_left">
												<image class="li_img" :src='wyImg' />
											</view>
											<view class="li_right">
												<text class="right_t">无忧秘书</text>
												<text class="right_b">先进AI，无限创意</text>
											</view>
										</view>
										<!-- 通义万相 -->
										<view class="cont_li" @click="goToDraw(13)">
											<view class="li_left">
												<image class="li_img" :src='qianwenImg' />
											</view>
											<view class="li_right">
												<text class="right_t">通义万相</text>
												<text class="right_b">一个不断进化的AI艺术创作大模型</text>
											</view>
										</view>
										<!-- 百度绘画-->
										<view class="cont_li" @click="goToDraw(3)">
											<view class="li_left">
												<image class="li_img" :src='wenxinImg' />
											</view>
											<view class="li_right">
												<text class="right_t">百度绘画</text>
												<text class="right_b">AI一下，文字成画将创意变成创作</text>
											</view>
										</view>
										<!-- 火山引擎-->
										<view class="cont_li" @click="goToDraw(14)">
											<view class="li_left">
												<image class="li_img" :src='huoshanImg' />
											</view>
											<view class="li_right">
												<text class="right_t">火山引擎</text>
												<text class="right_b">火山方舟推出的大模型服务，文生图</text>
											</view>
										</view>

									</view>
								</view>

								<!-- AI工具集 -->
								<view class="prod_chat">
									<view class="information_header">
										<view class="left">
											AI工具集
										</view>
										<view class="right">
											<text @click='toAssemble'>更多</text>
											<u-icon size="20upx" name="arrow-right"></u-icon>
										</view>
									</view>
									<view class="chat_cont">
										<!-- 对话模型 -->
										<view class="cont_li" @click="toMoreChat">
											<view class="li_left">
												<image class="li_img" :src='tool1' />
											</view>
											<view class="li_right">
												<text class="right_t">对话模型</text>
												<text class="right_b">多种对话模型任意选择</text>
											</view>
										</view>
										<!-- 绘画模型 -->
										<view class="cont_li" @click="toMoreDraw">
											<view class="li_left">
												<image class="li_img" :src='tool2' />
											</view>
											<view class="li_right">
												<text class="right_t">绘画模型</text>
												<text class="right_b">多种绘画模型任意选择</text>
											</view>
										</view>
										<!-- 图片处理-->
										<view class="cont_li" @click="goToMorePic">
											<view class="li_left">
												<image class="li_img" :src='chest1' />
											</view>
											<view class="li_right">
												<text class="right_t">图片处理</text>
												<text class="right_b">高效处理图片能力合集</text>
											</view>
										</view>
										<!-- 视频处理-->
										<view class="cont_li" @click="goToMoreVideo">
											<view class="li_left">
												<image class="li_img" :src='chest3' />
											</view>
											<view class="li_right">
												<text class="right_t">视频处理</text>
												<text class="right_b">高效处理视频能力合集</text>
											</view>
										</view>
										<!-- 文字识别-->
										<!-- <view class="cont_li" @click="toText">
										<view class="li_left">
											<image class="li_img" :src='zhinaoImg' />
										</view>
										<view class="li_right">
											<text class="right_t">文字识别</text>
											<text class="right_b">识别图片中的文字内容</text>
										</view>
									</view> -->
										<!-- 语音合成-->
										<view class="cont_li" @click="toSpeech">
											<view class="li_left">
												<image class="li_img" :src='tool3' />
											</view>
											<view class="li_right">
												<text class="right_t">语音合成</text>
												<text class="right_b">根据文字合成语音</text>
											</view>
										</view>
										<!-- 文档对话-->
										<view class="cont_li" @click="toDocument">
											<view class="li_left">
												<image class="li_img" :src='tool4' />
											</view>
											<view class="li_right">
												<text class="right_t">文档对话</text>
												<text class="right_b">上传文档进行文档知识对话</text>
											</view>
										</view>

									</view>
								</view>



								<!-- AI百宝箱 -->
								<!--<view class="left">
								AI百宝箱
							</view>
							<view class="right">
								<text @click='toMoreChest()'>更多</text>
								<u-icon size="20upx" name="arrow-right"></u-icon>
							</view> -->

								<!-- 视觉智能馆 -->
								<!-- <view class="left">
								AI视觉馆
							</view>
							<view class="right">
								<text @click='toVision()'>更多</text>
								<u-icon size="20upx" name="arrow-right"></u-icon>
							</view> -->




								<!-- 其他工具 -->
								<view class="prod_chat" id="chat_opa">
									<view class="information_header">
										<view class="left">
											AI超级能力
										</view>
										<view class="right">
											<text @click='toMoreTool()'>更多</text>
											<u-icon size="20upx" name="arrow-right"></u-icon>
										</view>
									</view>

									<view class="chat_cont">
										<!-- 多模型对话 -->
										<view class="cont_li" @click="toModel">
											<view class="li_left">
												<image class="li_img" :src='drawImg7' />
											</view>
											<view class="li_right">
												<text class="right_t">多模型对话</text>
												<text class="right_b">沉浸式体验群聊场景</text>
											</view>
										</view>
										<!-- 语音对讲 -->
										<view class="cont_li" @click="toIntercom">
											<view class="li_left">
												<image class="li_img" :src='drawImg6' />
											</view>
											<view class="li_right">
												<text class="right_t">语音对讲</text>
												<text class="right_b">智能语音你问我答</text>
											</view>
										</view>
										<!-- 声音克隆 -->
										<view class="cont_li" @click="toClone">
											<view class="li_left">
												<image class="li_img" :src='drawImg16' />
											</view>
											<view class="li_right">
												<text class="right_t">声音克隆</text>
												<text class="right_b">根据需求定制专属声音</text>
											</view>
										</view>
										<!-- 数字人-->
										<view class="cont_li" @click="toFigure">
											<view class="li_left">
												<image class="li_img" :src='otherImg6' />
											</view>
											<view class="li_right">
												<text class="right_t">虚拟数字人</text>
												<text class="right_b">定制属于你的专属形象</text>
											</view>
										</view>
										<!-- 音视频转文字 -->
										<view class="cont_li" @click="toVoice">
											<view class="li_left">
												<image class="li_img" :src='otherImg1' />
											</view>
											<view class="li_right">
												<text class="right_t">音视频转写</text>
												<text class="right_b">音频、视频快速转写文字</text>
											</view>
										</view>
										<!-- <view class="cont_li" @click="toRepository">
										<view class="li_left">
											<image class="li_img" :src='otherImg2' />
										</view>
										<view class="li_right">
											<text class="right_t">AI知识库</text>
											<text class="right_b">全新Al智能体玩法</text>
										</view>
									</view> -->
										<!-- 看图说话-->
										<view class="cont_li" @click="toDiscern">
											<view class="li_left">
												<image class="li_img" :src='otherImg2' />
											</view>
											<view class="li_right">
												<text class="right_t">看图说话</text>
												<text class="right_b">识别图片中的内容信息</text>
											</view>
										</view>

										<!-- 文本识别-->
										<!-- <view class="cont_li" @click="toCamera">
										<view class="li_left">
											<image class="li_img" :src='otherImg4' />
										</view>
										<view class="li_right">
											<text class="right_t">AI识图</text>
											<text class="right_b">智能识别图片中的内容</text>
										</view>
									</view> -->
										<!-- 彩超宝宝 -->
										<!-- <view class="cont_li" @click="toDoppler">
										<view class="li_left">
											<image class="li_img" :src='otherImg5' />
										</view>
										<view class="li_right">
											<text class="right_t">彩超宝宝</text>
											<text class="right_b">根据彩超图，预测宝宝未来的模样</text>
										</view>
									</view> -->




										<!-- 文档对话-->
										<!-- <view class="cont_li" @click="toDocument">
										<view class="li_left">
											<image class="li_img" :src='otherImg7' />
										</view>
										<view class="li_right">
											<text class="right_t">文档对话</text>
											<text class="right_b">上传文档，即可进行文档知识对话</text>
										</view>
									</view> -->

									</view>
								</view>

								<!-- ai实验室 -->
								<view class="prod_chat">
									<view class="information_header">
										<view class="left">
											AI实验室
										</view>
										<view class="right">
											<text @click='toMoreExperiment()'>更多</text>
											<u-icon size="20upx" name="arrow-right"></u-icon>
										</view>
									</view>
									<view class="chat_cont">
										<!-- AI35 -->
										<view class="cont_li" @click="goToLab(0)">
											<view class="li_left">
												<image class="li_img" :src='labImg1' />
											</view>
											<view class="li_right">
												<text class="right_t">AI35</text>
												<text class="right_b">语言大模型3.5版本，语义理解不错</text>
											</view>
										</view>
										<!-- AI40-->
										<view class="cont_li" @click="goToLab(1)">
											<view class="li_left">
												<image class="li_img" :src='labImg2' />
											</view>
											<view class="li_right">
												<text class="right_t">AI40</text>
												<text class="right_b">语言大模型4.0版本语义理解升级版</text>
											</view>
										</view>
										<!-- Claude-->
										<!-- <view class="cont_li" @click="goToLab(7)">
										<view class="li_left">
											<image class="li_img" :src='labImg3' />
										</view>
										<view class="li_right">
											<text class="right_t">Claude</text>
											<text class="right_b">大语言模型Claude语言理解一般</text>
										</view>
									</view> -->
										<!-- Stable Diffusion -->
										<view class="cont_li" @click="goDrawLab(9)">
											<view class="li_left">
												<image class="li_img" :src='labImg5' />
											</view>
											<view class="li_right">
												<text class="right_t">Stable Diffusion</text>
												<text class="right_b">SD大模型，较强的文生图、图生图能力</text>
											</view>
										</view>
										<!-- Midjouney-->
										<view class="cont_li" @click="goDrawLab(6)">
											<view class="li_left">
												<image class="li_img" :src='labImg4' />
											</view>
											<view class="li_right">
												<text class="right_t">Midjourney</text>
												<text class="right_b">支持文生图，具有较好语言理解能力</text>
											</view>
										</view>
										<!-- DALL.E-3-->
										<view class="cont_li" @click="goDrawLab(15)">
											<view class="li_left">
												<image class="li_img" :src='labImg1' />
											</view>
											<view class="li_right">
												<text class="right_t">DALL.E-3</text>
												<text class="right_b">可以通过文字来完美展示和控制画面</text>
											</view>
										</view>

									</view>
								</view>



								<!-- ai资讯 -->
								<view class="information" v-if="aiInforList.length > 0">
									<view class="information_header">
										<view class="left">
											AI资讯
										</view>
										<view class="right">
											<text @click='moreChange'>更多</text>
											<u-icon size="20upx" name="arrow-right"></u-icon>
										</view>
									</view>
									<view v-for="(item, index) in aiInforList" @click='contentChange(item.message_id)'
										:key="item.message_id">
										<view class="item_infor" v-if="index < 3">
											<view class="left">
												<view class="content">
													{{item.title}}
												</view>
												<view class="bottom">
													<text
														class="time">{{ item.create_time ? item.create_time.slice(0,10) : '' }}</text>
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

							<view class="top_btn" v-if="isCreat" @click="toTop">
								<image class="icon_img" :src='topImg' />
							</view>
						</scroll-view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>

	</view>
</template>

<script>
	import {
		getUserInfo
	} from '@/apis/chat.js'
	import {
		getIndustry,
		getOccupation,
		getSec,
		getDuration,
		getExpertise,
		getModules,
		getMessage,
		getTab,
		getTutor,
		getMe,
		getAllMe,
		realNameAuthentication,
		getRealNameAuthentication,
		putRealName,
		getToken,
		orderList
	} from '@/apis/user.js'
	import {
		getapplication,
		getModelList,
		getInteract,
		creatMessage,
		updateVisit,
		getVoiceList
	} from '@/apis/home.js'

	import Title from "@/pages/title/index.vue"
	export default {
		components: {
			Title,
		},
		data() {
			return {
				//触摸
				starty_digital: 0,
				endy_digital: 0,
				scrollindex: 0,
				windowHeight: '100vh', //窗口可用高度
				chiefImg1: global.baseImg + '/xcx/com/message_center/问一问.png',
				chiefImg2: global.baseImg + '/xcx/com/message_center/画一画.png',
				chiefImg3: global.baseImg + '/xcx/com/message_center/AI资讯.png',

				phoneImg: global.baseImg + "/xcx/com/message_center/Frame 427321012.png",
				wxImg: global.baseImg + "/xcx/com/message_center/Frame 427319549.png",
				wxgImg: global.baseImg + "/xcx/com/message_center/users-group.png",
				webImg: global.baseImg + "/xcx/com/message_center/web_site.png",

				tabImg1: global.baseImg + "/xcx/com/message_center/minus-square.png",
				tabImg2: global.baseImg + "/xcx/com/message_center/消息 1.png",
				tabImg3: global.baseImg + "/xcx/com/message_center/分享 4.png",
				tabImg4: global.baseImg + "/xcx/com/message_center/记录 (1).png",
				tabImg5: global.baseImg + "/xcx/com/message_center/creat.png",

				messageList: [], // 消息公告
				isRead: false,
				active: 8, // 会话切换
				inputValue: '',
				current: 0, //助理切换
				chatType: 'ChatGLM',
				selectShow: false,
				placeValue: '输入你想问的问题',
				AiList: [{
					id: 1,
					name: '对话'
				}, {
					id: 2,
					name: '绘画'
				}, ],

				loading: false,
				promptsList: [],
				instructName: [],
				show: false,
				content: "",
				loadingType: 0,
				page_no: 1,
				page_count: 10,
				pageTotal: 0,

				keyHeight: 0,
				// topHeight: 0,
				isTop: false,

				AiSelect: 0,
				isLoad: false,
				tabList: [],

				infoImg: global.baseImg + '/xcx/a18146ee-df32-4ecd-94d4-779dc78e47ab.jpg',
				productImg: global.baseImg + '/xcx/0f78ff2c-ef4e-44a7-9874-8ed66533f18c.jpg',
				newsImg: global.baseImg + '/xcx/086158e9-d48d-4e7d-80d5-98b10d68837d.jpg',
				knowImg: global.baseImg + '/xcx/6322b018-c738-42dd-82ab-c68dcb699e72.jpg',
				companyInfoImg: 'background-image: url("' + global.baseImg +
					'/xcx/86a3d5f4-1184-4a31-8012-85fa8ce84d0a.jpg")',

				companyName: '',
				phone: '',
				job: '',

				chatImg: global.baseImg + '/xcx/com/message_center/AI%E5%AF%B9%E8%AF%9D.png',
				drawImg1: global.baseImg + '/xcx/com/message_center/功能数字人定制.png',
				drawImg2: global.baseImg + '/xcx/com/message_center/功能视觉智能馆.png',
				drawImg3: global.baseImg + '/xcx/com/message_center/功能文档对话.png',
				drawImg4: global.baseImg + '/xcx/com/message_center/功能人像抠图.png',
				drawImg5: global.baseImg + '/xcx/com/message_center/功能人像融合.png',


				drawImg6: global.baseImg + '/xcx/com/message_center/语言对讲首页log.png',
				drawImg16: global.baseImg + '/xcx/com/message_center/nl声音克隆.png',
				drawImg7: global.baseImg + '/xcx/com/message_center/model.png',
				drawImg8: global.baseImg + '/xcx/com/message_center/语言对讲.png',
				drawImg17: global.baseImg + '/xcx/com/message_center/AI知识库icon.png',
				drawImg18: global.baseImg + '/xcx/com/message_center/clone.png',

				voiceImg: global.baseImg + '/xcx/bea21e5b-66d2-44ec-a2c3-20349bb7f2db.jpg',
				photoImg: global.baseImg + '/xcx/95c9c620-7748-4db3-b40e-69d9c2503eb6.jpg',
				cameraImg: global.baseImg + '/xcx/c7ecda32-d1f4-422a-96dc-e6c960898877.jpg',
				babyImg: global.baseImg + '/xcx/5e617b80-a054-4a3e-9305-4d74366d5405.jpg',
				figureImg: global.baseImg + '/xcx/aca1e358-dd34-4c65-b9cb-e57da931cc27.jpg',
				roomImg: global.baseImg + '/xcx/com/message_center/AI%E8%AF%86%E4%B8%87%E7%89%A9.png',

				userImg: global.baseImg + '/xcx/68a7d60b-3ef7-46c1-86f7-1eac0d21e814.jpg',
				roleImg: global.baseImg + '/xcx/92b66bbe-9fa6-4cb1-b1d2-8df39e2e4d0a.jpg',
				lifeImg: global.baseImg + '/xcx/1205c8fe-a2ab-44ef-ac5e-ca031aad4df9.jpg',
				workImg: global.baseImg + '/xcx/37bcc337-b8a0-48aa-8e5c-6db9771b7645.jpg',
				pcrImg: global.baseImg + '/xcx/7e716da2-d4f8-410b-a57f-aba7d7ad403e.jpg',

				bannerImg: global.baseImg + '/xcx/3c3c6be3-990e-46f6-8e10-7910451e3c3f.jpg',

				backImg: 'background-image: url("' + global.baseImg + '/xcx/com/message_center/banner.png")',
				xzImg: 'background-image: url("' + global.baseImg +
					'/xcx/com/message_center/%E9%81%87%E4%BA%8B%E4%B8%8D%E5%86%B3%E9%97%AE%E8%87%AA%E5%B7%B1.png")',
				headImg: global.baseImg + '/xcx/com/message_center/AI%E5%9B%BE%E6%A0%87.png',
				creatImg: global.baseImg + '/xcx/com/message_center/%E5%88%9B%E5%BB%BA.png',
				addImg: global.baseImg + '/xcx/com/message_center/Frame%20427320149.png',
				glImg: global.baseImg + '/xcx/com/message_center/%E7%AE%A1%E7%90%86.png',
				editImg: global.baseImg + '/xcx/com/message_center/edit.png',
				tipImg: global.baseImg + '/xcx/com/message_center/Frame%20427320201.png',
				changeImg: global.baseImg + '/xcx/com/message_center/%E7%BC%96%E8%BE%91.png',

				isCreat: false,
				exArr1: [],
				exArr2: [],
				allMentor: [],
				isLogin: false,
				meList: '',
				otherList: [],

				// ai资讯
				aiInforList: [],

				// 模型图标
				wenxinImg: global.baseImg + '/xcx/com/message_center/%E6%96%87%E5%BF%83%E4%B8%80%E8%A8%80.png',
				xunfeiImg: global.baseImg + '/xcx/com/message_center/%E8%AE%AF%E9%A3%9E.png',
				qianwenImg: global.baseImg + '/xcx/com/message_center/%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE1.png',
				zhinaoImg: global.baseImg + '/xcx/com/message_center/360%E6%99%BA%E8%84%91.png',
				huoshanImg: global.baseImg + '/xcx/com/message_center/%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE.png',
				zhipuImg: global.baseImg + '/xcx/com/message_center/%E6%99%BA%E6%99%AE.png',
				wyImg: global.baseImg + '/xcx/com/message_center/能力log.png',
				tenxunImg: global.baseImg + '/xcx/com/message_center/混元.png',

				// AI实验室
				labImg1: global.baseImg + '/xcx/com/message_center/30.png',
				labImg2: global.baseImg + '/xcx/com/message_center/40.png',
				labImg3: global.baseImg + '/xcx/com/message_center/%E5%85%8B%E9%B2%81%E5%BE%B7.png',
				labImg4: global.baseImg + '/xcx/com/message_center/%E6%99%BA%E6%99%AEAI.png',
				labImg5: global.baseImg + '/xcx/com/message_center/%E6%99%BA%E6%99%AEI.png',

				// 视觉体验馆
				vis1: global.baseImg + '/xcx/com/message_center/face.png',
				vis2: global.baseImg + '/xcx/com/message_center/face2.png',
				vis3: global.baseImg + '/xcx/com/message_center/face3.png',
				vis4: global.baseImg + '/xcx/com/message_center/face4.png',
				vis5: global.baseImg + '/xcx/com/message_center/face5.png',
				vis6: global.baseImg + '/xcx/com/message_center/face6.png',

				//AI工具集
				tool1: global.baseImg + '/xcx/com/message_center/对话模型.png',
				tool2: global.baseImg + '/xcx/com/message_center/绘画模型.png',
				tool3: global.baseImg + '/xcx/com/message_center/语音合成.png',
				tool4: global.baseImg + '/xcx/com/message_center/文档对话能力.png',

				// AI百宝箱
				chest1: global.baseImg + '/xcx/com/message_center/bbxztxt.png',
				chest2: global.baseImg + '/xcx/com/message_center/bbxrxkth.png',
				chest3: global.baseImg + '/xcx/com/message_center/bbxtyspsc.png',
				chest4: global.baseImg + '/xcx/com/message_center/bbxspqzm.png',
				chest5: global.baseImg + '/xcx/com/message_center/bbxspqbz.png',
				chest6: global.baseImg + '/xcx/com/message_center/bbxtpcj.png',

				otherImg1: global.baseImg + '/xcx/com/message_center/445.png',
				otherImg2: global.baseImg + '/xcx/com/message_center/555.png',
				otherImg3: global.baseImg + '/xcx/com/message_center/%E5%9B%BE%E7%94%9F.png',
				otherImg4: global.baseImg + '/xcx/com/message_center/%E6%96%87%E6%9C%AC%E8%AF%86%E5%88%AB.png',
				otherImg5: global.baseImg + '/xcx/com/message_center/%E5%BD%A9%E8%B6%85%E5%AE%9D%E5%AE%9D.png',
				otherImg6: global.baseImg + '/xcx/com/message_center/%E6%95%B0%E5%AD%97%E4%BA%BA%E5%AE%9A%E5%88%B6.png',
				otherImg7: global.baseImg + '/xcx/com/message_center/%E6%96%87%E6%A1%A3%E5%AF%B9%E8%AF%9D.png',
				qhImg: global.baseImg + '/xcx/com/message_center/Frame%20427320305.png',
				topImg: global.baseImg + '/xcx/com/message_center/dingbu.png',
				meImg: 'background-image: url("' + global.baseImg + '/xcx/com/message_center/bg1.png")',

				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				headCardBgc: global.baseImg + '/xcx/com/message_center/商务合作.png',

				// userInfo: JSON.parse(uni.getStorageSync('userInfo')),

				// 全局搜索
				searchKeyword: '',
				filterList: [],
				featureList: [
					'无忧秘书（chatglm）',
					'文心一言',
					'讯飞星火',
					'通义千问',
					'360智脑',
					'腾讯混元',
					'火山云雀',
					'无忧秘书(stable diffusion)',
					'通义万相',
					'百度绘画',
					'火山引擎',
					'名人互动',
					'实用工具',
					'休闲娱乐',
					'工作助理',
					'热门场景',
					'助力职场',
					'媒体创作',
					'日常办公',
					'知识技能',
					'美好生活',
					'跨境电商',
					'绘画',
					'对话',
					'对话模型',
					'绘画模型',
					'图片处理',
					'视频处理',
					'文字识别',
					'语音合成',
					'文档对话',
					'音视频转写',
					'看图说话',
					'彩超宝宝',
					'多模型对话',
					'语音对讲',
					'虚拟数字人',
					'声音克隆',
					'企业设置',
					'知识库',
					'AI企业数字员工',
					'成员管理',
					'趣闻轶事',
					'免费资源',
					'垂直应用',
					'算力分享',
					'大模型',
					'AI绘画',
					'元宇宙',
					'AIGC',
					'AI对话',
					'AI绘画',
					'提示词大全',
					'AI实验室',
					'AI工具集',
					'AI超级能力',
					'AI数字孪生',
					'AI语音合成',
					'AI直播数字人定制',
					'企业AI知识库',
					'AI资讯',
					'AI商城',
					'帮助中心',
					'商务合作',
					'投诉及建议',
					'公告通知',
					'版本信息',
					'计费中心',
					'服务商',
					'我要分销',
					'订单记录',
					'我要分享',
					'卡密兑换',
					'个人中心',
					'音视频转文字',
					'图生图',
					'文本识别',
					'创作中心',
					'AI视觉馆',
					'AI百宝箱',
					'投诉及建议',
				],

				nospeak: global.baseImg + '/xcx/com/message_center/renwu.png',
				nospeak1: global.baseImg + '/xcx/com/message_center/nospeak1.mp4',
				speak1: global.baseImg + '/xcx/com/message_center/speak.mp4',
				isone: true,
				videoContext_no: '',
				videoContext: '',

				infoSpeak: '',
				token: '',
				voice_url: '',
				innerAudioContext: null,

				noLoad: true,
				yLoad: true,
				noSpekLoad: true,
				ySpeakLoad: true,

				nav_title: 'AI数字分身',
				is_click: false,
				interact: '',
				click_count: 0,

				messageShow: false, //留言框
				messageValue: "", //留言文本
				messagePhone: "", //留言电话
				temp_id: '',

				tipShow: false,
				top_tip: 1,

				voiceNum: 0,
				listNum: 0,

				img_index: 9,
				no_index: 8,
				y_index: 7,

				webSocketTask: '',
				isSpeak: 3

			}
		},

		onLoad(query) {
			if (query.q) {
				let scene = decodeURIComponent(query.q);
				let val = this.getUrlDataFN(scene);
				console.log(val, 5566)
				uni.setStorageSync('loginCode', val);
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				}
			} else if (query.scene) {
				let scene = decodeURIComponent(query.scene);

				this.temp_id = scene
				this.updateVisit(scene)
			}

			//语音播放初始化
			this.init()
		},

		onShow() {

			this.videoContext_no = uni.createVideoContext('noVideo')
			this.videoContext = uni.createVideoContext('myVideo')

			setTimeout(() => {
				this.getTab()
				this.getapplication();
				this.getMessageList();
				this.getOrderList();
				this.getHumanList()
				this.putRealName()
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				console.log(userInfo, 5587)
				if (userInfo.role == 'guess') {
					this.headImg = global.baseImg + '/xcx/com/message_center/Frame%20427320149.png'
					this.isLogin = false
					this.getTutor();
					this.videoContext_no.play()
					this.isSpeak = 1
					console.log('进来了')
				} else {
					this.getModelList()
					this.getMe()
					this.isLogin = true
				}
			}, 800)



			let that = this;
			uni.createSelectorQuery().select(".head_index").boundingClientRect(function(
				res) { //定位到你要的class的位置

				// console.log(res.height, 410)
				that.keyHeight = res.height;
				that.windowHeight = uni.getSystemInfoSync().windowHeight - that.keyHeight; //获取窗口可用高度
				// that.topHeight = res.height + 40
			}).exec()

			// 接收websocket消息及处理
			// uni.onSocketMessage((res) => {
			// 	console.log(res, 777)
			// 	let type = typeof(res.data);
			// 	if (type == 'string') {
			// 		let info = JSON.parse(res.data);
			// 		if (info) {
			// 			let url = info.data;
			// 			this.voice_url = global.baseImg + '/' + url
			// 			console.log(this.voice_url, 5589)
			// 			uni.closeSocket()
			// 			uni.onSocketClose(function(res) {
			// 				console.log('WebSocket 已关闭！');
			// 			});
			// 		}

			// 	}
			// })
		},

		onHide() {
			this.select_text = 0;
			this.current = 0;
		},

		onPageScroll(e) {
			console.log(e.scrollTop, 1423);
			if (e.scrollTop > 600) {
				this.isCreat = true
			} else {
				this.isCreat = false
			}
		},
		onHide() {
			// uni.closeSocket()
			// uni.onSocketClose(function(res) {
			// 	console.log('WebSocket 已关闭！');
			// });
		},

		onUnload() {
			// uni.closeSocket()
			// uni.onSocketClose(function(res) {
			// 	console.log('WebSocket 已关闭！');
			// });
			this.stop()
		},

		methods: {
			scrollchange(e) {
				if (e.target.scrollTop > 650) {
					this.isCreat = true
				} else {
					this.isCreat = false
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
						this.listNum=res.data.data
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},
			init() {
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});

				this.innerAudioContext.onEnded(() => {

					console.log('播放停止了')
					// this.innerAudioContext.stop()
					//关闭视频
					this.videoContext.stop() //静默视频停止
					this.videoContext_no.play() //静默视频停止
					this.noSpekLoad = true

				})

				this.innerAudioContext.onStop((res) => {
					console.log('出错了111');
				});
			},

			updateVisit(model_id) {
				let val = {
					'model_id': model_id
				}
				updateVisit(val).then(res => {
					if (res.code == 20000) {} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('生成失败');
				})
			},

			getInteract() {
				let val = {
					'model_id': this.infoSpeak.model_id,
					'question': '',
					'is_click': 1
				}
				getInteract(val).then(res => {
					if (res.code == 20000) {
						this.click_count++
						if (this.click_count == 1 && this.infoSpeak.share_desc) {
							this.interact = this.infoSpeak.share_desc
							// console.log('分享')
						} else if (this.click_count == 2 && this.infoSpeak.model_function) {
							this.interact = this.infoSpeak.model_function
							this.click_count = 0
							// console.log('model')
						} else if (this.click_count == 0 && this.infoSpeak.model_greetings) {
							this.interact = this.infoSpeak.model_greetings
							// console.log('greting')
						} else {
							this.interact = '你好我是数字分身，有什么问题可以向我提问'
							// console.log('自己提问')
						}

						if (this.interact) {
							this.innerAudioContext.stop();
							this.getRcordToken()
						} else {
							this.innerAudioContext.play();
							this.videoContext.play()
						}

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},

			play(url) {
				this.innerAudioContext.src = url;
				this.innerAudioContext.play();
			},

			//原生停止
			stop() {
				this.innerAudioContext.stop();
				//关闭视频
				this.videoContext.stop() //静默视频停止
				this.videoContext_no.play() //静默视频停止
				this.noSpekLoad = true
			},
			// 获取token
			async getRcordToken() {
				await getToken().then(res => {
					if (res.code == 20000) {
						this.token = res.data.token
						this.speakSocket()
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取token失败');
				})
			},
			speakSocket() {
				//创建webSocket
				let that = this
				// console.log(this.token,3333)

				that.webSocketTask = uni.connectSocket({
					url: 'wss://ai.umi6.com:28083/ws/ali/text_to_speech?token=' + this.token,
					header: {
						'content-type': 'application/json'
					},
					success(res) {
						console.log('成功', res);
					},
				})
				// 监听WebSocket连接打开事件
				that.webSocketTask.onOpen((res) => {
					console.log("监听WebSocket连接打开事件", res)
					// console.log(that.infoSpeak.model_greetings, 5548)
					let text_val = ''
					if (that.infoSpeak.model_greetings != '') {
						text_val = that.infoSpeak.model_greetings
					} else {
						text_val = '你好我是数字分身，有什么问题可以向我提问'
					}

					that.webSocketTask.send({
						data: JSON.stringify({
							"text": text_val,
							"voice": that.infoSpeak.audio_code,
							"action_type": "send",
						})
					});
					that.webSocketTask.send({
						data: JSON.stringify({
							"action_type": "stop",
						})
					});
				});

				// 接收websocket消息及处理
				that.webSocketTask.onMessage((res) => {
					// console.log(res, 777)
					let type = typeof(res.data);
					if (type == 'string') {
						let info = JSON.parse(res.data);
						if (info) {
							let url = info.data;
							this.voice_url = global.baseImg + '/' + url
							// console.log(this.voice_url,5589)
							that.webSocketTask.close()
							that.webSocketTask.onClose(function(res) {
								console.log('WebSocket 已关闭！');
							});
							//互动执行
							if (this.is_click) {
								this.play(this.voice_url)
								this.videoContext.play()
								this.is_click = false
							}
						}

					}
				})
				// 监听WebSocket错误
				uni.onSocketError((res) => {
					console.info("监听WebSocket错误" + res)
				});

			},
			//截取url参数
			getUrlDataFN(urlStr) {
				// 定义一个空对象以储存数据
				const urlObj = {}
				// 检查url中是否携带数据
				if (urlStr.indexOf('?') === -1) return null
				// 找到 '?' 对应的下标
				const index = urlStr.indexOf('?') // index = 31
				// 截取 '?' 后的内容
				const dataStr = urlStr.substr(index + 1) // dataStr = a=1&b=2&c=&d=xxx&e
				// 通过 '&' 将字符串分割成数组
				const dataArr = dataStr.split('&') // ['a=1', 'b=2', 'c=', 'd=xxx', 'e']
				// 遍历字符串分割后的数组
				dataArr.forEach(str => {
					// 判断数组内的字符串是否有 '='
					if (str.indexOf('=') === -1) {
						// 如没有 '=' , 则将此字符串作为对象内键值对的键, 键值对的值为 undefined
						urlObj[str] = undefined // { e: undefined }
					} else {
						// 如果有 '='
						// 通过 '=' 将此字符串截取成两段字符串（不推荐使用 split 分割, 因为数据中可能携带多个 '=' ）
						const innerArrIndex = str.indexOf('=')
						const key = str.substring(0, innerArrIndex)
						const value = str.substr(innerArrIndex + 1)
						// 以截取后的两段字符串作为对象的键值对
						urlObj[key] = value // {a: '1', b: '2', c: '', d: 'xxx'}
					}
				})
				// 返回对象
				// console.log(urlObj)
				return urlObj
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
			// 获取列表
			getModelList() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = ''
				let that = this
				if (this.temp_id != '') {
					val = {
						'user_id': userInfo.user_id,
						'model_id': this.temp_id,
						'is_visitor': 1,
						'get_default': 0
					}
				} else {
					val = {
						'user_id': userInfo.user_id,
						'is_visitor': 0,
						'get_default': 1
					}
				}

				getModelList(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							this.isSpeak = 2
							this.infoSpeak = res.data[0]
							this.interact = this.infoSpeak.model_greetings
							// this.getRcordToken()
						} else {
							this.isSpeak = 1
							this.infoSpeak = ''
						}

						setTimeout(() => {
							// console.log('1秒执行')
							that.videoContext_no.play()
						}, 1000)

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
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
								this.getInfo()
								this.$api.msg('实名认证成功')
								uni.setStorageSync('namelink', '')
							}
						}
					}
				).catch(err => {})
			},
			// 触摸开始
			scrollTouchstart(e) {
				// console.log('触摸开始', e.touches[0].pageY, this.starty_digital)
				let py = e.touches[0].pageY; // 获取触摸点的 Y 坐标值
				// this.$set(this,'.starty_digital',py)
				this.starty = py
			},

			// 触摸移动
			scrollTouchmove(e) {
				// console.log('触摸移动')
				let py = e.touches[0].pageY; // 获取触摸点的 Y 坐标值
				this.endy = py // 将 Y 坐标值存储在数据对象中
				// 判断内容是否已经到达顶部或底部

			},

			// 触摸结束
			scrollTouchend(e) {
				// console.log('触发松开')
				let d = this; // 获取当前页面或组件的数据对象

				// 判断手指移动的方向和距离，并更新页面或组件的数据对象
				// console.log(d.endy)
				// console.log(d.starty)
				// console.log(d.scrollindex)
				// console.log(d.endy != 0 && d.endy - d.starty < -80 && d.scrollindex < 1)
				if (d.endy != 0 && d.endy - d.starty < -80 && d.scrollindex < 1) {
					if (d.scrollindex === 1) {
						return
					}
					this.scrollindex = d.scrollindex + 1 // 如果手指向下移动的距离大于 100，并且当前不是第一项内容，则向上滚动一行
					// console.log('当前页1', d.scrollindex);
					this.nav_title = 'AI能力中心'
				} else if (d.endy - d.starty > 80 && d.scrollindex > 0) {
					if (d.scrollindex === 0) {
						return
					}
					this.scrollindex = d.scrollindex - 1 // 如果手指向上移动的距离大于 100，并且当前不是最后一项内容，则向下滚动一行
					// console.log('当前页2', d.scrollindex);
					this.nav_title = 'AI数字分身'
				}
				// 重置触摸相关变量
				this.starty_digital = 0;
				this.endy_digital = 0;
				// this.$set(this,'starty_digital',0)
				// this.$set(this,'endy_digital',0)
			},
			// 跳转数字分身页面
			toDigital(index) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.showModal({
						title: '提示',
						content: '请登录后查看',
						confirmText: "前往登录",
						showCancel: false,
						success(res) {
							if (res.confirm) {
								uni.setStorageSync("userInfo", '');
								uni.navigateTo({
									url: '/pages/login/login',
								})
							}
						}
					});
					return
				}
				if (index == 0) {
					// 编辑数字人形象
					uni.navigateTo({
						url: '/childCont/digital/configuration_image'
					})
				} else if (index == 1) {
					// 数字人对话
					uni.navigateTo({
						url: '/childCont/digital/my'
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: '/childCont/digital/chat?temp_id=' + this.temp_id + '&chatInfo=' + JSON.stringify(this
							.infoSpeak)
					})

				} else if (index == 3) {
					// 数字人分享
					uni.navigateTo({
						url: '/childCont/digital/share_digital?model_img=' + this.infoSpeak.out_video_cover +
							'&model_id=' + this.infoSpeak.model_id + '&greet=' + this.infoSpeak.share_desc
					})
				} else {
					uni.navigateTo({
						url: '/childCont/digital/history_digital?model_id=' + this.infoSpeak.model_id
					})
				}

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
				// console.log(11111111111111111111111111111111111,this.aiInforList);

			},
			moreChange() {
				uni.navigateTo({
					url: '/childPage/news/information'
				})
			},
			contentChange(id) {
				uni.navigateTo({
					url: '/childPage/news/information_content?message_id=' + id,
				})
			},

			// 获取内荐导师列表
			getTutor() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					// 'user_id': userInfo.user_id,
					'is_built_in': '1',
				}
				getTutor(val).then(res => {
					if (res.code == 20000) {
						this.exArr1 = [];
						this.exArr2 = [];
						if (res.data.length > 0) {
							res.data.map((item, index) => {
								if (index < 8) {
									this.exArr1.push(item);
								} else {
									this.exArr2.push(item);
								}
							})
						}
						// console.log(this.exArr1,222)
						// console.log(this.exArr2,333)
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},

			// 获取我的信息列表
			getMe() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
				}
				getMe(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							let meArr = []
							res.data.map((item, index) => {
								meArr.push(item.me_id)
							})
							this.getAllMe(meArr)
						} else {
							this.$api.msg('登录信息已过期，请重新登录')
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login',
								})
							}, 800)
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},

			//获取我的所有信息
			getAllMe(arr) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'me_ids': JSON.stringify(arr),
				}
				getAllMe(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							let newrr = [{}, {}, {}, {}, {}, {}, {}, {}]
							res.data.forEach(str => {
								str.tutor.forEach(item => {
									if (JSON.stringify(item) != '{}') {
										let sort = item.sort;
										newrr[sort] = item
									}
								})
								str.tutor = newrr
							})
							this.allMentor = res.data
							this.meList = res.data[0].me;
							this.otherList = res.data[0].tutor
							// console.log(this.allMentor, 5556)
							// console.log(this.meList,3333)
							// console.log(this.otherList,5652)
						} else {
							this.$api.msg('登录信息已过期，请重新登录')
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login',
								})
							}, 800)
						}

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},


			// 获取公告列表
			getMessageList() {
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
								this.messageList.push(ele.title)

							}
							uni.setStorageSync('noticeInfo', this.messageList)
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

			//切换对话
			version(num) {
				this.active = num;
				if (num == 0) {
					this.chatType = 'AI35';
					// this.placeValue = '我是领先的AI35大语言AI模型，现在为您服务！'
					this.placeValue = '输入你想问的问题'
				} else if (num == 1) {
					this.chatType = 'AI40';
					// this.placeValue = '我是前沿的AI40大语言AI模型，为您提供专业便捷的启智服务！'
					this.placeValue = '输入你想问的问题'
				} else if (num == 2) {
					this.chatType = 'DALL·E2';
					// this.placeValue = '我是DALL·E2以智能为笔，以创意为墨现在为您服务！'
					this.placeValue = '输入你绘图的内容'
				} else if (num == 3) {
					this.chatType = '百度绘画';
					// this.placeValue = '我是百度绘画将最前沿科技与艺术的完美融合。现在为您服务'
					this.placeValue = '输入你绘图的内容'
				} else if (num == 4) {
					this.chatType = '文心一言';
					// this.placeValue = '我是百度全新一代知识增强大语言模型，文心一言大模型'
					this.placeValue = '输入你想问的问题'
				} else if (num == 5) {
					this.chatType = '讯飞星火';
					// this.placeValue = '我是讯飞星火大模型以中文为核心的，新一代认知智能大模型'
					this.placeValue = '输入你想问的问题'
				} else if (num == 6) {
					this.chatType = 'Midjourney';
					// this.placeValue = '我是Midjourney，现在为您服务！为确保更高的准确性，请使用英文输入。'
					this.placeValue = '输入你绘图的内容'
				} else if (num == 7) {
					this.chatType = 'Claude';
					// this.placeValue = '我是Claude大型语言模型。'
					this.placeValue = '输入你想问的问题'
				} else if (num == 8) {
					this.chatType = 'ChatGLM';
					// this.placeValue = '我是ChatGLM千亿对话模型。'
					this.placeValue = '输入你想问的问题'
				} else if (num == 9) {
					this.chatType = 'Stable Diffusion';
					// this.placeValue = '我是Stable Diffusion探索新的思想媒介，扩展人类的想象力'
					this.placeValue = '输入你绘图的内容'
				} else if (num == 10) {
					this.chatType = '通义千问';
					// this.placeValue = '我是Claude大型语言模型。'
					this.placeValue = '输入你想问的问题'
				} else if (num == 11) {
					this.chatType = '商汤日日新';
					// this.placeValue = '我是Claude大型语言模型。'
					this.placeValue = '输入你想问的问题'
				}

			},

			// 重置
			clear() {
				this.selectDone1 = 0
				this.selectDone2 = -1
				this.selectDone3 = -1
				this.selectDone4 = -1
				this.selectDone5 = -1
				this.zyList = []
				this.lxList = []
				this.sjList = []
				this.dwList = []
				this.select_text2 = 0
				this.select_text3 = 0
				this.select_text4 = 0
				this.select_text5 = 0
				this.selectShow = false

				this.zy_name = '职业'
				this.lx_name = '类型'
				this.sj_name = '从业时间'
				this.dw_name = '地位'
				if (this.select_text == this.hyList[0].industry_id) {
					let data = {
						industry_id: this.hyList[0].industry_id
					}
					this.getOccupation(data)
					this.getModules(data)
				} else {
					this.select_text = this.hyList[0].industry_id
					this.hy_name = this.hyList[0].name
				}
			},

			// 切换顶部对话
			AiChange(e) {
				let id = e.id;
				if (id == 1) {
					this.AiSelect = 0
					this.active = 8 // 默认选中文心一言
					this.chatType = 'ChatGLM';
					this.placeValue = '输入你想问的问题'
				} else {
					this.AiSelect = 1
					this.active = 9 // 默认选中Stable Diffusion绘画
					this.chatType = 'Stable Diffusion';
					this.placeValue = '输入你绘图的内容'
				}
			},

			//AI一下
			goToChat(num) {
				uni.setStorageSync('tabStatus', num)
				uni.navigateTo({
					url: "/childPage/chat/chat"
				})

			},

			// AI实验室
			goToLab(num) {

				uni.setStorageSync('tabStatus', num)
				uni.navigateTo({
					url: "/childPage/laboratory/laboratory"
				})

			},
			goDrawLab(num) {
				uni.setStorageSync('labActive', num)
				uni.navigateTo({
					url: "/childPage/laboratory/labDraw"
				})
			},

			goToDraw(num) {
				uni.setStorageSync('active', num)
				uni.navigateTo({
					url: '/childPage/draw/draw'
				})

			},

			selectTip(val) {

				let data = {
					'current': val,
				}

				uni.setStorageSync('applyInfo', data);
				uni.switchTab({
					url: "/pages/apply/apply"
				})
			},

			// toAd() {
			// 	uni.navigateTo({
			// 		url: '/pages/notice/notice'
			// 	})
			// },

			// 进入资产体验中心
			goCompany() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/company/add_info?companyName=' + this.companyName + '&phone=' +
							this
							.phone + '&job=' + this.job,
					})
				}
			},

			toChat(num) {
				if (num == 1) {
					uni.setStorageSync('chatInfo', 1)
					uni.switchTab({
						url: '/pages/chat/chat'
					})
					return
				}
				uni.switchTab({
					url: '/pages/chat/chat'
				})
			},
			toDraw() {
				uni.navigateTo({
					url: '/childPage/draw/draw'
				})
			},
			toPainting() {
				uni.switchTab({
					url: '/pages/painting/painting'
				})
			},
			toApply() {
				uni.switchTab({
					url: '/pages/apply/apply'
				})
			},

			toVoice() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/voice/voice_index',
					})
				}
			},

			toPhoto() {
				uni.navigateTo({
					url: '/childPage/chat/camera?chatValue=' + '' + '&source=2'
				})
			},
			toCamera() {
				uni.navigateTo({
					url: '/childPage/chat/camera?chatValue=' + '' + '&source=1'
				})
			},

			toDoppler() {

				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/doppler/doppler',
					})
				}
			},

			toFigure() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				memberInfo
				let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else if (memberInfo.is_real_name == 1) {
					this.toH5Link()
					return
				} else {
					uni.navigateTo({
						url: '/childCont/figure/figure',
					})
				}
			},

			toDiscern() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/discern/discern',
					})
				}
			},

			toRoom() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/laboratory/laboratory'
					})
				}

			},
			//视觉体验馆
			toVision() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/vision'
					})
				}

			},
			// 语言对讲
			toIntercom() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					// uni.navigateTo({
					// 	url: '/childPage/voice/start_voice'
					// })
					uni.navigateTo({
						url: '/childPage/voice/voice_page'
					})
				}

			},

			//人脸识别
			toFace() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/merge'
					})
				}

			},

			toAge() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/myEge'
					})
				}

			},

			toBeauty() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/beauty'
					})
				}

			},

			toCaricature() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/caricature'
					})
				}

			},

			toMatting() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/matting'
					})
				}

			},

			toText() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/textRecognize'
					})
				}

			},
			toOldphoto() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/oldphoto'
					})
				}

			},
			toImgemax() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/imgemax'
					})
				}

			},
			toGames3d() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/games3d'
					})
				}

			},
			toPeoplevfx() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/peoplevfx'
					})
				}

			},
			toFacemax() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/facemax'
					})
				}

			},
			toHair() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/vision/hair'
					})
				}

			},

			myDistribution() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/distribution/distribution',
					})
				}

			},

			// AI百宝箱
			toRetouch() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/chest/retouch'
					})
				}

			},

			toCartoon() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/chest/cartoon'
					})
				}

			},
			toUniversal() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/chest/universal'
					})
				}

			},
			toSubtitles() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/chest/subtitles'
					})
				}

			},
			toSymbol() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/chest/symbol'
					})
				}

			},
			toTailor() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/chest/tailor'
					})
				}

			},

			// 获取助理列表
			getTab() {
				getTab().then(res => {
					if (res.code == 20000) {
						this.tabList = res.data
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},

			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},

			addMentor(id, index, tutor_id) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/mentor/mentor_list?sort=' + index + '&me_id=' + id +
							'&tutor_id=' +
							tutor_id,
					})
				}

			},

			toCreate() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/mentor/add_mentor',
					})
				}

			},

			toManage() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/mentor/manage_list',
					})
				}
			},

			getAddress(index) {
				let className = '';
				switch (index) {
					case 0:
						className = 'circle1';
						break;
					case 1:
						className = 'circle2';
						break;
					case 2:
						className = 'circle3';
						break;
					case 3:
						className = 'circle4';
						break;
					case 4:
						className = 'circle5';
						break;
					case 5:
						className = 'circle6';
						break;
					case 6:
						className = 'circle7';
						break;
					case 7:
						className = 'circle8';
						break;
					default:
						className = ''
				}
				return className;
			},

			getCount(index) {
				let className = '';
				switch (index) {
					case 0:
						className = 'cont1';
						break;
					case 1:
						className = 'cont2';
						break;
					case 2:
						className = 'cont3';
						break;
					case 3:
						className = 'cont4';
						break;
					case 4:
						className = 'cont5';
						break;
					case 5:
						className = 'cont6';
						break;
					case 6:
						className = 'cont7';
						break;
					case 7:
						className = 'cont8';
						break;
					default:
						className = ''
				}
				return className;
			},

			mentorChat(url, text, me_id, tutor_id) {
				uni.navigateTo({
					url: '/childPage/mentor/mentor_chat?imgUrl=' + url + '&greet=' + text + '&me_id=' +
						me_id +
						'&tutor_id=' + tutor_id,
				})
			},

			//修改我的信息
			toDetail(id) {
				uni.navigateTo({
					url: '/childPage/mentor/add_mentor?me_id=' + id,
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
			toSlove() {
				this.$api.msg('开发中')
			},

			toBottom() {
				//从当前位置到达目标位置
				uni.createSelectorQuery().select("#chat_opa").boundingClientRect(data => { //目标位置的节点：类或者id
					uni.createSelectorQuery().select("#pag_top").boundingClientRect(
						res => { //最外层盒子的节点：类或者id
							uni.pageScrollTo({
								duration: 100, //过渡时间
								scrollTop: data.top - res.top, //到达距离顶部的top值
							})
						}).exec()
				}).exec();
			},

			//回到顶部
			toTop() {
				uni.createSelectorQuery().select("#pag_top").boundingClientRect(res => { //最外层盒子的节点：类或者id
					console.log('进来了', res);
					uni.pageScrollTo({
						duration: 100, //过渡时间
						scrollTop: 100, //到达距离顶部的top值
					})
				}).exec()
			},

			toDocument() {
				uni.navigateTo({
					url: '/childPage/document/document_chat',
				})
			},
			toClone() {
				let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
				if (memberInfo.is_real_name == 1) {
					this.toH5Link()
					return
				}
				// console.log(this.voiceNum,this.listNum, 1640);
				if (this.voiceNum.length-this.listNum.length>0) {
					uni.navigateTo({
						url: '/childCont/clone/my_voice'
					})
				} else {
					uni.navigateTo({
						url: '/childCont/clone/pay_clone'
					})
				}

			},
			toModel() {
				uni.navigateTo({
					url: '/childPage/multi_model/multi_model_next'
				})
			},
			toSpeech() {
				uni.navigateTo({
					url: '/childPage/speech/speech_merge'
				})
			},
			toRepository() {
				uni.navigateTo({
					url: '/childCont/repository/repository'
				})
			},
			toCoop() {
				uni.navigateTo({
					url: '/childPage/cooperate/cooperate'
				})
			},
			toChest() {
				this.$api.msg('开发中')
			},

			toMoreAbility() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_ability'
					})
				}
			},
			toMoreChat() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_chat'
					})
				}
			},
			toMoreDraw() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_draw'
					})
				}
			},
			toMoreChest() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_chest'
					})
				}
			},
			toMoreExperiment() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_experiment'
					})
				}
			},
			goToMoreVideo() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_video'
					})
				}
			},
			goToMorePic() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_pic'
					})
				}
			},
			toMoreTool() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/more_tool'
					})
				}
			},
			toMerge() {
				uni.navigateTo({
					url: '/childPage/vision/merge'
				})
			},
			toNotice() {
				uni.navigateTo({
					url: "/childPage/notice/notice"
				})
			},
			toFigureVoice() {
				let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
				if (memberInfo.is_real_name == 1) {
					this.toH5Link()
					return
				}
				uni.navigateTo({
					url: '/childCont/figure/figure_voice'
				})
			},
			toAssemble() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childCont/more_function/assemble'
					})
				}
			},
			searchTitle(e) {
				if (e) {
					const keyword = this.searchKeyword.toLowerCase();
					this.filterList = this.featureList
					this.filterList = this.featureList.filter(item => item.toLowerCase().includes(keyword));
				}

			},
			toFeature(val) {

				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
					this.searchKeyword = ''
					return
				}
				if (val == '无忧秘书（chatglm）') {
					uni.switchTab({
						url: '/pages/chat/chat'
					})
				}
				if (val == '文心一言') {
					uni.setStorageSync('tabStatus', 4)
					uni.navigateTo({
						url: "/childPage/chat/chat"
					})
				}
				if (val == '讯飞星火') {
					uni.setStorageSync('tabStatus', 5)
					uni.navigateTo({
						url: "/childPage/chat/chat"
					})
				}
				if (val == '通义千问') {
					uni.setStorageSync('tabStatus', 10)
					uni.navigateTo({
						url: "/childPage/chat/chat"
					})
				}
				if (val == '360智脑') {
					uni.setStorageSync('tabStatus', 12)
					uni.navigateTo({
						url: "/childPage/chat/chat"
					})
				}
				if (val == '腾讯混元') {
					uni.setStorageSync('tabStatus', 1001)
					uni.navigateTo({
						url: "/childPage/chat/chat"
					})
				}
				if (val == '火山云雀') {
					uni.setStorageSync('tabStatus', 1000)
					uni.navigateTo({
						url: "/childPage/chat/chat"
					})
				}
				if (val == '无忧秘书(stable diffusion)') {
					uni.switchTab({
						url: '/pages/painting/painting'
					})
				}
				if (val == '通义万相') {
					uni.setStorageSync('active', 13)
					uni.navigateTo({
						url: '/childPage/draw/draw'
					})
				}
				if (val == '百度绘画') {
					uni.setStorageSync('active', 3)
					uni.navigateTo({
						url: '/childPage/draw/draw'
					})
				}
				if (val == '火山引擎') {
					uni.setStorageSync('active', 14)
					uni.navigateTo({
						url: '/childPage/draw/draw'
					})
				}
				if (val == '名人互动') {
					uni.setStorageSync('applyName', '名人互动')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '实用工具') {
					uni.setStorageSync('applyName', '实用工具')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '休闲娱乐') {
					uni.setStorageSync('applyName', '休闲娱乐')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '工作助理') {
					uni.setStorageSync('applyName', '工作助理')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '热门场景') {
					uni.setStorageSync('applyName', '热门场景')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '助力职场') {
					uni.setStorageSync('applyName', '助力职场')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '媒体创作') {
					uni.setStorageSync('applyName', '媒体创作')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '日常办公') {
					uni.setStorageSync('applyName', '日常办公')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '知识技能') {
					uni.setStorageSync('applyName', '知识技能')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '美好生活') {
					uni.setStorageSync('applyName', '美好生活')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '跨境电商') {
					uni.setStorageSync('applyName', '跨境电商')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == '绘画') {
					uni.navigateTo({
						url: '/childPage/laboratory/labDraw'
					})
				}
				if (val == '对话') {
					uni.navigateTo({
						url: '/childPage/laboratory/laboratory'
					})
				}
				if (val == '对话模型') {
					uni.navigateTo({
						url: '/childCont/more_function/more_chat'
					})
				}
				if (val == '绘画模型') {
					uni.navigateTo({
						url: '/childCont/more_function/more_draw'
					})
				}
				if (val == '图片处理') {
					uni.navigateTo({
						url: '/childCont/more_function/more_pic'
					})
				}
				if (val == '视频处理') {
					uni.navigateTo({
						url: '/childCont/more_function/more_video'
					})
				}
				if (val == '文字识别') {
					uni.navigateTo({
						url: '/childPage/vision/textRecognize'
					})
				}
				if (val == '语音合成') {
					uni.navigateTo({
						url: '/childPage/speech/speech_merge'
					})
				}
				if (val == '文档对话') {
					uni.navigateTo({
						url: '/childPage/document/document_chat'
					})
				}
				if (val == '音视频转写') {
					uni.navigateTo({
						url: '/childPage/voice/voice_index'
					})
				}
				if (val == '看图说话') {
					uni.navigateTo({
						url: '/childPage/discern/discern'
					})
				}
				if (val == '彩超宝宝') {
					uni.navigateTo({
						url: '/childPage/doppler/doppler'
					})
				}
				if (val == '多模型对话') {
					uni.navigateTo({
						url: '/childPage/multi_model/multi_model_next'
					})
				}
				if (val == '语音对讲') {
					uni.navigateTo({
						url: '/childPage/voice/voice_page'
					})
				}
				if (val == '虚拟数字人') {
					let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
					if (memberInfo.is_real_name == 1) {
						this.toH5Link()
						return
					}
					uni.navigateTo({
						url: '/childCont/figure/figure'
					})
				}
				if (val == '声音克隆') {
					let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
					if (memberInfo.is_real_name == 1) {
						this.toH5Link()
						return
					}
					uni.navigateTo({
						url: '/childCont/figure/figure_voice'
					})
				}
				if (val == '企业设置') {
					uni.navigateTo({
						url: '/childCont/company/know_list'
					})
				}
				if (val == '知识库') {
					uni.navigateTo({
						url: '/childCont/company/know_list'
					})
				}
				if (val == 'AI企业数字员工') {
					uni.navigateTo({
						url: '/childCont/company/know_list'
					})
				}
				if (val == '成员管理') {
					uni.navigateTo({
						url: '/childCont/company/know_list'
					})
				}
				if (val == '趣闻轶事') {
					uni.setStorageSync('newName', '趣闻轶事')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == '免费资源') {
					uni.setStorageSync('newName', '免费资源')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == '垂直应用') {
					uni.setStorageSync('newName', '垂直应用')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == '算力分享') {
					uni.setStorageSync('newName', '算力分享')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == '大模型') {
					uni.setStorageSync('newName', '大模型')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == 'AI绘画') {
					uni.setStorageSync('newName', 'AI绘画')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == '元宇宙') {
					uni.setStorageSync('newName', '元宇宙')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == 'AIGC') {
					uni.setStorageSync('newName', 'AIGC')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == 'AGI') {
					uni.setStorageSync('newName', 'AGI')
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == 'AI对话') {
					uni.navigateTo({
						url: '/childCont/more_function/more_chat'
					})
				}
				if (val == 'AI绘画') {
					uni.navigateTo({
						url: '/childCont/more_function/more_draw'
					})
				}
				if (val == '提示词大全') {
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == 'AI实验室') {
					uni.navigateTo({
						url: '/childCont/more_function/more_experiment'
					})
				}
				if (val == 'AI工具集') {
					uni.navigateTo({
						url: '/childCont/more_function/assemble'
					})
				}
				if (val == 'AI超级能力') {
					uni.navigateTo({
						url: '/childCont/more_function/more_tool'
					})
				}
				if (val == 'AI数字孪生') {
					uni.setStorageSync('applyName', 'AI数字孪生')
					uni.switchTab({
						url: '/pages/apply/apply'
					})
				}
				if (val == 'AI语音合成') {
					uni.navigateTo({
						url: '/childPage/speech/speech_merge'
					})
				}
				if (val == 'AI直播数字人定制') {
					let memberInfo = JSON.parse(uni.getStorageSync('memberInfo'));
					if (memberInfo.is_real_name == 1) {
						this.toH5Link()
						return
					}
					uni.navigateTo({
						url: '/childCont/figure/figure'
					})
				}
				if (val == '企业AI知识库') {
					uni.navigateTo({
						url: '/childCont/company/know_list'
					})
				}
				if (val == 'AI资讯') {
					uni.navigateTo({
						url: '/childPage/news/information'
					})
				}
				if (val == 'AI商城') {
					uni.navigateTo({
						url: '/pages/user/vip/vip'
					})
				}

				if (val == '商务合作') {
					uni.navigateTo({
						url: '/childPage/cooperate/cooperate'
					})
				}
				if (val == '投诉及建议') {
					uni.navigateTo({
						url: '/childPage/answer/answer'
					})
				}
				if (val == '公告通知') {
					uni.navigateTo({
						url: '/childPage/notice/notice'
					})
				}
				if (val == '版本信息') {
					uni.navigateTo({
						url: '/childPage/version/version'
					})
				}
				if (val == '计费中心') {
					uni.navigateTo({
						url: '/childPage/count/count'
					})
				}
				if (val == '服务商') {
					uni.navigateTo({
						url: '/childPage/facilitator/service'
					})
				}
				if (val == '我要分销') {
					uni.navigateTo({
						url: '/childPage/distribution/distribution'
					})
				}
				if (val == '订单记录') {
					uni.navigateTo({
						url: '/pages/user/order/order'
					})
				}
				if (val == '我要分享') {
					uni.navigateTo({
						url: '/childPage/distribution/share'
					})
				}
				if (val == '卡密兑换') {
					uni.setStorageSync('openKey', 666)
					uni.switchTab({
						url: '/pages/user/user'
					})
				}
				if (val == '个人中心') {
					uni.switchTab({
						url: '/pages/user/user'
					})
				}
				if (val == '音视频转文字') {
					uni.navigateTo({
						url: '/childPage/voice/voice_index'
					})
				}
				if (val == '图生图') {
					uni.setStorageSync('paintingToPic', 2)
					uni.switchTab({
						url: '/pages/painting/painting'
					})
				}
				if (val == '文本识别') {
					uni.navigateTo({
						url: '/childPage/vision/textRecognize'
					})
				}
				if (val == '创作中心') {
					uni.navigateTo({
						url: '/childPage/role/role'
					})
				}

				if (val == '投诉及建议') {
					uni.navigateTo({
						url: '/childPage/answer/answer'
					})
				}
				this.searchKeyword = ''
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
									const that = this
									realNameAuthentication(data).then(res => {
										if (res.code == 20000) {
											// console.log(45610);
											uni.setStorageSync('namelink', res.data.verify_token)
											uni.navigateTo({
												url: '/childPage/news/h5Link',
											})
										} else {
											that.$api.msg(res.msg)
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

			playVideo() {
				this.videoContext_no.stop() //静默视频停止
				this.videoContext.play() //第一段视频开始播放

				this.yLoad = true
			},

			toPlayN() {
				// console.log(this.noLoad,774)
				if (this.noLoad) {
					// console.log('播放第一段视频')
					this.noLoad = false
					this.img_index = 8;
					this.no_index = 9;
					this.y_index = 7;
				}
			},

			// 第一段视频暂停、播放
			playOne() {
				this.isone = !this.isone
				if (this.isone) {
					this.videoContext.pause()
				} else {
					this.videoContext.play()
				}
			},

			toPlayY() {
				if (this.yLoad) {
					// console.log('播放第2段视频')
					this.yLoad = false
					// this.videoContext_no.stop()
					this.img_index = 8;
					this.no_index = 7;
					this.y_index = 9;

				}
			},

			//第一段视频播放完毕自动播放第二段视频
			oneEnd() {
				// console.log('结束了')
				this.videoContext.stop()
				this.videoContext_no.play() //静默视频停止
				this.noLoad = true
			},


			//个人视频方法
			playSpeak() {
				this.getInteract()
				this.videoContext_no.stop() //静默视频停止
				// this.videoContext.play() //第一段视频开始播放
				this.ySpeakLoad = true
				this.is_click = true
				// console.log('播放第一段视频111')
			},

			toSpeakN() {
				// console.log(this.noSpekLoad,66665)
				if (this.noSpekLoad) {
					// console.log('播放第一段视频111')
					this.noSpekLoad = false
					this.img_index = 8;
					this.no_index = 9;
					this.y_index = 7;
				}
			},

			speakOne() {
				this.getInteract()
				this.innerAudioContext.pause(); //点击关闭音频
				this.videoContext.pause() // 点击暂停音频
				this.is_click = true
			},

			toSpeakY() {
				if (this.ySpeakLoad) {
					// console.log('播放第2段视频')
					this.ySpeakLoad = false
					this.img_index = 8;
					this.no_index = 7;
					this.y_index = 9;
					this.play(this.voice_url)
				}
			},

			//点击留言
			message() {
				this.messageShow = true;
				// console.log(this.messageShow)
			},

			messageSubmit() {
				if (this.messageValue == '') {
					return this.$api.msg('请输入留言内容')
				}
				if (this.messagePhone == '') {
					return this.$api.msg('请输入联系方式')
				}
				let info = JSON.parse(uni.getStorageSync('userInfo'))
				let val = {
					'model_id': this.infoSpeak.model_id,
					'user_id': info.user_id,
					'content': this.messageValue,
					'user_mobile': this.messagePhone
				}
				creatMessage(val).then(res => {
					if (res.code == 20000) {
						this.$api.msg('留言成功');
						this.messageShow = false
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('留言失败');
				})
			},

			toPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone
				});
			},

			checkInfo(tip) {
				this.tipShow = true
				this.top_tip = tip
			},

			copyWebsite(val) {
				wx.setClipboardData({
					data: val, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				})
			}

		}
	}
</script>
<style>
	page {
		background: #f6f8fB;
	}
</style>
<style lang="less" scoped>
	.a1,
	.b2 {
		height: 100%;

	}

	.container-fill {
		height: 100vh;
		overflow: hidden;
	}

	.scroll-fullpage {
		transition: all 0.8s;
		height: 100vh;
	}

	.digital {
		width: 100vw;
		position: relative;

		>image {
			width: 100%;
			height: 100%;
		}

		.top-nav {
			// padding: 20rpx 30rpx;
			align-items: center;
			border-radius: 4px;
			// background: rgba(0, 0, 0, 0.60);
			display: inline-block;
			position: absolute;
			left: 20rpx;
			top: 20rpx;
			z-index: 10;
			display: flex;

			>view {
				padding: 20rpx;
				background: rgba(0, 0, 0, 0.60);
			}

			>view {
				display: flex;
				flex-direction: column;
				justify-content: center;

				image {
					width: 32rpx;
					height: 32rpx;
					position: relative;
					left: 50%;
					transform: translate(-50%);
				}

				text {
					color: #FFF;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px;
					/* 166.667% */
				}
			}
		}

		.right-nav {
			position: absolute;
			right: 18rpx;
			top: 50%;
			z-index: 10;
			transform: translate(0%, -50%);

			>view {
				margin-bottom: 16.5rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				image {
					position: relative;
					left: 50%;
					transform: translate(-50%);
					width: 54rpx;
					height: 54rpx;
				}

				text {
					color: #FFF;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px;
					/* 166.667% */
					text-align: center;
				}
			}
		}

		.bottom-tips {
			position: absolute;
			bottom: 0px;
			left: 50%;
			z-index: 10;
			transform: translate(-50%, 0%);
			display: flex;
			flex-direction: column;
			justify-content: center;

			text {
				color: #FFF;
				text-align: center;
				text-shadow: 0px 5px 20px rgba(51, 51, 51, 0.05);
				font-size: 16px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			}

			image {
				margin-top: 32rpx;
				width: 30rpx;
				height: 60rpx;
				position: relative;
				left: 50%;
				transform: translate(-50%);
			}
		}
	}

	.home {
		min-height: 100vh;
		overflow: hidden;
	}

	.head_index {
		width: 100%;
		// height: 100upx;
		position: fixed;
		top: 0upx;
		background: rgba(239, 245, 255, 1);
		z-index: 999;
	}

	.head_cont {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// padding: 0upx 32upx;
	}

	.chat {
		padding: 0upx 30upx;
		// background: #fff;
		display: flex;
		align-items: center;
		flex-direction: column;

		// margin-bottom: 20upx;
		.chat_type {
			display: flex;
			align-items: center;
			// justify-content: space-around;
			flex-wrap: wrap;
			width: 100%;

			.tabs {
				width: 22%;
				background: #E0EEFF;
				border-radius: 6upx;
				padding: 8upx 0;
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
				background: #1F64FF;
				border-radius: 6upx;
				padding: 8upx 0;
				font-style: normal;
				font-weight: 500;
				font-size: 28upx;
				line-height: 150%;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 10upx 1.5%;
			}
		}

		.chat_text {
			width: 100%;
			padding: 10upx;
			border-radius: 12upx;
			background: #FFF;
			box-shadow: 0px 2px 10px 0px rgba(51, 51, 51, 0.10);
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10upx 0;

			/deep/.u-input {
				padding: 12upx;
				width: 80%;
			}

			.chat_btns {
				width: 20%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #1F64FF;
				border-radius: 12upx;
				line-height: 80upx;
				font-style: normal;
				font-weight: 500;
				font-size: 34upx;
				color: #fff;
			}

			.chat_btns:active {
				opacity: 0.5;
			}
		}


	}

	.select {
		padding: 10upx 0;
		background: #fff;

		.select_tab {
			padding: 0 10px;
		}

		.tab_tip {
			padding: 20upx;

			.tip_img {
				width: 56upx;
				height: 56upx;
			}

			.swiper {
				height: 270rpx;
			}

			.grid-text {
				font-size: 26upx;
				color: #333;
				padding: 10rpx 0 20rpx 0rpx;
				/* #ifndef APP-PLUS */
				box-sizing: border-box;
				/* #endif */
			}

			.active-grid-text {
				font-size: 26upx;
				color: #1F64FF;
				padding: 10rpx 0 20rpx 0rpx;
				/* #ifndef APP-PLUS */
				box-sizing: border-box;
				/* #endif */
			}
		}
	}

	.tab_line {
		padding: 20upx 0upx;
		border-bottom: 1upx solid #E6E6E8;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #fff;

		.line {
			display: flex;
			align-items: center;
			line-height: 40upx;
			padding: 10upx;

			.line_text {
				font-style: normal;
				font-weight: 400;
				font-size: 26upx;
				line-height: 40upx;
				color: #333;
			}

			.active_line_text {
				font-style: normal;
				font-weight: 400;
				font-size: 26upx;
				line-height: 40upx;
				color: #1F64FF;
				max-width: 100upx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				display: inline-block;
			}

			.line_img {
				width: 30upx;
				height: 30upx;
				// padding-left: 6upx;
			}
		}
	}

	.cont_mid {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15upx 30upx;
		height: 40px;
	}

	.cont_mids {
		display: flex;
		align-items: center;
		justify-content: space-between;
		// padding: 15upx 30upx;
		box-shadow: 0px -2px 10px rgba(51, 51, 51, 0.05);
		height: 40px;
		background: #fff;
	}

	.mid_btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		border-radius: 12upx;
		line-height: 40px;

	}

	.clear_img {
		width: 40upx;
		height: 40upx;
	}

	.clear_text {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		color: #999;
		margin-left: 10upx;
	}

	.mid_l {
		font-style: normal;
		font-weight: 400;
		font-size: 26upx;
		color: #333;
		/* line-height: 24px; */
	}

	.active_mid_l {
		font-style: normal;
		font-weight: 400;
		font-size: 26upx;
		color: #1F64FF;
		/* line-height: 24px; */
	}

	.mid_img {
		width: 40upx;
		height: 40upx;
		// padding-right: 10upx;
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

	.top {
		width: 80upx;
		height: 80upx;
		position: fixed;
		bottom: 120upx;
		right: 70upx;

		.top_img {
			width: 80upx;
			height: 80upx;
		}
	}

	.top_type {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		padding: 10upx 0 20upx 0;

		.type_l {
			color: #333;
			font-size: 26upx;
			font-weight: 500;
			display: flex;
		}

		.type_m {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.type_r {
			color: #1F64FF;
			font-size: 26upx;
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

	.cont_chat {

		// padding: 30upx 0;
		// margin-bottom: 16upx;
		padding: 20upx 20upx 0 20upx;

		.cont_ul {
			padding: 22upx 0;
			background: #fff;
			border-radius: 14upx;

			.user_tit {
				color: #333;
				font-size: 30upx;
				font-style: normal;
				font-weight: 520;
				line-height: 150%;
				// margin-bottom: 15upx;
			}

			.user_icon {
				display: flex;
				// justify-content: space-around;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				padding: 0 30upx;

				.icon_list {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 10upx 0 20upx 0;
					width: 25%;

					.icon_img {
						width: 90upx;
						height: 90upx;
					}

					.icon_title {
						color: #000;
						font-size: 24upx;
						font-style: normal;
						font-weight: 400;
						line-height: 36upx;
						// margin-top: 12upx;
					}
				}
			}
		}

		.banner {
			padding: 20upx 30upx 0 30upx;

			.banner_img {
				width: 100%;
				height: 200upx;
			}
		}

	}

	.notice {
		padding: 20upx 20upx 0 20upx;
		border-radius: 10upx;
	}

	.back_top {

		.back_cont {
			width: 100%;
			height: 170upx;
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
	}

	.surround-box {
		position: absolute;
		top: 40%;
		left: 45%;
		width: 100upx;
		height: 100upx;
		// margin-left: -12upx;
		// margin-top: -20upx;
		border-radius: 50%;
		// background-color: #000;
	}

	.edit_img {
		width: 45upx;
		height: 45upx;
		position: absolute;
		top: -20upx;
		left: 75%;
		z-index: 10;
	}

	.center-point {
		position: absolute;
		top: 40%;
		left: 45%;
		width: 100upx;
		height: 100upx;
		margin-left: -20upx;
		margin-top: -40upx;
		border-radius: 50%;
		z-index: 99;
		// background-color: #000;
	}

	.circle {
		/* 这里一定要绝对定位，这样位置才能铺开来 */
		position: absolute;
		top: -40upx;
		left: -20upx;
		width: 100upx;
		height: 100upx;
		// line-height: 180upx;
		border-radius: 50%;
		text-align: center;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.circle1 {
		/* rotateZ控制方向，每个元素旋转45度，8个元素刚好360度。translateY控制每个元素距中心点的距离 */
		transform: rotateZ(45deg) translateY(220upx);
	}

	.cont1 {
		transform: rotateZ(-45deg);
		width: 90upx;
		height: 130upx;
	}

	.circle2 {
		transform: rotateZ(90deg) translateY(220upx);
	}

	.cont2 {
		transform: rotateZ(-90deg);
		width: 90upx;
		height: 130upx;
	}

	.circle3 {
		transform: rotateZ(135deg) translateY(220upx);
	}

	.cont3 {
		transform: rotateZ(-135deg);
		width: 90upx;
		height: 130upx;
	}

	.circle4 {
		transform: rotateZ(180deg) translateY(220upx);
	}

	.cont4 {
		transform: rotateZ(-180deg);
		width: 90upx;
		height: 130upx;
	}

	.circle5 {
		transform: rotateZ(225deg) translateY(220upx);
	}

	.cont5 {
		transform: rotateZ(-225deg);
		width: 90upx;
		height: 130upx;
	}

	.circle6 {
		transform: rotateZ(270deg) translateY(220upx);
	}

	.cont6 {
		transform: rotateZ(-270deg);
		width: 90upx;
		height: 130upx;
	}

	.circle7 {
		transform: rotateZ(315deg) translateY(220upx);
	}

	.cont7 {
		transform: rotateZ(-315deg);
		width: 90upx;
		height: 130upx;
	}

	.circle8 {
		transform: rotateZ(360deg) translateY(220upx);
	}

	.cont8 {
		transform: rotateZ(-360deg);
		width: 90upx;
		height: 130upx;
	}

	.cont_title {
		border-radius: 3upx;
		padding: 0upx 5upx;
		font-size: 22upx;
		color: #1F64FF;
		font-weight: 500;
		line-height: 30upx;
		max-width: 100upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.cont_img {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}

	.add_btn {
		position: fixed;
		right: 10upx;
		top: 570upx;
		z-index: 10;

		.add_img {
			width: 100upx;
			height: 100upx;
		}
	}

	.gl_btn {
		position: fixed;
		right: 15upx;
		top: 200upx;
		z-index: 10;

		.add_img {
			width: 100upx;
			height: 100upx;
		}
	}

	.information_header {

		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid #F4F5F9;
		padding-bottom: 10upx;

		.left {
			color: #000;
			font-size: 28upx;
			font-style: normal;
			font-weight: 530;
			line-height: 150%;
		}

		.right {
			display: flex;
			color: #9B9B9B;
			font-size: 28upx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			/* 21px */
		}
	}

	// ai资讯
	.information {
		padding: 15upx 20upx;
		background: #fff;
		margin-top: 20upx;
		border-radius: 10upx;



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
				margin-right: 20upx;

				.content {
					color: #333;
					font-size: 28upx;
					font-style: normal;
					font-weight: 400;
					line-height: 150%;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3; // 控制多行的行数
					-webkit-box-orient: vertical;
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
					margin-bottom: 10upx;

					/* 18px */
					.page_view {
						margin-right: 15upx;
					}
				}

			}

			.right {
				.img {
					width: 200upx;
					height: 120upx;
					border-radius: 10upx;
				}

			}
		}
	}

	.prod {
		padding: 20upx;


		.prod_chat {
			width: calc(100% - 40upx);
			background: #fff;
			border-radius: 10upx;
			padding: 20upx;
			margin-bottom: 20upx;

			.information_header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1upx solid #F4F5F9;
				padding-bottom: 10upx;

				.left {
					color: #000;
					font-size: 28upx;
					font-style: normal;
					font-weight: 530;
					line-height: 150%;
				}

				.right {
					display: flex;
					color: #9B9B9B;
					font-size: 28upx;
					font-style: normal;
					font-weight: 400;
					line-height: 150%;
					/* 21px */
				}
			}

			.chat_title {
				color: #000;
				font-size: 28upx;
				font-style: normal;
				font-weight: 530;
				line-height: 56upx;
				border-bottom: 1upx solid #F4F5F9;
			}

			.chat_cont {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;

				.cont_li {
					width: 48%;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					padding: 20upx 0;

					.li_left {
						width: 92upx;
						height: 92upx;
						display: flex;
						align-items: center;
						justify-content: center;

						.li_img {
							width: 92upx;
							height: 92upx;
						}

						.vis_img {
							width: 46upx;
							height: 46upx;
						}
					}

					.li_right {
						display: flex;
						flex-direction: column;
						padding-left: 10upx;

						.right_t {
							color: #000;
							font-size: 24upx;
							font-style: normal;
							font-weight: 500;
							line-height: 38upx;
						}

						.right_b {
							color: #5A5A5A;
							font-size: 22upx;
							font-style: normal;
							font-weight: 400;
							line-height: 27upx;
						}
					}
				}
			}
		}

		.apply_cont {
			display: flex;
			// justify-content: space-around;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			padding-top: 10upx;

			.cont_uls {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
				width: calc(100% - 20upx);

				.ul_list {
					width: 46%;
					padding: 10upx 0;
				}

				.ul_li {
					padding: 10upx 10upx 0 10upx;
					border-radius: 12upx;
					background: linear-gradient(223deg, #EFF5FF 0%, #DEEAFF 100%);
					width: 100%;

					.li_t {
						color: #33363C;
						font-size: 24upx;
						font-style: normal;
						font-weight: 500;
						line-height: 150%;
					}

					.li_b {
						display: flex;
						align-items: flex-end;
						justify-content: space-between;

						.li_m {
							color: #999;
							font-size: 22upx;
							font-style: normal;
							font-weight: 400;
							line-height: 35upx;
							margin-right: 10upx;
						}

						.li_img {
							width: 60upx;
							height: 50upx;
							// margin-top: -10upx;
						}
					}
				}
			}
		}
	}

	.web {
		width: 100%;
		font-size: 24upx;
		line-height: 40upx;
		color: #1F64FF;
		margin-top: -110upx;
		margin-left: 30upx;
	}

	.manage_info {
		padding: 0 20upx;

		// margin-top: -70upx;
		.info_me {
			width: calc(100% - 40upx);
			height: 300upx;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-bottom: 20upx;
			padding: 20upx;
			border-radius: 16upx;

			.me_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 30upx;

				.title_left {
					color: #000;
					font-size: 28upx;
					font-weight: 530;
					line-height: 50upx;
				}

				.title_right {
					display: flex;

					.right_text {
						padding-right: 8upx;
						color: #9B9B9B;
						font-size: 26upx;
						font-style: normal;
						font-weight: 400;
						line-height: 150%;

					}
				}

			}

			.other_cont {
				display: flex;
				width: 100%;
				// height: 210upx;
				white-space: nowrap;
				overflow-x: scroll;

				.cont_left {
					width: 210upx;
					height: 210upx;
					border-radius: 8upx;
					padding: 10upx;
					position: relative;

					.left_img {
						width: 200upx;
						height: 200upx;
						border-radius: 8upx;
					}

					.left_text {
						width: 200upx;
						height: 50upx;
						border-radius: 0 0 8upx 8upx;
						background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #000 123.81%);
						position: absolute;
						bottom: 0;
						text-align: center;
						line-height: 50upx;
						color: #fff;
						font-size: 26upx;
					}

					.qh_img {
						width: 46upx;
						height: 46upx;
						position: absolute;
						top: 10upx;
						right: 10upx;
					}
				}
			}

			.me_cont {
				display: flex;

				.cont_left {
					width: 200upx;
					height: 200upx;
					border-radius: 8upx;
					position: relative;

					.left_img {
						width: 200upx;
						height: 200upx;
						border-radius: 8upx;
					}

					.left_text {
						width: 200upx;
						height: 50upx;
						border-radius: 0 0 8upx 8upx;
						background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #000 123.81%);
						position: absolute;
						bottom: 0;
						text-align: center;
						line-height: 50upx;
						color: #fff;
						font-size: 26upx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				.cont_right {
					padding: 20upx 0 0 40upx;
					display: flex;
					flex-direction: column;
					flex: 1;

					.cont_btn {
						flex: 1;
						color: #FFF;
						font-size: 28upx;
						line-height: 60upx;
						text-align: center;
						background: #1F64FF;
						border-radius: 10upx;
						margin-bottom: 30upx;
					}

					.cont_btn_b {
						flex: 1;
						color: #1F64FF;
						font-size: 28upx;
						line-height: 60upx;
						text-align: center;
						border-radius: 10upx;
						border: 1upx solid #1F64FF;
					}

					.cont_text {
						color: #9B9B9B;
						font-size: 20upx;
						font-style: normal;
						font-weight: 400;
						line-height: 40upx;
					}
				}
			}
		}
	}

	.top_btn {
		position: fixed;
		bottom: -1000upx;
		right: 20upx;
		z-index: 99;

		.icon_img {
			width: 100upx;
			height: 100upx;
		}
	}

	.head_card {
		padding: 32rpx;
		width: calc(96% - 40upx);
		border-radius: 0 16rpx 16rpx 16rpx;
		background: linear-gradient(161deg, #C0D3FE -29.31%, #FFF 45.69%);
		display: flex;

		.head_log {
			width: 80rpx;
			height: 80rpx;
			fill: #FFF;
			stroke-width: 2rpx;
			stroke: #F9F9F9;
		}

		.head_r {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-left: 14rpx;

			.head_rup {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.rup_title {
					color: #1F64FF;
					font-size: 36rpx;
					font-weight: 700;
					display: flex;
				}
			}

			.head_rb {
				color: #242F49;
				font-size: 24rpx;
				line-height: 150%;
				/* 18px */
			}

			.rup_text {
				display: flex;
				color: #666;
				font-size: 24rpx;
				line-height: 16px;

			}
		}
	}

	.chief {
		width: calc(100%-72rpx);
		padding: 24rpx 32rpx;
		display: flex;
		justify-content: space-between;
		border-radius: 16rpx;
		background: #FFF;

		.chief_item {
			display: flex;
			width: 200rpx;
			height: 148rpx;
			align-items: center;

			.chief_title {
				color: #2C2E30;
				font-size: 26rpx;
				font-weight: 500;
				line-height: 150%;
				/* 19.5px */
			}

			.chief_text {
				color: #767A81;
				font-size: 24rpx;
				line-height: 150%;
				/* 18px */
			}
		}
	}





	.search_pop {
		width: 50%;
		max-height: 360rpx;
		background-color: #FFF;
		box-shadow: 0px 0px 10rpx rgba(0, 0, 0, 0.3);
		padding: 10rpx 40rpx;
		position: absolute;
		left: 60rpx;
		top: 107rpx;

		.search_item {
			color: #999;
			font-size: 30rpx;
			font-weight: 500;
			line-height: 60rpx;
		}
	}

	.message-box {
		width: 450upx;
		padding: 30rpx;
		box-sizing: border-box;
		position: relative;

		.message-close {
			position: absolute;
			right: 30rpx;
			top: 30rpx;
		}

		.message-title {
			margin-bottom: 20rpx;
			text-align: center;
		}

		// .message-box{
		// 	width: 100%;
		// 	text-align: center;
		// 	margin-bottom: 20rpx;
		// }
		.message-content {
			width: 100%;

			.phone_title {
				margin: 20rpx 0rpx;
			}

			.message-submit {
				width: 70%;
				padding: 12rpx 0rpx;
				margin-top: 35rpx;
				background: #1F64FF;
				color: #FFF;
				border-radius: 12rpx;
				text-align: center;
				position: relative;
				left: 50%;
				transform: translate(-50%);
			}
		}
	}

	.video_w {
		width: 100%;
		height: 100vh;
		position: absolute;
	}
</style>