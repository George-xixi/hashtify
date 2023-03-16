import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBs53K1zKsn2dhEs3iVBmkVAwDr3DBn2EI",
  authDomain: "react-with-firebase-b58bb.firebaseapp.com",
  projectId: "react-with-firebase-b58bb",
  storageBucket: "react-with-firebase-b58bb.appspot.com",
  messagingSenderId: "589048216119",
  appId: "1:589048216119:web:36c305d8c66f7712641db2",
  measurementId: "G-E57BMLD7FF",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
