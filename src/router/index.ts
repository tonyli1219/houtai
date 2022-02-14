import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import layout from '../views/layout/index.vue'

export const router1: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: layout,
        redirect: '/dashboard/info',
        children: [
            {
                path: 'info',
                name: 'info',
                component: () => import('../views/dashboard/index.vue')
            }
        ]
    },
    {
        path: '/essay',
        name: 'essay',
        component: layout,
        children: [
            {
                path: 'list',
                name: 'list',
                component: () => import('../views/index/index.vue')
            }
        ]
    }
]
const routes: Array<RouteRecordRaw> = [
    ...router1,
    {
        path: '/login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: "/:catchAll(.*)",
        component: () => import('../views/404/index.vue')
    }
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})