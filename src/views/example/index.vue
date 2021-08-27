<template>
  <div>
    <div style="display: flex; justify-content: center">
      <img src="../../assets/images/logo-vue.png" />
    </div>
    <div style="display: flex; justify-content: center">
      <h2>Vue2 Vant Template</h2>
    </div>
    <div style="padding-left: 20px">
      <div>
        <h5>1、切换主题色</h5>
        <div style="display: flex; justify-content: space-around">
          <van-button :color="$store.state.theme.themes.blue.color" @click="handleSetTheme('blue')"
            >蓝色</van-button
          >
          <van-button :color="$store.state.theme.themes.red.color" @click="handleSetTheme('red')"
            >红色</van-button
          >
          <van-button
            :color="$store.state.theme.themes.green.color"
            @click="handleSetTheme('green')"
            >绿色</van-button
          >
        </div>
      </div>
      <div>
        <h5>2、moment，日期格式化，{{ currentTime }}</h5>
      </div>
      <div>
        <h5>3、easytimer，倒计时，{{ timeValue }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  import Timer from 'easytimer.js'
  export default {
    name: 'Example',
    data() {
      return {
        timeValue: '',
      }
    },
    computed: {
      currentTime() {
        return this.$moment().format('YYYY-MM-DD HH:mm:ss')
      },
    },
    mounted() {
      const _this = this
      const timer = new Timer()
      timer.start()
      timer.addEventListener('secondsUpdated', function (e) {
        console.log(e)
        _this.timeValue = timer.getTimeValues().toString()
      })
    },
    methods: {
      handleSetTheme(value) {
        if (value === 'blue') {
          this.$toast('切换为蓝色主题色')
        }
        if (value === 'red') {
          this.$toast('切换为红色主题色')
        }
        if (value === 'green') {
          this.$toast('切换为绿色主题色')
        }
        this.$store.dispatch('theme/setThemeType', value)
      },
    },
  }
</script>

<style scoped></style>
