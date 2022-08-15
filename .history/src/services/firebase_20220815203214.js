// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk2m4kmdZtL3sdQtrUyC7Ow1ectDEyNMI",
  authDomain: "goodgeul.firebaseapp.com",
  projectId: "goodgeul",
  storageBucket: "goodgeul.appspot.com",
  messagingSenderId: "120455903715",
  appId: "1:120455903715:web:d31e22a4efe607313988d6",
  measurementId: "G-6NXNGBT25C",
  databaseURL: "https://goodgeul-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;