<template>
    <div class="position">
        <div class="grey-line position_top">
            <div class="position_top——left">
                <span @click="cityClick">{{ cityName.cityName }}</span>
            </div>
            <div class="position_top——right" @click="positionClick">
                <span>我的位置</span>
                <img src="../../../assets/imgs/home/icon_location.png">
            </div>
        </div>
        <!--    入住    -->
        <div class="grey-line checkin" @click="showDate = true">
            <div class="start">
                <span>入住</span>
                <div>{{ startDate }}</div>
            </div>
            <div class="total">
                <span>共{{ time }}晚</span>
            </div>
            <div class="end">
                <span>离店</span>
                <div>{{ endDate }}</div>
            </div>
        </div>
        <!--    价格/关键字....    -->
        <div class="limit grey-line">
            <div class="price"> 价格不限</div>
            <div class="people"> 人数不限</div>
        </div>
        <div class="limit grey-line"><span>关键字/位置/名宿名</span></div>
        <!--    热门建议    -->
        <div class="hotSuggests">
            <template v-for="(item, index) in hotSuggests" :key="index">
                <div class="item" :style="{ background: item.tagText.background.color, color: item.tagText.color }">
                    {{ item.tagText.text }}
                </div>
            </template>
        </div>
        <!--   开始搜索  -->
        <div class="search">
            <div class="search-btn" @click="searhClick">
                开始搜索
            </div>
        </div>
        <!-- 分类  -->
        <div class="houseType">
            <template v-for="item in houseType" :key="item.id">
                <div class="item">
                    <img :src="item.pictureUrl" alt="">
                    <span>{{ item.title }}</span>
                </div>
            </template>
        </div>
    </div>
    <!--  日期  -->
    <van-calendar v-model:show="showDate" color="#ff9645" :show-confirm="false" type="range" @confirm="onConfirm" />
</template>

<script setup>
import { ref ,computed} from 'vue'
import { useRouter } from "vue-router";
import { useCityStore } from "../../../stores/modules/city";
import { diffDate, formatMonthDay } from "../../../utils/format-date";
import { useHomeStore } from "../../../stores/modules/home";
import { useMainStore } from "../../../stores/main"
import { storeToRefs } from "pinia";

const router = useRouter()
const cityStore = useCityStore()
// 城市/定位
const cityClick = () => {
    router.push('/city')
}
const positionClick = () => {
    //  地理定位chrome下只支持https协议 http协议只支持IE，火狐.. 等浏览器
    navigator.geolocation.getCurrentPosition(res => {
        console.log('位置获取成功', res)
    }, err => {
        console.log('获取失败', err)
    })
}

// 城市名字
const cityName = cityStore.currentData
// 入住时间
const mainStore = useMainStore()
const {nowDate,newDate} = storeToRefs(mainStore)
const startDate = computed(() =>formatMonthDay(nowDate.value))
const endDate = computed(() =>formatMonthDay(newDate.value))

// 点击入住
const showDate = ref(false)
const time = ref(1)
const onConfirm = (data) => {
    console.log(nowDate);
    nowDate.value = formatMonthDay(data[0])
    newDate.value = formatMonthDay(data[1])
    time.value = diffDate(startDate.value, endDate.value)
    showDate.value = false
}

// 热门建议
const homeStore = useHomeStore()
const { hotSuggests, houseType } = storeToRefs(homeStore)

// 开始搜索
const searhClick = () => {
    router.push({
        path: '/search'
    })
}
</script>

<style scoped>
.position_top {
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.position_top——left {
    color: #666;
    flex: 1;
}

.position_top——right {
    display: flex;
    align-items: center;
    width: 74px;
    font-size: 12px;
    color: #333
}

.position_top——right img {
    width: 16px;
    margin-left: 8px;
}

.checkin {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px
}

.checkin span {
    color: #333;
    font-size: 12px;
}

.checkin div {
    color: #000;
    margin-top: 3px;
    font-size: 14px;
}

.limit {
    display: flex;
    padding: 0 15px;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #ccc;
}

.limit .people {
    height: 100%;
    line-height: 44px;
    padding-left: 10px;
    border-left: 1px solid var(--van-grey-line);
}

.hotSuggests {
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    margin-top: 4px;
}

.hotSuggests .item {
    padding: 8px 10px;
    margin: 4px 6px;
    border-radius: 14px;
    font-size: 12px;
}

.search {
    padding: 0 15px;
    margin: 10px 0;
}

.search-btn {
    letter-spacing: 3px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #ff971f, #ffa932);
}

.houseType {
    display: flex;
    overflow-x: auto;
    padding: 0 10px;
}

.houseType::-webkit-scrollbar {
  display: none; 
}

.houseType .item {
    flex-shrink: 0;
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.houseType .item img {
    width: 32px;
    height: 32px;
    margin-bottom: 3px;
}
</style>