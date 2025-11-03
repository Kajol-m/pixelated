import { createSlice, type Draft, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ProfileProps {
  fullName: string;
  phone: string;
  email: string;
  gender: "Male" | "Female" | string;
  dob: Date | null;
}

const initialState: ProfileProps = {
  fullName: "",
  phone: "",
  email: "",
  gender: "",
  dob: null,
};

export const ProfileDetailsSlice = createSlice({
  name: "profileDetails",
  initialState,
  reducers: {
    setProfileDetails: (_state, action: PayloadAction<ProfileProps>) => {
      return action.payload; // replace entire profile
    },
    // updateProfileDetails: (
    //   state,
    //   action: PayloadAction<{
    //     field: keyof ProfileProps;
    //     value: string | Date | null;
    //   }>
    // ) => {
    //   const { field, value } = action.payload;
    //   (state[field] as any) = value; // allow dynamic assignment
    // },
    updateProfileDetails<K extends keyof ProfileProps>(
      state: Draft<ProfileProps>, // ✅ import Draft from immer
      action: PayloadAction<{ field: K; value: ProfileProps[K] }>
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setProfileDetails, updateProfileDetails } =
  ProfileDetailsSlice.actions;
export const selectProfile = (state: RootState) => state.profileDetails;

export default ProfileDetailsSlice.reducer;
