import React from "react";
import {} from "../context/AuthContext";
const Login = () => {
  return (
    <div className="mt-4 py-2 relative w-full h-full max-w-[85%] mx-auto">
      <img src="" alt="" />
      <h2 className="text-md text-center text-gray-800 capitalize">
        Login to your Account
      </h2>
      <div className="flex justify-center flex-col my-4  rounded-md border-gray-900  items-center w-[200px]  mx-auto h-auto py-10 shadow-md">
        <form
          className="flex flex-col py-9 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="John doe"
            className="py-1 text-sm px-2 w-[170px] outline-none border-gray-400 border-[.4px] focus:border-blue-600"
          />
          <input
            type="email"
            placeholder="awesome@example.com "
            className="py-1 text-sm px-2  w-[170px] outline-none border-[.4px] border-gray-400 focus:border-blue-600"
          />
          <button className="bg-violet-700 rounded-md  py-1 text-white w-[60px] text-sm ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
