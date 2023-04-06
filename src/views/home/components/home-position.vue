<template>
    <div class="position">
        <div class="position_top">
            <div class="position_top——left">
                <span @click="cityClick">{{ cityName.cityName }}</span>
            </div>
            <div class="position_top——right" @click="positionClick">
                <span>我的位置</span>
                <img src="../../../assets/imgs/home/icon_location.png">
            </div>
        </div>
        <!--    入住    -->
        <div class="checkin" @click="showDate = true">
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
            <template v-for="(item ,index) in hotSuggests" :key="index">
                <div
                        class="item"
                        :style="{background : item.tagText.background.color, color : item.tagText.color}">
                    {{ item.tagText.text }}
                </div>
            </template>
        </div>
    </div>
  <!--  日期  -->
    <van-calendar
            v-model:show="showDate"
            color="#ff9645"
            :show-confirm="false"
            type="range"
            @confirm="onConfirm"
    />
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";
import {useCityStore} from "../../../stores/modules/city";
import {diffDate, formatMonthDay} from "../../../utils/format-date";
import {useHomeStore} from "../../../stores/modules/home";
import {storeToRefs} from "pinia";

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
const nowData = new Date()
const startDate = ref(formatMonthDay(nowData))
const newtData = nowData.setDate(nowData.getDate() + 1)
const endDate = ref(formatMonthDay(newtData))

// 点击入住
const showDate = ref(false)
const time = ref(1)
const onConfirm = (data) => {
    startDate.value = formatMonthDay(data[0])
    endDate.value = formatMonthDay(data[1])
    time.value = diffDate(startDate.value, endDate.value)
    showDate.value = false
}

// 热门建议
const homeStore = useHomeStore()
const {hotSuggests} = storeToRefs(homeStore)
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
</style>