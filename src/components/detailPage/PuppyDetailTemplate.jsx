import Image from 'next/image';
import Customers from './customers/Customers';
import FeaturedPupies from '../common/featuredPupies/FeaturedPupies';
import Hero from './hero/Hero';

const PuppyDetailTemplate = ({ puppy , category  }) => {
  const { id,image,breed, gender, age, price, images } = puppy;
  console.log(category)

  return (
    <div className="flex flex-col ">
      <Hero  image={image}   breed={breed} gender={gender} age={age} price={price} images={images} category={category} id={id}/>
      <Customers/>
      <FeaturedPupies subTitle="What's new?" title="See more puppies" />
    </div>
  );
};

export default PuppyDetailTemplate;
