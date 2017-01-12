module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "installedESLint": true,
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "json"
  ],
  "rules": {

    "indent": [
      "error",
      2
    ],
    "keyword-spacing": "error",
    "linebreak-style": "error",
    "quotes": [
      "error",
      "single"
    ],
    "semi": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-console":0,
    "space-before-blocks":0,
    "quotes":0,
    "no-unused-vars":0,
    "no-bitwise": 2,
    "no-eq-null": 2,
    "no-extra-parens": 0,
    "no-floating-decimal": 2,
    "no-inner-declarations": [2, "both"],
    "no-lonely-if": 2,
    "no-multiple-empty-lines": [2, {"max": 3}],
    "no-self-compare": 2,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "no-unused-expressions": 0,
    "no-void": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": [1, {"properties": "never"}],
    "consistent-return": 0,
    "comma-style": [2, "last"],
    "complexity": [1, 12],
    "func-names": 0,
    "guard-for-in": 2,
    "max-len": [0, 120, 4],
    "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
    "keyword-spacing": [2, {"before": true, "after": true}],
    "array-bracket-spacing": [2, "never"],
    "space-in-parens": [2, "never"],
    "strict": [0],
    "valid-jsdoc": 2,
    "wrap-iife": [2, "any"],
    "yoda": [1, "never"]
  },
};
