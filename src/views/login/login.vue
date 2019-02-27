<template>
     <div class="login-container" :style="">
          <header-nav></header-nav>
          <div class="login"></div>

          <div class="login-div">
               <div class="login-for">

                    <!--忘记密码开始-->
                    <div class="login-wangji wangji" v-show='wangji'>
                        <div class="checksafaQA"  @click="reserpassword" >
                            <div class="btn">换一批问题</div>
                          </div>
                         <div>
                              <p>{{wenyi}}</p>
                              <input type="text" v-model="alertFrom.statusa0" placeholder="请输入您设置的答案" />
                         </div>
                         <div>
                              <p>{{wener}}</p>
                              <input type="text" v-model="alertFrom.statusa1" placeholder="请输入您设置的答案" />
                         </div>

                         <p>重置登录密码：</p>
                         <input type="password" v-model="alter.newPwd" maxlength="16"  placeholder="登录密码由8-16位字母和数字组成" />
                         <button @click='xiugai'>确认</button>
                         <div class="login-for-div" style="cursor: pointer;" @click='forgotpassworda()'>记起密码，立即登录！</div>
                    </div>
                    <!--忘记密码结束-->

                    <!--忘记密码开始-->
                    <div class="login-wangji wangji" v-show='yonghu'>
                         <h1 style="font-size: 18px;color: white;">重置密码</h1>
                         <p>用户名：</p>
                         <input type="text" v-model="username" maxlength="20" placeholder="请输入用户名" />
                         <button @click='reserpassword'>下一步</button>
                         <div class="login-for-div" style="cursor: pointer;" @click='forgotpassword()'>记起密码，立即登录！</div>
                    </div>
                    <!--忘记密码结束-->

                    <!--登录开始-->
                    <div class="login-wangji zhuche" v-show='dengru'>
                         <h3>欢迎加入Gold Ore</h3>
                         <p>用户名：</p>
                         <input type="text" v-model="params.username" maxlength="20" placeholder="请输入用户名" />
                         <p>图形验证码：</p>
                         <div>
                              <input type="text" v-model="params.captcha" maxlength="4" placeholder="请输入图形验证码" style="width: 165px;" />
                              <div class="yanzhenma" @click='getTable'>
                                   <img id="valideImg" src="">
                              </div>
                         </div>
                         <p>登录密码：</p>
                         <input type="password" v-model="params.pwd" placeholder="请输入登录密码" maxlength="16" @keyup.enter='regis'/>
                         <button @click='regis'>登录</button>
                         <p>
                              <span style="float: left; margin-left: 0px;cursor: pointer;" @click='forgotpassword()'>忘记密码</span>
                              <span style="float: right;cursor: pointer;" @click="$router.push('/registered')">没有账户，立即注册！</span>
                         </p>
                    </div>
                    <!--登录结束-->

               </div>
          </div>

          <!--登录底部开始-->
          <div class="login-di">
               <div class="login-di-div">
                    <h3>FOLLOW US</h3>
                    <div class="login-img">
                         <img src="~@res/imgs/face-book.png" />
                    </div>
                    <div class="login-img">
                         <img src="~@res/imgs/twitter.png" />
                    </div>
               </div>
          </div>
          <!--登录底部结束-->

          <div class="login-di-zi">2018GoldOre.All Right Reserved</div>

     </div>
</template>

