// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBXFlcRQiQNXZNqyQBtX68Wg-J3TQSyME",
    authDomain: "bike-parlour.firebaseapp.com",
    projectId: "bike-parlour",
    storageBucket: "bike-parlour.appspot.com",
    messagingSenderId: "802176270896",
    appId: "1:802176270896:web:efda4bbacb74f4d77863f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;