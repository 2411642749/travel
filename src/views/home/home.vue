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
    </div>
</template>

<script setup>
import HomeNavBar from "./components/home-nav-bar.vue";
import HomePosition from "./components/home-position.vue";
import {useHomeStore} from "../../stores/modules/home";

const homeStore = useHomeStore()
homeStore.getHotSuggests()
</script>

<style scoped>
.banner img {
    width: 100%;
}
</style>