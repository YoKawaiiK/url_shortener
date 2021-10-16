<template>
  <div>
    <the-v-modal-form-update
      :show="modal.show"
      :fields-data="modal.fieldsData"
      @close="showModalForm"
      @click="modalFormHandler"
    />

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
        <div class="url_content__table" v-if="getUrlList.length">
          <table
            class="
              table
              is-striped is-fullwidth is-hoverable is-clickable is-scrollable
            "
          >
            <thead>
              <tr>
                <th class="has-text-centered">Id</th>
                <th class="has-text-centered">Url</th>
                <th class="has-text-centered">Short</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="url in getUrlList"
                @click="selectRow(url)"
                :key="url.id"
                :class="{ highlight: url.id == selectedRow }"
              >
                <td class="has-text-centered">{{ url.id }}</td>
                <td class="has-text-centered is-td-bordered">
                  <a :href="url.longUrl"> {{ url.longUrl }}</a>
                </td>
                <td class="has-text-centered">
                  <a :href="url.shortUrl"> {{ url.shortUrl }}</a>
                </td>
                <td>
                  <span class="buttons">
                    <button
                      class="button is-small is-warning"
                      @click.prevent="clickShowModalEdit(url)"
                    >
                      <span class="icon is-small">
                        <font-awesome-icon :icon="['fas', 'pen']" />
                      </span>
                    </button>
                    <button
                      class="button is-small is-danger"
                      @click.prevent="clickDeleteUrl(url)"
                    >
                      <span class="icon is-small">
                        <font-awesome-icon :icon="['fas', 'trash']" />
                      </span>
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <span>You don't have url.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  URL_SHORTENER,
  SHORT_URL_LIST,
  URL_TO_SHORTEN,
  URL_TO_DELETE,
  URL_TO_UPDATE,
  GET_URL_LIST,
  SHORT_URL_STATS,
} from "@/store/modules/urlShortener/constants";

import TheVModalFormUpdate from "@/components/TheVModalFormUpdate";

export default {
  name: "TheUrlShortener",
  components: {
    TheVModalFormUpdate,
  },
  data() {
    return {
      selectedRow: null,
      createUrl: {
        longUrl: "",
      },
      modal: {
        show: false,
        fieldsData: {},
      },
    };
  },

  computed: {
    ...mapGetters(URL_SHORTENER, { getUrlList: GET_URL_LIST }),
  },
  methods: {
    ...mapActions(URL_SHORTENER, [
      SHORT_URL_LIST,
      URL_TO_SHORTEN,
      URL_TO_DELETE,
      URL_TO_UPDATE,
      SHORT_URL_STATS,
    ]),
    clickShowModalEdit(item) {
      this.modal.fieldsData = item;
      this.modal.show = !this.modal.show;
    },
    showModalForm() {
      this.modal.show = !this.modal.show;
    },
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
    // update
    async modalFormHandler(data) {
      try {
        // edit
        await this[URL_TO_UPDATE](data);

        this.modal.show = !this.modal.show;
      } catch (error) {
        console.log(error);
      }
    },
    async clickDeleteUrl(data) {
      try {
        // edit
        await this[URL_TO_DELETE]({ ...data });
      } catch (error) {
        console.log(error);
      }
    },
    async selectRow(row) {
      this.selectedRow = row.id;
      this[SHORT_URL_STATS](row);
    },
  },
  mounted() {
    //
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
      margin-top: 20px;
    }

    .table {
      &.is-scrollable {
        position: relative;
        tbody {
          height: calc(70vh);
          max-width: calc(435px - 30px);
          overflow-y: scroll;
          overflow-x: hidden;
          // width: auto;
          position: absolute;

          // scrollbar
          // Firefox
          scrollbar-width: auto;
          scrollbar-color: $primary $body-background-color;
          // Chrome, Edge, and Safari
          &::-webkit-scrollbar {
            width: 13px;
          }
          &::-webkit-scrollbar-track {
            background: $body-background-color;
          }
          &::-webkit-scrollbar-thumb {
            background-color: $primary;
            border-radius: 3px;
          }
        }
      }
    }

    .url_content__table {
      .is-clickable {
        tbody {
          // display: block;
          tr {
            cursor: pointer;

            &.highlight {
              background-color: $table--highlight-color;
            }

            .is-td-bordered {
              max-width: 150px;
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }
}
</style>
