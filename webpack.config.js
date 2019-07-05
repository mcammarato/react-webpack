const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './app.js',
    output: {
        'filename': 'bundle.js',
        'path': path.join(__dirname, 'dist')
    },
    devtool: "source-map", // any "source-map"-like devtool is possible,
    module: { 
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}