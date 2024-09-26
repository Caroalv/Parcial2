<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-yellow-600">Bienvenido a mi Página de Pokémon</h1>
        <p class="mt-2 text-lg">¡Explora el emocionante mundo de Pokémon y sus aventuras!</p>
      </header>
      <PokemonCarousel />
    </div>
  </template>
  
  <script>
  import PokemonCarousel from './Carrusel.vue';
  
  export default {
    components: {
      PokemonCarousel,
    },
  };
  </script>
  
  <style>
  /* Estilos adicionales si son necesarios */
  </style>
  