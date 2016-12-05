<template>
  <div class="border"></div>
  <div class="foot" id="foot">
    <a v-link="{path:'/index/home'}" @click="tapA">
      <p class="iconfont icon-shouye bg"></p>
      <span class="bg">首页</span>
    </a>
    <a v-link="{path:'/index/wish'}" @click="tapA">
      <p class="iconfont icon-xinyuandan"></p>
      <span>心愿</span>
    </a>
    <a v-link="{path:'/index/me'}" @click="tapA">
      <p class="iconfont icon-iconfontwode"></p>
      <span>我</span>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {},
    methods: {
      tapA () {
        /*$(this).find("p").addClass("bg")*/
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url(../assets/font/iconfont.css);

  .border {
    width: 100%;
    height: 1px;
    background: #C0C0C0;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    overflow: hidden;
  }

  .foot {
    width: 100%;
    height: 1.47rem;
    background: #fff;
    display: -webkit-flex;
    -webkit-flex-shrink: 0;

  p {
    color: #555;
    font-size: .58rem;
    height: .58rem;
  }

  a {
    -webkit-flex: 1 0;
    text-align: center;
    color: #555;
  }

  span {
    font-size: .27rem;
    line-height: 1rem;
  }

  .bg {
    color: #F65000;
  }

  }

</style>
