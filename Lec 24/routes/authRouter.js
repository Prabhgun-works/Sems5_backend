const express=require("express");
const router = express.Router();

router.post("/Login",postLogin);
module.exports=router;