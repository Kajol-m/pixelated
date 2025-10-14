import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
// import { FiUser } from "react-icons/fi";
// import { PiShoppingBagOpen } from "react-icons/pi";
import { useState } from "react";
import UserDropdown from "../Dropdown/UserDropdown";
import { FaBars } from "react-icons/fa6";

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
          <div className="flex items-center justify-center border border-black border-l-0 bg-black text-white rounded-none px-4 py-2">
            <IoSearchSharp className="text-2xl" />
          </div>
        </div>
        <div className="flex gap-6 text-2xl  cursor-pointer">
          <div className="relative">
            <button onClick={toggleDropdown}>
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
    <div className="lg:hidden flex flex-col fixed top-0 left-0 z-50 bg-white items-center w-full px-4 pt-4">
  {/* 🔹 Brand Title */}
  <Link to="/">
    <h1 className="text-3xl font-semibold text-center">PIXELATED</h1>
  </Link>

  {/* 🔹 Search + Icons Section */}
  <div className="flex flex-row items-center justify-center gap-3 pt-4 w-full">
    {/* Search Bar */}
    <div className="flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        onChange={() => {}}
        placeholder="Search..."
        className="border border-black px-2 py-1 w-[200px] outline-none"
      />
      <button className="flex items-center justify-center border border-black border-l-0 bg-black text-white px-3 py-1">
        <IoSearchSharp className="text-2xl" />
      </button>
    </div>

    {/* Wishlist */}
    <Link to="/wishlist" className="pt-1">
      <FaHeart className="text-xl" />
    </Link>

    {/* Cart */}
    <Link to="/shopping-cart" className="pt-1">
      <FaShoppingCart className="text-xl" />
    </Link>

    {/* Menu Icon */}
    <button className="pt-1">
      <FaBars className="text-xl" />
    </button>
  </div>

  <hr className="border-gray-300 mt-4 w-full" />
</div>

      </>
  );
};
export default Header;
