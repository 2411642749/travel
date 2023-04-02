<template>
    <div class="tab-bar">
        <template v-for="(item,index) in listData">
            <div
                    class="tab-bar-item"
                    :class="{active : currentIndex=== index}"
                    @click="itemClick(item,index)"
            >
                <!-- vite中动态引入图片需要使用new URL 来进行引入-->
                <img :src="getAssetsImg(currentIndex=== index ? item.activeImage : item.image)">
                <span>{{ item.title }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {listData} from "../../assets/staticData/tabBar";
import {getAssetsImg} from "../../utils/getAssets";
import {useRouter} from "vue-router";

const router = useRouter()
const currentIndex = ref(0)
const itemClick = (item, index) => {
    currentIndex.value = index
    router.push(item.path)
}
</script>

<style scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    display: flex;
    width: 100%;
    border-top: 1px solid #f3f3f3;
}

.tab-bar-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}

.active {
    color: var(--primary-color)
}

.tab-bar-item img {
    width: 36px;
    margin-bottom: 3px;
}
</style>