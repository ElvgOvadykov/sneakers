import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the bookmarkPage state domain
 */

const selectBookmarkPageDomain = state => state.bookmarkPage || initialState;

/**
 * Other specific selectors
 */

const selectBootmarks = () =>
  createSelector(
    selectBookmarkPageDomain,
    substate => substate.bookmarks
  );

const selectLoadingBootmarks = () =>
  createSelector(
    selectBookmarkPageDomain,
    substate => substate.isLoading
  );

const selectErrorBootmarks = () =>
  createSelector(
    selectBookmarkPageDomain,
    substate => substate.error
  );

/**
 * Default selector used by BookmarkPage
 */

const makeSelectBookmarkPage = () =>
  createSelector(
    selectBookmarkPageDomain,
    substate => substate
  );

export default makeSelectBookmarkPage;
export { selectBootmarks, selectLoadingBootmarks, selectErrorBootmarks };
