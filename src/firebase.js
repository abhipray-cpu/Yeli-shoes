import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAYgUuiRmEI20nBYHUZRFdydmJrZUnG5-U",
    authDomain: "shoe-store-vue.firebaseapp.com",
    databaseURL: "https://shoe-store-vue-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "shoe-store-vue",
    storageBucket: "shoe-store-vue.appspot.com",
    messagingSenderId: "771190985404",
    appId: "1:771190985404:web:13e957aa11b06c59ab76b9",
    measurementId: "G-LFS1TCRL7S"
}

const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();





/*
     apiKey: "AIzaSyAYgUuiRmEI20nBYHUZRFdydmJrZUnG5-U",
        authDomain: "shoe-store-vue.firebaseapp.com",
        databaseURL: "https://shoe-store-vue-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "shoe-store-vue",
        storageBucket: "shoe-store-vue.appspot.com",
        messagingSenderId: "771190985404",
        appId: "1:771190985404:web:13e957aa11b06c59ab76b9",
        measurementId: "G-LFS1TCRL7S"
    
    */