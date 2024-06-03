import { FaChevronLeft } from "react-icons/fa6";
import { useData } from "./providers/DataProvider";
import { BasketFoodCard } from "./BasketFoodCard";
export const Drawer = () => {
  const { showDrawer, setShowDrawer, basket, sumBasket, numberFormat } =
    useData();
  return (
    <div className="absolute">
      {showDrawer && (
        <div
          onClick={() => {
            setShowDrawer(false);
          }}
          className="fixed h-screen w-screen top-0 left-0 bg-[#00000080] z-[10] cursor-pointer"
        ></div>
      )}
      <div
        className={`fixed transition flex flex-col justify-between gap-10 bg-white h-[100vh] top-0 z-[30] w-full md:w-[30%] ${
          showDrawer ? "right-0" : "left-[100%]"
        } right-0`}
      >
        <div className="flex flex-col justify-start p-6">
          <div className="flex justify-between items-center relative pb-2">
            <p
              onClick={() => {
                setShowDrawer(false);
              }}
              className="py-0.5 px-1.5 absolute left-0 bg-white h-full flex items-center cursor-pointer"
            >
              <FaChevronLeft />
            </p>
            <p className="text-xl w-full text-center text-black">Таны сагс</p>
          </div>
          <div className="relative">
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
            disabled={!Boolean(sumBasket)}
            onClick={() => {
              console.log(basket);
            }}
            className="flex bg-main w-1/2 disabled:bg-gray disabled:cursor-default justify-center items-center text-white rounded-md py-2 px-4 text-base font-normal cursor-pointer"
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};
