import { call, put, takeLatest } from "redux-saga/effects";
import { SNEAKERS_LOAD_REQUEST } from "./constants";
import { sneakersLoadSuccess, sneakersLoadFailure } from "./actions";
import SneakersApi from "@API/sneakers.js";

function* getSneakersLoadRequest({ payload }) {
  try {
    const sneakers = yield call(SneakersApi.getPagedListSneakers, payload);
    console.log(sneakers);
    yield put(sneakersLoadSuccess(sneakers));
  } catch (error) {
    yield put(sneakersLoadFailure(error));
  }
}

export default function* homePageSaga() {
  yield takeLatest(SNEAKERS_LOAD_REQUEST, getSneakersLoadRequest);
}
