import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the cart state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

const selectSneakers = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.sneakers
  );

const selectLoading = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.isLoading
  );

const selectError = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.error
  );

/**
 * Default selector used by Cart
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate
  );

export default makeSelectHomePage;
export { selectSneakers, selectLoading, selectError };
