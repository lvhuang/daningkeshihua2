import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import BasicColumnChart from '../src/charts/BasicColumn/index'

const data1 = [{
    time: '周日',
    sales: 99
  }, {
    time: '周一',
    sales: 56
  }, {
    time: '周二',
    sales: 23
  }, {
    time: '周三',
    sales: 88
  }, {
    time: '周四',
    sales: 105
  }, {
    time: '周五',
    sales: 72
  }, {
    time: '周六',
    sales: 38
  }];

  const data2 = [{
    time: '1951 年',
    sales: 90
  }, {
    time: '1952 年',
    sales: 30
  }, {
    time: '1956 年',
    sales: 66
  }, {
    time: '1957 年',
    sales: 28
  }, {
    time: '1958 年',
    sales: 37
  }, {
    time: '1959 年',
    sales: 79
  }, {
    time: '1960 年',
    sales: 38
  }, {
    time: '1962 年',
    sales: 38
  }];

  Vue.component()
storiesOf('column-chart', module)
  .add('base line', () => ({
    components: {
        BasicColumnChart
    },
    data: () => {
      return {
        data:data1
      }
    },
    methods:{
      getWeekandyear(WeekYear){
        if(WeekYear === 'week'){
          this.data = data1;
        }else if(WeekYear === 'year'){
          this.data = data2;
        }
      }
    },
    template: '<basic-column-chart :data="data" @func="getWeekandyear"></basic-column-chart>'
  }))