import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    sessionStorage.setItem("user", JSON.stringify({email}));
    toast.success("Login Successfully")
  };
  if(user?.email){
    navigate(from, { replace: true });
  }
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold underline">Login Here</h3>
      <form onSubmit={handleSubmit}>
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
        <label className="form-control w-full max-w-xs">
          <input
            type="submit"
            className="btn btn-info w-full max-w-xs my-2"
            value="Login"
          />
        </label>
      </form>
      <p>
        Not Have any account?{" "}
        <Link className="text-sky-400" to="/register">
          Register Here
        </Link>
      </p>
    </div>
  );
}

export default Login;
