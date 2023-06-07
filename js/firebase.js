// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYdnPOTC7G0KeuemJ3PiIFyULXwFUR9xA",
    authDomain: "quiz-bolivar.firebaseapp.com",
    projectId: "quiz-bolivar",
    storageBucket: "quiz-bolivar.appspot.com",
    messagingSenderId: "1044902982305",
    appId: "1:1044902982305:web:9f6d126c7e31c5b871b6e0",
    measurementId: "G-DZKWQ76Y64"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app)

export const saveTask = (name, score) =>
    addDoc(collection(db, 'scores'), { name, score })