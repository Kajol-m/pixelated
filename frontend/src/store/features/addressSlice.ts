import { createSlice, type PayloadAction, type Draft } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface addressProps {
  address_id: string;
  address_type: "Home" | "Work" | "Other";
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: 0 | 1;
}

interface AddressState {
  list: addressProps[];
  defaultAddressId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  list: [],
  defaultAddressId: null,
  loading: false,
  error: null,
};

export const AddressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    // Set all addresses (after fetching from API)
    setAddressList: (state, action: PayloadAction<addressProps[]>) => {
      state.list = action.payload;
      // Find and set default address
      const defaultAddr = action.payload.find((addr) => addr.is_default === 1);
      state.defaultAddressId = defaultAddr?.address_id || null;
    },

    // Add a new address
    addAddress: (state, action: PayloadAction<addressProps>) => {
      state.list.push(action.payload);
      // If it's the first address or marked as default
      if (state.list.length === 1 || action.payload.is_default === 1) {
        state.defaultAddressId = action.payload.address_id;
      }
    },

    // Update existing address
    updateAddress: (state, action: PayloadAction<addressProps>) => {
      const index = state.list.findIndex(
        (addr) => addr.address_id === action.payload.address_id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
        // Update default if this address is marked as default
        if (action.payload.is_default === 1) {
          state.defaultAddressId = action.payload.address_id;
        }
      }
    },

    // Delete address
    deleteAddress: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        (addr) => addr.address_id !== action.payload
      );
      // If deleted address was default, clear it
      if (state.defaultAddressId === action.payload) {
        state.defaultAddressId = state.list[0]?.address_id || null;
      }
    },

    // Set default address
    setDefaultAddress: (state, action: PayloadAction<string>) => {
      state.defaultAddressId = action.payload;
      // Update is_default flag in the list
      state.list = state.list.map((addr) => ({
        ...addr,
        is_default: addr.address_id === action.payload ? 1 : 0,
      }));
    },

    // Update single field of an address (for forms)
    updateAddressField: <K extends keyof addressProps>(
      state: Draft<AddressState>,
      action: PayloadAction<{
        address_id: string;
        field: K;
        value: addressProps[K];
      }>
    ) => {
      const { address_id, field, value } = action.payload;
      const address = state.list.find((addr) => addr.address_id === address_id);
      if (address) {
        address[field] = value;
      }
    },

    // Loading and error states
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    // Clear all addresses (for logout)
    clearAddresses: () => initialState,
  },
});

export const {
  setAddressList,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  updateAddressField,
  setLoading,
  setError,
  clearError,
  clearAddresses,
} = AddressSlice.actions;

// Selectors
export const selectAddresses = (state: RootState) => state.addresses.list;
export const selectDefaultAddress = (state: RootState) => {
  const { list, defaultAddressId } = state.addresses;
  return list.find((addr) => addr.address_id === defaultAddressId) || null;
};
export const selectAddressById = (state: RootState, addressId: string) =>
  state.addresses.list.find((addr) => addr.address_id === addressId);
export const selectAddressLoading = (state: RootState) => state.addresses.loading;
export const selectAddressError = (state: RootState) => state.addresses.error;

export default AddressSlice.reducer;