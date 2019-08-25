import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import LineChart from '../src/charts/Line/index'

const data1 = [{
  "time": "Jan",
  "city": "Newyork",
  "temperature": 7
}, {
  "time": "Jan",
  "city": "London",
  "temperature": 3.9
}, 
{
  "time": "Jan",
  "city": "Tokyo",
  "temperature": 4.9
},{
  "time": "Feb",
  "city": "Tokyo",
  "temperature": 6.9
}, {
  "time": "Feb",
  "city": "London",
  "temperature": 4.2
},
{
  "time": "Feb",
  "city": "Newyork",
  "temperature": 8.2
}, {
  "time": "Mar",
  "city": "Newyork",
  "temperature": 9.5
}, {
  "time": "Mar",
  "city": "Tokyo",
  "temperature": 8.3
}, 
{
  "time": "Mar",
  "city": "London",
  "temperature": 5.7
},{
  "time": "Apr",
  "city": "Tokyo",
  "temperature": 14.5
}, {
  "time": "Apr",
  "city": "London",
  "temperature": 8.5
}, 
{
  "time": "Apr",
  "city": "Newyork",
  "temperature": 10.5
},{
  "time": "May",
  "city": "Tokyo",
  "temperature": 19.4
}, {
  "time": "May",
  "city": "London",
  "temperature": 11.9
}, 
{
  "time": "May",
  "city": "Newyork",
  "temperature": 14.9
},{
  "time": "Jun",
  "city": "Newyork",
  "temperature": 21.5
}, {
  "time": "Jun",
  "city": "London",
  "temperature": 15.2
}, 
{
  "time": "Jun",
  "city": "Tokyo",
  "temperature": 25.2
}, {
  "time": "Jul",
  "city": "Newyork",
  "temperature": 25.2
}, {
  "time": "Jul",
  "city": "Tokyo",
  "temperature": 28
}, 
{
  "time": "Jul",
  "city": "London",
  "temperature": 17
},{
  "time": "Aug",
  "city": "Newyork",
  "temperature": 26.5
}, {
  "time": "Aug",
  "city": "London",
  "temperature": 16.6
}, 
{
  "time": "Aug",
  "city": "Tokyo",
  "temperature": 29.6
},{
  "time": "Sep",
  "city": "Tokyo",
  "temperature": 23.3
}, {
  "time": "Sep",
  "city": "London",
  "temperature": 14.2
}, 
{
  "time": "Sep",
  "city": "Newyork",
  "temperature": 24.2
},{
  "time": "Oct",
  "city": "Tokyo",
  "temperature": 18.3
}, {
  "time": "Oct",
  "city": "Newyork",
  "temperature": 10.3
}, 
{
  "time": "Oct",
  "city": "London",
  "temperature": 11.3
},{
  "time": "Nov",
  "city": "Tokyo",
  "temperature": 13.9
}, 
{
  "time": "Nov",
  "city": "London",
  "temperature": 5.9
},{
  "time": "Nov",
  "city": "Newyork",
  "temperature": 6.6
}, {
  "time": "Dec",
  "city": "Tokyo",
  "temperature": 9.6
}, {
  "time": "Dec",
  "city": "Newyork",
  "temperature": 4.8
},
{
  "time": "Dec",
  "city": "London",
  "temperature": 3.8
}];


const data2 = [{
  "time": "周一",
  "city": "Newyork",
  "temperature": 9
}, {
  "time": "周一",
  "city": "London",
  "temperature": 3.9
}, 
{
  "time": "周一",
  "city": "Tokyo",
  "temperature": 4.9
},{
  "time": "周二",
  "city": "Newyork",
  "temperature": 9
}, {
  "time": "周二",
  "city": "London",
  "temperature": 3.9
}, 
{
  "time": "周二",
  "city": "Tokyo",
  "temperature": 4.9
},{
  "time": "周三",
  "city": "Newyork",
  "temperature": 9
}, {
  "time": "周三",
  "city": "London",
  "temperature": 3.9
}, 
{
  "time": "周三",
  "city": "Tokyo",
  "temperature": 4.9
},{
  "time": "周四",
  "city": "Newyork",
  "temperature": 9
}, {
  "time": "周四",
  "city": "London",
  "temperature": 3.9
}, 
{
  "time": "周四",
  "city": "Tokyo",
  "temperature": 4.9
}]

Vue.component()
storiesOf('line-chart', module)
  .add('base line', () => ({
    components: {
      LineChart
    },
    data: () => {
      return {
        data:data1
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
    template: '<line-chart :data="data" @func="getWeekandyear"></line-chart>'
  }))
