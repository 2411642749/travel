<template
  <div class="detail"> 
    <van-nav-bar
      title="旅途"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    ID:{{ route.params.id }}
</template>

<script setup>
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()
const onClickLeft = () => {
  router.back()

}
</script>

<style scoped>

</style>