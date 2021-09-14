import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqhQMl_01n_NgQoElMBMuC-yTXj1Nlzvw",
    authDomain: "ecommerce-81d2a.firebaseapp.com",
    databaseURL: "https://ecommerce-81d2a-default-rtdb.firebaseio.com",
    projectId: "ecommerce-81d2a",
    storageBucket: "ecommerce-81d2a.appspot.com",
    messagingSenderId: "544700483234",
    appId: "1:544700483234:web:f2814f8cf4ce680242f9fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
