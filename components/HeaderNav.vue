<template lang="pug">
  nav.navbar(role="navigation",aria-label="main navigation")
    .navbar-brand
      a(href='/')
        span.icon: i.fas.fa-book
        span.bottom-fix 3
        | つのいいこと日記
      button.button.navbar-burger
        span test1
        span test2

    .navbar-menu
      p
        | test1
</template>

<style lang='scss' scoped>

</style>

<script lang='ts'>
import Vue from 'vue'
import Component from 'nuxt-class-component'

export default class HeaderNav extends Vue {
}

</script>