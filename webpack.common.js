const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
	  {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
		  loader: 'babel-loader',
		  options: {
            presets: [[
			  '@babel/preset-env', {
                targets: {
				  esmodules: true,
                },
			  }],
			  '@babel/preset-react'],
		  },
        },
	  },
	  {
        test: [/\.s[ac]ss$/i, /\.css$/i, /\.s?css$/],
        use: [
		  // Creates `style` nodes from JS strings
		  'style-loader',
		  // Translates CSS into CommonJS
		  'css-loader',
		  // Compiles Sass to CSS
		  'sass-loader',
          'postcss-loader',
        ],
	  },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
	  '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};
