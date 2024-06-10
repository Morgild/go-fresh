"use client";
import Image from "next/image";
import { FoodDetail } from "./FoodDetail";
import { useState } from "react";
import { useData } from "./providers/DataProvider";

export const FoodCard = ({ name, image, price, ingredient, category }) => {
  const { numberFormat } = useData();
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setShowDetail(true);
        }}
        className="flex flex-col rounded-lg p-2 gap-3 cursor-pointer select-none "
      >
        <figure className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-sm shadow-black bg-main">
          <Image
            style={{ objectFit: "cover" }}
            alt="food"
            src={image ? image : "/gofresh.png"}
            fill
            sizes="medium"
          />
        </figure>
        <div className="font-semibold">
          <p className="text-black text-md md:text-lg">{name}</p>
          <p className="text-main text-sm md:text-md">
            {numberFormat.format(price)}₮
          </p>
        </div>
      </div>
      {showDetail && (
        <FoodDetail
          name={name}
          image={image}
          price={price}
          ingredient={ingredient}
          category={category}
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
};
