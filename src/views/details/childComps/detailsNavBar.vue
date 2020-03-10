<template>
  <div>
    <navbar>
      <div slot="left" class="left" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in title"
          :key="item"
          class="titleItem"
          @click="itemClick(index)"
          :class="{active:index===currentindex}"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
export default {
  components: {
    navbar
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentindex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentindex = index;
    },
    backClick() {
    //   this.$router.back();
    
    console.log("this.$router.back()有待解决");
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}
.titleItem {
  flex: 1;
}
.left {
  text-align: center;
}
.active {
  color: var(--color-high-text);
}
.left img {
  margin-top: 11px;
}
</style>