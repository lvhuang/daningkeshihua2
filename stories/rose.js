import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import RoseChart from '../src/charts/Rosehart'

const data = [{
    year: '2001',
    population: 41.8
  }, {
    year: '2002',
    population: 38
  }, {
    year: '2003',
    population: 33.7
  }, {
    year: '2004',
    population: 30.7
  }];


Vue.component()
storiesOf('rose-chart', module)
  .add('base scatter', () => ({
    components: {
        RoseChart
    },
    data: () => {
      return {
        data
      }
    },
    template: '<rose-chart :data="data"></rose-chart>'
  }))
