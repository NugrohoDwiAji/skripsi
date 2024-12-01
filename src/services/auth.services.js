import axios from "axios";


const host = import.meta.env.VITE_HOST

export const register = async (data, callback) => {
    try {
         await axios
         .post(`${host}/register`, data)
         .then((res)=>{
            callback(res.data)
         });
        
    } catch (error) {
        callback(error);
    }
};

export const login = async (data, callback) => {
    try {
         await axios
         .post(`${host}/login`, data)
         .then((res)=>{
            callback(true, res.data)
         });
        
    } catch (error) {
        callback(false,error);
    }
};

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && typeof token === "string";
  };