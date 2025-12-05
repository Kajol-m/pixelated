import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import BestsellerCarousel from "../Bestseller/BestsellerCarousel";
import Banner from "./Banner";
import Collection from "./Collection";
import ShopMenu from "./ShopMenu";
import TrendingItems from "./TrendingItems";

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="lg:pt-[81px] pt-[75px]"></div>
      <Banner />
      <ShopMenu />
      <Collection />
      <p className="md:pl-8 ml-6 pr-8 mr-2 lg:pt-[50px] md:pt-8 pt-4">
        TRENDING ITEMS
      </p>
      <TrendingItems />
      <p className="md:pl-8 ml-6 pr-8 mr-2 md:pt-0 pt-4">BESTSELLERS</p>
      <BestsellerCarousel />
      <Footer />
    </>
  );
};
export default Homepage;
