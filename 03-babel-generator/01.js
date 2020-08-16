// const babel
// import {parse} from '@babel/parser';
// import generate from '@babel/generator';

const { parse } = require('@babel/parser');
const generate = require('@babel/generator').default;

const code = 'class Example {}';
const ast = parse(code);

const output = generate(ast, { /* options */ }, code);

console.log(output);
