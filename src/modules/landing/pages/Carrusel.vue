<template>
  <div class="relative w-full h-80"> <!-- Cambia la altura aquí si es necesario -->
    <swiper :slides-per-view="1" :pagination="{ clickable: true }" class="h-full">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Pokémon" class="w-full h-full object-cover" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        'https://media4.giphy.com/media/qafw8JQ6C8sMg/giphy.gif?cid=6c09b952fye0rxftah4pj73mh2ls3o6ojc1hn3aciln0bvdc&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://i.pinimg.com/originals/55/29/a1/5529a1d8e655e631f64b581d61f3409a.gif',
        'https://media2.giphy.com/media/WaRfz6icxRM6vnA37N/source.gif',
      ],
    };
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
.w-full {
  width: 100%;
}
.h-80 {
  height: 20rem; /* Ajustar la altura aquí si es necesario */
}
.object-cover {
  object-fit: cover; /* Asegura que la imagen llene el contenedor */
}
.swiper {
  height: 100%; /* Asegurando que el swiper use toda la altura del contenedor */
}
</style>
