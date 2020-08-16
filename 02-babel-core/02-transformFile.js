const path = require("path")
const babel = require("@babel/core");

babel.transformFile(path.resolve(__dirname, './src/index.js'), {}, function(err, result) {
  result; // => { code, map, ast }
  console.log(result)
});