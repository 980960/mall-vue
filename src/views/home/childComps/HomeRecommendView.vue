<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  margin: 5px 0px 5px;
  box-shadow: 0px 3px 1px rgba(100, 100, 100, 0.2);
  font-size: 14px;
}
.recommend-item img {
  width: 65px;
  height: 65px;
}
.recommend-item {
  flex: 1;
}
</style>