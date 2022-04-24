import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const product = state.products.find(
        (product) => product._id === payload._id
      );
      if (product) {
        state = state.products.map((product) =>
          product._id === payload._id
            ? {
                ...product,
                quantity: (product.quantity += payload.quantity),
              }
            : product
        );
      } else {
        state.products.push(payload);
        state.quantity += 1;
      }
    },
    incQuantity: (state, { payload }) => {
      const product = state.products.find((product) => product._id === payload);
      product.quantity++;
    },
    decQuantity: (state, { payload }) => {
      const product = state.products.find((product) => product._id === payload);
      if (product.quantity === 1) {
        const index = state.products.findIndex(
          (product) => product._id === payload
        );
        state.products.splice(index, 1);
      } else {
        product.quantity--;
      }
    },
    removeProduct: (state, { payload }) => {
      const index = state.products.findIndex(
        (product) => product._id === payload
      );
      state.products.splice(index, 1);
    },
  },
});

export const { addProduct, incQuantity, decQuantity, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
