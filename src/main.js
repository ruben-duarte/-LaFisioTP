import { createApp } from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
library.add(fas);
import router from './router'

import './assets/main.css'


const app = createApp(App)
app.use(router).mount('#app').component('fa', FontAwesomeIcon)


app.use(router)

app.mount('#app')
