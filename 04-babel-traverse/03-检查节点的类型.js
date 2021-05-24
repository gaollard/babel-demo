// 改变函数参数的例子

import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';
import helpers from '@babel/helpers';
import * as t from '@babel/types';

const code = `function square(n) {
  return n * fn(n);
}`;

const ast = parser.parse(code);

traverse(ast, {
  BinaryExpression(path) {
    // path.node.left: Identifier
    // path.node.right: CallExpression
    if(t.isIdentifier(path.node.left)) {
      console.log(path.node)
    }
  }
});