import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const { register, signinwithgoogle } = useContext(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;

    console.log(name, email, photourl, password);

    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailregex.test(email)){
      toast.error("Email is valid");
      return;
    }
    const passwordregex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!passwordregex.test(password)){
      
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long");
      return;
    }

    register(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Register");

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });

    //
  };
  const handleGoogle = () => {
    signinwithgoogle()
    .then(result => {console.log(result.user)
      toast.success("congrachulation")
      navigate("/");
    })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="photoUrl"
              className="block text-gray-700 font-medium mb-1"
            >
              Photo URL
            </label>
            <input
              id="photoUrl"
              type="url"
              placeholder="Enter your photo URL"
              name="photourl"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={handleGoogle}
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-200"
          >
            <FcGoogle size={24} />
            <span>Sign up with Google</span>
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-purple-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
