import Template from '@src/views/layout/template';
import home from './page';
module.exports = {
  path: '/sunfin',
  component: Template,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'index',
      name: 'home_index',
      component: home,
      meta: {
        title: '首页'
      },
      
    }
  ]
}
