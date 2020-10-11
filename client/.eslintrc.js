module.exports = {
  env: {
    // 전역변수 지정
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",

    // plugin:prettier/recommended
    // eslint에서 eslint와 prettier의 중복되는 규칙을 비활성화
    // prettier의 규칙을 eslint에 추가
    "plugin:prettier/recommended",

    // eslint-plugin-react에서 추천하는 것들
    "plugin:react/recommended",

    // eslint-plugin-react-hooks에서 추천하는 것들
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      // jsx 문법 사용
      jsx: true,
    },
    ecmaVersion: 12,
    // import export 사용
    sourceType: "module",
  },
  // eslint-plugin-react
  plugins: ["react", "react-hooks"],
};
