<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="con">
			<div class="new_details">
				<div class="new_detaila">
					<h2>{{detaila.title}}</h2>
					<span>{{rowData.times}}</span>
					<p v-html = 'detaila.content'></p>
					<img :src="detaila.thumbnail"/>
					<p style="margin-bottom: 50px;">{{detaila.summary}}</p>
				</div>
			</div>
			<div class="xia">
				<p class="lefts" style="cursor: pointer;" @click="getTable('pre')">上一页</p>
				<i></i>
				<p class="rights" style="cursor: pointer;" @click="getTable('next')">下一页</p>
			</div>
		</div>
		
	</div>
</template>
<script>
	import ajax from '@utils/config';
	export default {
		data() {
			return {
				img1: require("@res/imgs/nue.png"),
				rowData:'',
				detaila:'',
				preId:'',
				nextId:'',
				urla:'https://img.zhaogu168.com/',
			}
		},
		computed: {
				
		},
		created() {
			 let data = this.$route.query.data ? JSON.parse(this.$route.query.data) : '';
			//  console.log("data===",data)
			 this.rowData = data
			this.fanding()
			this.getTable()
		},
		mounted() {},
		methods: {

			getTable(num) {
				console.log("num===",num)
				let bmun = ''
				if(num == 'pre'){
					console.log(this.preId)
					bmun = this.preId
				}else if(num == 'next'){
					console.log(this.nextId)
					bmun = this.nextId
				}else{
					bmun = this.rowData.id
				}
				console.log(bmun)
				
				ajax({
					url: 'news/getWithPreNextId',
					optionParams: {
						id:bmun,
						platform:'goldore'
					}
				}).post()
				.then(response => {
					console.log(response)
					this.detaila = response.data ? response.data : {}
					this.preId = response.data.preId ? response.data.preId : ''
					this.nextId = response.data.nextId ? response.data.nextId : ''
				})
				.catch(error => {
					console.log(error)
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
.new_details{
	width: 1100px;
	overflow: hidden;
	box-shadow:0px 0px 13px rgba(35,24,21,0.09);
	margin-bottom: 42px;
}
.new_details .new_detaila{
	width: 935px;
	overflow: hidden;
	margin: 0 auto;
}
.new_details .new_detaila h2{
	font-size:36px;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(0,0,0,1);
	line-height:40px;
	padding-top: 40px;
}
.new_details .new_detaila span{
	display: block;
	font-size:14px;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(153,153,153,1);
	line-height:20px;
	margin-top: 19px;
	margin-bottom: 40px;
}
.new_details .new_detaila p{
	font-size:14px;
font-family:Adobe Heiti Std R;
font-weight:normal;
color:rgba(153,153,153,1);
line-height: 25px;
}
.new_details .new_detaila img{
	/*width: 623px;
	height: 240px;*/
	display: block;
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 40px;
}
.xia{
	width: 100%;
	overflow: hidden;
	margin-bottom: 59px;
}
.xia p{
	width:220px;
	height:38px;
	background:rgba(255,255,255,1);
	border:1px solid rgba(204,204,204,1);
	text-align: center;
	line-height: 38px;
	font-size:14px;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:rgba(153,153,153,1);
}
.xia i{
	width: 580px;
	height: 1px;
	background: #E6E6E6;
	display: inline-block;
	float: left;
	margin-left: 39px;
	margin-top: 19px;
}
.xia p.lefts{
	float: left;
}
.xia p.rights{
	float: right;
}
</style>