import { COOKIE_LIST } from "./vars";

export const setJwtToken = (jwtToken) => {
  return sessionStorage.setItem(COOKIE_LIST.JWT_TOKEN, jwtToken);
};

export const getJwtToken = () => {
  return sessionStorage.getItem(COOKIE_LIST.JWT_TOKEN);
};

export const removeJwtToken = () => {
  return sessionStorage.removeItem(COOKIE_LIST.JWT_TOKEN);
};

export const setUserNickname = (nickname) => {
  return sessionStorage.setItem(COOKIE_LIST.USER_NICKNAME, nickname);
};

export const getUserNickname = () => {
  return sessionStorage.getItem(COOKIE_LIST.USER_NICKNAME);
};

export const removeUserNickname = () => {
  return sessionStorage.removeItem(COOKIE_LIST.USER_NICKNAME);
};
