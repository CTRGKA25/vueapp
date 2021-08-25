<template>
  <div clas="app-wrapper">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view :key="key"></router-view>
      </keep-alive>
      <router-view v-else :key="key"></router-view>
    </div>
    <app-tabbar v-if="$route.meta.showTab"></app-tabbar>
  </div>
</template>

<script>
  import AppTabbar from './components/AppTabbar'
  export default {
    name: 'Layout',
    components: {
      AppTabbar,
    },
    computed: {
      key() {
        return this.$route.fullPath
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
