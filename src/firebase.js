import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBTConSNxpXWCrJgw0KX0OxxHIcrCOAacA",
    authDomain: "chatapp-d1f5e.firebaseapp.com",
    projectId: "chatapp-d1f5e",
    storageBucket: "chatapp-d1f5e.appspot.com",
    messagingSenderId: "1051706372046",
    appId: "1:1051706372046:web:b647f9b14e522568a4459f"
  }).auth();