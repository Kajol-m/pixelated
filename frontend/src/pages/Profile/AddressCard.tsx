import React from "react";
import { HiPencil, HiTrash, HiCheck } from "react-icons/hi";

export interface Address {
  id: string | number;
  name: string;
  phone?: string;
  line1: string;
  line2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  isDefault?: boolean;
}

interface AddressCardProps {
  address: Address;
  onEdit?: (address: Address) => void;
  onDelete?: (id: string | number) => void;
  onSetDefault?: (id: string | number) => void;
  className?: string;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  onEdit,
  onDelete,
  onSetDefault,
  className = "",
}) => {
  const {
    id,
    name,
    phone,
    line1,
    line2,
    city,
    state,
    postalCode,
    country,
    isDefault,
  } = address;

  const fullAddress = [line1, line2, city, state, postalCode, country]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      className={`w-full bg-white border border-gray-300  p-5  hover:shadow-lg
        transition-all duration-300 ${className}`}
      role="group"
      aria-label={`Address card for ${name}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-base text-gray-900">{name}</h3>
            {phone && <span className="text-sm text-gray-600">• {phone}</span>}
            {isDefault && (
              <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gray-200 rounded">
                <HiCheck className="w-4 h-4" />
                DEFAULT
              </span>
            )}
          </div>

          <p className="mt-3 text-sm text-gray-700 break-words">{fullAddress}</p>
        </div>

        {/* Actions */}
        <div className="flex items-start gap-2">
          <button
            type="button"
            onClick={() => onSetDefault && onSetDefault(id)}
            className={`hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm border transition
              ${isDefault ? "bg-black text-white border-transparent" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
            aria-pressed={isDefault}
            aria-label={isDefault ? "Default address" : "Set as default address"}
          >
            {isDefault ? "Default" : "Make default"}
          </button>

          <button
            type="button"
            onClick={() => onEdit && onEdit(address)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm  border border-gray-200 hover:bg-gray-50"
            aria-label={`Edit address for ${name}`}
          >
            <HiPencil className="w-4 h-4" />
            Edit
          </button>

          <button
            type="button"
            onClick={() => onDelete && onDelete(id)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm  border border-red-200 text-red-600 hover:bg-red-50"
            aria-label={`Delete address for ${name}`}
          >
            <HiTrash className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      {/* Mobile default control */}
      {!isDefault && (
        <div className="mt-3 sm:hidden">
          <button
            type="button"
            onClick={() => onSetDefault && onSetDefault(id)}
            className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 text-sm  border border-gray-200 hover:bg-gray-50"
          >
            Make default
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
