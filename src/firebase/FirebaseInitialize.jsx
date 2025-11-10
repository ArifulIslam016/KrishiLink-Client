// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2zxl_DTsQk3wfREGJxuDUxssRqQls-pQ",
  authDomain: "krishi-link-3accb.firebaseapp.com",
  projectId: "krishi-link-3accb",
  storageBucket: "krishi-link-3accb.firebasestorage.app",
  messagingSenderId: "730931924989",
  appId: "1:730931924989:web:19826f4e54c5c529cf1394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
