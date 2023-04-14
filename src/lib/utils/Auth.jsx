import jwt_decode from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.jwtAuthToken;

  if (!token) {
    return false;
  }

  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (err) {
    console.log(err);
    return false;
  }
};