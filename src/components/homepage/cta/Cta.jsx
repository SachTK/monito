import RootWrapper from '@/components/common/rootWrapper/RootWrapper';
import React from 'react';
import homeCta1Image from './assets/homeCta1Image.png';
import Image from 'next/image';
import intro from './assets/intro.svg';
import Button from '@/components/common/button/Button';
import paw from './assets/paw.svg';

const Cta = ({title, cta2=false, image , desc , subTitle}) => {
  return (
    <RootWrapper className={''}>
      <section className={`relative ${cta2 ? "bg-[#FFB775] lg:flex-row lg:pl-[40px]" : "bg-[#003459] lg:flex-row-reverse pt-[40px] lg:pr-[40px]"} flex flex-col items-center lg:items-start rounded-[20px] overflow-hidden `}>


        <div className={`  ${cta2 ? "bg-[#fec792] top-[-354px] lg:top-[233px] right-[-81px] lg:right-0 lg:left-[730px] rotate-12 lg:rotate-53 " : "bg-[#FCEED5] top-[-354px] lg:top-[-284px] right-[-81px] lg:right-0 lg:left-[600px] rotate-12 lg:rotate-25   "}   h-[635px] w-[605px] rounded-[75px] lg:rounded-[99px] lg:w-[782px] absolute  z-10`}/>
        <div className={`${cta2 ? "bg-[#FCEED5] top-[550px] right-[-71px] lg:right-0 lg:left-[-207px] lg:top-[-296px] rotate-55  " : "bg-[#002A48] top-[550px] right-[-71px] lg:right-0 lg:left-[-207px] lg:top-[162px] rotate-28 "} h-[635px] w-[605px] lg:w-[787px] lg:h-[767px] rounded-[99px] absolute  z-10`}/>
        
        {/* Left Text Section */}
        <div className={`lg:w-1/2 text-center ${cta2 ? "lg:text-left" : "lg:text-right"} px-4 lg:px-8 flex flex-col gap-[32px] lg:gap-[24px] z-20`}>
          <div>
            {cta2 ? (
              <div className="flex items-center justify-center lg:justify-start gap-[16px] pt-[40px]">
                <h2 className="text-[36px] leading-[54px] lg:text-[52px] lg:leading-[68px] bold text-[#003459] lg:mb-[2px]">
                 {title}
                </h2>
                <Image 
                  src={paw} 
                  width={42} 
                  height={42} 
                  alt="Paw icon"
                  className="hidden lg:inline-block"
                />
              </div>
            ) : (
              <h2 className="text-[36px] leading-[54px] lg:text-[52px] lg:leading-[68px] bold text-[#003459] lg:mb-[2px]">
                {title}
              </h2>
            )}
            <h3 className='text-[24px] leading-[38px] lg:text-[36px] lg:leading-[54px] bold text-[#002A48]'>
            {subTitle}
            </h3>
            <p className="text-[#242B33] bodyText4 mt-[8px]">
             {desc}
            </p>
          </div>
          
          {/* Buttons */}
          <div className={`flex flex-row justify-center ${cta2 ? 'lg:justify-start lg:flex-row-reverse self-start ' : 'lg:justify-end'} gap-[12px]`}>
            <Button name='View Intro' outline icon={intro} link='#' className={''}/>
            <Button name='Explore Now' link='#' textOnly/>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10">
            <Image
              src={image}
              alt="Human holding a dog"
              width={605}
              height={635}
              className={`object-contain  ${cta2?'lg:w-[538px] lg:h-[358px]':'lg:w-[513px] lg:h-[342px]'}`}
            />
          </div>
        </div>
      </section>
    </RootWrapper>
  );
};

export default Cta;