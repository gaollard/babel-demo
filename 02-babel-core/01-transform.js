var babel = require("@babel/core");

const sourceCode = `var count = 1`

babel.transform(sourceCode, { ast: true, inputSourceMap: true }, function(err, result) {
  result; // => { code, map, ast }
  console.log(result)
});