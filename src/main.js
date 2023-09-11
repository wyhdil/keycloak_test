// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 导入全局样式表
import './assets/css/global.css'

import "./assets/iconfont/iconfont.css";
import "./assets/iconfont/iconfont.js"
import './assets/css/iconfont.css'
// import "https://at.alicdn.com/t/c/font_3677564_pm821dif2q.js"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//文本编辑器的插件，暂时没用到
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
Vue.use(VueQuillEditor, /* { default global options } */)

// //vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = '/api'

axios.interceptors.request.use(config => {
  // config.headers.satoken = window.sessionStorage.getItem('token');

  // console.log('=============拦截器============');
  //在登录接口的时候不加请求头
  if (config.url != '/home/login') {
    config.headers.satoken = window.localStorage.getItem('token');
  }
  // console.log(config.url);
  return config;
})


//引入keycloak
import keycloak from '@dsb-norge/vue-keycloak-js';
Vue.use(keycloak, {
  init: {
    //是否定时校验登录状态，如果chrome版本大于86.x，请改为false。否则将导致浏览器重复刷新
    checkLoginIframe: false,
    onLoad: 'login-required'
  },
  config: {
    url: 'http://localhost:8080/auth',
    realm: 'test',
    clientId: 'test-realm'
  },
  onReady: (keycloak) => {
    //获取用户的信息
    keycloak.loadUserProfile().success((data) => {
      console.log(data);
    });
  }
});

//请求拦截器，一旦发起请求之后，如果发现token过期了就直接跳转到登录页面
axios.interceptors.response.use(function (response) {
  // 请求成功，处理响应数据
  if (response.data.code === 401) {
    window.localStorage.removeItem('token')
    router.push('/login')
  }
  return response
}, function (error) {
  // 请求失败，处理错误响应数据
  if (error.response && error.response.status === 401) {
    window.localStorage.removeItem('token')
    router.push('/login')
  }
  return Promise.reject(error)
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //将创建的共享数据对象挂载到Vue实例中
  //所有的组件就可以直接从store中获取全局的数据了
  store,
  components: { App },
  template: '<App/>'
})

//页面跳转的时候回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});