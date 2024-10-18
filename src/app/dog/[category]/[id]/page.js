import { getCategoryData } from '@/api/dogData';
import Button from '@/components/common/button/Button';
import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Hrader';
import PuppyDetailTemplate from '@/components/detailPage/PuppyDetailTemplate';

const PuppyDetailPage = ({ params }) => {
  const { category, id } = params; 

  const decodedCategory = decodeURIComponent(category);

  const formattedCategory = decodedCategory.replace(/\s+/g, '-');

  // console.log("Formatted Category: ", formattedCategory);

  const categoryData = getCategoryData(formattedCategory);

  if (!categoryData || !categoryData.data) {
    return (
      <>
      <Header/>
      <div className='min-h-[50vh] flex flex-col gap-[30px] justify-center items-center'>
        
      <p>Sorry there is no data </p>
      <Button name='Go Back' link='/'  textOnly/>
      </div>
      <Footer/>
      </>
    );
  }

  const puppy = categoryData.data.find((puppy) => puppy.id === parseInt(id));
  if (!puppy) {
    return <p>Puppy not found</p>;
  }

  return (
    <>
      <Header />
      <PuppyDetailTemplate puppy={puppy} category={formattedCategory} />
      <Footer/>
    </>
  );
};

export default PuppyDetailPage;
