
const fs = require("fs").promises;
const path = require("path");

fs.readdir(path.resolve(__dirname, "statics")).then(files =>
    files.forEach(file => fs.copyFile(
        path.resolve(__dirname, "statics", path.basename(file)), 
        path.resolve(__dirname, "dist", path.basename(file))
    )));