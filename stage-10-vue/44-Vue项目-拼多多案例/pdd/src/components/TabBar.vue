<template>
  <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/home')">
      <img :src="$route.path.includes('/home') ? tabBarImageArray[0].selected : tabBarImageArray[0].normal" alt="">
      <span :class="{on:$route.path === '/home'}">首页</span>
    </div>
    <div class="tab-item" @click="switchTo('/recommend')">
      <img :src="$route.path.includes('/recommend') ? tabBarImageArray[1].selected : tabBarImageArray[1].normal" alt="">
      <span :class="{on:$route.path === '/recommend'}">推荐</span>
    </div>
    <div class="tab-item" @click="switchTo('/search')">
      <img :src="$route.path.includes('/search') ? tabBarImageArray[2].selected : tabBarImageArray[2].normal" alt="">
      <span :class="{on:$route.path === '/search'}">搜索</span>
    </div>
    <div class="tab-item" @click="switchTo('/cart')">
      <img :src="$route.path.includes('/cart') ? tabBarImageArray[3].selected : tabBarImageArray[3].normal" alt="">
      <span :class="{on:$route.path === '/cart'}">购物车</span>
    </div>
    <div class="tab-item" @click="switchTo('/me')">
      <img :src="$route.path.includes('/me') ? tabBarImageArray[4].selected : tabBarImageArray[4].normal" alt="">
      <span :class="{on:$route.path === '/me'}">个人中心</span>
    </div>
  </div>
</template>

<script>
  export default {
      name : "TabBar",
      data() {
          return{
              tabBarImageArray : [
                  {normal : require('./../common/img/icon_home.png'), selected : require('./../common/img/icon_home_selected.png')},
                  {normal : require('./../common/img/icon_intro.png'),selected : require("./../common/img/icon_intro_selected.png")},
                  {normal : require('./../common/img/icon_search.png'),selected : require("./../common/img/icon_search_selected.png")},
                  {normal : require('./../common/img/icon_chat.png'),selected : require("./../common/img/icon_chat_selected.png")},
                  {normal : require('./../common/img/icon_mine.png'),selected : require("./../common/img/icon_mine_selected.png")},
              ]
          }
      },
      methods: {
          switchTo(path){
              // console.log(this.$route);
              // console.log(this.$router);
              //切换路由
              this.$router.replace(path);
          }
      }
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
        .on
          color red
</style>
