<template>
  <div>
    <div class="shop_header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="shop_content">
      <ul v-if="shops.length">
        <li v-for="(shop, index) in shops"
            :key="index" class="shop_li "
        >
          <div class="shop_left">
            <img :src="baseImgUrl + shop.image_path" alt="" class="shop_img">
          </div>
          <div class="shop_right">
            <section class="shop_detail">
              <h4 class="shop_detail_header ellipsis">{{ shop.name }}</h4>
              <ul class="shop_detail_support">
                <li class="supports" v-for="(support, index) in shop.supports"
                    :key="index">
                  {{ support.icon_name }}
                </li>
              </ul>
            </section>
            <section class="shop_rating_order">

            </section>
            <section class="shop_distance">

            </section>
          </div>
        </li>
      </ul>
      <ul v-else>
        <li v-for="item in 6">
          <img src="./images/shop_back.svg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data ()  {
      return {
        baseImgUrl: 'http://cangdu.org:8001/img/'
      }
    },
    computed: {
      ...mapState(['shops'])
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop_li
    width 100%
    height 100px
    border-bottom 1px solid red
    display flex
    .shop_left
      flex 1
      background green
      height 100px
    .shop_right
      flex 3
      background yellow
      height 100px
      section
        height 33px
        line-height 33px
        width 100%
        background red
      .shop_detail
        width 100%
        display flex
        .shop_detail_header
          flex 2
        &::before
          content '品牌'
          display inline-block
          font-size 12px
          color #333
          background yellow
        .shop_detail_support
          flex 1
          text-align center
          .supports
            float left
            font-size 14px

</style>
