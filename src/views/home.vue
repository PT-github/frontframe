<!--
 * @Author: PT
 * @Date: 2020-03-25 17:42:15
 * @LastEditors: PT
 * @LastEditTime: 2020-03-26 17:45:58
 * @Description: 首页
 -->
<template>
  <div class="home">
    <div class="home-header">
      <div class="header-part1">
        <div class="logo"></div>
        <div class="search">
          <div class="search-input">
            <span class="iconfont iconsearch"></span>
            <span class="place-holder">搜索商品，共24598款好物</span>
          </div>
        </div>
        <div class="user">
          <div class="user-btn">登录</div>
        </div>
      </div>
      <van-button type="primary">主要按钮</van-button>

    </div>
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
<style lang='less' scoped>
.home {
  .home-header {
    .header-part1 {
      display: flex;
      overflow: hidden;
      height: 44px;
      padding: 8px;
    }
    .logo {
      width: 70px;
      height: 28px;
      background-image: url(../assets/imgs/home/logo.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      margin-right: 8px;
    }
    .search {
      flex: 1;
      height: 100%;
      .search-input {
        background-color: #ededed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 4px;
        .iconfont {
          margin-right: 5px;
        }
        .iconfont, .place-holder {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    .user {
      width: 38px;
      margin-left: 8px;
      height: 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .user-btn {
        width: 100%;
        height: 22px;
        text-align: center;
        line-height: 20px;
        border: 1px solid #dd1a21;
        color: #dd1a21;
        border-radius: 4px;
      }
    }
  }
}
</style>