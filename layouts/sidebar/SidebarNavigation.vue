<template lang="pug">
  // Component template.
  .sidebar-navigation__list(data-sidebar-navigation-list)
    NuxtLink.sidebar-navigation__item.sidebar-navigation__item--border(
      :to="'/'",
      active-class="sidebar-navigation__item--active",
      data-sidebar-navigation-item="news")
      | Bitcoin Casino news

    NuxtLink.sidebar-navigation__item.sidebar-navigation__item--border(
      :to="'/'",
      active-class="sidebar-navigation__item--active",
      data-sidebar-navigation-item="articles")
      | Articles and Recommendations

    NuxtLink.sidebar-navigation__item.sidebar-navigation__item--border(
      :to="'/'",
      active-class="sidebar-navigation__item--active",
      data-sidebar-navigation-item="reviews")
      | Game Reviews

    .sidebar-navigation__group.sidebar-navigation__group-lang(
      :class="{ 'sidebar-navigation__group--active': group.lang }",
      data-sidebar-navigation-group="lang")
      span.sidebar-navigation__item.sidebar-navigation__group-toggle(
        :class="{ 'sidebar-navigation__group-toggle--active': group.lang }",
        @click="toggle('lang')",
        data-sidebar-navigation-group-toggle="lang")
        img(
          :src="`/country/${activeLang}.svg`",
          :alt="activeLang",
          draggable="false")
        span.sidebar-navigation__group-toggle-lang
          | {{ activeLang }}

      TheLanguage.sidebar-navigation__group-content.sidebar-navigation__group-content-lang(v-if="group.lang")
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import TheLanguage from '../TheLanguage.vue';

  // Component data
  interface Data {
    group: {
      about: boolean;
      lang: boolean;
    };
  }

  // Single File Component
  export default Vue.extend({
    // Name of the component
    name: 'SidebarNavigation',
    // Deps of the component
    components: {
      // BaseBadge,
      TheLanguage,
    },
    // Data of the component
    data: (): Data => ({
      group: {
        about: false,
        lang: false,
      },
    }),
    // Computed of the component
    computed: {
      ...mapGetters('configs', ['activeLang']),
    },
    // Methods of the component
    methods: {
      // isRouteActive,
      toggle(id: string): void {
        this.group[id] = !this.group[id];
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~@stylize/sass-mixin';

  .sidebar-navigation {
    &__item {
      display: block;
      cursor: pointer;
      position: relative;
      text-transform: uppercase;
      font: $sidebar-navigation-item__font;
      color: $sidebar-navigation-item__color;
      padding: $sidebar-navigation-item__padding;
      @include flex(row flex-start center);

      &--border {
        border-bottom: $sidebar-navigation-item__border;
      }

      &-badge {
        margin: $sidebar-navigation-item-badge__margin;
      }

      @include support-hover {
        &:hover {
          background-color: $sidebar-navigation-item__background--hover;
        }
      }
    }

    &__group {
      user-select: none;

      &-toggle {
        @include after {
          content: '';
          transition: transform 0.3s;
          transform: translate(-100%, -50%);
          background: $sidebar-navigation-item-arrow__background;
          @include absolute(50%, 0);
          @include size($sidebar-navigation-item-arrow__size);
        }

        &-lang {
          text-transform: uppercase;
          padding: $sidebar-navigation-lang-toggle__padding;
        }

        &--active {
          @include after {
            transform: translate(-100%, -50%) rotate(180deg);
          }
        }
      }

      &-content {
        padding: $sidebar-navigation-group-content__padding;

        &-lang {
          background: $sidebar-navigation-lang-content__background;
        }
      }

      &-item {
        display: block;
        font: $sidebar-navigation-sub-item__font;
        color: $sidebar-navigation-sub-item__color;
        padding: $sidebar-navigation-sub-item__padding;

        @include support-hover {
          &:hover {
            background-color: $sidebar-navigation-sub-item__background--hover;
          }
        }
      }
    }

    &__item,
    &__group-item {
      &--active {
        border-left: none;
        border-right: $sidebar-navigation-item__border--active;
      }
    }
  }
</style>
