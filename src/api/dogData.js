import dog1 from "../components/common/dogAssets/dog1.png";
import dog2 from "../components/common/dogAssets/dog2.png";
import dog3 from "../components/common/dogAssets/dog3.png";
import dog4 from "../components/common/dogAssets/dog4.png";
import dog5 from "../components/common/dogAssets/dog5.png";
import dog6 from "../components/common/dogAssets/dog6.png";
import dog7 from "../components/common/dogAssets/dog7.png";
import dog8 from "../components/common/dogAssets/dog8.png";

import smallDogHeroImage from "../components/common/dogAssets/dogCatHero.png";
import largeDogHeroImage from "../components/common/dogAssets/dogCatHero.png";
import popularDogHeroImage from "../components/common/dogAssets/dogCatHero.png";

const dogs = {
  "small-dog": {
    hero: {
      title: "Small Dog",
      subTitle: "Thousands more fun!",
      desc: "Our small dogs are cute, cuddly, and perfect for small spaces!",
      image: smallDogHeroImage,
    },
    data: [
      { id: 1, breed: "Beagle", gender: "Male", age: "2 years", price: "1,200 USD", image: dog1 },
      { id: 2, breed: "Boston Terrier", gender: "Female", age: "1 year", price: "1,000 USD", image: dog2 },
      { id: 3, breed: "Chihuahua", gender: "Male", age: "3 years", price: "800 USD", image: dog3 },
      { id: 4, breed: "Dachshund", gender: "Female", age: "4 years", price: "900 USD", image: dog4 },
      { id: 5, breed: "French Bulldog", gender: "Male", age: "2 years", price: "1,500 USD", image: dog5 },
      { id: 6, breed: "Pomeranian", gender: "Female", age: "1 year", price: "1,200 USD", image: dog6 },
      { id: 7, breed: "Pug", gender: "Male", age: "3 years", price: "1,100 USD", image: dog7 },
      { id: 8, breed: "Shih Tzu", gender: "Female", age: "4 years", price: "1,300 USD", image: dog8 },
    ],
  },
  "large-dog": {
    hero: {
      title: "Large Dogs",
      subTitle: "Thousands more fun!",
      desc: "Large dogs make great companions for active families!",
      image: largeDogHeroImage,
    },
    data: [
      { id: 1, breed: "Akita", gender: "Male", age: "4 years", price: "1,800 USD", image: dog1 },
      { id: 2, breed: "Bernese Mountain", gender: "Female", age: "3 years", price: "2,000 USD", image: dog2 },
      { id: 3, breed: "Bloodhound", gender: "Male", age: "5 years", price: "1,900 USD", image: dog3 },
      { id: 4, breed: "Bullmastiff", gender: "Female", age: "2 years", price: "2,200 USD", image: dog4 },
      { id: 5, breed: "Cane Corso", gender: "Male", age: "3 years", price: "2,500 USD", image: dog5 },
      { id: 6, breed: "Great Dane", gender: "Female", age: "1 year", price: "2,300 USD", image: dog6 },
    ],
  },
  "popular-dog": {
    hero: {
      title: "Popular Dogs",
      subTitle: "Thousands more fun!",
      desc: "Discover the most popular breeds loved by all!",
      image: popularDogHeroImage,
    },
    data: [
      { id: 1, breed: "Labrador Retriever", gender: "Male", age: "5 years", price: "1,700 USD", image: dog1 },
      { id: 2, breed: "Golden Retriever", gender: "Female", age: "3 years", price: "1,800 USD", image: dog2 },
      { id: 3, breed: "French Bulldog", gender: "Male", age: "2 years", price: "1,500 USD", image: dog3 },
      { id: 4, breed: "Poodle", gender: "Female", age: "4 years", price: "2,000 USD", image: dog4 },
      { id: 5, breed: "Beagle", gender: "Male", age: "2 years", price: "1,200 USD", image: dog5 },
      { id: 6, breed: "Rottweiler", gender: "Female", age: "3 years", price: "2,100 USD", image: dog6 },
    ],
  },
};

// Export function to get category data and hero content
export const getCategoryData = (category) => {
  return dogs[category] || {};
};
