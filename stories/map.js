import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Map from '../src/charts/Map/index'
import { randomUniform } from 'd3';
const searchList = []

function createSearchList() {
  return new Array(Math.round(randomUniform(1, 6)())).fill(null).map((item, index) => {
    return {name: `路线${index}`, id: index}
  })
}

function createPoints() {
  return new Array(Math.round(randomUniform(6)())).fill(null).map(() => {
    return {lng: randomUniform(114, 122)(), lat: randomUniform(26, 32)()}
  })
}

function createRoutes() {
  return new Array(Math.round(randomUniform(6)())).fill(null).map(() => {
    return new Array(Math.round(randomUniform(2, 8)())).fill(null).map(() => {
      return {lng: randomUniform(114, 122)(), lat: randomUniform(26, 32)()}
    })
  })
}
const points = [
  {lng: 118.596072664929, lat: 26.27397411906668},
  {lng: 119.3743645585168, lat: 28.306070864928458},
  {lng: 114.2815292680403, lat: 26.179920948417124},
  {lng: 121.45949335868873, lat: 31.06015022499031}
]
const routes = [
  [
    {lng: 118.596072664929, lat: 26.27397411906668},
    {lng: 118.596072664929, lat: 27.27397411906668},
    {lng: 119.596072664929, lat: 27.57397411906668},
    {lng: 119.796072664929, lat: 28.57397411906668},
  ],
]
Vue.component()
storiesOf('百度地图', module)
  .add('basic bmap', () => ({
    components: {
      BaiduMap: Map
    },
    data: () => {
      return {
        routes,
        points,
        searchList,
      }
    },
    template: `<div :style="{width: '90vw', height: '90vh'}">
      <baidu-map :search-list="searchList" :routes="routes" :points="points" @search="search" @select="select"></baidu-map>
    </div>`,
    methods: {
      search(name) {
        this.searchList = createSearchList().map(item => {
          return {
            ...item,
            name: item.name + name
          }
        })
      },
      select(id) {
        console.log(id)
        this.searchList = []
        this.points = createPoints()
        this.routes = createRoutes()
      }
    },
    mounted() {
    }
  }))
