import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import { router } from './router'
import 'normalize.css/normalize.css'

const app = createApp(App)
app.use(Button)
app.use(router)
app.mount('#app')
