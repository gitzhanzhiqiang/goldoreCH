<template>
	<div class="homePage">
		<div class="banner">
			<el-carousel :interval="5000" arrow="always">
				<el-carousel-item v-for="(item,index) in url" :key="index">
					<img :src="item.img1">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="titles">
			<h1>GOLD ORE</h1>
		</div>
		<div class="con">
			<div class="GOLDORE" :style="Learn">
				<div class="Learn">
					<p>我们致力于区块链技术的开发和应用，Gold Ore 作为开源平台，为区块链技术爱好者提供开放平台，开发者们可以在平台上尽情释放才华和想象力，并获得Gold Ore提供的相应技术协助，平台与开发者协同设计具有现实意义的区块链应用。而非开发者也可作为用户享受区块链技术所带来的乐趣，我们的服务面向所有人。</p>
					<span @click="$router.push('/sunfin/aboutUs')" style="cursor: pointer;">了解更多</span>
				</div>
			</div>

		</div>
		<div class="titles">
			<i></i>
			<h1 class="OUR">我们的优势</h1>
			<P style="cursor: pointer;" @click="$router.push('/sunfin/mission')">了解更多 >></P>
		</div>
		<div class="con">
			<div class="Ouradvantages">
				<ul>
					<li v-for="itm in OUR">
						<img :src="itm.oura" class="wow flipInX bg-purple animated" />
						<p>
							<span class="wow slideInUp">{{itm.tite}}</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="titles">
			<i class="Various"></i>
			<h1 class="Various">各种活动等你参加</h1>
		</div>
		<div class="con">
			<div class="Variousa">
				<div class="img" v-on:mouseenter="cleanTime()" v-on:mouseleave="setTime()">
					<img :src="Various.zhang" />
				</div>
				<div class="Various_top" style="overflow: hidden;">
					<ul>
						<li @click="getApplyList(itm)" v-for="(itm,index) in SCHEMES" :key="index" :class="{'actr': itm.status}" v-on:mouseenter="cleanTime(itm)" v-on:mouseleave="setTime()">
							<i></i>
							<span>{{itm.tite}}</span>
						</li>
					</ul>
				</div>
				<div class="Various_bottm">
					<div class="Various_bottm_left" v-on:mouseenter="cleanTime()" v-on:mouseleave="setTime()">
						<img class="xiajian" :src="xiajian" />
						<p>
							{{Various.biaoti}}
						</p>
						<img class="youjian" :src="youjian" />
					</div>
					<div class="Various_bottm_right" :style="ttt" v-on:mouseenter="cleanTime()" v-on:mouseleave="setTime()">
						<div class="Canbe">
							<p v-for="itm in titd">{{itm.tit}}</p>
						</div>
						<a @click="Award()">了解更多 >></a>
					</div>
					<div class="btm" @click="$router.push('/sunfin/contactUs')" style="cursor:pointer ;"> 参加活动
					</div>
				</div>
			</div>
		</div>
		<div class="titles">
			<i class="ct"></i>
		</div>
		<div class="con">
			<div class="NEWSs">
				<el-carousel indicator-position="outside">
					<div class="outsideti">
						<h1 class="OURNEWS">资讯</h1>
						<P style="cursor: pointer;" @click="$router.push('/sunfin/news')">了解更多 >></P>
					</div>
					<el-carousel-item v-for="(item,index) in NEWS" :key=index>
						<div class="newscon">
							<ul>
								<li v-for="items in item.NEWSa">
									<img :src="items.thumbnail" />
									<b @click="$router.push({path:'/sunfin/details', query:{data: JSON.stringify(items)}})" style="cursor: pointer;">{{items.title}}</b>
									<span>{{items.times}}</span>
									<!--<p>{{items.summary}}</p>-->
								</li>
							</ul>
						</div>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	import sowingMap from '@src/components/sowingMap';
	import { WOW } from 'wowjs';
	export default {
		components: {
			sowingMap
		},
		data() {

			var Learn = require("@res/imgs/pppd.jpg");
			var ttt = require("@res/imgs/ttt.png");
			return {
				params: {
					pageIndex: 1,
					pageSize: 12,
					platform: 'goldore',
				},
				Various: {
					biaoti: 'Award planning for developers',
					zhang: require("@res/imgs/zhang.png"),
				},
				url: [{
						img1: require("@res/imgs/bannercc.jpg")
					},
					{
						img1: require("@res/imgs/bannercc.jpg")
					},
					{
						img1: require("@res/imgs/bannercc.jpg")
					}
				],
				OUR: [{
						oura: require("@res/imgs/oura.png"),
						tite: '任何一名区块链技术爱好者都可以申请成为Gold Ore平台的开发者。'
					},
					{
						oura: require("@res/imgs/ourb.png"),
						tite: 'Gold Ore平台将会为开发者提供基础的技术支持和良好的开发环境。'
					},
					{
						oura: require("@res/imgs/ourc.png"),
						tite: 'Gold Ore平台与开发者一起探索区块链应用的领域，并为之提供帮助。'
					},
					{
						oura: require("@res/imgs/ourd.png"),
						tite: '为激励开发者，Gold Ore 推出了相应的开发者奖励方案。'
					},
				],
				SCHEMES: [{
						urla: require("@res/imgs/zhang.png"),
						urlb: require("@res/imgs/ttt.png"),
						tite: '开发者激励计划',
						status: true,
						id: 1,
						tita: [{
								tit: '开发者激励计划 '
							},
							{
								tit: '合伙人计划'
							},
							{
								tit: 'BCIA 学院计划'
							},
							{
								tit: '海外游学计划'
							},
							{
								tit: 'WIN-WIN 双赢计划'
							},
						]
					},
					{
						urla: require("@res/imgs/zhanga.png"),
						urlb: require("@res/imgs/ttta.png"),
						tite: '合伙人计划',
						status: false,
						id: 2,
						tita: [{
								tit: '可奖励Golds币'
							},
							{
								tit: '可加入 Gold Ore平台基金会'
							},
							{
								tit: '可直升BCIA学院计划通道'
							},
							{
								tit: '可提供全额海外留学基金'
							},
							{
								tit: '可享受Gold Ore平台VIP对接服务'
							},
						]
					},
					{
						urla: require("@res/imgs/zhangb.png"),
						urlb: require("@res/imgs/tttb.png"),
						tite: 'BCIA 学院计划',
						status: false,
						id: 3,
						tita: [{
								tit: '为合资格开发者提供技深造机会'
							},
							{
								tit: '一流名校'
							},
							{
								tit: '治学严谨'
							},
							{
								tit: '高质量教学'
							},
							{
								tit: '先进技术'
							},
						]
					},
					{
						urla: require("@res/imgs/zhangc.png"),
						urlb: require("@res/imgs/tttc.png"),
						tite: '海外游学计划',
						status: false,
						id: 4,
						tita: [{
								tit: '提供海外技术交流平台'
							},
							{
								tit: '赴美国硅谷等学习最新区块链知识'
							},

						]
					},
					{
						urla: require("@res/imgs/zhangd.png"),
						urlb: require("@res/imgs/tttd.png"),
						tite: 'WIN-WIN 双赢计划',
						status: false,
						id: 5,
						tita: [{
								tit: '献爱心'
							},
							{
								tit: '用户在平台赢取的奖励可部分或全部自愿捐献于儿童基金会'
							},
							{
								tit: '拒绝诈捐'
							},

						]
					},
				],
				NEWS: [

				],
				urla: 'https://img.zhaogu168.com/',
				xiajian: require("@res/imgs/xiajian.png"),
				youjian: require("@res/imgs/youjian.png"),
				Learn: {
					backgroundImage: "url(" + Learn + ")",
				},
				ttt: {
					backgroundImage: "url(" + ttt + ")",
				},
				titd: [{
						tit: 'Can be awarded the golds'
					},
					{
						tit: 'Can join in Gold Ore platform foundation'
					},
					{
						tit: 'Can take part in Ivy Academy Program'
					},
					{
						tit: 'Can provide full overseas study tour funds'
					},
					{
						tit: 'Can enjoy VIP docking service'
					},
				],
				count: '0',
				vario: '1',
			}
		},
		computed: {},
		created() {
			this.setTime()
			this.fanding()
			this.getTable()
		},
		mounted() {
			new WOW().init()
		},
		methods: {
			getTable() {
				console.log(this.params)
				ajax({
						url: 'news/page',
						optionParams: this.params
					}).post()
					.then(response => {
						if(response.code == 200) {
							let data = response.data.records ? response.data.records : [];
							if(data.length > 4) {
								this.initData(data);
							} else {
								this.NEWS.push({
									NEWSa: data
								});
							}
						} else {

						}
					})
					.catch(error => {
						console.log(error)
					})
			},
			initData(data) {
				let arr = [];
				if(data.length >= 4) {
					arr = data.splice(0, 4);
				} else {
					console.log(data.length)
					arr = data.splice(0, data.length);
				}
				this.NEWS.push({
					NEWSa: arr
				});
				if(data.length != 0) {
					this.initData(data);
				}
				console.log(this.NEWS)
				this.NEWS.map((item) => {
					item.NEWSa.map((itema) => {
						// console.log("2222",itema.modifiedTime)
						var timeshi = String(itema.pubTime)
						var timeshi = parseInt(timeshi.slice(0, 10))
						var d = new Date(timeshi * 1000)
						if((d.getMonth() + 1) == 1) {
							var moth = 'Jan'
						} else if((d.getMonth() + 1) == 2) {
							var moth = 'Feb'
						} else if((d.getMonth() + 1) == 3) {
							var moth = 'Mar'
						} else if((d.getMonth() + 1) == 4) {
							var moth = 'Apr'
						} else if((d.getMonth() + 1) == 5) {
							var moth = 'May'
						} else if((d.getMonth() + 1) == 6) {
							var moth = 'Jun'
						} else if((d.getMonth() + 1) == 7) {
							var moth = 'Jul'
						} else if((d.getMonth() + 1) == 8) {
							var moth = 'Aug'
						} else if((d.getMonth() + 1) == 9) {
							var moth = 'Sep'
						} else if((d.getMonth() + 1) == 10) {
							var moth = 'Oct'
						} else if((d.getMonth() + 1) == 11) {
							var moth = 'Nov'
						} else if((d.getMonth() + 1) == 12) {
							var moth = 'Dec'
						}
						var times = moth + (d.getDate()) + ',' + (d.getFullYear())
						this.$set(itema, 'times', times)
					})
				})
			},
			fanding() {
				window.scrollTo(0, 0);
			},
			Award() {
				console.log(this.vario)
				if(this.vario == 1) {
					this.$router.push('/sunfin/services')
				} else if(this.vario == 2) {
					this.$router.push('/sunfin/trustservice')
				} else if(this.vario == 3) {
					this.$router.push('/sunfin/insuranceService')
				} else if(this.vario == 4) {
					this.$router.push('/sunfin/enterpriseFinancing')
				} else if(this.vario == 5) {
					this.$router.push('/sunfin/situation')
				}
			},
			getApplyList(itm) {
				this.Various.biaoti = itm.tite
				this.Various.zhang = itm.urla
				this.titd = itm.tita
				this.vario = itm.id
				this.ttt = {
					backgroundImage: "url(" + itm.urlb + ")",
				}
				this.count = itm.id
				this.SCHEMES.map((item) => {
					if(item.id == itm.id) {
						item.status = true
					} else {
						item.status = false
					}
				})
			},
			setTime() {
				console.log(this.NEWS)
				//				const TIME_COUNT = 0;
				//				this.count = TIME_COUNT;
				this.timer = setInterval(() => {
					this.count++;
					if(this.count == 6) {
						this.count = 1
					}
					this.SCHEMES.map((item) => {
						if(item.id == this.count) {
							this.getApplyList(item)
						}
					})
				}, 2500)
			},
            cleanTime(itm) {
				clearInterval(this.timer);
				this.Various.biaoti = itm.tite
				this.Various.zhang = itm.urla
				this.titd = itm.tita
				this.vario = itm.id
				this.ttt = {
					backgroundImage: "url(" + itm.urlb + ")",
				}
				this.count = itm.id
				this.SCHEMES.map((item) => {
					if(item.id == itm.id) {
						item.status = true
					} else {
						item.status = false
					}
				})
			}
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.banner {
		position: relative;
	}
	
	.banner .banner_wen {
		width: 1100px;
		height: 600px;
		border: 1px solid #000000;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	
	.banner .banner_wen span {
		font-size: 21px;
		font-family: Montserrat-Regular;
		font-weight: 400;
		color: #000000;
	}
	
	.titles {
		position: relative;
	}
	
	.titles h1 {
		margin: 0 auto;
		text-align: center;
		font-size: 32px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		line-height: 68px;
		margin-top: 43px;
		background: white;
	}
	
	.titles h1.OUR {
		width: 390px;
	}
	
	.titles h1.Various {
		width: 600px;
	}
	
	.titles h1.OURNEWS {
		width: 346px;
	}
	
	.titles i.Various {
		right: 0;
	}
	
	.titles i {
		width: 50%;
		height: 1px;
		display: block;
		position: absolute;
		background: #4886EF;
		top: 23px;
		z-index: -1;
	}
	
	.titles i.ct {
		z-index: 0;
	}
	
	.titles p {
		text-align: center;
		font-size: 16px;
		font-family: ArialMT;
		font-weight: 400;
		text-decoration: underline;
		color: rgba(72, 134, 239, 1);
		line-height: 14px;
		margin-bottom: 41px;
	}
	/*GOLDORE*/
	
	.GOLDORE {
		width: 1100px;
		height: 330px;
		margin: 0 auto;
		z-index: 999;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.GOLDORE .Learn {
		width: 100%;
		height: 330px;
	}
	
	.con .GOLDORE .Learn p {
		width: 964px;
		text-align: left;
		margin: 0 auto;
		color: white;
		font-size: 18px;
		font-family: ArialMT;
		font-weight: 400;
		line-height: 30px;
		padding-top: 60px;
		padding-bottom: 20px;
		text-align: justify;
	}
	
	.con .GOLDORE .Learn span {
		width: 280px;
		height: 46px;
		display: block;
		margin: 0 auto;
		text-align: center;
		line-height: 46px;
		border: 1px solid rgba(255, 255, 255, 1);
		border-radius: 28px;
		font-size: 16px;
		font-family: ArialMT;
		font-weight: 400;
		color: white;
	}
	
	.con .GOLDORE .Learn span:hover {
		border: 1px dashed rgba(255, 255, 255, 1);
		background: rgba(0, 0, 0, 0.15);
	}
	/*Ouradvantages*/
	
	.Ouradvantages {
		width: 100%;
		overflow: hidden;
	}
	
	.Ouradvantages ul li {
		width: 499;
		height: 230px;
		margin-bottom: 49px;
		position: relative;
	}
	
	.Ouradvantages ul li:nth-child(odd) {
		float: left;
	}
	
	.Ouradvantages ul li:nth-child(even) {
		float: right;
		margin-right: 20px;
	}
	
	.Ouradvantages ul li p {
		width: 360px;
		height: 200px;
		background: linear-gradient(-49deg, rgba(28, 118, 253, 1) 0%, rgba(97, 173, 251, 1) 100%);
		float: right;
		margin-top: 30;
		border-radius: 8px;
		box-shadow: 4px 6px 24px rgba(4, 44, 133, 0.45);
	}
	
	.Ouradvantages ul li p span {
		width: 258px;
		display: block;
		font-size: 18px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: white;
		float: right;
		/*word-break: break-all;*/
		margin-right: 25px;
		margin-top: 52px;
	}
	
	.Ouradvantages ul li img {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 8px;
		box-shadow: 8px 8px 20px rgba(4, 44, 133, 0.5);
	}
	/*Various incentive schemes*/
	
	.Variousa {
		width: 100%;
		overflow: hidden;
		margin-top: 77px;
		margin-bottom: 71px;
		position: relative;
	}
	
	.Variousa .Various_top {
		width: 100%;
		height: 321px;
		position: relative;
	}
	
	.Variousa .img {
		width: 650px;
		height: 511px;
		position: absolute;
		left: -42px;
		top: -42px;
		z-index: 0;
	}
	
	.Variousa img {
		width: 625px;
	}
	
	.Variousa .Various_top ul {
		width: 462px;
		overflow: hidden;
		float: right;
	}
	
	.Variousa .Various_top ul li {
		width: 100%;
		height: 26px;
		position: relative;
		margin-bottom: 36px;
		cursor: pointer;
	}
	
	.Variousa .Various_top ul li.actr i {
		width: 100%;
		height: 14px;
		display: block;
		position: absolute;
		z-index: 0;
		top: 8px;
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
		}
	}
	
	.Variousa .Various_top ul li.actr span {
		color: #4886EF;
	}
	
	.Variousa .Various_top ul li span {
		font-size: 20px;
		font-family: Arial-BoldMT;
		font-weight: bold;
		color: #4D4D4D;
		background: white;
		float: left;
		padding-left: 12px;
		padding-right: 15px;
		position: absolute;
		left: 20px;
		top: 0px;
		z-index: 10;
	}
	
	.Variousa .Various_bottm {
		width: 100%;
		height: 341px;
	}
	
	.Variousa .Various_bottm .btm {
		width: 359px;
		height: 56px;
		background: #4886EF;
		border-radius: 28px;
		float: left;
		text-align: center;
		line-height: 56px;
		font-size: 16px;
		font-family: ArialMT;
		font-weight: 400;
		color: white;
	}
	
	.Variousa .Various_bottm .btm:hover {
		background: #2a66cb;
	}
	
	.Variousa .Various_bottm .Various_bottm_left {
		width: 361px;
		height: 286px;
		position: relative;
		float: left;
	}
	
	.Variousa .Various_bottm .Various_bottm_left .xiajian {
		float: left;
		width: 25px;
		height: 13px;
		margin-top: 92px;
		margin-left: 25px;
	}
	
	.Variousa .Various_bottm .Various_bottm_left .youjian {
		position: absolute;
		width: 13px;
		height: 25px;
		right: 43px;
		bottom: 120px;
	}
	
	.Variousa .Various_bottm .Various_bottm_left p {
		width: 210px;
		font-size: 20px;
		font-family: Arial-BoldMT;
		font-weight: bold;
		color: #4886EF;
		line-height: 30px;
		/*word-break: break-all;*/
		float: right;
		margin-right: 97px;
		margin-top: 134px;
	}
	
	.Variousa .Various_bottm .Various_bottm_right {
		width: 735px;
		height: 286px;
		background-size: 100% 100%;
		float: left;
		position: relative;
	}
	
	.Variousa .Various_bottm .Various_bottm_right .Canbe {
		width: 580px;
		margin: 0 auto;
		padding-top: 25px;
	}
	
	.Variousa .Various_bottm .Various_bottm_right a {
		font-size: 16px;
		font-family: ArialMT;
		font-weight: 400;
		text-decoration: underline;
		color: rgba(255, 255, 255, 1);
		line-height: 14px;
		cursor: pointer;
		position: absolute;
		right: 50px;
		bottom: 30px;
	}
	
	.Variousa .Various_bottm .Various_bottm_right .Canbe p {
		width: 580px;
		font-size: 20px;
		font-family: ArialMT;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 40px;
	}
	
	.NEWSs {
		width: 1100px;
		height: 600px;
	}
	
	.NEWSs .newscon {
		width: 100%;
		overflow: hidden;
	}
	
	.NEWSs .newscon ul li {
		width: 262px;
		height: 375px;
		float: left;
		margin-right: 17px;
		box-shadow: 6px 7px 6px rgba(4, 0, 0, 0.05);
		margin-bottom: 72px;
		overflow: hidden;
	}
	
	.NEWSs .newscon ul li:last-child {
		margin-right: 0px;
	}
	
	.NEWSs .newscon ul li img {
		width: 100%;
		height: 208px;
	}
	
	.NEWSs .newscon ul li b,
	.NEWSs .newscon ul li span,
	.NEWSs .newscon ul li p {
		width: 230px;
		overflow: hidden;
		display: block;
	}
	
	.NEWSs .newscon ul li b {
		width: 230px;
		font-size: 20px;
		font-family: MyriadPro-Regular;
		font-weight: 400;
		color: rgba(0, 0, 0, 1);
		line-height: 30px;
		margin: 0 auto;
		margin-top: 25px;
		height: 95px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 将对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3;
		/** 显示的行数 **/
		overflow: hidden;
		/** 隐藏超出的内容 **/
	}
	.NEWSs .newscon ul li b:hover{
		color:#4886ef;
	}
	.NEWSs .newscon ul li span {
		font-size: 14px;
		font-family: MyriadPro-Regular;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		line-height: 30px;
		margin: 0 auto;
		margin-top: 2px;
		margin-bottom: 10px;
	}
	
	.NEWSs .newscon ul li p {
		width: 230px;
		height: 50px;
		font-size: 14px;
		font-family: MyriadPro-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 25px;
		overflow: hidden;
	}
</style>