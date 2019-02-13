import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'  // 引入css文件
import './assets/images/bg.png'

const root = document.createElement('div')

new Vue({
    render: (h) => h(App)
}).$mount()