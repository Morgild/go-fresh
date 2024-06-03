"use client";

import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const sumBasket = basket.reduce((sum, currentValue) => {
    return sum + currentValue.foodPrice * currentValue.foodCount;
  }, 0);
  return (
    <DataContext.Provider
      value={{
        basket,
        setBasket,
        showDrawer,
        setShowDrawer,
        sumBasket,
        numberFormat,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
