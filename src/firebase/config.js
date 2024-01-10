// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBNWU8No5G0dqsJ5GZGD1cnrMwmw-kYGI8',
    authDomain: 'journal-app-72d51.firebaseapp.com',
    projectId: 'journal-app-72d51',
    storageBucket: 'journal-app-72d51.appspot.com',
    messagingSenderId: '333709504784',
    appId: '1:333709504784:web:9df6bed832e390d2543595'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
