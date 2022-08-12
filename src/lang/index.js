import Vue from 'vue'
// import Element from 'element-ui'
import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import znLocale from 'element-ui/lib/locale/lang/zh-CN'
import chinese from './chinese-lang'
import english from './Ehngish-lang'
Vue.config.productionTip = false
Vue.use(VueI18n);
//准备语言
const messages = {
    //1.英语
    en: {
        ...english,
        // ...enLocale,
    },
    //2.中文
    zh: {
        ...chinese,
        // ...znLocale,
    }
    //用插件(不会)
    // 'zh': Object.assign(require('../views/Layout/Yumenu'), elementZnLocale),
    // 'en': Object.assign(('../views/Layout/Yumenu'), elementEnLocale)
};
//2.通过选项创建并导出VueI18n实例
const i18n = new VueI18n({
    locale: 'zh', //选中的语言
    messages, //语言环境
    //隐藏报错
    silentTranslationWarn: true
});
// Vue.use(Element, {
//     i18n: (key, value) => i18n.t(key, value)
// });
export default i18n