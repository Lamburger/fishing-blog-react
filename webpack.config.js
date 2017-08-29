var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        app: ["./client/index.js"]
    },
output: {
path: path.resolve(__dirname, "server/assets"),
filename: "bundle.js"
},
    devServer: {
        contentBase: "./build",
        //host: '192.168.1.5',
        //port: '8080'
    },
    module: {
        loaders:  [{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-0']
                }
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        loader: 'url-loader?limit=10000',
      },
            ]
    }
};
