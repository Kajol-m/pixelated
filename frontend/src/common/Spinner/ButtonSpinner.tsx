import React from "react";

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={`inline-block border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin ${className}`}
    ></div>
  );
};

export default Spinner;
