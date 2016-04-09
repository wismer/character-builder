module.exports = {
    entry: "./app/assets/js/app.js.jsx",
    output: {
        path: __dirname,
        filename: "./app/public/js/app.js"
    },
    module: {
      loaders: [
        { test: /\.jsx$|\.js$/, exclude: /\.\.\/node_modules/, loader: "babel-loader"}
      ]
    }
};