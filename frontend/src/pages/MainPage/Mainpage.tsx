import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import BestsellerCarousel from "../Bestseller/BestsellerCarousel";
import Banner from "./Banner";
import Collection from "./Collection";
import ShopMenu from "./ShopMenu";
import TrendingItems from "./TrendingItems";

const Homepage:React.FC=()=>{
    return(
        <>
        <Header/>
        <div className="pt-[81px]"></div>
        <Banner/>
        <ShopMenu/>
        <Collection/>
        <p className="pl-8 ml-6 pr-8 mr-2 pt-8">TRENDING ITEMS</p>
        <TrendingItems/>
        <p className="pl-8 ml-6 pr-8 mr-2 pt-8">BESTSELLERS</p>
        <BestsellerCarousel/>
        <Footer/>
        </>
    )
}
export default Homepage;