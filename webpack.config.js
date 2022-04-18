const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules|server/,
                loader:"babel-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/, 
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: "[name]-[sha1:hash:7].[ext]"
                        }
                    }
                ]
            }, 
            {
                test:/\.(ttf)/, 
                loader:"file-loader"
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader,  'css-loader']
            }, 
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }, 

    plugins:[
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: "public/icon.png"
        }), 
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ], 

    devServer:{
        
        historyApiFallback: true,
    },
    
    node: {
        __dirname: false
    }
};  