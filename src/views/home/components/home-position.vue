<template>
    <div class="position">
        <div class="position_top">
            <div class="position_top——left">
                <span @click="cityClick">上海</span>
            </div>
            <div class="position_top——right" @click="positionClick">
                <span>我的位置</span>
                <img src="../../../assets/imgs/home/icon_location.png">
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
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
</style>