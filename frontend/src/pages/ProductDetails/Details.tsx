import { FaRegStar } from "react-icons/fa";
import Button from "../../common/Button/Button";
import { useParams } from "react-router-dom";
import { AdditionalDetails } from "./AdditionalDetails";
import { useEffect, useState } from "react";
import {toast} from "sonner";

interface ProductImage {
  url: string;
  display_order: number;
}

interface Product {
  product_id: string;
  product_name: string;
  price: string;
  images: ProductImage[];
  // add more fields if your API has them
}

const Details: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://pixelated-node-2.onrender.com/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;
  // user_id, product_id, size, color,quantity,price
  const setProductToCart = async () => {
  try {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("User") || "{}"); // assuming you store user data in localStorage
    const user_id = user.user_id; // adjust based on your backend schema

    if (!token || !user_id) {
      toast.error("Please login first!");
      return;
    }

    const payload = {
      user_id,
      product_id: product?.product_id,
      size: "M", // TODO: replace with selectedSize state
      color: "red", // TODO: replace with selectedColor state
      quantity: 1,
      price: product?.price,
    };
   console.log(payload);
    const res = await fetch(`https://pixelated-node-2.onrender.com/api/addCart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add to cart");
    }

    toast.success("Added to bag!");
    console.log("Added to Bag");
  } catch (error) {
    console.error("Error adding to cart:", error);
    toast.error("Something went wrong!");
  }
};


  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-bold">{product.product_name}</p>
      <p className="text-2xl font-bold">{product.price}</p>
      <hr className="border-gray-300 h-px w-full" />
      <div className="flex flex-row">
        <div className="flex flex-row pt-1">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <p className="font-semibold">(0 Reviews)</p>
      </div>
      <div className="flex flex-row">
        <p className="font-semibold relative">Size</p>
        <p className="absolute right-[150px] font-semibold underline text-gray-500 underline-offset-4 underline-offset-4 decoration-1">
          Size guide
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="size-active" onClick={() => {}}>
          S
        </Button>
        <Button variant="size-select" onClick={() => {}}>
          M
        </Button>
        <Button variant="size-select" onClick={() => {}}>
          L
        </Button>
        <Button variant="size-select" onClick={() => {}}>
          XL
        </Button>
      </div>
      <div>
        <div className="font-semibold">Color</div>
        <div className="flex flex-row gap-2 pt-2">
          <div className="border-2  rounded-full w-7 h-7 flex items-center justify-center">
            <button className="bg-red-500 rounded-full w-5 h-5"></button>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-green-500 rounded-full w-5 h-5"></button>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 rounded-full w-5 h-5"></button>
          </div>
        </div>
      </div>
      
        <div className="pt-2">
          <Button variant="signup-signin" onClick={setProductToCart} className="w-full">
            Add to Bag
          </Button>
        </div>
        {/* <div>Check PinCode</div> */}
      
      <div>
        <AdditionalDetails/>
      </div>
    </div>
  );
};
export default Details;
