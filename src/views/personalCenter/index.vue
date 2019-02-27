<template>
     <div class="homePage">
          <div class="center">
               <div class="head">
                    <img class="fl" src="~@res/imgs/head portrait.png" alt="" width="100" height="61">
                    <p class="fl">欢迎加入Gold ore大家庭，
                         <span>{{username}}</span>
                    </p>
               </div>
               <div class="content">
                    <div class="fl">
                         <ul>
                              <li @click="tab(item, index)" v-for="(item, index) in oli" v-text="item.name" :class="{'hover': item.isTrue}"></li>
                         </ul>
                    </div>
                    <div class="fl">
                         <!--我的账号-->
                         <div v-show="oli[0].isTrue">
                              <!--绑定以太坊账号-->
                              <div v-show="accountStatus == 3">
                                   <p>绑定以太坊账号</p>
                                   <div>
                                        <img src="~@res/imgs/account number_icon.png" alt="">
                                        <p class="fr">
                                             <span>账号</span>
                                             <span>{{username}}</span>
                                        </p>
                                   </div>
                                   <div>
                                        <img src="~@res/imgs/ethereum_icon.png" alt="">
                                        <p class="fr">
                                             <span>以太坊账号</span>
                                             <input v-model="account" type="text" minlength="20" maxlength="50" placeholder="请输入以太坊账号">
                                        </p>
                                   </div>
                                   <div class="button" @click="bindingAccount()">立即绑定</div>
                              </div>
                              <!--我的账号（绑定前和绑定后）-->
                              <div v-show="accountStatus <= 2">
                                   <p>我的账号</p>
                                   <!--是否绑定显示-->
                                   <div v-show="accountStatus == 1">
                                        <img class="fl" src="~@res/imgs/warning.jpg" alt="">
                                        <span class="fl">请与以太坊账号进行绑定，来兑换平台币！</span>
                                        <div class="fr" @click="accountStatus= 3">立即绑定</div>
                                   </div>
                                   <div>
                                        <div class="fl" style="background: #FFFFFF;box-shadow: 1px 2px 9px 1px rgba(203,203,203,0.50); border-radius: 5px;">
                                             <img class="fl" src="~@res/imgs/currency_icon.png" alt="">
                                             <div class="fl">
                                                  <p>平台币/个</p>
                                                  <p>{{userInfoData.balance?userInfoData.balance:0}}</p>
                                             </div>
                                        </div>
                                        <div class="fr">
                                             <div @click="conversion(1)">兑换</div>
                                             <div @click="conversion() ">提现</div>
                                        </div>
                                   </div>
                                   <p>
                                        <!--是否绑定显示-->
                                        <span v-if="accountStatus == 1">以太坊账号：您需要绑定后才能看到喔～</span>
                                        <span v-else> 以太坊账号：{{userInfoData.walletAddress|cutaddr}}</span>
                                   </p>
                              </div>
                              <!--兑换页-->
                              <div v-show="accountStatus == 4">
                                   <!--<p>兑换平台币</p>-->
                                   <!--<p>请先在以太坊账号向Gold ore的账号里充钱哦～</p>-->
                                   <!--<p>Gold ore以太坊账号: HUHJIJIOILLOPI</p>-->
                                   <!--<div>-->
                                        <!--交易流水:-->
                                        <!--<input type="text" placeholder="请输入您转账户后的交易流水">-->
                                        <!--<span>查询</span>-->
                                   <!--</div>-->
                                   <div class="accoutname">
                                        <div  class="fl">
                                             <div class="fl width90">以太坊账号：</div>
                                             <div class="fl">{{userInfoData.walletAddress|cutaddr}}</div>
                                        </div>
                                   </div>
                                   <div class="available-num">
                                        <div class="fl">
                                             <div class="fl width90" style="margin-right: 10px">可用Goo：</div>
                                             <div class="fl">{{BalanceData.balance?BalanceData.balance:0}}</div>
                                        </div>
                                   </div>
                                   <div class="exchange-num">
                                        <div class="exchange-num-top ">兑换数量：</div>
                                        <!--<ul class="exchange-list">
                                             <li v-for="i in 6">
                                                 
                                                  <input  name="radioinput" type="radio"  :id="'radioname'+i">
                                                  <label :for="'radioname'+i">{{i}}万平台币</label>
                                             </li>
                                        </ul>-->
                                        <el-radio-group v-model="exchangeparams.radioinput">
                                            <el-radio  v-for="i in 6" :label="i" :key=i>{{i}}万平台币</el-radio>
                                        </el-radio-group>
                                        <div class="othernum">其他数量：
                                             <input type="text" v-model="exchangeparams.otherinput"   @keyup="formatIntegery($event, 'exchangeparams','otherinput')">
                                        </div>
                                   </div>
                                   <div class="fl">
                                        <div class="fl width90">交易密码：</div>
                                        <input class="fl" type="text" v-model="exchangeparams.tranPwd"  @keyup="InputFocus($event)">
                                   </div>
                                   <!--<div class="fl">-->
                                        <!--<div class="fl">图形验证码：</div>-->
                                        <!--<input class="fl" type="text" >-->
                                   <!--</div>-->
                                        <p class="payment ">实际付款：
                                        <span class="marginL10">{{payment?payment:0}}</span> Goo
                                        <!--<span>{{exchangeparams.platAmount?exchangeparams.platAmount:0}}</span> Golds-->
                                   </p>
                                   <p>兑换比例为1Goo: {{ratioData?  ratioData:0}}平台币</p>
                                   <div  class="bottom_btn" @click="submitAccount">立即兑换</div>
                              </div>
                              <!--提现页-->
                              <div v-show="accountStatus == 5">
                                   <p>提现平台币</p>
                                   <p>
                                        <span>以太坊账号</span>
                                        <span>{{userInfoData.walletAddress|cutaddr}}</span>
                                   </p>
                                   <p>
                                        <span>可兑换平台币</span>
                                        <span>{{BalanceData.balance}}</span>个</p>
                                   <div>
                                        <div>
                                             <span>提现平台币</span>
                                             <input type="text" v-model="WithdrawData.platAmount" placeholder="请输入想要提现的平台币数量"  @keyup="formatIntegery($event, 'WithdrawData','platAmount')">
                                        </div>
                                        <div>
                                             <span>交易密码</span>
                                             <input v-model="WithdrawData.tranPwd" type="text" @keyup="InputFocus($event)" placeholder="请输入请输入交易密码" maxlength="6">
                                        </div>
                                        <!--<div>-->
                                             <!--<span>图形密码</span>-->
                                             <!--<input v-model="WithdrawData.code" type="text" placeholder="请输入图形密码" maxlength="4">-->
                                             <!--<img class="fr" src="~@res/imgs/account number_icon.png" alt="">-->
                                        <!--</div>-->
                                   </div>
                                   <div @click="Withdraw">立即提现</div>
                              </div>
                         </div>
                         <!--我的应用-->
                         <div v-show="oli[1].isTrue">
                              <p>我的应用</p>
                              <ul v-if="appData.length!=0">
                                   <li v-for="item in appData" class="fl">
                                        <img class="fl" :src="item.logoUrl" alt="">
                                        <div class="fl">
                                             <p>{{item.name}}</p>
                                             <p @click="goGameDetail(item.hrefUrl)">开始</p>
                                        </div>
                                   </li>
                              </ul>
                              <div v-else style="text-align: left">暂无应用~</div>
                              <div v-show="total">
                                   <span class="fl">总共{{total}}个项目</span>
                                   <el-pagination class="fl" style="display: inline-block;" :total="total" @current-change="(val)=> handleCurrentChange(val, 1)" :current-page.sync="appParams.page" :page-size="appParams.limit" layout="prev, pager, next">
                                   </el-pagination>
                              </div>
                         </div>
                         <!--账号安全-->
                         <div v-show="oli[2].isTrue">
                              <!--账号安全主页-->
                              <div v-show="accountSecurityStatus == 1">
                                   <p>账号安全</p>
                                   <div>
                                        <img class="fl" src="~@res/imgs/account number_icon.png" alt="">
                                        <p class="fl">
                                             <span>账号</span>
                                             <span class="modio">{{username}}</span>
                                        </p>
                                   </div>
                                   <div>
                                        <img class="fl" src="~@res/imgs/ethereum_icon.png" alt="">
                                        <p class="fl">
                                             <span>以太坊账号</span>
                                             <span class="modio" v-if="userInfoData.walletAddress == ''">未绑定</span>
                                             <span class="modio" v-else>{{userInfoData.walletAddress|cutaddr}}</span>
                                              <span class="button fr" @click="accountStatus=3;tab(oli[0],0)" v-show="userInfoData.walletAddress == ''">绑定</span>                                          
                                        </p>
                                   </div>
                                   <div>
                                        <img class="fl" src="~@res/imgs/password_icon2.png" alt="">
                                        <p class="fl">
                                             <span>密保问题</span>
                                             <span class="modio" v-if="userInfoData.isSafe == 1">已设置</span>
                                             <span class="modio" v-else>未设置</span>
                                        </p>
                                   </div>
                                   <div>
                                        <img class="fl" src="~@res/imgs/business_icon.png" alt="">
                                        <p class="fl">
                                             <span>交易密码</span>
                                             <span class="modio" v-if="userInfoData.isSetTranspwd!=1">未设置</span>
                                             <span class="modio" v-else>已设置</span>
                                             <span class="button fr" v-if="userInfoData.isSetTranspwd!=1" @click="accountSecurityStatus = 2">设置</span>
                                             <span class="button fr" @click="accountSecurityStatus = 3" v-else>修改</span>
                                        </p>
                                   </div>
                                   <div>
                                        <img class="fl" src="~@res/imgs/password_icon.png" alt="">
                                        <p class="fl">
                                             <span>登录密码</span>
                                             <span class="modio" v-if="userInfoData.isSetTranspwd">已设置</span>
                                             <span class="button fr" @click="accountSecurityStatus = 4">修改</span>
                                        </p>
                                   </div>
                              </div>
                              <!--交易密码设置-->
                              <div v-show="accountSecurityStatus == 2">
                                   <p>设置交易密码</p>
                                   <div>
                                        <p>交易密码</p>
                                        <input v-model="setPasswordData.new" maxlength="6" type="text" placeholder="由六位数字组成" @keyup="InputFocus($event)">
                                        <p>确认密码</p>
                                        <input v-model="setPasswordData.two" maxlength="6" type="text" placeholder="请再次输入交易密码" @keyup="InputFocus($event)">
                                        <div @click="submitSetTransactionPassword">提交</div>
                                   </div>
                                   <div class="bottom-space"></div>
                              </div>
                              <!--交易密码修改-->
                              <div v-show="accountSecurityStatus == 3">
                                   <p>修改交易密码</p>
                                   <div>
                                        <div class="top">
                                            <div  class="fl">请选择找回方式</div>
                                             <div class="fl" :class="{'hover': modificationPasswordStatus == 1}" @click="modificationPasswordStatus=1">
                                                  输入旧密码
                                                  <p></p>
                                             </div>
                                             <div class="fl" :class="{'hover': modificationPasswordStatus == 2}" @click="modificationPasswordStatus=2">
                                                  回答密保
                                                  <p></p>
                                             </div>
                                        </div>
                                        <div class="checksafaQA"  @click="getsafaData()" v-show="modificationPasswordStatus ==2">
                                            换一批问题
                                            </div>
                                        <div class="bottom">
                                             <!--输入旧密码-->
                                             <div v-show="modificationPasswordStatus ==1">
                                                  <p>旧交易密码</p>
                                                  <input v-model="modificationPasswordData.old" maxlength="6" type="" @keyup="InputFocus($event)" placeholder="由6位数字组成">
                                                  <p>新交易密码</p>
                                                  <input v-model="modificationPasswordData.new" maxlength="6" type="" @keyup="InputFocus($event)" placeholder="由6位数字组成">
                                                  <p>确认交易密码</p>
                                                  <input v-model="modificationPasswordData.two" maxlength="6" type="" @keyup="InputFocus($event)" placeholder="请再次输入交易密码">
                                             </div>
                                             <div v-show="modificationPasswordStatus ==2">

                                                  <div v-for="(item,index) in encrypted">
                                                       <p class="issue" v-show="index==0">问题一：{{item.question}}</p>
                                                       <p class="issue" v-show="index==1">问题二：{{item.question}}</p>
                                                       <input v-model="item.answer"  type="text" placeholder="请输入预设的问题答案">
                                                  </div>
                                                  <p class="marginB10">新交易密码</p>
                                                  <input v-model="modificationPasswordData.new2" maxlength="6" type="" @keyup="InputFocus($event)" placeholder="由6位数字组成">
                                                  <p class="marginB10">确认交易密码</p>
                                                  <input v-model="modificationPasswordData.two2" maxlength="6" type="" @keyup="InputFocus($event)" placeholder="请再次输入交易密码">
                                             </div>
                                             <div @click="submitmodificationPasswor">提交</div>
                                             
                                        </div>
                                   </div>
                              </div>
                              <!--修改登陆密码-->
                              <div v-show="accountSecurityStatus == 4">
                                   <p>修改登录密码</p>
                                   <div>
                                        <p>旧登录密码</p>
                                        <input maxlength="18" v-model="loginPassword.old" type="" @keyup="InputFocus($event)" placeholder="由8-16位字母和数字组成">
                                        <p>新登陆密码</p>
                                        <input maxlength="18" v-model="loginPassword.new" type="" @keyup="InputFocus($event)" placeholder="由8-16位字母和数字组成">
                                        <p>新登陆密码</p>
                                        <input maxlength="18" v-model="loginPassword.two" type="" @keyup="InputFocus($event)" placeholder="请再次输入新密码">
                                        <div @click="submintLoginPassword">提交</div>
                                   </div>
                              </div>
                         </div>
                         <!--我的消息-->
                         <div v-show="oli[3].isTrue">
                              <p>我的消息</p>
                              <ul>
                                   <li v-for="item in msgData">
                                        <div class="fl">
                                             <img v-if="true" src="~@res/imgs/new1.png" alt="">
                                             <img v-else src="~@res/imgs/new2.png" alt="">
                                        </div>
                                        <div class="fr">
                                             <p>
                                                  <span>{{item.title}}</span>
                                                  <span class="fr">{{item.createTime}}</span>
                                             </p>
                                             <p>{{item.content}}</p>
                                        </div>
                                   </li>
                              </ul>
                              <div v-show="newsTotal">
                                   <div>
                                        <span class="fl">总共{{newsTotal}}个消息</span>
                                        <el-pagination class="fl" style="display: inline-block;" :total="newsTotal" @current-change="(val)=> handleCurrentChange(val, 2)" :current-page.sync="newsParameters.page" :page-size="newsParameters.limit" layout="prev, pager, next">
                                        </el-pagination>
                                   </div>
                              </div>
                         </div>
                         <!--交易明细-->
                         <div v-show="oli[4].isTrue">
                              <p>交易明细</p>
                              <div class="top">
                                   平台币
                                   <span>{{userInfoData.balance}}个</span>
                                   <span class="fr" @click="go_url(5)">提现</span>
                                   <span class="fr" @click="go_url(4)">兑换</span>
                              </div>
                              <div class="bottom">
                                   <table cellspacing="0" cellpadding="0">
                                        <thead>
                                             <th>时间</th>
                                             <th>交易类型</th>
                                             <th>交易内容</th>
                                             <th>交易数量</th>
                                             <th>平台币余额</th>
                                        </thead>
                                        <tbody>
                                             <tr v-for="item in transactionData">
                                                  <td>{{item.createTime}}</td>
                                                  <td>{{item.revenueExpendType|revenueExpendTypeFilters}}</td>
                                                  <td>{{item.remark}}</td>
                                                  <td>{{item.amount}}</td>
                                                  <td>{{item.currentTotalAmount}}</td>
                                             </tr>
                                        </tbody>
                                   </table>
                                   <div v-show="transactionTotal">
                                        <div>
                                             <span class="fl">总共{{transactionTotal}}个</span>
                                             <el-pagination class="fl" style="display: inline-block;" :total="transactionTotal" @current-change="(val)=> handleCurrentChange(val, 3)" :current-page.sync="transactionParameters.page" :page-size="transactionParameters.limit" layout="prev, pager, next">
                                             </el-pagination>
                                        </div>
                                   </div>
                                   <div class="bottom-space"></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from '@utils/config';
