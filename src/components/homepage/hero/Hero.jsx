import React from "react";
import Image from "next/image";
import homeHeroImg from "./assets/homeHeroImg.png";
import RootWrapper from "@/components/common/rootWrapper/RootWrapper";
import Button from "@/components/common/button/Button";
import intro from "./assets/intro.svg";


const Hero = () => {
  return (
    <div className="bg-[#FCEED5] ">
        {/* <div
          className={`hidden lg:block bg-[#F7DBA7] top-[18px] left-[119px] lg:top-[-602px] lg:left-[-284px]
        rotate-25  h-[635px] w-[635px]  rounded-[99px] absolute  `}
        style={{ zIndex: 1000 }}
        /> */}
      <RootWrapper
        className={
          "flex  flex-col lg:flex-row  lg:pt-[20px] overflow-hidden relative"
        }
      >
        <div className="lg:max-w-[50%] w-full z-20">
          <h1 className=" text-[46px] leading-[60px] lg:text-[60px] lg:leading-[68px] bold text-[#002A48]">
            One more friend
          </h1>
          <h2 className=" text-[28px] leading-[38px]   lg:heading1 bold text-[#002A48]  lg:mt-[4px]">
            Thousands more fun!
          </h2>
          <p className="text-[#242B33] mt-[12px] lg:mt-[24px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex gap-[20px] mt-[20px]  lg:mt-[34px]">
            <Button
              name={"View Intro"}
              outline
              link={"#"}
              icon={intro}
              className={"z-11"}
            />
            <Button
              name={"Explore nove"}
              textOnly
              link={"#"}
              className={"z-11"}
            />
          </div>
        </div>
        <div className="z-20">
          <Image
            src={homeHeroImg}
            width={480}
            height={380}
            className=" h-[380px] w-[650px]"
            alt="image"
          />
        </div>
        <div
          className={`bg-[#F7DBA7]  top-[449px]   lg:top-[167px] left-[134px] lg:left-[796px] 
        rotate-25  h-[517px] w-[522px]  rounded-[99px] absolute z-10`}
        />
        <div
          className={`bg-[#003459] top-[467px]        lg:top-[142px] left-[72px] lg:left-[771px] 
        rotate-6  h-[400px] w-[400px]  rounded-[99px] absolute z-9`}
        />
        <div
          className={`bg-[#f7dfb2]  hidden lg:block bottom-0 lg:top-[393px]  lg:left-[215px] 
        rotate-56  h-[300px] w-[300px]  rounded-[70px] absolute z-9`}
        />

        <div
          className={`bg-[#F7DBA7]  top-[51px]   lg:top-[28px] left-[386px] lg:left-[796px] 
        rotate-25  h-[14px] w-[14px]  rounded-[4px] absolute z-10`}
        />

        <div
          className={`bg-[#F7DBA7]  top-[69px]   lg:top-[96px] left-[330px] lg:left-[796px] 
        rotate-25  h-[27px] w-[27px]  rounded-[9px] absolute z-10`}
        />
        <div
          className={`bg-[#002A48]  top-[73px]   lg:top-[102px] left-[328px] lg:left-[796px] 
        rotate-25  h-[21px] w-[21px]  rounded-[6px] absolute z-10`}
        />

        <div
          className={`hidden lg:block bg-[#F7DBA7] top-[18px] left-[119px] 
        rotate-25  h-[67px] w-[67px]  rounded-[20px] absolute z-10`}
        />
      
      </RootWrapper>
    </div>
  );
};

export default Hero;
