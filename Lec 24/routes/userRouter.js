
// userRouter.js
const express = require("express");
const router = express.Router();
const { postAddUsers, getAllUsers, getOneUser } = require("../controllers/userController");

// create user
router.post("/", postAddUsers);

// get all users
router.get("/", getAllUsers);

// get one user by id
router.get("/:id", getOneUser);

module.exports = router;