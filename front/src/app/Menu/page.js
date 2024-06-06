"use client";
import { useState } from "react";
import { Categories } from "./_components/Categories";
import { FoodCard } from "../components/FoodCard";
import { useData } from "../components/providers/DataProvider";
import { foodList } from "../common/constants";

export default function MenuPage() {
  const [filterCategory, setFilterCategory] = useState("");
  const { searchValue, foods } = useData();

  return (
    <div className="max-w-[1280px] m-auto flex flex-col">
      <Categories
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
      />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 px-3 md:px-0">
        {foodList
          .filter((food) => food.category.includes(filterCategory))
          .filter((food) =>
            food.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((food, index) => (
            <FoodCard
              key={index}
              name={food.name}
              price={food.price}
              image={food.image}
              ingredient={food.ingredient}
              category={food.category}
            />
          ))}
      </div>
    </div>
  );
}
