<template>
  <div class="search-t9"> 
      <img :src="listData.image.url" alt="">
      <div class="content">
        <div class="summaryText"> {{ listData.summaryText }}</div>
        <div class="houseName"> {{ listData.houseName }}</div>
        <div class="price">
          <van-rate v-model="rateValue" color="#fff" readonly allow-half  size="16"/>
          <span>¥{{ listData.productPrice }}</span>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
const props = defineProps({
  listData:{
    type : Object,
    default : () => {}
  }
})

const rateValue = computed(() => {
  return Number(props.listData.commentScore)
})
</script>

<style scoped>
.search-t9 {
  width: 50%;
  padding: 0 5px;
  margin: 5px 0;
  position: relative;
  box-sizing: border-box;
}

.search-t9 img {
  width: 100%;
  border-radius: 5px;
}
.content {
  position: absolute;
  bottom: 10px;
  left: 0;
  padding: 0 10px;
  font-size: 12px;
  color: #fff;
}
.content .houseName {
  line-height: 22px;
  margin: 3px 0;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
}

.content .price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>