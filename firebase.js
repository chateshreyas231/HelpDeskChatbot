// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZh0UcjyqJ7P1PoqPh9h3Gp3KIwX5S6uM",
  authDomain: "helpdeskchatbot-e1517.firebaseapp.com",
  projectId: "helpdeskchatbot-e1517",
  storageBucket: "helpdeskchatbot-e1517.appspot.com",
  messagingSenderId: "845315842885",
  appId: "1:845315842885:web:a93bf4e78ca7145f35142c",
  measurementId: "G-WLW4DG2ZZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {app, storage}