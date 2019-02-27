<template>
     <div class="bodyCon">
          <div class="bodyCon_z">
               <!-- logo -->
               <div class="logo" style="cursor: pointer;">
                    <div class="logoImg" @click="activeChange();$router.push('/sunfin/index');aboutChange();servChange();">
                         <img :src="loginUrl" alt="" width="100" height="61">
                    </div>
               </div>
               <!-- 菜单导航 -->
               <div class="header">
                    <ul class="menu">
                         <em class="ema" v-on:mouseenter="dataDetails('servicesUpDown',1)" v-on:mouseleave="hiddenDetail('servicesUpDown')"></em>
                         <em class="emb" v-on:mouseenter="dataDetails('aboutUpDown')" v-on:mouseleave="hiddenDetail('aboutUpDown')"></em>
                         <li @click="activeChange(1);aboutChange();servChange();aboutUpDown = false;active1 = true;$router.push('/sunfin/services')" :class="{'active': active1 && !$store.getters.nav}" v-on:mouseenter="dataDetails('servicesUpDown')" v-on:mouseleave="hiddenDetail('servicesUpDown')">
                              <span>活 动
                                   <i v-if="!servicesUpDown" @click="servicesUpDown = !servicesUpDown;" class="el-icon-arrow-down"></i>
                                   <i v-if="servicesUpDown" @click="servicesUpDown = !servicesUpDown;" class="el-icon-arrow-up"></i>
                              </span>
                         </li>
                         <li @click="activeChange(4);aboutChange();servChange();active4 = true;$router.push('/game/index')" :class="{'active': active4 && !$store.getters.nav}">
                              <span>应 用</span>
                         </li>
                         <li @click="activeChange(3);aboutChange();servChange();active3 = true;$router.push('/sunfin/news')" :class="{'active': active3 && !$store.getters.nav}">
                              <span>资 讯</span>
                         </li>
                         <li @click="activeChange(2);aboutChange();servChange();servicesUpDown = false;active2 = true;$router.push('/sunfin/aboutUs')" :class="{'active': active2 && !$store.getters.nav}" v-on:mouseenter="dataDetails('aboutUpDown')" v-on:mouseleave="hiddenDetail('aboutUpDown')">
                              <span>关于我们
                                   <i v-if="!aboutUpDown" @click="aboutUpDown = !aboutUpDown;" class="el-icon-arrow-down"></i>
                                   <i v-if="aboutUpDown" @click="aboutUpDown = !aboutUpDown;" class="el-icon-arrow-up"></i>
                              </span>
                         </li>
                    </ul>
                    <div class="menus menuscoverStyle">
                         <p>外网链接</p>
                         <p v-show="!$store.getters.user" style="margin-right:10px;margin-left: 10px; cursor: pointer;" @click="$router.push('/login')">登录</p>
                         <p v-show="!$store.getters.user" style="margin-right:10px; cursor: pointer;" @click="$router.push('/registered')">注册</p>
                         <p v-show="$store.getters.user" v-on:mouseenter="isUser = true" v-on:mouseleave="isUser = false">
                              <el-button class="hover" icon="el-icon-tickets" size="medium" style="background:#fff!important;border: 0; font-size: 14px;font-family: 'MicrosoftYaHei-Bold';font-weight: 600;color: #333333;margin-top: 8px;">
                                   <span style="border: 0;" v-if="$store.getters.user&&$store.getters.user.length < 11">{{$store.getters.user}}</span>
                                   <span style="border: 0;" v-if="$store.getters.user&&$store.getters.user.length > 10">{{($store.getters.user).substring(0, 3)}}</span>
                                   <i v-if="!isUser" class="el-icon-arrow-down"></i>
                                   <i v-if="isUser" class="el-icon-arrow-up"></i>
                              </el-button>
                              <ul class="ermeni" v-show="isUser">
                                   <li @click="$router.push('/personalCenter/index')">个人中心</li>
                                   <li @click="loginout">退出登录</li>
                              </ul>
                         </p>
                         <span @click="$router.push('/sunfin/contactUs');activeChange();;aboutChange();servChange();">
                              <a>参</a>
                              <a>加</a>
                              <a>活</a>
                              <a>动</a>
                         </span>
                         <p>
                              <i v-if="value==1" class="flag" :style="guoqi"></i>
                              <i v-else class="flag" :style="guoqiCH"></i>
                              <el-select v-model="value" placeholder="请选择" style="width: 120px;" @change="selectval">
                                   <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                   </el-option>
                              </el-select>
                         </p>
                    </div>
                    <!-- 二级菜单隐藏 -->

                    <div class="aboutSecondMenu" v-if="aboutUpDown" v-on:mouseenter="dataDetails('aboutUpDown')" v-on:mouseleave="hiddenDetail('aboutUpDown')">
                         <div class="menuItem" @click="servChange();$router.push('/sunfin/aboutUs');activeChange(2);active2 = true;aboutChange(1);about1 = true" :class="{'actives': about1}" style="margin-top: 15px;">
                              <li>什么是Gold Ore?</li>
                         </div>
                         <div class="menuItem" @click="servChange();$router.push('/sunfin/advantages');activeChange(2);active2 = true;aboutChange(2);about2 = true" :class="{'actives': about2}">
                              <li>项目背景</li>
                         </div>
                         <div class="menuItem menuItem2" @click="servChange();$router.push('/sunfin/mission');activeChange(2);active2 = true;aboutChange(3);about3 = true" :class="{'actives': about3}" style="margin-bottom: 15px;">
                              <li>为什么选择Gold Ore?</li>
                         </div>
                    </div>

                    <div class="serviceSecondMenu"  v-if="servicesUpDown" v-on:mouseenter="dataDetails('servicesUpDown')" v-on:mouseleave="hiddenDetail('servicesUpDown')">
                         <div class="menuItem" @click="$router.push('/sunfin/services');activeChange(1);active1 = true;servChange(1);serv1 = true" :class="{'active': serv1 && !$store.getters.nav}" style="margin-top: 15px;">
                              开发者激励计划
                         </div>
                         <div class="menuItem" @click="aboutChange();$router.push('/sunfin/trustservice');activeChange(1);active1 = true;servChange(2);serv2 = true" :class="{'active': serv2 && !$store.getters.nav}">
                              合伙人计划
                         </div>
                         <div class="menuItem" @click="aboutChange();$router.push('/sunfin/insuranceService');activeChange(1);active1 = true;servChange(3);serv3 = true" :class="{'active': serv3 && !$store.getters.nav}">
                              BCIA 学院计划
                         </div>
                         <div class="menuItem" @click="aboutChange();$router.push('/sunfin/enterpriseFinancing');activeChange(1);active1 = true;servChange(4);serv4 = true" :class="{'active': serv4 && !$store.getters.nav}">
                              海外游学计划
                         </div>
                         <div class="menuItem menuItem2" @click="aboutChange();$router.push('/sunfin/situation');activeChange(1);active1 = true;servChange(5);serv5 = true" :class="{'active': serv5 && !$store.getters.nav}" style="margin-bottom: 15px;">
                              WIN-WIN 双赢计划
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>

