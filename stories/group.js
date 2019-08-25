import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import GroupColumn from '../src/charts/GroupedColumn/index'

const data = [{
    "name": "London",
    "times": "Jan.",
    "月均降雨量": 18.9
}, {
    "name": "London",
    "times": "Feb.",
    "月均降雨量": 28.8
}, {
    "name": "London",
    "times": "Mar.",
    "月均降雨量": 39.3
}, {
    "name": "London",
    "times": "Apr.",
    "月均降雨量": 81.4
}, {
    "name": "London",
    "times": "May",
    "月均降雨量": 47
}, {
    "name": "London",
    "times": "Jun.",
    "月均降雨量": 20.3
}, {
    "name": "London",
    "times": "Jul.",
    "月均降雨量": 24
}, {
    "name": "London",
    "times": "Aug.",
    "月均降雨量": 35.6
}, {
    "name": "Berlin",
    "times": "Jan.",
    "月均降雨量": 12.4
}, {
    "name": "Berlin",
    "times": "Feb.",
    "月均降雨量": 23.2
}, {
    "name": "Berlin",
    "times": "Mar.",
    "月均降雨量": 34.5
}, {
    "name": "Berlin",
    "times": "Apr.",
    "月均降雨量": 99.7
}, {
    "name": "Berlin",
    "times": "May",
    "月均降雨量": 52.6
}, {
    "name": "Berlin",
    "times": "Jun.",
    "月均降雨量": 35.5
}, {
    "name": "Berlin",
    "times": "Jul.",
    "月均降雨量": 37.4
}, {
    "name": "Berlin",
    "times": "Aug.",
    "月均降雨量": 42.4
}];



Vue.component()
storiesOf('group-column', module)
  .add('base line', () => ({
    components: {
      GroupColumn
    },
    data: () => {
      return {
        data:data
      }
    },
    methods:{
      getWeekandyear(WeekYear){
        if(WeekYear === 'week'){
          this.data = data2;
        }else if(WeekYear === 'year'){
          this.data = data1;
        }
      }
    },
    template: '<group-column :data="data" @func="getWeekandyear"></group-column>'
  }))
