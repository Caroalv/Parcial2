<template>
  <div class="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-400 to-indigo-600 py-10">
    <div>
      <!-- Título -->
      <div class="text-center font-semibold">
        <h1 class="text-5xl font-pokemon tracking-wide text-yellow-500">
          <span class="fire-text">Regiones </span>
          <span class="text-white">de Pokémon</span>
        </h1>
        <p class="pt-6 text-xl text-white font-normal w-full px-8 md:w-full">
          Explora las diferentes regiones del mundo Pokémon.
        </p>
      </div>

      <!-- Primer grupo de regiones -->
      <div class="pt-16 flex flex-wrap justify-center space-x-8 space-y-10">
        <!-- Kanto -->
        <div class="w-72 p-6 bg-white text-center rounded-3xl border-4 border-red-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-full h-52 mx-auto overflow-hidden rounded-lg border-4 border-yellow-500">
            <img 
              src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5b/latest/20180712231931/Mapa_de_Kanto_LGPE.png/800px-Mapa_de_Kanto_LGPE.png" 
              alt="Kanto" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Kanto</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            La región original de Pokémon, hogar de los primeros 151 Pokémon, incluyendo a Pikachu, Bulbasaur y Charizard.
          </p>
        </div>

        <!-- Johto -->
        <div class="w-72 p-6 bg-white text-center rounded-3xl border-4 border-blue-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-full h-52 mx-auto overflow-hidden rounded-lg border-4 border-yellow-500">
            <img 
              src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fe/latest/20180203062443/Johto_HGSS.png/1200px-Johto_HGSS.png" 
              alt="Johto" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Johto</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            Región donde se introdujeron 100 nuevos Pokémon, como Totodile y Chikorita.
          </p>
        </div>

        <!-- Hoenn -->
        <div class="w-72 p-6 bg-white text-center rounded-3xl border-4 border-green-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-full h-52 mx-auto overflow-hidden rounded-lg border-4 border-yellow-500">
            <img 
              src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/af/latest/20150228012617/Mapa_de_Hoenn_ROZA.png/1200px-Mapa_de_Hoenn_ROZA.png" 
              alt="Hoenn" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Hoenn</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            Con un ambiente tropical y acuático, esta región es hogar de Pokémon como Mudkip y Treecko.
          </p>
        </div>
      </div>

      <!-- Segundo grupo de regiones -->
      <div class="pt-16 flex flex-wrap justify-center space-x-8 space-y-10">
        <!-- Sinnoh -->
        <div class="w-72 p-6 bg-white text-center rounded-3xl border-4 border-purple-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-full h-52 mx-auto overflow-hidden rounded-lg border-4 border-yellow-500">
            <img 
              src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d2/latest/20210825190744/Sinnoh_DBPR.png/1200px-Sinnoh_DBPR.png" 
              alt="Sinnoh" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Sinnoh</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            Región famosa por sus leyendas y su conexión con el tiempo y el espacio, hogar de Piplup y Dialga.
          </p>
        </div>

        <!-- Unova -->
        <div class="w-72 p-6 bg-white text-center rounded-3xl border-4 border-black shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-full h-52 mx-auto overflow-hidden rounded-lg border-4 border-yellow-500">
            <img 
              src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/29/latest/20160818015101/Teselia_N2B2.png/1200px-Teselia_N2B2.png" 
              alt="Unova" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Unova</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            Inspirada en Nueva York, Unova presenta 156 nuevos Pokémon, incluyendo Snivy y Zekrom.
          </p>
        </div>

        <!-- Kalos -->
        <div class="w-72 p-6 bg-white text-center rounded-3xl border-4 border-pink-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-full h-52 mx-auto overflow-hidden rounded-lg border-4 border-yellow-500">
            <img 
              src="https://easycdn.es/css/adn/i/p/mapa_kalos.jpg" 
              alt="Kalos" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Kalos</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            Inspirada en Francia, Kalos es conocida por su elegancia y Pokémon como Fennekin y Greninja.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Lógica adicional si es necesario
</script>

<style scoped>
/* Añadir fuente estilo Pokémon */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pokemon {
  font-family: 'Press Start 2P', cursive;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  color: red;
  animation: fireAnimation 1.5s infinite alternate;
  font-weight: bold;
}
</style>
