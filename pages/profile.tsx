import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import TopbarUIHUT from "../components/topbar-u-i-h-u-t";

const Profile: NextPage = () => {
  return (
    <div className="w-full relative bg-color-guide-black-white-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq850:pl-5 mq850:pr-5 mq850:box-border">
      <FrameComponent
        frameDivHeight="unset"
        frameDivFlex="unset"
        frameDivJustifyContent="flex-start"
        frameDivGap="30px"
        frameDivPadding="0px 0px 18px"
        frameDivBackgroundColor="unset"
        vuesaxboldelement4="/vuesaxboldelement41.svg"
        homeColor="#5a5a5a"
        frameDivBackgroundColor1="#101010"
        vuesaxboldframe="/vuesaxboldframe1.svg"
        profileColor="#fff"
      />
      <main className="flex-1 flex flex-col items-start justify-start gap-[34px] max-w-[calc(100%_-_235px)] mq850:max-w-full mq675:gap-[17px]">
        <TopbarUIHUT topbarUIHUTTop="0" topbarUIHUTPosition="sticky" />
        <section className="w-[908px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-5xl text-primary-black font-inter">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
              My Profile
            </h2>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[30px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
                  <div className="self-stretch rounded-3xs bg-gray-100 border-gray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start flex-wrap content-start py-[18px] pl-[19px] pr-[229px] gap-6 min-h-[102px] max-w-full mq450:pr-5 mq450:box-border mq850:pr-[114px] mq850:box-border">
                    <Image
                      className="h-[62px] w-[62px] relative rounded-lg object-cover mix-blend-luminosity"
                      loading="lazy"
                      width={62}
                      height={62}
                      alt=""
                      src="/rectangle-20@2x.png"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start min-w-[333px] max-w-full mq450:gap-[33px] mq675:gap-[67px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-2.5 max-w-full">
                        <h3 className="m-0 self-stretch relative text-xl leading-[28px] font-semibold font-inter text-primary-black text-left mq450:text-base mq450:leading-[22px]">
                          Andrew C. Smalls
                        </h3>
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="relative text-base leading-[24px] font-inter text-body-text text-left">
                            AI, Web Development
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-gray-100 border-gray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-5 max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                      <h2 className="m-0 relative text-5xl leading-[32px] font-semibold font-inter text-primary-black text-left mq450:text-lgi mq450:leading-[26px]">
                        Personal Information
                      </h2>
                      <div className="h-9 rounded-lg bg-color-guide-black-white-white border-cod-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 px-2 gap-2.5">
                        <Image
                          className="h-5 w-5 relative"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/vuesaxlinearedit2.svg"
                        />
                        <div className="relative text-sm leading-[20px] font-medium font-inter text-cod-gray-200 text-left">
                          Edit
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                      <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq675:flex-wrap">
                            <div className="flex flex-row items-center justify-start gap-2">
                              <Image
                                className="h-5 w-5 relative"
                                loading="lazy"
                                width={20}
                                height={20}
                                alt=""
                                src="/vuesaxlinearprofile.svg"
                              />
                              <div className="relative text-sm tracking-[0.01em] leading-[20px] font-inter text-primary-black text-left inline-block min-w-[41px]">
                                Name
                              </div>
                            </div>
                            <div className="w-[251px] flex flex-row items-center justify-end">
                              <div className="relative text-sm tracking-[0.01em] leading-[140%] font-inter text-cod-gray-500 text-left inline-block min-w-[119px]">
                                Lloyd R. Sherman
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq675:flex-wrap">
                            <div className="flex flex-row items-center justify-start gap-2">
                              <Image
                                className="h-5 w-5 relative"
                                width={20}
                                height={20}
                                alt=""
                                src="/vuesaxlinearbriefcase.svg"
                              />
                              <div className="relative text-sm tracking-[0.01em] leading-[20px] font-inter text-primary-black text-left">
                                Experience
                              </div>
                            </div>
                            <input
                              className="w-[251px] [border:none] [outline:none] bg-[transparent] flex flex-row items-center justify-end py-0 px-[201px] box-border font-inter text-sm text-cod-gray-500"
                              placeholder="8 years"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq675:flex-wrap">
                            <div className="flex flex-row items-center justify-start gap-2">
                              <Image
                                className="h-5 w-5 relative"
                                loading="lazy"
                                width={20}
                                height={20}
                                alt=""
                                src="/vuesaxlinearbuildings.svg"
                              />
                              <div className="relative text-sm tracking-[0.01em] leading-[20px] font-inter text-primary-black text-left">
                                Clubs/organizations
                              </div>
                            </div>
                            <div className="w-[251px] flex flex-row items-center justify-end">
                              <div className="relative text-sm tracking-[0.01em] leading-[140%] font-inter text-cod-gray-500 text-left">
                                Ux Design, Google
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq675:flex-wrap">
                            <div className="flex flex-row items-center justify-start gap-2">
                              <Image
                                className="h-5 w-5 relative"
                                width={20}
                                height={20}
                                alt=""
                                src="/vuesaxlinearteacher.svg"
                              />
                              <div className="relative text-sm tracking-[0.01em] leading-[20px] font-inter text-primary-black text-left">
                                Education
                              </div>
                            </div>
                            <input
                              className="w-[251px] [border:none] [outline:none] bg-[transparent] flex flex-row items-center justify-end py-0 px-[148px] box-border font-inter text-sm text-cod-gray-500"
                              placeholder="ABC, university"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-color-guide-black-white-white flex flex-col items-start justify-start py-[18px] px-4 box-border max-w-full">
                        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq675:flex-wrap">
                            <div className="flex flex-row items-center justify-start gap-2">
                              <Image
                                className="h-5 w-5 relative"
                                width={20}
                                height={20}
                                alt=""
                                src="/vuesaxlinearaward.svg"
                              />
                              <div className="relative text-sm tracking-[0.01em] leading-[20px] font-inter text-primary-black text-left">
                                Awards/achievements.
                              </div>
                            </div>
                            <input
                              className="w-[251px] [border:none] [outline:none] bg-[transparent] flex flex-row items-center justify-end py-0 px-[126px] box-border font-inter text-sm text-cod-gray-500"
                              placeholder="Ux Design, Google"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
                  <div className="rounded-lg bg-primary-black flex flex-row items-center justify-center py-4 px-[58px]">
                    <div className="relative text-lg leading-[28px] font-semibold font-inter text-color-guide-black-white-white text-left inline-block min-w-[44px]">
                      Save
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
