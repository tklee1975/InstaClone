var pkg = require('./package.json'),
    path = require('path'),
    util = require('util'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')
    autoprefixer = require('autoprefixer'),
    csswring = require('csswring');

var DEBUG = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';
var RUN_DEV_SERVER = !(process.env.NO_DEV_SERVER === 'true');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
  DEBUG = true;
}

/**
 * ENTRY POINT
 */
var entryPoint = [];

entryPoint.push(
  'application.jsx'
);

if (DEBUG) {
  entryPoint.push('webpack-dev-server/client?http://localhost:4000');
  entryPoint.push('webpack/hot/dev-server');
}


/**
 * LOADERS
 */
var jsxLoader = [];
var cssLoader = [];
var stylLoader = [];
var htmlLoader = [
  'file-loader?name=[path][name].[ext]',
  'template-html-loader?' + [
    'raw=true',
    'engine=lodash',
    'version=' + pkg.version,
    'title=' + pkg.name,
    'debug=' + DEBUG
  ].join('&')
];
var fileLoader = ['file-loader?name=[path][name].[ext]'];
var jsonLoader = ['json-loader'];

if (DEBUG) {
  jsxLoader.push('react-hot');
  cssLoader.push('style-loader', 'css-loader?sourceMap', 'postcss-loader');
  stylLoader.push('style-loader', 'css-loader?sourceMap', 'postcss-loader', 'stylus-loader?');
  cssLoader = cssLoader.join('!');
  stylLoader = stylLoader.join('!');
}
else {
  stylLoader = ExtractTextPlugin.extract('style-loader',
                ['css-loader', 'postcss-loader', 'stylus-loader?'].join('!'));
  cssLoader = ExtractTextPlugin.extract('style-loader',
                ['css-loader', 'postcss-loader'].join('!'));
}

jsxLoader.push('babel-loader?optional=runtime');


/**
 * PLUGINS
 */
var Plugins = [
  new webpack.optimize.OccurenceOrderPlugin()
];

Plugins.push(new webpack.DefinePlugin({
}));

switch(process.env.NODE_ENV.toLowerCase()) {
  case 'development':
    Plugins.push(new webpack.HotModuleReplacementPlugin());
    break;
  case 'production':
    Plugins.push(new ExtractTextPlugin( path.join('css', util.format('[name]-%s.css', pkg.version)), {
      allChunks: true
    }));
    Plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }));
    Plugins.push(new webpack.optimize.DedupePlugin());
    Plugins.push(new webpack.NoErrorsPlugin());
    break;
};



/**
 * BASE CONFIG
 */

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: entryPoint
  },
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'js/[name]-' + pkg.version + '.js',
    publicPath: '/',
    pathinfo: false
  },
  target: 'web',
  cache: DEBUG,
  debug: DEBUG,
  module: {
    loaders: [
      { test: /\.jsx?$/,    loaders: jsxLoader, exclude: /node_modules/ },
      { test: /\.css$/,     loader: cssLoader },
      { test: /\.styl$/,    loader: stylLoader + '?paths=' + path.resolve(__dirname, 'app/stylus') },
      { test: /\.html?$/,   loader: htmlLoader.join('!') },
      { test: /\.json?$/,   loader: jsonLoader.join('!') },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['web_modules', 'node_modules', './app', path.join(__dirname, 'app/components')]
  },
  plugins: Plugins,
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    hot: true,
    noInfo: true,
    inline: true,
    stats: {
      color: true
    },
    historyApiFallback: true
  },
  postcss: function () {
    return [autoprefixer, csswring]
  }
};
