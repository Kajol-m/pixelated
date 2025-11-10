import Header from "@/common/Header/Header";
import ProfileImageSection from "./ProfileImageSection";
import ProfileCard from "@/common/Profile/ProfileCard";
import { FaBoxOpen, FaHeart, FaUser } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";
import TabMenu from "@/common/Profile/TabMenu";
import Account from "./Account";
import Footer from "@/common/Footer/Footer";
import { Link } from "react-router-dom";

const Overview: React.FC = () => {

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
          <div className="flex flex-col col-span-3 p-8 gap-8">
            <ProfileImageSection />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <Link to="/orders">
                <ProfileCard
                  profileCardIcon={<FaBoxOpen />}
                  profileCardTitle="ORDERS"
                  profileCardDescription="check your order description"
                />
              </Link>
              <Link to="/wishlist">
                <ProfileCard
                  profileCardIcon={<FaHeart />}
                  profileCardTitle="WISHLIST"
                  profileCardDescription="all your curated product collections"
                />
              </Link>
              <Link to="/address">
                <ProfileCard
                  profileCardIcon={<MdOutlineLocationCity />}
                  profileCardTitle="ADDRESSES"
                  profileCardDescription="save addresses for a hastle-free checkout"
                />
              </Link>
              <Link to="/profile">
                <ProfileCard
                  profileCardIcon={<FaUser />}
                  profileCardTitle="PROFILE"
                  profileCardDescription="change your profile deatils"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Overview;
