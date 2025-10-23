import { useState } from "react";
import { LuEye,LuEyeClosed } from "react-icons/lu";

interface InputProps {
  labelText: string;
  placeholderText?: string;
  onChange: (value: string) => void;
  type?: string;
  value: string | number;
  inputId: string;
  className?: string;
  name?: string;
  min?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  supportiveText?: string;
  icon?: React.ReactNode;
  errors?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  showPassword:boolean;
}

const Input: React.FC<InputProps> = ({
  labelText,
  placeholderText = "",
  onChange,
  value,
  inputId,
  className = "",
  onFocus,
  onBlur,
  name,
  min,
  minLength,
  pattern,
  required,
  supportiveText,
  icon,
  errors,
  showPassword=false,
}) => {
    
    const [isPasswordVisible, setIsPasswordVisible]=useState(false);

    const toggleShowPassword=()=>{
        setIsPasswordVisible((prev=>(!prev)));
    }
    const inputType = showPassword
    ? isPasswordVisible
      ? "text"
      : "password"
    : "text";
  return (
    <div className={`grid gap-1 ${className}`}>
      <label htmlFor={inputId} className={` ${className}`}>
        {labelText}
      </label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholderText}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          id={inputId}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          min={min}
          minLength={minLength}
          pattern={pattern}
          required={required}
          className={`border-2 border-black rounded-none px-3 py-2 w-full ${className} ${errors ? "border-red-500" : "border-gray-300"}`}
        />
        {showPassword && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black cursor-pointer"
            tabIndex={-1}
          >
            {isPasswordVisible ? (
              <LuEye size={18} />
            ) : (
              <LuEyeClosed size={18} />
            )}
          </button>
        )}
        {icon && (
          <div
            className={`absolute inset-y-0 right-3 flex items-center pointer-events-auto text-gray-600 ${className}`}
          >
            {icon}
          </div>
        )}
      </div>
      <span
                className={`text-xs ${errors ? "text-red-500" : "text-gray-600"} block min-h-[10px]`}
            >
                {errors || supportiveText || "\u00A0"}
            </span>
    </div>
  );
};

export default Input;
