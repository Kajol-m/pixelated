import Header from "@/common/Header/Header";
import Account from "./Account";
import TabMenu from "@/common/Profile/TabMenu";
import Footer from "@/common/Footer/Footer";
import AddressCard, { type Address } from "./AddressCard";
import { useState } from "react";
import Button from "@/common/Button/Button";

const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Kajol Murmu",
      phone: "6206098696",
      line1: "123 Fashion Street",
      line2: "Near Market",
      city: "Jamshedpur",
      state: "Jharkhand",
      postalCode: "831001",
      country: "India",
      isDefault: true,
    },
    {
      id: 2,
      name: "Home",
      phone: "6206098697",
      line1: "456 Another Rd",
      city: "Jamshedpur",
      state: "Jharkhand",
      postalCode: "831002",
      country: "India",
    },
  ]);

  const handleEdit = (addr: Address) => {
    // Open an edit modal or navigate to an edit page
    console.log("edit", addr);
  };

  const handleDelete = (id: string | number) => {
    if (!confirm("Are you sure you want to delete this address?")) return;
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const handleSetDefault = (id: string | number) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <div>
      <Header />
      <div className="lg:mx-[200px]">
        <div className="pt-[85px]"></div>
        <Account />
        <hr className="border-gray-300" />
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <TabMenu />
          </div>
          <div className="col-span-3 p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-0">
                SAVED ADDRESSES
              </h2>

              {/* Add Button */}
              <Button
                variant="signup-signin"
                className="w-full sm:w-auto px-6 py-2"
                onClick={() => console.log("Add new")}
              >
                Add New Address +
              </Button>
            </div>

            <div className="space-y-4">
              {addresses.map((a) => (
                <AddressCard
                  key={a.id}
                  address={a}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onSetDefault={handleSetDefault}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Addresses;
