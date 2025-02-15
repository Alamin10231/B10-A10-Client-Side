import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../Firebase/Firebaseconfig";
import { GoogleAuthProvider } from "firebase/auth";
export const Authcontext = createContext();

 export const AuthProvider = ({ children }) => {
                    const [user,setuser]=useState(null);
                    const [loading,setloading]=useState(true);

const register =(email,password)=>{
                    setloading(true)
                    return createUserWithEmailAndPassword(auth,email,password)                  
}
const login = (email,password)=>{
                    setloading(true)
                    return signInWithEmailAndPassword(auth,email,password)
}

const signinwithgoogle = ()=>{
                    setloading(true)
                    const Provider = new GoogleAuthProvider()
                    return signInWithPopup(auth,Provider) 
}
  const authInfo = {
    name: "alamin",
    register,
    login,
    signinwithgoogle,
  };

  return (
    <div>
      <Authcontext.Provider value={authInfo}>
                    {children}
      </Authcontext.Provider>
    </div>
  );
};

export default AuthProvider;