import ajax from '@utils/config';
import loginout from '@src/utils/loginout';
export default {
     data() {
          var guoqi = require("@res/imgs/guoqi.png");
          var guoqiCH = require("@res/imgs/guoqi_ch.png");
          return {
               loginName: '', //登陆名
               isUser: false,
               loginUrl: require("@res/imgs/logo.png"),
               guoqi: {
                    backgroundImage: "url(" + guoqi + ")",
               },
               guoqiCH: {
                    backgroundImage: "url(" + guoqiCH + ")",
               },
               bodyCona: false,
               active0: false,
               active1: false,
               active2: false,
               active3: false,
               active4: false,
               active5: false,

               serv1: false,
               serv2: false,
               serv3: false,
               serv4: false,
               serv5: false,

               about1: false,
               about2: false,
               about3: false,

               aboutUpDown: false,
               servicesUpDown: false,
               data: [
                    { path: '/sunfin/index', name: 'HOME' },
                    {
                         path: '/sunfin/services', name: 'SERVICES', children: [
                              {
                                   path: '/sunfin/services', name: 'SERVICES', children: [
                                        { path: '/sunfin/services', name: 'SERVICES', }
                                   ]
                              }
                         ]
                    },
                    { path: '/sunfin/aboutUs', name: 'ABOUT US' },
                    { path: '/sunfin/news', name: 'NEWS' },
                    { path: '/sunfin/contactUs', name: 'CONTACT US' }
               ],
               activeIndex: '0',

               options: [{
                    value: '0',
                    label: '简体中文'
               }, {
                    value: '1',
                    label: 'English'
               },],
               value: '0'
          }
     },
     created() {
     },
     computed: {
          //   ...mapGetters([
          //     'headerRouter'
          // ])
     },
     mounted() {
          // console.log(this.$store.getters)
     },
     methods: {
          dataDetails(num) {
               if (num == 'servicesUpDown') {
                    this.servicesUpDown = true
               } else if (num == 'aboutUpDown') {
                    this.aboutUpDown = true
               }
          },
          hiddenDetail(num) {
               if (num == 'servicesUpDown') {
                    this.servicesUpDown = false
               } else if (num == 'aboutUpDown') {
                    this.aboutUpDown = false
               }
          },
          handleSelect(key, keyPath) {
               //console.log(key, keyPath);
          },
          activeChange(index) {
               this.active0 = false;
               this.active1 = false;
               this.active2 = false;
               this.active3 = false;
               this.active4 = false;
               this.active5 = false;
               this.setStore()
          },
          servChange(index) {
               this.serv1 = false;
               this.serv2 = false;
               this.serv3 = false;
               this.serv4 = false;
               this.serv5 = false;
               this.serv6 = false;
               this.setStore()
          },
          aboutChange(index) {
               this.about1 = false;
               this.about2 = false;
               this.about3 = false;
               this.setStore()
          },
          setStore() {
               this.$store.dispatch('NAVSET', { nav: null });
          },
          getAddRouter() {
               this.listInfo = this.$store.getters.allRouter[Cookies.get('submenuIndex')].children;
          },
          //鼠标移入
          menter(index) {
               // this.listInfo[index].img = this.listInfo[index].imgHover;
          },
          //
          goFirstRouter(item) {
               if (item.children.length === 0) {
                    this.$router.push(item.path);
               }
          },
          //鼠标滑出
          mleave(index) {
               // this.listInfo[index].img = this.listInfo[index].img1;
          },
          handleOpen(key, keyPath) {
               //console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
               //console.log(key, keyPath);
          },
          go_url(children) {
               if (children.children.length == 0) {
                    this.$router.push(children.path);
               }
          },
          selectval(type) {
               let url = 'http://www.gold-ore.io/sunfin/block/';
               // let url=window.location.href.split('#')[0];
               // url=url.substring(url.length-3,-1);
               if (type == 1) {
                    url = url + 'en';
                    // url = 'http://192.168.1.36:8187';
               } else {
                    url = url + 'ch';
                    // url = 'http://192.168.1.36:8087';
               }
               // console.log('2222')
               // window.open('http://192.168.1.36:8187/#/sunfin/index',true);
               // window.open('http://baidu.com',true);
               window.open(url + '/#/sunfin/index', true);
          },
          loginout() {
               loginout(true);
          }

     }
}
</script>
<style lang="less" scoped>
.ermeni {
     position: absolute;
     left: 580px;
     top: 80px;
     display: inline-block;
     width: 245px;
     background: #ffffff;
     border-radius: 8px;
     box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
     z-index: 99;
     font-size: 16px;
     font-family: 'MS Sans Serif';
     font-weight: 300;
     color: #666666;
     line-height: 35px;
     cursor: pointer;
     text-align: justify;
     padding: 15px;
     li {
          border-bottom: 1px solid #e6e6e6;
          &:last-child {
               border: 0;
          }
          &:hover {
               color: #4886ef !important;
               font-weight: 600 !important;
          }
     }
}

