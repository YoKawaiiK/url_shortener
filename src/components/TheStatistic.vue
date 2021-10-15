<template>
  <div class="the_statistic">
    <div class="tile is-ancestor">
      <!-- The magical tile element! -->
      <div
        class="tile is-parent"
        v-for="(browser, index) of stats.browsers"
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

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child notification"
          :class="generateBackgroundColor()"
        >
          <p class="title">{{ stats.referrers[0].referrer }}</p>
          <p class="subtitle">Total referrer: {{ stats.referrers[0].total }}</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <!-- The magical tile element! -->
      <div
        class="tile is-parent"
        v-for="(platform, index) of stats.platforms"
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
          <p class="title">Other information:</p>
          <p>Long url: {{ stats.data.long_url }}</p>
          <p>Short url: {{ stats.data.short_url }}</p>
          <p>Created at: {{ stats.data.created_at }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheStatistic",
  data() {
    return {
      stats: {
        clicks: 21,
        browsers: [
          {
            browser: "Chrome",
            total: 14,
          },
          {
            browser: "Firefox",
            total: 2,
          },
        ],
        referrers: [
          {
            referrer: "Unknown",
            total: 13,
          },
        ],
        platforms: [
          {
            platform: "Mac",
            total: 8,
          },
          {
            platform: "Windows",
            total: 5,
          },
        ],
        data: {
          long_url: "https:example.com",
          short_url: "https:t.lyOYXL",
          created_at: "2019-08-03 14:47:40",
        },
      },
    };
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
  width: 100%;
}
</style>
