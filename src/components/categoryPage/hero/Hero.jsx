import Button from "@/components/common/button/Button";
import RootWrapper from "@/components/common/rootWrapper/RootWrapper";
import Image from "next/image";
import React from "react";
import rightArrowOutline from './asset/rightArrowOutline.svg';

const Hero = ({ title, subTitle, desc, image }) => {
  return (
    <div className={`pt-[36px] rounded-[16px] bg-[#FCEED5] relative px-0 overflow-hidden lg:flex lg:flex-row-reverse`}>

      <div className="text-left lg:text-right  flex flex-col  pl-[16px] relative z-20 lg:pr-[60px]">
        <h1 className="text-[42px] leading-[60px] bold text-[#002A48] lg:text-white ">{title}</h1>
        <p className="text-[26px] leading-[38px] text-[#002A48] lg:text-white  bold">{subTitle}</p>
        <p className="text-[12px] leading-[18px] text-[#242B33]  lg:text-white  medium pt-[12px]">{desc}</p>
        <div className="flex gap-[12px] self-center lg:self-end mt-[32px]">
          <Button name="View Intro" link="#" outline icon={rightArrowOutline}  className={'lg:border-white lg:text-white'}/>
          <Button name="Explore Now" link="#" textOnly  className={'lg:bg-white lg:text-black'}/>
        </div>
      </div>

      <div className="relative z-30 mt-[-40px]"> 
        <Image src={image} width={480} height={200} className="relative z-30 w-full  lg:w-[650px]" alt="image"/>
      </div>

     
      <div className={`bg-[#002A48] top-[324px] right-[-71px] lg:right-0 lg:left-[537px] lg:top-[-60px] rotate-6 lg:rotate-71  h-[635px] w-[605px] lg:w-[816px] lg:h-[799px] rounded-[99px] absolute z-10`} />
    </div>
  );
};

export default Hero;
