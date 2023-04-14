<template>
  <div class="swipe"> 
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" style="width : 100%">
        </van-swipe-item>
      </template>
       <template #indicator="{ active, total }">
          <template v-for="(value,key,index) in swipeObj" :key="key">
            <span>{{ getName(value[0].title) }} </span>
          </template>
        </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  swipeData : {
    type : Array,
    default : () => []
  }
})

// 数据处理
let swipeObj = {}
props.swipeData.forEach(item => {
  let arr = swipeObj[item.enumPictureCategory]
  if(!arr) {
    swipeObj[item.enumPictureCategory] = []
  }
  swipeObj[item.enumPictureCategory].push(item)
})

const getName = (name) => {
  const reg = /[\u4e00-\u9fa5]/g;
  return name.match(reg).join('');
  
}
</script>

<style scoped>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>