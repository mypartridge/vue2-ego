export default {
    namespaced: true, //匿名空间
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
    getters: {},
}