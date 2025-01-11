import type { NextPage } from "next";
import Image from "next/image";
import Navigation1 from "../components/navigation1";

const Tracker: NextPage = () => {
  return (
    <div className="w-full relative bg-color-guide-black-white-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-21xl text-gray-200 font-inter mq950:pl-5 mq950:pr-5 mq950:box-border">
      <div className="bg-whitesmoke-200 flex flex-col items-start justify-start pt-[30px] px-6 pb-[602px] gap-11 mq450:pb-[254px] mq450:box-border mq950:hidden mq950:pt-5 mq950:pb-[391px] mq950:box-border">
        <a className="[text-decoration:none] self-stretch relative leading-[48px] font-semibold text-[inherit] mq450:text-5xl mq450:leading-[29px] mq950:text-13xl mq950:leading-[38px]">
          Logo
        </a>
        <nav className="m-0 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[30px] text-center text-sm text-cod-gray-500 font-inter">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-3.5 pl-5 pr-24 gap-2.5 text-body-text">
            <Image
              className="h-5 w-5 relative"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/vuesaxboldelement41.svg"
            />
            <a className="[text-decoration:none] flex-1 relative leading-[20px] text-[inherit]">
              Home
            </a>
          </div>
          <div className="self-stretch rounded-lg bg-primary-black flex flex-row items-center justify-start py-3.5 pl-5 pr-[85px] gap-2.5 text-color-guide-black-white-white">
            <Image
              className="h-5 w-5 relative"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/vuesaxboldgps1.svg"
            />
            <div className="flex-1 relative leading-[20px] font-medium">
              Tracker
            </div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-3.5 pl-5 pr-[93px] gap-2.5">
            <Image
              className="h-5 w-5 relative"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/vuesaxboldframe.svg"
            />
            <div className="flex-1 relative leading-[20px]">Profile</div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-3.5 pl-5 pr-[89px] gap-2.5">
            <Image
              className="h-5 w-5 relative"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/vuesaxlinearlogout.svg"
            />
            <div className="flex-1 relative leading-[20px]">Logout</div>
          </div>
        </nav>
      </div>
      <Navigation1 />
    </div>
  );
};

export default Tracker;
