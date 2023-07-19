import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBU1kpLd8IZCWP7kBVYNerdInTdVwJr2lE",
  authDomain: "project-71-58c96.firebaseapp.com",
  projectId: "project-71-58c96",
  storageBucket: "project-71-58c96.appspot.com",
  messagingSenderId: "97139835200",
  appId: "1:97139835200:web:e3f8fdc95075ce364efaa5"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
