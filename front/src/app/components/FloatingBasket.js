"use client";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { useData } from "./providers/DataProvider";
export const FloatingBasket = () => {
  const { basket, setShowDrawer } = useData();
  if (!basket.length) {
    return;
  }
  return (
    <div
      onClick={() => {
        setShowDrawer(true);
      }}
      className="fixed z-[1] bottom-10 right-10 cursor-pointer"
    >
      <div className="bg-main shadow-sm shadow-black rounded-full p-5 text-white relative">
        <MdOutlineShoppingBasket size={30} />
        <p className="absolute right-0 w-7 h-7 bg-white shadow-sm shadow-black font-semibold text-[#ff2c2c] rounded-full flex items-center justify-center">
          {basket.length}
        </p>
      </div>
    </div>
  );
};
