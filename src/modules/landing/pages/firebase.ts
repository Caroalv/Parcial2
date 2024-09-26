// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6JVvXi_aX0lnpFmaUP1GSNaJiF663oDQ",
  authDomain: "parcial2-e0b70.firebaseapp.com",
  databaseURL: "https://parcial2-e0b70-default-rtdb.firebaseio.com",
  projectId: "parcial2-e0b70",
  storageBucket: "parcial2-e0b70.appspot.com",
  messagingSenderId: "964156481514",
  appId: "1:964156481514:web:49e85c637281777fd31c93",
  measurementId: "G-H60X8FD6S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtén la instancia de autenticación
const auth = getAuth(app);

// Exporta la instancia de autenticación
export { auth };