<template>
	<view>
		<web-view :src='src'></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: '',
				src: '',
			}
		},
		onLoad(option) {
			// console.log(option, 123123);
			const backUrl = encodeURIComponent(
				'https://umidevelop-9gwei2bib8719a10-1324164528.tcloudbaseapp.com/jump-mp.html?sign=705b5f81acbc34e01f9c1f302552597c&t=1708846905'
			)
			const failUrl = encodeURIComponent(
				'https://umidevelop-9gwei2bib8719a10-1324164528.tcloudbaseapp.com/fail.html?sign=562fd56251514f9c4ec50305b33f69e4&t=1708847257'
				)
			this.src = 'https://h5-faceverify-plus.baidu.com/face/print/?token=' + uni.getStorageSync('namelink') +
				'&successUrl=' + backUrl + '&failedUrl=' + failUrl
			// this.src = 'https://ai.umi6.com/h5/#/childCont/realName/realName?link=' + option.link
			// this.src = 'http://192.168.1.60:8083/#/childCont/realName/realName?link=' + option.link
			// this.src = 'http://192.168.1.60:8083/#/childCont/realName/realName?token=' + JSON.parse(uni.getStorageSync('userInfo')).token
			console.log(this.src);
			// 	'&token=' + token
		},

	}
</script>

<style>
</style>