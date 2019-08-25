<template>
  <div>
    <div class="charhead">
      <p class="chartext">用户数据：</p>
      <div class="btn">
        <button @click="checkWeekYear('week')">周</button>
        <button @click="checkWeekYear('year')">年</button>
      </div>
    </div>
    <div class="line" ref="chart"></div>
  </div>
</template>
<script lang="ts" src="./index.ts">
</script>
<style scoped lang="postcss">
/* .line {
  width: 60vw;
  height: 100vh;
} */
.charhead {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 3;
}
.chartext {
  font-size: var(--font-size-4);
}
</style>
