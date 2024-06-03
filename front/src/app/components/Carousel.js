import Image from "next/image";

export const Carousel = () => {
  return (
    <section
      className="bg-main py-[50px] md:py-[117px]"
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundSize: "contain",
      }}
    >
      <div className="flex w-full max-w-[1280px] m-auto relative items-center">
        <div className="w-1/2 text-2xl md:text-5xl font-semibold text-white px-2">
          <h3>Go Fresh.</h3>
          <p className="text-lg md:text-3xl">Fastfood restaurant</p>
        </div>
        <div className="relative w-[40%] md:w-[20%] m-auto aspect-square">
          <Image src={"/food.png"} alt="food" fill sizes="medium" />
        </div>
      </div>
    </section>
  );
};
