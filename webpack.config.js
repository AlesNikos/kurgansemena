const path = require('path');

module.exports = {
  entry: './src/js/building-js/script.js',
  output: {
    path: path.resolve(__dirname, './src/js/'),
    filename: 'script.js',
  },
}