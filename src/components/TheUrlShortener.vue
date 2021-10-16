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
            <input class="input is-primary" type="email" placeholder="Email" />
            <!-- <span class="icon is-left">
              <font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']" />
            </span> -->
            <!-- <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span> -->
          </p>
          <p class="control">
            <button class="button is-primary">
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']" />
              </span>
              <span>To Short!</span>
            </button>
          </p>
        </div>
      </div>
      <div class="the_url_shortener__url_content">
        <div class="url_content__table">
          <table
            class="table is-striped is-fullwidth is-hoverable is-clickable"
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
                v-for="url in urlList"
                @click="selectRow(url.id)"
                :key="url.id"
                :class="{ highlight: url.id == selectedRow }"
              >
                <td class="has-text-centered">{{ url.id }}</td>
                <td class="has-text-centered">{{ url.url }}</td>
                <td class="has-text-centered">{{ url.shortUrl }}</td>
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
                    <button class="button is-small is-danger">
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
  GET_URL_LIST,
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
      modal: {
        show: false,
        fieldsData: {},
      },
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

  computed: {
    ...mapGetters(URL_SHORTENER, { getUrlList: GET_URL_LIST }),
  },
  methods: {
    clickShowModalEdit(item) {
      this.modal.fieldsData = item;
      this.modal.show = !this.modal.show;
    },
    showModalForm() {
      this.modal.show = !this.modal.show;
    },

    async modalFormHandler(data) {
      try {
        console.log(data);

        // if edit
        this.modal.show = !this.modal.show;
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(URL_SHORTENER, [
      SHORT_URL_LIST,
      URL_TO_SHORTEN,
      URL_TO_DELETE,
    ]),

    selectRow(row) {
      this.selectedRow = row;
      //Do other things
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
  display: flex;
  flex-direction: column;

  .the_url_shortener__url_content {
    width: 100%;

    &:not(:first-child) {
      margin-top: 20px;
    }

    .url_content__table {
      .is-clickable {
        tbody {
          tr {
            cursor: pointer;

            &.highlight {
              background-color: $table--highlight-color;
            }
          }
        }
      }
    }
  }
}
</style>
