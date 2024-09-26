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
    path: '/inicio',
    name: 'InicioPagina',
    component: () => import('@/modules/landing/pages/InicioPagina.vue'),
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/contacto',
    name: 'ContactoPagina',
    component: () => import('@/modules/landing/pages/ContactoPagina.vue'),
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/regiones',
    name: 'RegionesPagina',
    component: () => import('@/modules/landing/pages/RegionesPagina.vue'),
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/personajes',
    name: 'PersonajesPagina',
    component: () => import('@/modules/landing/pages/PersonajesPagina.vue'),
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/juego',
    name: 'JuegoPagina',
    component: () => import('@/modules/landing/pages/JuegoPagina.vue'),
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
