<template>
    <header class="header">
      <slot name="left"></slot>
      <span class="header_title">
        <span class="title ellipsis">{{title}}</span>
      </span>
      <slot name="right"></slot>
    </header>
</template>

<script>
    export default {
       props: {
         title: String
       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    height 45px
    width 100%
    position fixed
    left 0
    top 0
    background $green
    color #fff
    z-index 100
    .header_search
      position absolute
      left 15px
      top 50%
      width 10%
      height 50%
      transform translateY(-50%)
      color #fff
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      left 50%
      top 50%
      width 50%
      transform translate(-50%,-50%)
      text-align center
      .title
        font-size 20px
        color #fff
        display block
    .header_login
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      color #fff
      font-size 14px
</style>
