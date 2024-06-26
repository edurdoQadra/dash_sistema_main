import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';  // Corregido el camino relativo
import SelectView from '../SelectView.vue';
import TableOne from '../views/TableOne.vue';
import TableTwo from '../views/TableTwo.vue';

const routes = [
  { path: '/app', component: App },
  { path: '/tabla', component: TableOne },
  { path: '/tablatwo', component: TableTwo },
  { path: '/selectview', component: SelectView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
