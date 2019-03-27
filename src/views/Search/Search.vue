<template>

  <div>
    <HeaderTop title="搜索">

    </HeaderTop>
    <section class="search">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="请输入商家名称">
      </mt-search>
    </section>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    position absolute
    top 50px
</style>
