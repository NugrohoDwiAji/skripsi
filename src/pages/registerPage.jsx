import React from "react";
import { useState} from "react";
import { register } from "../services/auth.services";
import { affineEncrypt } from "../services/kriptografi.services";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [message, setmessage] = useState("");
  const [isMessage, setisMessage] = useState(false);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log(data);
    // const dataEncrypt = {
    //   username: data.username,
    //   email: affineEncrypt(data.email, 11, 2), 
    //   password: affineEncrypt(data.password, 11, 2),
    // };
    // try {
    //   register(dataEncrypt, (res) => {
    //     console.log(res.message);
    //     setmessage(res.message);
    //     setisMessage(true);
    //     setTimeout(() => {
    //       navigate("/signin");
    //     }, 2000);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };


  return (
    <div
      className="flex justify-center items-center h-screen bg-no-repeat bg-cover backdrop-blur"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-balck/10 backdrop-blur-lg flex items-center justify-center">
        <div className="h-[450px] w-[350px] shadow-2xl px-7 py-10 flex flex-col ">
          <h1 className="text-white text-4xl mb-10 text-center">Registrasi</h1>
          <form action="" className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="inset-4 h-8 rounded-sm bg-black/15 backdrop-blur-lg outline-none px-2 text-white"
                onChange={(e) => setdata({ ...data, username: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">email</label>
              <input
                type="email"
                placeholder="Contoh@gmail.com"
                className="inset-4 h-8 rounded-sm bg-black/15 backdrop-blur-lg outline-none px-2 text-white"
                onChange={(e) => setdata({ ...data, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="inset-4 h-8 rounded-sm bg-black/15 backdrop-blur-lg outline-none px-2 text-white"
                onChange={(e) => setdata({ ...data, password: e.target.value })}
              />
            </div>
            <button
              className="bg-blue-900 px-5 py-2 rounded-lg mt-2 text-white w-fit hover:scale-105"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <h1>Sudah memiliki akun?</h1>
            <h2 className="text-blue-900">
              <a href="/signin">Sign In</a>
            </h2>
          </div>
        </div>
      </div>
      <h1
        className={`absolute px-16 py-3 rounded-md bg-gray-200 top-32  ${
          isMessage ? "block" : "hidden"
        }`}
      >
        {message}
      </h1>
    </div>
  );
};

export default RegisterPage;
