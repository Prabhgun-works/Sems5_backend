const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const authRoutes = require("./routes/Auth");

app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Error:", err));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} `);

});