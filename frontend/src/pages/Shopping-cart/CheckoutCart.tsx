import { toast } from "sonner";
import Button from "../../common/Button/Button";

const CheckoutCart: React.FC = () => {
  const totalPrice = Number(
    (Number(localStorage.getItem("totalOrderCost")) || 0).toFixed(2)
  );
  const taxPrice = Number(
    (Number(localStorage.getItem("taxOnOrder")) || 0).toFixed(2)
  );
  const Shipping = 1;

  const totalOrderCost = Number((totalPrice + taxPrice + Shipping).toFixed(2));

  console.log("Total Order Cost:", totalOrderCost);

  return (
    <div className="relative">
      <h1 className="pb-2">Order Summary</h1>
      <div className=" flex flex-col border border-gray-500 text-sm gap-2 p-4">
        <div className="flex flex-row">
          <p>Subtotal</p>
          <p className="absolute right-8">$ {totalPrice}</p>
        </div>
        <div className="flex flex-row">
          <p>Shipping</p>
          <p className="absolute right-8">$ {Shipping}</p>
        </div>
        <div className="flex flex-row">
          <p>Extimated Tax</p>
          <p className="absolute right-8">$ {taxPrice}</p>
        </div>
        <div className="flex flex-row font-semibold text-xl">
          <p>Total</p>
          <p className="absolute right-8">$ {totalOrderCost}</p>
        </div>
        <div className="w-full pt-8 pb-4">
          <Button variant="signup-signin" onClick={() => toast.warning("This feature is yet to be integrated!")} className="w-full">
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
