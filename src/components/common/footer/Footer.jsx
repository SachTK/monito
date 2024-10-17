import React from "react";
import RootWrapper from "../rootWrapper/RootWrapper";
import logo from "./assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, footerLinks } from "./data";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FCEED5 0%, #FCEED5 100%, #FFE7BA 100%)",
      }}
      className="rounded-t-[20px] lg:rounded-t-[40px] max-w-[1440px] mx-auto w-full"
    >
      <RootWrapper className={`pt-[40px] pb-[20px]  `}>
        <div className=" pb-[40px] border-b-[1px] border-[#CCD1D2] mb-[36px] flex flex-col gap-[40px]">
          <div className=" rounded-[16px] p-[16px] md:p-[32px] lg:flex-row bg-[#003459] flex flex-col gap-[16px] max-w-[688px] lg:max-w-full w-full mx-auto ">
            <p className="bodyText1 text-white bold">
              Register now so you don't miss our programs
            </p>
            <div className="rounded-[14px] p-[12px] bg-white flex flex-col gap-[12px] lg:min-w-[75%]  xl:flex-row">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full  px-4 py-3 border border-[#99A2A5] rounded-[8px] text-base placeholder-[#99A2A5] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button
                name="Subcribe Now"
                link="#"
                textOnly
                className={"rounded-[8px] w-full xl:w-[30%] justify-center"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] lg:flex-row lg:justify-between  ">
            <div className=" flex justify-between max-w-[402px] w-full self-center  ">
              {footerLinks.map((val, index) => (
                <Link key={index} href={val.link}>
                  <p className="bodyText2 meadium text-[#00171F]">{val.name}</p>
                </Link>
              ))}
            </div>
            <div className="flex gap-[40px] justify-center">
              {socialLinks.map((val, index) => (
                <Link key={index} href={val.link}>
                  <Image src={val.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] justify-center items-center lg:flex-row-reverse lg:justify-between">
          <div className="flex flex-col gap-[32px] justify-center items-center lg:flex-row lg:justify-between lg:w-[55%]">
            <Image src={logo} alt="logo" />
            <div className="flex  w-fit gap-[12px]">
              <Link className="bodyText4 medium text-[#667479]" href={"#"}>
                Terms of Service
              </Link>
              <Link className="bodyText4 medium text-[#667479]" href={"#"}>
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="bodyText5 text-[#667479]">
            © 2022 Monito. All rights reserved.
          </p>
        </div>
      </RootWrapper>
    </div>
  );
};

export default Footer;
