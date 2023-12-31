const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { plugins: ['react-refresh/babel']},
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        // 自動でブラウザを開く
        open: true,
        //開くポート
        port: 9000,
        // HMRの有効化(webpack4系からデフォルトで有効化)
        hot: true,
        //配信するコンテンツのルートディレクトリ
        static: [
            {
                directory: path.join(__dirname, "dist"),
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            hash: true,
        }),
        new ReactRefreshWebpackPlugin()
    ]
};