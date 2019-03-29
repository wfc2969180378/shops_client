<template>
    <div>
      <section class="goods">
        <div class="menu-wrapper">
          <li class="menu-item" v-for="(good, index) in goods"
          :key="index">
            <span class="text bottom-border-1px">
              <img :src="good.icon" class="icon" v-if="good.icon" alt="">
              {{ good.name }}
            </span>
          </li>
        </div>

        <div class="food-wrapper">
          <ul ref="foodsUl">
            <li class="food-list-hook" v-for="(good, index) in goods"
            :key="index">
              <h1 class="title">{{ good.name }}</h1>
              <ul>
                <li class="food-title" v-for="(food, index) in good.foods"
                :key="index">
                  <div class="icon">
                    <img width="57" height="57" :src="food.icon" alt="">
                  </div>
                  <div class="content">
                    <h3 class="name">{{ food.name }}</h3>
                    <p class="desc">{{ food.description }}</p>
                    <div class="extra">
                      <span class="count">月售{{food.sellCount}}份</span>
                      <span>好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{food.price}}</span>
                      <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
</template>

<script>

    import { mapState } from 'vuex'
    export default {
        mounted() {
          this.$store.dispatch('getShopGoods')
        },

        computed: {
            ...mapState(['goods'])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods
    display flex
    position absolute
    top 220px
    bottom 46px
    width 100%
    background #fff
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
          width 88%
          height 45px
          margin-left 6px
          line-height 45px
          font-size 12px
          text-align center
          border-bottom 1px solid #fcfcfc
          .icon
            width 12px
            height 12px
    .food-wrapper
      flex 1
      background #fff
      padding-top 0
      .title
        background #f3f5f7
        color #7e8c8d
        font-size 14px
        border-left 2px solid grey
        padding 5px 0 5px 20px
      .food-title
        display flex
        padding 15px
        width 90%
        border-bottom 1px solid #eee
        .icon
          flex 0 0 66px
          width 80px
        .content
          flex 1
          font-size 12px
          color #7e8c8d
          .name
            font-size 14px
            color #000
          .desc
            line-height 25px
</style>
