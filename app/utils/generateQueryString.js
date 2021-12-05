/**
 * Генерация строки query параметров для запроса
 */
export const generateQueryString = queryParameters =>
  Object.entries(queryParameters)
    .map(([key, value]) => `${key}=${value != null ? value : ""}`)
    .join("&");

export default generateQueryString;
