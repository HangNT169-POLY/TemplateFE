import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)
// Khong duoc viet duoi app
// Neu nhieu component can dang ky toan cau thi lam ntn ( giong static trong java)
app
  .component('ComponentA', GlobalComponent)
  .component('ComponentB', GlobalComponent)

app.use(router)

app.mount('#app')
