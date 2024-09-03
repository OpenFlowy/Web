const path = require('path');
const fs = require('fs');
const commentJson = require('comment-json');

let tsconfig = commentJson.parse(fs.readFileSync('tsconfig.json', 'utf8'));

// Use the same output destination, as set in the TypeScript configuration
const outDir = tsconfig['compilerOptions']['outDir'];

module.exports = {
  /*
   * We'll probably never use `production` mode, given the conveneince
   * `development` mode provides to the users (debugging, troubleshooting, and
   * extending in their own browser). (TODO:) But consider taking some hints
   * from the Webpack Production guide at
   * https://webpack.js.org/guides/production/
   */
  "mode": "development",
  entry: './src/main.ts',
  devtool: 'source-map',
  devServer: {
    static: outDir,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    /*
     * TODO: Post-GA, consider the file to include the contenthash; see Webpack
     * guide on Caching.
     */
    filename: 'bundle.js',
    path: path.resolve(__dirname, outDir),
  },
};
