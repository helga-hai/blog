<template lang="pug">
  // Component template.
  .base-scroll(
    ref="scroll",
    data-base-scroll,
    @scroll="propagateScroll")
    slot
</template>

<script lang="ts">
  import Vue from 'vue';
  import throttle from 'lodash/throttle';

  // Component definition.
  export default Vue.extend({
    // Name of the component.
    name: 'BaseScroll',
    // Methods of the component.
    methods: {
      // Trigger scroll event with throttle.
      propagateScroll: throttle(function (event: unknown): void {
        this.$emit('scroll', event);
      }, 150),
    },
  });
</script>

<style lang="scss" scoped>
  @import '~@stylize/sass-mixin';

  .base-scroll {
    overflow: auto;

    &::-webkit-scrollbar {
      border-radius: 2px;
      @include size($base-scroll-toggle__size);
    }

    &::-webkit-scrollbar-track {
      border-radius: 2px;
      background: $base-scroll__background;
    }

    &::-webkit-scrollbar-thumb {
      background: $base-scroll__background;

      &:hover {
        background: $base-scroll__background;
      }
    }

    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
</style>
