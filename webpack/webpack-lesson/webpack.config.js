// module.exports = {
//     entry:{
//     mainCalc:'./src/index.js',
// }};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = (env)=>{
    return{
        mode: env.mode ?? 'development',
        entry:{
        main: path.resolve(__dirname,'src','index.ts')        
            },
        output: {
            path: path.resolve(__dirname, 'build'),            
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname,'public','index.html') })
           
        ],
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
    }
      
   };