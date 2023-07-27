// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqDWijmsjF7mDrlqwxHOeRQFl_tf7XVCU",
  authDomain: "rnd-sleep-data-project-test.firebaseapp.com",
  databaseURL: "https://rnd-sleep-data-project-test-default-rtdb.firebaseio.com",
  projectId: "rnd-sleep-data-project-test",
  storageBucket: "rnd-sleep-data-project-test.appspot.com",
  messagingSenderId: "494253045741",
  appId: "1:494253045741:web:9d1a1e102ece059f0719e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);