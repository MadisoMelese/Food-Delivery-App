import express  from "express";
const router = express.Router();
import MyUserController from '../controller/MyUserController'

//    /api/my/user
router.post("", MyUserController.createUser);
router.get("", MyUserController.getUsers);
router.get("/:auth0Id", MyUserController.getUserById);
router.put("", MyUserController.updateUser);
router.delete("/:auth0Id", MyUserController.deleteUser);

export default router;