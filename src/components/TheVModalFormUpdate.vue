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
              v-model="dataModal.url"
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
      <span>Добавить</span>
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
        url: "",
      },
    };
  },
  watch: {
    show() {
      if (this.fieldsData.id && this.show) {
        // fillModalFormForEdit(this.dataModal, this.fieldsData);
        this.dataModal.url = this.fieldsData.url;
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
