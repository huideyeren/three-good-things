<template lang='pug'>
  .card.white-paper
    .card-image
      figure.image
        img(:src="'https://robots.johnlindquist.com/' + person.first_name + '_' + person.last_name")
    .card-content
      .is-size-4 {{person.first_name}} {{person.last_name}}
      button.button.wooden.pointer(@click="select(person.id)") Select
</template>
// **PLEASE NOTE** All "Nuxt Class Components" require at minimum a script tag that exports a default object
<script lang="ts">
import vue from 'vue';
import nuxtClassComponent from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@nuxtClassComponent({})
export default class Card extends vue {
  @Prop() person;
  @Action select;
}
</script>
