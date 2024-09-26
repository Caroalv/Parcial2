<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8" v-if="!isLoginPage">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <div>
    <Navbar v-if="!isLoginPage" /> <!-- Renderiza el Navbar solo si no estás en la página de inicio de sesión -->
    <router-view />
  </div>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main>
      <RouterView />
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © 20xx Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './modules/landing/pages/Nav.vue'; // Ajusta la ruta según sea necesario

const route = useRoute();
const isLoginPage = computed(() => route.name === 'PrincipalPagina'); // Cambia 'PrincipalPagina' si es necesario
</script>


<style scoped>
/* Estilos generales */
</style>
