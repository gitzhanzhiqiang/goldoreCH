<template>
     <div class="login-container" :style="">
          <header-nav></header-nav>
          <div class="login"></div>

          <div class="login-div">
               <div class="login-for">

                    <!--注册开始-->
                    <div class="login-wangji zhuche" v-if='zhuced'>
                         <h3>欢迎加入Gold Ore</h3>
                         <p>用户名：</p>
                         <input type="text" v-model="params.username" maxlength="20" placeholder="请输入用户名，由3位以上的数字或字母组成" />
                         <p>图形验证码：</p>
                         <div>
                              <input type="text" v-model="params.captcha" maxlength="4" placeholder="请输入图形验证码" style="width: 165px;" />
                              <div class="yanzhenma" @click='getTable'>
                                   <img id="valideImg" src="">
                              </div>
                         </div>
                         <p>登录密码：</p>
                         <input type="password" v-model="params.pwd" maxlength="16" placeholder="请输入登录密码，由8-16字母和数字组成" />
                         <button @click='regis'>下一步</button>
                         <div class="login-for-div" style="cursor: pointer;" @click="$router.push('/login')">已有账户，立即登录！</div>
                    </div>
                    <!--注册结束-->

                    <!--设置安全问题开始-->
                    <div class="login-wangji anquan" v-if='anquan'>
                         <h3>设置安全问题</h3>
                         <span>用以找回您的密码，请妥善保存！</span>
                         <template v-for="(item, index) in 3">
                              <p>
                                   问题
                                   <span v-if="index == 0">一</span>
                                   <span v-else-if="index == 1">二</span>
                                   <span v-else="index == 2">三</span>：
                              </p>
                              <select v-model="paramsa[index].question" @change="selectChange">
                                   <option value='' disabled selected style='display:none;'>请选择您的密保问题</option>
                                   <option v-for="item in list" :value="item.name" v-text="item.name" :disabled="item.disabled"></option>
                              </select>
                              <p>回答：</p>
                              <input type="text" v-model="paramsa[index].answer" placeholder="请输入您设置的答案" />
                         </template>
                         <button @click='regisa'>完成注册</button>
                         <!--<div class="login-for-div">记起密码，立即登录！</div>-->
                    </div>
                    <!--设置安全问题结束-->

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
export default {
     name: 'login',
     components: {
          headerNav
     },
     data() {
          return {
               zhuced: true,
               anquan: false,
               params: {
                    username: '',
                    pwd: '',
                    captcha: '',
                    randNum: '',
               },
               paramsa: [
                    {
                         question: '',
                         answer: '',
                    },
                    {
                         question: '',
                         answer: '',
                    },
                    {
                         question: '',
                         answer: '',
                    },
               ],
               list: [
                    { name: '您母亲的姓名是?', disabled: false },
                    { name: '您父亲的姓名是?', disabled: false },
                    { name: '您配偶的姓名是?', disabled: false },
                    { name: '您的出生地是?', disabled: false },
                    { name: '您高中班主任的名字是?', disabled: false },
                    { name: '您初中班主任的名字是?', disabled: false },
                    { name: '您小学班主任的名字是?', disabled: false },
                    { name: '您的小学校名是？您的学号（或工号）是?', disabled: false },
                    { name: '您父亲的生日是?', disabled: false },
                    { name: '您母亲的生日是？', disabled: false },
                    { name: '您配偶的生日是？', disabled: false },
                    { name: '您的出生地是？', disabled: false },
               ],
               data: {}

          }
     },
     mounted() { },
     created() {
          if (this.$route.query.data) {
               this.data = JSON.parse(this.$route.query.data)
               this.zhuced = false;
               this.anquan = true;
          } else {
               this.getTable()
          }
     },
     computed: {},
     methods: {
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
               var test = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
               var testa = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,20}$/
                var testb = /^[0-9a-zA-Z]+$/
               if (this.params.username == '') {
                    this.$message.warning("请输入用户名获取验证码")
                    return false
               }
               if (!testb.test(this.params.username)) {
                    this.$message.warning("请输入3位以上的数字或字母组成")
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
               if (!test.test(this.params.pwd)) {
                    this.$message.warning("请输入8-16字母和数字组成")
                    return false
               }
               ajax({
                    url: 'tAppUser/register',
                    optionParams: this.params
               }).post()
                    .then(response => {
                         console.log(response)
                         if (response.code == 200) {
                              this.$message.success("" + response.message + "")
                              this.anquan = true
                              this.zhuced = false,
                                   this.$Cookies.set('token', response.data.token);
                              this.data = response.data;
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
          // 选择问题变化
          selectChange(value) {
               console.log(this.paramsa)
               this.list.map((itm) => {
                    itm.disabled = false;
               })
               this.paramsa.map((item) => {
                    this.list.map((itm) => {
                         if (item.question == itm.name) {
                              itm.disabled = true;
                         }
                    })
               })
          },
          regisa() {
               let arr = [];
               console.log(this.paramsa)
               this.paramsa.map((item) => {
                   if(item.question){
                        if (item.answer) {
                            arr.push(item)
                        }
                    }
               })
               if (arr.length < 3) {
                    this.$message({
                         message: '问题和回答不能为空！',
                         type: 'warning',
                    });
                    return;
               }
               ajax({
                    url: 'tAppUser/setSafe',
                    optionParams: this.paramsa
               }).post()
                    .then(response => {
                         console.log(response)
                         if (response.code == 200) {
                              this.$Cookies.set('name', this.data.username);
                              this.$store.dispatch('SETUSER', { user: this.data.username });
                              this.$message.success("" + response.message + "");
                              this.$router.push('/');

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

<style rel="stylesheet/less" lang="less" scoped>
select {
     border-radius: 5px;
}

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

.login-wangji {

     span {
          font-family: "PingFangTC-Semibold";
          font-size: 14px;
          color: #FFFFFF;
          margin-left: 40px;
     }
     &.anquan {
          span {
               margin-left: 0;
          }
     }
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
</style>