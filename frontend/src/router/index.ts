import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import SinglePage from '@/components/SinglePage.vue'
import ConfirmPage from '@/components/ConfirmPage.vue'
import UploadPage from '@/components/UploadPage.vue'
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded, NavigationGuardNext } from 'vue-router';
import cognitoAuth from '@/cognito'

function requireAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  cognitoAuth.isAuthenticated((err: any, loggedIn: any) => {
    if (err) return next()
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  })
}

function logout(_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) {
  cognitoAuth.logout()
  next('/')
}

// 单路由 SPA：不使用 Vue Router，只有一个页面/视图
// 多路由 SPA：使用 Vue Router，有多个页面/视图，但仍然是单页应用
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/profile', component: ProfilePage },
    { path: '/confirm', component: ConfirmPage },
    { path: '/:id', name: 'Profile', component: SinglePage, beforeEnter: requireAuth },
    { path: '/upload', component: UploadPage, beforeEnter: requireAuth },
    { path: '/logout', redirect: '/', beforeEnter: logout },
  ],
})

export default router
