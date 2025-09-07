import Details from "./Details";
import ImageDetails from "./ImageDetails";
import Header from "../../components/Header/Header";
import TrendingItems from "../MainPage/TrendingItems";
import Footer from "../../components/Footer/Footer";
const ProductDetails: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <hr className="border-gray-300 mt-[90px]" />
      <div className="flex flex-row pt-[50px] ml-[100px] mr-[150px] pb-[100px]">
        <div className="w-1/2 ">
          <ImageDetails />
        </div>
        <div className="w-1/2  ">
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
