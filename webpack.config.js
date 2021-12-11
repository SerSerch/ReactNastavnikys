const path = require('path'),
  minimist = require('minimist'),
  HTMLplugin = require('html-webpack-plugin'),
  CopyPlugin = require('copy-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  args = minimist(process.argv, {
    alias: { name: 'n', }
  }),
  pathName = args.name || 'src',
  buildName = args.name ? `build-${args.name}` : 'dist',
  isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  // куда смотреть, точка входа
  entry: {
    main: path.resolve(__dirname, pathName, 'index.js'),
  },
  // куда собирать билд
  output: {
    path: path.resolve(__dirname, buildName),
    filename: 'bundle.[hash].js',
    publicPath: '/',
    clean: true,
  },
  // настройка локального сервера
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, buildName),
      watch: true,
    },
    watchFiles: [`${pathName}/**/*`],
    //настройка прокси json-server
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
        secure: false,
      }
    }
  },
  // настройка всех загрузчиков (какими лоадерами обрабатывать файлы)
  module: {
    rules: [
      {
        test: /\.jsx?$/, // регулярное выражение - совпадения имени файла
        exclude: /node_modules/, // регулярное выражение - игнорировать если в имени есть это
        use: {
          loader: 'babel-loader' // какой лоадер использовать
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ]
  },
  // алиасы для коротких путей к файлам
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, pathName, 'assets'),
      images: path.resolve(__dirname, pathName, 'assets', 'images'),
      styles: path.resolve(__dirname, pathName, 'styles'),
      pages: path.resolve(__dirname, pathName, 'pages'),
      hoc: path.resolve(__dirname, pathName, 'hoc'),
      containers: path.resolve(__dirname, pathName, 'containers'),
      components: path.resolve(__dirname, pathName, 'components'),
      contexts: path.resolve(__dirname, pathName, 'contexts'),
      store: path.resolve(__dirname, pathName, 'store'),
      actions: path.resolve(__dirname, pathName, 'store', 'actions'),
      reducers: path.resolve(__dirname, pathName, 'store', 'reducers'),
      types: path.resolve(__dirname, pathName, 'store', 'types'),
      constants: path.resolve(__dirname, pathName, 'constants'),
      configs: path.resolve(__dirname, pathName, 'configs'),
      services: path.resolve(__dirname, pathName, 'services'),
      navigation: path.resolve(__dirname, pathName, 'navigation'),
      '@': path.resolve(__dirname, pathName),
    }
  },
  // оптимизация, минификация билда
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // подключение плагинов
  plugins: [
    new HTMLplugin({
      template: path.resolve(__dirname, pathName, 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    // копировать любую директорию
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, pathName, 'favicons'),
    //       to: path.join(__dirname, buildName),
    //     },
    //   ],
    // }),
  ],
};
