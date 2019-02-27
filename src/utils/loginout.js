import Cookies from 'js-cookie';
import store from '@src/store';
import {
     Message
} from 'element-ui';
import ajax from '@utils/config';
export default function loginout(isLoginout) {
     // token
     store.dispatch('SETUSER', {
          user: ''
     });
     Cookies.remove('token');
     Cookies.remove('name');
     let type = '';
     let text = '';
     if (isLoginout) {
          type = 'success';
          text = '退出成功'
     } else {
          type = 'warning';
          text = '登录失效，请重新登录'
     }
     Message({
          message: text,
          type: type,
     });
     if (window.location.hash == '#/personalCenter/index') {
          setTimeout(() => {
               window.location.reload();
          }, 500)
     }
}