import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import UserDropdown from "../Dropdown/UserDropdown";

import { GoHomeFill } from "react-icons/go";
import { BiSolidCategory } from "react-icons/bi";
import { toast } from "sonner";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="hidden fixed top-0 left-0 w-full bg-white z-50 lg:flex justify-between py-5 lg:px-8 md:px-5 px-5 items-center">
        {/*Left Side */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link to="/">
            <h1 className="text-3xl font-semibold">PIXELATED</h1>
          </Link>

          <nav className="flex">
            <ul className="flex gap-4 ">
              <li>
                <Link to={`/product/clothing`}>CLOTHING</Link>
              </li>
              <Link to={`/product/accessories`}>ACCESSORIES</Link>
              <li>
                <Link to={`/bestsellers`}>BESTSELLERS</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/*Right Side */}
        <div className="hidden lg:flex flex items-center gap-4">
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              onChange={() => {}}
              id="search"
              className="border border-black rounded-none px-3 py-2 w-[300px] outline-none"
            />
            <div className="cursor-pointer flex items-center justify-center border border-black border-l-0 bg-black text-white rounded-none px-4 py-2">
              <IoSearchSharp className="text-2xl  " onClick={()=>toast.warning("This feature has not been implemented yet.")} />
            </div>
          </div>
          <div className="flex gap-6 text-2xl ">
            <div className="relative">
              <button onClick={toggleDropdown} className=" cursor-pointer">
                {/* <FiUser /> */}
                <FaUser />
              </button>
              {isOpen && (
                <div
                  className="absolute top-full left-0"
                  onMouseLeave={toggleDropdown}
                >
                  <UserDropdown />
                </div>
              )}
            </div>

            {/* <FaRegHeart /> */}
            {/* <PiShoppingBagOpen /> */}
            <Link to="/wishlist">
              <FaHeart />
            </Link>
            <Link to="/shopping-cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
        {/*For Smaller screens*/}
      </div>
      <div className="lg:hidden flex flex-row justify-between fixed top-0 left-0 z-50 bg-gray-100 items-center w-full p-5">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-semibold text-center">PIXELATED</h1>
          </Link>
        </div>
        <div className="flex flex-row gap-8">
          <Link to="/search" className="flex items-center justify-center">
            <IoSearchSharp className="text-4xl" />
          </Link>
          <Link to="/shopping-cart" className="pt-1">
            <FaShoppingCart className="text-3xl" />
          </Link>
        </div>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center h-[60px] z-50 safe-area-inset-bottom">
        <Link to="/" className="flex flex-col items-center">
          <GoHomeFill className="text-3xl" />
        </Link>

        <Link
          to="/category"
          className="flex flex-col items-center"
        >
          <BiSolidCategory className="text-3xl" />
        </Link>

        <Link
          to="/wishlist"
          className="flex flex-col items-center"
        >
          <FaHeart className="text-3xl" />
        </Link>

        <Link
          to="/profile"
          className="flex flex-col items-center"
        >
          <FaUser className="text-3xl" />
        </Link>
      </div>
      <hr className="border-gray-300 w-full" />
    </>
  );
};
export default Header;
