

// Modular Firebase v.9 Initialization.


import {initializeApp} from "firebase/app";

//import firebase from 'firebase/compat/app'
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = ({
    apiKey: "AIzaSyAfhebuVt04MHjHVAjgER2GdaF1hgJxb1I",
    authDomain: "nativelandnativesky.firebaseapp.com",
    projectId: "nativelandnativesky",
    storageBucket: "nativelandnativesky.appspot.com",
    messagingSenderId: "1019362837009",
    appId: "1:1019362837009:web:8ff571560388ebe79c27b0",
    measurementId: "G-KNT1Z9R21T"
});

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth(app);
//export default firebase
export  {firestore , auth, app, getAuth};