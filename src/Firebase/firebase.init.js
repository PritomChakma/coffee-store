// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrFCQKQNmFJuQJ4HGnXkyKa2K6xPTuiw4",
  authDomain: "coffee-store-48e62.firebaseapp.com",
  projectId: "coffee-store-48e62",
  storageBucket: "coffee-store-48e62.firebasestorage.app",
  messagingSenderId: "854587646572",
  appId: "1:854587646572:web:797b447852247a2504ee49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);