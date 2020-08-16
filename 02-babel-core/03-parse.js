var babel = require("@babel/core");

const sourceCode = `var count = 1`

babel.parse(sourceCode, function(err, result) {
  console.log(JSON.stringify(result))
});