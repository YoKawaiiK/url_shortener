<template>
  <div>
    <div class="the_url_shortener">
      <div class="the_url_shortener__url_content">
        <div class="field is-grouped">
          <!-- <p class="control is-expanded has-icons-left has-icons-right"> -->
          <p class="control is-expanded">
            <input
              v-model="createUrl.longUrl"
              class="input is-primary"
              type="text"
              placeholder="Youe url"
            />
            <!-- <span class="icon is-left">
              <font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']" />
            </span> -->
            <!-- <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span> -->
          </p>
          <p class="control">
            <button class="button is-primary" @click.stop="createShortUrl">
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']" />
              </span>
              <span>To Short!</span>
            </button>
          </p>
        </div>
      </div>
      <div class="the_url_shortener__url_content">
        <v-table-url :highlight="true"></v-table-url>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  URL_SHORTENER,
  URL_TO_SHORTEN,
} from "@/store/modules/urlShortener/constants";

import VTableUrl from "@/components/VTableUrl";

export default {
  name: "TheUrlShortener",
  components: {
    VTableUrl,
  },
  data() {
    return {
      createUrl: {
        longUrl: "",
      },
    };
  },

  methods: {
    ...mapActions(URL_SHORTENER, [URL_TO_SHORTEN]),

    async createShortUrl() {
      try {
        // if edit
        if (
          this.createUrl.longUrl.length > 5 &&
          this.createUrl.longUrl.length < 200
        ) {
          let urlObject = {
            longUrl: this.createUrl.longUrl,
          };
          this[URL_TO_SHORTEN](urlObject);
          this.createUrl.longUrl = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.the_url_shortener {
  width: 100%;
  max-width: 435px;
  display: flex;
  flex-direction: column;

  .the_url_shortener__url_content {
    width: 100%;

    &:not(:first-child) {
      margin-top: 30px;
    }
  }
}
</style>
