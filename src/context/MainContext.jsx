import React, { createContext, useEffect, useState } from "react";

export const cardContext = createContext();
const MainContext = ({ children }) => {
  const localStorgData = JSON.parse(localStorage.getItem("Data")) ?? [];
  const loginData = localStorage.getItem("oldData") ?? "";

  const [cart, setCart] = useState(localStorgData);
  const [oldData, setOldData] = useState(loginData);

  const obj = { cart, setCart, oldData, setOldData };
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("oldData", oldData);
  }, [oldData]);

  return (
    <>
      <cardContext.Provider value={obj}>{children}</cardContext.Provider>
    </>
  );
};

export default MainContext;
