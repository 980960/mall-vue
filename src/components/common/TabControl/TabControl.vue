<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in tabs"
      :key="item"
      class="tab-control-item"
      :class="{active: index===itemIndex}"
    >
      <span @click="tabItemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemIndex: 0
    };
  },
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    tabItemClick(index) {
      this.itemIndex = index;
      this.$emit('tabIndex',index);
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  width: 100%;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>