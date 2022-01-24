import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvZs5upJahXnry_yxPWiUhLXzlWn-pkmE",
  authDomain: "disney-clone-12e73.firebaseapp.com",
  projectId: "disney-clone-12e73",
  storageBucket: "disney-clone-12e73.appspot.com",
  messagingSenderId: "1025838077313",
  appId: "1:1025838077313:web:c6b134237cd48dbe0f0480",
  measurementId: "G-E9BM3LMRWV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
