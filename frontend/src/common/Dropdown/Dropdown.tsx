import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { toast } from "sonner";

interface DropdownProps {
  title: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleOptionClick = () => {
    toast.warning("Sorry Recruiter!", {
      description:
        "This feature has not been implemented yet, will update it soon.",
    });
  };

  return (
    <div
      className="relative inline-block"
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="relative border border-gray-300 pt-2 pb-3 pr-5 w-[150px] text-left bg-white"
        onClick={handleToggle}
      >
        <div className="pl-4">{title}</div>
        <RiArrowDropDownLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
      </button>

      {isOpen && (
        <div className="absolute  border border-gray-300 rounded shadow bg-white w-[150px] z-20">
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={handleOptionClick}
          >
            T-shirt
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={handleOptionClick}
          >
            Tops
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={handleOptionClick}
          >
            Skirt
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
