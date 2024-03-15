import { Login } from "./pages/Login"
import React, { useState, useEffect } from "react";
import { Register } from "./pages/Register"
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Link, useNavigate  } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { SurplusFood } from "./pages/SurplusFood";


function App() {


  const [isLogin, setIsLogin] = useState(false);

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
      navigate("/");
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    getIsLogin();
  }, [isLogin, navigate]);
  
  return (

    <>

<Navbar logOrNot={isLogin} />

<Routes>

<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/about" element={<About />} /> 
<Route path="/surplus-foods" element={<SurplusFood/>} /> 



</Routes>




<ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-14 font-bold  "

      />

     
    </>
  )
}

export default App
