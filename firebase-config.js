import { initializeApp } from "firebase/app";
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { firebase } from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBu64bhn4GUUIlEil-j5TV39oMi3dCD4m0",
    authDomain: "react-native-chat-cecf4.firebaseapp.com",
    projectId: "react-native-chat-cecf4",
    storageBucket: "react-native-chat-cecf4.appspot.com",
    messagingSenderId: "724442589550",
    appId: "1:724442589550:web:0dbeba1582064aa58ff97f"
}

const app = firebase.default.initializeApp(firebaseConfig);
const db = app.firestore();

export default {
    gAuth: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}
  