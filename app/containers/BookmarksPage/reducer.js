/*
 *
 * BookmarkPage reducer
 *
 */
import produce from "immer";
import {
  BOOKMARKS_LOAD_REQUEST,
  BOOKMARKS_LOAD_SUCCESS,
  BOOKMARKS_LOAD_FAILURE,
} from "./constants";

export const initialState = {
  bookmarks: [
    {
      id: 5,
      name: "Мужские Кроссовки Nike Kyrie 7",
      price: 11999,
    },
    {
      id: 6,
      name: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
    },
  ],
  isLoading: false,
  error: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const bookmarkPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case BOOKMARKS_LOAD_REQUEST:
        draft.isLoading = true;
        draft.error = initialState.error;
        break;
      /** пока бэка нет в state bookmarks не изменяется */

      case BOOKMARKS_LOAD_SUCCESS:
        draft.isLoading = initialState.isLoading;
        draft.error = initialState.error;
        break;
      case BOOKMARKS_LOAD_FAILURE:
        draft.isLoading = initialState.isLoading;
        draft.error = action.error;
        break;
    }
  });

export default bookmarkPageReducer;
