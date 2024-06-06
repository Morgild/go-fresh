"use client";
import { FoodCard } from "./FoodCard";
import { SalesTitle } from "./SalesTitle";
import { useData } from "./providers/DataProvider";
import { foodList } from "../common/constants";

export const Menu = () => {
  const { searchValue, foods } = useData();
  return (
    <section className="py-10">
      <div className="max-w-[1280px] m-auto">
        <SalesTitle title="Эрэлт ихтэй хоолнууд" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {foodList
            .filter((food) =>
              food.name
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((food, index) => (
              <FoodCard
                key={index}
                name={food.name}
                price={food.price}
                image={food.image}
                category={food.category}
                ingredient={food.ingredient}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
