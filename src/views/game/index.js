import Template from '@src/views/layout/template';
import index from './index.vue';
module.exports = {
  path: '/game',
  component: Template,
  meta: {
    title: '应用'
  },
  children: [
    {
      path: 'index',
      name: 'game_index',
      component: index,
      meta: {
        title: '应用'
      },
      
    }
  ]
}
