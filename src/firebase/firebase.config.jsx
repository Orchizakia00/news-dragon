// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsMqm67zbSgLudcHxA3ikPo2MRl66MDtA",
  authDomain: "news-dragon-f5725.firebaseapp.com",
  projectId: "news-dragon-f5725",
  storageBucket: "news-dragon-f5725.appspot.com",
  messagingSenderId: "480595203107",
  appId: "1:480595203107:web:538a87488fe75b112c8d96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;