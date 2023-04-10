<template>
  <div class="loading" @click="isLoadingFn">
    <div class="content">
      <img src="../../assets/imgs/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '../../stores/main'
const mainStore = useMainStore()
const isLoadingFn = () => {
const mainStore = useMainStore()
  mainStore.isLoading = false
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .1);
}

.content {
  width: 104px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/imgs/home/loading-bg.png') no-repeat;
}

.content  img {
  width: 70px;
  height: 70px;
  margin-left: 25px;
  margin-top: 15px;
}
</style>
