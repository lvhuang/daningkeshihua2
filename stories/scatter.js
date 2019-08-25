import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import ScatterChart from '../src/charts/Scatter/index'

const data = [
  [10.0, 8.04],
  [8.0, 6.95],
  [13.0, 7.58],
  [9.0, 8.81],
  [11.0, 8.33],
  [14.0, 9.96],
  [6.0, 7.24],
  [4.0, 4.26],
  [12.0, 10.84],
  [7.0, 4.82],
  [5.0, 5.68]
];

Vue.component()
storiesOf('scatter-chart', module)
  .add('base scatter', () => ({
    components: {
      ScatterChart
    },
    data: () => {
      return {
        data
      }
    },
    template: '<scatter-chart :data="data"></scatter-chart>'
  }))