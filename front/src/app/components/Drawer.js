import { FaChevronLeft } from "react-icons/fa6";
import { useData } from "./providers/DataProvider";
import { BasketFoodCard } from "./BasketFoodCard";
import { useEffect, useState } from "react";

export const Drawer = () => {
  const { showDrawer, setShowDrawer, basket, sumBasket, numberFormat } =
    useData();
  const [dateTime, setDateTime] = useState("");

  function isInTimeRange() {
    const currentHour = dateTime.slice(11, 14);
    const currentMinute = dateTime.slice(14, 16);
    if (currentHour < 11 && currentHour > 9) {
      return true;
    } else if (currentHour === 11 && currentMinute < 30) {
      return true;
    } else {
      return false;
    }
  }
  useEffect(() => {
    console.log(dateTime);
  }, []);

  return (
    <div className="fixed overflow-hidden">
      {showDrawer && (
        <div
          onClick={() => {
            setShowDrawer(false);
          }}
          className="fixed h-screen w-screen top-0 left-0 bg-[#00000080] z-[10] cursor-pointer"
        ></div>
      )}
      <div
        className={`fixed transition flex flex-col justify-between bg-white h-[100vh] top-0 z-[30] w-full md:w-[30%] ${
          showDrawer ? "right-0" : "left-[100%]"
        } right-0`}
      >
        <div className="flex justify-between items-center relative  p-4 ">
          <p
            onClick={() => {
              setShowDrawer(false);
            }}
            className="py-0.5 px-1.5 absolute left-3 bg-white h-full flex items-center cursor-pointer"
          >
            <FaChevronLeft />
          </p>
          <p className="text-xl w-full text-center text-black">Таны сагс</p>
        </div>
        <div className="flex flex-col justify-start px-4 overflow-y-auto h-full ">
          <div className="flex flex-col justify-start h-full ">
            {basket.map((item, index) => (
              <BasketFoodCard
                key={index}
                foodImg={item.foodImg}
                foodName={item.foodName}
                foodCount={item.foodCount}
                foodPrice={item.foodPrice}
                foodIngredient={item.foodIngredient}
              />
            ))}
          </div>
        </div>
        <div className="flex sticky justify-self-end w-full right-0  bottom-0 bg-white p-8 shadow-sm shadow-black">
          <div className="w-1/2 flex flex-col text-lg">
            <p className="font-normal">Нийт төлөх дүн</p>
            <p className="font-extrabold ">{numberFormat.format(sumBasket)}₮</p>
          </div>
          <button
            disabled={!Boolean(sumBasket) || !isInTimeRange()}
            onClick={() => {
              console.log(basket);
            }}
            className="flex bg-main w-1/2 disabled:bg-gray disabled:cursor-default justify-center items-center text-white rounded-md py-2 px-4 text-base font-normal cursor-pointer"
          >
            Захиалах
          </button>
          {!isInTimeRange() && (
            <p className=" w-full text-center absolute top-2 text-[#ff2c2c] text-xs font-normal">
              09:00-11:30 хооронд захиалга өгөх боломжтой
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
