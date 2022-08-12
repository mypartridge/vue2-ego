// 请求方法
import axios from 'axios';
import base from './base';
const qs = require('querystring')
const api = {
    getLogin() {
        return axios.post(base.login, qs.stringify(params))
    },
    getGoodsList(params) {
        return axios.get(base.goodsList, {
            params
        })
    },
    getSearch() {
        return axios.get(base.search, {
            params
        })
    },
    getSelectCategory(params) {
        return axios.get(base.selectCategory, { params })
    },
    addGoods(params) {
        return axios.get(base.addGoods, { params })
    },
    deleteGoods(params) {
        return axios.get(base.deleteGoods, { params })
    },
    updateGooods(params) {
        return axios.get(base.updateGoods, { params })
    },
    getParams(params) {
        return axios.get(base.params, ({ params }))
    }
}
export default api