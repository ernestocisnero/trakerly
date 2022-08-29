import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDobvtxUr4KsRViIhqerhHVt9Jzaw6c2DQ",
    authDomain: "trakerly.firebaseapp.com",
    projectId: "trakerly",
    storageBucket: "trakerly.appspot.com",
    messagingSenderId: "558010897800",
    appId: "1:558010897800:web:e17a6ad08a186c1e2cd63d"
};

export const firebaseApp = initializeApp( firebaseConfig );
export const firebaseDB = getFirestore( firebaseApp );
export const firebaseAuth = getAuth( firebaseApp );