<script>
import ajax from '@utils/config';
import store from '@src/store';
import baseURL from '$lib/utils/baseURL';
import handleRouter from '@src/utils/handleRouter';
import headerNav from '../layout/header.vue';
import { validate } from '@common/validation';
export default {
     name: 'login',
     components: {
          headerNav
     },
     data() {
          return {
               username: '',//重置密码的名字
               dengru: true,//登入
               wangji: false,//安全
               yonghu: false,
               params: {
                    username: '',
                    pwd: '',
                    captcha: '',
                    randNum: '',
               },
               wentiit: [],
               wenyi: '',
               wener: '',
               alertFrom: {
                    statusa0: '',
                    statusa1: '',
               },
               alter: {
                    username: '',
                    newPwd: '',
                    safes: [{
                         answer: '',
                         id: '',
                    }, {
                         answer: '',
                         id: '',
                    }]
               },
          }
     },
     mounted() { },
     created() {
          this.getTable()
     },
     computed: {},
     methods: {
          forgotpassword() {
               this.params = {
                    username: '',
                    pwd: '',
                    captcha: '',
                    randNum: '',
               }
               this.username = ''
               this.alter = {
                    username: '',
                    newPwd: '',
                    safes: [{
                         answer: '',
                         id: '',
                    }, {
                         answer: '',
                         id: '',
                    }]
               }
               this.alertFrom = {
                    statusa0: '',
                    statusa1: '',
               }
               if (this.dengru == true) {
                    this.yonghu = true
                    this.dengru = false
               } else if (this.dengru == false) {
                    this.yonghu = false
                    this.dengru = true
               }
          },
          forgotpassworda() {
               this.params = {
                    username: '',
                    pwd: '',
                    captcha: '',
                    randNum: '',
               }
               if (this.dengru == false) {
                    this.wangji = false
                    this.dengru = true
               }
          },
          getTable() {
               var numbt = Math.random().toString(16).substring(2)
               var timestamp = (new Date()).getTime()
               var numbd = timestamp + numbt
               this.params.randNum = numbd
               console.log(numbd)
               let xmlhttp;
               xmlhttp = new XMLHttpRequest();
               xmlhttp.open("GET", baseURL() + "tAppUser/captcha?randNum=" + numbd, true);
               xmlhttp.responseType = "blob";
               //xmlhttp.setRequestHeader("token", window.localStorage.getItem("token"));
               let that = this;
               xmlhttp.onload = function() {
                    if (this.status == 200) {
                         let blob = this.response;
                         let img = document.getElementById("valideImg");
                         img.src = window.URL.createObjectURL(blob);
                    }
               }
               xmlhttp.send();
          },
          regis() {
            //   console.log("222")
               if (this.params.username == '') {
                    this.$message.warning("请输入用户名获取验证码")
                    return false
               }
               if (this.params.captcha == '') {
                    this.$message.warning("请输入验证码")
                    return false
               }
               if (this.params.pwd == '') {
                    this.$message.warning("请输入密码")
                    return false
               }
            
               ajax({
                    url: 'tAppUser/login',
                    optionParams: this.params
               }).post()
                    .then(response => {
                         console.log(response)
                         if (response.code == 200) {
                              this.anquan = true;
                              this.$Cookies.set('token', response.data.token);
                              this.$message.success("" + response.message + "")
                              if (response.data.isSafe == 0) {
                                   this.$confirm('登录需设置安全问题?', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                   }).then(() => {
                                        this.$router.push({
                                             path: '/registered',
                                             query: {
                                                  data: JSON.stringify(response.data)
                                             }
                                        })
                                   }).catch(() => {
                                   });
                              } else {
                                   this.$Cookies.set('name', response.data.username);
                                   this.$store.dispatch('SETUSER', { user: response.data.username });
                                   this.$router.push('/sunfin/index')
                              }
                         } else {
                              this.$message.warning("" + response.message + "")
                              this.loading = false
                         }
                    })
                    .catch(error => {
                         console.log(error)
                         this.loading = false
                    })
          },
          //重置密码
          reserpassword() {
               if (this.username == '') {
                    this.$message.warning("请输入用户名")
                    return false
               }
               ajax({
                    url: 'tAppUser/findQuestion',
                    optionParams: {
                         username: this.username
                    }
               }).post()
                    .then(response => {
                         console.log(response)
                         if (response.code == 200) {
                            //   this.$message.success("" + response.message + "")
                              this.yonghu = false
                              this.wangji = true
                              var wentiit = response.data.safes ? response.data.safes : [];
                              console.log(wentiit)
                              this.wenyi = wentiit[0].question
                              this.wener = wentiit[1].question
                              this.alter.safes[0].id = wentiit[0].id
                              this.alter.safes[1].id = wentiit[1].id
                              this.alter.username = response.data.username
                              console.log(this.alter.safes)

                         } else {
                              this.$message.warning("" + response.message + "")
                              this.loading = false
                         }
                    })
                    .catch(error => {
                         console.log(error)
                         this.loading = false
                    })
          },
          //x修改
          xiugai() {
               var test = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
               if (this.alertFrom.statusa0 == '') {
                    this.$message.warning('请输入' + this.wenyi)
                    return false
               }
               if (this.alertFrom.statusa1 == '') {
                    this.$message.warning('请输入' + this.wener)
                    return false
               }
               if (!test.test(this.alter.newPwd)) {
                    this.$message.warning("请输入8-16字母和数字组成")
                    return false
               }
               this.alter.safes[0].answer = this.alertFrom.statusa0
               this.alter.safes[1].answer = this.alertFrom.statusa1
               console.log(this.alter)
               ajax({
                    url: 'tAppUser/retrieve',
                    optionParams: this.alter
               }).post()
                    .then(response => {
                         console.log(response)
                         if (response.code == 200) {
                              this.$message.success("" + response.message + "")
                              this.dengru = true;//登入 ;
                              this.wangji = false;//安全
                              this.yonghu = false;

                         } else {
                              this.$message.warning("" + response.message + "")
                              this.loading = false
                         }
                    })
                    .catch(error => {
                         console.log(error)
                         this.loading = false
                    })
          },

     }
}
</script>

