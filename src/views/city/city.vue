<template>
  <!-- 全屏组件
    1: App.vue中通过useRouter()中的meta自定义属性来显示隐藏
    2: 利用CSS样式 z-index 层级覆盖TabBar 样式
  -->
    <div class="city noTabBar">
        <!--   搜索     -->
        <van-search
                v-model="searchValue"
                show-action
                shape="round"
                placeholder="城市/区域/位置"
                @search="searchClick"
                @cancel="cancelClick"
        />
        <!--    Tab切换    -->

        <van-tabs v-model:active="TabValue" color="#ff9645">
            <template v-for="(value,key,index) in cityData" :key="key">
                <van-tab :title="value.title">内容 1</van-tab>
            </template>
        </van-tabs>

    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";
import {useCityStore} from "../../stores/modules/city";
import {storeToRefs} from "pinia";

const router = useRouter()
// 搜索
const searchValue = ref('')
const searchClick = () => {

}
const cancelClick = () => {
    router.back()
}
// Tab页
const TabValue = ref(0)

// 城市数据
const cityStore = useCityStore()
cityStore.fetchCityData()
const {cityData} = storeToRefs(cityStore)
</script>

<style scoped>

</style>