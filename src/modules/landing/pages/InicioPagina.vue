<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"> <!-- Aumentar el tamaño del contenedor -->
      <h1 class="text-center text-2xl font-bold mb-4">Bienvenido a nuestra pagina de Pokemon</h1>
      <h2 class="text-center text-1xl  mb-4">Aqui encontraras varias secciones dedicadas a el mundo increible de Pokemon</h2>
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

<style>
@import 'swiper/swiper-bundle.css';
</style>


