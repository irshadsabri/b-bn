// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPhX87z6Ep4Vr36l30pP_BvS5wik4BmBc",
  authDomain: "ayan-ad47d.firebaseapp.com",
  projectId: "ayan-ad47d",
  storageBucket: "ayan-ad47d.appspot.com",
  messagingSenderId: "76554268878",
  appId: "1:76554268878:web:714e77119f06b9c87ca09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
