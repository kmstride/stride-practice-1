import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [passError, setPassError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));  
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      setPassError(true);
    } else {
      setPassError(false);
      console.log(name, email, password);
      event.target.reset()      
      sessionStorage.setItem("user", JSON.stringify({email}));
    }
  };
  if(user?.email){
    navigate("/", { replace: true });
  }
  return (
    <div className="flex flex-col items-center">
    <h3 className="text-xl font-bold underline">Register Here</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full max-w-xs"
            name="name"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your Email</span>
          </div>
          <input
            type="email"
            placeholder="Type Your Email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your Password</span>
          </div>
          <input
            type="password"
            placeholder="Type Your Password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            required
          />
        </label>
        {
            passError && <p className="text-red-400 font-semibold">Password and Confirm Password Not Matched</p>
        }
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <input
            type="password"
            placeholder="Type Your Password"
            className="input input-bordered w-full max-w-xs"
            name="confirmPassword"
            required
          />
        </label>
        {
            passError && <p className="text-red-400 font-semibold">Password and Confirm Password Not Matched</p>
        }
        <label className="form-control w-full max-w-xs">
          <input
            type="submit"
            className="btn btn-info w-full max-w-xs my-2"
            value="Register"
          />
        </label>
      </form>
      <p>Already Have an account? <Link to="/login" className="text-sky-400">Login Here</Link></p>
    </div>
  );
}

export default Register;
