<template>
    <div class="app-container calendar-list-container servicePage">
       <div class="banner">
			<img :src="img1">
			<div class="btm" @click="go_url" style="cursor:pointer ;">
				参加活动
			</div>
			<p>计划已启动赶紧<br />加入我们！</p>
		</div>
		<div class="con">
			<div class="Partner">
				<h2 class="cent">合伙人计划</h2>
				<p>经基金会提名的合资格开发者，可成为 Gold Ore 平台合伙人，共同参与平台运营与管理，并获得平台收益权、投票权。</p>
			</div>
			<div class="follows">
				<h2>要求如下：</h2>
				<ul>
					<li>
						<img class="wow flipInX bg-purple animated" src="~@res/imgs/chantua.png"/>
						<p class="follows_one">开发者级别达到蓝星级。</p>
					</li>
					<li>
						<img class="wow flipInX bg-purple animated" src="~@res/imgs/chantub.png"/>
						<p class="follows_two">开发者在平台所发布应用程序不违反所在地区法律。</p>
					</li>
					<li>
						<img class="wow flipInX bg-purple animated" src="~@res/imgs/chantuc.png"/>
						<p class="follows_san">开发者与平台签署长期合作计划。</p>
					</li>
				</ul>
				<span><i>*</i>上述要求必须同时实现。</span>
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
           img1: require("@res/imgs/imga/bannerdb.png"),
        }
    },
    computed: {
    },
    created() {
    	this.fanding()
    },
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
    filters: {
    }
}
</script>
<style lang="less" scoped>
.banner{
 	position: relative;
 }
 .banner .btm:hover{
		background: #2a66cb;
	}
 .banner img{
		width: 100%;
		height: 100%;
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
}
.follows{
	width: 1100px;
	height: 400px;
	background: #EBEEF5;
	margin-top: 43px;
	margin-bottom: 60px;
	box-shadow:2px 4px 24px rgba(62, 73, 92, 0.26);
}
.follows h2{
	text-align: center;
	font-size:18px;
	font-family:ArialMT;
	font-weight:400;
	color:rgba(11,41,117,1);
	line-height:28px;
	padding: 52px 0px 41px 0px;
}
.follows span {
	display: block;
	width: 900px;
	font-size:14px;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:#0B2975;
	line-height:24px;
	margin-left: 81px;
}
.follows span i{
	display: inline-block;
	width: 15px;
	font-size:14px;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:red;
	line-height:24px;
}
.follows ul{
	overflow: hidden;
	margin-bottom: 15px;
}
.follows ul li{
	width: 365px;
	height: 210px;
	float: left;
}
.follows ul li img{
	display: block;
	margin: 0 auto;
	margin-bottom: 15px;
	box-shadow:0px 0px 13px 0px rgba(93,110,148,0.18);
}
.follows ul li p{
	font-size:14px;
	font-family:ArialMT;
	font-weight:400;
	color:rgba(124,124,139,1);
	line-height:25px;
	margin: 0 auto;
}
.follows ul li p.follows_one{
	width:171px;
}
.follows ul li p.follows_two{
	width:269px;
}
.follows ul li p.follows_san{
	width:242px;
}
</style>


