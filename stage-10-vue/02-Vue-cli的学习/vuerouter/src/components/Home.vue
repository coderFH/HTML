<template>
    <div>
      <h2>我是首页内容</h2>

      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>

      <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                path : ""
            }
        },
        //可以对比下关于的title展示,关于是通过导航守卫展示的,而非这种形式
        created() {
            document.title = '首页';
            console.log('.created');
        },
        destroyed() {
            console.log(('destroyed'));
        },
        mounted() {
        },
        //页面来回切换的时候,保持页面状态
        //页面即将离开的时候,保存下当前路径,然后激活时,再传入这个保存的路径
        //这两个函数,只有该组件被保持了状态才有效,即使用了keep-alive才有效,具体见app.vue第五行
        activated() {
            this.$router.push(this.path);
        },
        deactivated() {

        },

        //组件内导航守卫
        beforeRouteLeave(to, from, next){
            this.path = this.$route.path;
            next();
        }
    }
</script>

<style scoped>

</style>
