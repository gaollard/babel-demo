// 改变函数参数的例子

import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
  BinaryExpression(path) {
    console.log(path.node.left) // Identifier Node
    console.log(path.node.right) // Identifier Node
    console.log(path.node.operator) // "*"
  }
});