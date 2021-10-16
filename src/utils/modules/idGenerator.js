import Cookies from "js-cookie";

export default () => {
  const cookieName = "last_generated_id";

  let lastGeneratedId = Cookies.get(cookieName);
  if (typeof lastGeneratedId === "undefined") {
    lastGeneratedId = 0;
    Cookies.set(cookieName, lastGeneratedId);
    return lastGeneratedId;
  }

  lastGeneratedId = +lastGeneratedId + 1;
  Cookies.set(cookieName, lastGeneratedId);
  return lastGeneratedId;
};
