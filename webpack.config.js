var path = require('path');

module.exports = {
    entry: "./client/assets/js/app.js.jsx",
    output: {
        path: __dirname,
        filename: "./client/public/js/app.js"
    },
    module: {
      loaders: [
        { test: /\.jsx$|\.js$|\.jsx\.js$/, loader: "babel-loader", include: [path.resolve(__dirname, 'client/assets/js')]}
      ]
    }
};