"use client";
// import { categories } from "@/app/common/constants";
import { useData } from "@/app/components/providers/DataProvider";

export const Categories = ({ filterCategory, setFilterCategory }) => {
  const { categories } = useData();
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 py-8 px-3">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => {
            setFilterCategory(category.name);
          }}
          className={`flex w-full py-2 px-4 rounded-lg items-center justify-center border border-[#D6D8DB] cursor-pointer ${
            category.name == filterCategory
              ? "bg-main text-white"
              : "bg-white text-black"
          }`}
        >
          <p className="text-lg">{category.name}</p>
        </div>
      ))}
    </div>
  );
};
