<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuide
    },
    mounted() {

      this.getAddress()
      this.getUserInfo()
      this.getShops()
    },
    methods: {
      ...mapActions(['getAddress','getUserInfo','getShops'])
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #app
    height 100%
    width 100%
</style>
