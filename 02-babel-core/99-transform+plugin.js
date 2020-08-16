var babel = require("@babel/core");

const sourceCode = `var count = 1`
const options = {
  ast: true, // https://babeljs.io/docs/en/options#ast
  
}

babel.transform(sourceCode, {
 }, function(err, result) {
  result; // => { code, map, ast }
  console.log(result.ast)
});