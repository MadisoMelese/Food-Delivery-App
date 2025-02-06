import express  from "express";
const router = express.Router();
import MyUserController from '../controller/MyUserController'
import { jwtCheck } from "../middleware/auth";

//    /api/my/user
router.post("/", jwtCheck,  MyUserController.createUser);
router.get("/users", MyUserController.getUsers);
router.get("/:auth0Id", MyUserController.getUserById);
router.put("/:auth0Id", MyUserController.updateUser);
router.delete("/:auth0Id", MyUserController.deleteUser);

export default router;