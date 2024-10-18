import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Hrader";
import Cta from "@/components/homepage/cta/Cta";
import FeaturedProducts from "@/components/homepage/featuredProducts/FeaturedProducts";
import Hero from "@/components/homepage/hero/Hero";
import Sellers from "@/components/homepage/sellers/Sellers";
import homeCta1Image from '../components/homepage/cta/assets/homeCta1Image.png'
import dogPalm from '../components/homepage/cta/assets/dogPalm.png'
import Blog from "@/components/homepage/blog/Blog";
import FeaturedPupies from "@/components/common/featuredPupies/FeaturedPupies";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10px]">
     <Header/>
     <Hero/>
    <FeaturedPupies subTitle="What's new?" title="Take a look at some of our pets" btn/>
     <Cta 
     image={homeCta1Image}
     title={'One More Friend'} 
     subTitle={'Thousands More Fun!'} 
     desc={'Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!'}/>
     <FeaturedProducts/>
     <Sellers/>
     <Cta
     image={dogPalm} 
     cta2 
     title={'Adoption'} 
     subTitle={'We need help. so do they.'} 
     desc={'Adopt a pet and give it a home, it will be love you back unconditionally.'}/>
     <Blog/>
     <Footer/>
    </div>
  );
}
