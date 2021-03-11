import * as firebase from "firebase";
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpfSyHsVNug3HZHwPZkdMRjWfo_Nc15JI",
    authDomain: "phase-auth.firebaseapp.com",
    databaseURL: "https://phase-auth.firebaseio.com",
    projectId: "phase-auth",
    storageBucket: "phase-auth.appspot.com",
    messagingSenderId: "501380340215",
    appId: "1:501380340215:web:cf3c925a63f471303676f2",
    measurementId: "G-5DQBH5GX5T"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;