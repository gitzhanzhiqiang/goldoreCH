import Template from '@src/views/layout/template';
import services from './page';
import trustservice from './trustservice';
import insuranceService from './insuranceService';
import enterpriseFinancing from './enterpriseFinancing';
import situation from './situation';
module.exports = {
  path: '/sunfin',
  component: Template,
  meta: {
    title: '首页'
  },
  children: [{
      path: 'services',
      name: 'services_index',
      component: services,
      meta: {
        title: '服务'
      },

    },
    {
      path: 'trustservice',
      name: 'services_trustservice',
      component: trustservice,
      meta: {
        title: '信托服务'
      },

    },
    {
      path: 'insuranceService',
      name: 'services_insuranceService',
      component: insuranceService,
      meta: {
        title: '保险服务'
      },

    },
    {
      path: 'enterpriseFinancing',
      name: 'services_enterpriseFinancing',
      component: enterpriseFinancing,
      meta: {
        title: '企业融资'
      },

    },
    {
      path: 'situation',
      name: 'services_situation',
      component: situation,
      meta: {
        title: '双赢计划'
      },

    }
  ]
}