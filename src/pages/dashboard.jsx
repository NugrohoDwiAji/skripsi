import React from "react";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <h1 className="bg-white w-full h-fit py-5 px-36 text-xl font-bold">Dashboard</h1>
      {/* main conntent */}
      <div className="flex flex-col xl:px-36 px-10 pt-10 items-center">
        <h1 className="w-full h-fit bg-white rounded-lg p-5">
          You're logined
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
