module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    endOfLine: "auto",
    camelcase: "off",
    "prettier/prettier": "error",
    "semi": false,
    "singleQuote": true
  },
};
