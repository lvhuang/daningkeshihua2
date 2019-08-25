<template>
  <div class="search-container">
    <input class="search" @input="search" v-model="value" placeholder="搜索" />
    <div v-show="searchList.length" class="search-list">
      <span class="item" :key="item.id" v-for="item in searchList" @click="select(item.id)">{{ item.name }}</span>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts">
</script>
<style scoped lang="postcss">
.search-container {
  @apply relative;
}
.search {
  @apply absolute top-0 left-0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  background: transparent;
  font-size: var(--font-size-3);
  text-indent: 0.5em;
  width: 100%;
  height: 100%;
}
.search-list {
  @apply absolute;
  top: 120%;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: var(--font-size-3);
  text-indent: 0.5em;
  & .item {
    @apply block;
    height: 6%;
    &:hover {
      color: rgba(9, 25, 44, 0.916);
      background-color: rgba(87, 100, 221, 0.491);
    }
  }
}
</style>
