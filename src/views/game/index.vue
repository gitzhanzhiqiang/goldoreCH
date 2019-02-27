<template>
     <div class="homePage-layer">
          <div class="bottom-space"></div>
          <div class="homePage">
               <div class="homePageL">
                    <div class="homePageL-top">热门排行</div>
                    <ul class="homePageL-list">
                         <li class="homePageL-list-item" v-for="(i,index) in appListdata.hots" @click="goGameDetail(i.hrefUrl,i.id)" style="cursor: pointer;">
                              <span class="sort-img">
                                   <img v-show="index==0" src="./img/ranking1_icon.png" alt="">
                                   <img v-show="index==1" src="./img/ranking2_icon.png" alt="">
                                   <img v-show="index==2" src="./img/ranking3_icon.png" alt="">
                                   <span class="sort-img-num" v-show="index!=0 &&index!=1 &&index!=2" v-text="i"></span>
                              </span>
                              <span class="app-dis">
                                   <span class="app-logo">
                                        <img :src="i.logoUrl" alt="">
                                   </span>
                                   <span class="app-info">
                                        <span class="appName">{{i.name}}</span><br/>
                                        <span class="btn">进入应用</span>
                                   </span>
                              </span>
                         </li>
                    </ul>
               </div>
               <div class="homePageR">
                    <div class="homePageR-top">推荐应用</div>
                    <div class="recommended-applist-layer">
                         <div class="abc" ref="adc" style="width: 700px; overflow-x: hidden;">
                              <div class="leftPosition" style="">
                                   <ul class="recommended-applist" ref="oul">
                                        <li class="recommended-app-item" v-for="i in appListdata.tops" style="padding-right: 10px;">
                                             <div class="recommended-app-item-img" @click="goGameDetail(i.hrefUrl,i.id)" style="cursor: pointer;">
                                                  <img :src="i.hotImg" alt="" style="width: 340px;height: 100%; padding: 0 10px">
                                             </div>
                                             <!--<span>{{i.title}}</span>-->
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div class="rightimg-btn" @mouseout="changeMask()" v-show="this.appListdata.tops.length > 2">
                              <img @click="leftslip" src="./img/back2_icon.png" alt="">
                         </div>
                    </div>
                    <div>
                         <div class="homePageR-more">更多应用</div>
                         <ul class="homePageR-more-list">
                              <li v-for="i in  GameListdata" @click="goGameDetail(i.hrefUrl,i.id)" style="cursor: pointer;">
                                   <div>
                                        <div class="homePageR-more-list-img">
                                             <img :src="i.logoUrl" alt="">
                                        </div>
                                        <div class="homePageR-more-list-text">{{i.name}}</div>
                                   </div>
                              </li>
                         </ul>
                         <div class="clear"></div>
                         <div v-if="total" class="pagination-container">
                              <el-pagination v-if="total" :current-page.sync="params.page" :page-size="params.limit" :pager-count="11" layout="prev, pager, next" :total="total">
                              </el-pagination>
                         </div>

                    </div>
               </div>
          </div>
          <div class="bottom-space"></div>
     </div>
