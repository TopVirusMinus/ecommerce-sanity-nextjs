// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd34V-b7xv5o0w4oIic5p2tI7jWlS7nbE",
  authDomain: "ecommerce-nextjs-site.firebaseapp.com",
  projectId: "ecommerce-nextjs-site",
  storageBucket: "ecommerce-nextjs-site.appspot.com",
  messagingSenderId: "1:820318296158:web:35939253f8ea4b7a247ccf",
  appId: "1:820318296158:web:35939253f8ea4b7a247ccf",
};

// Initialize Firebase
// let app = {};
// getApps().length === 0
//   ? (app = initializeApp(firebaseConfig))
//   : (app = getApp());

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
