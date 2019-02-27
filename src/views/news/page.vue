<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="con">
			<div class="new">
				<ul>
					<li v-for="itm in news">
						<div class="newt">
							<img :src="itm.thumbnail" />
							<!--<img :src="urla + itm.thumbnail+'?x-oss-process=style/zrf'" />-->
							<h2 @click="$router.push({path:'/sunfin/details', query:{data: JSON.stringify(itm)}})">{{itm.title}}</h2>
							<span>{{itm.times}}</span>
							
							<p>{{itm.summary}}</p>
							<a @click="$router.push({path:'/sunfin/details', query:{data: JSON.stringify(itm)}})">查看</a>
						</div>

					</li>
				</ul>
			</div>
			<div class="fenye">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentPageChange" background layout="prev, pager, next" :total="total" :page-size="4">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	export default {
		data() {
			return {
				params: {
					pageIndex: 1,
					pageSize: 4,
					platform: 'goldore',
				},
				urla: 'https://img.zhaogu168.com/',
				img1: require("@res/imgs/newaa.png"),
				news: [
					//					{
					//						title:'Gold Ore',
					//						modifiedTime:'Aug 31,2018',
					//						thumbnail:require("@res/imgs/newaa.png"),
					//						summary:'Gold Ore - The first open source platform for blockchain technology enthusiasts and developers. Our platform is dedicated to serve and give fun to users and non-users. Gold Ore will provide basic technology support and great development environment. Everyone who is interested in blockchain technology could apply for the platform developers....',
					//					},
					//					{
					//						title:'Gold Ore',
					//						modifiedTime:'Aug 31,2018',
					//						thumbnail:require("@res/imgs/newaa.png"),
					//						summary:'Gold Ore - The first open source platform for blockchain technology enthusiasts and developers. Our platform is dedicated to serve and give fun to users and non-users. Gold Ore will provide basic technology support and great development environment. Everyone who is interested in blockchain technology could apply for the platform developers....',
					//					},
				],
				total: 0,
			}
		},
		computed: {

		},
		created() {
			this.fanding()
			this.getTable()
		},
		mounted() {},
		methods: {
			//			 isOpen (row) {
			//			 	//$router.push({path:'/sunfin/details', query:{data: JSON.stringify(itm)}})
			//	            window.open('#/sunfin/details?data=' + JSON.stringify(row))
			//	        },
			getTable() {
				ajax({
						url: 'news/page',
						optionParams: this.params
					}).post()
					.then(response => {
						console.log(response.total)
						if(response.code == 200) {
							this.news = response.data.records ? response.data.records : []
							this.total = response.data.total
							this.news.map((item) => {
								console.log(item.modifiedTime)
								var timeshi = String(item.pubTime)
								// var timeshi = String(item.modifiedTime)
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
								console.log(times)
								this.$set(item, 'times', times)
							})
						}

					})
					.catch(error => {
						console.log(error)
					})
			},
			fanding() {
				window.scrollTo(0, 0);
			},
			// 改变每一页的条数
			handleSizeChange(val) {
				this.params.pageSize = val;
				this.params.pageIndex = 1;
				this.getTable(); //更新列表
			},
			// 切换页码
			handleCurrentPageChange(val) {
				this.params.pageIndex = val;
				this.getTable(); //更新列表
			},
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
	.con {
		position: relative;
		overflow: hidden;
		margin-bottom: 30px;
		padding-bottom: 60px;
	}
	
	.fenye {
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 999;
	}
	
	.new {
		width: 100%;
		overflow: hidden;
	}
	
	.new ul li {
		width: 530px;
		height: 641px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 2px 2px 13px rgba(35, 24, 21, 0.1);
		float: left;
		margin-top: 20px;
		position: relative;
	}
	
	.new ul li:nth-child(odd) {
		float: left;
		margin-left: 10px;
	}
	
	.new ul li:nth-child(even) {
		float: right;
		margin-right: 10px;
	}
	
	.new ul li:last-child {
		margin-bottom: 10px;
	}
	
	.new ul li .newt {
		width: 400px;
		height: 100%;
		margin: 0 auto;
	}
	
	.new ul li .newt h2 {
		width: 400px;
		height: 100px;
		font-size: 24px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(0, 0, 0, 1);
		line-height: 30px;
		/*padding: 36px 0px 0px 0px;*/
		cursor: pointer;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 将对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3;
		/** 显示的行数 **/
		overflow: hidden;
		
	}
	.new ul li .newt h2:hover{
		color:#4886ef ;
	}
	.new ul li .newt span {
		display: block;
		font-size: 14px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(153, 153, 153, 1);
		line-height: 25px;
		margin-bottom: 25px;
	}
	
	.new ul li .newt img {
		width: 400px;
		height: 200px;
		display: block;
		margin-bottom: 20px;
		margin-top: 30px;
	}
	
	.new ul li .newt p {
		width: 400px;
		height: 150px;
		font-size: 14px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(153, 153, 153, 1);
		line-height: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 将对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 6;
		/** 显示的行数 **/
		overflow: hidden;
		/** 隐藏超出的内容 **/
	}
	
	.new ul li .newt a {
		height: 37px;
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(72, 134, 239, 1);
		line-height: 39px;
		display: inline-block;
		border-bottom: 1px solid rgba(72, 134, 239, 1);
		cursor: pointer;
		position: absolute;
		right: 50px;
		bottom: 60px
	}
</style>