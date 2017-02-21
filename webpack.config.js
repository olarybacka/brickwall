const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
module.exports = {  
    entry: "./src/app/main.ts",
    output: {
        filename: "dist/bundle.js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            server: { baseDir: [""] }
        })
    ]
};