import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/common/Button/Button";
import api from "@/lib/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addAddress,
  setLoading as setAddressLoading,
} from "@/store/features/addressSlice";

type AddAddressFormProps = {
  close?: () => void;
  mode?: "popup" | "page"; // NEW
};

export default function AddAddressForm({
  close,
  mode = "page",
}: AddAddressFormProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addressDetails, setAddressDetails] = useState({
    address_type: "Home",
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "India",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setAddressDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveAddress = async () => {
    // Validation
    if (!addressDetails.street_address.trim()) {
      toast.error("Please enter street address");
      return;
    }
    if (!addressDetails.city.trim()) {
      toast.error("Please enter city");
      return;
    }
    if (!addressDetails.state) {
      toast.error("Please select state");
      return;
    }
    if (
      !addressDetails.postal_code ||
      addressDetails.postal_code.length !== 6
    ) {
      toast.error("Please enter valid 6-digit postal code");
      return;
    }
    if (!addressDetails.country.trim()) {
      toast.error("Please enter country");
      return;
    }

    setLoading(true);
    dispatch(setAddressLoading(true));

    try {
      // Send data to backend
      const response = await api.post("/api/address", {
        address_type: addressDetails.address_type,
        street_address: addressDetails.street_address,
        city: addressDetails.city,
        state: addressDetails.state,
        postal_code: addressDetails.postal_code,
        country: addressDetails.country,
      });

      console.log("Address saved:", response.data);

      // Add to Redux store
      dispatch(addAddress(response.data));

      toast.success("Address saved successfully!");

      navigate("/address");
    } catch (error: unknown) {
      console.error("Failed to save address:", error);

      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "Failed to save address";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
      dispatch(setAddressLoading(false));
    }
  };

  const addressTypes = ["Home", "Work", "Other"];
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="w-full bg-white">
      <h2 className="text-xl font-semibold mb-6">ADD NEW ADDRESS</h2>

      <div className="space-y-6">
        {/* Street Address */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Street Address*
          </label>
          <textarea
            value={addressDetails.street_address}
            onChange={(e) =>
              handleInputChange("street_address", e.target.value)
            }
            rows={3}
            placeholder="House No., Building Name, Road Name, Area"
            className="w-full px-4 py-2 border text-gray-500 border-gray-300 resize-none"
          />
        </div>

        {/* City and State */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">City*</label>
            <input
              type="text"
              value={addressDetails.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Enter city"
              className="w-full px-4 py-2 border text-gray-500 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">State*</label>
            <select
              value={addressDetails.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="w-full px-4 py-2 border text-gray-500 border-gray-300 bg-white"
            >
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Postal Code and Country */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Postal Code*
            </label>
            <input
              type="text"
              value={addressDetails.postal_code}
              onChange={(e) => {
                // Only allow numbers and limit to 6 digits
                const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                handleInputChange("postal_code", value);
              }}
              placeholder="e.g., 400001"
              maxLength={6}
              className="w-full px-4 py-2 border text-gray-500 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Country*</label>
            <input
              type="text"
              value={addressDetails.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="w-full px-4 py-2 border text-gray-500 border-gray-300"
            />
          </div>
        </div>

        {/* Address Type Selection */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Save Address As
          </label>
          <div className="grid grid-cols-3 gap-4">
            {addressTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleInputChange("address_type", type)}
                className={`py-2 border text-center relative ${
                  addressDetails.address_type === type
                    ? "border-2 rounded-sm font-semibold bg-gray-50"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {addressDetails.address_type === type && (
                  <Check className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                )}
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="py-8 flex justify-center gap-8">
          <Button
            variant="primary"
            onClick={() => {
              if (mode === "popup") {
                close?.(); 
              } else {
                navigate("/address");
              }
            }}
            className="w-1/2"
          >
            CANCEL
          </Button>
          <Button
            variant="signup-signin"
            onClick={handleSaveAddress}
            disabled={loading}
            className="w-1/2"
          >
            {loading ? "SAVING..." : "SAVE ADDRESS"}
          </Button>
        </div>
      </div>
    </div>
  );
}
