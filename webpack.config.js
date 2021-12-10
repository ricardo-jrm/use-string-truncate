const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'useStringTruncate',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        use: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
};
