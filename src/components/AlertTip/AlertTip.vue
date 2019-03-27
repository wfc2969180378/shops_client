<template>
    <div>
      <div>
        <!--弹出窗 begin-->
        <div class="alertPop">
          <ul class="alertText">
            {{ alertText }}
          </ul>
          <div class="alertPopFooter">
            <div class="confirm" @click="closeTip()">确认</div>
          </div>
        </div>

        <!--分享弹出窗 end-->
      </div>
    </div>
</template>

<script>
    export default {
      props: {
        alertText: String
      },
      methods: {
        closeTip() {
          // 分发自定义事件(事件名: closeTip)
          this.$emit('closeTip')
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .alertPop
    height 60px
    width 50%
    background yellow
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
</style>