<style lang="less" scoped>
button {
     cursor: pointer;
}

.login {
     width: 100%;
     height: 100px;
}

.login-div {
     width: 100%;
     height: 700px;
     background: url(~@res/imgs/bj.png) no-repeat;
}

.login-for {
     width: 1200px;
     height: 700px;
     margin: 0 auto;
}

.login-wangji {
     width: 290px;
     float: right;
}

.wangji {
     min-height: 425px;
     margin: 135px 150px 0 0px;
}

.anquan {
     min-height: 425px;
     margin: 50px 150px 0 0px;
}

.zhuche {
     min-height: 370px;
     margin: 165px 150px 0 0px;
}

.login-wangji p {
     width: 100%;
     height: 15px;
     font-family: "PingFangTC-Semibold";
     font-size: 14px;
     color: #FFFFFF;
     margin-top: 10px;
     text-indent: 0.2em;
}

.login-wangji input {
     background: #FFFFFF;
     border-radius: 4px;
     width: 285px;
     padding: 0 5px;
     height: 40px;
     margin-top: 10px;
     border: 0px;
}

.login-wangji button {
     opacity: 0.65;
     background: #21119A;
     border-radius: 4px;
     font-family: "PingFangTC-Semibold";
     font-size: 14px;
     color: #FFFFFF;
     text-align: center;
     margin-top: 20px;
     width: 285px;
     height: 40px;
     border: none;
}

.login-for-div {
     font-family: "PingFangTC-Semibold";
     font-size: 12px;
     color: #FFFFFF;
     text-align: right;
     width: 100%;
     margin-top: 20px;
}

.login-wangji select {
     width: 285px;
     height: 40px;
     margin-top: 10px;
}

.login-wangji h3 {
     font-family: "PingFangTC-Semibold";
     font-size: 24px;
     color: #FFFFFF;
     text-align: center;
}

.login-wangji span {
     font-family: "PingFangTC-Semibold";
     font-size: 14px;
     color: #FFFFFF;
     margin-left: 40px;
}

.yanzhenma {
     width: 100px;
     height: 40px;
     background: #E6E6E6;
     float: right;
     margin: 10px 5px 0 0;
}

.login-di {
     width: 100%;
     height: 337px;
     background: #F3F3F3;
}

.login-di-div {
     width: 1100px;
     height: 337px;
     margin: 0 auto;
}

.login-di-div h3 {
     width: 100%;
     height: 40px;
     line-height: 40px;
     font-family: "PingFangTC-Semibold";
     font-size: 28px;
     color: #464646;
     padding-top: 40px;
}

.login-img {
     width: 100px;
     height: 100px;
     border-radius: 100px;
     float: left;
     margin-top: 50px;
     margin-right: 50px;
}

.login-di-zi {
     width: 100%;
     height: 63px;
     line-height: 63px;
     ont-family: "PingFangTC-Semibold";
     font-size: 14px;
     color: #6E6E6E;
     text-align: center;
     background: #EEEEEE;
}
.checksafaQA{
     width: 97%;
     font-size: 12px;
     padding-top: 20px;
     text-align: right;
     color: #3E8BFA;
     cursor: pointer;
     display: block;
    
     .btn{
        display: inline-block;
        border-radius:3px;
        display: inline-block;
        border-radius: 3px;
        border-radius: 5px;
        border: 1px solid;
        padding: 3px 5px;
        /* color: wheat; */
        background-color: white;
        cursor: pointer;
     }
}
</style>