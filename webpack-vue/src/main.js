import Vue from 'vue'
import App from './App.vue'

// Vuex
import store from './store'

// 路由
import router from './router'

// 字体图标
import '@/assets/iconfont/iconfont.css'

// js 文件
import '@/assets/js/cons.js'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')