import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useData } from "./providers/DataProvider";
export const BasketFoodCard = (props) => {
  const { basket, setBasket, numberFormat } = useData();
  return (
    <div className="flex w-full p-3 gap-2 border-t border-t-[#D6D8DB]">
      <figure className="w-1/2 aspect-[2/1] relative bg-gray rounded-lg overflow-hidden border border-gray">
        <Image
          alt="food image"
          style={{ objectFit: "cover" }}
          src={props.foodImg ? props.foodImg : "/gofresh.png"}
          fill
          sizes="small"
        />
      </figure>
      <div className="flex w-1/2 flex-col gap-2">
        <div className="flex items-center justify-between px-2">
          <h3>{props.foodName}</h3>
          <IoClose
            onClick={() => {
              const newBasket = basket.filter(
                (element) => element.foodName != props.foodName
              );
              setBasket(newBasket);
            }}
            className="cursor-pointer"
            size={24}
          />
        </div>
        <p className="text-lg font-bold text-main px-2">
          {numberFormat.format(props.foodPrice)}₮
        </p>
        <div className="flex w-2/3 items-center justify-between text-white">
          <div
            onClick={() => {
              const newBasket = basket.map((element) => {
                if (element.foodName == props.foodName) {
                  if (element.foodCount > 1) {
                    element.foodCount -= 1;
                  }
                  return element;
                } else {
                  return element;
                }
              });
              setBasket(newBasket);
            }}
            className="rounded-lg bg-main py-2 px-2 cursor-pointer"
          >
            <FaMinus size={16} />
          </div>
          <div className="text-black text-lg font-medium ">
            {props.foodCount}
          </div>
          <div
            onClick={() => {
              const newBasket = basket.map((element) => {
                if (element.foodName == props.foodName) {
                  element.foodCount += 1;
                  return element;
                } else {
                  return element;
                }
              });
              setBasket(newBasket);
            }}
            className="rounded-lg bg-main py-2 px-2 cursor-pointer"
          >
            <FaPlus size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
