import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PupyCard = ({id, breed,gender,age,price,image,category }) => {
  return (
    
    <Link className='max-w-[185px] lg:max-w-[280px] rounded-[12px] p-[8px] bg-[#FDFDFD] shadow-md flex flex-col gap-[8px]'   href={`/dog/${category}/${id}`}>
      <Image src={image} width={185} height={200} className="object-cover rounded-[12px] lg:w-[264px]"  />
      <div className='flex flex-col gap-[8px] p-[4px]'>
        <p className='bodyText2 bold text-[#00171F]'>{id} - {breed}</p>
        <div className='flex flex-col gap-[4px] lg:flex-row'>
        <p className='bodyText4 text-[#667479]'>Genre : <span className='bold'>{gender} </span></p>
        <p className='bodyText4 text-[#667479]'>Age : <span className='bold'>{age} </span></p>
        </div>
        <p className='bodyText3 bold'>{price}</p>
      </div>
    </Link>
  );
};

export default PupyCard;