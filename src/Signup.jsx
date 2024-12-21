import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./FireBase";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const register = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toast.success("Account is Created !");
        event.target.reset();
        setTimeout(() => {
          navigate("/login");
        }, 1000);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Something went wrong !");
        // ..
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center h-[90vh]">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-[2px_3px_10px_10px_rgba(0,_0,_0,_0.1)]">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Sign Up
          </h2>

          {/* Success Message */}
          {/* {success && <div className="bg-green-100 text-green-500 p-2 mb-4 rounded">{success}</div>} */}

          {/* Error Message */}
          {/* {error && <div className="bg-red-100 text-red-500 p-2 mb-4 rounded">{error}</div>} */}

          {/* Sign Up Form */}
          <form className="space-y-4" onSubmit={register}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

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
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={500} position="top-center" />
    </div>
  );
};

export default Signup;
