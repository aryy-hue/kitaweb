// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGLz9IEYPPwvyj48J7ZpjJEkriLJOhaGk",
  authDomain: "kitaweb-4730a.firebaseapp.com",
  projectId: "kitaweb-4730a",
  storageBucket: "kitaweb-4730a.appspot.com",
  messagingSenderId: "493078164371",
  appId: "1:493078164371:web:10e6650a6c52874e542e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);