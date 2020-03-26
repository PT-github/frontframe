<!--
 * @Author: PT
 * @Date: 2020-03-25 14:42:23
 * @LastEditors: PT
 * @LastEditTime: 2020-03-26 16:20:51
 * @Description: 
 -->
<template>
  <div class="app">
    <!-- <div class="container"> -->
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "APP",
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>
<style lang='less' scoped>
.app {
  background: #FFFFFF;
  width: 100%;
  height: 100%;
}
</style>