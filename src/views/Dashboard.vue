<template>
  <div>
    <the-header></the-header>

    <section>
      <div class="dashboard">
        <div class="dashboard__columns">
          <div class="columns__container_column">
            <the-url-shortener></the-url-shortener>
          </div>

          <div class="columns__container_column">
            <the-statistic></the-statistic>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheStatistic from "@/components/TheStatistic";
import TheUrlShortener from "@/components/TheUrlShortener";
import TheHeader from "@/components/TheHeader";

export default {
  name: "Dashboard",
  components: {
    TheHeader,
    TheStatistic,
    TheUrlShortener,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 40px 151px 0px;

  .dashboard__columns {
    display: flex;
    justify-content: space-between;
    // flex-flow: row;
    gap: 40px;

    .columns__container_column {
      // widows: 100%;
      flex: 1 1 auto;
    }
  }
}
</style>
