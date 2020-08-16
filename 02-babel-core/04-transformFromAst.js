var babel = require("@babel/core");

const sourceCode = `var count = 1`

babel.parse(sourceCode, function(err, result) {
  if (err) {
    console.log(err);
    return;
  }

  // babel.transformFromAst(result, function(err, res) {
  //   console.log(res) // res === JSON.string(result)
  // })

  babel.transformFromAst(result, undefined, { ast: true }, function(err, res) {
    console.log(res)
  })
});