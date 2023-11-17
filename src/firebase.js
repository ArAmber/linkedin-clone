import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEPSJqgar6XzCcQBs7VOfj_-_5nKFlN5I",
  authDomain: "linkedin-clone-76220.firebaseapp.com",
  projectId: "linkedin-clone-76220",
  storageBucket: "linkedin-clone-76220.appspot.com",
  messagingSenderId: "361454178975",
  appId: "1:361454178975:web:44ff791526491a1f5208aa",
  measurementId: "G-ZHQR093Z0C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}