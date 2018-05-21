import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login'
import register from '@/pages/register/register'
import personalInfo from '@/pages/userinfo/personal-info'
import studentsManagement from '@/pages/students-management/students-info'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/personal-info',
            name: 'personal-info',
            component: personalInfo
        },
        {
            path: '/students-management',
            name: 'students-management',
            component: studentsManagement
        }
    ]
})
