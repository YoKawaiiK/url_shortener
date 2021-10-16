<template>
  <div class="the_statistic">
    <div
      v-if="
        Object.keys(getUrlStats).length !== 0 &&
        getUrlStats.constructor === Object
      "
    >
      <div class="tile is-ancestor" v-if="getUrlStats.browsers.length > 0">
        <div
          class="tile is-parent"
          v-for="(browser, index) of getUrlStats.browsers"
          :key="index"
        >
          <article
            class="tile is-child notification"
            :class="generateBackgroundColor()"
          >
            <p class="title">{{ browser.browser }}</p>
            <p class="subtitle">Total count: {{ browser.total }}</p>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor" v-if="getUrlStats.referrers.length > 0">
        <div class="tile is-parent">
          <article
            class="tile is-child notification"
            :class="generateBackgroundColor()"
          >
            <p class="title">{{ getUrlStats.referrers[0].referrer }}</p>
            <p class="subtitle">
              Total referrer: {{ getUrlStats.referrers[0].total }}
            </p>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor" v-if="getUrlStats.platforms.length > 0">
        <div
          class="tile is-parent"
          v-for="(platform, index) of getUrlStats.platforms"
          :key="index"
        >
          <article
            class="tile is-child notification"
            :class="generateBackgroundColor()"
          >
            <p class="title">{{ platform.platform }}</p>
            <p class="subtitle">Total count: {{ platform.total }}</p>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article
            class="tile is-child notification"
            :class="generateBackgroundColor()"
          >
            <p class="title">Other stats information:</p>
            <p>Long url: {{ getUrlStats.data.longUrl }}</p>
            <p>Short url: {{ getUrlStats.data.shortUrl }}</p>
            <p>Created at: {{ getUrlStats.data.createdAt }}</p>
          </article>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="tile is-ancestor">
        <!-- The magical tile element! -->
        <div class="tile is-parent">
          <article
            class="tile is-child notification"
            :class="generateBackgroundColor()"
          >
            <p class="subtitle">To click on row in table, after added url.</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  URL_SHORTENER,
  GET_URL_STATS,
} from "@/store/modules/urlShortener/constants";

export default {
  name: "TheStatistic",
  computed: {
    ...mapGetters(URL_SHORTENER, { getUrlStats: GET_URL_STATS }),
  },
  methods: {
    generateBackgroundColor() {
      const colors = [
        "is-primary",
        "is-danger",
        "is-warning",
        "is-info",
        "is-link",
      ];

      const generatedColor = colors[Math.floor(Math.random() * colors.length)];

      return generatedColor;
    },
  },
};
</script>

<style lang="scss">
.the_statistic {
  padding-right: 0px;
  width: 100%;
  // position: relative;
  word-wrap: break-word;
  max-width: 470px;
}
</style>
