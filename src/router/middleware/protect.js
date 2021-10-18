import { ROUTE_DASHBOARD } from "@/router/constants";
import {
  URL_SHORTENER,
  GET_URL_LIST,
} from "@/store/modules/urlShortener/constants";

export default function guest({ next, store }) {
  if (store.getters[`${URL_SHORTENER}/${GET_URL_LIST}`].length === 0) {
    return next({
      name: ROUTE_DASHBOARD,
    });
  }

  return next();
}
