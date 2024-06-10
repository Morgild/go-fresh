"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/app/common/axios";
import { AxiosError } from "axios";
import { useAuth } from "./AuthProvider";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { isReady, setIsReady } = useAuth();
  const [basket, setBasket] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await api.get("/");
      setCategories(data.data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getFoods = async () => {
    try {
      const { data } = await api.get("/food/foods");
      setFoods(data.foods);
      console.log(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  useEffect(() => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      setBasket(JSON.parse(basket));
    }
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (isFirstRender) return;
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const sumBasket = basket.reduce((sum, currentValue) => {
    return sum + currentValue.price * currentValue.count;
  }, 0);

  useEffect(() => {
    const fetchData = async () => {
      setIsReady(false);
      await getCategories();
      await getFoods();
      setIsReady(true);
    };
    fetchData();
  }, []);

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
        categories,
        foods,
        setFoods,
      }}
    >
      <div className={`${showDrawer && "modal-open"}`}>{children}</div>
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
