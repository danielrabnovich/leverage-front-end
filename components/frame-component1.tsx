import type { NextPage } from "next";
import SearchInput from "./search-input";
import Home from "../pages/home";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-5xl text-primary-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start">
            <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
              Find your next match
            </h3>
          </div>
          <SearchInput search="Search" />
        </div>
        <Home />
      </div>
    </div>
  );
};

export default FrameComponent1;
