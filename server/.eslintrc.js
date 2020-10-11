module.exports = {
  env: {
    // 전역변수 지정
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",

    // plugin:prettier/recommended
    // eslint에서 eslint와 prettier의 중복되는 규칙을 비활성화
    // prettier의 규칙을 eslint에 추가
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    // import export 사용
    sourceType: "module",
  },
};
