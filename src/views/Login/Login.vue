<template>
    <section class="loginContainer">
      <div class="loginInner">
        <mt-header>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>

        <h4 class="header_title">快捷外卖</h4>
        <div class="login_nav">
          <mt-button size="small" @click.native.prevent="active = 'tab-container1'">短信登录</mt-button>
          <mt-button size="small" @click.native.prevent="active = 'tab-container2'">密码登录</mt-button>
        </div>

        <div class="page-tab-container">
            <form @submit.prevent="login">
              <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                <mt-tab-container-item id="tab-container1">
                  <div class="smsLogin">
                    <mt-field label="手机号" placeholder="请输入您的手机号" v-model="phone">
                      <mt-button @click.prevent="getCode" :disabled="!rightPhone"
                      :class="{right_phone: rightPhone}">
                        {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
                      </mt-button>
                    </mt-field>
                    <mt-field label="验证码" placeholder="请输入您的验证码" v-model="code"></mt-field>
                  </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                  <div class="pwdLogin">
                    <mt-field label="手机号" placeholder="请输入您的手机号" v-model="name"></mt-field>
                    <mt-field label="密码" placeholder="请输入您的密码" type="password" v-model="pwd"></mt-field>
                    <mt-field label="验证码" placeholder="请输入您的验证码" v-model="captcha">
                      <img src="http://localhost:4000/captcha" height="45px" width="100px"
                      @click="getCaptcha" ref="captcha">
                    </mt-field>
                  </div>
                </mt-tab-container-item>

              </mt-tab-container>
              <p class="p-text">
                温馨提示：未注册快捷外卖账号的手机号，登录时将自动注册
                且代表同意<span class="user_service">《用户服务协议》</span>
              </p>
              <mt-button type="primary" size="large">登录</mt-button>
              <p class="p-text">关于我们</p>
            </form>
          </div>
        <AlertTip :alert-text="alertText" v-show="popupVisible" @closeTip="closeTip"/>
      </div>
      <div class="loginContent">

      </div>
    </section>
</template>

<script>
    import AlertTip from '../../components/AlertTip/AlertTip'
    import {reqSendCode,reqSmsLogin,reqPwdLogin} from "../../api";

    export default {
        name: 'page-tab-container',
        data () {
          return {
            active: 'tab-container1',
            phone: '',            // 手机号码
            name: '',             // 用户名
            code: '',             // 短信验证码
            captcha: '',          // 图形验证码
            pwd: '',              // 密码
            computeTime: 0,       // 计时的时间
            alertText: '',        // 提示文本
            popupVisible: false   // 是否显示警告框
          }
        },
        computed: {
          rightPhone() {
            return /^1\d{10}$/.test(this.phone)
          }
        },
        components: {
          AlertTip
        },
        methods: {
          // 获取一次性验证码
          getCaptcha() {
            this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
          },
          // 显示警告框文字
          showPopup(alertText) {
            this.alertText = alertText
            this.popupVisible = true
          },
          // 关闭按钮
          closeTip() {
            this.popupVisible = false
            this.alertText = ''
          },
          // 获取验证码
           async getCode() {
            // 如果当前没有计时

            if (!this.computeTime) {
              // 启动倒计时
              this.computeTime = 30
              this.intervalId = setInterval(() => {
                this.computeTime--
                if (this.computeTime <= 0) {
                  clearInterval(this.intervalId)
                }
              },1000)
            }
            // 发送ajax请求（向指定手机号发送验证码短信）
             const result = await reqSendCode(this.phone)
             if(result.code === 1) {
               // 显示提示
               this.showPopup(result.msg)
               if(this.computeTime<=0) {
                 this.computeTime = 0
                 clearInterval(this.intervalId)
                 this.intervalId = undefined
               }
             }

          },
          // 异步登录
          async login() {
            let result
            // 前台验证 （手机号验证）
            if (this.active === 'tab-container1') { // 短信验证
              const {rightPhone,phone,code} = this
              if (!this.rightPhone) {
                // 手机号码不正确
                this.showPopup('手机号码不正确')
                return
              } else if(!/^\d{6}$/.test(this.code)) {
                // 短信验证必须是6位数字
                this.showPopup('短信验证必须是6位数字')
                return
              }

               result = await reqSmsLogin(phone, code)
            } else if (this.active === 'tab-container2')  { // 密码验证
              const {name,pwd,captcha} = this
              if (!this.name) {
                // 用户名必须指定
                this.showPopup('用户名必须指定')
                return
              } else if (!this.pwd) {
                // 密码必须指定
                this.showPopup('密码必须指定')
                return
              } else if(!this.captcha) {
                // 验证码必须指定
                this.showPopup('验证码必须指定')
                return
              }
              // 发送ajax请求密码登陆
              result = await reqPwdLogin({name, pwd, captcha})
            }
            // 停止计时
            if (this.computeTime) {
              this.computeTime = 0
              clearInterval(this.intervalId)
              this.intervalId = undefined
            }
            // 根据结果数据处理
            if(result.code === 0) {
              const user = result.data
              // 将user保存到vuex的state
              this.$store.dispatch('recordUser',user)
              // 去个人中心界面
              this.$router.replace('/profile')
            } else {
              // 显示新的图片验证码
              this.getCaptcha()
              // 显示警告提示
              const msg = result.msg
              this.showPopup(msg)
            }
          }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    height 100%
    width 100%
    .loginInner
      height 120px
      width 100%
    .header_title
      height 45px
      line-height 45px
      width 100%
      padding-top 25px
      text-align center
      font-size 32px
      color blue
    .login_nav
      height 45px
      width 100%
      display flex
      flex-direction row
      justify-content center
      padding-top 15px
    .page-tab-container
      height 120px
      width 100%
      .p-text
        text-align center
        color #7e8c8d
        font-size 14px
        padding-top 15px
        padding-bottom 15px
</style>
