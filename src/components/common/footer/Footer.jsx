'use client'
import React, { useState } from "react";
import logo from "./assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, footerLinks } from "./data";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Email Validation
  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    console.log("Subscribed with email:", email);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FCEED5 0%, #FCEED5 100%, #FFE7BA 100%)",
      }}
      className="rounded-t-[20px] lg:rounded-t-[40px]  mx-auto w-full "
    >
      <div
        className={`pt-[40px] pb-[20px] max-w-[1180px] mx-auto px-[16px] xl:px-[0px]`}
      >
        <div className=" pb-[40px] border-b-[1px] border-[#CCD1D2] mb-[36px] flex flex-col gap-[40px]">
          <div className=" rounded-[16px] p-[16px] md:p-[32px] lg:flex-row bg-[#003459] flex flex-col gap-[16px] max-w-[688px] lg:max-w-full w-full mx-auto ">
            <p className="bodyText1 text-white bold">
              Register now so you donot miss our programs
            </p>
            <div className="rounded-[14px] p-[12px] bg-white flex flex-col gap-[12px] lg:min-w-[75%]  xl:flex-row">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  px-4 py-3 border border-[#99A2A5] rounded-[8px] text-base placeholder-[#99A2A5] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                name="Subscribe Now"
                onClick={handleSubscribe}
                textOnly
                className={"rounded-[8px] w-full xl:w-[30%] justify-center bg-[#003459] text-white"}
               
              >Subcribe Now</button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>} 
          </div>

          <div className="flex flex-col gap-[20px] lg:flex-row lg:justify-between  ">
            <div className=" flex justify-between max-w-[402px] w-full self-center  ">
              {footerLinks.map((val, index) => (
                <Link key={index} href={val.link}>
                  <p className="bodyText2 medium text-[#00171F]">{val.name}</p>
                </Link>
              ))}
            </div>
            <div className="flex gap-[40px] justify-center">
              {socialLinks.map((val, index) => (
                <Link key={index} href={val.link}>
                  <Image src={val.icon} alt="social" />
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
      </div>
    </div>
  );
};

export default Footer;
