import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const DoctorSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#167496] gap-2">

      <div className="flex justify-center items-center  max-w-xl w-full rounded-2xl pb-2 pt-2 bg-white">
        <div className="p-8 w-full max-w-md text-center">
          <p className="text-black font-semibold md:text-4xl text-sm mb-4 ">Sign In </p>

          <div className="flex mt-2 justify-center gap-4 mb-6">
            <button className="border p-2 rounded-full w-14 h-14 flex justify-center items-center">
              <FcGoogle size={24} />
            </button>
            <button className="border p-2 rounded-full w-14 h-14 flex justify-center items-center text-blue-600">
              <FaFacebook size={24} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center border shadow-md rounded-xl p-2">
              <FaEnvelope className="text-[#666666] mr-2 ml-1" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border shadow-md rounded-xl p-2">
              <FaLock className="text-[#666666] mr-2 ml-1" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 ml-2 focus:outline-none"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </button>
            </div>
            <p className="text-[#666666]">
              Don't have an account? <a href="/signup" className="decoration-white">Signup</a>
            </p>
            <button className="bg-[#167496] text-white p-2 rounded-full w-[60%] hover:bg-[#167496] mt-4">
              Signin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignin;
