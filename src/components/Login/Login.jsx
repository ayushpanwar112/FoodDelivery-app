import React, { useState } from "react";
import { assets } from "../../../public/frontend_assets/assets";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Signup");
  return (
    <div className="login-container  flex justify-center items-center w-full h-[100vh] fixed z-[1]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <form className="login flex flex-col bg-white p-8 rounded-md w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]">
        <div className="login-title relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl flex justify-center items-center mb-8">
            {currentState}
          </h2>
          <img
            className="absolute top-0 right-0 w-6 h-6 cursor-pointer hover:rotate-6 hover:scale-110 hover:opacity-90 transition-transform duration-300"
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt="Close"
          />
        </div>

        <div className="login-input flex flex-col gap-6">
          {currentState === "Signup" && (
            <input
              type="text"
              placeholder="Your name"
              required
              className="h-12 px-4 text-lg sm:text-xl md:text-2xl"
            />
          )}
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="h-12 px-4 text-lg sm:text-xl md:text-2xl -"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="h-12 px-4 text-lg sm:text-xl md:text-2xl"
          />
          {currentState === "Signup" && (
            <input
              type="text"
              placeholder="Enter your home address"
              required
              className="h-12 px-4 text-lg sm:text-xl md:text-2xl"
            />
          )}
        </div>

        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md text-lg">
          {currentState === "Signup" ? "Create your account" : "Login"}
        </button>

        <div className="login-condition mt-4">
          <input type="checkbox" required />
          <p className="text-sm mt-2">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {currentState === "Login" ? (
          <>
            <p className="mt-6">Create a new account?</p>
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => setCurrentState("Signup")}
            >
              Signup
            </span>
          </>
        ) : (
          <>
            <p className="mt-6">Already have an account?</p>
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
