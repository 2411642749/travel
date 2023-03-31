import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('../views/home/home.vue')
        },
        {
            path: '/favorites',
            component: () => import('../views/favorites/favorites.vue')
        },
        {
            path: '/cart',
            component: () => import('../views/cart/cart.vue')
        },
        {
            path: '/message',
            component: () => import('../views/message/message.vue')
        },


    ]
})

export default router