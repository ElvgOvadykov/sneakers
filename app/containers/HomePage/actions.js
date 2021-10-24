import {
  SNEAKERS_LOAD_REQUEST,
  SNEAKERS_LOAD_SUCCESS,
  SNEAKERS_LOAD_FAILURE,
} from "./constants";

export const sneakersLoadRequest = () => ({
  type: SNEAKERS_LOAD_REQUEST,
});

export const sneakersLoadSuccess = sneakers => ({
  type: SNEAKERS_LOAD_SUCCESS,
  sneakers,
});

export const sneakersLoadFailure = error => ({
  type: SNEAKERS_LOAD_FAILURE,
  error,
});
