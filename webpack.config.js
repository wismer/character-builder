module.exports = {
    entry: "./client/assets/js/app.js.jsx",
    output: {
        path: __dirname,
        filename: "./client/public/js/app.js"
    },
    module: {
      loaders: [
        { test: /\.jsx$|\.js$|\.jsx\.js$/, exclude: /\.\.\/node_modules/, loader: "babel-loader"}
      ]
    }
};