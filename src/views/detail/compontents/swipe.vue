<template>
  <div class="swipe"> 
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" style="width : 100%">
        </van-swipe-item>
      </template>
       <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value,key,index) in swipeObj" :key="key">
              <span :class="{active : swipeData[active]?.enumPictureCategory == key}"> 
                {{ getName(value[0].title) }} 
                <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                  {{getIndex(swipeData[active])}}/{{ value.length }} 
                </span>
              </span>
          </template>
        </div>
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
const getIndex = (item) => {
  // console.log(item.enumPictureCategory);
  // console.log(swipeObj['2'].findIndex(data => data === item));
  return swipeObj[item.enumPictureCategory].findIndex(data => data === item) + 1
}
</script>

<style scoped>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.3);
  }
  .custom-indicator span {
    margin: 0 5px;
    color: #fff;
  }

  .custom-indicator .active {
    display: inline-block;
    background-color: #fff;
    color: #333;
    padding: 0 3px;
    border-radius: 5px;
  }

  .custom-indicator .count {
    color: #333;
    margin: 0;
  }
</style>