// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "healthe-mcd.firebaseapp.com",
  projectId: "healthe-mcd",
  storageBucket: "healthe-mcd.appspot.com",
  messagingSenderId: "172463346262",
  appId: "1:172463346262:web:ab2fe74542c0f583e6a1f7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
