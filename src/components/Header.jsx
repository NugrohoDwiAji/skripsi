import {useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [menu, setMenu] = useState(false)

    const handleLogOut = () => {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    };

  return (
    <div className="bg-white w-full h-16 border-b-2 px-[9.2rem] flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img src="/ubg.png" alt="ubg" className="h-12" />
        <a href="">Dashboard</a>
      </div>
      <button className="flex text-gray-500 items-center" onClick={() => setMenu(!menu)}>login <RiArrowDropDownLine size={30} /></button>
      <div className={`bg-white h-fit w-40  py-2 border-[1px] rounded-lg border-gray-200 absolute right-36 top-14  flex-col  shadow-xl ${menu ? "flex" : "hidden"}`} >
        <button onClick={handleLogOut} className={"hover:bg-gray-200 text-sm pl-5 py-2 text-start"}>Log Out</button>
        <NavLink  className={"hover:bg-gray-200 text-sm pl-5 py-2"}>Profile</NavLink>
      </div>
    </div>
  );
};

export default Header;
