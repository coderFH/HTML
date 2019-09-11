<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f2f2f2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*x轴偏移方向  y轴偏移方向 模糊程度  颜色*/
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  }
</style>
