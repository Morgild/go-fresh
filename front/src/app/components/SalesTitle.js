import Image from "next/image";

export const SalesTitle = (props) => {
  return (
    <div className="flex py-4 px-2 w-full gap-2 items-center justify-between">
      <div className="flex items-center gap-2">
        <figure className="relative w-5 h-5 aspect-square">
          <Image alt="star image" src={"/star.png"} fill sizes="small" />
        </figure>
        <p className="text-[#272727] text-xl font-bold">{props.title}</p>
      </div>
      <div className="text-main flex items-center gap-1">
        <p>Бүгдийг үзэх</p>
        <p className="text-2xl">&rsaquo;</p>
      </div>
    </div>
  );
};
