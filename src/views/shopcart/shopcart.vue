<template>
  <div>{{localdata}}</div>
</template>

<script>
import localdata from '@/network/localdata.js'
export default {
  data(){
    return {
localdata:{}
    }
  },
created(){
  this.localdata=localdata;
}
}
</script>

<style>

</style>