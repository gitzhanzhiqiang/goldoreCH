<template>
	<div class="app-container calendar-list-container ggg_user">
		 <div class="banner">
			<img :src="img1">
			<div class="btm" @click="go_url" style="cursor:pointer ;">
				参加活动
			</div>
			 <p>计划已启动赶紧<br />加入我们！</p>
		</div>
		<div class="con">
			<div class="Partner">
				<h2 class="cent">WIN-WIN 双赢计划</h2>
				<p>
					用户在平台赢取的奖励，以自愿选择为基础，可部分或全部捐献于儿童基金会，为全世界需要帮助的儿童送去关怀。<br />
					区块链智能合约亦可保证所有捐款款项都将会依据合约执行，“拒绝诈捐！
				</p>
				<img src="~@res/imgs/banbb.png"/>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	export default {
		data() {
			return {
				img1: require("@res/imgs/imga/bannerde.png"),
			}
		},
		computed: {

		},
		created() {
			this.fanding()
		},
		mounted() {},
		methods: {
			go_url() {
				this.$store.dispatch('NAVSET', { nav: true });
				this.$router.push({
					path: '/sunfin/contactUs'
				})
			},
			fanding(){
				window.scrollTo(0,0);
			},
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
.banner{
 	position: relative;
 }
 .banner img{
		width: 100%;
		height: 100%;
	}
	.banner .btm:hover{
		background: #2a66cb;
	}
  .banner P{
		font-size:50px;
		font-family:MyriadPro-Regular;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:73px;
		position: absolute;
		left: 399px;
		bottom: 245px;
 }
 .banner .btm{
 		width: 359px;
		height: 56px;
		background: #4886EF;
		border-radius: 28px;
		text-align: center;
		line-height: 56px;
		font-size: 16px;
		font-family: ArialMT;
		font-weight: 400;
		color: white;
		position: absolute;
		left: 399px;
		bottom: 150px;
 }
	.Partner {
	width: 100%;
	overflow: hidden;
}
.Partner P{
	width:918px;
	font-size:14px;
	font-family:ArialMT;
	font-weight:400;
	color:#808080;
	line-height: 25px;
	margin: 0 auto;
	margin-bottom: 43px;
}
.Partner img{
	width: 100%;
	height: 280px;
	margin-bottom: 58px;
}
</style>