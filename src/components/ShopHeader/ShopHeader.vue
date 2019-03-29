<template>
    <section class="shop-header">
      <nav class="shop-nav">
        <a href="" class="back" @click="$router.back()" :style="{backgroundImage: `url(${infos.bgImg})`}" >
          <i class="iconfont icon-arrow_left"></i>
        </a>
      </nav>

      <section class="shop-content" @click="toggleShopShow">
        <img :src="infos.avatar" alt="" class="avatar">
        <div class="header-content">
          <h2 class="header-title">
            {{ infos.name }}
          </h2>
          <div class="header-info">
            <ul class="header-info-items clea">
              <li class="header-info-item"><span>{{ infos.score }}</span></li>
              <li class="header-info-item"><span>月售{{ infos.sellCount }}单</span></li>
              <li class="header-info-item"><span>{{ infos.description }}</span></li>
              <li class="header-info-item"><span>约{{ infos.deliveryTime }}分钟</span></li>
              <li class="header-info-item"><span>距离{{ infos.distance }}</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="shop-infos" v-if="infos.supports" @click="toggleSupportShow">
        <ul class="shop-infos-title" :class="supportClasses[infos.supports[0].type]">
          <li class="shops-name">
             {{ infos.supports[0].name }}
          </li>
          <li class="shops-content ellipsis">
            {{ infos.supports[0].content }}
          </li>
          <li class="shops-length">
            {{ infos.supports.length }}个优惠
          </li>
        </ul>
      </section>

      <mt-popup
        v-model="shopShow" position="center">
        <div class="shopShows">
          <h3 class="infos-name">{{ infos.name }}</h3>
          <ul class="infos-items">
            <li>
              <h3>{{ infos.score }}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{ infos.sellCount }}</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>{{ infos.description }}</h3>
              <p>约{{ infos.deliveryTime }}分钟</p>
            </li>
            <li>
              <h3>{{ infos.deliveryPrice }}元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{ infos.distance }}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="infos-bulletin">
            <span>公告</span>
          </h3>
          <p class="bulletin-content">{{ infos.bulletin }}</p>
        </div>
      </mt-popup>

      <mt-popup
        v-model="supportShow" position="bottom">
        <div class="supportShows">
          <h3 class="coupon-activity">优惠活动</h3>
          <ul class="coupon-content">
            <li v-for="(support, index) in infos.supports"
            :key="index">
              <span class="mini-tag">{{support.name}}</span>
              <span class="activity-content">{{support.content}}</span>
            </li>
          </ul>
        </div>
      </mt-popup>

    </section>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      data () {
        return {
          supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
          shopShow: false,
          supportShow: false
        }
      },
       computed: {
         ...mapState(['infos'])
       },
      methods: {
        toggleShopShow() {
          this.shopShow = !this.shopShow
        },
        toggleSupportShow() {
          this.supportShow = !this.supportShow
        }
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .shop-header
    height 100%
    position relative
    background #fff
    color #000
    overflow hidden
    .shop-nav
      background-size cover
      background-repeat no-repeat
      height 40px
      padding 10px 10px
      position relative
      line-height 40px
      .back
        position: absolute
        top: 0
        left: 0
        display block
        width 100%
        height 100%
        background-size cover
        background-repeat no-repeat
        background-position center center
        color #fff
        .icon-arrow_left
          display: block
          padding: 5px
          font-size: 20px
          color: #fff
    .shop-content
      height 95px
      width 100%
      position relative
      .avatar
        width 80px
        height 80px
        position absolute
        left 50%
        top -45px
        transform translateX(-50%)
        border 1px solid gainsboro
    .header-content
      padding-top 43px
      .header-title
        text-align center
        color #000
        width 100%
        font-weight bold
        font-size 20px
        position relative
        &::before
          position absolute
          content "品牌"
          font-size 12px
          background yellow
          display block
          left 38px
          padding 5px
          top 50%
          transform translateY(-50%)
        &::after
          position absolute
          content ""
          display block
          right 55px
          border-style solid
          border-width 7px
          border-color transparent transparent transparent rgba(0,0,0,0.67)
          top 50%
          transform translateY(-50%)
      .header-info
        width 100%
        color #000
        font-size 13px
        padding 10px 0 5px 38px
        .header-info-items
          width 100%
          clearFix()
          .header-info-item
            color #000
            float left
            padding-right 10px
    .shop-infos
      height 100%
      width 100%
      .shop-infos-title
        width 76%
        margin-left 40px
        padding 3px
        border 1px solid #fce
        li
          float left
          font-size 13px
          padding-right 3px
          padding-left 3px
          &.shops-name
            background green
            padding 2px
            color #fff
            font-size 12px
          &.shops-content
            display block
            font-size 12px
            width 180px
          &.shops-length
            position relative
            font-size 12px
            &::after
              position absolute
              display block
              content ''
              border-style solid
              border-width 5px
              top 5px
              right -7px
              border-color rgba(0,0,0,0.67) transparent transparent transparent
    .mint-popup-center
      width 92% !important
      height 240px !important
      border-radius 5px !important
      .shopShows
        padding 10px 20px 20px 20px
        .infos-name
          text-align center
          font-size 20px
          font-weight bold
          padding 20px 0 20px 0
          position relative
          &::after
            position absolute
            content "品牌"
            font-weight normal
            font-size 12px
            background yellow
            display block
            left 4px
            padding 5px
            top 50%
            transform translateY(-50%)
        .infos-items
          li
            float left
            width 20%
            h3
              font-weight bold
              margin-bottom 10px
              text-align center
            p
              color #7e8c8d
              font-size 12px
              text-align center
        .infos-bulletin
          position relative
          text-align center
          margin 15px auto 15px
          width 85px
          background-image linear-gradient(90deg, #fff, #333 50%, #fff)
          background-size 100% 1px
          background-position 50%
          background-repeat no-repeat
          > span
              font-size 12px
              padding 0 6px
              color #999
              background-color #fff
        .bulletin-content
          font-size 14px
          line-height 20px
    .mint-popup-bottom
      width 100% !important
      .supportShows
        padding 20px
        .coupon-activity
          text-align center
          font-weight bold
          font-size 20px
          padding-bottom 20px
        .coupon-content
          height 120px
          overflow-y scroll
          li
            width 100%

</style>
