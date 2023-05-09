//firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apikey,
    authDomain: process.env.REACT_APP_authdomain,
    databaseURL: process.env.REACT_APP_databaseurl,
    projectId: process.env.REACT_APP_projectid,
    storageBucket: process.env.REACT_APP_storagebucket,
    messagingSenderId: process.env.REACT_APP_messagesenderid,
    appId: process.env.REACT_APP_apiid
};

console.log(process.env.REACT_APP_apikey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);