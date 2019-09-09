<template>
  <div>
    <h2>我是用户内容</h2>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
    export default {
        name: "User",
        computed : {
            userId() {
                //$router 就是router创建时的那个对象
                //$route 是当前活跃的路由,配置路由的时候,可以配置很多过,但每次只有一个是处于活跃状态的
                //userId: router里配的是啥 这里就取啥
                return this.$route.params.userId;
            }
        }
    }
</script>

<style scoped>

</style>
