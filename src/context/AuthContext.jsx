// import React, { useState, useEffect, createContext, useContext } from "react";
// import { auth } from "../firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});
//   const signUp = (user, email) => {
//     return createUserWithEmailAndPassword(auth, user, email);
//     // createUserWithEmailAndPassword takes three argument one is default auth 2 are user and emailaddress
//   };

//   // sign in

//   const signIn = (user, email) => {
//     return signInWithEmailAndPassword(auth, user, email);
//   };
//   //   signOut
//   const logOut = () => {
//     return signOut;
//   };

//   //   useEffect for if user is login if page reload then it will not gonna ask user for login again

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       // takes two arugments one is auth and other is callback
//       setUser(currentUser);
//     });

//     // hook clean up
//     return () => {
//       unsubscribe();
//     };
//   });
//   return (
//     <AuthContext.Provider value={{ user, signUp, signIn, logOut, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
