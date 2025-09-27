//Denger: Donot share this file public
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC4UJeuctnWBHsByVj5GEjsNwYMnheHdc",
  authDomain: "email-password-auth-2a44e.firebaseapp.com",
  projectId: "email-password-auth-2a44e",
  storageBucket: "email-password-auth-2a44e.firebasestorage.app",
  messagingSenderId: "703643212897",
  appId: "1:703643212897:web:a48e0f58fd776d45a95e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);