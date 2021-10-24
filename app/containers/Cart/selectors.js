import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the cart state domain
 */

const selectCartDomain = state => state.cart || initialState;

/**
 * Other specific selectors
 */

const selectCartItems = () =>
  createSelector(
    selectCartDomain,
    substate => substate.cartItems
  );

const selectCartSumm = () =>
  createSelector(
    selectCartDomain,
    substate =>
      substate.cartItems
        .map(item => item.price)
        .reduce((summ, value) => summ + value)
  );

/**
 * Default selector used by Cart
 */

const makeSelectCart = () =>
  createSelector(
    selectCartDomain,
    substate => substate
  );

export default makeSelectCart;
export { selectCartItems, selectCartSumm };
