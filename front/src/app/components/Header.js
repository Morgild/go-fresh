"use client";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { navItem } from "../common/constants";
import { useData } from "./providers/DataProvider";
import { Drawer } from "./Drawer";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { ProfileDropDown } from "./ProfileDropDown";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showDrop, setShowDrop] = useState(false);
  const { user, error, isLoading } = useUser();
  const { basket, setShowDrawer, setSearchValue } = useData();
  return (
    <header className="sticky top-0 z-[4] bg-[#FFFFFFF0] shadow-xs shadow-black">
      <section className="flex justify-between bg-red-400 items-center max-w-[1280px] m-auto py-2 px-3 md:px-6 ">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="flex gap-1 items-center cursor-pointer"
        >
          <h1 className="text-black text-sm md:text-xl font-semibold">
            Go Fresh
          </h1>
          <span className="text-main text-lg md:text-2xl font-bold">.</span>
        </div>
        <ul className="md:flex hidden gap-6">
          {navItem.map((item, index) => (
            <li
              onClick={() => {
                router.push(item.path);
              }}
              key={index}
              className={`cursor-pointer text-sm font-bold ${
                item.path == pathname ? "text-main" : "text-black"
              } py-2 px-4 `}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 font-medium">
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="border border-gray rounded-lg md:py-2 pl-1 md:px-4 md:max-w-[200px] max-w-[100px]"
            type="search"
            placeholder="Хайх"
          />
          <div
            onClick={() => {
              setShowDrawer(true);
            }}
            className="flex gap-2 cursor-pointer items-center"
          >
            <div className="relative flex text-xl md:text-2xl ">
              <MdOutlineShoppingBasket />
              {Boolean(basket.length) && (
                <div className="absolute bottom-[-30%] right-[-30%] rounded-full  flex items-center justify-center">
                  <p className="w-3 h-3 md:w-4 md:h-4 bg-white shadow-sm shadow-black text-[8px] md:text-xs font-semibold text-[#ff2c2c] rounded-full flex items-center justify-center">
                    {basket.length}
                  </p>
                </div>
              )}
            </div>

            <p className="hidden md:flex text-sm font-bold">Сагс</p>
          </div>
          <div
            onClick={() => {
              setShowDrop((prev) => !prev);
            }}
            className="flex gap-2 cursor-pointer items-center relative"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
              {!user ? (
                <MdOutlinePersonOutline size={24} />
              ) : (
                <Image
                  src={user.picture}
                  alt="profile picture"
                  fill
                  sizes="small"
                />
              )}
            </div>
            <p className="hidden md:flex text-sm font-bold">
              {user ? user.nickname : "Хэрэглэгч"}
            </p>
            {showDrop && <ProfileDropDown user={user} />}
          </div>
        </div>
        <div className="flex md:hidden">
          <GiHamburgerMenu />
        </div>
        <Drawer />
      </section>
    </header>
  );
};
