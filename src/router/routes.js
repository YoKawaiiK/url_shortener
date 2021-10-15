import { ROUTE_DASHBOARD, ROUTE_SHORT_URL_LIST } from "./constants";
import protect from "./middleware/protect";

import Dashboard from "@/views/Dashboard.vue";
import ShortUrlList from "@/views/ShortUrlList.vue";

export default [
  {
    path: "/dashboard",
    name: ROUTE_DASHBOARD,
    component: Dashboard,
    meta: {
      title: "Dashbaord",
    },
  },
  {
    path: "/short-url-list",
    name: ROUTE_SHORT_URL_LIST,
    component: ShortUrlList,
    meta: {
      title: "Short url list",
      middleware: [protect],
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
];
