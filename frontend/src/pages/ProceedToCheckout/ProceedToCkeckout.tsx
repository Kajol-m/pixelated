import AddressSection from "./AddressSection";
import CheckoutItems from "./OrderSection";
import OrderProcess from "@/common/OrderProcess/OrderProcess";

const ProceedToCkeckout: React.FC = () => {
  return (
    <div>
      <OrderProcess />
      <hr className="border-gray-300 h-px w-full" />

      {/* Responsive layout */}
      <div className="flex flex-col lg:flex-row px-4 md:px-10 lg:px-20 xl:px-40">

        {/* LEFT — Address Section */}
        <div className="w-full lg:w-3/5 p-4">
          <AddressSection />
        </div>

        {/* RIGHT — Order Summary */}
        <div className="w-full lg:w-2/5 p-4">
          <CheckoutItems />
        </div>

      </div>
    </div>
  );
};
export default ProceedToCkeckout;
