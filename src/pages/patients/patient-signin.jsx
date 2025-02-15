import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const PatientSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="p-8 w-full max-w-md text-center">
        <div className="flex mt-2 justify-center gap-4 mb-6">
          <button className="border p-2 rounded-full w-12 h-12 flex justify-center items-center">
            <FcGoogle size={24} />
          </button>
          <button className="border p-2 rounded-full w-12 h-12 flex justify-center items-center text-blue-600">
            <FaFacebook size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border shadow-md p-2">
            <FaEnvelope className="text-[#666666] mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border shadow-md p-2">
            <FaLock className="text-[#666666] mr-2" />
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
            Don't have an account? <a href="/patient/signup">Signup</a>
          </p>
          <button className="bg-pink-500 text-white p-2 rounded-full w-[60%] hover:bg-pink-600 mt-4">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientSignin;
