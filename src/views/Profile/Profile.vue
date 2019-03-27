<template>
  <div>
    <HeaderTop title="我的"></HeaderTop>

      <div class="profile-container">
        <router-link
          to="/login"
          tag="a"
        >
          <div class="header_img">
            <i class="iconfont icon-person"></i>
          </div>
          <div class="header_login">
            <p v-if="!userInfo.phone">{{ userInfo.name || '登录/注册' }}</p>
            <p>
              <span class="user-icon">
                <i class="iconfont icon-shouji icon-mobile"></i>
              </span>
              <span class="phone_text">{{ userInfo.phone || '暂无绑定手机号' }}</span>
            </p>
          </div>
          <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
             </span>
      </router-link>
      </div>
      <div class="profile-num">
        <ul class="num-ul">
          <li>
            <p class="num-num">
              <span>
                0.00 <strong>元</strong>
              </span>
            </p>
            <p class="num-text">
              我的余额
            </p>
          </li>
          <li>
            <p class="num-num">
              <span>
                0<strong>个</strong>
              </span>
            </p>
            <p class="num-text">
              我的优惠
            </p>
          </li>
          <li style="border: none">
            <p class="num-num">
              <span>
                0<strong>分</strong>
              </span>
            </p>
            <p class="num-text">
              我的积分
            </p>
          </li>
        </ul>
      </div>
      <div class="profile-item">
        <mt-cell title="我的订单">
          <i class="iconfont icon-jiantou1"></i>
          <i slot="icon" class="iconfont icon-order-s icon1"></i>
        </mt-cell>
        <mt-cell title="积分商城">
          <i class="iconfont icon-jiantou1"></i>
          <i slot="icon" class="iconfont icon-jifen icon1"></i>
        </mt-cell>
        <mt-cell title="硅谷外卖会员卡">
          <i class="iconfont icon-jiantou1"></i>
          <i slot="icon" class="iconfont icon-vip icon1"></i>
        </mt-cell>
        <mt-cell title="服务中心">
          <i class="iconfont icon-jiantou1"></i>
          <i slot="icon" class="iconfont icon-fuwu icon1"></i>
        </mt-cell>
      </div>
      <section class="">
        <mt-button type="danger" style="width: 100%" v-if="userInfo._id" @click="logout">退出登陆</mt-button>
      </section>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import { mapState } from 'vuex'
  export default {
    components: {
      HeaderTop,
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      logout() {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .profile-container
      height 100px
      width 100%
      position absolute
      top 45px
      border-top 1px solid #fff
      background #02a774
      .header_img
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        color #fff
      .header_login
        position absolute
        left 60px
        top 50%
        transform translateY(-50%)
        color #fff
        .user-icon
          display: inline-block
          position absolute
          left -12px
          top 16px
          .icon-mobile
            font-size 26px
        .phone_text
          font-size 14px
          padding-left 16px
      .arrow
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        color #fff
    .profile-item
      height 100%
      width 100%
      position absolute
      top: 240px
      .icon-order-s
        color green
      .icon-jifen
        color red
      .icon-vip
        color gold
      .icon-fuwu
        color greenyellow
      .mint-cell-text
        position absolute
        top 16px
        color #000
    .profile-num
      width 100%
      height 70px
      padding-top 15px
      position absolute
      top 150px
      .num-ul
        display flex
        li
          flex 1
          flex-direction row
          justify-content center
          text-align center
          border-right 1px solid #eee
          .num-num
            padding-bottom 10px
            span
              font-size 24px
              color gold
              font-weight bold
              strong
                font-size 14px
                color #000
                font-weight normal
          .num-text
            font-size 14px
            color #7e8c8d


</style>
