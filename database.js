// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGDZ5EFY58tXaGCVyFY-Of23pLZRwutlA",
  authDomain: "refrence-helper.firebaseapp.com",
  databaseURL: "https://refrence-helper-default-rtdb.firebaseio.com",
  projectId: "refrence-helper",
  storageBucket: "refrence-helper.appspot.com",
  messagingSenderId: "84252627285",
  appId: "1:84252627285:web:33aa83a0507f98a1e29fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyCGDZ5EFY58tXaGCVyFY-Of23pLZRwutlA',
    authDomain: "refrence-helper.firebaseapp.com",
    projectId: "refrence-helper",
  });
  
  var db = firebase.firestore();
*/
  

chrome.runtime.onInstalled.addListener(() => {
    console.log("this is from the data.js file")
    db.collection("Projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
  });