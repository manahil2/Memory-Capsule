// // Simulated user database (stored in localStorage)
// let users = JSON.parse(localStorage.getItem('users')) || [];

// // Sign Up Logic
// document.getElementById('signup-form')?.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirm-password').value;

//   // Basic validation
//   if (password !== confirmPassword) {
//     alert('Passwords do not match!');
//     return;
//   }

//   // Check if user already exists
//   const userExists = users.some(user => user.email === email);
//   if (userExists) {
//     alert('User already exists!');
//     return;
//   }

//   // Add user to the database
//   users.push({ name, email, password });
//   localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage
//   alert('Sign up successful! Redirecting to login...');
//   window.location.href = 'index.html';
// });

// // Login Logic
// document.getElementById('login-form')?.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Retrieve users from localStorage
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   // Find the user
//   const user = users.find(user => user.email === email && user.password === password);
//   if (user) {
//     alert('Login successful! Redirecting to dashboard...');
//     window.location.href = 'dashboard.html';
//   } else {
//     alert('Invalid credentials. Please try again.');
//   }
// });
// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAi4bWWwLYl4N-ukHnaQwM_CoIbZ0GRJvc",
  authDomain: "signup-login-form-6ec76.firebaseapp.com",
  projectId: "signup-login-form-6ec76",
  storageBucket: "signup-login-form-6ec76.appspot.com",
  messagingSenderId: "754484815409",
  appId: "1:754484815409:web:3fcac5421325482abed710",
  measurementId: "G-CYYTVC4KTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup logic
document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert('Signup successful!');
    window.location.href = 'index.html';
  } catch (error) {
    alert("Error: " + error.message);
  }
});

// Login logic
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
});
