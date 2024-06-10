"use client";
import Image from "next/image";
import { IoMdPower, IoIosLogIn } from "react-icons/io";

export const ProfileDropDown = ({ user }) => {
  return (
    <div className="absolute top-[100%] left-[100%]">
      <div className="fixed h-screen w-screen bg-[#ffffff00] left-0 top-0 z-[40]"></div>
      <div className="flex flex-col w-fit rounded-lg bg-[#FFFFFFF0] shadow-sm shadow-black   border border-[#D6D8DB] absolute z-[50] right-0">
        {!user ? (
          <a href="http://localhost:3000/api/auth/login">
            <div className="flex gap-2 items-center justify-start py-2 px-4 text-base text-black font-normal ">
              <IoIosLogIn size={18} />
              <p>Нэвтрэх</p>
            </div>
          </a>
        ) : (
          <div className="flex flex-col">
            <div className="flex w-full  gap-2 p-4 items-center">
              <figure className="relative w-full aspect-square rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={user.picture}
                  alt="profile picture"
                  fill
                  sizes="small"
                />
              </figure>
            </div>
            <p className="py-2 px-4 text-base text-black text-center w-full">
              {user.nickname}
            </p>
            <p className="py-2 px-4 text-base text-black font-normal text-center w-full">
              {user.email}
            </p>
            <a href="http://localhost:3000/api/auth/logout">
              <div className="flex gap-2 items-center w-full justify-center py-2 px-4 text-base text-black font-normal border-t border-t-[#D6D8DB] ">
                <IoMdPower size={18} />
                <p>Гарах</p>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
