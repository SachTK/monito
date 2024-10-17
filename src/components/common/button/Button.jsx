import React from "react";
import circleRight from "./assets/circle_right.svg";
import circleRightDark from "./assets/circle_right_dark.svg";
import circleRightGray from "./assets/circle_right_gray.svg";
import Link from "next/link";
import Image from "next/image";

const Button = ({
  medium = false,
  iconLeft = false,
  iconOnly = false,
  outline = false,
  textOnly = false,
  name,
  link,
  className,
}) => {
  return (
    <Link
      href={link}
      className={`${className} ${
        iconOnly
          ? "rounded-full p-[12px] flex items-center justify-center"
          : medium
          ? "rounded-[57px] py-[12px] px-[28px] bodyText3  flex items-center"
          : "rounded-[57px] px-[28px] py-[14px] flex items-center bodyText2"
      }  gap-[8px] ${iconLeft ? "flex-row-reverse" : "flex"} ${
        outline
          ? " border-[1.5px] border-[#003459] bg-white text-[#003459]"
          : "bg-[#003459] text-white hover:bg-[#0078CD] active:bg-[#002A48] focus:bg-[#00528C] disabled:bg-[#CCD1D2] "
      }`}
    >
      {iconOnly ? (
        outline ? (
          <Image src={circleRightGray} alt="circle" />
        ) : (
          <Image src={circleRight} alt="circle" />
        )
      ) : textOnly ? (
        <p className="medium">{name}</p>
      ) : (
        <>
          <p className="medium">{name}</p>
          {outline ? (
            <Image src={circleRightDark} alt="circle" />
          ) : (
            <Image src={circleRight} alt="circle" />
          )}
        </>
      )}
    </Link>
  );
};

export default Button;
