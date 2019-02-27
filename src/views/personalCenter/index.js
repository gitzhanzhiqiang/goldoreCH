import Template from '@src/views/layout/template';
import index from './index.vue';
module.exports = {
  path: '/personalCenter',
  component: Template,
  meta: {
    title: '个人中心'
  },
  children: [
    {
      path: 'index',
      name: 'personalCenter_index',
      component: index,
      meta: {
        title: '个人中心'
      },
      
    }
  ]
}
