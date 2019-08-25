<template>
  <div id="app" class="app">
    <header class="app-header">
      <app-title></app-title>
    </header>
    <section class="app-body">
      <aside class="app-nav">
        <app-nav></app-nav>
      </aside>
      <div class="app-router-container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="postcss" scoped>
.app {
  min-height: 100%;
  height: calc(1080 / 3200 * 100vw);
  display: flex;
  flex-flow: column;
  background: no-repeat 50% 50% url(./bg.png);
  background-size: 100% 100%;
}
.app-header {
  height: 500PX;
  /* background-color: darksalmon; */
}
.app-body {
  flex: auto;
  /* background-color: aquamarine; */
  display: flex;
}
.app-nav {
  width: 250px;
  /* background-color: bisque */
}
</style>
