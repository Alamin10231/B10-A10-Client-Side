import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebaseconfig";
import { GoogleAuthProvider } from "firebase/auth";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  // Firebase Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser); // user স্টেট আপডেট করুন
      setloading(false); // loading স্টেট false সেট করুন
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const register = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinwithgoogle = () => {
    setloading(true);
    const Provider = new GoogleAuthProvider();
    return signInWithPopup(auth, Provider);
  };

  const signout = () => {
    setloading(true);
    return signOut(auth)
      .then(() => {
        setuser(null); // user স্টেটকে null সেট করুন
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        throw error;
      });
  };

  const resetpass = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    name: "alamin",
    user, // user স্টেট পাস করুন
    loading,
    register,
    login,
    signinwithgoogle,
    signout,
    resetpass,
  };

  return (
    <Authcontext.Provider value={authInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;