export function authHeader() {
  // return authorization header with jwt token
  const token = JSON.parse(sessionStorage.getItem("token"));

  if (token && token.access_token) {
    return { Authorization: `Bearer ${token.access_token}` };
  }
  return {};
}
