<template>
	<div class="ggg_user">
		<div class="banner">
			<img :src="img1">
			<div class="btm" @click="go_url" style="cursor:pointer ;">
				参加活动
			</div>
			<p>计划已启动赶紧<br />加入我们！</p>
		</div>
		<div class="con">
			<div class="Partner">
				<h2 class="cent">BCIA 学院计划</h2>
				<p>该项计划为学院优秀学员提供海外技术交流平台，赴美国硅谷等学习最新区块链知识。</p>
				<b>学院导师阵容<i></i></b>
			</div>
			<div class="follows">
				<ul>
					<li class="shan1">
						<i></i>
						<b class="wow rollIn">01</b>
						<img src="~@res/imgs/resia.jpg" />
						<p class="follows_one">常驻导师--为学员提供丰富的教学</p>
					</li>
					<li class="shan2">
						<i></i>
						<b class="wow bounceInDown">02</b>
						<img src="~@res/imgs/resib.jpg" />
						<p class="follows_two">课座教授--理论+实践的应用分享</p>
					</li>
					<li class="shan3">
						<i></i>
						<b class="wow lightSpeedIn">03</b>
						<img src="~@res/imgs/resic.jpg" />
						<p class="follows_san">技术大神--前沿的技术讲解.</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	 import {WOW} from 'wowjs';
	import ajax from '@utils/config';
	export default {
		data() {
			return {
				img1: require("@res/imgs/imga/bannerdc.png"),
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
	
	.Partner P {
		width: 918px;
		font-size: 14px;
		font-family: ArialMT;
		font-weight: 400;
		color: #808080;
		margin: 0 auto;
		line-height: 25px;
	}
	
	.Partner b {
		display: block;
		width: 100%;
		font-size: 16px;
		font-family: Montserrat-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 30px;
		margin-top: 43px;
	}
	
	.Partner b i {
		width: 968px;
		height: 1px;
		background: #EEEEEE;
		display: inline-block;
		float: right;
		margin-top: 16px;
	}
	
	.follows {
		width: 1100px;
		margin-top: 27px;
	}
	
	.follows ul {
		overflow: hidden;
		margin-bottom: 15px;
	}
	
	.follows ul li {
		width: 356px;
		height: 347px;
		float: left;
		margin-right: 15px;
		position: relative;
	}
	
	.follows ul li i {
		width: 356px;
		height: 214px;
		background: rgba(0, 0, 0, 0.5);
		display: block;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.follows ul li.shan1 i{
		animation:mymove 1s;
	    animation-iteration-count:1;
	    animation-fill-mode:forwards;
	    
	    -webkit-animation:mymove 1s;
    -webkit-animation-iteration-count:1;
    -webkit-animation-fill-mode:forwards;
	}
	.follows ul li.shan2 i{
		animation:mymove 1.5s;
	    animation-iteration-count:1;
	    animation-fill-mode:forwards;
	    
	    -webkit-animation:mymove 1.5s;
    -webkit-animation-iteration-count:1;
    -webkit-animation-fill-mode:forwards;
	}
	.follows ul li.shan3 i{
		animation:mymove 2s;
	    animation-iteration-count:1;
	    animation-fill-mode:forwards;
	    
	    -webkit-animation:mymove 2s;
    -webkit-animation-iteration-count:1;
    -webkit-animation-fill-mode:forwards;
	}
	 @keyframes mymove{
        from{top: 0;}
        to{top: -214px;}
    }
	.follows ul li:last-child {
		margin-right: 0px;
	}
	
	.follows ul li b {
		display: block;
		position: absolute;
		width: 58px;
		height: 58px;
		border-radius: 50%;
		box-shadow:0px 0px 9px 0px rgba(0,0,0,0.26);
		background: white;
		top: 75;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		font-size: 16px;
		font-family: MontserratRegular;
		font-weight: 400;
		color: rgba(58, 131, 253, 1);
		line-height: 58px;
		text-align: center;
	}
	
	.follows ul li img {
		width: 356px;
		height: 214px;
		display: block;
		margin: 0 auto;
		margin-bottom: 15px;
		box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.26)
	}
	
	.follows ul li p {
		font-size: 14px;
		font-family: ArialMT;
		font-weight: 400;
		color: rgba(124, 124, 139, 1);
		line-height: 30px;
		margin: 0 auto;
		text-align: center;
		margin-top: 36px;
	}
	.follows ul li p.follows_one {
		width: 290px;
	}
	
	.follows ul li p.follows_two {
		width: 280px;
	}
	
	.follows ul li p.follows_san {
		width: 293px;
	}
</style>