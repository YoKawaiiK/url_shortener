<template>
  <div v-show="show" class="modal_window" @click="close">
    <div class="modal_window__modal_content" @click.stop>
      <header class="modal_window__header">
        <div class="header__close_button" tabindex="0" @click="close">
          <span class="icon is-small">
            <font-awesome-icon :icon="['fas', 'window-close']" />
          </span>
        </div>
        <div class="header__header_title">
          <slot name="header-title-text"> </slot>
        </div>
      </header>

      <main class="modal_window__main">
        <slot name="modal-main"> </slot>
      </main>

      <footer class="modal_window__footer">
        <button class="footer__footer_button" @click.prevent="giveData">
          <slot name="footer-button-text"></slot>
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "VModalForm",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    giveData() {
      this.$emit("give-data");
    },
  },
};
</script>
<style lang="scss" scoped>
hr {
  background-color: $primary;
  border: none;
  width: 1px;
  height: 50px;
}
.modal_window {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .modal_window__modal_content {
    z-index: 100;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 469px;
    background: $v-modal-form--bg;
    box-shadow: 10px 27px 42px $v-modal-form--shadow-color;
    border-radius: 12px;
    .modal_window__header {
      padding-top: 31px;
      .header__header_title {
        text-align: center;
        display: block;
        font-family: $font-family;
        font-weight: $font-weight-bold;
        font-size: $v-modal-form--header-title--font-size;
      }
      .header__close_button {
        position: absolute;
        display: block;
        right: 10px;
        top: 12px;
        height: 18px;
        width: 18px;
        font-weight: $font-weight-medium;
        line-height: 18px;
        // border: 3px solid $--vmodal--close-button--color;
        // color: $--vmodal--close-button--color;
        border-radius: 4px;
        // font-size: $--vmodal--close-button--font-size;
        text-align: center;
        transition: all 0.2s;
        cursor: pointer;
        &:focus {
          color: $primary-focus;
          border-color: $primary-focus;
        }
        &:hover {
          border-color: $warning;
          color: $warning;
        }
        &:active {
          color: $danger;
          border-color: $danger;
        }
      }
    }
    .modal_window__main {
      width: 100%;
      padding: 20px 20px 0;
    }
    .main__fields {
      display: flex;
      justify-content: space-around;
      margin: 33px 30px 0px;
    }
  }
  .modal_window__footer {
    margin: 18px 0px 0px;

    .footer__footer_button {
      background: $primary;
      border-radius: 0px 0px 12px 12px;
      border-color: transparent;
      width: 100%;
      font-family: $font-family;
      font-style: normal;
      font-weight: $font-weight-bold;
      font-size: $v-modal-form--footer-button--font-size;
      height: 53px;
      color: $color-on-primary;
      transition: all 0.2s;
      cursor: pointer;
      outline: none;

      @mixin button-highligth {
        color: $color-on-primary-ligth;
        background-color: $primary-light;
      }
      &:focus {
        box-shadow: 0 0 0 1px $shadow-color;
        @include button-highligth;
      }
      &:hover {
        @include button-highligth;
      }
      &:active {
        margin: 1px 1px 0;
        box-shadow: -1px -1px 1px $shadow-color-active;
      }
    }
  }
}
</style>
