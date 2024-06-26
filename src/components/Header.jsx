import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear("user");
    navigate("/login");
  };
  const navs = (
    <>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <header>
      <div className="navbar bg-base-100">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navs}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Amader Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navs}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link to="/login" className="btn">
              Login
            </Link>
          ) : (
            <button
              className="btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
