<template>
  <h2 class="not-found">404</h2>
</template>
<script lang="ts">
export default {
  data() {
    return {
      message: "router"
    };
  }
};
</script>
<style scoped lang="postcss">
.not-found {
  @apply text-center pt-10;
}
</style>
