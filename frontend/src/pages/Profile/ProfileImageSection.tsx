import api from "@/lib/api";
import {
  selectProfile,
  setProfileDetails,
  type ProfileProps,
} from "@/store/features/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileImageSection() {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

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

      dispatch(setProfileDetails(UserProfileDetails));
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div
      className="flex flex-col sm:flex-row
        items-center sm:items-start
        gap-4
        border border-gray-300
        p-4"
    >
      <div className="col-span-1 sm:row-span-1">
        <img
          src="/user_icon.png"
          alt="Profile"
          className="w-16 h-16
            sm:w-20 sm:h-20
            md:w-24 md:h-24
            lg:w-24 lg:h-24
            rounded-full
            object-cover
            border-1 border-gray-300
            cursor-pointer
            transition-transform duration-300 hover:scale-102"
        />
      </div>
      <div className="col-span-5">
        <h2 className="text-lg font-semibold">
          {profile.fullName.toUpperCase() || "NAME"}
        </h2>
        <p className="text-gray-600">{profile.email}</p>
      </div>
    </div>
  );
}
