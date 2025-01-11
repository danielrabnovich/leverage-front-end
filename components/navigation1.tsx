import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import TopbarUIHUT from "./topbar-u-i-h-u-t";
import SearchInput from "./search-input";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start gap-[34px] max-w-[calc(100%_-_235px)] text-left text-5xl text-primary-black font-inter mq700:gap-[17px] mq950:max-w-full ${className}`}
    >
      <TopbarUIHUT topbarUIHUTTop="unset" topbarUIHUTPosition="unset" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
              Relationships Tracker
            </h2>
            <SearchInput search="Submit" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
              Relationships Tracker
            </h2>
            <div
              className="self-stretch flex flex-col items-start justify-start gap-0.5 text-sm"
              data-acc-group
            >
              <div className="w-[1145px] h-11 rounded bg-whitesmoke-100 overflow-x-auto shrink-0 flex flex-row items-start justify-between py-3 px-4 box-border">
                <div className="h-5 w-40 shrink-0 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[41px] relative leading-[20px] font-semibold inline-block shrink-0">
                      Name
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] shrink-0 flex flex-row items-start justify-start py-0 pl-0 pr-4 box-border">
                  <div className="h-5 w-[84px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[85px] relative leading-[20px] font-semibold inline-block shrink-0">
                      Last Spoken
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 shrink-0 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[82px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[83px] relative leading-[20px] font-semibold inline-block shrink-0">
                      Designation
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] shrink-0 flex flex-row items-start justify-start py-0 pl-0 pr-[39px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] font-semibold inline-block shrink-0">
                      First Match
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] shrink-0 flex flex-row items-start justify-start py-0 pl-0 pr-6 box-border">
                  <div className="h-5 w-[76px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[77px] relative leading-[20px] font-semibold inline-block shrink-0">
                      Experience
                    </div>
                  </div>
                </div>
                <div className="h-5 w-11 shrink-0 flex flex-row items-start justify-start">
                  <div className="h-5 w-11 flex flex-row items-start justify-start">
                    <div className="h-5 w-[45px] relative leading-[20px] font-semibold inline-block shrink-0">
                      Action
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] h-11 rounded flex flex-row items-start justify-between py-3 px-4 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-5 w-40 flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-center justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                  <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                      25/12/2024
                    </div>
                  </div>
                </div>
                <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                      UI/Ux Designer
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                      Andrew C. Smalls
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                      4 Years
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                  <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                    <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <Image
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[1145px] hidden flex-col"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[1145px] h-11 rounded bg-whitesmoke-100 flex flex-row items-start justify-between py-3 px-4 box-border cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-5 w-40 flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-center justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start py-0 pl-0 pr-[23px] box-border">
                    <div className="h-5 w-[77px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[78px] relative leading-[20px] inline-block shrink-0">
                        25/12/2024
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-20 flex flex-row items-start justify-start py-0 px-0 box-border">
                    <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[101px] relative leading-[20px] inline-block shrink-0">
                        UI/Ux Designer
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                    <div className="h-5 w-[116px] flex flex-row items-start justify-start">
                      <div className="h-5 w-[117px] relative leading-[20px] inline-block shrink-0">
                        Andrew C. Smalls
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[100px] flex flex-row items-start justify-start">
                    <div className="h-5 flex flex-row items-start justify-start">
                      <div className="h-5 w-[51px] relative leading-[20px] inline-block shrink-0">
                        4 Years
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-[43px] flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 flex flex-col items-center justify-center py-0 px-[11px] box-border">
                      <div className="h-5 rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[transparent] hidden" />
                </div>
                <div
                  className="w-[1145px] rounded bg-whitesmoke-100 grid flex-row items-start justify-between py-3 px-4 box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation1;
