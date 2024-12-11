// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBfRUwpUyq8tvBiHnR6UaQXuvA5qQTU-I",
  authDomain: "logindata-9c7e4.firebaseapp.com",
  projectId: "logindata-9c7e4",
  storageBucket: "logindata-9c7e4.firebasestorage.app",
  messagingSenderId: "986383683696",
  appId: "1:986383683696:web:93dae59ea253c3d36fa4b5",
  measurementId: "G-PZYF2VPZ1B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);