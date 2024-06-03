"use client";
import { useState } from "react";
import { Categories } from "./_components/Categories";
import { foodList } from "../common/constants";
import { FoodCard } from "../components/FoodCard";
import { useData } from "../components/providers/DataProvider";

export default function Menu() {
  const [category, setCategory] = useState("");
  const { searchValue } = useData();
  return (
    <div className="max-w-[1280px] m-auto flex flex-col">
      <Categories setCategory={setCategory} category={category} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-3 md:px-0">
        {foodList
          .filter((food) => food.category.includes(category))
          .filter((food) =>
            food.foodName.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((food, index) => (
            <FoodCard
              key={index}
              foodName={food.foodName}
              foodPrice={food.foodPrice}
              foodImg={food.foodImg}
              foodIngredient={food.foodIngredient}
              foodCategory={food.category}
            />
          ))}
      </div>
    </div>
  );
}
