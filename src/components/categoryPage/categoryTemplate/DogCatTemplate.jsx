import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import Hero from '../hero/Hero';
import DogList from './DogList';



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
      
      <DogList data={dogData} title={title}/>

    </div>
  );
};

export default DogCategoryTemplate;
