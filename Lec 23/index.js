const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Blog = require('./models/blogs');
const User = require('./models/users');

let blogRoutes = require('./Routes/BlogRouter');
let userRoutes = require('./Routes/UserRouter');

let authRoutes= require("./Routes/AuthRouter")

// create
app.use('/api/blogs', postLogin,blogRoutes);
app.use('/api/users', userRoutes);
app.use('api/auth',authRoutes);
// Login route to generate JWT token
app.post('/login');


mongoose.connect('mongodb://127.0.0.1:27017/G27DBs')
  .then(() => console.log('Connected!'));

app.listen(5556, () => {
    console.log( "Server is running on http://localhost:5556" );
});