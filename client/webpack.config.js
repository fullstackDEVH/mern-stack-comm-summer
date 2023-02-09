const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  module: {
    rules: [
      { // install thêm url-loader và file-loader để xử dụng hình ảnh png, jpg, svg
        test: /\.(png|jpg|gif|svg)$/i,
        exclude: /node_modules/,
        use: ['url-loader']
      },
      {
        test: /\.(js|jsx)$/, // Sẽ sử dụng babel-loader cho những file .js, jsx
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
  ]
};