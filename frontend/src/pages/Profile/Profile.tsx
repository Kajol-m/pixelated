import Button from "@/common/Button/Button";
import Header from "@/common/Header/Header";
import TabMenu from "@/common/Profile/TabMenu";
import Account from "./Account";
import Footer from "@/common/Footer/Footer";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="lg:mx-[200px]">
      <div className="pt-[85px]"></div>
      <Account/>
      <hr className="border-gray-300" />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <TabMenu />
        </div>
        <div className="border border-gray-300 m-8 px-8 col-span-3">
          <div className="border-b border-gray-300 p-8 font-bold">PROFILE DETAILS</div>
          <div className=" flex flex-col gap-6 p-8">
            <div className="grid grid-cols-2 gap-8">
              <p>FULL NAME</p>
              <p>KAJOL MURMU</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <p>MOBILE NUMBER</p>
              <p>6206098696</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>EMAIL</div>
              <div>kajolmurmu29@gmail.com</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <p>DATE OF BIRTH</p>
              <p>16-09-2002</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <p>ADDRESS</p>
              <p>Jamshedpur</p>
            </div>
          </div>
          <div className="py-8 flex justify-center">
            <Button variant="signup-signin" className="w-1/2">EDIT</Button>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
