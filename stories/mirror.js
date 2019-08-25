import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import LiquidChart from '../src/charts/Liquid/index'
import MirrorChart from '../src/charts/Mirror/index'

const data = [{
    city: '石家庄',
    type: '水果',
    value: 14500,
  }, 
  {
    city: '石家庄',
    type: '奶茶',
    value: 6500,
  },{
    city: '石家庄',
    type: '餐饮',
    value: 2300,
  },{
    city: '深圳',
    type: '茶叶',
    value: 9000,
  }, 
  {
    city: '深圳',
    type: '牛奶',
    value: 7800,
  },
  {
    city: '深圳',
    type: '土陶',
    value: 6000,
  }]


  Vue.component()
storiesOf('mirror-chart', module)
  .add('base scatter', () => ({
    components: {
        MirrorChart
    },
    data: () => {
      return {
        data
      }
    },
    template: '<mirror-chart :data="data"></mirror-chart>'
  }))

