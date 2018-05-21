// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import headerTop from './components/header/header'
import router from './router'
import store from './store'
import dragable from './common/dragable'
import elementUI from 'element-ui'

Vue.use(elementUI)

Vue.config.productionTip = false

Vue.component('header-top', headerTop)

Vue.directive('dragable', dragable)
/* eslint-disable no-new */
const vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
console.log(vm.$myProperty)
