import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Register = () => {
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

  const registerHandler = async (e) => {
    e.preventDefault();

    console.log(userData)

    try {
      const response = await axios.post("http://localhost:5000/api/register", userData);
      console.log(response.data);
      toast.success("Register Successful!");
      localStorage.setItem("accessToken", response.data.token);
      getIsLogin();
    } catch (err) {
      console.error("Error:", err);
    }

  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <div className="pt-14 min-h-screen  ">
        <div className="flex flex-col gap-3 justify-center  pt-12 items-center">
          <form
            onSubmit={registerHandler}
            className="md:w-1/4 md:px-0 px-2 flex flex-col gap-3"
          >
            <div className="text-3xl text-center ">Register</div>

            <div className="border border-gray-600 ">
              <input
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
                type="text"
                placeholder="Name"
                className=" placeholder:text-gray-600  outline-none px-3 w-full py-1.5"
              />
            </div>

            <div className="border border-gray-600 ">
              <input
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
                type="email"
                placeholder="Email"
                className=" placeholder:text-gray-600  outline-none px-3 w-full py-1.5"
              />
            </div>

            <div className="border border-gray-600 ">
              <input
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    number: e.target.value,
                  })
                }
                type="number"
                placeholder="Number"
                className=" placeholder:text-gray-600 outline-none px-3 w-full py-1.5"
              />
            </div>
            <div className="border border-gray-600 ">
              <input
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    address: e.target.value,
                  })
                }
                type="text"
                placeholder="Address"
                className=" placeholder:text-gray-600 outline-none px-3 w-full py-1.5"
              />
            </div>

            <div className="border border-gray-600">
              <select
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    role: e.target.value,
                  })
                }
                className="outline-none bg-white px-3 w-full py-1.5"
              >
                <option value="" className="">
                  Select User Type
                </option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
                <option value="charity">Charity</option>
              </select>
            </div>

            {userData.role && userData.role !== "individual" && (
              <div className="border border-gray-600 ">
                <input
                  required
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      orgName: e.target.value,
                    })
                  }
                  type="text"
                  placeholder={`${capitalizeFirstLetter(userData.role)} Name`}
                  className=" placeholder:text-gray-600 outline-none px-3 w-full py-1.5"
                />
              </div>
            )}

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
                className=" placeholder:text-gray-600 outline-none px-3 w-full py-1.5"
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className={` bg-blue-800 flex justify-center items-center hover:bg-blue-900 text-white w-full py-2`}
              >
                Register
              </button>
            </div>
            <div>
              <p className=" text-center">
                Already have a account{" "}
                <Link to="/login" className="underline text-green-700">
                  login
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
