module.exports = {
	data() {
		return {
			page_url: ''
		}
	},
    onLoad() {
		// 设置默认的转发参数
		// share: {
		// 	title: '这是标题'//自定义标题
		// 	path: '/pages/index/index' //默认跳转首页
		// 	imageUrl: ''  //可设置默认分享图，不设置默认截取头部5:4
		// }
		//白名单
		const urlList=[
			'pages/index/index',
		]
		//获取路由信息
		const pages=getCurrentPages()
		// console.log(pages, 663)
		this.page_url = pages[pages.length - 1].$page.fullPath
		
		//获取当前路由
		// let nowPage = pages[pages.length - 1]
		// //判断路由包含‘takeoutPackageA’标识的同时不包含有白名单的路由就禁用
		// if(nowPage.route.search('takeoutPackageA') != -1&&!urlList.includes(nowPage.route)){
		// 	uni.hideShareMenu()
		// }
	},
	//分享好友
	onShareAppMessage() {
		// return this.share
		return {
		    title: 'AI对话、AI绘画、应用助理等一站式AI创新平台!',//自定义标题
		    // path: '/pages/index/index', //默认跳转首页
			path: this.page_url,
		    imageUrl: ''  //可设置默认分享图，不设置默认截取头部5:4
		  };
	},
	// #ifdef MP-WEIXIN
	//朋友圈
	onShareTimeline() {
		return this.share
	}
	// #endif
}
