<template lang='pug'>
  section.white-paper
    h1.is-size-2
      | みんなではげます
      span.bottom-fix-5px 3
      | つのいいこと日記
    .wrapper
      .columns.is-3.padding-75rem
        div.column.is-centered(key='person.id' v-for='person in people')
          card-vue(:person='person')
</template>

<script lang='ts'>
import vue from 'vue';
import nuxtClassComponent from 'nuxt-class-component';
import CardVue from '~/components/Card.vue';
import { State, Getter } from 'vuex-class';

@nuxtClassComponent({
  components: {
    CardVue,
  },
})
export default class extends vue {
  @State people;
}
</script>
