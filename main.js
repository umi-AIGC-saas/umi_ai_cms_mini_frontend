import App from './App'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

const msg = (title, duration = 2000, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

Vue.prototype.$api = {
	msg
};
// 引入对小程序分享的mixin封装
let share = require('./share.js');
Vue.mixin(share)

//正式环境 
 // global.baseUrl = 'https://ai.umi6.com:28083'
 global.loginUrl = 'https://ai.umi6.com:29090'
 global.memberUrl = 'https://ai.umi6.com:28060'
 global.baseImg = 'https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com'
 global.source = 'xcx'
 global.chatUrl = 'https://ai.umi6.com:29876'
 // global.figureUrl = 'https://ai.umi6.com:28065'
 

//测试环境

global.baseUrl = 'http://192.168.31.165:8080'
// global.loginUrl = 'http://192.168.31.165:8082'
// global.memberUrl = 'http://192.168.2.131:8060'
// global.chatUrl = 'http://192.168.1.155:9876'
// global.figureUrl = 'http://192.168.2.131:8065'
global.figureUrl = 'http://192.168.31.165:8999'

try {
	function isPromise(obj) {
		return (
			!!obj &&
			(typeof obj === "object" || typeof obj === "function") &&
			typeof obj.then === "function"
		);
	}

	// 统一 vue2 API Promise 化返回格式与 vue3 保持一致
	uni.addInterceptor({
		returnValue(res) {
			if (!isPromise(res)) {
				return res;
			}
			return new Promise((resolve, reject) => {
				res.then((res) => {
					if (res[0]) {
						reject(res[0]);
					} else {
						resolve(res[1]);
					}
				});
			});
		},
	});
} catch (error) {}

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif