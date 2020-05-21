module.exports = {
  root: true,
  env: {
    node: true
  },
  //检验语法
  extends: [
    "plugin:vue/essential",
    //  "eslint:recommended", 
    // "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
