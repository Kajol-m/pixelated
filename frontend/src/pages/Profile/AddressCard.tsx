import React from "react";
import { HiPencil, HiTrash, HiCheck } from "react-icons/hi";
import type { addressProps } from "@/store/features/addressSlice";

interface AddressCardProps {
  address: addressProps;
  onEdit?: (address: addressProps) => void;
  onDelete?: (address_id: string) => void;
  onSetDefault?: (address_id: string) => void;
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
    address_id,
    address_type,
    street_address,
    city,
    state,
    postal_code,
    country,
    is_default,
  } = address;

  const fullAddress = [street_address, city, state, postal_code, country]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      className={`w-full bg-white border border-gray-300 lg:p-5 md:p-5 p-2 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-base text-gray-900 capitalize">
              {address_type}
            </h3>

            {is_default === 1 && (
              <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gray-200 rounded">
                <HiCheck className="w-4 h-4" />
                DEFAULT
              </span>
            )}
          </div>

          <p className="mt-3 text-sm text-gray-700 break-words">
            {fullAddress}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-start gap-2">
          {is_default === 0 && (
            <button
              type="button"
              onClick={() => onSetDefault && onSetDefault(address_id)}
              className={`hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm border transition cursor-pointer 
      bg-white text-gray-700 border-gray-200 hover:bg-gray-50
    `}
            >
              Make default
            </button>
          )}

          <button
            type="button"
            onClick={() => onEdit && onEdit(address)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            <HiPencil className="w-4 h-4" />
            Edit
          </button>

          <button
            type="button"
            onClick={() => onDelete && onDelete(address_id)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm border border-red-200 text-red-600 hover:bg-red-50 cursor-pointer"
          >
            <HiTrash className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      {/* Mobile default button */}
      {is_default === 0 && (
        <div className="mt-3 sm:hidden">
          <button
            type="button"
            onClick={() => onSetDefault && onSetDefault(address_id)}
            className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 text-sm border border-gray-200 hover:bg-gray-50"
          >
            Make default
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
