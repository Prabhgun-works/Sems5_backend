const express = require("express");
const router = express.Router();
const Blog = require("../model/blog");
const User = require("../model/user");   // 👈 missing import added

let{postAddBlog , getAllBlog ,getOneBlog, deleteOneBlog} = require("../controller/blogController"); 
// CREATE blog
router.post("/",postAddBlog); 
router.delete("/:blogId",deleteOneBlog); 
router.get("/", getAllBlog ); 
router.get("/:id", getOneBlog); 

module.exports = router;   // ✅ export added