<template>
    <div class="min-h-screen flex justify-center items-center">
      <div class="text-center">
        <h1 class="text-5xl">
        <span>¡BATALLA </span>
        <span class="fire-text tracking-wide">POKEMON!</span>
    </h1>
        <h2 class="text-3xl font-semibold mb-4">Pokémon Showdown</h2>
        <iframe 
          src="https://pokemonshowdown.com/"
          width="1300" 
          height="800" 
          frameborder="0"
          style="border: 1px solid #ccc;"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Lógica adicional si es necesario
  </script>
  
  <style scoped>

  @keyframes fireAnimation {
    0% {
      text-shadow: 0 0 4px #ff9, 0 0 8px #ff9, 0 0 10px #f60, 0 0 20px #f60, 0 0 30px #f30, 0 0 40px #c00;
    }
    50% {
      text-shadow: 0 0 4px #ff9, 0 0 10px #ff9, 0 0 12px #f60, 0 0 22px #f60, 0 0 32px #f30, 0 0 50px #c00;
    }
    100% {
      text-shadow: 0 0 4px #ff9, 0 0 8px #ff9, 0 0 10px #f60, 0 0 20px #f60, 0 0 30px #f30, 0 0 40px #c00;
    }
  }
  
  .fire-text {
    color: red; /* Color de texto rojo */
    animation: fireAnimation 1.5s infinite alternate; /* Animación de fuego */
    font-weight: bold;
  }
  </style>
  