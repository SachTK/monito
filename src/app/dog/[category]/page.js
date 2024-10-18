import React from 'react';

import { getCategoryData } from '@/api/dogData';
import DogCategoryTemplate from '@/components/categoryPage/categoryTemplate/DogCatTemplate';
import Header from '@/components/common/header/Hrader';
import Footer from '@/components/common/footer/Footer';

export default async function DogCategoryPage({ params }) {

  const { category } = params;
  const { hero, data: dogData } = await getCategoryData(category); 
  console.log(category)

 
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Dogs', link: '/dog' },
    { label: category.replace(/-/g, ' ') }, 
  ];

  return (
    <>
    <Header/>
    <DogCategoryTemplate
      breadcrumbItems={breadcrumbItems}
      heroData={hero}
      dogData={dogData}
      title={category.replace(/-/g, ' ')}
    />
    <Footer/>
    </>
    
  );
}
