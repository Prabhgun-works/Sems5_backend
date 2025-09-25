// index.js
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// models
const Blog = require('./models/blogs');   // PascalCase preferred
const User = require('./models/users');

// routes
let blogRoutes = require('./Routes/BlogRouter');
let userRoutes = require('./Routes/UserRouter');
let authRoutes = require('./Routes/AuthRouter');

// middleware/auth function (dummy for now)
const postLogin = (req, res, next) => {
  // If you meant authentication middleware, implement JWT verify logic here
  next();
};

// routes mounting
app.use('/api/blogs', postLogin, blogRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// login route to generate JWT token
app.post('/login', (req, res) => {
  const { username } = req.body;
  // In real case validate user with DB
  const token = jwt.sign({ username }, "SECRET_KEY", { expiresIn: "1h" });
  res.json({ token });
});

// db connect
mongoose.connect('mongodb://127.0.0.1:27017/G27DBs')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error("DB connection failed:", err));

// server
app.listen(5556, () => {
  console.log("Server running on http://localhost:5556");
});