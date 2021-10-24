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
  sneakers: [
    {
      id: 1,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
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
    {
      id: 4,
      name: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
    },
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
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SNEAKERS_LOAD_REQUEST:
        draft.isLoading = true;
        draft.error = initialState.error;
        break;
      /** пока бэка нет в state sneakers не изменяется */

      case SNEAKERS_LOAD_SUCCESS:
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
