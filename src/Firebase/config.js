import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD-T9GAn7kbKEnZb2k-meLLuBQ6RVepsQs",
    authDomain: "fashi-ecommerce.firebaseapp.com",
    databaseURL: "https://fashi-ecommerce.firebaseio.com",
    projectId: "fashi-ecommerce",
    storageBucket: "fashi-ecommerce.appspot.com",
    messagingSenderId: "1014860485749",
    appId: "1:1014860485749:web:7456b2a26ff20ecacbd43c",
    measurementId: "G-S0S6ZFG7NN"
};
firebase.initializeApp(firebaseConfig);
const database =firebase.database();
export {database};