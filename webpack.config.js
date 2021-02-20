const path = require('path');
require('fs').writeFileSync('./lib/version.json', `{"version": "${require('./package.json').version}"}`);
module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'JSEncrypt',
    libraryTarget: 'umd',
    libraryExport: 'default',
    // @see https://webpack.js.org/configuration/output/#outputglobalobject
    globalObject: 'this',
    path: path.resolve(__dirname, 'bin'),
    filename: 'jsencrypt.js',
  },
  target: ['es5'],
  mode: 'development',
  performance: { hints: false }
};