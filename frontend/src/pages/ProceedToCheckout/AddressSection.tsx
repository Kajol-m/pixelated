import Button from "@/common/Button/Button";
import { useEffect, useState } from "react";
import AddAddressForm from "../Profile/AddAddressForm";
import { useSelector } from "react-redux";
import {
  deleteAddress,
  selectAddresses,
  setAddressList,
  setDefaultAddress,
  setSelectedShippingAddress,
  type addressProps,
} from "@/store/features/addressSlice";
import AddressCard from "../Profile/AddressCard";
import { useAppDispatch } from "@/store/hook";
import api from "@/lib/api";
import { useNavigate } from "react-router";
import type { RootState } from "@/store/store";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const AddressSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const addresses = useSelector(selectAddresses);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const defaultAddress = addresses.find((a) => a.is_default === 1);
  const otherAddresses = addresses.filter((a) => a.is_default === 0);
  const selectedShippingId = useSelector(
    (s: RootState) => s.addresses.selectedShippingAddressId
  );

  useEffect(() => {
    const fetchAddresses = async () => {
      if (addresses.length > 0) return; // Already loaded
      try {
        const response = await api.get("/api/address");
        dispatch(setAddressList(response.data));
      } catch (error: unknown) {
        console.error("Failed to fetch addresses:", error);

        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Failed to load addresses";

        toast.error(errorMessage);
      }
    };

    fetchAddresses();
  }, [addresses.length, dispatch]);

  const handleSelectShipping = (id: string) => {
    dispatch(setSelectedShippingAddress(id));
  };

  function handleEdit(address: addressProps) {
    navigate(`/address/edit/${address.address_id}`);
  }

  async function handleDelete(address_id: string): Promise<void> {
    try {
      const response = await api.delete("/api/address", {
        data: { address_id },
      });
      dispatch(deleteAddress(address_id));
      console.log("Deleted:", response.data);
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  async function handleSetDefault(address_id: string): Promise<void> {
    try {
      await api.put("/api/address/default", {
        address_id: address_id,
      });
      dispatch(setDefaultAddress(address_id));
    } catch (error) {
      console.error("Error setting default address:", error);
    }
  }

  useEffect(() => {
    // If nothing selected yet & a default address exists → auto-select it
    if (!selectedShippingId && defaultAddress) {
      dispatch(setSelectedShippingAddress(defaultAddress.address_id));
    }
  }, [defaultAddress, selectedShippingId, dispatch]);

  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p
            className="font-semibold text-lg flex flex-row gap-2"
            onClick={() => navigate(-1)}
          >
            <span className="flex lg:hidden">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </span>
            SELECT DELIVERY ADDRESS
          </p>

          <div className="lg:flex hidden">
            <Button
              variant="signup-signin"
              className="w-full sm:w-auto px-6 py-2"
              onClick={() => setShowPopup(true)}
            >
              Add New Address +
            </Button>
            {showPopup && (
              <AddAddressForm close={() => setShowPopup(false)} mode="popup" />
            )}
          </div>
        </div>
        <div className="space-y-8">
          {defaultAddress && (
            <div className="space-y-3">
              <h3 className="text-gray-700">DEFAULT ADDRESS</h3>

              <div
                className="relative p-2 border border-gray-300 
             flex flex-row items-center lg:gap-4 md:gap-4 gap-2"
                onClick={() => handleSelectShipping(defaultAddress.address_id)}
              >
                <input
                  type="radio"
                  name="shippingAddress"
                  checked={selectedShippingId === defaultAddress.address_id}
                  onChange={() =>
                    handleSelectShipping(defaultAddress.address_id)
                  }
                  className="h-5 w-5"
                />

                <AddressCard
                  address={defaultAddress}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onSetDefault={handleSetDefault}
                  className="border-transparent hover:shadow-transparent"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 space-y-3">
          <h3 className="text-gray-700">OTHER ADDRESSES</h3>

          {otherAddresses.map((a) => (
            <div
              className="relative p-2 border border-gray-300 
             flex flex-row items-center lg:gap-4 md:gap-4 gap-2"
              onClick={() => handleSelectShipping(a.address_id)}
            >
              <input
                type="radio"
                name="shippingAddress"
                checked={selectedShippingId === a.address_id}
                onChange={() => handleSelectShipping(a.address_id)}
                className="h-5 w-5"
              />

              <AddressCard
                address={a}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSetDefault={handleSetDefault}
                className="border-transparent hover:shadow-transparent"
              />
            </div>
          ))}
        </div>
        <div className="flex lg:hidden mt-6 space-y-3">
          <Button
            variant="signup-signin"
            className="w-full sm:w-auto px-6 py-2"
            onClick={() => setShowPopup(true)}
          >
            Add New Address +
          </Button>
          {showPopup && (
            <AddAddressForm close={() => setShowPopup(false)} mode="popup" />
          )}
        </div>
      </div>
    </div>
  );
};
export default AddressSection;
