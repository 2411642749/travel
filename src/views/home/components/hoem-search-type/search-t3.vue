<template>
  <div class="search-t3"> 
      <img :src="listData.image.url" alt="">
      <div class="content">
        <div class="location">
          <img src="../../../../assets/imgs/home/location.png" alt="" style="width:12px;height:12px">
          <span class="ip"> {{ listData.location }}</span>
        </div>
        <div class="houseName"> {{ listData.houseName }}</div>
        <div class="summaryText"> {{ listData.summaryText }}</div>
        <div class="price">
          <span class="finalPrice">¥{{ listData.finalPrice }}</span>
          <s class="productPrice">¥{{ listData.productPrice }}</s>
          <span class="priceTipBadge">{{  listData.priceTipBadge?.text }} </span>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  listData:{
    type : Object,
    default : () => {}
  }
})

</script>

<style scoped>
.search-t3 {
  width: 50%;
  padding: 0 5px;
  margin: 5px 0;
  box-sizing: border-box;
}

.search-t3 img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 120px;
}

.search-t3 .location {
  color : #818b8e
}
.search-t3 .location i {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-size: contain;
  background: url('');
}
.content {
  padding: 0 10px;
  font-size: 12px;
  color: #333;
  margin-top: 12px;
}

.content .location,
.content .summaryText {
  color : #818b8e
}

.content .summaryText {
  margin: 4px 0;
}
.content .houseName {
  line-height: 16px;
  margin: 3px 0;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
  font-weight: 500;
}

.content .price {
  display: flex;
  justify-content: start;
  align-items: center;
}

.content .price .finalPrice {
  font-size: 14px;
  color: #f0b079;
}

.content .price .productPrice {
  font-size: 12px;
  color: #a19e9e;
  margin: 0 5px;
}
.content .price .priceTipBadge {
  background-image: linear-gradient(90deg,#ffa9a2,#ff7f6c);
  border-radius: 10px;
  color: #fff;
  padding: 2px 5px;
}
</style>