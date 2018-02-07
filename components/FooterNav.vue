<template lang="pug">
  footer.footer
    .container
      .content.has-text-centered
        p
          span.bottom-fix 3
          | つのいいこと日記 by 
          a(href='http://huideyeren.info/' target='blank') Iosif Takakura
        p
          | Original author is 
          a(href='http://huideyeren.info/' target='blank') Iosif Takakura
        p
          | The source code is licensed 
          a(href='http://opensource.org/licenses/mit-license.php' target='blank') MIT.
</template>

<style lang='scss'>

span.bottom-fix {
  vertical-align: 2px;  
}

</style>

<script lang='ts'>
import Vue from 'vue'
import Component from 'nuxt-class-component'

export default class FooterNav extends Vue {
}

</script>
