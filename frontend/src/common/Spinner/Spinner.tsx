import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full absolute inset-0 bg-gray-100/80">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
