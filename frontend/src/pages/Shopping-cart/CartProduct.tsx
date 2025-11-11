import api from "@/lib/api";
import {
  removeOrderItem,
  selectOrders,
  setOrdersList,
  recalculateOrderPrice,
  type OrderProps,
} from "@/store/features/orderSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

interface BackendCartItem {
  product_id: string;
  product_name: string;
  unit_price: string | number;
  total_price: string | number;
  size: string;
  color: string;
  image_url: string;
  order_item_id: string;
  image_id?: string;
}

const CartProduct: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  const user_id = user.user_id;
  const baseUrl = import.meta.env.VITE_API_URL;

  // Fetch cart products
  useEffect(() => {
    const getCartProducts = async () => {
      if (!token || !user_id) {
        toast.error("Please login first!");
        return;
      }

      try {
        const res = await api.get(`${baseUrl}/api/getCart`);

        const data = await res.data;
        console.log("Cart data from backend:", data);
        if (!data.result || !Array.isArray(data.result)) {
          console.error("Backend returned invalid cart data:", data);
          toast.error("Something went wrong!");
          return;
        }


        const items: OrderProps[] = (data.result as BackendCartItem[]).map(
          (item: BackendCartItem): OrderProps => ({
            ...item,
            unit_price: Number(item.unit_price),
            total_price: Number(item.total_price),
            size: item.size as "s" | "m" | "l" | "xl",
            image_id: item.image_id || "",
            quantity: 1,
            user_id: user_id,
          })
        );

        dispatch(setOrdersList(items));
        dispatch(recalculateOrderPrice());
      } catch (error) {
        console.error("Error fetching data for cart:", error);
        toast.error("Something went wrong!");
      }
    };

    getCartProducts();
  }, [user_id]);

  const removeFromCart = async (order_item_id: string) => {
    if (!user_id) {
      toast.error("Please login first.");
      return;
    }
    try {
      await api.delete("/api/removeCart", {
        data: { user_id, order_item_id }, //user order_item_id for consistency -fix in the backend
      });

      dispatch(removeOrderItem(order_item_id));
      dispatch(recalculateOrderPrice());
      toast.success("Item removed from cart!");
    } catch (error) {
      console.error("Error removing product for cart:", error);
      toast.error("Something went wrong!");
    }
  };

  const handleSaveForLater = () => {
    toast("Saved for later!");
  };

  const handleEdit = () => {
    toast("Edit feature coming soon!");
  };

  return (
    <div className="flex flex-col gap-4">
      {orders.map((item) => (
        <div
          key={item.order_item_id}
          className="flex flex-row pb-8 pt-8 lg:mx-8 md:mx-6 mx-4 border-b border-gray-300 relative"
        >
          <div className="w-[150px]">
            <img src={item.image_url} alt={item.product_name} />
          </div>
          <div className="flex flex-col gap-2 pl-8">
            <div className="flex lg:flex-row md:flex-row flex-col lg:text-xl md:text-xl text-md font-semibold">
              <p>{item.product_name}</p>
              <p className="lg:absolute lg:right-8 md:absolute md:right-8">
                $ {item.unit_price.toFixed(2)}
              </p>
            </div>
            <div className="lg:text-l md:text-l text-sm">
              <p>Size: {item.size}</p>
              <p>Color: {item.color}</p>
              <p>Quantity: 1</p>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-8 gap-1 text-gray-500 lg:pt-[50px] md:pt-[50px] text-[13px]">
              <p className="">14 days return available</p>
              <div className="lg:absolute flex flex-row lg:right-8 gap-2 underline underline-offset-4">
                <button onClick={() => removeFromCart(item.order_item_id)}>
                  Remove
                </button>
                <button onClick={() => handleSaveForLater()}>
                  Save for later
                </button>
                <button onClick={() => handleEdit()}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
