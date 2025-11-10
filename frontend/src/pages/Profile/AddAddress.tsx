import Footer from "@/common/Footer/Footer";
import Header from "@/common/Header/Header";
import Account from "./Account";
import TabMenu from "@/common/Profile/TabMenu";
import AddAddressForm from "./AddAddressForm";

const AddAddress=()=>{
     return (
    <div>
      <Header />
      <div className="pt-[85px]"></div>
        <hr className="border-gray-300 h-px w-full" />
      <div className="lg:mx-[200px]">
        <Account />
        <hr className="border-gray-300" />
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <TabMenu />
          </div>
          <div className="col-span-3 p-8 flex justify-center items-center">
            <AddAddressForm/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AddAddress;

