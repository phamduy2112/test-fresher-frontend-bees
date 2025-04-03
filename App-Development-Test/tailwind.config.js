module.exports = {
    content: [
      "./index.html", // Đảm bảo rằng Tailwind sẽ tìm kiếm trong tệp HTML của bạn
      "./src/**/*.{js,ts,jsx,tsx}", // Bao gồm tất cả các file JS/TS/JSX/TSX trong thư mục src
    ],
    
    theme: {
      extend: {
        // Bạn có thể thêm hoặc thay đổi các theme ở đây
        colors: {
          primary: '#1DA1F2', // Ví dụ, thêm màu sắc tùy chỉnh
          secondary: '#FF9900',
        },
      },
    },
    plugins: [],
  }
  