import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBEW_suO5lVYWpRVPqE7bRuNh5FBjZBerE",
    authDomain: "react-example-1-35bb8.firebaseapp.com",
    databaseURL: "https://react-example-1-35bb8.firebaseio.com",
    projectId: "react-example-1-35bb8",
    storageBucket: "react-example-1-35bb8.appspot.com",
    messagingSenderId: "214792730665",
    appId: "1:214792730665:web:6f94d1b3e21b91d1284438",
    measurementId: "G-VZJJKXRN5K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;