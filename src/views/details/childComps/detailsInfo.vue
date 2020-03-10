<template>
  <div class="detailsInfo">
    <div class="title">
      <h3>2020春夏新款纯色浅色时尚简约纯棉休闲短袖上衣女T恤</h3>
    </div>
    <div class="price">
      <span class="price-span1">￥39.00</span>
      <span class="price-span2">￥108.00</span>
      <span class="price-span3">优惠价</span>
    </div>

    <div class="sales">
      <span>销量：10442</span>
      <span>收藏616人</span>
      <span>退货补运费</span>
    </div>
    <div class="promise">
      <div class="day7">
        <img src='@/assets/img/detail/true.png' alt />
        <span>7天无理由退货</span>
      </div>
      <div class="hours72">
        <img src='@/assets/img/detail/true.png' alt />
        <span>72小时发货</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.detailsInfo{
  width: 97%;
  margin-left: 1.5%;
}
.title {
    padding: 10px 0 10px;
}
.price {
    float: buttom;
    vertical-align: bottom;
  height: 40px;
  line-height: 40px;
}
.price-span1{
font-size: 20px;
color: var(--color-tint);
}
.price-span2{
font-size: 12px;
color: #999;
text-decoration: line-through;
}
.price-span3{
  color: white;
  margin-left: 10px;
  font-size: 14px;
  padding: 2px 5px;
border-radius: 5px;
background-color: var(--color-tint);
}
.sales {
  font-size: 13px;
  color: #999;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(100,100,100,0.1);
}
.promise {
  height: 70px;
  line-height: 70px;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 3px solid rgb(100,100,100,0.1);
}
.promise img{
  width: 14px;
  height: 14px;
}
.day7 {
  height: 25px;
  float: left;
}
.hours72 {
  height: 25px;
  float: right;
}
</style>