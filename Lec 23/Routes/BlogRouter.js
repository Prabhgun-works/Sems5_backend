const express = require("express");
const router = express.Router();
const Blog = require("../models/blogs");
let {postAddBlog,getAllBlog,getOneBlog,deleteOneBlog} = require("../controller/blogController");


router.post("/", postAddBlog);
router.delete("/:id", deleteOneBlog);
router.get("/", getAllBlog);
router.get("/:id",getOneBlog);

module.exports = router;