</template>
<script>
import ajax from '@utils/config';
export default {
     components: {
     },
     data() {
          return {
               total: 10,
               params: {
                    limit: 8,
                    page: 1,
               },
               recommendedData: [
                    {
                         src: require('@res/imgs/xmys1.png'),
                         title: 'xxx1',
                    },
                    {
                         src: require('@res/imgs/xmys2.png'),
                         title: 'xxx2'
                    },
                    {
                         src: require('@res/imgs/xmys3.png'),
                         title: 'xxx3'
                    },
                    {
                         src: require('@res/imgs/xmys4.png'),
                         title: 'xxx4'
                    }
               ],
               nowIndex: 0,
               Time: '', //定时器
               appListdata: { tops: [] },//推荐和热门应用列表
               GameListdata: [],//更多游戏
          }
     },
     computed: {
          nextIndex() {
               if (this.nowIndex === this.recommendedData.length - 1) {
                    return 0
               }
               else {
                    return this.nowIndex + 1
               }
          }
     },
     created() {
          this.getTable();
          this.getMoreGame();//更多游戏
     },
     mounted() {
     },
     methods: {
          init() {
               this.Time = setInterval(() => {
                    this.bannerLike();
               }, 2000)
          },
          leftslip() {
               clearInterval(this.Time);
               this.bannerLike();
          },
          bannerLike() {
               let oUl = this.$refs.oul;
               this.nowIndex++;
               if (this.nowIndex == this.recommendedData.length * 1 - 1) {
                    this.nowIndex = 0;
               }
               oUl.style.left = -370 * this.nowIndex;
          },
          changeMask() {
               setTimeout(() => {
                    this.init();
               }, 2000)
          },
          getTable() {
               ajax({
                    url: 'application/topAndHotList',
                    optionParams: {}
               }).fetch()
                    .then(res => {
                         if (res.code === 200) {
                              this.appListdata = res.data ? res.data : {};
                              if (this.appListdata.tops.length > 2) {
                                   this.appListdata.tops.push(
                                        this.appListdata.tops[0]
                                   );

                                   this.init();
                              }
                         }
                    })
                    .catch(error => {
                         console.log(error)
                    })
          },
          getMoreGame() {
               ajax({
                    url: 'application/pageList',
                    optionParams: this.params,
               }).post()
                    .then(res => {
                         if (res.code === 200) {
                              this.GameListdata = res.data.records ? res.data.records : {};
                              this.total = res.data.total;
                         }
                    })
                    .catch(error => {
                         console.log(error)
                    })
          },
          // 跳转游戏详情
          goGameDetail(url, id) {
               console.log(url)
               if (this.$store.getters.user) {
                    window.open(url);
               } else {
                    this.$message({
                         message: '请登录之后进入',
                         type: 'warning',
                    });
                    return false;
               }
               ajax({
                    url: 'application/save',
                    optionParams: {
                         id: id
                    }
               }).post()
                    .then(res => {
                         if (res.code == 200) {
                         } else {
                              this.$message({
                                   message: res.message,
                                   type: 'warning',
                              });
                         }
                    })
                    .catch(error => {
                         console.log(error)
                    })

          },
          // 改变每一页的条数
          handleSizeChange(val) {
               this.params.limit = val;
               this.params.page = 1; //从第一页开始
               this.getMoreGame();
          },
          // 切换页码
          handleCurrentPageChange(val) {
               this.params.page = val;
               this.getMoreGame();
          },
     },
     filters: {}
}
</script>
<style lang='less' scoped>
.leftPosition {
     /*animation: mymove 20s linear infinite;*/
     /*-webkit-animation: mymove 20s linear infinite;*/
     /* Safari 和 Chrome */
     width: 7000px;
     height: 220px;
     overflow-x: hidden;
     position: relative;
     left: 0;
     .recommended-applist {
          transition: left .02s;
     }
}

.pagination-container {
     display: block;
     text-align: center;
     padding: 20px 0
}

@keyframes mymove {
     from {
          left: 0;
     }
     to {
          left: -230%;
     }
}

.homePage-layer {
     background-color: #eeeeee;
}

