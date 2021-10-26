/*
 *
 * Cart actions
 *
 */

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  OPEN_CART,
  CLOSE_CART,
} from "./constants";

export const addItemToCart = item => ({
  type: ADD_ITEM_TO_CART,
  item,
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  item,
});

export const openCart = () => ({
  type: OPEN_CART,
});

export const closeCart = () => ({
  type: CLOSE_CART,
});
