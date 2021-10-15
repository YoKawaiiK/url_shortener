<template>
  <div>
    <section class="hero is-small is-primary">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <p class="title">Url shortener</p>
                <!-- <p class="subtitle">Shorten your link!</p> -->
              </a>
              <span class="navbar-burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <!-- <a class="navbar-item is-active"> Short Url List </a> -->
                <router-link
                  v-for="(route, index) of $options.routes"
                  :key="index"
                  class="navbar-item"
                  :to="{ name: route }"
                  >{{ route }}</router-link
                >
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </span>
                    <span>
                      <a href="https://github.com/YoKawaiiK">Go to my GitHub</a>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import { ROUTE_SHORT_URL_LIST, ROUTE_DASHBOARD } from "@/router/constants";

export default {
  routes: {
    ROUTE_SHORT_URL_LIST,
    ROUTE_DASHBOARD,
  },
};
</script>
