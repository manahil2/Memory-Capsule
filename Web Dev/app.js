
// Import Firebase modules 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js"; 
import { getAuth, createUserWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js"; 
 
// Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyAi4bWWwLYl4N-ukHnaQwM_CoIbZ0GRJvc",
    authDomain: "signup-login-form-6ec76.firebaseapp.com",
    projectId: "signup-login-form-6ec76",
    storageBucket: "signup-login-form-6ec76.firebasestorage.app",
    messagingSenderId: "754484815409",
    appId: "1:754484815409:web:3fcac5421325482abed710",
    measurementId: "G-CYYTVC4KTE"
  };
 
// Initialize Firebase 
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app); // Initialize Firebase Authentication 
 
// Signup 
document.getElementById('signup-form').addEventListener('submit', (e) => { 
  e.preventDefault(); 
  const email = document.getElementById('signup-email').value; 
  const password = document.getElementById('signup-password').value; 
 
  // Create user with email and password 
  createUserWithEmailAndPassword(auth, email, password) 
    .then((userCredential) => { 
      console.log("User signed up:", userCredential.user); 
      alert("Signup successful!"); 
    }) 
    .catch((error) => { 
      console.error("Error:", error.message); 
      alert("Error: " + error.message); 
    }); 
}); 
