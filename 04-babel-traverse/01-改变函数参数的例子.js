// 改变函数参数的例子

import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  }
});

const output = generate(ast, { /* options */ }, code);

console.log(output.code);

// function square(x) {
//   return x * x;
// }