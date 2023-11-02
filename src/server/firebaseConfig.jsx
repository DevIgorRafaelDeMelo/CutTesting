import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 

export const firebaseConfig = {
        apiKey: "AIzaSyChyjCQjXtbyZEml1W3XR5PcDkgjOzEZn0",
        authDomain: "digital-cut.firebaseapp.com",
        databaseURL: "https://digital-cut-default-rtdb.firebaseio.com",
        projectId: "digital-cut",
        storageBucket: "digital-cut.appspot.com",
        messagingSenderId: "619483518403",
        appId: "1:619483518403:web:d956aed0e49d1d923a9976",
        measurementId: "G-YK99DS3XVM"
      };

firebase.initializeApp(firebaseConfig);

/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
UTILIZAR PARA IMPORTAR O BANCO PRA DENTRO DA PÁGINA */



