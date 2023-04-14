import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
        <h1 className="text-5xl font-bold text-black mt-14">
          Welcome to Will's Quick Checklist!
        </h1>
        <h2 className="text-3xl font-bold text-black mt-14">
          Take quick notes for your daily routine!
        </h2>
        <button
          className="p-2 font-bold bg-blue-600 rounded m-14 hover:bg-blue-800"
          onClick={() => navigate("/signin")}
        >
          Let's get started!
        </button>
      </div>
    </div>
  );
};

export default Main;
