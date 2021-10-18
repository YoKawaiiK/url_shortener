<template>
  <div class="statistic">
    <div
      class="statistic__wrapper_condition"
      v-if="
        Object.keys(getUrlStats).length !== 0 &&
        getUrlStats.constructor === Object
      "
    >
      <div
        class="wrapper_condition__statistic_item"
        :class="generateBackgroundColor()"
        v-if="getUrlStats.referrers.length > 0"
      >
        <p class="title">{{ getUrlStats.referrers[0].referrer }}</p>
        <p class="subtitle">
          Total referrer: {{ getUrlStats.referrers[0].total }}
        </p>
      </div>

      <div
        class="wrapper_condition__statistic_item statistic_item_flex"
        v-if="getUrlStats.browsers.length > 0"
      >
        <div
          class="statistic_item_flex__item"
          v-for="(browser, index) of getUrlStats.browsers"
          :key="index"
          :class="generateBackgroundColor()"
        >
          <p class="title">{{ browser.browser }}</p>
          <p class="subtitle">Total count: {{ browser.total }}</p>
        </div>
      </div>

      <div
        class="wrapper_condition__statistic_item statistic_item_flex"
        v-if="getUrlStats.platforms.length > 0"
      >
        <div
          class="statistic_item_flex__item"
          v-for="(platform, index) of getUrlStats.platforms"
          :key="index"
          :class="generateBackgroundColor()"
        >
          <p class="title">{{ platform.platform }}</p>
          <p class="subtitle">Total count: {{ platform.total }}</p>
        </div>
      </div>

      <div
        class="wrapper_condition__statistic_item"
        :class="generateBackgroundColor()"
      >
        <p class="title">Other stats information:</p>
        <p>Long url: {{ getUrlStats.data.longUrl }}</p>
        <p>Short url: {{ getUrlStats.data.shortUrl }}</p>
        <p>Created at: {{ getUrlStats.data.createdAt }}</p>
      </div>
    </div>

    <div v-else class="wrapper_condition">
      <div
        class="wrapper_condition__statistic_item"
        :class="generateBackgroundColor()"
      >
        <p class="title">To click on row in table, after added url.</p>
        <p class="subtitle">To click on row in table, after added url.</p>
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
        "bg_primary",
        "bg_danger",
        "bg_warning",
        "bg_info",
        "bg_link",
      ];

      const generatedColor = colors[Math.floor(Math.random() * colors.length)];

      return generatedColor;
    },
  },
};
</script>

<style lang="scss">
.statistic {
  // padding-right: 0px;
  // width: 100%;
  // position: relative;

  width: 441px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .wrapper_condition__statistic_item {
    border-radius: 5px;
    padding: 10px;

    width: 100%;
    word-wrap: break-word;

    &.statistic_item_flex {
      padding: 0;
      width: 100%;
      display: flex;
      align-items: stretch;
      gap: 5px;
      justify-content: space-between;

      flex-wrap: wrap;
      flex-direction: row;

      .statistic_item_flex__item {
        padding: 10px;
        flex-basis: calc(50% - 5px);
      }
    }
  }
}

.bg_primary {
  background-color: $primary;
}
.bg_danger {
  background-color: $danger;
}
.bg_warning {
  background-color: $warning;
}
.bg_info {
  background-color: $info;
}
.bg_link {
  background-color: $link;
}
</style>
