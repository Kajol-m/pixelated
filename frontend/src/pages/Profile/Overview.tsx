import Header from "@/common/Header/Header";
import ProfileImageSection from "./ProfileImageSection";
import { useEffect } from "react";
import { toast } from "sonner";
import ProfileCard from "@/common/Profile/ProfileCard";
import { FaBoxOpen, FaHeart, FaUser } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";
import TabMenu from "@/common/Profile/TabMenu";
import Account from "./Account";
import Footer from "@/common/Footer/Footer";

const Overview: React.FC = () => {
  
  useEffect(() => {
    // Check if the toast has already been shown in this session
    const toastShown = sessionStorage.getItem("profileToastShown");

    if (!toastShown) {
      const timer = setTimeout(() => {
        toast.warning("This component is not completed.");
        sessionStorage.setItem("profileToastShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-[85px]"></div>
        <hr className="border-gray-300 h-px w-full" />
      <div className="lg:mx-[200px]">
      
      <Account/>
      <hr className="border-gray-300"/>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <TabMenu />
        </div>
        <div className="flex flex-col col-span-3 p-8 gap-8">
          <ProfileImageSection />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProfileCard
              profileCardIcon={<FaBoxOpen />}
              profileCardTitle="ORDERS"
              profileCardDescription="check your order description"
            />
            <ProfileCard
              profileCardIcon={<FaHeart />}
              profileCardTitle="WISHLIST"
              profileCardDescription="all your curated product collections"
            />
            <ProfileCard
              profileCardIcon={<MdOutlineLocationCity />}
              profileCardTitle="ADDRESSES"
              profileCardDescription="save addresses for a hastle-free checkout"
            />
            <ProfileCard
              profileCardIcon={<FaUser />}
              profileCardTitle="PROFILE"
              profileCardDescription="change your profile deatils"
            />
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Overview;
