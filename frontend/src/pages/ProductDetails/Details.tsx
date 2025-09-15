import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Button from "../../components/Button/Button";
import {Link, useNavigate} from "react-router-dom";

const Details: React.FC = () => {

  const navigate=useNavigate();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-bold">No Mercy Black Borg Jacket</p>
      <p className="text-2xl font-bold">Rs. 12,500.00</p>
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
      <Link to ="/ShoppingCart">
      <div className="pt-2"><Button variant="signup-signin" onClick={()=>{}} className="w-full">Add to Bag</Button></div>
      {/* <div>Check PinCode</div> */}
      </Link>
      <div>
         <div>
<p className="font-semibold pt-2">Description</p>
{/* <p>Not just a borg jacket, it’s armor.
   <ul className="list-disc ml-4">
      <li>Black fleece hoodie jacket</li>
      <li>All over grey thorns design</li>
      <li>Zip fastening with signature hardware</li>
      <li>Minga rubber logo detail</li>
      <li>Oversized fit</li>
      <li>Long sleeves</li>
      <li>Drop shoulders</li>
      <li>Main: 100% polyester</li>
      <li>Lining: 100% cotton</li>
   </ul>
   <p>Chiara wears size S/M and is 172 cm | 5'7" tall</p>
 </p> */}
         </div>
        
        <p className="font-semibold pt-2">Shipping Policy</p>
        <p className="font-semibold pt-2">Delivery and returns</p>
      </div>
    </div>
  );
};
export default Details;
