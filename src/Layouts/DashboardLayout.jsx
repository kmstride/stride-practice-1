import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function DashboardLayout() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.clear("user")
    navigate("/login")
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/add-item">Add Item</Link>
          </li>
          <li>
            <Link to="/dashboard/my-items">My Items</Link>
          </li>
          <li>
            <Link to="/">Go Back To Home</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DashboardLayout;
