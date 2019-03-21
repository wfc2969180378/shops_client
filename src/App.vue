<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
    import {mapActions} from 'vuex'


    export default {
        components: {
          FooterGuide
        },
        methods: {
          ...mapActions(['getAddress']),
        },
        mounted() {
          this.getAddress();
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">

  #app
    width 100%
    height 100%
    background #fcfcfc
</style>
