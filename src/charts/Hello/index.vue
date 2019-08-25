<template>
  <h2 ref="chart" class="hello"><slot></slot></h2>
</template>
<script lang="ts" src="./index.ts"></script>
<style scoped lang="postcss">
.hello {
  @apply text-center pt-10;
}
</style>
