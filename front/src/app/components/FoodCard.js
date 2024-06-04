"use client";
import Image from "next/image";
import { FoodDetail } from "./FoodDetail";
import { useState } from "react";
import { useData } from "./providers/DataProvider";

export const FoodCard = (props) => {
  const { numberFormat } = useData();
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setShowDetail(true);
        }}
        className="flex flex-col rounded-lg p-2 gap-3 cursor-pointer"
      >
        <figure className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-sm shadow-black">
          <Image
            style={{ objectFit: "cover" }}
            alt="food"
            src={props.foodImg ? props.foodImg : "/gofresh.png"}
            fill
            sizes="medium"
          />
        </figure>
        <div className="font-semibold">
          <p className="text-black text-md md:text-lg">{props.foodName}</p>
          <p className="text-main text-sm md:text-md">
            {numberFormat.format(props.foodPrice)}₮
          </p>
        </div>
      </div>
      {showDetail && (
        <FoodDetail
          foodName={props.foodName}
          foodImg={props.foodImg}
          foodPrice={props.foodPrice}
          foodIngredient={props.foodIngredient}
          foodCategory={props.foodCategory}
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
};
