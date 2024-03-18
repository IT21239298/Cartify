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
            toast("Item Added Successfully");
            let qty = 1; // Default quantity
            if (item.qty && item.qty > 1) {
              qty = item.qty; // Set quantity from database if greater than 1
            }
            const total = item.price * qty;
            state.cartItem.push({ ...item, qty: qty, total: total });
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
    // increaseQty: (state, action) => {
    //   const index = state.cartItem.findIndex((el) => el._id === action.payload);
    //   let qty = state.cartItem[index].qty;
    //   const qtyInc = ++qty;
    //   state.cartItem[index].qty = qtyInc;

    //   const price = state.cartItem[index].price;
    //   const total = price * qtyInc;

    //   state.cartItem[index].total = total;
    // },
    decreaseQtySuccess: (state, action) => {
      const { itemId, newQty } = action.payload;
      const index = state.cartItem.findIndex((el) => el._id === itemId);
      if (index !== -1) {
        state.cartItem[index].qty = newQty;
        const price = state.cartItem[index].price;
        const total = price * newQty;
        state.cartItem[index].total = total;
      }
    },
    decreaseQtyFailure: (state, action) => {
      toast.error("Failed to decrease quantity");
    },
  },
});

export const {
  setDataProduct,
  addCartItemSuccess,
  addCartItemFailure,
  // increaseQty,
  decreaseQtySuccess,
  decreaseQtyFailure,
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
export const decreaseCartItemQuantity = (itemId, newQty) => async (dispatch) => {
  try {
    // Fetch the current cart item to get other fields
    const currentItemResponse = await axios.get(`http://localhost:8082/cart/${itemId}`);

    const { price, description, categories, title } = currentItemResponse.data;

    // Make API request to update the cart item with new quantity
    await axios.put(`http://localhost:8082/cart/${itemId}`, {
      title,
      description,
      categories,
      price,
      qty: newQty || 0 // Include the new quantity in the request body
    });

    // If update is successful, dispatch decreaseQtySuccess action
    dispatch(decreaseQtySuccess({ itemId, newQty }));
    toast.success("Quantity decreased successfully");
  } catch (error) {
    // If update fails, dispatch decreaseQtyFailure action
    dispatch(decreaseQtyFailure(error));
  }
};



export default productSlice.reducer;
