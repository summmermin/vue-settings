import {createApp} from 'vue'
import './style/app.scss'
import App from './App.vue'
import router from "./router/router.ts"
import {createPinia} from 'pinia';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
