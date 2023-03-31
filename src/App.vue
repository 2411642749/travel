<template>
    <router-view></router-view>

    <router-link to="/home">home</router-link>
    <router-link to="/favorites">favorites</router-link>
    <router-link to="/cart">cart</router-link>
    <router-link to="/message">message</router-link>
</template>

<script>

export default {
    name: 'App',
    components: {}
}
</script>
