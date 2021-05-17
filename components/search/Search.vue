<template lang="pug">
  // Component template.
  .search(data-game-search)
    SearchField.search__field(
      :term="term",
      :close="active",
      @openField="$emit('openField', $event)",
      @input="loadByTerm")
</template>

<script lang="ts">
  import Vue from 'vue';
  // Component data.
  interface Data {
    term: string;
    total: number;
    limit: number;
    result: [];
    active: boolean;
    recommend: [];
    initLoading: boolean;
  }

  // Single File Component.
  export default Vue.extend({
    // Name of the component.
    name: 'Search',
    // Data of the component.
    data: (): Data => ({
      term: '',
      total: 0,
      limit: 20,
      result: [],
      active: false,
      recommend: [],
      initLoading: false,
    }),
    // // Props of the component.
    props: {
      replace: {
        type: Boolean,
      },
    },
    // Computed of the component.
    computed: {
      hasMore(): boolean {
        return this.total > this.limit && this.result?.length < this.total;
      },
    },
    // Methods of the component.
    methods: {
      loadByTerm(term: string): void {},
    },
  });
</script>

<style lang="scss" scoped>
  @import '~@stylize/sass-mixin';

  .search {
    position: relative;
    width: $search__width;

    &__result {
      width: $search-result__width;
      margin: $search-result__margin;
      z-index: $search-result__z-index;
      @include absolute(100%, 0, null, 0);
    }
  }
</style>
