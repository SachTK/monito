import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import Hero from '../hero/Hero';
import PupyCard from '@/components/common/card/PupyCard';



const DogCategoryTemplate = ({ breadcrumbItems, heroData, dogData ,title}) => {
  return (
    <div className="md:max-w-[688px] w-full lg:max-w-[1180px] mx-auto px-[16px]  xl:px-0">
    
     
      <Breadcrumb items={breadcrumbItems} separator=">" className="mb-4" />
      
      <Hero 
        title={heroData.title} 
        subTitle={heroData.subTitle}
        desc={heroData.desc} 
        image={heroData.image} 
      />
      
      {/* Dog List */}
      <div className='flex flex-col gap-[19px]'>
    <h2 className='text-[24px] leading-[36px] text-[#003459] bold'>{title} <span className='text-[14px] leading-[20px] text-[#667479]  medium'>52 papies</span></h2>
    <div className='flex flex-row flex-wrap gap-[12px] lg:gap-[20px] justify-center'>

      {dogData.map((dog) => (
        <PupyCard key={dog.id} 
        id={dog.id}
        breed={dog.breed}
        price={dog.price}
        age={dog.age}
        gender={dog.gender}
        image={dog.image}
        />
      ))}
    </div>
      </div>

    </div>
  );
};

export default DogCategoryTemplate;
