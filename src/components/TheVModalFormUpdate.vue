<template>
  <v-modal-form :show="show" @close.once="close" @give-data="giveData">
    <template v-slot:header-title-text>
      <span>Update your url</span>
    </template>

    <template v-slot:modal-main>
      <div class="main_fields_wrapper">
        <div class="field">
          <p class="control has-icons-left">
            <input
              :value="dataModal.shortUrl"
              class="input"
              type="text"
              readonly
            />
            <span class="icon is-small is-left">
              <font-awesome-icon :icon="['fas', 'check']" />
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="dataModal.longUrl"
              class="input"
              type="text"
              placeholder="Your url"
            />
            <span class="icon is-small is-left">
              <font-awesome-icon :icon="['fas', 'share']" />
            </span>
          </p>
        </div>
      </div>
    </template>

    <template v-slot:footer-button-text>
      <span>Update</span>
    </template>
  </v-modal-form>
</template>

<script>
import VModalForm from "@/components/VModalForm";

import { resetObjectValues } from "@/utils/index";

export default {
  name: "TheVModalFormUpdate",
  components: {
    VModalForm,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    // for edit
    fieldsData: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {
      dataModal: {
        id: "",
        longUrl: "",
        shortUrl: "",
      },
    };
  },
  watch: {
    show() {
      if (this.fieldsData.id && this.show) {
        this.dataModal = { ...this.fieldsData };
      }
    },
  },
  methods: {
    // give data in fields to parent
    giveData() {
      this.$emit("click", this.dataModal);
    },
    close() {
      resetObjectValues(this.dataModal);
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped></style>
