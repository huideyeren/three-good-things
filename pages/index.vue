<template lang='pug'>
  section.pa4
    .white-paper.pa4
      h1 3つのいいこと日記
    .flex.flex-wrap.ph2.justify-between.white-paper
      div(key='person.id' v-for='person in people')
        Card(:person='person')
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'nuxt-class-component'
import Card from '~/components/Card.vue'
import { State, Getter } from 'vuex-class'

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State selected
  @State people
  @Getter selectedPerson
}
</script>
