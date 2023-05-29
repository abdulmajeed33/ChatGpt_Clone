import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzPQgNjwRaSGT97XdW1GNKYKiBor7g6TM",
  authDomain: "chat-gpt-clone-cc278.firebaseapp.com",
  projectId: "chat-gpt-clone-cc278",
  storageBucket: "chat-gpt-clone-cc278.appspot.com",
  messagingSenderId: "70625527996",
  appId: "1:70625527996:web:bf5dbc5b217f1c30dae8b9",
  measurementId: "G-8YQJW9S9MZ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};