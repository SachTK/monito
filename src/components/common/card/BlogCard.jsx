import Image from 'next/image';
import React from 'react';

const BlogCard = ({image, tag, title, desc}) => {
  return (
    <div className='rounded-[12px] p-[8px] max-w-[382px]  md:max-w-[320px]   lg:max-w-[380px] w-full flex-col gap-[8px] shadow-md'>
      <Image src={image} alt={title} width={366} height={245} className=' rounded-[10px]'/>
      <div className='p-[8px] flex flex-col gap-[10px]'>
        <div className='py-[2px] px-[10px] rounded-[28px] bg-[#00A7E7] justify-center w-fit'>
        <p className='text-[10px] leading-[16px] bold text-white'>{tag}</p>
        </div>
        <div className='flex flex-col gap-[6px]'>
            <p className='bold'>{title}</p>
            <p className='text-[14px] leading-[20px] text-[#242B33]'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;