import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Button from "../../common/Button/Button";
import { Link, useParams } from "react-router-dom";
import { AdditionalDetails } from "./AdditionalDetails";
import { useEffect, useState } from "react";

const Details: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

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
      <Link to="/ShoppingCart">
        <div className="pt-2">
          <Button variant="signup-signin" onClick={() => {}} className="w-full">
            Add to Bag
          </Button>
        </div>
        {/* <div>Check PinCode</div> */}
      </Link>
      <div>
        <AdditionalDetails/>
      </div>
    </div>
  );
};
export default Details;
