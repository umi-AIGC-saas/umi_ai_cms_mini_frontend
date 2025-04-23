<script>
	
	export default {
		
		onLaunch: function() {
			console.log('App Launch')
			// uni.login({
			// 	provider: 'weixin',
			// 	success: function(loginRes) {
			// 		let code = loginRes.code;
			// 		console.log(code, 778);
			// 	}
			// });
			// console.log(uni.getStorageSync('userInfo'))
			//检测小程序是否更新
			const updateManager = uni.getUpdateManager();
					
			updateManager.onCheckForUpdate(function (res) {
			  // 请求完新版本信息的回调
			  // console.log(res.hasUpdate,148);
			  if(res.hasUpdate) {
				  updateManager.onUpdateReady(function (res) {
					uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，请重启应用',
					showCancel: false,
					success(res) {
					  if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					  }
					}
					});
						
				  });
				  
				  updateManager.onUpdateFailed(function (res) {
						// 新的版本下载失败
					  console.log('download error')
					  uni.showModal({
						title: '提示',
						content: '新版小程序下载失败\n请自行退出程序，手动卸载本程序，再运行',
						confirmText: "知道了"
					  });
				  });
				  
				  uni.setStorageSync("userInfo", null);
				  // uni.setStorageSync('openid', '');
				  uni.redirectTo({
				  	url: '/pages/login/login',
				  })
			  } else {
				 
			  }
			});
			
			if (uni.getStorageSync('userInfo') == null || uni.getStorageSync('userInfo') == 'null'||uni.getStorageSync('userInfo') == '') {
				console.log(999,'首次进来');
				this.guessLogin()
			} else {
	
				// let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				// console.log(userInfo.role, 589);
				// if (userInfo.role == 'guess') {
				// 	uni.navigateTo({
				// 		url: '/pages/login/login',
				// 	})
				// } else {
					uni.switchTab({
						url: '/pages/index/index'
					});
				// }
			}
			
			//查询是否以获取openid
			console.log(uni.getStorageSync('openid'), 456)
			if (uni.getStorageSync('openid') == null || uni.getStorageSync('openid') == 'null'||uni.getStorageSync('openid') == '') {
			    this.getOpenid()
			}
			
			uni.setInnerAudioOption({obeyMuteSwitch: false});// 兼容ios,音频播放无声音问题

		},
		onShow: function() {
			console.log('App Show');

			// #ifdef H5
			// uni.hideTabBar({});
			// #endif
			
		

		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			// 游客登录
			guessLogin() {
				let headers = {
					'content-type': 'application/x-www-form-urlencoded',
					'source': global.source
				}

				let val = {
					time: new Date().getTime()
				};
				uni.request({
					url: global.loginUrl + '/api/user/create_temp_user',
					data: val,
					header: headers,
					method: 'POST',
					success: (res) => {
						// console.log(res,'进来了嘛');
						if (res.data.code == 20000) {
							console.log(res.data, 741);
							uni.setStorageSync("userInfo", JSON.stringify(res.data.data));
							uni.setStorageSync("avatarUrl", res.data.data.avatar_url);
							uni.switchTab({
								url: '/pages/index/index',
							})
						} else {
							console.log('登录失败')
						}
					}
				});
			},
			
			// 获取openid
			getOpenid() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						let headers = {
							'content-type': 'application/x-www-form-urlencoded',
							'source': global.source
						}
						let val = { code }
						uni.request({
							url: global.loginUrl + '/api/user/get_open_id',
							data: val,
							header: headers,
							method: 'POST',
							success: (res) => {
								// console.log(res,'进来了嘛');
								if (res.data.code == 20000) {
									// console.log(res.data, 741);
									uni.setStorageSync("openid", res.data.data);
									
								} else {
									console.log('获取openid失败')
								}
							}
						});
					}
				});
				
			}
		}
	}
</script>

<style lang='scss'>
	/*每个页面公共css */
	/*每个页面公共css */
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "static/css/index-app.css";

	page {
		background: #f6f8fb;
		/* background: #eff5ff; */
		/* background: linear-gradient(to bottom, rgba(239, 245, 255, 1), rgba(246, 248, 251, 1)) */
	}
</style>