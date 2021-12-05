/*
 *
 * Home page reducer
 *
 */
import produce from "immer";
import {
  SNEAKERS_LOAD_REQUEST,
  SNEAKERS_LOAD_SUCCESS,
  SNEAKERS_LOAD_FAILURE,
} from "./constants";

export const initialState = {
  sneakers: [],
  isLoading: false,
  error: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SNEAKERS_LOAD_REQUEST:
        draft.isLoading = true;
        draft.error = initialState.error;
        break;
      case SNEAKERS_LOAD_SUCCESS:
        draft.sneakers = action.data;
        draft.isLoading = initialState.isLoading;
        draft.error = initialState.error;
        break;
      case SNEAKERS_LOAD_FAILURE:
        draft.isLoading = initialState.isLoading;
        draft.error = action.error;
        break;
    }
  });

export default homePageReducer;
