"use client";
import { IoMdPower, IoIosLogIn } from "react-icons/io";

export const ProfileDropDown = ({ user }) => {
  return (
    <div className="absolute top-[100%]">
      <div className="fixed h-screen w-screen bg-[#ffffff00] left-0 top-0 z-[40]"></div>
      <div className="flex flex-col w-fit rounded-lg   bg-white border border-[#D6D8DB] absolute z-[50]">
        {!user ? (
          <a href="http://localhost:3000/api/auth/login">
            <div className="flex gap-2 items-center justify-start py-2 px-4 text-base text-black font-normal ">
              <IoIosLogIn size={18} />
              <p>Нэвтрэх</p>
            </div>
          </a>
        ) : (
          <a href="http://localhost:3000/api/auth/logout">
            <div className="flex gap-2 items-center justify-start py-2 px-4 text-base text-black font-normal border-t border-t-[#D6D8DB] ">
              <IoMdPower size={18} />
              <p>Гарах</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
