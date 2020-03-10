<template>
  <div>
    <detailNavbar></detailNavbar>
    <detailSwiper :swiperData='swiperData'> </detailSwiper>
    <detailsInfor></detailsInfor>
  </div>
</template>

<script>
import detailNavbar from "./childComps/detailsNavBar";
import detailSwiper from "./childComps/detailSwiper";
import detailsInfor from './childComps/detailsInfo'

import localdata from "@/network/localdata";
export default {
  name:'details',
  components: {
    detailNavbar,
    detailSwiper,
    detailsInfor
  },
  data() {
    return {
      id: null,
      swiperData: {}
    };
  },
  created() {
    this.id = this.$route.params.id.substring(0,this.$route.params.id.length-1);
    console.log(this.id);
    switch (this.id) {
      case "pop":
        this.swiperData = localdata.pop;
        break;
      case "new":
        this.swiperData = localdata.new;
        break;
      case "sell":
        this.swiperData = localdata.sell;
    }
  },
  mounted(){
  }
};
</script>

<style>
</style>