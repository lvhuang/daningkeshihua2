<template>
  <div class="aside-nav">
    <span class="nav-item"><router-link :to="{ name: 'energy'}">能源</router-link></span>
    <span class="nav-item"><router-link :to="{ name: 'facility'}">设备</router-link></span>
    <span class="nav-item"><router-link :to="{ name: 'quality'}">质量</router-link></span>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
    };
  }
};
</script>
<style scoped lang="postcss">
.aside-nav {
  @apply w-full h-full flex flex-col justify-around items-center;
}
.nav-item {
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background-color: cadetblue;
  @apply flex justify-center items-center cursor-pointer;
  &:active {
    background-color: coral;
  }
}
</style>
