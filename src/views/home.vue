<!--
 * @Author: PT
 * @Date: 2020-03-25 17:42:15
 * @LastEditors: PT
 * @LastEditTime: 2020-03-26 09:35:49
 * @Description: 首页
 -->
<template>
  <div>
    <h1>首页</h1>
    <router-link :to="{path: '/login'}">登录</router-link>
    <img src="../assets/imgs/pwd.png" alt="">
    <img src="../assets/imgs/name.png" alt="">
    <img src="../assets/imgs/bigimg.png" alt="">
    <video src="../assets/media/b.mp4" controls></video>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // src: require('file-loader!@/assets/media/b.mp4')
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='scss' scoped>
</style>