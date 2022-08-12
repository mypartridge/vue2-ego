import Vue from 'vue'
import Vuex from 'vuex'
// import loginModulee from './modules/loginModule'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userinfo: {
            user: '',
            token: ''
        }
    },
    mutations: {
        //设置用户信息
        setUser(state, payload) {
            state.userinfo = payload
        },
        clearUser(state) {
            state.userinfo = {
                user: '',
                token: ''
            }
        }
    },
    actions: {},
    modules: {
        // loginModulee 
        //设置用户信息
    },
})