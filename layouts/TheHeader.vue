<template lang="pug">
  // Component template
  header.header(data-header)
    .header__offset
    .header__container
      .header__main
        .header__toggle(
          v-if="$mq !== 'xs'",
          @click="$emit('toggleSidebar')",
          data-header-toggle)
        BaseLogo.header__logo(data-header-logo)
</template>

<script lang="ts">
  import BaseLogo from '@/components/base/BaseLogo.vue';

  // Component definition.
  export default {
    // Name of the component.
    name: 'TheHeader',
    // Deps of the component
    components: {
      BaseLogo,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@stylize/sass-mixin';

  .header {
    $selector: &;

    &__offset,
    &__container {
      height: $header__height;

      @include media('>=sm') {
        height: $header__height--r10;
      }
    }

    &__container {
      background: $header__background;
      @include flex(column);
      @include fixed(0 0 null 0 11001);
    }

    &__main,
    &__content,
    &__secondary {
      flex-grow: 1;
      @include flex(row space-between);
    }

    &__content {
      @include media('<sm') {
        @include flex(row flex-end);
      }
    }

    &__main {
      padding: $header__padding;

      @include media('<sm') {
        #{$selector}__shortcut,
        #{$selector}__toggle {
          display: none;
        }
      }
    }

    //&__secondary {
    //  min-height: $header-secondary__min-height;
    //  background: $header-secondary__background;
    //
    //  @include media('>=sm') {
    //    display: none;
    //  }
    //
    //  ::v-deep .header-shortcut__nav-prev,
    //  ::v-deep .header-shortcut__nav-next {
    //    @include before {
    //      box-shadow: 0 0 15px 12px $header-secondary__background;
    //    }
    //  }
    //}

    &__toggle {
      cursor: pointer;
      align-self: center;
      margin: $header-toggle__margin;
      min-width: $header-toggle__size;
      background-repeat: no-repeat;
      background-position: center;
      background-image: $header-toggle__background;
      @include size($header-toggle__size);

      @include support-hover {
        &:hover {
          background-image: $header-toggle__background--hover;
        }
      }
    }

    &__logo {
      display: none;

      @include media('>=360px') {
        @include flex(row);
        margin: $header-logo__margin;
      }

      &::v-deep .base-logo__text {
        display: none;

        @include media('>=md') {
          display: block;
        }
      }
    }

    &__shortcut {
      flex: 1 1 0;
      margin-right: 16px;
      @include flex(row flex-start stretch);
    }
  }
</style>
