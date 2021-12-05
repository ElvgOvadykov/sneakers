import request from "./request";
import { authHeader } from "./authHeader";
import generateQueryString from "./generateQueryString";

const getAbsoluteUrl = url => `${window.GLOBAL_CONFIG.API_URL}/${url}`;

const requests = {
  get(url, data) {
    const querystring = data != null ? generateQueryString(data) : null;
    const urlWithQuery = querystring != null ? `${url}?${querystring}` : url;
    const options = { headers: authHeader() };

    return request(getAbsoluteUrl(urlWithQuery), options);
  },

  post(url, data) {
    const options = {
      method: "POST",
      headers: { ...authHeader(), "Content-Type": "application/json" },
      body: data != null ? JSON.stringify(data) : "",
    };

    return request(getAbsoluteUrl(url), options);
  },

  put(url, data) {
    const options = {
      headers: { ...authHeader(), "Content-Type": "application/json" },
      method: "PUT",
      body: data != null ? JSON.stringify(data) : null,
    };

    return request(getAbsoluteUrl(url), options);
  },

  delete(url) {
    const options = {
      headers: authHeader(),
      method: "DELETE",
    };

    return request(getAbsoluteUrl(url), options);
  },
};

export default requests;
