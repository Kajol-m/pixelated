// const CartProduct: React.FC = () => {
//   return (
//     <>
//       <div className="flex flex-row pb-8 pt-8 mr-8 ml-8 border-b border-gray-300 relative ">
//         <div className="w-[150px]">
//           <img src="/Pink-bow-top.webp" alt="" />
//         </div>
//         <div className="flex flex-col gap-2 pl-8 ">
//           <div className="flex lg:flex-row md:flex-row flex-col lg:text-xl md:text-xl text-md font-semibold">
//             <p className="">Paranoia Graphic Baggy Jeans</p>
//             <p className="lg:absolute lg:right-8 md:absolute md:right-8">Rs. 10,700.00</p>
//           </div>
//           <div className="lg:text-l md:text-l text-sm">
//             <p>Size : XS</p>
//             <p>Color : Pink</p>
//             <p>Quantity : 2</p>
//             {/*Increment-Decrement*/}
//           </div>
//           <div className="flex lg:flex-row flex-col lg:gap-8 gap-1 text-gray-500 lg:pt-[50px] md:pt-[50px] text-[13px]">
//             <p className="">14 days return available</p>
//             <div className="lg:absolute flex flex-row lg:right-8 gap-2 underline underline-offset-4">
//               <button>Remove</button>
//               <button>Save for later</button>
//               <button>Edit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CartProduct;
import { calculateClothingTax } from "@/lib/tax";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CartItem {
  product_id: string;
  product_name: string;
  unit_price: number;
  total_price: number;
  size: string;
  color: string;
  image_url: string;
  order_item_id: string;
}

interface BackendCartItem {
  product_id: string;
  product_name: string;
  unit_price: string | number;
  total_price: string | number;
  size: string;
  color: string;
  image_url: string;
  order_item_id: string;
}

const CartProduct: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Fetch cart products
  useEffect(() => {
    const getCartProducts = async () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("User") || "{}");
      const user_id = user.user_id;

      if (!token || !user_id) {
        toast.error("Please login first!");
        return;
      }

      try {
        const res = await fetch(
          `https://pixelated-node-2.onrender.com/api/getCart`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        if (!data.result || !Array.isArray(data.result)) {
          console.error("Backend returned invalid cart data:", data);
          toast.error("Something went wrong!");
          return;
        }

        // Convert prices to numbers

        const items: CartItem[] = (data.result as BackendCartItem[]).map(
          (item: BackendCartItem): CartItem => ({
            ...item,
            unit_price: Number(item.unit_price),
            total_price: Number(item.total_price),
          })
        );

        setCartItems(items);

        // Calculate totals after fetch
        const total = items.reduce((sum, item) => sum + item.total_price, 0);

        const tax = calculateClothingTax(total);

        // Store in localStorage
        localStorage.setItem("totalOrderCost", total.toString());
        localStorage.setItem("taxOnOrder", tax.toString());
      } catch (error) {
        console.error("Error fetching data for cart:", error);
        toast.error("Something went wrong!");
      }
    };

    getCartProducts();
  }, []);
  
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => (
        <div
          key={item.order_item_id}
          className="flex flex-row pb-8 pt-8 mr-8 ml-8 border-b border-gray-300 relative"
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
                <button>Remove</button>
                <button>Save for later</button>
                <button>Edit</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
