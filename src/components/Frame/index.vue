<template>
  <div class="frame">
    <div class="border-container">
      <span class="border lt vertical"></span>
      <span class="border lt horizontal"></span>
      <span class="border rt vertical"></span>
      <span class="border rt horizontal"></span>
      <span class="border rb vertical"></span>
      <span class="border rb horizontal"></span>
      <span class="border lb vertical"></span>
      <span class="border lb horizontal"></span>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style scoped lang="postcss">

/* (border-frame) / 2 + frame */
  .frame {
    @apply relative inline-block border-solid border-indigo-800;
    border-width: 2px;
  }
  .border {
    @apply absolute inline-block border-solid border-green-400;
    border-top-width: 4px;
    border-left-width: 4px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .border-container {
    @apply absolute h-full w-full top-0 left-0;
  }
  .horizontal {
    width: 40px;
  }
  .vertical {
    height: 40px;
  }
  .rt {
    top: -3px;
    right: -3px;
  }
  .lt {
    top: -3px;
    left: -3px;
  }
  .rb {
    bottom: -3px;
    right: -3px;
  }
  .lb {
    bottom: -3px;
    left: -3px;
  }
</style>
