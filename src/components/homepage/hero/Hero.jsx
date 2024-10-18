import React from 'react';
import Image from 'next/image'; 
import homeHeroImg from './assets/homeHeroImg.png'; 
import RootWrapper from '@/components/common/rootWrapper/RootWrapper';
import Button from '@/components/common/button/Button';
import intro from './assets/intro.svg';

const Hero = () => {
  return (
    <div className='bg-[#FCEED5] '>
    <RootWrapper className={'flex  flex-col lg:flex-row  lg:pt-[20px] overflow-hidden relative'}>
      <div className='lg:max-w-[50%] w-full'>
        <h1 className=' text-[46px] leading-[60px] lg:text-[60px] lg:leading-[68px] bold text-[#002A48]'>One more friend</h1>
        <h2 className=' text-[28px] leading-[38px]   lg:heading1 bold text-[#002A48]  lg:mt-[4px]'>Thousands more fun!</h2>
        <p className='text-[#242B33] mt-[12px] lg:mt-[24px]'>Having a pet means you have more joy, a new friend, a happy person who will always be
           with you to have fun. We have 200+ different pets that can meet your needs!</p>
           <div className='flex gap-[20px] mt-[20px]  lg:mt-[34px]'>
            <Button name={'View Intro'} outline link={'#'} icon={intro}/>
            <Button name={'Explore nove'}  textOnly link={'#'}/>
           </div>
      </div>
      <div className='z-20'>
        <Image src={homeHeroImg} width={480} height={380} className=' h-[380px] w-[650px]' alt='image'/>
      </div>
      <div className={`bg-[#F7DBA7]  top-[347px]   lg:top-[167px] left-[123px] lg:left-[796px] 
        rotate-25  h-[517px] w-[522px]  rounded-[99px] absolute z-10`} />
        <div className={`bg-[#003459] top-[360px]        lg:top-[142px] left-[80px] lg:left-[771px] 
        rotate-6  h-[400px] w-[400px]  rounded-[99px] absolute z-9`} />
          <div className={`bg-[#f7dfb2]  hidden lg:block bottom-0 lg:top-[393px]  lg:left-[215px] 
        rotate-56  h-[300px] w-[300px]  rounded-[70px] absolute z-9`} />
    </RootWrapper>
    </div>
  );
};

export default Hero;
