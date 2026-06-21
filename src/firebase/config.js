// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXH8yyPWDMtxLrta5OIh9PUMC9sUMKubY",
  authDomain: "ecommerce-tt-a2de4.firebaseapp.com",
  projectId: "ecommerce-tt-a2de4",
  storageBucket: "ecommerce-tt-a2de4.firebasestorage.app",
  messagingSenderId: "502476772144",
  appId: "1:502476772144:web:882ae82fe5f4ab498aaef5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };