import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import Button from "@/common/Button/Button";
import {
  updateProfileDetails,
  selectProfile,
  type ProfileProps,
  setProfileDetails,
} from "@/store/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import api from "@/lib/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function EditDetailsForm() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userDetails = useSelector(selectProfile);
 
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get("/api/users/profile");
        const data = response.data[0];

        const userProfile: ProfileProps = {
          fullName: data.user_name || "",
          phone: data.phone || "",
          email: data.email || "",
          gender: data.gender || "",
          dob: data.date_of_birth ? new Date(data.date_of_birth) : null,
        };

        dispatch(setProfileDetails(userProfile));
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchUserDetails();
  }, [dispatch]);
  
  const addProfileDetails = async () => {
    try {
      const response = await api.post(`/api/users/profile/edit`, {
        user_name: userDetails.fullName,
        phone: userDetails.phone,
        date_of_birth: userDetails.dob
          ? userDetails.dob.toISOString().split("T")[0]
          : null,
        gender: userDetails.gender,
      });

      console.log("Udated user_details:", response.data);
      toast.success("Successfully Updated!");
      navigate("/profile");
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [tempPhone, setTempPhone] = useState("");

  return (
    <div className="w-full bg-white">
      <h2 className="text-xl font-semibold mb-6">EDIT DETAILS</h2>

      <div className="space-y-6">
        {/* Mobile Number */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Mobile Number*
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={isEditingPhone ? tempPhone : userDetails.phone}
                onChange={(e) => setTempPhone(e.target.value)}
                readOnly={!isEditingPhone}
                className={`w-full px-4 py-2 border border-gray-300 ${
                  isEditingPhone ? "bg-white" : "bg-gray-50"
                }`}
              />
              {!isEditingPhone && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              )}
            </div>
            <Button
              variant="signup-signin"
              onClick={() => {
                if (isEditingPhone) {
                  dispatch(
                    updateProfileDetails({ field: "phone", value: tempPhone })
                  );
                  setIsEditingPhone(false);
                } else {
                  setTempPhone(userDetails.phone);
                  setIsEditingPhone(true);
                }
              }}
            >
              {isEditingPhone ? "SAVE" : "CHANGE"}
            </Button>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Full Name</label>
          <input
            type="text"
            value={userDetails.fullName}
            onChange={(e) =>
              dispatch(
                updateProfileDetails({
                  field: "fullName",
                  value: e.target.value,
                })
              )
            }
            className="w-full px-4 py-2 border text-gray-500 border-gray-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Email</label>
          <input
            type="email"
            value={userDetails.email}
            readOnly
            className="w-full px-4 py-2 border text-gray-500 border-gray-300"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Gender</label>
          <div className="grid grid-cols-2 gap-4">
            {["Male", "Female"].map((gender) => (
              <button
                key={gender}
                onClick={() =>
                  dispatch(
                    updateProfileDetails({ field: "gender", value: gender })
                  )
                }
                className={`py-2 border text-center relative ${
                  userDetails.gender === gender
                    ? " border-2 rounded-sm font-semibold bg-gray-50"
                    : "border-gray-300 text-gray-700 "
                }`}
              >
                {userDetails.gender === gender && (
                  <Check className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                )}
                {gender}
              </button>
            ))}
          </div>
        </div>

        {/* Birthday */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Birthday (dd/mm/yyyy)
          </label>
          <input
            type="date"
            value={
              userDetails.dob ? userDetails.dob.toISOString().split("T")[0] : ""
            }
            onChange={(e) =>
              dispatch(
                updateProfileDetails({
                  field: "dob",
                  value: e.target.value ? new Date(e.target.value) : null,
                })
              )
            }
            className="w-full px-4 py-2 border text-gray-500 border-gray-300"
          />
        </div>

        {/* Save Button */}
        <div className="py-8 flex justify-center gap-8">
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/profile`);
            }}
            className="w-1/2"
          >
            CANCEL
          </Button>
          <Button
            variant="signup-signin"
            onClick={addProfileDetails}
            className="w-1/2"
          >
            SAVE DETAILS
          </Button>
        </div>
      </div>
    </div>
  );
}
