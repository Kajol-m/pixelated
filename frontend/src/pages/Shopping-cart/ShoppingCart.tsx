import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import TrendingItems from "../MainPage/TrendingItems";
import CartProduct from "./CartProduct";
import CheckoutCart from "./CheckoutCart";

const ShoppingCart: React.FC = () => {
  return (
    <>
      <Header />
      <hr className="border-gray-300 pt-[75px]" />
      <p className="text-xl ml-8 pr-8 mr-2 pt-8">SHOPPING CART</p>
      <hr className="hidden lg:flex border-gray-300  mr-8 ml-8 mt-8" />
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-2/3 ">
          <CartProduct />
        </div>
        <div className="lg:w-1/3 lg:p-8 md:p-7 p-5">
          <div className="sticky top-[100px] lg:pb-[100px]">
            <CheckoutCart />
          </div>
        </div>
      </div>

      <div>
        <p className="lg:pl-8 ml-6 pr-8 mr-2 pt-8">YOU MAY ALSO LIKE</p>
        <TrendingItems />
      </div>

      <Footer />
    </>
  );
};
export default ShoppingCart;
