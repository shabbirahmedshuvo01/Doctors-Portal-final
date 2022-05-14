// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALFZ2UoKt1PJN7d67W6iFZqJK5LMlX7Uk",
    authDomain: "doctors-portal-site-6dcd6.firebaseapp.com",
    projectId: "doctors-portal-site-6dcd6",
    storageBucket: "doctors-portal-site-6dcd6.appspot.com",
    messagingSenderId: "152138709918",
    appId: "1:152138709918:web:a8bd3bdf96959578c0748f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;