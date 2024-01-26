import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import draftReducer from "../features/draft-product/draftSlice";
import orders from "../features/orders/orderSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    products: productReducer,
    draftProducts: draftReducer,
    orders
  },
});
