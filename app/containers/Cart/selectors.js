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
    substate => {
      if (!substate.cartItems || substate.cartItems.length === 0) {
        return 0;
      }

      return substate.cartItems
        .map(item => item.price)
        .reduce((summ, value) => summ + value);
    }
  );

const selectCartVisible = () =>
  createSelector(
    selectCartDomain,
    substate => substate.visible
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
export { selectCartItems, selectCartSumm, selectCartVisible };
