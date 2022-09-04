import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// created a createContext because it will be wrapped inside all the components
const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // created our hooks
  // useState hooks of empty objects

  // creating function of signUp

  const signUp = (user, email) => {
    // it will takes three arguments first is auth and last two are user,email
    return createUserWithEmailAndPassword(auth, user, email);
  };

  const signIn = (user, email) => {
    return signInWithEmailAndPassword(auth, user, email);
  };

  // logout section

  const logOut = () => {
    return signOut;
  };

  // useEffect to run once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    //   hooks cleanup
    return () => {
      unsubscribe();
    };
  });

  // value stored in objects
  const value = { user, setUser, signUp, signIn, logOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
