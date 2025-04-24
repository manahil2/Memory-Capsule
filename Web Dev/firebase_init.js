// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi4bWWwLYl4N-ukHnaQwM_CoIbZ0GRJvc",
  authDomain: "signup-login-form-6ec76.firebaseapp.com",
  projectId: "signup-login-form-6ec76",
  storageBucket: "signup-login-form-6ec76.firebasestorage.app",
  messagingSenderId: "754484815409",
  appId: "1:754484815409:web:3fcac5421325482abed710",
  measurementId: "G-CYYTVC4KTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

