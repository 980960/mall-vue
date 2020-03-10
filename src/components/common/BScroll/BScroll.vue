<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      BScroll: null,
      message: "啊哈哈"
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    //创建BScroll对象
    this.BScroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      //开启下拉刷新
      pullDownRefresh: {},
      //开启上拉加载
      pullUpLoad: {}
    });
//监听滚动位置
    this.BScroll.on("scroll", position => {
      // console.log(position);
      this.$emit('Pscroll',position);
    });
//监听下拉事件
    this.BScroll.on("pullingDown", () => {
      window.console.log("下拉刷新");
      this.$nextTick(() => {
        this.BScroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
      });
      this.BScroll.finishPullDown(); // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
    });
//监听上拉事件
    this.BScroll.on("pullingUp", () => {
      window.console.log("上拉加载");
      this.$nextTick(() => {
        this.BScroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
      });
      this.BScroll.finishPullUp(); // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.BScroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style>
</style>