<template>
    <div>
        <router-view></router-view>
        <tab-bar/>
        <Loading v-if="useMainStore().isLoading"/>
    </div>
</template>

<script setup>
import TabBar from "./components/TabBar/tabBar.vue";
import Loading from './components/Loading/loading.vue'
import { useMainStore } from './stores/main'
</script>

<style scope>
   
</style>
