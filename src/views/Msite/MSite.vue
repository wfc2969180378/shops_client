<template>
    <div>
      <HeaderTop :title="address.name">
        <router-link target=""
          slot="left" class="header_search"
                     to="/search"
        >
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link target="" slot="right"
        class="header_login"
                     :to="userInfo._id?'/userinfo': '/login'"
        >
         <span class="header_login_text" v-if="!userInfo._id">
           登录|注册
         </span>
          <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
        </router-link>
      </HeaderTop>

      <nav>
        <div class="swiper-container" v-if="categories.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="(categorys, index) in categoriesArr"
                 :key="index"
            >
              <a href="" class="slide-item"
                 v-for="(category, index) in categorys"
                 :key="index"
              >
                <div class="food_container"><img :src="baseImageUrl+category.image_url" alt=""></div>
                <span class="food_title">{{ category.title }}</span>
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt=""  v-else>
      </nav>

      <ShopList></ShopList>

    </div>


</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'
  import { mapState } from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default {
        components: {
          HeaderTop,
          ShopList
        },
        data () {
          return {
            baseImageUrl: 'https://fuss10.elemecdn.com'
          }
        },
        methods: {

        },
        mounted() {
          this.$store.dispatch('getCategories')
        },
        computed: {
          ...mapState(['categories','address','userInfo']),
          /*
             根据categorys一维数组生成一个2维数组
             小数组中的元素个数最大是8
           * */
          categoriesArr() {
            const { categories } = this
            // 准备空的2维数组
            const arr = []
            // 准备一个小数组（最大长度为8）
            let minArr = []
            // 遍历categorys
            categories.forEach(c => {
              // 如果当前小数组已经满了，创建一个新的
              if(minArr.length === 8) {
                minArr = []
              }
              // 如果minArr是空的，将小数组保存到大数组中
              if(minArr.length === 0) {
                arr.push(minArr)
              }
              // 将当前分类保存到小数组中
              minArr.push(c)

            })
              return arr
          }
        },
        watch: {
          categories(value) {
            this.$nextTick( () => {
              // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
              // 创建一个Swiper实例对象, 来实现轮播
              new Swiper('.swiper-container', {
                loop: true, // 可以循环轮播
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
              })
            })
          }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    margin-top 44px
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      padding 6px
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .slide-item
          width 25%
          text-align center
          .food_container
            color #fff
            img
              width 50px
              height 50px
          .food_title
            font-size 14px
            margin 5px
</style>
