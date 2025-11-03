import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface addressProps {
  address_type: "Home" | "Work" | "Other";
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: number;
}

const initialState: addressProps = {
  address_type: "Home",
  street_address: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  is_default: 0,
};

export const AddressSlice=createSlice({
    name:"addressDetails",
    initialState,
    reducers:{
        
    }
})