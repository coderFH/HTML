<template>
  <div class="search-nav">
    <!-- @click.prevent 阻止事件的默认行为 -->
    <a href="" class="search-nav-icon" @click.prevent="showSearchPanel(true)">
      <img src="../images/search.png" alt="" width="25">
      <span>拼多多</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "SearchNav",


        props : {
            showSearchPanel : Function
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .search-nav
    width 100%
    height 6rem
    background-color #fff
    position fixed
    top 0
    left 0
    z-index 998
    display flex
    justify-content center
    align-items center
    .search-nav-icon
      width 90%
      height 70%
      background-color #e8e8e8
      border-radius 1rem
      display flex
      justify-content center
      align-items center
      span
        color #aaa
        margin-left 6px
        font-size 1.8rem
        font-weight lighter

</style>
