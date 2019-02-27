﻿<template>
  <div class='mainCon'>
  </div>
</template>

<script>
import _ from "underscore";
import { mapGetters } from 'vuex';
import store from '@src/store';
import handleRouter from '@src/utils/handleRouter';
import ajax from '@utils/config';
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      // activeIndex: '0',
      // collapseUrl: require("@res/img/icon-liebiao.png"),
      
    };
  },
  computed: {
    
  },
  created() {
  },
  mounted() {
    //this.handleRouter(this.$store.getters.router);
    // this.getRouter();
    // this.listInfo.map((item, index) => {
    //   if (window.location.href.indexOf(item.hash) != -1) {
    //     item.status = true; 
    //   }
    // })
  },
  methods: {
    statusFlag: function(item, addRouter) {
      let status = !item.status;
      for (let list in addRouter) {
        addRouter[list].status = false;
      }
      item.status = status;
    },
    // setActiveIndex (index) {
    //     this.activeIndex = index + '';
    // },
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
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    Collapse() {
    },
    go_url(children) {
      if (children.children.length == 0) {
        this.$router.push(children.path);
      }
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
// .el-menu-item-group {
//   .el-menu-item-group__title {
//     padding: 0 !important;
//   }
// }
// .el-menu-item-group__title{
//   padding: 0px!important;
//   &:hover{
//     border-left: 4px solid #2dc3e8;box-sizing:border-box;
//   }
// }
// .el-menu-item-group{
//   border-left: 0px solid #e4e8f1;
//   margin-left: 0;
//   background-color: #fff;
//   &:hover{
//     border-left: 4px solid #ed4e2a;box-sizing:border-box;
//     margin-left: -4px;
    
//     &>ul{
//     .el-menu-item{
//       position: relative;
//       line-height: 40px;
//       &>li{
//         content: "";
//         position: absolute;
//         width: 5px;
//         height: 5px;
//         left: 16px;
//         top: 19px;
//         border: 1px solid #dedede;
//         border-radius: 50%;
//         z-index: 2;
//         background-color: #fff;
//       }
//       &>span{
//         color: #333;
//       }
//     }
//       &.is-active{
//         &>li{
//           content: "";
//           position: absolute;
//           width: 5px;
//           height: 5px;
//           left: 20px;
//           top: 17px;
//           border: 1px solid #572020;
//           border-radius: 50%;
//           z-index: 2;
//           }
//       }
//     }
//   }
//   &>ul{
//     .el-menu-item{
//       position: relative;
//       line-height: 40px;
//       &>li{
//         content: "";
//         position: absolute;
//         width: 5px;
//         height: 5px;
//         left: 16px;
//         top: 19px;
//         border: 1px solid #dedede;
//         border-radius: 50%;
//         background-color: #fff;
//         z-index: 2;
//       }
//     }
//     &.is-active{
//       &>li{
//       content: "";
//       position: absolute;
//       width: 5px;
//       height: 5px;
//       left: 16px;
//       top: 17px;
//       border: 1px solid #572020;
//       border-radius: 50%;
//       z-index: 2;
//       }
//       &>span{
//         color: #333;
//       }
//     } 
//   }
  
//   &>ul::before{
//     content: "";
//     display: block;
//     position: absolute;
//     z-index: 1;
//     left: 23px;
//     top: 0;
//     bottom: 25px;
//     border-left: 1px solid #dedede;
    
//     .is-active{
//       border-left: 4px solid #2EA4FD;
//     }
//   }
// }
// .el-submenu__title{
//   font-size: 13px;
//   //border-left: 4px solid #2dc3e8;
// }
// //.el-select-dropdown__item.selected{
// //  background-color: #359aff;
// //  &.hover{
// //    background-color: #359aff!important;
// //  }
// //}

// //.el-pager{
// //  &.el-pager li.active{
// //    background-color: #359aff;
// //    border-color:#359aff;
// //  }
// //}
// .el-upload-list__item-name [class^=el-icon] {
//   height: auto !important;
// }
// .listBox .el-menu .is-opened:hover{
//   border-top:none;
//   border-top:1px solid #428bca;
// }
// .el-menu-item, .el-submenu__title{ 
//   height: 40px!important; 
//   line-height: 40px!important;
//   border-bottom: 1px solid #dedede;
// }

// .el-submenu__title{ 
//     border-bottom: 1px solid #dedede;
//     background-color:#fff !important;
// }
// .el-submenu__title:hover{ 
//   border-bottom: 1px solid #dedede;
//   background-color:#fbfbfb !important;
//   &>span{
//     color: #333;
//   }
  
// }
// .el-submenu.is-active .el-submenu__title{ 
//   border-bottom: 1px solid #e4e8f1!important;
//  }

// .el-submenu{ border-left: 4px solid #e4e8f1;}
</style>

