// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMuaBsWZd3nP9d2USa8azBxSTJC9OXzms",
    authDomain: "warehouse-management-de342.firebaseapp.com",
    projectId: "warehouse-management-de342",
    storageBucket: "warehouse-management-de342.appspot.com",
    messagingSenderId: "224591341519",
    appId: "1:224591341519:web:fff962839d3e7f744cd4ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;