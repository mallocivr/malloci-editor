import * as firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCLN6m_UZpazTVvrX1vtFdyTEPx7wYaTyk",
    authDomain: "malloci-8f365.firebaseapp.com",
    databaseURL: "https://malloci-8f365.firebaseio.com",
    projectId: "malloci-8f365",
    storageBucket: "malloci-8f365.appspot.com",
    messagingSenderId: "126802496533",
    appId: "1:126802496533:web:614183fabd31d8510bd21c",
    measurementId: "G-BSBQC0NNQJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()
const database = firebase.firestore()

export  {
    storage, database, firebase as default
}
 