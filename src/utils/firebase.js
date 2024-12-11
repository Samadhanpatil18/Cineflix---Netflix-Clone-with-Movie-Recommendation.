// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7-wnptFdWTx59UyWKiPWFBZTIugWAi2U",
    authDomain: "netflixgpt192.firebaseapp.com",
    projectId: "netflixgpt192",
    storageBucket: "netflixgpt192.appspot.com",
    messagingSenderId: "619015368551",
    appId: "1:619015368551:web:02abe7c8f98469c8fcc9c2",
    measurementId: "G-K3RPLK29K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
