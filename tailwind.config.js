/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}", // 根據您的項目結構調整路徑
      "./public/index.html",
      "./src/**/*.{js,jsx,ts,tsx}", // 根據您的項目結構調整路徑
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          customPurple: '#290484', // 添加自定義顏色
        },
      },
    },
    plugins: [],
  };