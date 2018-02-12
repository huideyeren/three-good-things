<template lang="pug">
  .wrapper
    header-nav-vue
    main.container
      nuxt
    footer.footer.wooden
      .container
        .content.has-text-centered
          p
            | みんなではげます
            span.bottom-fix-2px 3
            | つのいいこと日記 by 
            a(href='http://huideyeren.info/' target='blank') Iosif Takakura
          p
            | Original author is 
            a(href='http://huideyeren.info/' target='blank') Iosif Takakura
          p
            | The source code is licensed 
            a(href='http://opensource.org/licenses/mit-license.php' target='blank') MIT.
</template>

<script lang="ts">
import HeaderNavVue from '~/components/HeaderNav.vue';

export default {
  components: { HeaderNavVue },
};
  
</script>