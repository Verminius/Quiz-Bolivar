// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA835H3bxSFLdR7-XvkP2hADIwCzaBL70I",
  authDomain: "quiz-bolivar-db.firebaseapp.com",
  projectId: "quiz-bolivar-db",
  storageBucket: "quiz-bolivar-db.appspot.com",
  messagingSenderId: "709940952025",
  appId: "1:709940952025:web:497af69a64b6a9452d37c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const saveTask = (name, score) =>
  addDoc(collection(db, "scores"), { name, score });

export const getTask = () => getDocs(collection(db, "scores"));

export const onGetTask = (callback) =>
  onSnapshot(collection(db, "scores"), callback);
