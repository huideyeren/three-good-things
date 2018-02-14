<template lang="pug">
  nav.navbar.wooden(role="navigation",aria-label="main navigation")
    .navbar-brand
      .navbar-item
        a(href='/')
          span.icon: i.fas.fa-book
          | みんなではげます
          span.bottom-fix-2px 3
          | つのいいこと日記
      button.button.navbar-burger.wooden(data-target="navMenu")
        span
        span
        span
    #navMenu.navbar-menu.wooden
      .navbar-start
        a.navbar-item
          | test1
      .navbar-end
        div(v-if='user')
          .navbar-item
            .media
              figure.media-left
                img.image.is-36x36(:src="user.picture")
              .media-content
                .content
                  p {{user.name}}
              button.button.wooden.media-right(@click='signOut') ログアウト
        div(v-else)
          .navbar-item
            button.button.wooden(@click='callAuth') ログイン
</template>

<style lang='scss' scoped>
.navbar-brand a {
  color: $white;
  text-decoration: none;
}
</style>

<script lang='ts'>
import vue from 'vue';
import nuxtClassComponent from 'nuxt-class-component';
import { Getter, Action } from 'vuex-class';

@nuxtClassComponent({})
export default class HeaderNavVue extends vue {
  @Getter user;
  @Action callAuth;
  @Action signOut;

  constructor() {
    super();
    
    if (typeof window !== 'undefined') {
      // Get all "navbar-burger" elements
      document.addEventListener('DOMContentLoaded', () => {
        const $navbarBurgers 
          = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(($el) => {
            $el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = $el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle('is-active');
              if ($target !== null) {
                $target.classList.toggle('is-active');
              }
            });
          });
        }
      });
    }
  }
}

</script>