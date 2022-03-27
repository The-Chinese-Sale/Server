const router=require("express").Router();
const UserController=require("../controllers/user.controller");

router.post("",UserController.addUser);
router.get("/:id",UserController.SelectItemsuser);
router.post("addOrderToUser",UserController.AddOrderToUser);

module.exports=router;