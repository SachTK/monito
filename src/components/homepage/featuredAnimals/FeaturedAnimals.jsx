'use client';
import React, { useEffect, useState } from 'react';
import PupyCard from '@/components/common/pupyCard/PupyCard';
import RootWrapper from '@/components/common/rootWrapper/RootWrapper';
import { fetchPuppies } from '@/api/api';
import Button from '@/components/common/button/Button';
import rightArrowOutline from './assets/rightArrowOutline.svg'

const FeaturedAnimals = () => {
  const [puppies, setPuppies] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: to show a loader while fetching

  useEffect(() => {
    const getPuppies = async () => {
      try {
        const data = await fetchPuppies(); 
        setPuppies(data); 
      } catch (error) {
        console.error('Error loading puppies:', error);
      } finally {
        setLoading(false); 
      }
    };

    getPuppies();
  }, []);

  return (
    <RootWrapper>
      <div className='flex justify-between md:pb-[28px]'>
        <div>
        <p className='bodyText3 medium'>What's new?</p>
        <p className='bodyText1 bold text-[#003459]'>Take a look at some of our pets</p>
        </div>
        <Button name='View more' link='#' outline medium className={'hidden md:flex'} icon={rightArrowOutline}/>
      </div>
      <div className='flex gap-[12px] md:gap-[20px] flex-wrap justify-center mb-[16px]'>
        {loading ? (
          <p>Loading...</p> 
        ) : (
          puppies.map((puppy) => (
            <PupyCard
              key={puppy.id}
              id={puppy.id}
              breed={puppy.breed}
              gender={puppy.gender}
              age={puppy.age}
              price={puppy.price}
              image={puppy.image}
            />
          ))
        )}
      </div>
      <Button name='View more' link='#' outline className={'justify-center md:hidden'} icon={rightArrowOutline}/>
    </RootWrapper>
  );
};

export default FeaturedAnimals;
