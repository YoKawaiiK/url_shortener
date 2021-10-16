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
              <tr v-for="url in urlList" :key="url.id">
                <td class="has-text-centered">{{ url.id }}</td>
                <td class="has-text-centered">{{ url.url }}</td>
                <td class="has-text-centered">{{ url.shortUrl }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="list_column__button">
          <button class="button is-danger is-button-centered">
            Delete all
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "TheListUrlShort",
  data() {
    return {
      urlList: [
        {
          id: 1,
          url: "sdfsfd",
          shortUrl: "sdfsfd",
        },
        {
          id: 2,
          url: "sdfsfd",
          shortUrl: "sdfsfd",
        },
      ],
    };
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
