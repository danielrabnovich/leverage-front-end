import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type TopbarUIHUTType = {
  className?: string;

  /** Style props */
  topbarUIHUTTop?: CSSProperties["top"];
  topbarUIHUTPosition?: CSSProperties["position"];
};

const TopbarUIHUT: NextPage<TopbarUIHUTType> = ({
  className = "",
  topbarUIHUTTop,
  topbarUIHUTPosition,
}) => {
  const topbarUIHUTStyle: CSSProperties = useMemo(() => {
    return {
      top: topbarUIHUTTop,
      position: topbarUIHUTPosition,
    };
  }, [topbarUIHUTTop, topbarUIHUTPosition]);

  return (
    <header
      className={`self-stretch shadow-[0px_4px_32px_rgba(0,_0,_0,_0.06)] bg-color-guide-black-white-white flex flex-row items-start justify-between py-3 px-[30px] top-[0] z-[99] sticky gap-5 text-left text-5xl text-primary-black font-inter ${className}`}
      style={topbarUIHUTStyle}
    >
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <a className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]">
          Good Morning
        </a>
      </div>
      <div className="h-11 rounded-3xl border-whitesmoke-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-[11px]">
        <Image
          className="h-5 w-5 relative"
          loading="lazy"
          width={20}
          height={20}
          alt=""
          src="/vuesaxlinearnotificationbing.svg"
        />
      </div>
    </header>
  );
};

export default TopbarUIHUT;
