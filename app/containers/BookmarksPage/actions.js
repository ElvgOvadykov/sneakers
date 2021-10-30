/*
 *
 * BookmarkPage actions
 *
 */

import {
  BOOKMARKS_LOAD_REQUEST,
  BOOKMARKS_LOAD_SUCCESS,
  BOOKMARKS_LOAD_FAILURE,
} from "./constants";

export const bookmarksLoadRequest = () => ({
  type: BOOKMARKS_LOAD_REQUEST,
});

export const bookmarksLoadSuccess = bookmarks => ({
  type: BOOKMARKS_LOAD_SUCCESS,
  bookmarks,
});

export const bookmarksLoadFailure = error => ({
  type: BOOKMARKS_LOAD_FAILURE,
  error,
});
