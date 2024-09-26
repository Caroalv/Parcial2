<template>
  <div class="min-h-screen flex justify-center items-center">
    <div>
      <div class="text-center font-semibold">
        <h1 class="text-5xl">
          <span class="fire-text tracking-wide">Personajes </span>
          <span>de Pokémon</span>
        </h1>
        <p class="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
          Conoce a los personajes más icónicos de la serie y los juegos de Pokémon.
        </p>
      </div>
      <div class="pt-24 flex flex-row space-x-10">
        <!-- Ash Ketchum -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full">
            <img 
              src="https://media.tenor.com/7-tMnBp6KJoAAAAM/pokemon-pocket-monsters.gif" 
              alt="Ash Ketchum" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Ash Ketchum</h1>
          <p class="pt-2 tracking-wide">
            <span class="text-gray-600">El protagonista de la serie, Ash es un entrenador de Pokémon que sueña con ser un Maestro Pokémon.</span>
          </p>
        </div>

        <!-- Misty -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full">
            <img 
              src="https://media.tenor.com/1g5folcS9r0AAAAM/misty-pokemon.gif" 
              alt="Misty" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Misty</h1>
          <p class="pt-2 tracking-wide">
            <span class="text-gray-600">Misty es la líder del Gimnasio Cerulean y compañera de Ash en sus primeras aventuras.</span>
          </p>
        </div>

        <!-- Brock -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full">
            <img 
              src="https://media.tenor.com/Yno_nVU6PxwAAAAM/brock-i-choose-you.gif" 
              alt="Brock" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Brock</h1>
          <p class="pt-2 tracking-wide">
            <span class="text-gray-600">Brock es el líder del Gimnasio Pewter y un gran amigo de Ash. Sueña con ser un Criador Pokémon.</span>
          </p>
        </div>
      </div>

      <div class="pt-10 flex flex-row space-x-10">
        <!-- Red -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full">
            <img 
              src="https://i.gifer.com/Xzp6.gif" 
              alt="Red" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Red</h1>
          <p class="pt-2 tracking-wide">
            <span class="text-gray-600">Es el protagonista de los videojuegos Pokémon Rojo y Azul y sus remakes Pokémon Rojo Fuego y Verde Hoja.</span>
          </p>
        </div>

        <!-- blue -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full">
            <img 
              src="https://64.media.tumblr.com/89326f8a8c716e47568f278a6b21a1be/tumblr_odywgwGRNx1s87y5ho1_540.gif" 
              alt="Personaje 1" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Blue</h1>
          <p class="pt-2 tracking-wide">
            <span class="text-gray-600">Es el nieto del Profesor Oak y líder del gimnasio de Ciudad Verde.</span>
          </p>
        </div>

        <!-- lance -->
        <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
          <div class="w-48 h-48 mx-auto overflow-hidden rounded-full">
            <img 
              src="https://pa1.aminoapps.com/6044/f1f087dac7ed84dab4880366f19ad582c4401101_00.gif" 
              alt="lance" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-black font-semibold text-2xl mt-4">Campeon Lance</h1>
          <p class="pt-2 tracking-wide">
            <span class="text-gray-600">es un maestro Pokémon de tipo dragón. Fue el cuarto y último miembro del Alto Mando de Kanto, y tres años después se convirtió en el campeón de la Liga Pokémon de Johto.</span>
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
/* Mantener la imagen centrada y con las proporciones correctas */
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
  color: red; /* Color de texto rojo */
  animation: fireAnimation 1.5s infinite alternate; /* Animación de fuego */
  font-weight: bold;
}
</style>
