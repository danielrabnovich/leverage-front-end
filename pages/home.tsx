import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import TopbarUIHUT from "../components/topbar-u-i-h-u-t";
import FrameComponent1 from "../components/frame-component1";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-color-guide-black-white-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
      <FrameComponent
        vuesaxboldelement4="/vuesaxboldelement4.svg"
        vuesaxboldframe="/vuesaxboldframe.svg"
      />
      <section className="flex-1 flex flex-col items-start justify-start gap-[259px] max-w-[calc(100%_-_235px)] lg:gap-[129px] mq750:gap-[65px] mq1050:max-w-full mq450:gap-8">
        <TopbarUIHUT />
        <FrameComponent1 />
      </section>
    </div>
  );
};

export default Home;