import { Common } from '@common/common';
import { validate } from '@common/validation';
export default {
     components: {
     },
     data() {
          return {
               oli: [
                    { name: '我的账号', isTrue: true },
                    { name: '我的应用', isTrue: false },
                    { name: '账号安全', isTrue: false },
                    { name: '我的消息', isTrue: false },
                    { name: '交易明细', isTrue: false },

               ],
               // 我的账号状态
               accountStatus: 5, // 1代表没绑定， 2代表绑定后， 3绑定页面 4兑换页面 5提现
               account: '', //账号
               WithdrawData: {
                   amount: '', //平台比
                   platAmount: '',
                   tranPwd: ''
               }, //提现数据
               total: 1000,
               parameters: {
                    index: 1,
                    limit: 12
               },
               adhibitionData: [//应用列表
                    { url: '', name: '4324', p: '432' }
               ],
               // 账号安全状态
               accountSecurityStatus: 1, // 1 主页 2设置交易密码 3修改交易密码 4修改登录密码
               setPasswordData: { //设置交易密码数据
                    new: '',
                    two: ''
               },
               modificationPasswordData: {//修改交易密码数据

               },
               modificationPasswordStatus: 1, //1为输入旧密码 2为回答密保
               encrypted: [],
               loginPassword: {
                    odl: '',
                    new: '',
                    two: ''
               },
               // 消息
               newsTotal: 0,
               newsParameters: { //消息分页
                   limit: 3,
                   page: 1,
               },
               transactionParameters: { //交易参数
                    index: 1,
                    limit: 7
               },
              token:'',//token
              appParams: {
                    limit: 10,
                    page: 1,
              },
              exchangeparams: {
                  amount: '',//兑换金额(合约币金额)
                  platAmount: '',//兑换金额(平台币金额)
                  tranPwd: '',//交易密码
                  otherinput: '',//其他兑换数量
                  radioinput: 1,//单选兑换数量

              },
              appData:[],
              msgData:[],
              total:0,
              transactionData:[],//交易记录
              userInfoData:[],//账号状态
              safaData:[],//账号状态
              transactionTotal:0,
              username:'',
              ratioData:'',//兑换比例
              BalanceData:{},//兑换比例

          }
     },
     computed: {
         payment(){
            //    console.log('this.exchangeparams.radioinput',this.exchangeparams.radioinput)
             if(this.exchangeparams.otherinput){
                //  console.log('ss')
                 this.exchangeparams.platAmount = this.exchangeparams.otherinput;
                 return this.exchangeparams.otherinput/this.ratioData
             }else{
                 this.exchangeparams.platAmount = this.exchangeparams.radioinput*this.ratioData;
                 return this.exchangeparams.radioinput/this.ratioData;
               
             }
         }
     },
     created() {
         this.username=this.$Cookies.get('name');
         // console.log(' this.username', this.username)
         this.getAppData();//获取我的应用
         this.getMsgData();//获取消息
         this.getAclogData();//获取交易记录
         this.getUserInfoData();//获取账号状态
         this.getsafaData();//获取账号状态
         this.getratioData();//获取兑换比例
         this.getBalanceData();//获取合约币的数量
     },
     mounted() {
         if(this.userInfoData.walletAddress == ''){
            this.accountStatus=1
         }else{
            this.accountStatus=2
         }
        //  console.log(this.accountStatus);
     },
     methods: {
         getAppData() {
             ajax({
                 url: 'application/myApps',
                 optionParams: this.appParams
             }).post()
                 .then(res => {
                     if (res.code === 200) {
                         this.appData = res.data.records?res.data.records:{};
                         this.total=res.data.total;
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
         },
         getMsgData() {//获取我的消息
             ajax({
                 url: 'message/page',
                 optionParams: this.transactionParameters
             }).post()
                 .then(res => {
                     if (res.code === 200) {
                         this.msgData = res.data.records?res.data.records:{};
                         this.newsTotal=res.data.total;
                        //  console.log('newsTotal',this.newsTotal)
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
         },
         getAclogData() {//获取我的交易明细
             ajax({
                 url: 'acUserLog/page',
                 optionParams: this.newsParameters
             }).post()
                 .then(res => {
                     if (res.code === 200) {
                         this.transactionData = res.data.records?res.data.records:{};
                         this.transactionTotal=res.data.total;
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
         },
         getUserInfoData() {//获取我的账号状态
             ajax({
                 url: 'tAppUser/userInfo',
                 optionParams: {}
             }).fetch()
                 .then(res => {
                     if (res.code === 200) {
                         this.userInfoData = res.data?res.data:{};
                         this.accountStatus=2;
                         if(this.userInfoData.walletAddress == ''){
                             console.log("1111")
                             this.accountStatus=1;//以太坊账号未绑定
                         }
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
         },
          getsafaData() {//获取我的账号状态
             ajax({
                 url: 'tAppUser/question',
                 optionParams: {}
             }).fetch()
                 .then(res => {
                     if (res.code === 200) {
                         this.encrypted = res.data?res.data:[];
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
         },
         getratioData() {//获取兑换比例
             ajax({
                 url: 'exchangeWithdraw/queryExchangeRatio',
                 optionParams: {}
             }).post()
                 .then(res => {
                     if (res.code === 200) {
                         this.ratioData = res.data?res.data:{};
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
         },
         getBalanceData() {//获取合约币
             ajax({
                 url: 'exchangeWithdraw/queryTokenBalance',
                 optionParams: {}
             }).post()
                 .then(res => {
                     if (res.code === 200) {
                         console.log('balance',res.data)
                         this.BalanceData = res.data?res.data:{};
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
         },
          tab(item, index) {
            //   console.log(item);
                // if(user)
               this.oli.map((itm) => {
                    itm.isTrue = false;
               })
               if (index + 1 == 3) {
                    this.accountSecurityStatus = 1; //默认显示账号安全主页
               }
               if(this.userInfoData.walletAddress == ''){          
                   this.accountStatus=1;//以太坊账号未绑定
                }else{

                }
               if(item.name == '我的账号'){ 
                    if(this.userInfoData.walletAddress == ''){
                        this.accountStatus=1
                    }else{
                        this.accountStatus=2
                    }      
                //    this.accountStatus=2;//以太坊账号未绑定
                //    this.accountSecurityStatus=1;//以太坊账号未绑定
                }
               item.isTrue = true;
          },
          // 绑定以太坊账号
          bindingAccount() {
               if (!this.account) {
                    this.$message({
                         message: '请输入以太坊账号！',
                         type: 'warning',
                    });
                    return;
               }
               if (this.account.indexOf('0x') == -1) {
                    this.$message({
                         message: '以太坊账号格式不正确！',
                         type: 'warning',
                    });
                    return;
               }
              

              ajax({
                  url: 'userWalletAddress/bind/'+this.account,
                  optionParams: {}
              }).fetch()
                  .then(res => {
                      if (res.code === 200) {
                          this.$message.success(res.message);
                          this.getUserInfoData();
                      }
                  })
                  .catch(error => {
                      console.log(error)
                  })

          },
          //提现和兑换判断
          conversion(number) {
               if (this.accountStatus == 1) {
                    this.$alert('您还未绑定以太坊账号哦，是否立即绑定！', '绑定账号', {
                         confirmButtonText: '绑定',
                         callback: action => {
                              this.accountStatus = 3; //去绑定页面
                              return false;
                         }
                    });
               }
               if (number) {
                    this.accountStatus = 4; //去兑换
               } else {
                    this.accountStatus = 5; //去提现
               }
          },
          // 兑换
          submitAccount() {
               //console.log('兑换222233333333')
               if(!this.exchangeparams.tranPwd){
                   thi.$message.warning("交易密码不能为空")
                   return;
               }
               if(!this.exchangeparams.platAmount){
                   this.$message.warning("兑换平台币金额不能为空")
                   return;
               }

              this.exchangeparams.amount = this.exchangeparams.platAmount/this.ratioData;
              //console.log("1111")
              //console.log(this.exchangeparams.amount)
              ajax({
                  url: 'exchangeWithdraw/exchange',
                  optionParams: this.exchangeparams
              }).post()
                  .then(res => {
                      if (res.code === 200) {
                          this.$message.success(res.message);
                          this.exchangeparams={};
                          this.accountStatus = 2; //成功
                          this.getUserInfoData();
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
          //格式化整数
          formatIntegery(e, firstName, twoNameName) {
               let obj = {
                    input: e
               }
               this[firstName][twoNameName] = Common.positiveIntegerMoney(obj); //表单赋值
          },
          // 提现
          Withdraw() {
                    if (!this.WithdrawData.platAmount) {
                    this.$message({
                         message: '请输入想要提现的平台币数量',
                         type: 'warning',
                    });
                    return false;
               }
               if (!this.WithdrawData.tranPwd) {
                    this.$message({
                         message: '请输入请输入交易密码',
                         type: 'warning',
                    });
                    return false;
               }
               // if (!this.WithdrawData.code) {
               //      this.$message({
               //           message: '请输入图形密码',
               //           type: 'warning',
               //      });
               //      return false;
               // }
               //console.log('提现')///
              this.WithdrawData.amount=this.WithdrawData.platAmount/this.ratioData;
        
              ajax({
                  url: 'exchangeWithdraw/withdraw',
                  optionParams: this.WithdrawData
              }).post()
                  .then(res => {
                      if (res.code === 200) {
                          this.$message.success(res.message);
                          this.getUserInfoData();
                          this.WithdrawData={};
                          this.accountStatus = 2; //成功
                      }
                  })
                  .catch(error => {
                      console.log(error)
                  })
              // /
          },
          // 提交设置交易密码
          submitSetTransactionPassword() {
               if (!this.setPasswordData.new) {
                    this.$message({
                         message: '请输入交易密码！',
                         type: 'warning',
                    });
                    return false;
               }
               if (!validate.isNumber(this.setPasswordData.new, 6)) {
                    this.$message({
                         message: '格式不正确，交易密码由6位数字组成！',
                         type: 'warning',
                    });
                    return false;
               }
               if (!this.setPasswordData.two) {
                    this.$message({
                         message: '确认密码不能为空！',
                         type: 'warning',
                    });
                    return false;
               }
               if (this.setPasswordData.two != this.setPasswordData.new) {
                    this.$message({
                         message: '两次输入的密码不一致!',
                         type: 'warning',
                    });
                    return false;
               }

              ajax({
                  url: 'tAppUser/transPwdSetting/'+this.setPasswordData.two,
                  optionParams: {}
              }).fetch()
                  .then(res => {
                      if (res.code === 200) {
                          this.$message.success(res.message);
                          this.getUserInfoData();
                      }
                  })
                  .catch(error => {
                      console.log(error)
                  })

               this.accountSecurityStatus = 1; //调回账号安全主页
               this.setPasswordData = {}; //置空
          },
          // 修改交易密码提交
          submitmodificationPasswor() {
              
               if (this.modificationPasswordStatus == 1) {
                    // 输入密码
                    if (!this.modificationPasswordData.new) {
                        this.$message({
                            message: '请输入新交易密码！',
                            type: 'warning',
                        });
                        return false;
                    }
                    if (!validate.isNumber(this.modificationPasswordData.new, 6)) {
                        this.$message({
                            message: '格式不正确，新交易密码由6位数字组成！',
                            type: 'warning',
                        });
                        return false;
                    }
                    if (!this.modificationPasswordData.two) {
                        this.$message({
                            message: '确认密码不能为空!',
                            type: 'warning',
                        });
                        return false;
                    }
                    if (this.modificationPasswordData.two != this.modificationPasswordData.new) {
                        this.$message({
                            message: '再次确认的交易密码和新交易密码不一样!',
                            type: 'warning',
                        });
                        return false;
                    }
                    if (!this.modificationPasswordData.old) {
                         this.$message({
                              message: '请输入旧交易密码！',
                              type: 'warning',
                         });
                         return false;
                    }
                    if (!validate.isNumber(this.modificationPasswordData.old, 6)) {
                         this.$message({
                              message: '格式不正确，旧交易密码由6位数字组成！',
                              type: 'warning',
                         });
                         return false;
                    }

                   ajax({
                       url: 'tAppUser/transPwdSetting/'+this.modificationPasswordData.old+','+this.modificationPasswordData.two,
                       optionParams: {}
                   }).fetch()
                       .then(res => {
                           if (res.code === 200) {
                               this.$message.success(res.message);
                               
                               // modificationPasswordStatus
                               this.getUserInfoData();


                            this.accountSecurityStatus = 1;//回主页
                            this.modificationPasswordStatus = 1; //重置这一页
                            this.modificationPasswordData = {}; //密码置空
                           }else{
                               this.$message.warning(res.message);
                           }
                       })
                       .catch(error => {
                           console.log(error)
                       })
                    // this.modificationPasswordStatus = 2; //进入密保设置
                   //this.accountSecurityStatus = 1;//回主页
                    return false;
               }


                   // 输入密码
                    if (!this.modificationPasswordData.new2) {
                        this.$message({
                            message: '请输入新交易密码！',
                            type: 'warning',
                        });
                        return false;
                    }
                    if (!validate.isNumber(this.modificationPasswordData.new2, 6)) {
                        this.$message({
                            message: '格式不正确，新交易密码由6位数字组成！',
                            type: 'warning',
                        });
                        return false;
                    }
                    if (!this.modificationPasswordData.two2) {
                        this.$message({
                            message: '确认密码不能为空!',
                            type: 'warning',
                        });
                        return false;
                    }
                    if (this.modificationPasswordData.two2 != this.modificationPasswordData.new2) {
                        this.$message({
                            message: '再次确认的交易密码和新交易密码不一样!',
                            type: 'warning',
                        });
                        return false;
                    }
               
               // 密保设置
               let arr = [];
               this.encrypted.map((item) => {
                    if (item.answer) {
                         arr.push(item)
                    }
               });
               if (arr.length < 2) {
                    this.$message({
                         message: '问题不能为空!',
                         type: 'warning',
                    });
                    return false;
               }

              ajax({
                  url: 'tAppUser/resetTransPwd',
                  optionParams: {
                      newPwd:this.modificationPasswordData.new2,
                      safes:arr,
                  }
              }).post()
                  .then(res => {
                      if (res.code === 200) {
                          this.$message.success(res.message);
                          this.getUserInfoData();

                          this.getsafaData()
                        //   this.encrypted=[];
                          console.log("1111"+this.encrypted)
                          this.modificationPasswordData={};

                        this.accountSecurityStatus = 1;//回主页
                        this.modificationPasswordStatus = 1; //重置这一页
                        this.modificationPasswordData = {}; //密码置空
                      }else{
                               this.$message.warning(res.message);
                           }
                  })
                  .catch(error => {
                      console.log(error)
                  })
            //    this.accountSecurityStatus = 1;//回主页
            //    this.modificationPasswordStatus = 1; //重置这一页
            //    this.modificationPasswordData = {}; //密码置空
          },
          // 修改登陆密码
          submintLoginPassword() {
               if (!this.loginPassword.old) {
                    this.$message({
                         message: '请输入旧登陆密码!',
                         type: 'warning',
                    });
                    return false;
               }
               if (!validate.passWord(this.loginPassword.old, 8)) {
                    this.$message({
                         message: '旧登陆密码格式不正确， 由8-16位字母数字组成!',
                         type: 'warning',
                    });
                    return false;
               }
               if (!this.loginPassword.new) {
                    this.$message({
                         message: '请输入新登陆密码!',
                         type: 'warning',
                    });
                    return false;
               }
               if (!validate.passWord(this.loginPassword.new, 8)) {
                    this.$message({
                         message: '新登陆密码格式不正确， 由8-16位字母数字组成!',
                         type: 'warning',
                    });
                    return false;
               }
               if (!this.loginPassword.two) {
                    this.$message({
                         message: '请再次输入新密码!',
                         type: 'warning',
                    });
                    return false;
               }
               if (this.loginPassword.two != this.loginPassword.new) {
                    this.$message({
                         message: '再次输入的密码和新密码不一致!',
                         type: 'warning',
                    });
                    return false;
               }
              ajax({
                  url: 'tAppUser/updPwd',
                  optionParams: {
                      newPwd:this.loginPassword.new,
                      oldPwd:this.loginPassword.old,
                  }
              }).post()
                  .then(res => {
                      if (res.code === 200) {
                          this.$message.success(res.message);
                          // this.getUserInfoData();
                      }else{
                               this.$message.warning(res.message);
                           }
                  })
                  .catch(error => {
                      console.log(error)
                  })
               this.accountSecurityStatus = 1;//回主页
               this.loginPassword = {}; //置空
          },
          //分页切换
          handleCurrentChange(value, number) {
               //number 1 应用 2消息 3 交易明细
               console.log(value)
          },
          go_url(number) {
               this.oli.map((itm) => {
                    itm.isTrue = false;
               })
               this.oli[0].isTrue = true;
                this.accountStatus = number;
            //    if(this.userInfoData.walletAddress == ''){
            //        this.accountStatus = 1;
            //    }
          },
          //解决密码框自动填充问题
          InputFocus(e) {
               let input = e.srcElement ? e.srcElement : e.target;
               input.type = 'password';
          },
     },
     filters: {

         // 1、充值 2:提现中 3兑换申请 4兑换成功
          revenueExpendTypeFilters(val){
             let value = parseInt(val);
             if(value == 1){
                 return "充值"
             }else if(value == 2){
                  return "提现中"
              }else if(value == 3){
                  return "兑换申请"
              }else if(value == 4){
                  return "兑换成功"
              }
          },
         cutaddr(val){
              if(val){
                  if(val.length>10){
                      return val.substr(0 ,5)+"******"+val.substr(val.length-5)
                  }
             }
         }
     }
}
</script>
<style lang="less">
@import './index.less';
</style>
<style lang="less">

</style>