// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;

const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // 使用正確的插件名稱
    autoprefixer: {},
  },
};

export default config;