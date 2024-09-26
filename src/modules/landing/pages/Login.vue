<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-pokemon-pattern bg-cover">
    <div class="bg-yellow-300 p-6 rounded-lg shadow-lg w-80 border-4 border-red-600">
      <div class="flex justify-center mb-4">
        <!-- Imagen de Pokébola arriba del título -->
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt="Pokebola" />
      </div>
      <h2 class="text-2xl font-bold text-center mb-4 text-red-600">
        {{ isLogin ? 'Iniciar Sesión' : 'Registrar' }}
      </h2>
      <form @submit.prevent="handleSubmit">
        <input
          type="email"
          v-model="email"
          placeholder="Correo Electrónico"
          required
          class="border border-gray-300 p-2 mb-4 w-full rounded-md focus:outline-none focus:ring focus:ring-red-500"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Contraseña"
          required
          class="border border-gray-300 p-2 mb-4 w-full rounded-md focus:outline-none focus:ring focus:ring-red-500"
        />
        <button
          type="submit"
          class="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200 w-full"
        >
          {{ isLogin ? 'Iniciar Sesión' : 'Registrar' }}
        </button>
        <p class="mt-4 text-center text-sm text-gray-800 cursor-pointer" @click="toggleMode">
          {{ isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión' }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importa el router
import { auth } from '../pages/firebase'; // Asegúrate de que esta ruta sea correcta
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const isLogin = ref(true);
const router = useRouter(); // Agrega esto para usar el router

const handleSubmit = async () => {
  try {
    if (isLogin.value) {
      // Iniciar sesión
      await signInWithEmailAndPassword(auth, email.value, password.value);
      alert('Inicio de sesión exitoso');
      router.push('/inicio'); // Redirige a la página que prefieras
    } else {
      // Registrar nuevo usuario
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      alert('Registro exitoso');
    }
  } catch (error: unknown) {
    console.error(error);

    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert('Error desconocido');
    }
  }
};

const toggleMode = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped>
/* Aplicando la clase de fondo personalizado a Pokémon */
.bg-pokemon-pattern {
  background-image: url('https://images.hdqwalls.com/wallpapers/team-valor-pokemon-go-4k-po.jpg'); /* Cambia la URL a cualquier fondo de Pokémon */
  background-size: cover;
  background-position: center;
}

/* Puedes agregar estilos personalizados aquí si lo necesitas */
</style>
