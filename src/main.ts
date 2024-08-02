import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/index.css'
import './assets/style/typography.css'
import './assets/style/metric.css'

import './demos/ipc'
import {setupApiMocks} from './tests/apiMocks'

setupApiMocks()

export class AppException extends Error {}

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
