<template>
  <div class="footer_guide">
    <router-link
      class="guide_item"
      :class="{on: '/miste' === $route.path}"
      @click="goTo('/msite')"
      to="/"
      tag="a"
    >
      <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
      </span>
      <span class="item_text">
       外卖
      </span>
    </router-link>
    <router-link
      class="guide_item"
      :class="{on: '/search' === $route.path}"
      @click="goTo('/search')"
      to="/search"
      tag="a"
    >
      <span class="item_icon">
          <i class="iconfont icon-search"></i>
      </span>
      <span class="item_text">
         搜索
      </span>
    </router-link>
    <router-link
      class="guide_item"
      :class="{on: '/order' === $route.path}"
      @click="goTo('/order')"
      to="/order"
      tag="a"
    >
      <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
      </span>
      <span class="item_text">
        订单
      </span>
    </router-link>
    <router-link
      class="guide_item"
      :class="{on: '/profile' === $route.path}"
      @click="goTo('/profile')"
      to="/profile"
      tag="a"
    >
      <span class="item_icon">
          <i class="iconfont icon-geren"></i>
      </span>
      <span class="item_text">
        我的
      </span>
    </router-link>
  </div>
</template>

<script>
    export default {
        methods: {
          goTo(path) {
            this.$router.replace(path);
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    display flex
    z-index 100
    width 100%
    height 50px
    background #fcfcfc
    position fixed
    bottom 0
    left 0
    right 0
    .guide_item
      display flex
      flex 1
      flex-direction column
      align-items center
      margin 5px
      &.on
        color green !important
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px



</style>
