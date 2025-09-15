import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TrendingItems from "../MainPage/TrendingItems";
import CartProduct from "./CartProduct";
import CheckoutCart from "./CheckoutCart";

const ShoppingCart: React.FC = () => {
  return (
    <>
      <Header />
      <hr className="border-gray-300 mt-[90px]" />
      <p className="text-xl ml-8 pr-8 mr-2 pt-8">SHOPPING CART</p>
      <hr className="border-gray-300  mr-8 ml-8 mt-8" />
      <div className="flex flex-row">
        <div className="w-2/3 pb-8">
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className="w-1/3 p-8">
        <div className="sticky top-[100px] pb-[100px]">
            <CheckoutCart />
        </div>
        </div>
      </div>

      <div>
        <p className="pl-8 ml-6 pr-8 mr-2 pt-8">YOU MAY ALSO LIKE</p>
        <TrendingItems />
      </div>

      <Footer />
    </>
  );
};
export default ShoppingCart;
