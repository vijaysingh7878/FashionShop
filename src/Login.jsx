import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "./FireBase";
import { cardContext } from "./context/MainContext";
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const { cart, setCart, oldData, setOldData } = useContext(cardContext);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const logInData = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Login Successful!");
        event.target.reset();
        setTimeout(() => {
          setOldData(user.accessToken);
        }, 1000);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Invalid ID or password !");
        console.log(error);
      });
  };
  const loginGoolge = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setOldData(user.accessToken);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  useEffect(() => {
    if (oldData != "") {
      navigate("/");
    }
  }, [oldData]);
  return (
    <>
      <div className="flex items-center justify-center  h-[90vh]">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-[2px_3px_10px_10px_rgba(0,_0,_0,_0.1)]">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Login
          </h2>

          {/* Error message */}
          {/* {error && <div className="bg-red-100 text-red-500 p-2 mb-4 rounded">{error}</div>} */}

          {/* Login Form */}
          <form className="space-y-4" onSubmit={logInData}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none">
                Login
              </button>
            </div>
            <div className="text-center">OR</div>
            <div className="flex items-center justify-between">
              <button
                className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none"
                onClick={loginGoolge}
              >
                Login with Google
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <ToastContainer autoClose={500} position="top-center" />
      </div>
    </>
  );
};

export default Login;
