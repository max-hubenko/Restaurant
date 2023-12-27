const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // ...
      {
        test: /\.css$/,
        use: [
          'style-loader', // Injects CSS into the DOM via a <style> tag
          'css-loader'    // Interprets `@import` and `url()` like `import/require()` and will resolve them
        ]
      },
    ]
  }
};