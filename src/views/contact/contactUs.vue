<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="con">
			<div class="pplyfor">
				<div class="choose">
					<p :class="{'touzi':minga}" @click="">填写申请信息</p>
					<p :class="{'touzi':mingb}" @click="">报名项目</p>
				</div>
				<div class="information">
					<div class="information_ti" v-show="biaodana">
						<el-form :model="params" :rules="rules" ref="params" label-width="100px" class="demo-ruleForm">
							<ul>
								<li>
									<p>姓 名:</p>
									<el-form-item label="" prop="fullName">
										<el-input v-model="params.fullName" placeholder="请输入"></el-input>
									</el-form-item>
								</li>
								<li>
									<p>性 别:</p>
									<el-form-item label="" prop="sex">
										<el-select v-model="params.sex" placeholder="请选择">
											<el-option v-for="item in optionsa" :key="item.value" :label="item.label" :value="item.value">
											</el-option>
										</el-select>
									</el-form-item>
								</li>
								<li>
									<p>国 籍:</p>
									<el-form-item label="" prop="nationality">
										<el-select v-model="params.nationality" placeholder="请选择" @change='guojia'>
											<el-option v-for="item in selectData" :key="item[0]" :label="item[0]" :value="item[0]">
											</el-option>
										</el-select>
									</el-form-item>
								</li>
								<li>
									<p>电话号码:</p>
									<a>{{diqu}}</a>
									<el-form-item label="" prop="phone">
										<el-input class='quhao' v-model="params.phone" placeholder="请输入" maxlength='11'></el-input>
									</el-form-item>
									<b class="getcode" v-show="isshow" @click="getphonecodeId()">获 取</b>
									<b class="getcode" v-show="!isshow">{{count}}&nbsp;&nbsp;S</b>
									<!--<b>ACQUIRE</b>-->
								</li>
								<li>
									<p>验证码:</p>
									<el-form-item label="" prop="smsCode">
										<el-input v-model="params.smsCode" maxlength="6"   placeholder="请输入"></el-input>
									</el-form-item>
								</li>
								<li>
									<p>邮 箱:</p>
									<el-form-item label="" prop="email">
										<el-input v-model="params.email" placeholder="请输入"></el-input>
									</el-form-item>

								</li>
							</ul>
						</el-form>
						<el-button type="primary" @click="submitForm('params')" round>下一步</el-button>
					</div>
					<div class="information_ta" v-show="biaodanb">
						<p>可多选</p>
						<ul>
							<el-checkbox-group v-model="params.regActivityArr">
								<li v-for="itm in selectDataa">
									<el-checkbox :label="itm.id" :key="itm.id">{{itm.label}}</el-checkbox>
								</li>
							</el-checkbox-group>
						</ul>
						<el-button type="primary" :loading="loading" @click="getTable" round>提 交</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
    import {validate} from '@src/utils/validation';
	export default {
		data() {
            var validaEmail = (rule, value, callback) => {
                if (!validate.validaEmail(value)) {
                    callback(new Error('邮箱地址格式不正确'));
                    return false;
                }
                callback();
            };
            var validatPhone = (rule, value, callback) => {
                if (!validate.validatPhone(value)) {
                    callback(new Error('手机号码格式不正确'));
                    return false;
                }
                callback();
            };
			return {
				loading:false,
				params: {
					fullName: '', //全名
					sex: '', //性别
					nationality: '', //国籍
					phone: '', //手机号码
					smsCode: '', //验证码
					email: '', //email
					regActivityArr: [],
					regActivityArrname: [],
				},
				diqu:'',
				count: '',
				isshow: true,
				selectDataa: [{
					label: '开发者激励计划',
					id: 1
				}, {
					label: '合伙人计划',
					id: 2
				}, {
					label: 'BAIA学院计划',
					id: 3
				}, {
					label: '海外游学计划',
					id: 4
				}, {
					label: 'WIN-WIN 双赢计划',
					id: 5
				}, ],
				checked: true,
				rules: {
					fullName: [{
						required: true,
						message: '*输入不能为空',
						trigger: 'blur'
					}, ],
					sex: [{
						required: true,
						message: '*输入不能为空',
						trigger: 'change'
					}, ],
					nationality: [{
						required: true,
						message: '*输入不能为空',
						trigger: 'change'
					}, ],
					phone: [
					    {required: true,
						message: '*输入不能为空',
						trigger: 'blur'},
					],
					smsCode: [{
						required: true,
						message: '*输入不能为空',
						trigger: 'blur'
					}],
                    email: [{
                        required: true,
                        message: '*输入不能为空',
                        trigger: 'blur'
                    },
					{trigger: 'blur', validator: validaEmail},],
				},

				minga: true,
				mingb: false,
				biaodana: true,
				biaodanb: false,
				optionsa: [{
					value: '1',
					label: '男'
				}, {
					value: '2',
					label: '女'
				}, {
					value: '0',
					label: '未知'
				}, ],

				selectData: [
					["China (中国)", "cn", "86"],
					["Hong Kong (香港)", "hk", "852"],
					["Singapore", "sg", "65"],
					["Afghanistan (‫افغانستان‬‎)", "af", "93"],
					["Albania (Shqipëri)", "al", "355"],
					["Algeria (‫الجزائر‬‎)", "dz", "213"],
					["American Samoa", "as", "1684"],
					["Andorra", "ad", "376"],
					["Angola", "ao", "244"],
					["Anguilla", "ai", "1264"],
					["Antigua and Barbuda", "ag", "1268"],
					["Argentina", "ar", "54"],
					["Armenia (Հայաստան)", "am", "374"],
					["Aruba", "aw", "297"],
					["Australia", "au", "61", 0],
					["Austria (Österreich)", "at", "43"],
					["Azerbaijan (Azərbaycan)", "az", "994"],
					["Bahamas", "bs", "1242"],
					["Bahrain (‫البحرين‬‎)", "bh", "973"],
					["Bangladesh (বাংলাদেশ)", "bd", "880"],
					["Barbados", "bb", "1246"],
					["Belarus (Беларусь)", "by", "375"],
					["Belgium (België)", "be", "32"],
					["Belize", "bz", "501"],
					["Benin (Bénin)", "bj", "229"],
					["Bermuda", "bm", "1441"],
					["Bhutan (འབྲུག)", "bt", "975"],
					["Bolivia", "bo", "591"],
					["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
					["Botswana", "bw", "267"],
					["Brazil (Brasil)", "br", "55"],
					["British Indian Ocean Territory", "io", "246"],
					["British Virgin Islands", "vg", "1284"],
					["Brunei", "bn", "673"],
					["Bulgaria (България)", "bg", "359"],
					["Burkina Faso", "bf", "226"],
					["Burundi (Uburundi)", "bi", "257"],
					["Cambodia (កម្ពុជា)", "kh", "855"],
					["Cameroon (Cameroun)", "cm", "237"],
					["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
					["Cape Verde (Kabu Verdi)", "cv", "238"],
					["Caribbean Netherlands", "bq", "599", 1],
					["Cayman Islands", "ky", "1345"],
					["Central African Republic (République centrafricaine)", "cf", "236"],
					["Chad (Tchad)", "td", "235"],
					["Chile", "cl", "56"],
					["Christmas Island", "cx", "61", 2],
					["Cocos (Keeling) Islands", "cc", "61", 1],
					["Colombia", "co", "57"],
					["Comoros (‫جزر القمر‬‎)", "km", "269"],
					["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
					["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
					["Cook Islands", "ck", "682"],
					["Costa Rica", "cr", "506"],
					["Côte d’Ivoire", "ci", "225"],
					["Croatia (Hrvatska)", "hr", "385"],
					["Cuba", "cu", "53"],
					["Curaçao", "cw", "599", 0],
					["Cyprus (Κύπρος)", "cy", "357"],
					["Czech Republic (Česká republika)", "cz", "420"],
					["Denmark (Danmark)", "dk", "45"],
					["Djibouti", "dj", "253"],
					["Dominica", "dm", "1767"],
					["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
					["Ecuador", "ec", "593"],
					["Egypt (‫مصر‬‎)", "eg", "20"],
					["El Salvador", "sv", "503"],
					["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
					["Eritrea", "er", "291"],
					["Estonia (Eesti)", "ee", "372"],
					["Ethiopia", "et", "251"],
					["Falkland Islands (Islas Malvinas)", "fk", "500"],
					["Faroe Islands (Føroyar)", "fo", "298"],
					["Fiji", "fj", "679"],
					["Finland (Suomi)", "fi", "358", 0],
					["France", "fr", "33"],
					["French Guiana (Guyane française)", "gf", "594"],
					["French Polynesia (Polynésie française)", "pf", "689"],
					["Gabon", "ga", "241"],
					["Gambia", "gm", "220"],
					["Georgia (საქართველო)", "ge", "995"],
					["Germany (Deutschland)", "de", "49"],
					["Ghana (Gaana)", "gh", "233"],
					["Gibraltar", "gi", "350"],
					["Greece (Ελλάδα)", "gr", "30"],
					["Greenland (Kalaallit Nunaat)", "gl", "299"],
					["Grenada", "gd", "1473"],
					["Guadeloupe", "gp", "590", 0],
					["Guam", "gu", "1671"],
					["Guatemala", "gt", "502"],
					["Guernsey", "gg", "44", 1],
					["Guinea (Guinée)", "gn", "224"],
					["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
					["Guyana", "gy", "592"],
					["Haiti", "ht", "509"],
					["Honduras", "hn", "504"],
					["Hungary (Magyarország)", "hu", "36"],
					["Iceland (Ísland)", "is", "354"],
					["India (भारत)", "in", "91"],
					["Indonesia", "id", "62"],
					["Iran (‫ایران‬‎)", "ir", "98"],
					["Iraq (‫العراق‬‎)", "iq", "964"],
					["Ireland", "ie", "353"],
					["Isle of Man", "im", "44", 2],
					["Israel (‫ישראל‬‎)", "il", "972"],
					["Italy (Italia)", "it", "39", 0],
					["Jamaica", "jm", "1876"],
					["Japan (日本)", "jp", "81"],
					["Jersey", "je", "44", 3],
					["Jordan (‫الأردن‬‎)", "jo", "962"],
					["Kazakhstan (Казахстан)", "kz", "7", 1],
					["Kenya", "ke", "254"],
					["Kiribati", "ki", "686"],
					["Kosovo", "xk", "383"],
					["Kuwait (‫الكويت‬‎)", "kw", "965"],
					["Kyrgyzstan (Кыргызстан)", "kg", "996"],
					["Laos (ລາວ)", "la", "856"],
					["Latvia (Latvija)", "lv", "371"],
					["Lebanon (‫لبنان‬‎)", "lb", "961"],
					["Lesotho", "ls", "266"],
					["Liberia", "lr", "231"],
					["Libya (‫ليبيا‬‎)", "ly", "218"],
					["Liechtenstein", "li", "423"],
					["Lithuania (Lietuva)", "lt", "370"],
					["Luxembourg", "lu", "352"],
					["Macau (澳門)", "mo", "853"],
					["Macedonia (FYROM) (Македонија)", "mk", "389"],
					["Madagascar (Madagasikara)", "mg", "261"],
					["Malawi", "mw", "265"],
					["Malaysia", "my", "60"],
					["Maldives", "mv", "960"],
					["Mali", "ml", "223"],
					["Malta", "mt", "356"],
					["Marshall Islands", "mh", "692"],
					["Martinique", "mq", "596"],
					["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
					["Mauritius (Moris)", "mu", "230"],
					["Mayotte", "yt", "262", 1],
					["Mexico (México)", "mx", "52"],
					["Micronesia", "fm", "691"],
					["Moldova (Republica Moldova)", "md", "373"],
					["Monaco", "mc", "377"],
					["Mongolia (Монгол)", "mn", "976"],
					["Montenegro (Crna Gora)", "me", "382"],
					["Montserrat", "ms", "1664"],
					["Morocco (‫المغرب‬‎)", "ma", "212", 0],
					["Mozambique (Moçambique)", "mz", "258"],
					["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
					["Namibia (Namibië)", "na", "264"],
					["Nauru", "nr", "674"],
					["Nepal (नेपाल)", "np", "977"],
					["Netherlands (Nederland)", "nl", "31"],
					["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
					["New Zealand", "nz", "64"],
					["Nicaragua", "ni", "505"],
					["Niger (Nijar)", "ne", "227"],
					["Nigeria", "ng", "234"],
					["Niue", "nu", "683"],
					["Norfolk Island", "nf", "672"],
					["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
					["Northern Mariana Islands", "mp", "1670"],
					["Norway (Norge)", "no", "47", 0],
					["Oman (‫عُمان‬‎)", "om", "968"],
					["Pakistan (‫پاکستان‬‎)", "pk", "92"],
					["Palau", "pw", "680"],
					["Palestine (‫فلسطين‬‎)", "ps", "970"],
					["Panama (Panamá)", "pa", "507"],
					["Papua New Guinea", "pg", "675"],
					["Paraguay", "py", "595"],
					["Peru (Perú)", "pe", "51"],
					["Philippines", "ph", "63"],
					["Poland (Polska)", "pl", "48"],
					["Portugal", "pt", "351"],
					["Puerto Rico", "pr", "1", 3, ["787", "939"]],
					["Qatar (‫قطر‬‎)", "qa", "974"],
					["Réunion (La Réunion)", "re", "262", 0],
					["Romania (România)", "ro", "40"],
					["Russia (Россия)", "ru", "7", 0],
					["Rwanda", "rw", "250"],
					["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1],
					["Saint Helena", "sh", "290"],
					["Saint Kitts and Nevis", "kn", "1869"],
					["Saint Lucia", "lc", "1758"],
					["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
					["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
					["Saint Vincent and the Grenadines", "vc", "1784"],
					["Samoa", "ws", "685"],
					["San Marino", "sm", "378"],
					["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
					["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
					["Senegal (Sénégal)", "sn", "221"],
					["Serbia (Србија)", "rs", "381"],
					["Seychelles", "sc", "248"],
					["Sierra Leone", "sl", "232"],
					["Sint Maarten", "sx", "1721"],
					["Slovakia (Slovensko)", "sk", "421"],
					["Slovenia (Slovenija)", "si", "386"],
					["Solomon Islands", "sb", "677"],
					["Somalia (Soomaaliya)", "so", "252"],
					["South Africa", "za", "27"],
					["South Korea (대한민국)", "kr", "82"],
					["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
					["Spain (España)", "es", "34"],
					["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
					["Sudan (‫السودان‬‎)", "sd", "249"],
					["Suriname", "sr", "597"],
					["Svalbard and Jan Mayen", "sj", "47", 1],
					["Swaziland", "sz", "268"],
					["Sweden (Sverige)", "se", "46"],
					["Switzerland (Schweiz)", "ch", "41"],
					["Syria (‫سوريا‬‎)", "sy", "963"],
					["Taiwan (台灣)", "tw", "886"],
					["Tajikistan", "tj", "992"],
					["Tanzania", "tz", "255"],
					["Thailand (ไทย)", "th", "66"],
					["Timor-Leste", "tl", "670"],
					["Togo", "tg", "228"],
					["Tokelau", "tk", "690"],
					["Tonga", "to", "676"],
					["Trinidad and Tobago", "tt", "1868"],
					["Tunisia (‫تونس‬‎)", "tn", "216"],
					["Turkey (Türkiye)", "tr", "90"],
					["Turkmenistan", "tm", "993"],
					["Turks and Caicos Islands", "tc", "1649"],
					["Tuvalu", "tv", "688"],
					["U.S. Virgin Islands", "vi", "1340"],
					["Uganda", "ug", "256"],
					["Ukraine (Україна)", "ua", "380"],
					["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
					["United Kingdom", "gb", "44", 0],
					["United States", "us", "1", 0],
					["Uruguay", "uy", "598"],
					["Uzbekistan (Oʻzbekiston)", "uz", "998"],
					["Vanuatu", "vu", "678"],
					["Vatican City (Città del Vaticano)", "va", "39", 1],
					["Venezuela", "ve", "58"],
					["Vietnam (Việt Nam)", "vn", "84"],
					["Wallis and Futuna", "wf", "681"],
					["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
					["Yemen (‫اليمن‬‎)", "ye", "967"],
					["Zambia", "zm", "260"],
					["Zimbabwe", "zw", "263"],
					["Åland Islands", "ax", "358", 1]
				],
			}
		},
		computed: {

		},
		created() {
			this.fanding()
		},
		mounted() {},
		methods: {
			guojia(value) {
				console.log(value)
				this.selectData.map((item) => {
					if(value == item[0]){
						console.log(item[2])
						this.diqu = item[2]
					}
				})
			},
			getphonecodeId() {
				if(!this.params.nationality) {
					this.$message.warning('请选择国籍')
					return
				}
				if(!this.params.phone) {
					this.$message.warning('请输入手机号码')
					return
				}
				if(!validate.validatPhone(this.params.phone)) {
					this.$message.warning('请输入手机号码格式不正确')
					return
	
				}
				
				//this.diqu + 
				var phone = this.params.phone
				// console.log(phone)
				const TIME_COUNT = 60;
				if(!this.timer) {
					this.count = TIME_COUNT;
					this.isshow = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.isshow = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
				ajax({
						url: "code/smsCode",
						optionParams: {
							mobile: phone,
							type:'verCode',
						},
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
			getTable() {
				this.loading = true
				// this.params.phone = this.diqu + this.params.phone
				// this.params.regActivityArr.map((item)=>{
                 //    this.params.regActivityArrname.push(this.selectDataa[(item-1)].label)
				// })
				console.log('this.params',this.params.regActivityArrname.join(","))

                // regActivityArrname
				ajax({
						url: '/tApplyActivity/add',
						optionParams: this.params
					}).post()
					.then(response => {
						console.log(response)
						if(response.code == 200){
							this.loading = false;
                            this.params.context= response.data;
							this.$router.push({path:'/sunfin/pagetali', query:{data: JSON.stringify(this.params)}})
						}else{
							this.$message.warning(""+response.msg+"")
							this.loading = false
						}
					})
					.catch(error => {
						console.log(error)
						this.loading = false
					})
			},
			fanding() {
				window.scrollTo(0, 0);
			},
			submitForm(formName) {
				console.log(formName)
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('submit!');
						this.minga = false
						this.biaodana = false

						this.mingb = true
						this.biaodanb = true
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			tab(num) {
				if(num == 'minga') {
					this.mingb = false
					this.biaodanb = false

					this.minga = true
					this.biaodana = true
				} else {
					this.minga = false
					this.biaodana = false

					this.mingb = true
					this.biaodanb = true
				}
			},
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
	.pplyfor {
		width: 100%;
		height: 990px;
		position: relative;
		margin-top: 100px;
	}
	
	.pplyfor .information {
		width: 1000;
		height: 930px;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(72, 134, 239, 1);
		margin: 0 auto;
	}
	
	.pplyfor .information .information_ti,
	.pplyfor .information .information_ta {
		width: 680px;
		overflow: hidden;
		margin: 0 auto;
		padding-top: 126px;
	}
	
	.pplyfor .information .information_ti button,
	.pplyfor .information .information_ta button {
		width: 359px;
		display: block;
		margin: 0 auto;
		margin-top: 20px;
	}
	
	.pplyfor .information .information_ti ul {
		overflow: hidden;
		margin-bottom: 20px;
	}
	
	.pplyfor .information .information_ti ul li {
		margin-bottom: 40px;
		position: relative;
	}
	
	.pplyfor .information .information_ti ul li b {
		width: 120px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(72, 134, 239, 1);
		display: block;
		position: absolute;
		right: 20px;
		top: 39px;
		font-size: 16px;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(72, 134, 239, 1);
		cursor: pointer;
	}
	.pplyfor .information .information_ti ul li a{
		    width: 60px;
		    height: 35px;
		    line-height: 38px;
		    text-align: center;
		    background: #ffffff;
		    display: block;
		    position: absolute;
		    left: 4px;
		    top: 37px;
		    font-size: 16px;
		    font-family: MicrosoftYaHei-Bold;
		    font-weight: bold;
		    color: #4886ef;
		    z-index: 999;
	}
	.pplyfor .information .information_ti ul li p {
		width: 100%;
		line-height: 30px;
		font-size: 16px;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(0, 0, 0, 1);
		margin-bottom: 5px;
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
		width: 400px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 16px;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: #000000;
		background: white;
		box-shadow: 0px 0px 13px rgba(35, 24, 21, 0.09);
		cursor: pointer;
	}
	
	.pplyfor .choose p.touzi {
		background: #4886EF;
		color: white;
	}
	
	.pplyfor .information .information_ta ul {
		width: 325px;
		margin: 0 auto;
		margin-bottom: 60px;
	}
	
	.pplyfor .information .information_ta ul li {
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin-bottom: 40px;
	}
	
	.pplyfor .information .information_ta p {
		font-size: 24px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		margin-bottom: 50px;
		text-align: center;
	}
</style>