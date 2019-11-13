const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  pages: path.join(__dirname, 'src/pages'),
  static: path.join(__dirname, 'static'),
  build: path.join(__dirname, 'build'),
  buildAssets: path.join(__dirname, 'build/assets')
};

module.exports = env => {
  const config = {
    entry: `${PATHS.src}/index.js`,
    output: {
      path: PATHS.buildAssets,
      filename: 'index.js'
    },
    resolve: {
      modules: ['node_modules', PATHS.src]
    },
    module: {
      rules: [
        {
          test: /\.twig$/,
          loader: 'twig-loader',
          options: {
            twigOptions: {
              namespaces: {
                components: '../../components',
                containers: '../../containers',
                elements: '../../elements',
                pages: '../../pages'
              }
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.p?css$/,
          use: [
            env.production ? MiniCssExtractPlugin.loader : { loader: 'style-loader' },
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'postcss-loader' }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|woff2?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
    plugins: [
      ...fs
        .readdirSync(PATHS.pages)
        .map(name => {
          const stat = fs.statSync(path.join(PATHS.pages, name));

          if (stat.isDirectory()) {
            return new HtmlWebpackPlugin({
              filename: `${env.production ? '../' : ''}${name}.html`,
              template: `${PATHS.pages}/${name}/${name}.js`
            });
          }
        })
        .filter(item => !!item)
    ],
    devServer: {
      contentBase: PATHS.static,
      compress: true,
      hot: true,
      port: 3000,
      open: true
    }
  };

  if (env.production) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    );
  } else {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
