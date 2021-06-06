import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB-lfCOVTDIUDa_SsGPQvszH4XKPykOTY0",
  authDomain: "chat-7bdf2.firebaseapp.com",
  projectId: "chat-7bdf2",
  storageBucket: "chat-7bdf2.appspot.com",
  messagingSenderId: "6204686361",
  appId: "1:6204686361:web:9d5a0cb65b03774d8baa88",
  measurementId: "G-PCL36HE66H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
