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
				<h2 class="cent">海外游学计划</h2>
				<p>该项计划为学院优秀学员提供海外技术交流平台，赴美国硅谷等学习最新区块链知识。</p>
				<img src="~@res/imgs/banaa.png"/>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	import {WOW} from 'wowjs';
	export default {
		data() {
			return {
				img1: require("@res/imgs/imga/bannerdd.png"),
			}
		},
		computed: {

		},
		created() {this.fanding()},
		mounted() {
			this.$nextTick(() => {                    new WOW().init()            })
		},
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
 .banner .btm:hover{
		background: #2a66cb;
	}
 .banner img{
		width: 100%;
		height: 100%;
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