<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8" v-if="!isLoginPage">
      <div class="flex-1">
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <div>
    <Navbar v-if="!isLoginPage" /> <!-- Renderiza el Navbar solo si no estás en la página de inicio de sesión -->

  </div>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 overflow-auto">
      <router-view />
    </main>
    <!-- Fin Main -->

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
