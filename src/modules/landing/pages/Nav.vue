<template>
  <nav class="bg-yellow-400 p-4 shadow-lg border-b-4 border-red-600 w-full fixed top-0 left-0 z-10">
    <div class="flex justify-between items-center">
      <!-- Cerrar sesión en la esquina izquierda -->
      <div class="ml-4">
        <router-link to="/" class="nav-link flex items-center" active-class="active-link">
          <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt="Cerrar Sesión" class="w-6 h-6 inline-block mr-2" />
          Cerrar sesión
        </router-link>
      </div>

      <!-- Enlaces del navbar centrados -->
      <ul class="flex justify-center space-x-8 items-center">
        <li>
          <router-link to="/inicio" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/384-rayquaza-shiny.png?raw=true" alt="Inicio" class="w-6 h-6 inline-block mr-2" />
            Inicio
          </router-link>
        </li>
        <li>
          <router-link to="/contacto" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/382-kyogre.png?raw=true" alt="Contacto" class="w-6 h-6 inline-block mr-2" />
            Contacto
          </router-link>
        </li>
        <li>
          <router-link to="/regiones" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/383-groudon.png?raw=true" alt="Regiones" class="w-6 h-6 inline-block mr-2" />
            Regiones
          </router-link>
        </li>
        <li>
          <router-link to="/personajes" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/144-articuno.png?raw=true" alt="Personajes" class="w-6 h-6 inline-block mr-2" />
            Personajes
          </router-link>
        </li>
        <li>
          <router-link to="/juego" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/145-zapdos.png?raw=true" alt="API" class="w-6 h-6 inline-block mr-2" />
            Batalla Pokemon
          </router-link>
        </li>
        <li>
          <router-link to="/api" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/146-moltres.png?raw=true" alt="API" class="w-6 h-6 inline-block mr-2" />
            Pokedex
          </router-link>
        </li>
      </ul>
    </div> 
    </nav>
  </template>
  
  <script setup lang="ts">
  // Aquí puedes agregar lógica o propiedades si es necesario
  </script>
  
  <style scoped>
  /* Estilos para el navbar */
  </style>
  