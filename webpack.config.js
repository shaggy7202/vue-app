var path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, './frontend/dist/'),
    filename: "bundle.js"
  },
    module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
     plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
}
