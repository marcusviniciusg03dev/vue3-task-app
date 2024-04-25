import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { i18nPlugin } from './plugins/i18n'
import { langs } from './langs'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.use(i18nPlugin, langs)

app.config.errorHandler = (err, instance) => {
  console.log({ err, instance })
}

app.use(router)

app.mount('#app')
