<template>
  <div class="swipe"> 
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" style="width : 100%">
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  swipeData : {
    type : Array,
    default : () => []
  }
})
</script>

<style scoped>

</style>