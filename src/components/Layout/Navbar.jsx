import { Link, NavLink, useNavigate } from "react-router-dom";
import logoicon from "../../assets/icon/movielogo.png";
import { useContext } from "react";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, signout } = useContext(Authcontext);
  const navigate = useNavigate();

  // Navigation links
  const list = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold bg-[#900C3F] px-4 py-2 rounded-lg"
            : "text-gray-200 hover:text-white hover:bg-[#900C3F] px-4 py-2 rounded-lg transition duration-300"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/allmovies"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold bg-[#900C3F] px-4 py-2 rounded-lg"
            : "text-gray-200 hover:text-white hover:bg-[#900C3F] px-4 py-2 rounded-lg transition duration-300"
        }
      >
        <li>All Movies</li>
      </NavLink>

      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold bg-[#900C3F] px-4 py-2 rounded-lg"
            : "text-gray-200 hover:text-white hover:bg-[#900C3F] px-4 py-2 rounded-lg transition duration-300"
        }
      >
        <li>Blogs</li>
      </NavLink>

      <NavLink
        to="/addmovie"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold bg-[#900C3F] px-4 py-2 rounded-lg"
            : "text-gray-200 hover:text-white hover:bg-[#900C3F] px-4 py-2 rounded-lg transition duration-300"
        }
      >
        <li>Add Movie</li>
      </NavLink>

      <NavLink
        to="/myfavorites"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold bg-[#900C3F] px-4 py-2 rounded-lg"
            : "text-gray-200 hover:text-white hover:bg-[#900C3F] px-4 py-2 rounded-lg transition duration-300"
        }
      >
        <li>My Favorites</li>
      </NavLink>
    </>
  );

  // Handle sign out
  const handleSignOut = () => {
    signout()
      .then(() => {
        toast.success("Successfully signed out");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-[#C70039] w-full mx-auto font-poppins shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-[#C70039] rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {list}
          </ul>
        </div>
        <div className="hidden md:flex">
          <a className="btn btn-ghost text-2xl text-white">
            <img className="w-8 h-8" src={logoicon} alt="" />
            MovieNest
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 text-[16px]">
          {list}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4">
          {user?.email ? (
            // If user is logged in, show "Sign Out" button
            <button
              onClick={handleSignOut}
              className="text-white bg-[#900C3F] px-4 py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300"
            >
              Sign out
            </button>
          ) : (
            // If user is not logged in, show "Sign In" button
            <Link to="/login">
              <button className="text-white bg-[#900C3F] px-4 py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;