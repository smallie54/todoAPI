import { Router } from "express";
import { deleteUser, getUser, listUser, newUser, updateUser, userLogin } from "../controllers/userController.js";
import { authCheck, authToken } from "../middleware/authCheck.js";

const router = Router()


router.route('/signup').post(newUser)
router.route('/login').post(userLogin)

// router.route('/:id').get(getUser).delete(deleteUser).put(updateUser)


export default router 