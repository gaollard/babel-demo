var babel = require("@babel/core");

const res = babel.loadPartialConfig({
  options: babel.loadOptions({
    "plugins": ["@babel/plugin-transform-arrow-functions"]
  })
})

console.log(res)