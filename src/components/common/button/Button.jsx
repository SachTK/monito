import React from "react";
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
  icon
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
          ? " border-[1.5px] border-[#003459]  text-[#003459]"
          : "bg-[#003459] text-white hover:bg-[#0078CD] active:bg-[#002A48] focus:bg-[#00528C] disabled:bg-[#CCD1D2]"
      }`}
    >
      {iconOnly ? (
        outline ? (
          <Image src={icon} alt="circle" width={15} />
        ) : (
          <Image src={icon} alt="circle" width={15} />
        )
      ) : textOnly ? (
        <p className="medium">{name}</p>
      ) : (
        <>
          <p className="medium">{name}</p>
          {outline ? (
            <Image src={icon} alt="circle"  width={15}/>
          ) : (
            <Image src={icon} alt="circle" width={15} />
          )}
        </>
      )}
    </Link>
  );
};

export default Button;
