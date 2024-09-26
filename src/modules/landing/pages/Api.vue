<template>
  <section class="min-h-screen flex justify-center items-center bg-gradient-to-b from-red-500 to-white">
    <div class="p-4 text-center">
      <h2 class="text-5xl mb-6 fire-text font-pokemon">Pokédex:</h2> <!-- Texto "Pokédex" en la parte superior -->

      <h1 class="text-2xl font-bold mb-4 font-pokemon">Buscar Pokémon por Número</h1>

      <!-- Input para ingresar el número del Pokémon -->
      <input
        v-model="pokemonId"
        type="number"
        placeholder="Ingresa el número del Pokémon"
        class="border border-gray-300 p-2 mb-4"
      />

      <!-- Botón para buscar el Pokémon -->
      <button
        @click="buscarPokemon"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Buscar Pokémon
      </button>

      <!-- Mostrar los datos del Pokémon si existen -->
      <div v-if="pokemon" class="mt-4">
        <h2 class="text-xl font-bold">{{ pokemon.name }}</h2>
        <img :src="pokemon.image" :alt="`Imagen de ${pokemon.name}`" class="pokemon-image" />
      </div>

      <!-- Mostrar mensaje de error si ocurre algún problema -->
      <div v-if="error" class="text-red-500 mt-4">
        {{ error }}
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemonId: '', // Aquí se almacena el número que el usuario ingresa
      pokemon: null, // Aquí almacenaremos los datos del Pokémon
      error: null, // Para manejar errores
    };
  },
  methods: {
    async buscarPokemon() {
      // Reseteamos los datos previos
      this.pokemon = null;
      this.error = null;

      if (!this.pokemonId) {
        this.error = "Por favor, ingresa un número válido de Pokémon.";
        return;
      }

      try {
        // Hacemos la solicitud a la API con el número de Pokémon
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`);
        
        // Guardamos el nombre e imagen del Pokémon
        this.pokemon = {
          name: response.data.name,
          image: response.data.sprites.front_default,
        };
      } catch (error) {
        this.error = "No se pudo encontrar el Pokémon. Por favor, intenta con otro número.";
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pokemon {
  font-family: 'Press Start 2P', cursive; /* Aplicando la fuente estilo Pokémon */
}

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

/* Estilo para centrar la imagen y hacerla más grande */
.pokemon-image {
  display: block;
  margin: 20px auto; /* Centramos la imagen horizontalmente */
  max-width: 300px; /* Hacemos la imagen más grande */
  width: 100%; /* Ajusta al 100% del contenedor hasta el máximo definido */
  height: auto; /* Mantiene la proporción de la imagen */
}

.text-center {
  text-align: center; /* Aseguramos que todo el contenido esté centrado */
}
</style>
