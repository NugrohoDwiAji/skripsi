import React from "react";
import { useState } from "react";
import { login } from "../services/auth.services";
import { affineEncrypt } from "../services/kriptografi.services";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let datas = {
      password: affineEncrypt(data.password, 11, 2),
      email: affineEncrypt(data.email, 11, 2),
    };
    try {
      setloading(true);
      login(datas, (status, res) => {
        if (status) {
          localStorage.setItem("token", res.datas);
          console.log(res);
          navigate("/dashboard");
        } else {
          alert(res.response.data.message);
          setloading(false);
        }
      });
    } catch (error) {
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-no-repeat bg-cover backdrop-blur"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-balck/10 backdrop-blur-lg flex items-center justify-center">
        <div className="h-[450px] w-[350px] shadow-2xl px-7 py-10 flex flex-col ">
          <h1 className="text-white text-4xl mb-10 text-center">Login</h1>
          {loading && (
            <div className="-mt-6 mb-2 text-lg flex gap-2 justify-center">
              <div className="w-8 h-8 border-[4px] border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <h1>Loading...</h1>
            </div>
          )}
          <form action="" className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="contoh@gmail.com"
                onChange={(e) => setdata({ ...data, email: e.target.value })}
                className="inset-4 h-8 rounded-sm bg-black/15 backdrop-blur-lg outline-none px-2 text-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setdata({ ...data, password: e.target.value })}
                className="inset-4 h-8 rounded-sm bg-black/15 backdrop-blur-lg outline-none px-2 text-white"
              />
            </div>
            <button
              className="bg-blue-900 px-5 py-2 rounded-lg mt-2 text-white w-fit hover:scale-105"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <h1>Belum memiliki akun?</h1>
            <h2 className="text-blue-900">
              <a href="/signup">Sign Up</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
