import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { HiBars3 } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar = ({logOrNot}) => {
  const [toggle, setToggle] = useState(logOrNot);

  const [isLogin, setIsLogin] = useState(logOrNot);

  const navigate = useNavigate();

  const getIsLogin = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:5000/api/isLogin",
      config
    );

    console.log(data);

    if (data.isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false)
      navigate("/register");
    }
  };

  useEffect(() => {
    getIsLogin();
  }, [isLogin, navigate]);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/register")
    setIsLogin(false)

    toast.success("Logout Successful!");
    getIsLogin()
  };

  return (
    <>
      <div className="fixed w-full ">
        <div className="bg-white border-b text-black border-gray-300 shadow-gray-400 shadow-sm  py-2 text-center flex justify-between md:px-8 px-2 items-center  ">
          <div className="flex gap-3 items-center">
            <button className="md:hidden ml-2 flex border rounded">
              <HiBars3 size={23} />
            </button>
            <Link
              to="/"
              className="md:text-2xl text-lg flex items-center justify-center py-0 font-semibold"
            >
              <span>
                <img className="w-9" src="/images/roti.png" alt="" />
              </span>
              <span className="text-green-600">Roti-Rakshak</span>
            </Link>
          </div>

          <div className="text-lg  font-semibold flex  md:gap-8 gap-3 py-0">
            <Link
              to="/"
              className="text-green-600 md:text-xl text-xl py-0 md:flex hidden  font-semibold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-green-600 md:text-xl text-xl py-0 md:flex hidden  font-semibold"
            >
              About
            </Link>
            <Link
              to="/surplus-foods"
              className="text-green-600 md:text-xl text-xl md:flex hidden py-0 font-semibold "
            >
              Surplus-foods
            </Link>
            {!isLogin ? (
              <div className="flex items-center gap-1">
                <Link
                  to="/register"
                  className="flex justify-center items-center  text-sm text-center p"
                >
                  <span className="bg-green-500 px-7 rounded-xl py-1">Register</span>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => logOut()}
                className="flex justify-center items-center  text-sm text-center p"
              >
                
                <span className="bg-green-500 px-7 rounded-xl py-1">Logout</span>
              </button>
            )}
          </div>
        </div>
        <div
          className={` border-b  ${
            toggle ? "flex" : "hidden"
          } flex-col md:hidden  w-full gap-3 bg-gray-800 text-white pl-8 pb-3 pt-2`}
        >
          <Link onClick={() => setToggle(!toggle)} to="/">
            {" "}
            <span className="bg-blue-700 px-[4rem] py-1 text-sm">
              Home
            </span>{" "}
          </Link>
          
        </div>
      </div>
    </>
  );
};
