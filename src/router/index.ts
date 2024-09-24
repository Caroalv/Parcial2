import { createRouter, createWebHistory } from 'vue-router';

// Importa las rutas de tus componentes
import PrincipalPagina from '@/modules/landing/pages/PrincipalPagina.vue';

const routes = [
  {
    path: '/',
    name: 'PrincipalPagina',
    component: PrincipalPagina,  // Ruta para la página principal
  },
  {
    path: '/contacto',
    name: 'ContactoPagina',
    component: () => import('@/modules/landing/pages/ContactoPagina.vue'),
  },
  {
    path: '/features',
    name: 'FeaturesPagina',
    component: () => import('@/modules/landing/pages/FeaturesPagina.vue'),
  },
  {
    path: '/precios',
    name: 'PreciosPagina',
    component: () => import('@/modules/landing/pages/PreciosPagina.vue'),
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('@/modules/landing/pages/api.vue'),
  },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,  // Define las rutas
});

// Exporta el router
export default router;