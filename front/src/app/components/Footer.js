"use client";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { navItem, phoneNumber } from "../common/constants";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer
      className="bg-main py-[90px]"
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundSize: "contain",
      }}
    >
      <section className="flex flex-col gap-8 items-center max-w-[1280px] m-auto py-2 px-6">
        <p className="text-xl font-bold text-white m-auto">Go Fresh.</p>
        <ul className="flex gap-6">
          {navItem.map((item, index) => (
            <li
              onClick={() => {
                router.push(item.path);
              }}
              key={index}
              className="cursor-pointer text-sm font-bold text-white py-2 px-4"
            >
              {item.text}
            </li>
          ))}
        </ul>
        <SocialLinks />
        <div className="w-full border border-white"></div>
        <div className="flex gap-2 font-normal text-white">
          <p className="flex">Утасны дугаар:</p>
          {phoneNumber.map((phone, index) => (
            <p key={index}>{phone}</p>
          ))}
        </div>
      </section>
    </footer>
  );
};
