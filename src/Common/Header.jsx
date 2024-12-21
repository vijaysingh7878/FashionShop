import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cardContext } from "../context/MainContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart, setCart, oldData, setOldData } = useContext(cardContext);
  const [overlay, setOverLay] = useState(true);

  // logout part
  const logout = () => {
    setOldData("");
    setOverLay(true);
  };

  useEffect(() => {
    if (oldData == "" && location.pathname != "/signup") {
      navigate("/login");
    }
  }, [oldData, location.pathname]);

  // barBtn part
  const btn = () => {
    setOverLay(!overlay);
  };

  return (
    <>
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10 mb-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-semibold">
            <a href="/" className="text-white hover:text-gray-300">
              Fashion Shop
            </a>
          </div>
          {/* slaider BarIcon part */}
          <div
            className={`w-[100vw] h-[100vh] bg-[#00000066] top-0  absolute transition-all duration-500 ${
              overlay == true ? "-left-[110%]" : "left-0"
            }`}
          >
            <div className="w-[30vw] h-full bg-blue-600 flex justify-center py-10">
              <ul className="list-none font-semibold ">
                <li>
                  <Link to={"/"} className="hover:text-gray-300" onClick={btn}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="hover:text-gray-300"
                    onClick={btn}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/product"}
                    className="hover:text-gray-300"
                    onClick={btn}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/cart"}
                    className="hover:text-gray-300"
                    onClick={btn}
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <button className="hover:text-gray-300" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          {oldData != "" ? (
            <>
              <div className="hidden BarIcon">
                {overlay == true ? (
                  <i
                    className="fa-solid fa-bars absolute z-10 right-4"
                    onClick={btn}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-xmark absolute z-10 right-4"
                    onClick={btn}
                  ></i>
                )}
              </div>
              {/* header nav  */}
              <nav className="space-x-6">
                <Link to={"/"} className="hover:text-gray-300">
                  Home
                </Link>
                <Link to={"/about"} className="hover:text-gray-300">
                  About
                </Link>
                <Link to={"/product"} className="hover:text-gray-300">
                  Products
                </Link>
              </nav>
            </>
          ) : (
            ""
          )}
          {/* header login-logout btn */}
          <div id="headerBtn">
            {oldData == "" ? (
              <div className="flex">
                <div>
                  <Link to={"/login"}>
                    <span className="hover:text-black bg-blue-400 px-3 py-2 rounded-lg text-white mx-2">
                      Login
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to={"/signup"}>
                    <span className="hover:text-black bg-blue-400 px-3 py-2 rounded-lg text-white mx-2">
                      Sign up
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <Link to={"/cart"}>
                  <span className="hover:text-black bg-blue-500 px-3 py-2 rounded-lg text-white mx-2">
                    Cart ({cart.length})
                  </span>
                </Link>
                <button
                  className="hover:text-black bg-blue-500 px-3 py-2 rounded-lg text-white mx-2"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
