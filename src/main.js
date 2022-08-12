import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import './plugins/element.js'
import './assets/css/base.css'
import './assets/css/fonts1920zxt/iconfont.css'
import i18n from './lang/index'
import * as echarts from 'echarts'
import store from './store'
Vue.prototype.$echarts = echarts;

// import api from './api/index'
Vue.config.productionTip = false
    // Vue.prototype.$api = api
Vue.use(VueRouter);
// 持久化
let user = sessionStorage.getItem('user')
if (user) {
    user = JSON.parse(user)
    store.commit('setUser', user)
}
new Vue({
    store,
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')