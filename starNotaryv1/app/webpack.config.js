const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{from: "./src/index.html", to: "index.html"}]
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        compress: true
    },
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "os": false,
            "assert": false,
            "vm": false
        }
    }
};
