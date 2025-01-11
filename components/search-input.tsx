import type { NextPage } from "next";
import Image from "next/image";

export type SearchInputType = {
  className?: string;
  search?: string;
};

const SearchInput: NextPage<SearchInputType> = ({ className = "", search }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-6 max-w-full ${className}`}
    >
      <div className="flex-1 rounded-lg border-cod-gray-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3.5 pl-4 pr-[640px] gap-2.5 min-h-[60px] max-w-full mq750:pr-40 mq750:box-border mq1050:pr-80 mq1050:box-border">
        <Image
          className="h-6 w-6 relative"
          width={24}
          height={24}
          alt=""
          src="/vuesaxlinearsearchnormal.svg"
        />
        <input
          className="w-[269px] [border:none] [outline:none] font-inter text-lg bg-[transparent] relative leading-[28px] text-cod-gray-500 text-left inline-block p-0"
          placeholder="Type a name, industry, or role..."
          type="text"
        />
      </div>
      <button className="cursor-pointer [border:none] py-4 px-[49px] bg-primary-black rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray">
        <div className="relative text-lg leading-[28px] font-semibold font-inter text-color-guide-black-white-white text-left">
          {search}
        </div>
      </button>
    </div>
  );
};

export default SearchInput;
