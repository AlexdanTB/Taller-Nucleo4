// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5pwQl_8F6g5fuNqD-XOXfIzHZ3Z_lhWU",
  authDomain: "taller-nucleo4-c4378.firebaseapp.com",
  projectId: "taller-nucleo4-c4378",
  storageBucket: "taller-nucleo4-c4378.firebasestorage.app",
  messagingSenderId: "882927206040",
  appId: "1:882927206040:web:2970848fa763fbd1085aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

