// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAIzz0DhWBn0OELwcmAbzMjhhcPbTGw8Zk",
    authDomain: "clone-3f368.firebaseapp.com",
    projectId: "clone-3f368",
    storageBucket: "clone-3f368.appspot.com",
    messagingSenderId: "604015017746",
    appId: "1:604015017746:web:377f2830dd946fba773dcb",
    measurementId: "G-MJPNNQNB9T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};