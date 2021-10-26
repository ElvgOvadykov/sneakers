/*
 *
 * Cart reducer
 *
 */
import produce from "immer";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  OPEN_CART,
  CLOSE_CART,
} from "./constants";

export const initialState = {
  visible: false,
  cartItems: [
    {
      id: 2,
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
    },
    {
      id: 3,
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
    },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const cartReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_ITEM_TO_CART:
        draft.cartItems.push(action.item);
        break;
      case REMOVE_ITEM_FROM_CART:
        const removeIndex = draft.cartItems.findIndex(
          item => item.id === action.item.id
        );
        if (removeIndex >= 0) {
          draft.cartItems.splice(removeIndex, 1);
        }
        break;
      case OPEN_CART:
        draft.visible = true;
        break;
      case CLOSE_CART:
        draft.visible = initialState.visible;
        break;
    }
  });

export default cartReducer;
