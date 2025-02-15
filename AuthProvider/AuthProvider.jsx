import React, { createContext, useState } from "react";
export const Authcontext = createContext();
 export const AuthProvider = ({ children }) => {
const [user,setuser]=useState(null)
const [loading,serloading]=useState(true)

  const authInfo = {
    name: "alamin",
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
