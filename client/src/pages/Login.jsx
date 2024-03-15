import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Login = () => {
  const [userData, setUserData] = useState({});

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const getIsLogin = async () => {
    
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    const { data } = await axios.get("http://localhost:5000/api/isLogin", config);

    console.log(data);

    if (data.isLogin) {
      setIsLogin(true);
      navigate("/");
    }
  };

  useEffect(() => {
    getIsLogin();
  }, [isLogin, navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();

    console.log(userData)

    try {
      const response = await axios.post("http://localhost:5000/api/login", userData);
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.token);
      toast.success("Login Successful!");
      getIsLogin();
    } catch (err) {
      console.error("Error:", err);
    }

  };

 

  return (
    <>
      <div className="pt-14 min-h-screen  ">
        <div className="flex flex-col gap-3 justify-center  pt-20 items-center">
          <form
            onSubmit={loginHandler}
            className="md:w-1/4 md:px-0 px-2 flex flex-col gap-3"
          >
            <div className="text-3xl text-center ">Login</div>
            <div className="border border-gray-600 ">
              <input
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
                type="text"
                placeholder="Email"
                className="outline-none px-3 w-full py-1.5"
              />
            </div>
            <div className="border border-gray-600 ">
              <input
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    password: e.target.value,
                  })
                }
                type="password"
                placeholder="Password"
                className="outline-none px-3 w-full py-1.5"
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className={` bg-blue-800 flex justify-center items-center hover:bg-blue-900 text-white w-full py-2`}
              >
                Login
              </button>
            </div>
            <div>
              <p className=" text-center">
                Don't have an account{" "}
                <Link to="/register" className="underline text-blue-700">
                  register
                </Link>{" "}
                here
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
