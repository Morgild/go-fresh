"use client";
import { useState } from "react";
import { Categories } from "./_components/Categories";
import { FoodCard } from "../components/FoodCard";
import { useData } from "../components/providers/DataProvider";

export default function MenuPage() {
  const [category, setCategory] = useState("");
  const { searchValue, foods } = useData();

  return (
    <div className="max-w-[1280px] m-auto flex flex-col">
      <Categories setCategory={setCategory} category={category} />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 px-3 md:px-0">
        {foods
          .filter((food) => food.foodcategory.includes(category))
          .filter((food) =>
            food.foodname.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((food, index) => (
            <FoodCard
              key={index}
              foodName={food.foodname}
              foodPrice={food.foodprice}
              foodImg={food.foodimg}
              foodIngredient={food.foodingredient}
              foodCategory={food.foodcategory}
            />
          ))}
      </div>
    </div>
  );
}
