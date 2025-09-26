import Details from "./Details";
import ImageDetails from "./ImageDetails";
import Header from "../../common/Header/Header";
import TrendingItems from "../MainPage/TrendingItems";
import Footer from "../../common/Footer/Footer";
const ProductDetails: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <hr className="border-gray-300 mt-[90px]" />
      <div className="flex lg:flex-row flex-col lg:pt-[50px] lg:ml-[100px] lg:mr-[150px] lg:pb-[100px] pt-[30px] ml-[50px] mr-[50px] pb-[40px]">
        <div className="lg:w-1/2 ">
          <ImageDetails />
        </div>
        <div className="lg:w-1/2  ">
          <Details />
        </div>
      </div>
      <div>
        <p className="pl-8 ml-6 pr-8 mr-2 pt-8">YOU MAY ALSO LIKE</p>
        <TrendingItems/>
      </div>
      <div>
        <p className="pl-8 ml-6 pr-8 mr-2 pt-8">RCENTLY VIEWED</p>
        <TrendingItems/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
export default ProductDetails;
