/**
 * @author paoloo1995
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store'
import App from 'components/app.vue'
import Env from './config/env'



Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
    store,
    el:'body',
    components:{ App }
})

// 开启debug模式
Vue.config.debug = true

// 路由配置
var router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: Env != 'production'
})

router.map({
    '/index': {
        name: 'index',
        component: function (resolve) {
            require(['./routers/index.vue'], resolve)
        }
    },
    '/content': {
        name: 'content',
        component:(resolve) => {
            require(['./routers/content.vue'],resolve)
        }
    }
})

router.beforeEach(function () {
    window.scrollTo(0, 0)
})

router.afterEach(function (transition) {

})

router.redirect({
    '*': "/index"
})
router.start(App, '#app')