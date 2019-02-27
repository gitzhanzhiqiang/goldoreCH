import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as filters from './filters/index.js';
// import 'animate.css'
Object.keys(filters).forEach(key => {
     Vue.filter(key, filters[key])
})
import store from '@src/store';
import App from './index.vue';
import login from '@views/login/login.vue';
import registered from '@views/login/registered.vue';

import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
import home from '@views/home';
import about from '@views/about';
import contact from '@views/contact';
import news from '@views/news';
import services from '@views/services';
import game from '@views/game';
import personalCenter from '@views/personalCenter';
import Cookies from 'js-cookie';
import ajax from '@utils/config';
import handleRouter from '@src/utils/handleRouter';

Vue.prototype.$Cookies = Cookies;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

const defaultRoute = {
     path: '/',
     component: App,
     meta: {
          id: '100000',
     },
     children: [
          home,
          about,
          contact,
          news,
          services,
          game,
          personalCenter
     ]
};
const routes = [{
          path: '/login',
          name: '登录',
          hidden: true,
          component: login
     },
     {
          path: '/registered',
          name: '注册',
          hidden: true,
          component: registered
     },
     {
          path: '/',
          redirect: '/sunfin/index'
     },
     defaultRoute,
];

export default routes;
Vue.filter('statusFilter', function (value) {
     var statusInfo = '';
     if (value == '0') statusInfo = '成功';
     if (value == '1') statusInfo = '失败';
     if (value == '2') statusInfo = '未审核';
     return statusInfo;
})
Vue.filter('statusColorFilter', function (value) {
     var statusInfo = '';
     if (value == '0') statusInfo = 'w-btnGreen';
     if (value == '1') statusInfo = 'w-btnWarning';
     if (value == '2') statusInfo = 'w-btnGray';
     return statusInfo;
})


const router = new VueRouter({
     scrollBehavior: () => ({
          y: 0
     }),
     routes
})

let toHome = false;
// //全局钩子作用于所有路由，里面的参数to表示即将要进入的路由对象，from表示即将要离开的路由对象 路由进入之前
router.beforeEach((to, from, next) => {
     // 开启Progress
     NProgress.start();
     store.dispatch('SETUSER', {
          user: Cookies.get('name')
     });
     if (!Cookies.get('name') && to.path == '/personalCenter/index') {
          next('/login')
     }

     next();
     NProgress.done();
});
//路由进入之后
router.afterEach((to, from) => {
     NProgress.done(); // 结束Progress
});
new Vue({
     el: '#app',
     store,
     router,
     template: '<App />',
     components: {
          App
     },
     mounted() {

     }
});