.bodyCon {
     width: 100%;
     height: 100px;
     background: white;
     box-shadow: 0px 0px 13px rgba(35, 24, 21, 0.1);
     position: fixed;
     z-index: 999;
     .bodyCon_z {
          width: 1100px;
          height: 100px;
          margin: 0 auto;
     }
     .logo {
          float: left;
          height: 61px;
          width: 100px;
          margin-top: 21px;
     }
     .header {
          float: left;
          height: 100%;
          width: 921px;
          float: right;
          line-height: 100px;
          position: relative;
          .menu {
               float: left;
               height: 100%;
               line-height: 103px; // margin-left: 125px;
               position: relative;
               &>em {
                    width: 0;
                    height: 0;
                    border-bottom: 10px solid #ffffff;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    position: absolute;
                    bottom: 17px;
                    z-index: 999;
               }
               &>em.ema {
                    left: 45px;
               }
               &>em.emb {
                    left: 260px;
               }
               &>li {
                    cursor: pointer;
                    float: left;
                    height: 60px;
                    margin-left: 10px;
                    font-size: 14px;
                    font-family: MicrosoftYaHei-Bold;
                    font-weight: 600;
                    color: #333333;
                    line-height: 48px;
                    text-align: center;
                    margin-top: 34px;
                    &>span {
                         padding: 11px 15px;
                         width: 120px;
                         color: #333333;
                    }
               }
               &>li.active {
                    color: rgba(102, 102, 102, 1);
                    height: 48px;
                    text-align: center;
                    &>span {
                         color: #4886EF;
                         width: 120px;
                         font-family: MicrosoftYaHei-Bold;
                         font-weight: 600;
                    }
               }
          }
          .menus {
               float: right;
               height: 100%;
               line-height: 100px;
               &>p {
                    float: left;
                    height: 48px;
                    font-size: 14px;
                    font-family: MicrosoftYaHei-Bold;
                    font-weight: 600;
                    color: #333333;
                    line-height: 48px;
                    text-align: center;
                    margin-top: 34px;
                    &>.flag {
                         display: inline-block;
                         width: 18px;
                         height: 12px;
                         background-size: 100% 100%;
                         margin-right: 14px;
                    }
               }
               &>span {
                    float: left;
                    width: 80px;
                    height: 26px;
                    display: inline-block;
                    font-size: 14px;
                    font-family: MicrosoftYaHei-Bold;
                    font-weight: bold;
                    color: rgba(72, 134, 239, 1);
                    line-height: 28px;
                    text-align: center;
                    border: 1px solid #4886EF;
                    border-radius: 11px;
                    margin-top: 44px;
                    margin-left: 26px;
                    margin-right: 26px;
                    cursor: pointer;
               }
          }
          .aboutSecondMenu {
               position: absolute;
               left: 260px;
               top: 83px;
               width: 245px;
               background: rgba(255, 255, 255, 1);
               border-radius: 8px;
               box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
               z-index: 99;
               .menuItem {
                    width: 210px;
                    height: 25%;
                    border-bottom: 1px solid rgba(230, 230, 230, 1);
                    margin-left: 15px;
                    font-size: 16px;
                    font-family: MS Sans Serif;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                    line-height: 35px;
                    cursor: pointer;
                    text-align: justify;
               }
               .menuItem2 {
                    border: none;
                    cursor: pointer
               }
          }
          .serviceSecondMenu {
               position: absolute;
                   left: 20px;
                    top: 85px;
               width: 315px;
               overflow: hidden;
               background: rgba(255, 255, 255, 1);
               border-radius: 8px;
               box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
               z-index: 99;
               .menuItem {
                    width: 265px;
                    border-bottom: 1px solid rgba(230, 230, 230, 1);
                    margin-left: 25px;
                    font-size: 16px;
                    font-family: MS Sans Serif;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                    line-height: 38px;
                    cursor: pointer
               }
               .menuItem2 {
                    border: none;
                    cursor: pointer
               }
          }
     }
}

