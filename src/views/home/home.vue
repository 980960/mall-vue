<template>
  <div class="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tab-control
      :tabs="['流行','新款','精选']"
      class="tab-control1"
      ref="tabControl1"
      v-show="tabshow"
      @tabIndex="getTabIndex"
    ></tab-control>
    <scroll class="home-content" ref="scroll" :probeType="3" @Pscroll="getposition">
      <home-swiper :banners="banners" class="home-swiper" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend :recommends="recommends" />
      <tab-control
        :tabs="['流行','新款','精选']"
        class="tab-control"
        ref="tabControl"
        @tabIndex="getTabIndex"
      ></tab-control>
      <div class="goodsDiv">
        <div v-for="(item,index) in goodsdataNow" :key="item.id" class="goodsImg">
          <img :src="item.src" alt @click="imgClick(index)" />
        </div>
      </div>
      <ul>
        <li>aa1</li>
        <li>aa2</li>
        <li>aa3</li>
        <li>aa4</li>
        <li>aa5</li>
        <li>aa6</li>
        <li>aa7</li>
        <li>aa8</li>
        <li>aa9</li>
        <li>aa10</li>
        <li>aa11</li>
        <li>aa12</li>
        <li>aa13</li>
        <li>aa14</li>
        <li>aa15</li>
        <li>aa16</li>
        <li>aa17</li>
        <li>aa18</li>
        <li>aa19</li>
        <li>aaaa20</li>
        <li>aa1</li>
        <li>aa2</li>
        <li>aa3</li>
        <li>aa4</li>
        <li>aa5</li>
        <li>aa6</li>
        <li>aa7</li>
        <li>aa8</li>
        <li>aa9</li>
        <li>aa10</li>
        <li>aa11</li>
        <li>aa12</li>
        <li>aa13</li>
        <li>aa14</li>
        <li>aa15</li>
        <li>aa16</li>
        <li>aa17</li>
        <li>aa18</li>
        <li>aa19</li>
        <li>aaaa20</li>
        <li>aa1</li>
        <li>aa2</li>
        <li>aa3</li>
        <li>aa4</li>
        <li>aa5</li>
        <li>aa6</li>
        <li>aa7</li>
        <li>aa8</li>
        <li>aa9</li>
        <li>aa10</li>
        <li>aa11</li>
        <li>aa12</li>
        <li>aa13</li>
        <li>aa14</li>
        <li>aa15</li>
        <li>aa16</li>
        <li>aa17</li>
        <li>aa18</li>
        <li>aa19</li>
        <li>aaaa20</li>
      </ul>
    </scroll>
    <to-top @click.native="toTopClick" v-show="isShow"></to-top>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
import TabControl from "@/components/common/TabControl/TabControl";
import scroll from "@/components/common/BScroll/BScroll";

import toTop from "@/components/content/toTop/toTop";

import HomeSwiper from "./childComps/HomeSwiper";
import recommend from "./childComps/HomeRecommendView";

import { getHomeData } from "@/network/home";
import localdata from "@/network/localdata";

export default {
  components: {
    navbar,
    TabControl,
    scroll,
    toTop,
    recommend,
    HomeSwiper
  },
  data() {
    return {
      recommends: [],
      banners: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isShow: false,
      tabOffsetTop: 0,
      tabshow: false,
      goodsdata: {},
      goodsdataNow: {}
    };
  },
  created() {
    this.getHomeData();
    this.goodsdata = localdata;
    this.goodsdataNow = localdata.pop;
  },
  mounted() {},
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        this.recommends = res.data.recommend.list;
        this.banners = res.data.banner.list;
      });
    },
    toTopClick() {
      this.$refs.scroll.BScroll.scrollTo(0, 0, 500);
    },
    getposition(position) {
      this.isShow = -position.y > 300;
      this.tabshow = -position.y > this.tabOffsetTop;
    },
    getTabIndex(index) {
      switch (index) {
        case 0:
          this.goodsdataNow = this.goodsdata.pop;
          break;
        case 1:
          this.goodsdataNow = this.goodsdata.new;
          break;
        case 2:
          this.goodsdataNow = this.goodsdata.sell;
      }
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    imgClick(index) {
      this.$router.replace("/details/" + this.goodsdataNow[index].id);
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 4;
}
.tab-control {
  height: 33px;
  line-height: 33px;
  background-color: #fff;
}
.tab-control1 {
  position: relative;
  top: 44px;
  height: 33px;
  line-height: 33px;
  background-color: #fff;
  z-index: 9;
}
.goodsDiv {
  text-align: center;
}
.goodsImg {
    float:left;
    width: 45%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 10px;
}
.goodsImg img {
  height: 200px;
  width: 100%;
}
</style>