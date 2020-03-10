<template>
  <div @click="back">我的</div>
</template>

<script>
export default {
methods:{
  back(){
    this.$router.back();
  }
}
}
</script>

<style>

</style>