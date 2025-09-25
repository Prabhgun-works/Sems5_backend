
const router=express.Router();
const User = require("../model/user"); 
let {postAddUsers,getAllUsers,getOneUser}=require("../controller/UserController");
// create user
router.post("/", postAddUsers);
router.get("/", getAllUsers);

// read single user
router.get("/:id", getOneUser);

module.exports=router;