<template>
  <div class="min-h-screen flex justify-center items-center bg-gradient-to-b from-yellow-300 to-red-400 py-10">
    <div>
      <!-- Título -->
      <div class="text-center font-semibold">
        <h1 class="text-5xl font-pokemon tracking-wide">
          <span class="fire-text">Personajes </span>
          <span class="text-white">de Pokémon</span>
        </h1>
        <p class="pt-6 text-xl text-white font-normal w-full px-8 md:w-full">
          Conoce a los personajes más icónicos de la serie y los juegos de Pokémon.
        </p>
      </div>

      <!-- Primer grupo de personajes -->
      <div class="pt-24 flex flex-row space-x-10 justify-center">
        <!-- Ash Ketchum -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl border-4 border-red-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-yellow-500">
            <img 
              src="https://media.tenor.com/7-tMnBp6KJoAAAAM/pokemon-pocket-monsters.gif" 
              alt="Ash Ketchum" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Ash Ketchum</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            <span>El protagonista de la serie, Ash es un entrenador de Pokémon que sueña con ser un Maestro Pokémon.</span>
          </p>
        </div>

        <!-- Misty -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl border-4 border-blue-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-yellow-500">
            <img 
              src="https://media.tenor.com/1g5folcS9r0AAAAM/misty-pokemon.gif" 
              alt="Misty" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Misty</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            <span>Misty es la líder del Gimnasio Cerulean y compañera de Ash en sus primeras aventuras.</span>
          </p>
        </div>

        <!-- Brock -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl border-4 border-green-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-yellow-500">
            <img 
              src="https://media.tenor.com/Yno_nVU6PxwAAAAM/brock-i-choose-you.gif" 
              alt="Brock" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Brock</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            <span>Brock es el líder del Gimnasio Pewter y un gran amigo de Ash. Sueña con ser un Criador Pokémon.</span>
          </p>
        </div>
      </div>

      <!-- Segundo grupo de personajes -->
      <div class="pt-10 flex flex-row space-x-10 justify-center">
        <!-- Red -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl border-4 border-purple-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-yellow-500">
            <img 
              src="https://i.gifer.com/Xzp6.gif" 
              alt="Red" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Red</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            <span>Es el protagonista de los videojuegos Pokémon Rojo y Azul y sus remakes Pokémon Rojo Fuego y Verde Hoja.</span>
          </p>
        </div>

        <!-- Blue -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl border-4 border-black shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-yellow-500">
            <img 
              src="https://64.media.tumblr.com/89326f8a8c716e47568f278a6b21a1be/tumblr_odywgwGRNx1s87y5ho1_540.gif" 
              alt="Blue" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Blue</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            <span>Es el nieto del Profesor Oak y líder del gimnasio de Ciudad Verde.</span>
          </p>
        </div>

        <!-- Lance -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl border-4 border-pink-500 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-yellow-500">
            <img 
              src="https://pa1.aminoapps.com/6044/f1f087dac7ed84dab4880366f19ad582c4401101_00.gif" 
              alt="Lance" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Campeón Lance</h1>
          <p class="pt-2 text-gray-700 tracking-wide">
            <span>Es un maestro Pokémon de tipo dragón. Fue el cuarto y último miembro del Alto Mando de Kanto, y luego campeón de la Liga Pokémon de Johto.</span>
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
/* Fuente estilo Pokémon */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pokemon {
  font-family: 'Press Start 2P', cursive;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Animación de fuego para el título */
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
