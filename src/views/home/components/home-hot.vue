<template>
  <div class="home-hot"> 
   <h2>热门精选</h2>
   <div class="content">
    <template v-for="item in hotData" :key="item.data.houseId">
      <searchT9 v-if="item.discoveryContentType === 9" :list-data="item.data"/>
      <searchT3 v-else :list-data="item.data"/>
    </template>
   </div>
  </div>
</template>

<script setup>
import { ref ,onMounted, watch, computed} from 'vue'
import { useHomeStore } from '../../../stores/modules/home';
import { storeToRefs } from 'pinia';
import searchT3 from './hoem-search-type/search-t3.vue'
import searchT9 from './hoem-search-type/search-t9.vue'
import { scrollListenFn } from '../../../hooks/scroll'

const homeStore = useHomeStore()
const { hotData } = storeToRefs(homeStore)

// 滚动到底部加载
const { isScrollLoz,scrollTop } = scrollListenFn()
watch(isScrollLoz,(newValue) => {
  if(newValue) {
    homeStore.gethotData().then(res => {
      isScrollLoz.value = false
    })
  }
})
</script>

<style scoped>
.home-hot {
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 0 15px;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>