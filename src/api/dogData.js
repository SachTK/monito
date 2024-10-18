import dog1 from "../components/common/dogAssets/dog1.png";
import dog2 from "../components/common/dogAssets/dog2.png";
import dog3 from "../components/common/dogAssets/dog3.png";
import dog4 from "../components/common/dogAssets/dog4.png";
import dog5 from "../components/common/dogAssets/dog5.png";
import dog6 from "../components/common/dogAssets/dog6.png";
import dog7 from "../components/common/dogAssets/dog7.png";
import dog8 from "../components/common/dogAssets/dog8.png";
import dog9 from "../components/common/dogAssets/dog9.png";

import look1 from "../components/common/dogAssets/look1.png";
import look2 from "../components/common/dogAssets/look2.png";
import look3 from "../components/common/dogAssets/look3.png";
import look4 from "../components/common/dogAssets/look4.png";
import look5 from "../components/common/dogAssets/look5.png";
import look6 from "../components/common/dogAssets/look6.png";


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
      { id: 1, breed: "Beagle", gender: "Male", age: "2 years", price: "1,200 NVD", image: dog1 ,images: [ dog1,dog9,look2, look3,look4,look5,look6], },
      { id: 2, breed: "Boston Terrier", gender: "Female", age: "1 year", price: "1,000 NVD", image: dog2 ,images: [dog2, look2, look3,look4,look5,look6], },
      { id: 3, breed: "Chihuahua", gender: "Male", age: "3 years", price: "800 NVD", image: dog3 ,images: [dog3, look2, look3,look4,look5,look6],},
      { id: 4, breed: "Dachshund", gender: "Female", age: "4 years", price: "900 NVD", image: dog4 ,images: [ dog4,look2, look3,look4,look5,look6],},
      { id: 5, breed: "French Bulldog", gender: "Male", age: "2 years", price: "1,500 NVD", image: dog5 ,images: [ dog5,look2, look3,look4,look5,look6],},
      { id: 6, breed: "Pomeranian", gender: "Female", age: "1 year", price: "1,200 NVD", image: dog6 ,images: [ dog6,look2, look3,look4,look5,look6],},
      { id: 7, breed: "Pug", gender: "Male", age: "3 years", price: "1,100 NVD", image: dog7 ,images: [ dog7,look2, look3,look4,look5,look6],},
      { id: 8, breed: "Shih Tzu", gender: "Female", age: "4 years", price: "1,300 NVD", image: dog8 ,images: [ dog8,look2, look3,look4,look5,look6],},
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
      { id: 1, breed: "Akita", gender: "Male", age: "4 years", price: "1,800 NVD", image: dog1 ,images: [ dog1,look2, look3,look4,look5,look6],},
      { id: 2, breed: "Bernese Mountain", gender: "Female", age: "3 years", price: "2,000 NVD", image: dog2 ,images: [dog2, look2, look3,look4,look5,look6],},
      { id: 3, breed: "Bloodhound", gender: "Male", age: "5 years", price: "1,900 NVD", image: dog3 ,images: [dog3, look2, look3,look4,look5,look6],},
      { id: 4, breed: "Bullmastiff", gender: "Female", age: "2 years", price: "2,200 NVD", image: dog4 ,images: [ dog4,look2, look3,look4,look5,look6],},
      { id: 5, breed: "Cane Corso", gender: "Male", age: "3 years", price: "2,500 NVD", image: dog5,images: [ dog5,look2, look3,look4,look5,look6], },
      { id: 6, breed: "Great Dane", gender: "Female", age: "1 year", price: "2,300 NVD", image: dog6,images: [dog6, look2, look3,look4,look5,look6], },
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
      { id: 1, breed: "Labrador Retriever", gender: "Male", age: "5 years", price: "1,700 NVD", image: dog1 ,images: [dog1, look2, look3,look4,look5,look6],},
      { id: 2, breed: "Golden Retriever", gender: "Female", age: "3 years", price: "1,800 NVD", image: dog2 ,images: [ dog2,look2, look3,look4,look5,look6],},
      { id: 3, breed: "French Bulldog", gender: "Male", age: "2 years", price: "1,500 NVD", image: dog3,images: [ dog3,look2, look3,look4,look5,look6], },
      { id: 4, breed: "Poodle", gender: "Female", age: "4 years", price: "2,000 NVD", image: dog4 ,images: [ dog4,look2, look3,look4,look5,look6],},
      { id: 5, breed: "Beagle", gender: "Male", age: "2 years", price: "1,200 NVD", image: dog5 ,images: [ dog5, look2, look3,look4,look5,look6],},
      { id: 6, breed: "Rottweiler", gender: "Female", age: "3 years", price: "2,100 NVD", image: dog6 ,images: [ dog6,look2, look3,look4,look5,look6],},
    ],
  },
};


export const getCategoryData = (category) => {
  return dogs[category] || {};
};
