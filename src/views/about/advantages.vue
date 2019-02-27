<template>
    <div class="ggg_user">
       <div class="banner">
			<img :src="img1">
		   <p>
			   开源、公平、免费 <br/>
			   的区块链应用平台
		   </p>
		</div>
		<div class="con">
			<div class="Partner">
				<h2 class="cent">项目背景?</h2>
				<p>区块链本身是一个技术驱动的行业，目前底层平台的开发上，各个项目都有自己的方向，但是仍然不够丰富，除此之外这些项目的方向正确性也无法验证。绝大部分与区块链结合的商业场景仍然处于探索期，金融领域天然适配区块链的特性使得支付清算已经率先进入高速发展期，而社交、溯源等还处于市场启动期，伴随底层平台的快速发展，大量的垂直行业应用将会快速度过低谷，迎来高速发展。
					伴随着资金的流入，更多的人才也开始流入区块链行业，人才的流入又吸引着更多的资金注入，这将促使接下来一大批有实力的团队加入到底层平台的开发中去，同时对于行业理解深刻的人将从产业角度出发结合区块链与现有商业模式。尽管基础设施不完善，但 是应用层与产业结合的问题将会暴露出来，不仅为之后大规模化商业应用奠定基础，也可促进适应行业的底层平台的开发。</p>
			</div>
			<div class="follows">
				<ul>
					<li>
						<b>	
							<span class="time">2697</span>
							<span class="Tril">亿</span>
						</b>
						<img src="~@res/imgs/imga/touying.png"/>
						<p style="padding-top: 200px;">2018年全球AI市场规模</p>
					</li>
					<li>
						<b>	
							<span class="time">55<a>%</a></span>
						</b>
						<img src="~@res/imgs/imga/touying.png"/>
						<p style="padding-top: 200px;">未来将达到55%的复合年增长率</p>
					</li>
					<li>
						<b>	
							<span class="time">10</span>
							<span class="Tril">亿</span>
						</b>
						<img src="~@res/imgs/imga/touying.png"/>
						<p style="padding-top: 200px;">加密数字货币和区块链市场
							规模可达10万亿美元</p>
					</li>
				</ul>
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
        	img1: require("@res/imgs/imga/aboutdb.jpg"),
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
		bottom: 220px;
 }
.Partner {
	width: 100%;
	overflow: hidden;
	margin-bottom: 40px;
}
.Partner P{
	width:918px;
	font-size:16px;
	font-family:ArialMT;
	font-weight:400;
	color:#808080;
	line-height: 25px;
	margin: 0 auto;
}
.follows{
	width: 1100px;
	overflow: hidden;
	margin-bottom: 60px;
}

.follows ul{
	overflow: hidden;
	margin-bottom: 15px;
}
.follows ul li{
	width: 365px;
	height: 300px;
	float: left;
	position: relative;
}
.follows ul li b{
	width: 163px;
	height: 163px;
	background: url(images/qiu.png) no-repeat;
	background-size: 100% 100%;
	display: block;
	margin: 0 auto;
	visibility: visible;
    animation-duration: 2s;
    animation-delay: 300ms;
    animation-iteration-count: infinite;
    animation-name: pulse;
    position: absolute;	
    z-index: 22;
    left: 95px;
    top: 14px;
}
.follows ul li b .time{
	display: block;
	font-size:50px;
	font-family:PingFangSC-Semibold;
	font-weight:600;
	color:rgba(255,255,255,1);
	text-align: center;
	padding-top: 40px;
}
.follows ul li b .time a{
	font-size:24px;
	font-family:PingFangSC-Semibold;
	font-weight:600;
	color:rgba(255,255,255,1);
	line-height:14px;
	margin-left: 5px;
}
.follows ul li b .Tril{
	font-size:19px;
	font-family:PingFangSC-Light;
	font-weight:300;
	color:rgba(255,255,255,1);
	line-height:30px;
	display: block;
	text-align: center;
}
.follows ul li p{
	font-size:16px;
	font-family:ArialMT;
	font-weight:400;
	color:rgba(124,124,139,1);
	line-height:25px;
	margin: 0 auto;
	text-align: center;
}
.follows ul li img{
		display: block;
		width:227px;
		height:225px;
		position: absolute;
		z-index: 0;
	    top: 30px;
	    left: 130px;
	}
</style>


