import Button from "@/common/Button/Button";
import Header from "@/common/Header/Header";
import TabMenu from "@/common/Profile/TabMenu";
import Account from "./Account";
import Footer from "@/common/Footer/Footer";
import { useEffect } from "react";
import api from "@/lib/api";
import { useNavigate } from "react-router-dom";
import {
  setProfileDetails,
  type ProfileProps,
  selectProfile,
} from "@/store/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector(selectProfile);

  const fetchUserDetails = async () => {
    try {
      const response = await api.get(`/api/users/profile`);
      const data = response.data[0];

      const UserProfileDetails: ProfileProps = {
        fullName: data.user_name || "",
        phone: data.phone || "",
        email: data.email || "",
        gender: data.gender || "",
        dob: data.date_of_birth ? new Date(data.date_of_birth) : null,
      };

      //store in Redux
      dispatch(setProfileDetails(UserProfileDetails));
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  // Call the function when component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleEdit = () => {
    navigate("/profile/edit");
  };

  return (
    <div>
      <Header />
      <div className="pt-[85px]"></div>
      <hr className="border-gray-300  w-full" />
      <div className="lg:mx-[200px]" >
        <Account />
        <hr className="border-gray-300" />
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <TabMenu />
          </div>
          <div className="border border-gray-300 m-8 lg:px-8 md:px-8 px-2 col-span-3">
            <div className="text-xl font-semibold lg:px-8 md:px-8 px-2 pt-8">
              PROFILE DETAILS
            </div>
            <div className=" flex flex-col gap-6 lg:p-8 md:p-8 px-2 pt-8">
              <div className="grid grid-cols-2 lg:gap-8 md:gap-8 gap-2">
                <p>FULL NAME</p>
                <p>{userDetails.fullName.toUpperCase() || "Not specified"}</p>
              </div>
              <div className="grid grid-cols-2 lg:gap-8 md:gap-8 gap-2">
                <p>MOBILE NUMBER</p>
                <p>{userDetails.phone || "Not specified"}</p>
              </div>
              <div className="grid grid-cols-2 lg:gap-8 md:gap-8 gap-2">
                <div>EMAIL</div>
                <div>{userDetails.email || "Not specified"}</div>
              </div>
              <div className="grid grid-cols-2 lg:gap-8 md:gap-8 gap-2">
                <p>GENDER</p>
                <p>{userDetails.gender.toUpperCase() || "Not specified"}</p>
              </div>
              <div className="grid grid-cols-2 lg:gap-8 md:gap-8 gap-2">
                <p>DATE OF BIRTH</p>
                <p>
                  {userDetails.dob?.toLocaleDateString() || "Not specified"}
                </p>
              </div>
            </div>
            <div className="py-8 flex justify-center">
              <Button
                variant="signup-signin"
                className="w-1/2"
                onClick={handleEdit}
              >
                EDIT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