.bodyCon .header .menus span a {
     display: inline-block;
     color: #4886ef;
     opacity: 0;
     transform: translate(-150px, 0) scale(.3);
     animation: leftRight .5s forwards;
}

.bodyCon .header .menus span a:nth-of-type(2) {
     animation-delay: .05s;
}

.bodyCon .header .menus span a:nth-of-type(3) {
     animation-delay: .1s;
}

.bodyCon .header .menus span a:nth-of-type(4) {
     animation-delay: .15s;
}

.bodyCon .header .menus span a:nth-of-type(5) {
     animation-delay: .2s;
}

.bodyCon .header .menus span a:nth-of-type(6) {
     animation-delay: .25s;
}

.bodyCon .header .menus span a:nth-of-type(7) {
     animation-delay: .3s;
}

.bodyCon .header .menus span a:nth-of-type(8) {
     animation-delay: .35s;
}

.bodyCon .header .menus span a:nth-of-type(9) {
     animation-delay: .4s;
}

.bodyCon .header .menus span a:nth-of-type(10) {
     animation-delay: .45s;
}

.bodyCon .header .menus span a:nth-of-type(11) {
     animation-delay: .5s;
}

.bodyCon .header .menus span a:nth-of-type(12) {
     animation-delay: .55s;
}

.bodyCon .header .menus span a:nth-of-type(13) {
     animation-delay: .6s;
}

.bodyCon .header .menus span a:nth-of-type(14) {
     animation-delay: .65s;
}


@keyframes leftRight {
     40% {
          transform: translate(50px, 0) scale(.7);
          opacity: 1;
          color: #4886ef;
     }
     60% {
          color: #4886ef;
     }
     80% {
          transform: translate(0) scale(2);
          opacity: 0;
     }
     100% {
          transform: translate(0) scale(1);
          opacity: 1;
     }
}

.bodyCon .header .menus span:hover a {
     display: inline-block;
     color: #4886ef;
     opacity: 0;
     transform: translate(-150px, -50px) rotate(-180deg) scale(3);
     animation: revolveScale .4s forwards;
}

.bodyCon .header .menus span:hover {
     border: 1px dashed #4886EF;
}

@keyframes revolveScale {
     60% {
          transform: translate(20px, 20px) rotate(30deg) scale(.3);
     }
     100% {
          transform: translate(0) rotate(0) scale(1);
          opacity: 1;
     }
}


.menu li:hover span {
     color: #4886ef !important;
}

.serviceSecondMenu .active {
     color: #4886ef !important;
     font-weight: 600 !important;
}

.aboutSecondMenu .actives li {
     color: #4886ef !important;
     font-weight: 600 !important;
}

.serviceSecondMenu .menuItem:hover {
     color: #4886ef !important;
     font-weight: 600 !important;
}

.aboutSecondMenu .menuItem li:hover {
     color: #4886ef !important;
     font-weight: 600 !important;
}
</style>
<style  lang="less">
.menuscoverStyle {
     .el-select {
          .el-input {
               input {
                    border: 0px;
               }
          }
     }
}
</style>

