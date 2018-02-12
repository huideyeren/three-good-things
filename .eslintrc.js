module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
      browser: true,
      node: true
    },
    extends: 'airbnb',
    // *.vue ファイルを lint するために必要
    plugins: [
      'html'
    ],
    // ここにカスタムルールを追加します
    rules: {},
    globals: {}
  }