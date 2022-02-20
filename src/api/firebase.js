import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBM2fYq-ynmCw9sGmu8LiFbRwdKgG2Q7j4",
    authDomain: "gbjs-react-chat.firebaseapp.com",
    databaseURL: "https://gbjs-react-chat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gbjs-react-chat",
    storageBucket: "gbjs-react-chat.appspot.com",
    messagingSenderId: "716120321426",
    appId: "1:716120321426:web:d40ca1fc536aa0fbb6a54b",
    measurementId: "G-8Q1R3B7G7D"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const auth = firebase.auth();