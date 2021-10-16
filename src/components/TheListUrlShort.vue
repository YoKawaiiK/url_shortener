<template>
  <div>
    <section class="list_url_short">
      <div class="list_url_short__list_column">
        <h1 class="title is-2">Clear your history</h1>
        <div class="list_column__table">
          <table class="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th class="has-text-centered">Id</th>
                <th class="has-text-centered">Url</th>
                <th class="has-text-centered">Short</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(url, index) in getUrlList" :key="index">
                <td class="has-text-centered">{{ url.id }}</td>
                <td class="has-text-centered">{{ url.longUrl }}</td>
                <td class="has-text-centered">{{ url.shortUrl }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="list_column__button">
          <button
            class="button is-danger is-button-centered"
            @click.stop="deleteListUrl"
          >
            Delete all
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import {
  URL_SHORTENER,
  GET_URL_LIST,
  URL_LIST_TO_DELETE,
} from "@/store/modules/urlShortener/constants";

import { ROUTE_DASHBOARD } from "@/router/constants";

export default {
  name: "TheListUrlShort",
  computed: {
    ...mapGetters(URL_SHORTENER, { getUrlList: GET_URL_LIST }),
  },
  routes: {
    ROUTE_DASHBOARD,
  },
  methods: {
    ...mapActions(URL_SHORTENER, [URL_LIST_TO_DELETE]),
    deleteListUrl() {
      this[URL_LIST_TO_DELETE]();

      this.$router.push({ name: this.$options.routes.ROUTE_DASHBOARD });
    },
  },
};
</script>
<style lang="scss" scoped>
.list_url_short {
  display: flex;
  justify-content: space-around;
  .list_url_short__list_column {
    margin: 20px 0px;

    :not(:first-child) {
      margin-top: 30px;
    }

    .list_column__button {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
