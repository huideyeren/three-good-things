<template lang="pug">
  .wrapper
    header-nav
    .container
      nuxt
    footer-nav
</template>

<script lang="ts">
import HeaderNav from '~/components/HeaderNav.vue'
import FooterNav from '~/components/FooterNav.vue'

export default {
  components: { HeaderNav, FooterNav }
}
  
</script>