.homePage {
     width: 1200px;
     margin: auto;
     display: flex;
     font-size: 14px;
     background-color: white;
     /*margin-top: 20px;*/
     .homePageL {
          flex: 1;
          padding: 0 25px;
          .homePageL-top {
               display: inline-block;
               padding: 20px 0;
          }
          .homePageL-list {
               padding: 0 10px;
               .homePageL-list-item {
                    /*border-bottom: 1px solid #E5E5E5;*/
                    padding: 0px 0 15px;
               }
               .sort-img {
                    vertical-align: top;
                    img {
                         vertical-align: top;
                    }
                    .sort-img-num {
                         vertical-align: top;
                    }
               }
               .app-dis {
                    border-bottom: 1px solid #E5E5E5;
                    display: inline-block;
                    padding-bottom: 10px;
                    .app-logo {
                         border-bottom: 1px solid #E5E5E5;
                         width: 75px;
                         height: 75px;
                         vertical-align: middle;
                         img {
                              width: 100%;
                              width: 65px;
                              height: 75px;
                              vertical-align: middle;
                         }
                    }
                    .app-info {
                         display: inline-block;
                         vertical-align: middle;
                         span {
                              vertical-align: middle;
                              &.appName {
                                   display: inline-block;
                                   padding-bottom: 10px;
                              }
                              &.btn {
                                   font-family: PingFangTC-Regular;
                                   font-size: 12px;
                                   color: #1D82FE;
                                   text-align: center;
                                   background: #F0F0F7;
                                   border-radius: 13.5px;
                                   padding: 2px 3px;
                                   margin-top: 5px;
                              }
                         }
                    }
               }
          }
     }
     .homePageR {
          flex: 5;
          margin-left: 40px;
          margin: 0 40px;
          .homePageR-top {
               /*display: inline-block;*/
               padding: 20px 0;
               border-bottom: 1px solid #E5E5E5;
               margin-right: 120px;
          }
          .recommended-applist-layer {
               position: relative;
               margin-top: 30px;
               /*overflow-y: hidden;*/
               .recommended-applist {
                    /*border-bottom: 1px solid #E5E5E5;*/
                    position: absolute;
                    left: 0;
                    padding-bottom: 20px;
                    width: 200%;
                    overflow-y: hidden;
                    height: 195px;
                    vertical-align: middle;
                    /*overflow-x: hidden;*/
                    /*overflow-y: scroll;*/
                    .recommended-app-item {
                         display: inline-block;
                         width: 340px;
                         margin: auto;
                         margin-right: 20px;
                         background-color: #eeeeee;
                         text-align: center;
                         vertical-align: middle;
                         height: 100%;
                         .recommended-app-item-img {
                              text-align: center;
                              vertical-align: middle;
                              ;
                              position: relative;
                              height: 100%
                         }
                         img {
                              text-align: center;
                              vertical-align: middle;
                              margin: auto;
                              /*height: 200px;*/
                              /*width: 200px;*/
                              position: absolute;
                              top: 0;
                              bottom: 0;
                              right: 0;
                              left: 0;
                         }
                    }
               }
               .rightimg-btn {
                    /*float: right;*/
                    position: absolute;
                    right: 150px;
                    top: 200px;
                    bottom: 0;
                    /*left: 0;*/
                    margin: auto;
                    vertical-align: middle;
                    height: 250px;
                    width: 30px;

                    img {
                         vertical-align: middle;
                         cursor: pointer;
                    }
               }
          }

          .homePageR-more {
               /*margin-bottom: 20px;*/
               border-top: 1px solid #E5E5E5;
               padding-top: 20px;
               /* margin-top: 10px; */
               padding-bottom: 20px;
               margin-right: 120px;
               /* margin-bottom: 20px; */
          }
          .homePageR-more-list {
               width: 100%;
               li {
                    float: left;
                    /*margin: 1% 2.7% ;*/
                    margin: 0.5% 3% 1%;
                    width: 15%;
                    .homePageR-more-list-img {
                         width: 115px;
                         height: 115px;
                         background-color: #eeeeee;
                         img {
                              width: 100%;
                              height: 100%;
                         }
                    }
                    .homePageR-more-list-text {
                         text-align: center;
                         display: block;
                         padding: 2px 0;
                    }
               }
          }
     }
}

.bottom-space {
     height: 40px;
     width: 100%;
}

.clear {
     clear: both;
     height: 0;
     height: 0;
     overflow: hidden;
}
</style>