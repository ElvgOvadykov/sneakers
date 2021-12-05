import history from "./history";

/**
 * Парсинг тела запроса из json
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return JSON.parse(response.body);
}

/**
 * Парсинг тела запроса из json формата data,message,timestamp
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSONData(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  const body = JSON.parse(response.body);
  if (body.message) {
    return body.message;
  }
  return body;
}

/**
 * Проверка запроса, если ошибка то делаем throw
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  let responseBody;
  try {
    responseBody = JSON.parse(response.body);
  } catch (e) {}
  if (response.status >= 400) {
    const message = responseBody && responseBody.error_description;

    if (response.status === 401) {
      sessionStorage.clear();
      history.push("/login");
    }

    if (response.status === 403) {
      const error = new Error(responseBody.message);
      error.code = 403;
      error.errorMessage = responseBody.message;
      error.data = responseBody;
      throw error;
    }

    // обработка не правильного логин/пароля
    if (message && message.startsWith("Bad credentials")) {
      const error = new Error("Bad credentials");
      error.code = 100;
      error.errorMessage = "Bad credentials";
      error.data = responseBody;
      throw error;
    }

    // обработка истечения срока действия токена
    if (message && message.startsWith("Access token expired")) {
      const error = new Error("Access token expired");
      error.code = 101;
      error.errorMessage = "Access token expired";
      error.data = responseBody;
      sessionStorage.clear();
      history.push("/login");
      throw error;
    }

    // обраотка 403 ошибки
    if (message && message.startsWith("Доступ запрещен")) {
      const error = new Error("Access denied");
      error.code = 102;
      error.errorMessage = "Access denied";
      error.data = responseBody;
      throw error;
    }

    // обработка Bad Request c кодом ошибки
    if (responseBody && responseBody.data && responseBody.data > 0) {
      const error = new Error(responseBody.error);
      error.code = responseBody.data;
      error.errorMessage = null;
      error.data = responseBody;
      throw error;
    }

    // обработка Bad Request
    if (
      responseBody &&
      responseBody.error &&
      responseBody.error === "Bad Request"
    ) {
      const error = new Error(responseBody.error);
      error.code = 400;
      error.errorMessage = responseBody.message;
      error.data = responseBody;
      throw error;
    }
  }

  const errorMessage =
    (responseBody && responseBody.message) ||
    response.body.error_description ||
    response.body.message ||
    response.statusText;
  const error = new Error(errorMessage);
  error.errorMessage = errorMessage;
  error.code = response.status;
  error.data = JSON.parse(response.body);
  throw error;
}

/**
 *
 * @param response
 * @returns {*}
 */
function parseResponse(response) {
  return response.text().then(text => ({
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: text,
  }));
}

/**
 * http запрос, возвращет результат, не обернутый в объект типа message,data, timestamp
 * @param  {string} url       URL запроса
 * @param  {object} [options] Дополнительные опции запроса
 * @returns {object}          Тело ответа
 */
export function unwrappedRequest(url, options) {
  return fetch(url, options)
    .then(parseResponse)
    .then(checkStatus)
    .then(parseJSON);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(parseResponse)
    .then(checkStatus)
    .then(parseJSONData);
}
