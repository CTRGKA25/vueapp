<template>
  <div>
    <van-tabbar
      fixed
      route
      v-model="active"
      :active-color="$store.getters.themeColor"
      class="ignore-max-container"
      style="right: 0"
    >
      <van-tabbar-item replace to="/home">
        <span>仪表盘</span>
        <template #icon="props">
          <template v-if="props.active">
            <svg-icon icon-class="icon-tabbar-home-fill" />
          </template>
          <template v-else>
            <svg-icon icon-class="icon-tabbar-home" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/record">
        <span>推广记录</span>
        <template #icon="props">
          <template v-if="props.active">
            <svg-icon icon-class="icon-tabbar-subcribe-fill" />
          </template>
          <template v-else>
            <svg-icon icon-class="icon-tabbar-subcribe" />
          </template>
        </template>
      </van-tabbar-item>

      <van-tabbar-item replace to="/user">
        <span>个人设置</span>
        <template #icon="props">
          <template v-if="props.active">
            <svg-icon icon-class="icon-tabbar-mine-fill" />
          </template>
          <template v-else>
            <svg-icon icon-class="icon-tabbar-mine" />
          </template>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Tabbar, TabbarItem } from 'vant'
  Vue.use(Tabbar)
  Vue.use(TabbarItem)
  export default {
    name: 'AppTabbar',
    components: {},
    data() {
      return {
        active: 0,
      }
    },
  }
</script>
