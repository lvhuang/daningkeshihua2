<template>
  <div class="page">
    <chart-frame class="chart chart-1">
      <hello>{{data.hello}}</hello>
      <!-- <span width="data.width" class="hello" @click="onHelloClick">hello {{ data.hello }}</span> -->
    </chart-frame>
    <chart-frame class="chart chart-2">
      <liquid-chart :data="data.liquid"></liquid-chart>
    </chart-frame>
    <chart-frame class="chart chart-3">
      <mirror-chart :data="data.mirror"></mirror-chart>
    </chart-frame>
    <chart-frame class="chart chart-4"></chart-frame>
    <chart-frame class="chart chart-5"></chart-frame>
    <chart-frame class="chart chart-6"></chart-frame>
    <chart-frame class="chart chart-7"></chart-frame>
    <chart-frame class="chart chart-8"></chart-frame>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="postcss" scoped>
.chart {
  width: 1920px;
  height: 1080px;
  position: absolute;
}
.chart-1 {
  left: 500px;
  top: 500px;
}
.chart-2 {
  left: 2800px;
  top: 500px;
}
.chart-3 {
  left: 5100px;
  top: 500px;
}
.chart-4 {
  left: 7400px;
  top: 500px;
}
.chart-5 {
  left: 500px;
  top: 1800px;
}
.chart-6 {
  left: 2800px;
  top: 1800px;
}
.chart-7 {
  left: 5100px;
  top: 1800px;
}
.chart-8 {
  left: 7400px;
  top: 1800px;
}
.hello {
  position: absolute;
  z-index: 1;
  font-size: var(--font-size-1);
}
</style>
