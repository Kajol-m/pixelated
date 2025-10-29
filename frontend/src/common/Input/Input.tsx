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
}

const Input: React.FC<InputProps> = ({
  labelText,
  placeholderText = "",
  onChange,
  type = "text",
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
}) => {
  return (
    <div className={`grid gap-1 ${className}`}>
      <label htmlFor={inputId} className={` ${className}`}>
        {labelText}
      </label>
      <div className="relative">
        <input
          type={type}
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
