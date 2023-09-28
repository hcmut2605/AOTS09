const mongoose = require("mongoose");
const express = require("express");
const app = express();
const connectDB = require("../config/dbConn");
const cors = require("cors");
const corsOptions = require("../config/corsOption");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 3500;

connectDB();  // tạo kết nối tới database
app.use(cors(corsOptions)); // sử dụng middleware cors để xử lý CORS cho các yêu cầu.
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //  cho phép ứng dụng đọc dữ liệu từ yêu cầu HTTP dưới dạng dữ liệu form hoặc JSON.
app.use(cookieParser()); // sử dụng middleware cookie-parser để xử lý cookie trong yêu cầu.

app.use("/room", require("../routes/api/room"));
app.use("/service", require("../routes/api/service"));
app.use("/renter", require("../routes/api/renter"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});