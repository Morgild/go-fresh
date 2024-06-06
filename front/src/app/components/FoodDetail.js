"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useData } from "./providers/DataProvider";

export const FoodDetail = ({
  setShowDetail,
  image,
  name,
  price,
  category,
  ingredient,
}) => {
  const [count, setCount] = useState(1);
  const { basket, setBasket, numberFormat } = useData();
  const changeFoodCount = (change) => {
    setCount((prev) => {
      if (change < 0 && prev == 1) return prev;
      return prev + change;
    });
  };
  return (
    <section className="fixed z-20 top-0 left-0 h-screen w-screen  items-center justify-center">
      <div
        onClick={() => {
          setShowDetail(false);
        }}
        className="fixed z-30 top-0 left-0 h-screen w-screen bg-[#00000080]"
      ></div>
      <div className="flex flex-col md:flex-row max-w-[800px] w-[90%] md:w-[700px] p-4 md:p-8 gap-4 rounded-lg md:rounded-2xl bg-white  absolute z-30 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <div className="md:w-1/2 w-full aspect-[2/1] overflow-hidden rounded-md md:rounded-lg relative">
          <Image
            alt="food image"
            style={{ objectFit: "cover" }}
            fill
            src={image ? image : "/gofresh.png"}
            sizes="medium"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <h3 className="text-xl md:text-2xl text-black">{name}</h3>
              <p className="cursor-pointer">
                <IoMdClose
                  size={24}
                  onClick={() => {
                    setShowDetail(false);
                  }}
                />
              </p>
            </div>

            <p className="text-sm md:text-lg font-semibold text-main">
              {numberFormat.format(price)}₮
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm md:text-lg font-semibold text-black">Орц</h3>
            <p className="text-base font-normal text-[#767676] rounded-lg p-2 bg-[#F6F6F6]">
              {ingredient}
            </p>
          </div>
          <h3 className="text-sm md:text-lg font-semibold text-black">Тоо</h3>
          <div className="flex justify-between items-center text-white">
            <div
              onClick={() => {
                changeFoodCount(-1);
              }}
              className="rounded-lg bg-main p-2 md:p-3 cursor-pointer"
            >
              <FaMinus size={16} />
            </div>
            <div className="text-black text-lg font-medium select-none">
              {count}
            </div>
            <div
              onClick={() => {
                changeFoodCount(1);
              }}
              className="rounded-lg bg-main p-2 md:p-3 cursor cursor-pointer"
            >
              <FaPlus size={16} />
            </div>
          </div>
          <button
            onClick={() => {
              let inBasket = false;
              const newBasket = basket.map((element) => {
                if (element.name == name) {
                  inBasket = true;
                  element.count += count;
                  return element;
                } else {
                  return element;
                }
              });
              if (!inBasket) {
                setBasket([
                  ...basket,
                  {
                    name,
                    category,
                    ingredient,
                    price,
                    image,
                    count,
                  },
                ]);
              } else {
                setBasket(newBasket);
              }
              setShowDetail(false);
            }}
            className="w-full rounded py-2 px-4 bg-main text-white select-none"
          >
            Сагслах
          </button>
        </div>
      </div>
    </section>
  );
};
