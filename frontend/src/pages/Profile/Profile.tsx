import Button from "@/common/Button/Button";
import Header from "@/common/Header/Header";
import TabMenu from "@/common/Profile/TabMenu";
import Account from "./Account";
import Footer from "@/common/Footer/Footer";
import { useEffect } from "react";
import api from "@/lib/api";
import { useNavigate } from "react-router-dom";
import { setProfileDetails, type ProfileProps,selectProfile } from "@/store/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  // const [userDetails,setUserDetails]=useState<ProfileProps>({
  //   fullName:"",
  //   phone:"",
  //   email:"",
  //   gender:"",
  //   dob: null
  // })

  const userDetails = useSelector(selectProfile);


  const fetchUserDetails = async () => {
    try {
      const response = await api.get(`/api/users/profile`);
      const data = response.data[0];

      const UserProfileDetails:ProfileProps={
        fullName: data.user_name || "",
        phone: data.phone || "",
        email: data.email || "",
        gender: data.gender || "",
        dob: data.date_of_birth ? new Date(data.date_of_birth) : null,
      };

      //store in Redux
      dispatch(setProfileDetails(UserProfileDetails));

    } catch (error) {
      console.error('Failed to fetch user details:', error);
    }
  };

  // Call the function when component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);
  
  const handleEdit=()=>{
    navigate("/profile/edit");
  }

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
          <div className="border border-gray-300 m-8 px-8 col-span-3">
            <div className="text-xl font-semibold px-8 pt-8">
              PROFILE DETAILS
            </div>
            <div className=" flex flex-col gap-6 p-8">
              <div className="grid grid-cols-2 gap-8">
                <p>FULL NAME</p>
                <p>{userDetails.fullName.toUpperCase() || 'Not specified'}</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <p>MOBILE NUMBER</p>
                <p>{userDetails.phone || 'Not specified'}</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>EMAIL</div>
                <div>{userDetails.email || 'Not specified'}</div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <p>GENDER</p>
                <p>{userDetails.gender.toUpperCase() || 'Not specified'}</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <p>DATE OF BIRTH</p>
                <p>{userDetails.dob?.toLocaleDateString() || 'Not specified'}</p>
              </div>
            </div>
            <div className="py-8 flex justify-center">
              <Button variant="signup-signin" className="w-1/2" onClick={handleEdit}>
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
