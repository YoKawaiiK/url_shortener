import { createRouter, createWebHistory } from "vue-router";

// file with routes
import routes from "./routes";

// file with handler for beforeEach
import handlerBeforeEach from "./handlers/handlerBeforeEach";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "is-active",
});

router.beforeEach(handlerBeforeEach);

export default router;
