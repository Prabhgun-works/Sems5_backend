const express = require("express");
const router = express.Router();
const Blog = require("../model/blog");
const User = require("../model/user");   // 👈 missing import added
const {postAddUser , getAllUser } = require ("../controller/userController"); 

router.post("/" , postAddUser); 
router.get("/" , getAllUser); 

module.exports = router;   // ✅ export added