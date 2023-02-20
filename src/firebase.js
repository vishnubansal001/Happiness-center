// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_FIREBASE,
  authDomain: "happiness-bc91a.firebaseapp.com",
  projectId: "happiness-bc91a",
  storageBucket: "happiness-bc91a.appspot.com",
  messagingSenderId: "410090642783",
  appId: "1:410090642783:web:082d613d1a8cd9febaeaea"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()