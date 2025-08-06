import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { PiShoppingBagOpen } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between py-5 px-8 items-center">
      {/*Left Side */}
      <div className="flex gap-8 items-center">
        <h1 className="text-3xl font-semibold">PIXELATED</h1>
        <nav>
          <ul className="flex gap-4 ">
            <li>
              <a href="">CLOTHING</a>
            </li>
            <li>
              <a href="">PLANTS</a>
            </li>
            <li>
              <a href="">ARTWORK</a>
            </li>
          </ul>
        </nav>
      </div>
      {/*Right Side */}
      <div className="flex items-center gap-4">
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
        <div className="flex gap-6 text-2xl">
          <FiUser />
          <FaRegHeart />
          <PiShoppingBagOpen />
        </div>
      </div>
    </div>
  );
};
export default Header;
