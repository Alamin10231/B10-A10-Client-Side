import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);

  
  if (loading) {
    return (
      
        <span className="loading loading-ring loading-lg"></span>
      
    );
  }

 
  if (user ) {
    return children;
  }

  
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;