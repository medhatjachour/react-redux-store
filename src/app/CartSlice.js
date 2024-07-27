import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// Creating a slice requires a string name to identify the slice, an initial state value and one or more//reducer functions to define how the state can be updated //. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer (compare and update )library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      // check if the item has already been added
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // keep the item and update the quantity
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`item quantity increased`);
      } else {
        // if does not exist add it
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        // use toast  as to give feedback
        toast.success(`${action.payload.title} added to cart`);
      }
      // add to local storage because when u refresh it vanishes
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },
    setIncreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // keep the item and update the quantity
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`item quantity increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        // keep the item and update the quantity
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`item quantity increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // eslint-disable-next-line no-unused-vars
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success("Cart Clear");
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // eslint-disable-next-line no-unused-vars
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});
export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQuantity,
  setDecreaseItemQuantity,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartAmount = (state) => state.cart.cartTotalAmount;
export const selectCartQuantity = (state) => state.cart.cartTotalQuantity;
export default CartSlice.reducer;
