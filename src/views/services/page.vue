<template>
	<div class="app-container calendar-list-container servicePage">
		<div class="banner">
			<img :src="img1">
			<div class="btm" @click="go_url()" style="cursor:pointer ;"> 参加活动
			</div>
			<p>计划已启动赶紧<br />加入我们！</p>
		</div>
		<div class="con">
			<div class="Partner">
				<h2 class="cent">开发者激励计划</h2>
				<ul>
					<li v-for="itm in Partner" :class="{'actr': itm.status}" @click="getApplyList(itm)" class="wow flipInX bg-purple animated" v-on:mouseenter="cleanTime()" v-on:mouseleave="setTime()">
						<img :src="itm.img" />
						<img class="yin" src="~@res/imgs/imga/touyinga.png" />
						<span>{{itm.Developers}}</span>
						<h1>{{itm.time}}</h1>
						<p>{{itm.grade}}</p>
					</li>
				</ul>
			</div>
			<div class="Blue">
				<h4>{{titia}}</h4>
				<p>{{titib}}</p>
			</div>
			<div class="Noted">
				<h4>注</h4>
				<p>Ore 指数为开发程序应用的下载量及token交易量的加权平均值，经系统AI判定为无作为开发者不计入评级。</p>
				<p>钻石级及以上开发者均提升优先级，享 Gold Ore 平台VIP对接服务，及基金会提名合伙人资格。</p>

			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	import { WOW } from 'wowjs';
	export default {
		data() {
			return {
				titia: '蓝星级:',
				titib: '奖励十万Golds，获得基金会合伙人提名资格，待资质审核之后可加入 Gold Ore 平台基金会；直升BCIA学院计划通道，若学员在BCIA计划中成绩优秀，Gold Ore 平台将会提供全额海外留学基金。',
				img1: require("@res/imgs/imga/bannerda.png"),
				xing: require("@res/imgs/xinga.png"),
				Partner: [{
						img: require("@res/imgs/xinga.png"),
						time: '01',
						grade: '蓝星级',
						Developers: 'Ore指数前10% 的开发者',
						status: true,
						id: 1,
						titia: '蓝星级:',
						titib: '奖励十万Golds，获得基金会合伙人提名资格，待资质审核之后可加入 Gold Ore 平台基金会；直升BCIA学院计划通道，若学员在BCIA计划中成绩优秀，Gold Ore 平台将会提供全额海外留学基金。',
					},
					{
						img: require("@res/imgs/xinga.png"),
						time: '02',
						grade: '铂金级',
						Developers: 'Ore指数前10%-30%  的开发者',
						status: false,
						id: 2,
						titia: '铂金级:',
						titib: '奖励五万Golds，直升BCIA学院计划通道，若学员在BCIA计划中成绩优秀，Gold Ore 平台将会提供全额海外留学基金。',
					},
					{
						img: require("@res/imgs/xinga.png"),
						time: '03',
						grade: '钻石级',
						Developers: 'Ore指数前30%-50%  的开发者',
						status: false,
						id: 3,
						titia: '钻石级:',
						titib: '奖励一万Golds，直升BCIA学院计划通道，若学员在BCIA计划中成绩优秀，Gold Ore 平台将会提供海外留学基金。.',
					},
					{
						img: require("@res/imgs/xinga.png"),
						time: '04',
						grade: '黄金级',
						Developers: 'Ore指数前50%-70%  的开发者',
						status: false,
						id: 4,
						titia: '黄金级:',
						titib: '奖励五千Golds，BCIA学院入学提名.',
					},
					{
						img: require("@res/imgs/xinga.png"),
						time: '05',
						grade: '青铜级',
						Developers: 'Ore指数前70%-90%  的开发者',
						status: false,
						id: 5,
						titia: '青铜级:',
						titib: 'A奖励一千Golds.',
					},
				],
				count: '1',
			}
		},
		computed: {},
		created() {
			this.setTime()
			this.fanding()
		},
		mounted() {
           new WOW().init()
		},
		methods: {
			go_url() {
				this.$store.dispatch('NAVSET', {
					nav: true
				});
				this.$router.push({
					path: '/sunfin/contactUs'
				})
			},
			fanding() {
				window.scrollTo(0, 0);
			},
			setTime() {
				//				const TIME_COUNT = 0;
				//				this.count = TIME_COUNT;
				this.timer = setInterval(() => {
					this.count++;
					if(this.count == 6) {
						this.count = 1
					}
					this.Partner.map((item) => {
						if(item.id == this.count) {
							this.getApplyList(item)
						}
					})
				}, 4000)
			},
			getApplyList(itm) {
				this.count = itm.id
				this.titia = itm.titia
				this.titib = itm.titib
				this.Partner.map((item) => {
					if(item.id == itm.id) {
						item.status = true
					} else {
						item.status = false
					}
				})
			},
			cleanTime() {
				clearInterval(this.timer);
			}
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
.con{
	margin-top: 30px;
}
	.banner {
		position: relative;
	}
	
	.banner .btm {
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
	.banner .btm:hover{
		background: #2a66cb;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	.banner P {
		font-size: 50px;
		font-family: MyriadPro-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 73px;
		position: absolute;
		left: 399px;
		bottom: 245px;
	}
	
	.Partner {
		width: 100%;
		height: 271px;
	}
	
	.Partner h2 {
		text-align: center;
		font-size: 32px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(17, 17, 17, 1);
		margin: 60px 0px 40px 0px;
	}
	
	.Partner ul {
		width: 875px;
		margin: 0 auto;
	}
	
	.Partner ul li {
		width: 151px;
		height: 151px;
		float: left;
		position: relative;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
		margin-right: 30px;
		cursor: pointer;
	}
	
	.Partner ul li:last-child {
		margin-right: 0px;
	}
	
	.Partner ul li.actr {
		animation: mymove 2s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
		-webkit-animation: mymove 2s;
		-webkit-animation-iteration-count: 1;
		-webkit-animation-fill-mode: forwards;
	}
	
	@keyframes mymove {
		100% {
			background: #4886EF;
			box-shadow: 0px 0px 9px 0px rgba(22, 77, 172, 0.43);
		}
	}
	
	.Partner ul li.actr img {
		display: block;
	}
	
	.Partner ul li.actr span {
		display: block;
	}
	
	.Partner ul li.actr h1 {
		display: none;
	}
	
	.Partner ul li.actr p {
		display: none;
	}
	
	.Partner ul li img {
		position: absolute;
		top: -65;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		display: none;
		z-index: 2;
	}
	
	.Partner ul li img.yin {
		top: -49;
		left: 42;
		right: 0;
		bottom: 0;
		z-index: 0;
	}
	
	.Partner ul li span {
		width: 137px;
		overflow: hidden;
		display: block;
		text-align: center;
		margin: 0 auto;
		font-size: 12px;
		font-family: MontserratRegular;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 17px;
		margin-top: 81px;
		display: none;
	}
	
	.Partner ul li h1 {
		text-align: center;
		font-size: 38px;
		font-family: DINAlternate-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		padding-top: 40px;
	}
	
	.Partner ul li p {
		font-size: 14px;
		font-family: Montserrat-Regular;
		font-weight: 400;
		color: rgba(72, 134, 239, 1);
		text-align: center;
	}
	/*Blue*/
	
	.Blue {
		width: 875px;
		height: 120px;
		overflow-y: auto;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	
	.Blue h4 {
		font-size: 16px;
		font-family: Arial-BoldMT;
		font-weight: bold;
		color: rgba(72, 134, 239, 1);
		line-height: 24px;
	}
	
	.Blue p {
		font-size: 14px;
		font-family: ArialMT;
		font-weight: 400;
		color: rgba(124, 124, 139, 1);
		line-height: 25px;
	}
	/*Noted*/
	
	.Noted {
		width: 761px;
		height: 237px;
		background: #EBEEF5;
		margin: 0 auto;
		margin-bottom: 60px;
		box-shadow: 2px 4px 30px 0px rgba(0, 0, 0, 0.2);
	}
	
	.Noted h4 {
		text-align: center;
		font-size: 18px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(51, 51, 51, 1);
		line-height: 24px;
		padding: 24px 0px 15px 0px;
	}
	
	.Noted p {
		width: 626px;
		margin: 0 auto;
		font-size: 14px;
		font-family: ArialMT;
		font-weight: 400;
		color: rgba(128, 126, 126, 1);
		line-height: 25px;
	}
</style>