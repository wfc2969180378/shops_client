<template>
    <div class="footer_guide">
      <a class="guide-item" @click="goTo('/msite')">
        <span>
          <i class="iconfont icon-waimai"></i>
        </span>
      <span class="guide-text">外卖</span>
      </a>
      <a class="guide-item" @click="goTo('/search')">
        <span>
          <i class="iconfont icon-search"></i>
        </span>
        <span class="guide-text">搜索</span>
      </a>
      <a class="guide-item" @click="goTo('/order')">
        <span>
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span class="guide-text">订单</span>
      </a>
      <a class="guide-item" @click="goTo('/profile')">
        <span>
          <i class="iconfont icon-geren"></i>
        </span>
        <span class="guide-text">我的</span>
      </a>
    </div>
</template>

<script>
    export default {
       methods:{
         goTo(path) {
           this.$router.replace(path)
         }
       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    position fixed !important
    height 45px
    z-index 100
    width 100%
    bottom 0
    right 0
    left 0
    background #fafafa
    display flex
    top-border-1px(#e4e4e4)
    .guide-item
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      .guide-text
        font-size 14px
</style>
