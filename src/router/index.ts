import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login/index.vue')
    }
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})