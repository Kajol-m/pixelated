import { useSelector } from "react-redux";
import { selectOrders, orderPrice } from "@/store/features/orderSlice";
import Button from "@/common/Button/Button";
import { useNavigate } from "react-router-dom";

const CheckoutItems: React.FC = () => {
  const items = useSelector(selectOrders);
  const { subtotal, tax, shippingCost, total } = useSelector(orderPrice);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      {/* 🔥 Delivery Estimates or Product thumbnails */}
      <h2 className="font-semibold text-gray-700">Your Items</h2>

      {items.map((item) => (
        <div
          key={item.order_item_id}
          className="flex gap-3 items-start sm:items-center"
        >
          {/* Product Image */}
          <img
            src={item.image_url}
            alt={item.product_name}
            className="w-20 h-24 object-cover"
          />

          <div className="flex flex-col text-sm w-full">
            <p className="font-semibold">{item.product_name}</p>
            <p className="text-gray-600">Qty: {item.quantity}</p>
            <p className="font-semibold mt-1">
              $ {item.total_price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      {/* Price Summary */}
      <div className="mt-4 border-t pt-4 text-sm">
        <div className="flex justify-between">
          <p>Total MRP</p>
          <p>$ {subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <p>Tax</p>
          <p>$ {tax.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <p>Shipping</p>
          <p>$ {shippingCost.toFixed(2)}</p>
        </div>

        <div className="flex justify-between font-semibold text-lg mt-2">
          <p>Total Amount</p>
          <p>$ {total.toFixed(2)}</p>
        </div>
      </div>
      <div className="w-full pt-8 pb-4">
        <Button
          variant="signup-signin"
          onClick={() => navigate(`/payment`)}
          className="w-full"
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutItems;
