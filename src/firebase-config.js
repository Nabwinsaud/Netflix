import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { firestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "netflix-1098e.firebaseapp.com",
  projectId: "netflix-1098e",
  storageBucket: "netflix-1098e.appspot.com",
  messagingSenderId: "935221386217",
  appId: "1:935221386217:web:4d704cd563b04bd8de8978",
  measurementId: "G-CD5J9L106R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = firestore(app);
// when we require firestore, it will automatically initialize the app
