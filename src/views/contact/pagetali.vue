<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="con">
			<div class="pplyfor">
				<div class="choose">
					<p>祝贺您申请成功</p>
				</div>
				<div class="information">
					<div class="information_ti">
						<div class="information_ta">
							<p>我们已经发送成功申请的短信至您的</p>
							<p>电话号：
								<a style="font-size: 24px;color: #000000;">{{rowData.phone}}</a>
							</p>
							<span>未收到短信?</span>
							<div class="bim">
								<el-button type="primary" class='btmz' @click="secondSub(0)">重新发送</el-button>
								<el-button type="primary" class='btmy' @click="secondSub(1)">发送至邮箱</el-button>
							</div>
						</div>
						<b>如果您还有其他疑问，请扫描下方微信官方服务号二维码来与我们的官方客服联系，我们的客服将竭诚为您解答。</b>
						<el-button type="primary" @click="$router.push('/sunfin/index')" round>返回首页</el-button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';



    export default {
		data() {
			return {
				rowData:'',
				
			}
		},
		computed: {

		},
		created() {
			let data = this.$route.query.data ? JSON.parse(this.$route.query.data) : '';
			 this.rowData = data
			this.fanding()
			// console.log('this.rowData ',this.rowData );
		},
		mounted() {},
		methods: {
			fanding() {
				window.scrollTo(0, 0);
			},
            secondSub(type){
			    let url,data={content:this.rowData.context};
			    // console.log('data===',data)
			    // console.log('data==222=',this.rowData)
			    if(type){
                    url='/code/mailCode';
                    data={
                        mail:this.rowData.email,
                        content:this.rowData.context
					}
				}else{
                    url='/code/smsCodeWithContent';
                    data={
                        mobile:this.rowData.phone,
                        content:this.rowData.context
                    }
				}
                console.log('data===222',data)
                ajax({
                    url: url,
                    optionParams: data,
                }).post().then(res => {
                    console.log(res);
                    if(res.code == 200){
                        this.$message.warning(""+res.msg+"")
                    }else{
                        this.$message.warning(""+res.msg+"")
                    }
                })
                    .catch(error => {
                        console.log(error)
                    })
			},
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
	.pplyfor {
		width: 100%;
		height: 900px;
		position: relative;
		margin-top: 100px;
	}
	
	.pplyfor .information {
		width: 1000;
		height: 800px;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(72, 134, 239, 1);
		margin: 0 auto;
	}
	
	.pplyfor .information .information_ti {
		width: 100%;
		overflow: hidden;
		margin: 0 auto;
		padding-top: 126px;
	}
	
	.pplyfor .information .information_ti button {
		width: 359px;
		display: block;
		margin: 0 auto;
	}
	
	.pplyfor .information .information_ti b {
		width: 608px;
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		display: block;
		margin: 0 auto;
		line-height: 25px;
		margin-bottom: 46px;
	}
	
	.pplyfor .information .information_ti .information_ta {
		width: 800px;
		height: 360px;
		margin: 0 auto;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 13px rgba(35, 24, 21, 0.09);
		margin-bottom: 54px;
	}
	
	.pplyfor .information .information_ti .information_ta p {
		width: 495px;
		margin: 0 auto;
		font-size: 24px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		line-height: 45px;
	}
	
	.pplyfor .information .information_ti .information_ta p:first-child {
		padding-top: 50px;
	}
	
	.pplyfor .information .information_ti .information_ta span {
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		width: 495px;
		margin: 0 auto;
		line-height: 30px;
		display: block;
		margin-top: 50px;
	}
	
	.pplyfor .information .information_ti .information_ta .bim {
		width: 495px;
		margin: 0 auto;
		margin-top: 24px;
	}
	
	.pplyfor .information .information_ti .information_ta .bim .btmz {
		width: 160px;
		height: 40px;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(72, 134, 239, 1);
		font-size: 14px;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(72, 134, 239, 1);
		float: left;
	}
	
	.pplyfor .information .information_ti .information_ta .bim .btmy {
		width: 280px;
		height: 40px;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(72, 134, 239, 1);
		font-size: 14px;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(72, 134, 239, 1);
		float: right;
	}
	
	.pplyfor .choose {
		width: 800px;
		height: 100px;
		position: absolute;
		top: -50px;
		left: 145px;
	}
	
	.pplyfor .choose p {
		float: left;
		width: 800px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: white;
		background: #4886EF;
		box-shadow: 0px 0px 13px rgba(35, 24, 21, 0.09);
		cursor: pointer;
		font-size: 28px;
		font-weight: bold;
	}
</style>