import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import TopbarUIHUT from "../components/topbar-u-i-h-u-t";

const Home1: NextPage = () => {
  return (
    <div className="w-full h-[1024px] relative bg-color-guide-black-white-white overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[146px] box-border leading-[normal] tracking-[normal] mq975:pl-5 mq975:pr-5 mq975:box-border mq450:h-auto">
      <FrameComponent
        frameDivHeight="unset"
        frameDivFlex="unset"
        frameDivJustifyContent="flex-start"
        frameDivGap="30px"
        frameDivPadding="unset"
        frameDivBackgroundColor="#101010"
        vuesaxboldelement4="/vuesaxboldelement4.svg"
        homeColor="#fff"
        frameDivBackgroundColor1="unset"
        vuesaxboldframe="/vuesaxboldframe.svg"
        profileColor="#6d6d6d"
      />
      <main className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-[calc(100%_-_235px)] mq975:max-w-full">
        <TopbarUIHUT topbarUIHUTTop="unset" topbarUIHUTPosition="unset" />
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-xl text-primary-black font-inter">
          <div className="flex-1 rounded-3xs bg-gray-100 flex flex-col items-start justify-start p-6 box-border max-w-full mq700:pt-5 mq700:pb-5 mq700:box-border">
            <div className="self-stretch flex flex-col items-end justify-start max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full mq700:gap-4">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
                    <div className="self-stretch rounded-3xs bg-color-guide-black-white-white border-gray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[18px] px-[19px] gap-6 min-h-[102px] max-w-full mq975:flex-wrap">
                      <Image
                        className="h-[62px] w-[62px] relative rounded-lg object-cover mix-blend-luminosity"
                        loading="lazy"
                        width={62}
                        height={62}
                        alt=""
                        src="/rectangle-20@2x.png"
                      />
                      <div className="w-[389px] flex flex-row items-start justify-start py-0 px-0 box-border min-w-[253px] max-w-full mq450:gap-[67px]">
                        <div className="flex flex-col items-start justify-start gap-2.5 max-w-[132%]">
                          <h3 className="m-0 w-[513px] relative text-inherit leading-[28px] font-semibold font-[inherit] inline-block mq450:text-base mq450:leading-[22px]">
                            Andrew C. Smalls
                          </h3>
                          <div className="self-stretch flex flex-row items-center justify-start text-base text-body-text">
                            <div className="relative leading-[24px]">
                              AI, Web Development
                            </div>
                          </div>
                        </div>
                      </div>
                      <nav className="m-0 flex flex-row items-start justify-start gap-6 max-w-full mq700:flex-wrap">
                        <button className="cursor-pointer border-primary-black border-[1px] border-solid py-3.5 px-[23px] bg-[transparent] rounded-lg flex flex-col items-start justify-start">
                          <div className="flex flex-row items-center justify-center">
                            <div className="relative text-lg leading-[28px] font-medium font-inter text-primary-black text-left shrink-0">
                              Find another match
                            </div>
                          </div>
                        </button>
                        <button className="cursor-pointer border-primary-black border-[1px] border-solid py-3.5 px-[23px] bg-[transparent] rounded-lg flex flex-col items-start justify-start">
                          <div className="flex flex-row items-center justify-center">
                            <div className="relative text-lg leading-[28px] font-medium font-inter text-primary-black text-left inline-block min-w-[125px]">{`Add to tracker `}</div>
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-4 px-6 bg-primary-black rounded-lg flex flex-col items-start justify-start">
                          <div className="flex flex-row items-center justify-center">
                            <div className="relative text-lg leading-[28px] font-medium font-inter text-color-guide-black-white-white text-left inline-block min-w-[75px]">
                              Connect
                            </div>
                          </div>
                        </button>
                      </nav>
                    </div>
                    <div className="self-stretch rounded-3xs bg-gray-100 border-gray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start max-w-full text-sm">
                      <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                        <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq700:flex-wrap">
                              <div className="flex flex-row items-center justify-start gap-2">
                                <Image
                                  className="h-5 w-5 relative"
                                  loading="lazy"
                                  width={20}
                                  height={20}
                                  alt=""
                                  src="/vuesaxlinearprofile.svg"
                                />
                                <div className="relative leading-[20px]">
                                  Name
                                </div>
                              </div>
                              <div className="w-[251px] flex flex-row items-center justify-end text-cod-gray-500">
                                <div className="relative tracking-[0.01em] leading-[140%] inline-block min-w-[119px]">
                                  Lloyd R. Sherman
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq700:flex-wrap">
                              <div className="flex flex-row items-center justify-start gap-2">
                                <Image
                                  className="h-5 w-5 relative"
                                  loading="lazy"
                                  width={20}
                                  height={20}
                                  alt=""
                                  src="/vuesaxlinearbriefcase.svg"
                                />
                                <div className="relative leading-[20px] inline-block min-w-[75px]">
                                  Experience
                                </div>
                              </div>
                              <div className="w-[251px] flex flex-row items-center justify-end text-cod-gray-500">
                                <div className="relative tracking-[0.01em] leading-[140%]">
                                  8 years
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq700:flex-wrap">
                              <div className="flex flex-row items-center justify-start gap-2">
                                <Image
                                  className="h-5 w-5 relative"
                                  width={20}
                                  height={20}
                                  alt=""
                                  src="/vuesaxlinearbuildings.svg"
                                />
                                <div className="relative leading-[20px]">
                                  Clubs/organizations
                                </div>
                              </div>
                              <div className="w-[251px] flex flex-row items-center justify-end text-cod-gray-500">
                                <div className="relative tracking-[0.01em] leading-[140%]">
                                  Ux Design, Google
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq700:flex-wrap">
                              <div className="flex flex-row items-center justify-start gap-2">
                                <Image
                                  className="h-5 w-5 relative"
                                  width={20}
                                  height={20}
                                  alt=""
                                  src="/vuesaxlinearteacher.svg"
                                />
                                <div className="relative leading-[20px]">
                                  Education
                                </div>
                              </div>
                              <div className="w-[251px] flex flex-row items-center justify-end text-cod-gray-500">
                                <div className="relative tracking-[0.01em] leading-[140%]">
                                  ABC, university
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq700:flex-wrap">
                              <div className="flex flex-row items-center justify-start gap-2">
                                <Image
                                  className="h-5 w-5 relative"
                                  loading="lazy"
                                  width={20}
                                  height={20}
                                  alt=""
                                  src="/vuesaxlinearaward.svg"
                                />
                                <div className="relative leading-[20px]">
                                  Awards/achievements.
                                </div>
                              </div>
                              <div className="w-[251px] flex flex-row items-center justify-end text-cod-gray-500">
                                <div className="relative tracking-[0.01em] leading-[140%]">
                                  Ux Design, Google
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-5xl text-primary-black font-inter">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
              Sample Message
            </h2>
            <textarea
              className="border-cod-gray-100 border-[1px] border-solid bg-color-guide-black-white-white h-[182px] w-auto [outline:none] self-stretch rounded-[13.5px] box-border flex flex-row items-start justify-start p-5 font-inter text-base text-darkgray"
              placeholder="Type Message here..."
              rows={9}
              cols={57}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home1;
