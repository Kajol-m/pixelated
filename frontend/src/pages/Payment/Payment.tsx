import Button from "@/common/Button/Button";
import OrderProcess from "@/common/OrderProcess/OrderProcess";

const Payment = () => {
  return (
    <div>
      <OrderProcess />
      <hr className="border-gray-300 h-px w-full" />
      <div className="flex items-center justify-center">
        <Button variant="signup-signin">Pay Now</Button>
      </div>
    </div>
  );
};

export default Payment;
