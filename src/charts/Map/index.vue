<template>
  <div class="map-container">
    <div class="map" ref="chart"></div>
    <button class="zoom" @click="getZoom">获取缩放等级</button>
    <search :search-list="searchList" class="search-component"
      @search="search"
      @select="select"
    ></search>
  </div>
</template>
<script lang="ts" src="./index.ts">
</script>
<style scoped lang="postcss">
.map-container {
  @apply relative;
}
.map-container, .map {
  width: 100%;
  height: 100%;
}
.zoom, .search {
  position: absolute;
}
.search-component {
  position: absolute;
  top: 10%;
  left: 10%;
  height: 6%;
  width: 20%;
}

</style>
