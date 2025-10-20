import Details from "./Details";
import ImageDetails from "./ImageDetails";
import Header from "../../common/Header/Header";
import TrendingItems from "../MainPage/TrendingItems";
import Footer from "../../common/Footer/Footer";
import BestsellerCarousel from "../Bestseller/BestsellerCarousel";
const ProductDetails: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <hr className="border-gray-300 lg:mt-[89px] mt-[65px]" />
      <div className="flex lg:flex-row flex-col lg:pt-[50px] lg:ml-[150px] lg:mr-[150px] lg:pb-[80px] pt-[30px] md:mx-[20px] mx-[15px] pb-[40px]">
        <div className="lg:flex flex-row gap-8">
          <div className="lg:w-1/2"><ImageDetails/></div>
          <div className="lg:w-1/2 sm:pt-6"><Details/></div>
          {/* <ImageDetails/>
          <Details/> */}
        </div>
      </div>
      <div>
        <p className="lg:pl-8 lg:ml-6 ml-5 pr-8 mr-2">YOU MAY ALSO LIKE</p>
        <TrendingItems/>
      </div>
      <div>
        <p className="lg:pl-8 lg:ml-6 ml-5 pr-8 mr-2">RCENTLY VIEWED</p>
        <BestsellerCarousel/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
export default ProductDetails;
