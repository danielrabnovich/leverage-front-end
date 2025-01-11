import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  vuesaxboldelement4: string;
  vuesaxboldframe: string;

  /** Style props */
  frameDivHeight?: CSSProperties["height"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivGap?: CSSProperties["gap"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  homeColor?: CSSProperties["color"];
  frameDivBackgroundColor1?: CSSProperties["backgroundColor"];
  profileColor?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  frameDivHeight,
  frameDivFlex,
  frameDivJustifyContent,
  frameDivGap,
  frameDivPadding,
  frameDivBackgroundColor,
  vuesaxboldelement4,
  homeColor,
  frameDivBackgroundColor1,
  vuesaxboldframe,
  profileColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
      padding: frameDivPadding,
    };
  }, [frameDivFlex, frameDivJustifyContent, frameDivGap, frameDivPadding]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor1,
    };
  }, [frameDivBackgroundColor1]);

  const profileStyle: CSSProperties = useMemo(() => {
    return {
      color: profileColor,
    };
  }, [profileColor]);

  return (
    <div
      className={`h-[1024px] bg-whitesmoke-200 flex flex-col items-start justify-start pt-[30px] px-6 pb-[602px] box-border gap-11 text-left text-21xl text-gray-200 font-inter mq1050:hidden mq1050:pt-5 mq1050:pb-[391px] mq1050:box-border mq450:pb-[254px] mq450:box-border ${className}`}
      style={frameDivStyle}
    >
      <a className="[text-decoration:none] self-stretch relative leading-[48px] font-semibold text-[inherit] mq1050:text-13xl mq1050:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
        Logo
      </a>
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-between text-center text-sm text-cod-gray-500"
        style={frameDiv1Style}
      >
        <div
          className="self-stretch rounded-lg bg-primary-black flex flex-row items-center justify-start py-3.5 pl-5 pr-24 gap-2.5 text-color-guide-black-white-white"
          style={frameDiv2Style}
        >
          <Image
            className="h-5 w-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src={vuesaxboldelement4}
          />
          <a
            className="[text-decoration:none] flex-1 relative leading-[16px] font-semibold text-[inherit]"
            style={homeStyle}
          >
            Home
          </a>
        </div>
        <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-3.5 pl-5 pr-[86px] gap-2.5">
          <Image
            className="h-5 w-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src="/vuesaxboldgps.svg"
          />
          <div className="flex-1 relative leading-[16px]">Tracker</div>
        </div>
        <div
          className="self-stretch rounded-lg flex flex-row items-center justify-start py-3.5 pl-5 pr-[93px] gap-2.5"
          style={frameDiv3Style}
        >
          <Image
            className="h-5 w-5 relative"
            loading="lazy"
            width={20}
            height={20}
            alt=""
            src={vuesaxboldframe}
          />
          <div className="flex-1 relative leading-[16px]" style={profileStyle}>
            Profile
          </div>
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
          <div className="flex-1 relative leading-[16px]">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
