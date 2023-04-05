<template>
    <van-index-bar :sticky="false" highlight-color="var(--primary-color)" :index-list="indexList">
        <van-index-anchor index="全部"/>
        <div class="title-all">
            <template v-for="(city,index) in groupData.hotCities" :key="index">
                <div class="item" @click="cityClick(city)"> {{ city.cityName }}</div>
            </template>
        </div>
        <template v-for="(item,index) in groupData.cities" :key="index">
            <van-index-anchor :index="item.group"/>
            <template v-for="(city,indey) in item.cities" :key="indey">
                <van-cell :title="city.cityName" @click="cityClick(city)"/>
            </template>
        </template>
    </van-index-bar>
</template>

<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import {useCityStore} from "../../../stores/modules/city";

const router = useRouter()
const cityStore = useCityStore()
const props = defineProps({
    groupData: {
        type: Object,
        default: () => {
        }
    }
})
// 右侧索引 #-z
const indexList = computed(() => {
    const list = props.groupData.cities.map(item => item.group)
    list.unshift('#')
    return list
})

// 点击城市
const cityClick = (city) => {
    cityStore.currentData = city
    router.back()
}
</script>

<style scoped>
.title-all {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;
}

.item {
    width: 70px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    background-color: #fff4ec;
    margin: 6px 0;
}
</style>