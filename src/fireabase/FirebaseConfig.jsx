// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6CysXN4Xg9AQuqG-cv_Za1NtIKXEJawc",
  authDomain: "edu-test8.firebaseapp.com",
  projectId: "edu-test8",
  storageBucket: "edu-test8.appspot.com",
  messagingSenderId: "627432903296",
  appId: "1:627432903296:web:0e4ff14212b3488bab8c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}


