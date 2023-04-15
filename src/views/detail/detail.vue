<template>
  <div class="detail"> 
    <van-nav-bar
      title="旅途"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="concent" v-if="houseList">
      <swipe :swipe-data="houseList.mainPart?.topModule.housePicture.housePics"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router';
import { useHouseListStore } from './../../stores/modules/house-list'
import swipe from './compontents/swipe.vue'; 
import { storeToRefs } from 'pinia';
const router = useRouter()
const route = useRoute()
const onClickLeft = () => {
  router.back()
}
const  housListStore = useHouseListStore()
housListStore.getHouseListApi({houseId : route.params.id})
const { houseList } = storeToRefs(housListStore)
</script>

<style scoped>

</style>