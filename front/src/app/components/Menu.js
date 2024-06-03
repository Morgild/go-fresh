"use client";
import { foodList } from "../common/constants";
import { FoodCard } from "./FoodCard";
import { ProfileDropDown } from "./ProfileDropdown";
import { SalesTitle } from "./SalesTitle";
import { useData } from "./providers/DataProvider";

export const Menu = () => {
  const { searchValue } = useData();
  return (
    <section className="py-10">
      <div className="max-w-[1280px] m-auto">
        <SalesTitle title="Эрэлт ихтэй хоолнууд" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {foodList
            .filter((food) =>
              food.foodName
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((food, index) => (
              <FoodCard
                key={index}
                foodName={food.foodName}
                foodPrice={food.foodPrice}
                foodImg={food.foodImg}
                foodCategory={food.category}
                foodIngredient={food.foodIngredient}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
