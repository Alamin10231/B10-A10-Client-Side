import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef();
  const [success,setsuccess]= useState(false)
const [error,seterror]= useState('')
  const navigate = useNavigate();
  const {login,signinwithgoogle,resetpass}= useContext(Authcontext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    login(email,password)
    setsuccess(false)
    seterror('')
    login(email,password)
    .then(result => {console.log(result.user)
      toast.success("Successfully login")
      setsuccess(true)
      navigate("/")          
    })
    .catch(error => {console.log(error.message)
      setsuccess(false)
      toast.error(error.message)            
    })
    // Login logic here
//     navigate("/");
  };
  const handleGoogle = ()=>{
    signinwithgoogle()
    .then(result => {console.log(result.user)
      toast.success("Successfully login")
     
      navigate("/")          
    })
  
  .catch(error =>{console.log(error.message)
    toast.error("Please Try again")  
  })
  }
  const handleforgetpass =(e)=>{
    e.preventDefault()
    const email = emailRef.current.value;
   if(!email){
    toast.error("Please enter your email address.")
    return
   }
    resetpass(email)
    .then(()=>{
      toast.success("Password reset email sent. Please check your inbox.");
    })
    .catch(error =>{console.log(error.message)
      toast.error(error.message);
    })
   
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
    >
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
             name="email" ref={emailRef}
             
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label onClick={handleforgetpass} htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
             name="password"
             
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="text-right">
            <button type="button" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <button onClick={handleGoogle} className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-200">
            <FcGoogle size={24} />
            <span>Sign in with Google</span>
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-green-600 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
