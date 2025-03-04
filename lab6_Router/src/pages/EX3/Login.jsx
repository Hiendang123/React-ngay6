import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signIn, toggle] = useState(() => {
    const savedMode = localStorage.getItem("loginMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const navigate = useNavigate();

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const [signInErrors, setSignInErrors] = useState({
    email: "",
    password: "",
  });

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signUpErrors, setSignUpErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("loginMode", JSON.stringify(signIn));
  }, [signIn]);

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInForm((prev) => ({ ...prev, [name]: value }));
    setSignInErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }));
    setSignUpErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!signInForm.email) {
      newErrors.email = "Please enter your email";
      hasError = true;
    }
    if (!signInForm.password) {
      newErrors.password = "Please enter your password";
      hasError = true;
    }

    setSignInErrors(newErrors);

    if (!hasError) {
      console.log("Sign In:", signInForm);
      toggle(true);
      navigate("/dashboard");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: "", email: "", password: "" };

    if (!signUpForm.name) {
      newErrors.name = "Please enter your name";
      hasError = true;
    }
    if (!signUpForm.email) {
      newErrors.email = "Please enter your email";
      hasError = true;
    }
    if (!signUpForm.password) {
      newErrors.password = "Please enter your password";
      hasError = true;
    }

    setSignUpErrors(newErrors);

    if (!hasError) {
      console.log("Sign Up:", signUpForm);
      toggle(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-1/2 flex flex-col items-center justify-center p-12 relative">
          <form
            onSubmit={handleSignInSubmit}
            className={`w-full text-center transition-opacity duration-600 ${
              signIn ? "opacity-100" : "opacity-50 pointer-events-none"
            }`}
          >
            <h1 className="font-bold text-2xl mb-6">Sign in</h1>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={signInForm.email}
                onChange={handleSignInChange}
                placeholder="Email"
                className="bg-gray-200 border-none p-3 w-full rounded"
              />
              {signInErrors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {signInErrors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={signInForm.password}
                onChange={handleSignInChange}
                placeholder="Password"
                className="bg-gray-200 border-none p-3 w-full rounded"
              />
              {signInErrors.password && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {signInErrors.password}
                </p>
              )}
            </div>
            <a href="#" className="text-gray-700 text-sm mb-4 block">
              Forget your password?
            </a>
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-12 rounded-full uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center p-12 relative">
          <form
            onSubmit={handleSignUpSubmit}
            className={`w-full text-center transition-opacity duration-600 ${
              signIn ? "opacity-50 pointer-events-none" : "opacity-100"
            }`}
          >
            <h1 className="font-bold text-2xl mb-6">Create Account</h1>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={signUpForm.name}
                onChange={handleSignUpChange}
                placeholder="Name"
                className="bg-gray-200 border-none p-3 w-full rounded"
              />
              {signUpErrors.name && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {signUpErrors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={signUpForm.email}
                onChange={handleSignUpChange}
                placeholder="Email"
                className="bg-gray-200 border-none p-3 w-full rounded"
              />
              {signUpErrors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {signUpErrors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={signUpForm.password}
                onChange={handleSignUpChange}
                placeholder="Password"
                className="bg-gray-200 border-none p-3 w-full rounded"
              />
              {signUpErrors.password && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {signUpErrors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-12 rounded-full uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div
          className={`w-1/2 h-full absolute top-0 transition-transform duration-600 ease-in-out ${
            signIn ? "left-1/2" : "left-0"
          }`}
        >
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white h-full flex flex-col items-center justify-center p-10 text-center">
            {signIn ? (
              <>
                <h1 className="font-bold text-2xl mb-4">Hello, Friend!</h1>
                <p className="text-sm font-light mb-8">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-12 rounded-full uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
                  onClick={() => toggle(false)}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <h1 className="font-bold text-2xl mb-4">Welcome Back!</h1>
                <p className="text-sm font-light mb-8">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-12 rounded-full uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
                  onClick={() => toggle(true)}
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
