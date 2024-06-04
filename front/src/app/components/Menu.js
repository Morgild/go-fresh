"use client";
import { foodList } from "../common/constants";
import { FoodCard } from "./FoodCard";
import { SalesTitle } from "./SalesTitle";
import { useData } from "./providers/DataProvider";

export const Menu = () => {
  const { searchValue, foods } = useData();
  return (
    <section className="py-10">
      <div className="max-w-[1280px] m-auto">
        <SalesTitle title="Эрэлт ихтэй хоолнууд" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {foods
            .filter((food) =>
              food.foodname
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((food, index) => (
              <FoodCard
                key={index}
                foodName={food.foodname}
                foodPrice={food.foodprice}
                foodImg={food.foodimg}
                foodCategory={food.foodcategory}
                foodIngredient={food.foodingredient}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
