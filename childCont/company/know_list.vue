<template>
	<view>
		<view class="head_index">
			<view class="head_cont">
				<view class="cont_tabs" style="width: 100%; background: #fff;">
					<u-tabs :list="list" lineWidth='50' lineHeight='3' lineColor='#1f64ff'
						:activeStyle='{"color": "#1F64FF","font-size":"26rpx"}' @change='version' :current='active'
						:inactiveStyle='{"font-size":"26rpx"}' :scrollable="false"></u-tabs>
				</view>
			</view>
		</view>
		<!-- 知识库 -->
		<view v-if="active == 0">
			<addKnow ref="know" :companyCode="companyCode"></addKnow>
		</view>
		
		<!-- 员工 -->
		<view v-if="active == 1">
			<addStaff :companyCode="companyCode"></addStaff>
		</view>
		
		<!-- 成员管理 -->
		<view v-if="active == 2">
			<userManage :companyCode="companyCode"></userManage>
		</view>
		
		<!-- 企业设置 -->
		<view v-if="active == 3">
			<companySet :info="info"></companySet>
		</view>
	</view>
</template>

<script>
	
	import addKnow from '../company/add_know.vue'
	import addStaff from '../company/add_staff.vue'
	import userManage from '../company/user_manage.vue'
	import companySet from '../company/company_set.vue'
	export default {
		data() {
			return {
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				active: 0,
				info: '',
				list: [
					{
						name:'知识库'
					},
					{
						name:'AI数字员工'
					},
					{
						name:'成员管理'
					},
					{
						name:'企业设置'
					},
				],
				companyCode: ''
			}
		},
		components: {
			addKnow,
            addStaff,
			userManage,
			companySet
		},
		onLoad(option) {
			console.log(option,'option');
			if(option.item) {
				let list = JSON.parse(option.item)
				console.log(list,6663)
				this.companyCode = list.company_code
				this.info = option.item
			}
			
			if(option.company_code) {
				this.companyCode = option.company_code
			}
           
		   if(option.active) {
			   this.active = option.active
		   }
			
		},
		onShow() {
			// console.log(this.$refs.know,666)
            // this.getKnow()
		},
		methods: {
			
			version(val) {
				// console.log(val,5585)
				this.active = val.index;
				this.page_no = 1;
				this.loadingType = 0;
				// this.getChatList()
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
	page {
		background: #f6f8fb;
	}
	
</style>