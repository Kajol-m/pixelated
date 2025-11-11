import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";
import { addToWishlist, removeFromWishlist } from "./wishlistSlice";
import type { RootState } from "@/store/store";

export const toggleWishlistThunk = createAsyncThunk(
  "wishlist/toggle",
  async (product: any, { getState, dispatch }) => {
    const state = getState() as RootState;
    const exists = state.wishlist.items.some((item) => item.id === product.id);

    const payload = {
      user_id: product.user_id,
      product_id: product.id,
    };

    if (exists) {
      await api.delete("/api/users/toggleWishlist", { data: payload });
      dispatch(removeFromWishlist(product.id));
    } else {
      await api.post("/api/users/toggleWishlist", payload);
      dispatch(addToWishlist(product));
    }
  }
);
