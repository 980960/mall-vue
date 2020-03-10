<template>
  <div id="app">
    <keep-alive exclude="details">
<router-view></router-view>
    </keep-alive>
    
    <main-tabbar class="main-tabbar"></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from '@/components/content/mainTabbar/mainTabbar';
export default {
  name: "App",
  components: {
    mainTabbar
  }
};
</script>

<style>
@import './assets/css/base.css';
.main-tabbar{
display: flex;
}
</style>
