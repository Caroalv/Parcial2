<template>
  <section class="text-gray-600 body-font relative bg-gradient-to-b from-red-500 to-black min-h-screen">
    <!-- Texto de Encuéntranos Aquí -->
    <div class="text-center py-10">
      <h1 class="text-4xl font-pokemon text-white">
        Encuéntranos <span class="fire-text">aquí:</span>
      </h1>
    </div>

    <div class="container px-5 py-24 mx-auto flex justify-center">
      <!-- Mapa reducido de tamaño -->
      <div class="w-full lg:w-2/3 h-96 relative">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Pokémon%20Center%20Tokyo&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>

      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-10 w-full mt-10 md:mt-0 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Busca tus tiendas más cercanas</p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
          <textarea
            v-model="message"
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          @click="sendEmail"
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Enviar
        </button>
        <p class="text-xs text-gray-500 mt-3">The Pokemon Company.</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await axios.post('http://localhost:3000/send-email', {
          email: this.email,
          message: this.message,
        });
        console.log('Correo enviado:', response.data);
        alert('Correo enviado correctamente'); // Alerta de éxito
        this.email = ''; // Limpiar campo de correo
        this.message = ''; // Limpiar campo de mensaje
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        alert('Error al enviar el correo'); // Alerta de error
      }
    },
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
</style>
