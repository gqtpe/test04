import '@/styles/tailwind.css'
import '@/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-bootstrap.css';
import router from "@/app/router.ts";
const app = createApp(App)
app.use(router)
app.use(createPinia())

app.use(ToastPlugin)
app.mount('#app')
