import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDXijlt9KZntvec4HiR5jT69hY3TF8mD7s",
    authDomain: "grace-community-fb804.firebaseapp.com",
    databaseURL: "https://grace-community-fb804.firebaseio.com",
    projectId: "grace-community-fb804",
    storageBucket: "grace-community-fb804.appspot.com",
    messagingSenderId: "618559230590",
    appId: "1:618559230590:web:7bef11e814b2536a51be2f",
    measurementId: "G-KJ28W9VY9L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;