<template>
    <div>
        <el-carousel :interval="5000" arrow="always" :style="style">
            <el-carousel-item v-for="(item,index) in url" :key="index" :style="style">
                <img :src="item.url">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
'use strict';
import Cookies from 'js-cookie';
export default {
    props: {
        url: {//轮播图图片路径array
			type: Array,
			'default': []
        },
        width: {//轮播图容器宽度
            type: String,
			'default': '0px'
        },
        height: {//轮播图容器高度
            type: String,
			'default': '0px'
        }
    },
    data() {
        return {
            img1: '',
            // url:[],
            style:''
        }
    },
    created() {
        // this.url = [{url:this.img1},{url:this.img1}];
        this.style = 'width:'+this.width+';'+'height:'+this.height+";";
    },
    computed: {
        //     ...mapGetters([
        //       'headerRouter'
        //   ])
    },
    mounted() {
        console.log(this.url);
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.el-carousel__container {
    .el-carousel__arrow--right {
        border: none;
        outline: 0;
        padding: 0;
        margin: 0;
        height: 36px;
        width: 8.8%;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s;
        background-color: rgba(31,45,61,.11);
        color: #fff;
        position: absolute;
        bottom: 0px !important;
        z-index: 10;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        font-size: 12px;
    }
}
.el-carousel__arrow--left {
    // background-color:rgba(255,255,255,1) !important;
    // left: 133px !important;
    // color: red !important;
    // background-image: url(../../config/res/img/da_you@2x.png) !important;
}
</style>
