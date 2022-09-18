let firebaseConfig = {
    apiKey: "AIzaSyCeMICwTaNIE0NF6tHzRU5LiUyNCWo9Ki4",
    authDomain: "blogging-website-df10e.firebaseapp.com",
    projectId: "blogging-website-df10e",
    storageBucket: "blogging-website-df10e.appspot.com",
    messagingSenderId: "757736388087",
    appId: "1:757736388087:web:76ba19f2a5d192f107aaf2"
};


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();