import postcssCustomProperties from 'postcss-custom-properties';
import autoprefixer from 'autoprefixer';
import postcssSorting from 'postcss-sorting';
import cssnano from 'cssnano';

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  head: {
    title: 'three-good-things',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    { src: 'bulma', lang: 'sass' },
    'tachyons/css/tachyons.min.css',
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: '~/assets/css/fonts.scss', lang: 'scss' },
  ],
  build: {
    vendor: ['axios', 'gsap', 'vuex-class', 'nuxt-class-component'],
    postcss: [
      postcssCustomProperties({
        warnings: false,
      }),
      autoprefixer({
        browsers: ['last 3 versions'],
      }),
      postcssSorting(),
      cssnano(),
    ],
    extend(config, options) {
      return Object.assign({}, config, {
        devtool: 'source-map',
      });
    },
  },
  modules: [
    '~/modules/typescript.js',
    '@nuxtjs/font-awesome',
    [
      'nuxt-sass-resources-loader', { resources: ['./assets/css/variables.scss', 'bulma'] },
    ],
  ],
  devtool: 'source-map',
};
