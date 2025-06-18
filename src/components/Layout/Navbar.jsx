import { Link, NavLink, useNavigate } from "react-router-dom";
import logoicon from "../../assets/icon/movielogo.png";
import { useContext } from "react";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, signout } = useContext(Authcontext);
  const navigate = useNavigate();

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

  const handleSignOut = () => {
    signout()
      .then(() => {
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
          <ul className="menu menu-sm dropdown-content bg-[#C70039] rounded-box z-[100] mt-3 w-52 p-2 shadow">
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

      <div className="navbar-end space-x-2">
        <div className="">
          <label className="flex cursor-pointer gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="light"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  title={user.displayName || "User"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Update Profile</a>
              </li>
              <li>
                <button onClick={handleSignOut}>log out</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-2 flex">
            <Link to="/login">
              <button className="text-white bg-[#900C3F] px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300 text-sm sm:text-base">
                Log in
              </button>
            </Link>
            <Link to="/register">
              <button className=" hidden md:flex text-white bg-[#900C3F] px-4 py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
