import Image from 'next/image';
import React from 'react';
import gift from './gift.png'

const ProductCard = ({id, name,product,price,size,desc,image}) => {
  return (
    <div className='max-w-[185px] lg:max-w-[280px] rounded-[12px] p-[8px] bg-[#FDFDFD] shadow-md flex flex-col gap-[8px]'>
      <Image src={image} width={185} height={200} className="object-cover rounded-[12px] lg:w-[264px]" alt='image'  />
      <div className='flex flex-col gap-[8px] p-[4px]'>
        <p className='bodyText2 bold text-[#00171F]'>{name}</p>
        <div className='flex flex-col gap-[4px] lg:flex-row'>
        <p className='bodyText4 text-[#667479]'>Product : <span className='bold'>{product} </span></p>
        <p className='bodyText4 text-[#667479]'>Size : <span className='bold'>{size} </span></p>
        </div>
        <p className='bodyText3 bold'>{price}</p>
      </div>
      <div className='py-[6px]  px-[10px] rounded-[8px] bg-[#FCEED5] items-center flex gap-[12px]  mt-auto mb-[12px]'>
        <Image src={gift} width={20} height={20} alt='icon'/>
        <li className='bodyText4 text-[#002A48] bold'>{desc}</li>
      </div>
    </div>
  );
};

export default ProductCard;