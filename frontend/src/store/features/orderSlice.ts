import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface OrderProps {
  order_item_id: string;
  product_id: string;
  product_name: string;
  image_id: string;
  image_url: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  user_id: string;
  size: string;
  color: string;
}

export interface PricePerOrder {
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
}

interface OrderState {
  list: OrderProps[];
  orderPrice: PricePerOrder;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  list: [],
  orderPrice: {
    subtotal: 0,
    tax: 0,
    shippingCost: 1, // ✅ default shipping cost here
    total: 0,
  },
  loading: false,
  error: null,
};

export const OrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrdersList: (state, action: PayloadAction<OrderProps[]>) => {
      state.list = action.payload;
    },

    removeOrderItem: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        (item) => item.order_item_id !== action.payload
      );
    },
    recalculateOrderPrice: (state) => {
      const subtotal = state.list.reduce(
        (sum, item) => sum + item.total_price,
        0
      );
      const tax = subtotal * 0.05;
      const total = subtotal + tax + state.orderPrice.shippingCost;

      state.orderPrice = {
        ...state.orderPrice,
        subtotal,
        tax,
        total,
      };
    },

    setShippingCost: (state, action: PayloadAction<number>) => {
      state.orderPrice.shippingCost = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setOrdersList,
  removeOrderItem,
  recalculateOrderPrice,
  setShippingCost,
  setLoading,
  setError,
  clearError,
} = OrderSlice.actions;
export const selectOrders = (state: RootState) => state.orders.list;
export const orderPrice = (state: RootState) => state.orders.orderPrice;
export const selectOrderLoading = (state: RootState) => state.orders.loading;
export const selectOrderError = (state: RootState) => state.orders.error;

export default OrderSlice.reducer;
