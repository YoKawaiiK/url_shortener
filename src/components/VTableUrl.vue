<template>
  <div>
    <the-v-modal-form-update
      :show="modal.show"
      :fields-data="modal.fieldsData"
      @close="showModalForm"
      @click="modalFormHandler"
    />
    <div div class="table_wrapper" v-if="getUrlList.length">
      <table class="table_wrapper__table_url">
        <tbody>
          <tr
            v-for="url in getUrlList"
            @click="selectRow(url)"
            :key="url.id"
            :class="{ highlight: highlight && url.id == selectedRow }"
          >
            <td>
              <a :href="url.shortUrl"> {{ url.shortUrl }}</a>
              <a class="link__small" :href="url.longUrl">{{ url.longUrl }}</a>
            </td>
            <td>
              <span class="td_buttons">
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  URL_SHORTENER,
  SHORT_URL_LIST,
  URL_TO_DELETE,
  URL_TO_UPDATE,
  GET_URL_LIST,
  SHORT_URL_STATS,
} from "@/store/modules/urlShortener/constants";

import TheVModalFormUpdate from "@/components/TheVModalFormUpdate";

export default {
  name: "VTableUrl",
  components: {
    TheVModalFormUpdate,
  },
  props: {
    highlight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedRow: null,

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
};
</script>

<style lang="scss">
.table_wrapper {
  position: relative;
  .table_wrapper__table_url {
    display: block;
    width: 100%;
    height: 70vh;
    // position: relative;
    tbody {
      width: 100%;

      height: 70vh;
      min-width: 380px;
      max-width: 435px;
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

      tr {
        cursor: pointer;

        display: flex;
        justify-content: space-between;
        gap: 10px;
        width: 100%;

        &:not(:last-child) {
          border-bottom: 1px solid $table--border-color;
        }

        &.highlight {
          background-color: $table--highlight-color;
        }

        padding: 10px;

        td {
          display: block;

          &:first-child {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            word-wrap: break-word;

            max-width: 250px;

            .link__small {
              font-size: $table--link-small--font-size;

              &:link {
                text-decoration: none;
                color: $table--link-small--color;
              }
              &:hover {
                text-decoration: underline;
                color: $table--link-small--color-hover;
              }
            }
          }

          &:last-child {
            display: flex;
            align-items: center;

            .td_buttons {
              display: flex;
              gap: 5px;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
