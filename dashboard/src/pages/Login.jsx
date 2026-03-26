import axios from "axios";
import React, { useState } from "react";
import { url } from "../config/KeyConfig.js";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";




const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password
    };

    try {
      const user = await axios.post(`${url}/api/user/login`, formData, { withCredentials: true });
      if(user?.data.type=="admin"){
        localStorage.setItem("UserInfo", JSON.stringify(user?.data));
        toast.success("Login Successfull");
        navigate('/', { replace: true })
      }
      toast.error("Only Admin can Login");
      return;
    } catch (error) {
      const message = error?.response?.data?.message || "Login Failed";
      toast.error(message);
      console.log("Error : ", message);
    }
  };



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-8 w-87.5 flex flex-col items-center gap-5"
      >

        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm font-medium">Password</label>

          <div className="relative w-full">

            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              className="border rounded-lg p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {show ? (

                /* eye off */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-10-7a10.05 10.05 0 012.79-3.76M6.223 6.223A9.956 9.956 0 0112 5c5 0 9 4 10 7a9.956 9.956 0 01-4.043 4.774M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 6L3 3" />
                </svg>

              ) : (

                /* eye */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.938 0C21.713 15.422 17.93 18 12 18S2.287 15.422 1.062 12C2.287 8.578 6.07 6 12 6s9.713 2.578 10.938 6z" />
                </svg>

              )}
            </button>

          </div>
        </div>


        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <div className="group cursor-pointer" onClick={() => navigate('/signIn')}>
          <span className="group-hover:text-blue-500">
            don't have account?
          </span>{" "}
          <span className="group-hover:text-red-600">
            register
          </span>
        </div>

      </form>

    </div>
  );
};

export default LoginPage;
