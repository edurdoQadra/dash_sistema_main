import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Dashboard from './components/Dashboard.vue'
import SelectView from './SelectView.vue'
import TableOne from './views/TableOne.vue'
import router from './router/index.js'

const app = createApp(Dashboard);
app.use(router);
app.mount('#app');
