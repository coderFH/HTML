<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <!--这里能用@ 是因为webpack.base.conf.js 里配置了resolve的alias属性-->
      <img slot="item-icon" src="@/assets/img/icon_home.png">
      <img slot="item-icon-active" src="@/assets/img/icon_home_selected.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="orange">
      <img slot="item-icon" src="../../assets/img/icon_home.png">
      <img slot="item-icon-active" src="../../assets/img/icon_home_selected.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../../assets/img/icon_home.png">
      <img slot="item-icon-active" src="../../assets/img/icon_home_selected.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="yellow">
      <img slot="item-icon" src="../../assets/img/icon_home.png">
      <img slot="item-icon-active" src="../../assets/img/icon_home_selected.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
    import TabBar from "./Tabbar";
    import TabBarItem from "./TabBarItem";
    export default {
        name: "MainTabBar",
        components : {
            TabBar,
            TabBarItem
        },
    }
</script>

<style scoped>

</style>
