// productSlice.js

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItemSuccess: (state, action) => {
      const { items } = action.payload;
      if (items && Array.isArray(items)) {
        items.forEach((item) => {
          const check = state.cartItem.some((el) => el._id === item._id);
          if (check) {
            toast("Already Item in Cart");
          } else {
            toast("Item Add successfully");
            const total = item.price;
            state.cartItem.push({ ...item, qty: 1, total: total });
          }
        });
      } else {
        toast.error("Invalid data received while adding cart items");
      }
    },
    addCartItemFailure: (state, action) => {
      toast.error("Failed to add items to cart");
    },
    deleteCartItemSuccess: (state, action) => {
      toast("Item deleted successfully");
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
    },
    deleteCartItemFailure: (state, action) => {
      toast.error("Failed to delete item");
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      const price = state.cartItem[index].price;
      const total = price * qtyInc;

      state.cartItem[index].total = total;
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = --qty;
        state.cartItem[index].qty = qtyDec;

        const price = state.cartItem[index].price;
        const total = price * qtyDec;

        state.cartItem[index].total = total;
      }
    },
  },
});

export const {
  setDataProduct,
  addCartItemSuccess,
  addCartItemFailure,
  increaseQty,
  decreaseQty,
  deleteCartItemFailure,
  deleteCartItemSuccess,
} = productSlice.actions;

// Thunk action to delete cart item
export const deleteCartItem = (id) => async (dispatch) => {
  try {
    // Make API request to delete the item
    await axios.delete(`http://localhost:8082/cart/${id}`);

    // If deletion is successful, dispatch deleteCartItemSuccess action
    dispatch(deleteCartItemSuccess(id));
  } catch (error) {
    // If deletion fails, dispatch deleteCartItemFailure action
    dispatch(deleteCartItemFailure(error));
  }
};

// Thunk action to fetch all cart items
export const fetchAllCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8082/api/cart");
    dispatch(addCartItemSuccess({ items: response.data })); // Dispatch action to add cart items to the store
  } catch (error) {
    dispatch(addCartItemFailure(error)); // Dispatch action in case of failure
  }
};

export default productSlice.reducer;
