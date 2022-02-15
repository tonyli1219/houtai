import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import layout from '../views/layout/index.vue'
declare module 'vue-router' {
    interface RouteMeta {
      // 是可选的
      title: string
    }
}

export const router1: Array<any> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: layout,
        redirect: '/dashboard/info',
        meta: {
            title: 'dashboard'
        },
        children: [
            {
                path: 'info',
                name: 'info',
                meta: {
                    title: '图表数据'
                },
                component: () => import('../views/dashboard/index.vue')
            }
        ]
    },
    {
        path: '/essay',
        name: 'essay',
        component: layout,
        meta: {
            title: '文章管理'
        },
        children: [
            {
                path: 'list',
                name: 'list',
                meta: {
                    title: '文章列表'
                },
                component: () => import('../views/essay/index.vue')
            },
            {
                path: 'writeessay',
                name: 'writeessay',
                meta: {
                    title: '写文章', show: false
                },
                component: () => import('../views/essay/writeessay.vue')
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