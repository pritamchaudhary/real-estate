// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ccd60.firebaseapp.com",
  projectId: "real-estate-ccd60",
  storageBucket: "real-estate-ccd60.appspot.com",
  messagingSenderId: "808990322337",
  appId: "1:808990322337:web:4feaf33a57dbe11598cae0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);