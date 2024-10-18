import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import Button from "@/components/common/button/Button";
import Image from "next/image";
import React from "react";
import chat from "./assets/chat.svg";
import dogHeart from "./assets/dogHeart.svg";
import dogCat from "./assets/dogCat.svg";
import share from "./assets/share.svg";
import fb from "./assets/fb.svg";
import twitter from "./assets/tw.svg";
import ig from "./assets/ig.svg";
import yt from "./assets/yt.svg";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

const Hero = ({ image,breed, gender, age, price, images, category, id }) => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Dog", link: "/dog" },
    { label: category, link: `/dog/${category}` },
    { label: breed, link: "#" },
  ];

  // Temporary data for fields not coming from props
  const size = "Small";
  const color = "Apricot & Tan";
  const vaccinated = "Yes";
  const dewormed = "Yes";
  const cert = "Yes (MKA)";
  const microchip = "Yes";
  const location = "Vietnam";
  const publishedDate = "12-Oct-2022";
  const additionalInfo =
    "Pure breed Shih Tzu. Good body structure.";

  return (
    <div
      className={
        "rounded-[20px] border-[1px] border-[#EBEEEF] py-[22px] md:px-[20px] xl:max-w-[1180px] mx-auto flex  gap-[34px]   flex-col  xl:flex-row"
      }
    >
      <div>

        <div className=" max-w-[414px]  lg:max-w-[560px] w-full">
      <ImageSlider images={images}/>
        </div>
        <div className="py-[9px] px-[12px] mt-[17px] bg-[#FFE7BA] rounded-[10px] flex  flex-col gap-[20px] md:gap-0  md:flex-row justify-between mx-[20px] lg:mx-0">
          <div className="flex gap-[8px]">
            <Image src={dogHeart} alt="dogHeart" width={20} height={20} />
            <p className="text-[14px] leading-[20px] text-[#002A48] medium">
              100% health guarantee for pets
            </p>
          </div>
          <div className="flex gap-[8px]">
            <Image src={dogCat} alt="dogHeart" width={20} height={20} />
            <p className="text-[14px] leading-[20px] text-[#002A48] medium">
              100% guarantee of pet identification
            </p>
          </div>
        </div>

        <div className="py-[6px] px-[10px] flex gap-[20px] mt-[17px] mx-[20px] lg:mx-0">

          <div className="flex gap-[9px] justify-center items-center">
            <Image src={share} alt="share" width={20} height={20} />
            <p className="text-[14px] leading-[20px] text-[#002A48] bold">
              Share :{" "}
            </p>
          </div>

          <div className="flex flex-row max-w-[130px] w-full justify-between ">
            <Link href="#">
              <Image src={fb} alt="fb" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src={twitter} alt="fb" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src={ig} alt="fb" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src={yt} alt="fb" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[517px] w-full mx-[20px] lg:mx-0">
        <Breadcrumb items={breadcrumbs} separator=">" className="mb-4" />
        <div>
          <p className="text-[14px] leading-[20px] text-[#99A2A5] medium">
            {id}
          </p>
          <h1 className="text-[24px] leading-[36px] text-[#00171F] bold mt-[2px]">
            {breed}
          </h1>
          <p className="text-[20px] leading-[32px] text-[#002A48] bold mt-[6px]">
            {price}
          </p>
          <div className="flex gap-[18px] mt-[18px]">
            <Button
              name={"Contact Us"}
              link={"#"}
              textOnly
              className={"w-fit"}
            />
            <Button
              name={"Chat With Monito"}
              link={"#"}
              iconLeft
              icon={chat}
              outline
            />
          </div>

          {/* Table for details */}
          <table className="mt-6 text-[#667479] text-[14px] leading-[20px] medium">
            <tbody>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">SKU</td>
                <td className="py-[8px]">: {id}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Gender</td>
                <td className="py-[8px]">: {gender}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Age</td>
                <td className="py-[8px]">: {age}</td>
              </tr>
              <tr className="border-b-[1px]">
                <td className="py-[8px]">Size</td>
                <td className="py-[8px]">: {size}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Color</td>
                <td className="py-[8px]">: {color}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Vaccinated</td>
                <td className="py-[8px]">: {vaccinated}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Dewormed</td>
                <td className="py-[8px]">: {dewormed}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Cert</td>
                <td className="py-[8px]">: {cert}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Microchip</td>
                <td className="py-[8px]">: {microchip}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Location</td>
                <td className="py-[8px]">: {location}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px]">Published Date</td>
                <td className="py-[8px]">: {publishedDate}</td>
              </tr>
              <tr className=" border-b-[1px]">
                <td className="py-[8px] whitespace-nowrap pr-12 block">
                  Additional Information
                </td>
                <td className="py-[8px]">: {additionalInfo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
