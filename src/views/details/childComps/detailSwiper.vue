<template>
  <div>
<Swiper>
    <SwiperItem v-for="item in swiperData" :key="item.id" class="SwiperItem">
        <img :src="item.src" alt="">
    </SwiperItem>
</Swiper>

  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
props:{
    swiperData:{
    }
},
components:{
    Swiper,
    SwiperItem
},
mounted(){
    console.log(this.swiperData);
}
}
</script>

<style>
.SwiperItem{
    height: 240px;
    overflow: hidden;
}
</style>