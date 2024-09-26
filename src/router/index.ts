import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/modules/landing/pages/firebase'; // Asegúrate de que esta ruta sea correcta
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
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/features',
    name: 'FeaturesPagina',
    component: () => import('@/modules/landing/pages/FeaturesPagina.vue'),
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/precios',
    name: 'PreciosPagina',
    component: () => import('@/modules/landing/pages/PreciosPagina.vue'),
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/api',
    name: 'Api',
    component: () => import('@/modules/landing/pages/Api.vue'),
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,  // Define las rutas
});

// Guard de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const loggedIn = !!auth.currentUser; // Verifica si el usuario está autenticado

  if (requiresAuth && !loggedIn) {
    next('/'); // Redirige al login si no está autenticado
  } else {
    next(); // Permite el acceso a la ruta
  }
});

// Exporta el router
export default router;
