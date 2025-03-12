import { createRouter, createWebHistory } from 'vue-router';
import KonverterBerat from '../views/KonverterBerat.vue';
import KonverterSuhu from '../views/KonverterSuhu.vue';

const routes = [
  { path: '/', redirect: '/konverter-berat' },
  { path: '/konverter-berat', component: KonverterBerat },
  { path: '/konverter-suhu', component: KonverterSuhu }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
