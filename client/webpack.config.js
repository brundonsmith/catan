const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "babel-loader",
            }
        ]
    },
    resolve: {
        modules: ["node_modules",path.resolve(__dirname, "src")],
        // directories where to look for modules (in order)
        extensions: [".js", ".json", ".jsx"],
    }
}