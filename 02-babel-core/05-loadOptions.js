var babel = require("@babel/core");

const res = babel.loadOptions({
  "plugins": ["@babel/plugin-transform-arrow-functions"]
})

console.log(res)