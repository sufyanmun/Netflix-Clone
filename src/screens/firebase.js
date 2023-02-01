import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIebuctA5dottyGg1-nxDdyT1FuQTtsL0",
  authDomain: "netflix-clone-fd6ed.firebaseapp.com",
  projectId: "netflix-clone-fd6ed",
  storageBucket: "netflix-clone-fd6ed.appspot.com",
  messagingSenderId: "603712130385",
  appId: "1:603712130385:web:708c7079da3017c6b49770",
  measurementId: "G-7603SKYNCS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
