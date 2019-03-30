<template>
    <div>
      <div class="goods">
        <div class="menu-wrapper">
          <ul>
            <li class="menu-item" v-for="(good, index) in goods"
                :key="index" :class="{current: index === currentIndex}"
                @click="clickMenuItem(index)">
              <span class="text bottom-border-1px">
                <img :src="good.icon" class="icon" v-if="good.icon" alt="">
                {{ good.name }}
              </span>
            </li>
          </ul>
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
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { mapState } from 'vuex'

    export default {
        data () {
          return {
            tops: [],　　// 所有右侧分类的li的top组成的数组（列表第一次显示后就不再变化）
            scrollY: 0, // 右侧滑动的Y轴坐标（滑动过程时实时变化）
            food: {},   // 需要显示的food
          }
        },
        mounted() {
          this.$store.dispatch('getShopGoods', ()=> {// 数据更新后执行
            this.$nextTick(() => {// 列表数据更新显示后执行
              this._initScroll()
              this._initTops()
            })
          })
        },

        computed: {
            ...mapState(['goods']),
            // 计算得到当前分类的下标
            currentIndex() {
              // 先得到条件数据
              const { scrollY,tops } = this
              // 根据条件计算产生一个结果
              const index = tops.findIndex((top,index) => {
                // scrollY>=当前top && scrollY<下一个top
                return scrollY >= top && scrollY < tops[index+1]
              })
              // 返回结果
              return index
            }
        },
        methods: {
          // 初始化滚动
          _initScroll() {
            // 列表显示后创建
            new BScroll('.menu-wrapper', {
              click: true,
              probeType: 2,  // 因为惯性滑动不会触发
            });
            this.foodScroll = new BScroll('.food-wrapper', {
              probeType: 2,  // 因为惯性滑动不会触发
              click: true
            })

            // 给右侧绑定滚动监听
            this.foodScroll.on('scroll',({x,y}) => {
              console.log(x,y)
              this.scrollY = Math.abs(y)
            })
            // 给右侧绑定滚动结束监听
            this.foodScroll.on('scrollEnd',({x,y}) => {
              console.log(x,y)
              this.scrollY = Math.abs(y)
            })
          },
          // 初始化tops
          _initTops() {
            // 1.初始化tops
            const tops = []
            let top = 0
            tops.push(top)
            // 2.收集
            // 找到所有分类的li
            const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook')
            Array.prototype.slice.call(lis).forEach(li => {
              top += li.clientHeight
              tops.push(top)
            })

            // 3.更新数据
            this.tops = tops
            console.log(this.tops)
          },

          clickMenuItem(index) {
            const scrollY = this.tops[index]
            this.scrollY = scrollY
            this.foodScroll.scrollTo(0, -this.scrollY,600)
          }
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
          &.current
            background #fff
            color greenyellow
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
