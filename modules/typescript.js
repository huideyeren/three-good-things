module.exports = function tsConfig() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts');
  // Extend build
  this.extendBuild((config) => {
    const tsLoader = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    };
    // Add TypeScript Lint
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'tslint-loader',
      enforce: 'pre',
      options: {
        configFile: 'tslint.json',
        tsConfigFile: 'tsconfig.json',
      },
    });
    // Add TypeScript loader
    config.module.rules.push(Object.assign(
      {
        test: /((client|server)\.js)|(\.tsx?)$/,
      },
      tsLoader,
    ));
    // Add TypeScript loader for vue files
    const vueLoader = config.module.rules.find(rule => (rule.loader === 'vue-loader'));
    vueLoader.options.loaders.ts = tsLoader;
    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts');
    }
  });
};
