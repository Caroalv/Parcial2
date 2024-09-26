<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-700 to-black py-10">
    <div class="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-center">
      <!-- Título principal -->
      <h1 class="text-4xl font-pokemon text-white mb-6">
        Bienvenido a nuestra página de <span class="fire-text">Pokémon</span>
      </h1>
      <!-- Subtítulo -->
      <h2 class="text-2xl text-white mb-6">
        Aquí encontrarás varias secciones dedicadas al increíble mundo de <span class="fire-text">Pokémon</span>
      </h2>
      <!-- Componente de carrusel -->
      <ImageCarousel />
    </div>
  </div>
</template>

<script>
import ImageCarousel from './Carrusel.vue';

export default {
  components: {
    ImageCarousel,
  },
};
</script>

<style scoped>
/* Fuente estilo Pokémon */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pokemon {
  font-family: 'Press Start 2P', cursive;
}

/* Animación de fuego para el texto */
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
  color: red;
  animation: fireAnimation 1.5s infinite alternate;
  font-weight: bold;
}

/* Estilos de Swiper (si es necesario) */
@import 'swiper/swiper-bundle.css';
</style>
