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
          <router-link to="/contacto" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/384-rayquaza-shiny.png?raw=true" alt="Contacto" class="w-6 h-6 inline-block mr-2" />
            Contacto
          </router-link>
        </li>
        <li>
          <router-link to="/features" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/144-articuno.png?raw=true" alt="Features" class="w-6 h-6 inline-block mr-2" />
            Features
          </router-link>
        </li>
        <li>
          <router-link to="/precios" class="nav-link flex items-center" active-class="active-link">
            <img src="https://github.com/TheArtificial/pokemon-icons/blob/master/_icons/PNG/1x/145-zapdos.png?raw=true" alt="Precios" class="w-6 h-6 inline-block mr-2" />
            Precios
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

<style scoped>
/* Estilo base para el enlace del navbar utilizando Tailwind */
.nav-link {
  @apply text-white text-lg font-semibold transition-colors duration-300 ease-in-out;
}

/* Efecto hover para los enlaces */
.nav-link:hover {
  @apply text-red-600;
}

/* Estilo del enlace activo */
.active-link {
  @apply text-red-600 border-b-2 border-red-600;
}
</style>
