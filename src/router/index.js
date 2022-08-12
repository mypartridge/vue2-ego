import VueRouter from 'vue-router';
import Layout from '../views/Layout/index.vue';
import Login from "../views/Login/Login.vue";
import Home from '../views/Home/index.vue';
import Goods from '../views/Goods/Goods.vue';
import Vue from 'vue';
// import router from 'server水平不够/router';
//异步引入
const Params = () =>
    import ('../views/Params/Params.vue');
const ParamsSpecs = () =>
    import ('../views/Params/Paramsspecs/ParamsSpecs')
const Advert = () =>
    import ('../views/Advent/Advent.vue');
// const Order = () =>
//     import ('../views/Order/Orders.vue');
// const OrderList = () =>
//     import ('../views/Order/OrderList/OrderList.vue');
// const OrderBack = () =>
//     import ('../views/Order/OrderBack/OrderBack.vue');
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '',
            component: Layout,
            // 路由元信息
            meta: {
                isLogin: true
            },
            children: [{
                    path: '/',
                    name: 'Home',
                    component: Home
                }, {
                    path: '/goods',
                    name: 'Goods',
                    component: Goods
                },
                {
                    path: '/params',
                    name: 'Params',
                    redirect: '/params/paramsspecs',
                    component: Params,
                    children: [{
                        path: 'paramsspecs',
                        component: ParamsSpecs
                    }]
                }, {
                    path: '/advert',
                    name: 'Advert',
                    component: Advert
                },
                // {
                //     path: '/order',
                //     name: 'Order',
                //     component: Order,
                //     redirect: '/order/orderlist',
                //     children: [{
                //         path: 'orderlist',
                //         component: OrderList,
                //     }, {
                //         path: 'orderback',
                //         component: OrderBack,
                //     }]
                // }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        }
    ]
});
// import store from '../store/index'
// router.beforeEach((to, from, next) => {
//     console.log('--to--', to);
//     // 判断是否需要登录
//     if (to.matched.some(ele => ele.meta.isLogin)) {
//         // 判断用户是否已经登录
//         let token = store.state.loginModule.userinfo.token;
//         if (token) {
//             next();
//         } else {
//             next('/login')
//         }
//     } else {
//         next();
//     }
// });
import store from '../store/index'
router.beforeEach((to, from, next) => {
    if (to.matched.some(ele => ele.meta.isLogin)) {
        let token = store.state.userinfo.token;
        if (token) {
            next();
        } else {
            next('/login')
        }
    } else {
        next();
    }
})
export default router