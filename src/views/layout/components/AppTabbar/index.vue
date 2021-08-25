<template>
  <div>
    <van-tabbar fixed route v-model="active">
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <template #icon="props">
          <template v-if="props.active">
            <svg-icon icon-class="icon-tabbar-home-fill" />
          </template>
          <template v-else>
            <svg-icon icon-class="icon-tabbar-home" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home">
        <span>分类</span>
        <template #icon="props">
          <template v-if="props.active">
            <svg-icon icon-class="icon-tabbar-message-fill" />
          </template>
          <template v-else>
            <svg-icon icon-class="icon-tabbar-message" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home">
        <span>通知</span>
        <template #icon="props">
          <template v-if="props.active">
            <svg-icon icon-class="icon-tabbar-comment-fill" />
          </template>
          <template v-else>
            <svg-icon icon-class="icon-tabbar-comment" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home">
        <span>我的</span>
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
