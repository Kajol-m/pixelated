import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropdownProps {
  title: string;
}

const DropdownMenu: React.FC<{ isOpen: boolean; onMouseLeave: () => void }> = ({ isOpen, onMouseLeave }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute mt-1 border border-gray-300 rounded shadow bg-white w-[150px] z-20" onMouseLeave={onMouseLeave}>
      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">T-shirt</button>
      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Tops</button>
      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Skirt</button>
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <button
        className="relative border border-gray-300 pt-2 pb-3 pr-5 w-[150px] text-left"
        onClick={onDropdownClick}
      >
        <div>{title}</div>
        <RiArrowDropDownLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
      </button>

      <DropdownMenu isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} />
    </div>
  );
};

export default Dropdown;
