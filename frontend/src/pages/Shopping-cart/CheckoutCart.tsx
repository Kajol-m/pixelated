import { toast } from "sonner";
import Button from "../../common/Button/Button";
import { orderPrice } from "@/store/features/orderSlice";
import { useSelector } from "react-redux";

const CheckoutCart: React.FC = () => {
  const { subtotal, tax, shippingCost, total } = useSelector(orderPrice);

  return (
    <div className="relative">
      <h1 className="pb-2">Order Summary</h1>
      <div className=" flex flex-col border border-gray-500 text-sm gap-2 p-4">
        <div className="flex flex-row">
          <p>Subtotal</p>
          <p className="absolute right-8">$ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex flex-row">
          <p>Shipping</p>
          <p className="absolute right-8">$ {shippingCost.toFixed(2)}</p>
        </div>
        <div className="flex flex-row">
          <p>Extimated Tax</p>
          <p className="absolute right-8">$ {tax.toFixed(2)}</p>
        </div>
        <div className="flex flex-row font-semibold text-xl">
          <p>Total</p>
          <p className="absolute right-8">$ {total.toFixed(2)}</p>
        </div>
        <div className="w-full pt-8 pb-4">
          <Button
            variant="signup-signin"
            onClick={() =>
              toast.warning("This feature is yet to be integrated!")
            }
            className="w-full"
          >
            Proceed to Checkout
          </Button>
        </div>
        {/* <hr className=" border-gray-300 mt-4" /> */}
        {/* <div className="hidden">
          <p>PROMO CODE</p>
        </div> */}
      </div>
    </div>
  );
};
export default CheckoutCart;
