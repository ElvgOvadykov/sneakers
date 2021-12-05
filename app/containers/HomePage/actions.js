import {
  SNEAKERS_LOAD_REQUEST,
  SNEAKERS_LOAD_SUCCESS,
  SNEAKERS_LOAD_FAILURE,
} from "./constants";

export const sneakersLoadRequest = payload => ({
  type: SNEAKERS_LOAD_REQUEST,
  payload,
});

export const sneakersLoadSuccess = data => ({
  type: SNEAKERS_LOAD_SUCCESS,
  data,
});

export const sneakersLoadFailure = error => ({
  type: SNEAKERS_LOAD_FAILURE,
  error,
});
