<template>
  <div class="me" v-if="userInfo.id">个人中心</div>
  <select-login v-else />
</template>

<script>
    import {mapState} from 'vuex';
    import SelectLogin from './../Login/SelectLogin';

    export default {
        name: "Me",
        computed: {
            ...mapState(['userInfo'])
        },
        components:{
            SelectLogin
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    width 100%
    height 100%
    background-color lemonchiffon
    display flex
    justify-content center
    align-items center
</style>
