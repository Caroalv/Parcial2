<template>
  <nav class="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center text-white font-bold text-lg">
            <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-8 mr-2">
            Mi App
          </a>
        </div>

        <!-- Links del Navbar -->
        <div class="hidden md:block">
          <ul class="flex space-x-4">
            <li>
              <router-link
                to="/"
                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Principal</router-link
              >
            </li>
            <li>
              <router-link
                to="/contacto"
                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Contacto</router-link
              >
            </li>
            <li>
              <router-link
                to="/features"
                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Features</router-link
              >
            </li>
            <li>
              <router-link
                to="/precios"
                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Precios</router-link
              >
            </li>
            <li>
              <router-link
                to="/api"
                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >API</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            type="button"
            class="text-white hover:bg-blue-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li>
          <router-link
            to="/"
            class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
            >Principal</router-link
          >
        </li>
        <li>
          <router-link
            to="/contacto"
            class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
            >Contacto</router-link
          >
        </li>
        <li>
          <router-link
            to="/features"
            class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
            >Features</router-link
          >
        </li>
        <li>
          <router-link
            to="/precios"
            class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
            >Precios</router-link
          >
        </li>
        <li>
          <router-link
            to="/api"
            class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
            >API</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
