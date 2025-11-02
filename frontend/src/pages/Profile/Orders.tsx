import Footer from "@/common/Footer/Footer";
import Header from "@/common/Header/Header";
import Account from "./Account";
import TabMenu from "@/common/Profile/TabMenu";

const Orders=()=>{
     return (
    <div>
      <Header />
      <div className="lg:mx-[200px]">
        <div className="pt-[85px]"></div>
        <Account />
        <hr className="border-gray-300" />
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <TabMenu />
          </div>
          <div className="col-span-3 p-8 flex justify-center items-center">
            <p>NO ORDERS YET</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Orders;

