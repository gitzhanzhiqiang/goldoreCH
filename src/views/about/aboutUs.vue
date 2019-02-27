<template>
    <div class="app-container calendar-list-container ggg_user">
        <!--<div v-for ="(item, index) in 4" @click="fsfdf('list'+index)" :ref="'list' + index">654654</div>-->
        <div class="banner">
            <img :src="img1">

            <p>
                开源、公平、免费 <br/>
                的区块链应用平台
            </p>
        </div>
        <div class="con">
            <div class="abou">
                <img src="~@res/imgs/abouta.png"/>
                <div class="Ore wow slideInUp">
                    <h2>什么是Gold Ore??</h2>
                    <P>我们致力于区块链技术的开发和应用，Gold Ore 作为开源平台，为区块链技术爱好者提供开放平台，开发者们可以在平台上尽情释放才华和想象力，并获得Gold Ore提供的相应技术协助，平台与开发者协同设计具有现实意义的区块链应用。而非开发者也可作为用户享受区块链技术所带来的乐趣，我们的服务面向所有人。</P>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {WOW} from 'wowjs';
    import ajax from '@utils/config';

    export default {
        data() {
            return {
                img1: require("@res/imgs/imga/aboutda.png"),
            }
        },
        computed: {},
        created() {
            this.fanding()
        },
        mounted() {
            this.$nextTick(() => {
                new WOW().init()
            })
        },
        methods: {
            fanding() {
                window.scrollTo(0, 0);
            },
//			fsfdf (name) {
//				console.log(this.$refs[name])
//			}
        },
        filters: {}
    }
</script>
<style lang="less" scoped>
    .banner {
        position: relative;
    }

    .banner P {
        font-size: 50px;
        font-family: MyriadPro-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 73px;
        position: absolute;
        left: 399px;
        bottom: 220px;
    }

    .banner img {
        width: 100%;
        height: 100%;
    }

    .abou {
        width: 100%;
        height: 553px;
        position: relative;
    }

    .abou img {
        width: 100%;
        height: 280px;
        margin-top: 89px;
    }

    .abou .Ore {
        width: 840px;
        height: 340px;
        background: rgba(235, 238, 245, 1);
        box-shadow: 10px 0px 24px rgba(35, 24, 21, 0.17);
        position: absolute;
        bottom: 62px;
        left: 112px;
    }

    .abou .Ore h2 {
        text-align: center;
        font-size: 32px;
        font-family: Adobe Heiti Std R;
        font-weight: normal;
        color: rgba(0, 0, 0, 1);
        padding: 55px 0px 30px 0px;
    }

    .abou .Ore P {
        width: 606px;
        margin: 0 auto;
        font-size: 14px;
        font-family: ArialMT;
        font-weight: 400;
        color: #7c7c8b;
        line-height: 24px;
    }
</style>