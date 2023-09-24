// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
// import firestore from "firebase/app";
// import database from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEqhDbblXoBoRKZDOmklsrD9EQmD3_dlY",
  authDomain: "jb-maderas.firebaseapp.com",
  projectId: "jb-maderas",
  storageBucket: "jb-maderas.appspot.com",
  messagingSenderId: "124182270644",
  appId: "1:124182270644:web:96a4332cf90f7ffcb5bde1",
  measurementId: "G-3Y7C4YJWLY",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize app
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

export const getFirestore = () => {
  return firebase.firestore(app);
};
