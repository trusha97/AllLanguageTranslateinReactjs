import { Cookies } from "react-cookie";
const cookies = new Cookies();

const setCookie = (
  key,
  value,
  options = {} // Set the cookie
) =>
  cookies.set(key, value, {
    expires: new Date("9999-12-31"),
    path: "/",
    ...options,
  });

const getMultipleCookies = (...keys) => {
  // Get all the cookies
  return keys.reduce((acc, key) => {
    acc[key] = cookies.get(key);
    return acc;
  }, {});
};

export {setCookie,getMultipleCookies}