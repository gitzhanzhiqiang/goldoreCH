import Template from '@src/views/layout/template';
import aboutUs from './aboutUs';
import company from './company';
import advantages from './advantages';
import mission from './mission';
import partners from './partners';
module.exports = {
  path: '/sunfin',
  component: Template,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'aboutUs',
      name: 'about_index',
      component: aboutUs,
      meta: {
        title: '关于我们'
      },
      
    },
    {
      path: 'company',
      name: 'about_company',
      component: company,
      meta: {
        title: '公司介绍'
      },
      
    },
    {
      path: 'advantages',
      name: 'about_advantages',
      component: advantages,
      meta: {
        title: '我们的优势'
      },
      
    },
    {
      path: 'mission',
      name: 'about_mission',
      component: mission,
      meta: {
        title: '我们的使命'
      },
      
    },
    {
      path: 'partners',
      name: 'about_partners',
      component: partners,
      meta: {
        title: '我们的伙伴'
      },
      
    }
  ]
}
