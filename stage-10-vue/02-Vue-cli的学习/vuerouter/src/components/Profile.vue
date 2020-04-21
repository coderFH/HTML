<template>
    <div>
      <h2>我是porfile,验证传参</h2>
      <!--   路由通过query的方式传递参数  -->
      <h2>{{$route.query.name}}</h2>
      <h2>{{$route.query.age}}</h2>
      <h2>{{$route.query.height}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Porfile"
    }
</script>

<style scoped>

</style>
