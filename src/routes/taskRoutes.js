import { Router } from "express";
// import { welcome } from "../controllers/main.js";

import {
  createTask,
  deleteTask,
  getTask,
  listTask,
  updateTask,
} from "../controllers/taskController.js";
import { authCheck, authToken } from "../middleware/authCheck.js";


const router = Router();

router.route("/")
  .get(authCheck, listTask)
  .post(createTask)

router.route('/:id').get(getTask).delete(deleteTask).put(updateTask)




export default router;