 <template>  
  <div class="footer" :style="footb">
		<div class="footthe">
			<h2>加入我们的社交网络</h2>
			<div class="footthe_left">
				<ul>
					<li @click='Facebook'>
						<i class="hi-icon hi-icon-archive" :style="fffd"></i>
						<p>Facebook</p>
					</li>
					<li @click='Facebooka'>
						<i class="hi-icon hi-icon-archive" :style="niaod"></i>
						<p>Twitter</p>
					</li>
					
				</ul>
			</div>
			<!--<div class="footthe_right">
				<ul>
					<li>
						<span>
							<img src="~@res/imgs/imga/weixin.png"/>
						</span>
						<p>微信公众号</p>
					</li>
					<li style="margin-right: 112px;">
						<span>
							<img src="~@res/imgs/imga/weixin.png"/>
						</span>
						<p>微信官方服务号</p>
					</li>
				</ul>
			</div>-->
		</div>
		<div class="record">
			© 2018 Gold Ore. All Rights Reserved
		</div>
  </div>
</template>

<script>
export default {
  data() {
  	 var footb = require("@res/imgs/footbei.png");
  	 var niaod = require("@res/imgs/niao.png")
  	 var fffd = require("@res/imgs/fff.png")
      return {
      	niao: require("@res/imgs/niao.png"),
      	fff: require("@res/imgs/fff.png"),
      	footb: {
                backgroundImage: "url(" + footb + ")",
            },
            niaod: {
                backgroundImage: "url(" + niaod + ")",
            },
             fffd: {
                backgroundImage: "url(" + fffd + ")",
            },
      }
  },
  computed: {

  },
  created() {
     //  console.log(this.data);
      this.url = [{ url: this.img1 }, { url: this.img1 }];
  },
  mounted() {
  },
  methods: {
	  Facebook(){
		  window.open('https://www.facebook.com/ore.gold.12')
	  },
	   Facebooka(){
		  window.open('https://twitter.com/GoldOre8')
	  }
  },
  filters: {
  }
}
</script>
<style type="less" scoped>
  .footer {
    height:400px;
    width: 100%;
    margin: auto;
    background-size: 100% 100%;
}
.footthe{
    	width: 1100px;
    	height: 337px;
    	margin: 0 auto;
    }
   .footthe h2{
    		width: 100%;
    		line-height: 50px;
    		font-size:36px;
			font-family:Adobe Heiti Std R;
			font-weight:normal;
			color:rgba(255,255,255,1);
			float: left;
			margin-top: 42px;
    	}
    .footthe_left{
    	overflow: hidden;
    	float: left;
    }
   .footthe_left ul li{
   		width: 182px;
   		height: 185px;
   		float: left;
   }
   .footthe_left ul li img{
   	width: 100px;
   	height: 100px;
   	float: left;
   	display: block;
   	margin-left: 41px;
   	margin-top: 39px;
   	margin-bottom: 11px;
   }
   
   
  	
.footthe_left ul li .hi-icon {
	display: inline-block;
	font-size: 0px;
	cursor: pointer;
	margin: 15px 30px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	text-align: center;
	position: relative;
	z-index: 1;
	color: #fff;
		float: left;
   	display: block;
   	margin-left: 41px;
   	margin-top: 39px;
   	margin-bottom: 11px;
}

 .footthe_left ul li .hi-icon:after {
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	content: '';
	-webkit-box-sizing: content-box; 
	-moz-box-sizing: content-box; 
	box-sizing: content-box;
}	
/* Effect 8 */
.footthe_left ul li .hi-icon {
	-webkit-transition: -webkit-transform ease-out 0.1s, background 0.2s;
	-moz-transition: -moz-transform ease-out 0.1s, background 0.2s;
	transition: transform ease-out 0.1s, background 0.2s;
}

.footthe_left ul li .hi-icon:after {
	top: 0;
	left: 0;
	padding: 0;
	z-index: -1;
	box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
	opacity: 0;
	-webkit-transform: scale(0.9);
	-moz-transform: scale(0.9);
	-ms-transform: scale(0.9);
	transform: scale(0.9);
}

.footthe_left ul li .hi-icon:hover {
	background: rgba(255,255,255,0.05);
	-webkit-transform: scale(0.93);
	-moz-transform: scale(0.93);
	-ms-transform: scale(0.93);
	transform: scale(0.93);
	color: #fff;
}

.footthe_left ul li .hi-icon:hover:after {
	-webkit-animation: sonarEffect 1.3s ease-out 75ms;
	-moz-animation: sonarEffect 1.3s ease-out 75ms;
	animation: sonarEffect 1.3s ease-out 75ms;
}

@-webkit-keyframes sonarEffect {
	0% {
		opacity: 0.3;
	}
	40% {
		opacity: 0.5;
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #4886ef, 0 0 0 10px rgba(255,255,255,0.5);
	}
	100% {
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #4886ef, 0 0 0 10px rgba(255,255,255,0.5);
		-webkit-transform: scale(1.5);
		opacity: 0;
	}
}
@-moz-keyframes sonarEffect {
	0% {
		opacity: 0.3;
	}
	40% {
		opacity: 0.5;
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #4886ef, 0 0 0 10px rgba(255,255,255,0.5);
	}
	100% {
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #4886ef, 0 0 0 10px rgba(255,255,255,0.5);
		-moz-transform: scale(1.5);
		opacity: 0;
	}
}
@keyframes sonarEffect {
	0% {
		opacity: 0.3;
	}
	40% {
		opacity: 0.5;
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #4886ef, 0 0 0 10px rgba(255,255,255,0.5);
	}
	100% {
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #4886ef, 0 0 0 10px rgba(255,255,255,0.5);
		transform: scale(1.5);
		opacity: 0;
	}
}
   
   
   
   .footthe_left ul li p{
   	height: 35px;
   	width: 100%;
   	line-height: 35px;
   	text-align: center;
	font-size:16px;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(255,255,255,1);
	float: left;
   }
   
   .footthe_right{
    	overflow: hidden;
    	float: right;
    }
   .footthe_right ul li{
   		width: 204px;
   		height: 197px;
   		float: right;
   }
   .footthe_right ul li span{
   	width: 150px;
   	height: 150px;
   	float: right;
   	display: block;
   	background: #2C4483;
   	margin-right: 26px;
   	margin-bottom: 21px;
   }
   .footthe_right ul li span img{
   	width: 100%;
   	height: 100%;
   	display: block;
   }
   .footthe_right ul li p{
   	height: 35px;
   	width: 100%;
   	line-height: 35px;
   	text-align: center;
	font-size:16px;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(255,255,255,1);
	float: left;
   }
   .record{
   	width: 100%;
   	height: 63px;
   	background:rgba(44,68,131,0.2);
   	line-height: 63px;
   	text-align: center;
   	font-size:16px;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:white;
   }
</style>
