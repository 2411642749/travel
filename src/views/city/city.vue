<template>
  <!-- 全屏组件
    1: App.vue中通过useRouter()中的meta自定义属性来显示隐藏
    2: 利用CSS样式 z-index 层级覆盖TabBar 样式
  -->
    <div class="city noTabBar">
        <div class="top">
            <!--   搜索     -->
            <van-search v-model="searchValue" show-action shape="round"
                        placeholder="城市/区域/位置" @search="searchClick" @cancel="cancelClick"/>
            <!--    Tab切换    -->
            <van-tabs v-model:active="TabValue" color="#ff9645">
                <template v-for="(value,key,index) in cityData" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
        <!--    切换内容      -->
        <!--
          头部固定2种方式
            1: 头部固定定位,内容区域用margin-top称下。 缺点:滚动条显示有误
            2: 头部不动，内容区域内部滚动。动态计算（cacl）高度，超出y轴出现滚动条。
               -->
        <div class="center">
            <!-- 拿所有的数据动态渲染根据点击的值和TabValue相比较来进行显示  -->
            <template v-for="(v,k,i) in cityData" :key="i">
                <city-group :group-data="v" v-show="k === TabValue"/>
            </template>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useCityStore} from "../../stores/modules/city";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import CityGroup from "./components/city-group.vue";

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

/**
 * 1. 拿到的是个对象，需要拿到对应的key来进行取值。 通过API设置van-tab 的 name 来拿到对应的value
 * 2. 直接 cityData.value[TabValue.value] 拿到的值不是响应式的。通过计算属性让其变为响应式。或者在模板
 *    中直接进行取值也可以 cityData[TabValue]?.cities
 * */
const filterData = computed(() => cityData.value[TabValue.value])
</script>

<style scoped>
.center {
    height: calc(100vh - 98px);
    overflow-y: auto
}
</style>