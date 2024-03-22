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
           
          } else {
          
            let qty = 1;
            if (item.qty && item.qty > 1) {
              qty = item.qty;
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
      toast.success("Item deleted successfully"); // Change toast type to success
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
    },
    deleteCartItemFailure: (state, action) => {
      toast.error("Failed to delete item");
    },
    decreaseQtySuccess: (state, action) => {
      const { itemId, newQty } = action.payload;
      const index = state.cartItem.findIndex((el) => el._id === itemId);
      if (index !== -1) {
        state.cartItem[index].qty = newQty;
        const price = state.cartItem[index].price;
        const total = price * newQty;
        state.cartItem[index].total = total;
      }
      toast.success("Quantity Update successfully"); // Change toast type to success
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
  decreaseQtySuccess,
  decreaseQtyFailure,
  deleteCartItemFailure,
  deleteCartItemSuccess,
} = productSlice.actions;

export const deleteCartItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8082/cart/${id}`);
    dispatch(deleteCartItemSuccess(id));
  } catch (error) {
    dispatch(deleteCartItemFailure(error));
  }
};

export const fetchAllCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8082/api/cart");
    dispatch(addCartItemSuccess({ items: response.data }));
  } catch (error) {
    dispatch(addCartItemFailure(error));
  }
};
export const decreaseCartItemQuantity = (itemId, newQty) => async (dispatch) => {
  if (newQty <= 0) {
    toast.error("Quantity must be greater than 0");
    return; // Exit the function early if quantity is 0 or negative
  }

  try {
    const currentItemResponse = await axios.get(`http://localhost:8082/cart/${itemId}`);
    const { price, description, categories, title } = currentItemResponse.data;

    await axios.put(`http://localhost:8082/cart/${itemId}`, {
      title,
      description,
      categories,
      price,
      qty: newQty
    });

    dispatch(decreaseQtySuccess({ itemId, newQty }));
  } catch (error) {
    dispatch(decreaseQtyFailure(error));
  }
};
export default productSlice.reducer;
