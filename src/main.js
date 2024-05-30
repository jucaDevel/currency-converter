import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index";

import './style/tailwind.css'
import router from '@/router'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
