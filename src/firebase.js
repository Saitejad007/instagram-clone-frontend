import {initializeApp} from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/database";
import "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBauS_-9Z4I7uKDfhABY7eZC1j2KKXNgqM",
    authDomain: "instagram-clone-41.firebaseapp.com",
    databaseURL: "https://instagram-clone-41-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-41",
    storageBucket: "instagram-clone-41.appspot.com",
    messagingSenderId: "1071443257978",
    appId: "1:1071443257978:web:4d8d028b1166edde0ce9c3",
    measurementId: "G-YDNL4PZFHL"
})

//  const db = firebaseApp.firestore()
const db = getFirestore(firebaseApp);

//  const auth = auth()
//  const storage = firebase.storage()

export {db};