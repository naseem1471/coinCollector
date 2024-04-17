// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  onDisconnect,
  onValue,
  onChildAdded,
  onChildRemoved,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKYnzW69RifzLnQFyRpTdmmXHtlLiBddo",
    authDomain: "gamedev-6171d.firebaseapp.com",
    databaseURL: "https://gamedev-6171d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gamedev-6171d",
    storageBucket: "gamedev-6171d.appspot.com",
    messagingSenderId: "169013511740",
    appId: "1:169013511740:web:48d433fd048f8a0401a539",
    measurementId: "G-0HVYTXM718"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  auth,
  signInAnonymously,
  onAuthStateChanged,
  db,
  ref,
  set,
  onDisconnect,
  onValue,
  onChildAdded,
  onChildRemoved,
  update,
  remove,
};