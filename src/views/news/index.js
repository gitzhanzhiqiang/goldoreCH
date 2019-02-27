import Template from '@src/views/layout/template';
import news from './page';
import details from './details';
module.exports = {
  path: '/sunfin',
  component: Template,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'news',
      name: 'news_index',
      component: news,
      meta: {
        title: '新闻'
      },
      
    },
    {
      path: 'details',
      name: 'news_details',
      component: details,
      meta: {
        title: '详情'
      },
      
    }
  ]
}
