
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBpv9qlr-0KOtVrzc2TJb96f5q2H4mZG84",
    authDomain: "twitter-b7ada.firebaseapp.com",
    projectId: "twitter-b7ada",
    storageBucket: "twitter-b7ada.appspot.com",
    messagingSenderId: "625739829781",
    appId: "1:625739829781:web:9ef77544e7b6063efcf41c",
    measurementId: "G-XDTN5QCK7M",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;