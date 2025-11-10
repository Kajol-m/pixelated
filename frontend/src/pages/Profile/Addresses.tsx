import Header from "@/common/Header/Header";
import Account from "./Account";
import TabMenu from "@/common/Profile/TabMenu";
import Footer from "@/common/Footer/Footer";
import AddressCard from "./AddressCard";
import { useEffect, useState } from "react";
import Button from "@/common/Button/Button";
import {
  deleteAddress,
  selectAddresses,
  selectAddressLoading,
  setAddressList,
  setDefaultAddress,
  setLoading,
  type addressProps,
} from "@/store/features/addressSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "@/lib/api";
import { toast } from "sonner";

const Addresses = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(selectAddresses);
  const loading = useSelector(selectAddressLoading);
  const [localLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddresses = async () => {
      dispatch(setLoading(true));
      try {
        const response = await api.get("/api/address");

        console.log("Fetched addresses:", response.data);

        // Assuming backend returns array of addresses
        dispatch(setAddressList(response.data));
      } catch (error: unknown) {
        console.error("Failed to fetch addresses:", error);

        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Failed to load addresses";

        toast.error(errorMessage);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchAddresses();
  }, [dispatch]);

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
          <div className="col-span-3 p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">
                SAVED ADDRESSES
              </h2>

              {/* Add Button */}
              <Link to="/address/add">
                <Button
                  variant="signup-signin"
                  className="w-full sm:w-auto px-6 py-2"
                  onClick={() => console.log("Add new")}
                >
                  Add New Address +
                </Button>
              </Link>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            ) : addresses.length === 0 ? (
              // Empty State
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  No addresses saved yet
                </p>
                <Link to="/address/add">
                  <Button variant="signup-signin">
                    Add Your First Address
                  </Button>
                </Link>
              </div>
            ) : (
              // Address List
              <div className="space-y-8">
                {addresses.map((a) => (
                  <AddressCard
                    key={a.address_id}
                    address={a}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSetDefault={handleSetDefault}
                  />
                ))}
              </div>
            )}

            {/* Loading Overlay for Actions */}
            {localLoading && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Addresses;
