<template>
    <div class="home">
        <!--    标题    -->
        <home-nav-bar/>
        <!--   图片     -->
        <div class="banner">
            <img src="../../assets/imgs/home/banner.webp">
        </div>
        <!--    位置    -->
        <home-position/>
        <!--  热门  -->
        <home-hot/>
        <!--  顶部搜索  -->
        <van-search
            v-if="showSearch"
            placeholder="关键字/位置/民宿"
            left-icon=""
            >
            <template #left>
               <div class="left">
                <div class="start">住 <span>{{ startDate }}</span></div>
                <div class="end">离 <span>{{ endDate }}</span></div>
               </div>
            </template>
            <template #right-icon>
                <van-icon name="search" />
            </template>
        </van-search>
    </div>
</template>

<script setup>
import { ref,computed } from "vue";
import HomeNavBar from "./components/home-nav-bar.vue";
import HomePosition from "./components/home-position.vue";
import HomeHot from "./components/home-hot.vue";
import {useHomeStore} from "../../stores/modules/home";
import { scrollListenFn } from '../../hooks/scroll'
import { useMainStore } from "../../stores/main"
import { diffDate, formatMonthDay } from "../../utils/format-date";
import { storeToRefs } from "pinia";
// 滚动到一定区域显示搜索框
const { scrollTop } = scrollListenFn()
const showSearch = computed(() => scrollTop.value > 200)
// 搜索时间
const mainStore = useMainStore()
const {nowDate,newDate} = storeToRefs(mainStore)
const startDate = computed(() =>formatMonthDay(nowDate.value))
const endDate = computed(() =>formatMonthDay(newDate.value))

// 网络请求
const homeStore = useHomeStore()
homeStore.getHotSuggests()
homeStore.gethouseType()
homeStore.gethotData()
</script>

<style scoped>
.banner img {
    width: 100%;
}

.van-search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.van-search .left {
    height: 34px;
    padding: 3px 8px;
    box-sizing: border-box;
    background-color: #f2f4f5;
    border-right:1px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    border-radius: 5px 0 0 5px;
    color: #bcb6b6;
}

.van-search .left span {
    color: #333;
}
</style>