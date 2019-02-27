<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="banner">
			<img :src="img1">
			<p>
				开源、公平、免费 <br/>
				的区块链应用平台
			</p>
		</div>
		<div class="con">
			<div class="Partner">
				<h2 class="cent">为什么选择Gold Ore  ?</h2>
			</div>
			<div class="lunbo">
				<el-carousel :interval="4000" type="card" @change='ddd'>
				    <el-carousel-item v-for="(item,index) in url" :key="index">
						<img :src="item.img1">
					</el-carousel-item>
				  </el-carousel>
			</div>
			<p class="wen">{{wenzia}}</p>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	export default {
		data() {
			return {
				wenzia:'Any block chain technology enthusiasts can apply to be a platform developer.',
				img1: require("@res/imgs/imga/aboutdc.jpg"),
				url: [{
						img1: require("@res/imgs/xmys1.png"),
						id:0,
						wenzib:'任何一名区块链技术爱好者都可以申请成为平台开发者。',
					},
					{
						img1: require("@res/imgs/xmys2.png"),
						id:1,
						wenzib:'Gold Ore将会为开发者提供基础的技术支持和开发环境。',
					},
					{
						img1: require("@res/imgs/xmys3.png"),
						id:2,
						wenzib:'Gold Ore将与开发者一起探索区块链应用的领域，并为之提供帮助。',
					},
					{
						img1: require("@res/imgs/xmys4.png"),
						id:3,
						wenzib:'为激励开发者，Gold Ore同时推出了相应的开发者奖励方案。',
					}
				],
				
			}
		},
		computed: {
			
		},
		created() { 
			this.fanding()
		},
		mounted() { },
		methods: {
			fanding(){
				window.scrollTo(0,0);
			},
			ddd(value){
				console.log(value)
				this.url.map((item) => {
					if(item.id == value) {
						this.wenzia = item.wenzib
					}
				})
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
	.lunbo{
		width: 100%;
		height: 285px;
		margin-bottom: 37px;
	}
	.lunbo img{
		width: 100%;
	}
	.wen{
		text-align: center;
		font-size:16px;
		font-family:ArialMT;
		font-weight:400;
		color:rgba(124,124,139,1);
		line-height:25px;
		margin-bottom: 60px;
	}
</style>