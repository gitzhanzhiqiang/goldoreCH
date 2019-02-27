import Template from '@src/views/layout/template';
import contact from './contactUs';
import pagetali from './pagetali';
module.exports = {
  path: '/sunfin',
  component: Template,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'contactUs',
      name: 'contact_index',
      component: contact,
      meta: {
        title: '联系我们'
      },
      
    },
    {
      path: 'pagetali',
      name: 'contact_pagetali',
      component: pagetali,
      meta: {
        title: '成功'
      },
      
    }
  ]
}
