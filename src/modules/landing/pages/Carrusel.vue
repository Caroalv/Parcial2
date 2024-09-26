<template>
  <div class="my-10">
    <swiper-container
      :slides-per-view="1"
      :pagination="true"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel image" class="w-full h-auto object-contain rounded-lg" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    SwiperContainer,
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
.mySwiper {
  height: 700px; /* Aumentar la altura del carrusel */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Asegúrate de que no se desborde */
}
</style>
