<template>
  <div class="bottom-tab">
    <div class="tab-item">
      <img src="./../common/img/icon_home.png" alt="">
      <span>首页</span>
    </div>
    <div class="tab-item">
      <img src="./../common/img/icon_home.png" alt="">
      <span>首页</span>
    </div>
    <div class="tab-item">
      <img src="./../common/img/icon_home.png" alt="">
      <span>首页</span>
    </div>
    <div class="tab-item">
      <img src="./../common/img/icon_home.png" alt="">
      <span>首页</span>
    </div>
    <div class="tab-item">
      <img src="./../common/img/icon_home.png" alt="">
      <span>首页</span>
    </div>
  </div>
</template>

<script>
  export default {
    name : "TabBar"
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .bottom-tab
      width 100%
      height 5rem
      background-color #fff
      position fixed
      left 0
      bottom 0
      z-index 999
      box-shadow 0 -0.2rem 1rem #ccc
      display flex
      .tab-item
        display flex
        flex 1
        flex-direction column
        justify-content center
        align-items center
        font-size 1.2rem
        img
          width 35%
          margin-bottom 0.3rem
</style>
